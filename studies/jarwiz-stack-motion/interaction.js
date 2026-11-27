const cards=window.selectionCards,byId=new Map(cards.map(c=>[c.id,c])),app=document.querySelector('#app'),canvas=document.querySelector('#canvas'),sources=document.querySelector('#sources'),composer=document.querySelector('#composer'),prompt=document.querySelector('#prompt'),region=document.querySelector('#context-region'),stack=document.querySelector('#stack-control'),popover=document.querySelector('#context-popover'),list=document.querySelector('#context-list'),scope=document.querySelector('#scope'),stackGroup=document.querySelector('#stack-group'),previews=document.querySelector('#stack-previews'),status=document.querySelector('#review-status'),send=document.querySelector('#send');
const closeIcon='<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 4 8 8m0-8-8 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',checkIcon='<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m3 8 3 3 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
let selected=new Set(cards.slice(0,[1,2,5].includes(Number(new URLSearchParams(location.search).get('count')))?Number(new URLSearchParams(location.search).get('count')):5).map(c=>c.id)),variant='top',busy=false,timer=null,hot=null;const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for(const c of cards){const el=document.createElement('div');el.className='source tl-shape';el.dataset.source=c.id;el.dataset.shapeId=c.id;el.setAttribute('role','option');el.setAttribute('aria-label',c.title);el.tabIndex=0;el.innerHTML=`<span class="source-title">${esc(c.title)}</span><div class="tl-html-container" inert>${c.html}</div><span class="source-check" aria-hidden="true">${checkIcon}</span>`;sources.append(el);const root=el.querySelector('.tl-html-container').firstElementChild;root.style.removeProperty('outline');root.style.removeProperty('outline-offset');el.addEventListener('click',e=>{if(drag?.moved)return;changeCard(c.id,e.shiftKey||e.target.closest('.source-check')||innerWidth<650)});el.addEventListener('keydown',e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();changeCard(c.id,true)}});el.addEventListener('mouseenter',()=>highlight(c.id));el.addEventListener('mouseleave',()=>highlight(null));}
function highlight(id){hot=id;for(const el of document.querySelectorAll('[data-source],[data-context]'))el.classList.toggle('is-hot',el.dataset.source===id||el.dataset.context===id)}
let arranging=false,arrangement=0;
const flightLayer=document.createElement('div');flightLayer.className='stack-flight-layer';flightLayer.setAttribute('aria-hidden','true');composer.append(flightLayer);
const flights=new Map();let motionAnimations=[];
function freezeMotion(){
 arrangement++;
 // Read every current pose before cancelling, so a reversed transition starts
 // exactly where it was drawn in the preceding frame.
 const poses=[...flights.values()].map(el=>({el,transform:getComputedStyle(el).transform,opacity:getComputedStyle(el).opacity}));
 motionAnimations.forEach(a=>a.cancel());motionAnimations=[];
 for(const {el,transform,opacity} of poses){el.style.transform=transform;el.style.opacity=opacity}
}
function clearFlights(){flightLayer.replaceChildren();flights.clear();list.style.visibility='';arranging=false;popover.classList.remove('is-arranging')}
function stackOrigins(){return [...previews.children].map(el=>{const m=new DOMMatrixReadOnly(getComputedStyle(el).transform);return{id:el.dataset.context,rect:el.getBoundingClientRect(),width:el.offsetWidth,height:el.offsetHeight,angle:Math.atan2(m.b,m.a)*180/Math.PI}})}
function flightPose(rect,angle=0,width=48,height=60){const r=flightLayer.getBoundingClientRect();return `translate(${rect.x+rect.width/2-r.x-24}px,${rect.y+rect.height/2-r.y-30}px) rotate(${angle}deg) scale(${width/48},${height/60})`}
function deckPose(origins,open){
 if(open){const o=origins.at(-1);return flightPose(o.rect,o.angle,o.width,o.height)}
 const el=previews.lastElementChild,style=getComputedStyle(el),r=previews.getBoundingClientRect(),s=window.stackMotion,layer=Number(style.getPropertyValue('--layer')),tilt=Number(style.getPropertyValue('--tilt')),lift=el.matches(':hover')?-s.hoverLift:0;
 return flightPose({x:r.x+2+layer*s.idleSpacing,y:r.y+5+lift,width:34,height:42},tilt*s.idleFan,34,42);
}
function setStackTiming(open){const s=window.stackMotion;stackGroup.style.setProperty('--stack-duration',(open?s.openDuration:s.closeDuration)+'ms');stackGroup.style.setProperty('--stack-ease',open?window.stackEase(s.openEase,s.curve):window.stackEase(s.closeEase));}
function transitionStack(open,{immediate=false}={}){
 if(open&&!selected.size)return;
 const wasVisible=!popover.hidden,interrupted=arranging;
 if(!immediate&&interrupted&&stack.getAttribute('aria-expanded')===String(open))return;
 const origins=stackOrigins();freezeMotion();const run=arrangement;
 setStackTiming(open);stack.setAttribute('aria-expanded',String(open));stackGroup.classList.toggle('is-open',open);
 if(immediate||reduced.matches||!selected.size||!open&&!wasVisible){popover.hidden=!open;clearFlights();if(open){placeComposer();positionDockLabels()}return}
 popover.hidden=false;
 if(open&&!wasVisible)list.scrollTop=0;
 placeComposer();
 const s=window.stackMotion,easing=open?window.stackEase(s.openEase,s.curve):window.stackEase(s.closeEase),entries=[...list.children];
 arranging=true;popover.classList.add('is-arranging');list.style.visibility='hidden';
 // Each link is a child behind the preceding card. Relative motion creates
 // a physical accordion: no independent flights, fades, or crossing layers.
 const chain=[...entries].reverse(),identity='translate(0px,0px) rotate(0deg) scale(1)',deck=deckPose(origins,open);
 let parent=flightLayer,parentRect=null;
 const poses=chain.map((entry,i)=>{
  const id=entry.dataset.context,rect=entry.getBoundingClientRect();let el=flights.get(id);
  if(!el){
   el=document.createElement('div');el.className='stack-flight stack-link';el.dataset.chainIndex=String(i);
   const preview=entry.querySelector('.entry-preview').cloneNode(true);preview.querySelector('button')?.remove();el.append(preview);parent.append(el);flights.set(id,el);
   el.style.transform=open?(i===0?deck:identity):(i===0?flightPose(rect):`translate(${rect.x-parentRect.x}px,${rect.y-parentRect.y}px) rotate(0deg) scale(1)`);
   el.style.opacity='1';
  }
  const to=open?(i===0?flightPose(rect):`translate(${rect.x-parentRect.x}px,${rect.y-parentRect.y}px) rotate(0deg) scale(1)`):(i===0?deck:identity);
  parent=el;parentRect=rect;
  return {el,from:el.style.transform,to};
 });
 motionAnimations=poses.map(({el,from,to},i)=>el.animate([
  {transform:from,opacity:1},
  {transform:to,opacity:1}
 ],{duration:open?s.openDuration:s.closeDuration,delay:interrupted?0:(open?i:chain.length-1-i)*s.stagger,easing,fill:'both'}));
 const animations=motionAnimations;
 Promise.allSettled(animations.map(a=>a.finished)).then(()=>{
  if(run!==arrangement)return;
  if(!open)popover.hidden=true;
  // Swap a settled preview for the identical real element in the same task.
  clearFlights();animations.forEach(a=>a.cancel());motionAnimations=[];
  if(open)positionDockLabels();
 });
}
function closePopover(options){transitionStack(false,options)}
function openPopover(){transitionStack(true)}
window.__stackLabReplay=()=>{closePopover({immediate:true});stackGroup.style.setProperty('--stack-duration','0ms');previews.getBoundingClientRect();requestAnimationFrame(()=>requestAnimationFrame(openPopover))};
window.addEventListener('stack-motion-change',()=>{requestAnimationFrame(()=>{placeComposer();positionDockLabels()});setTimeout(positionDockLabels,window.stackMotion.openDuration+60)});
function changeCard(id,add){if(busy)finish();if(add){selected.has(id)?selected.delete(id):selected.add(id)}else selected=new Set([id]);render()}
function removeCard(id){if(busy)finish();const index=[...selected].indexOf(id),managing=!popover.hidden;selected.delete(id);hot=null;render();if(managing&&selected.size){const next=list.querySelectorAll('[data-remove]')[Math.min(index,selected.size-1)];next?.focus({preventScroll:true})}else prompt.focus({preventScroll:true})}
function render(){
 if(arranging){const open=stack.getAttribute('aria-expanded')==='true';freezeMotion();clearFlights();popover.hidden=!open}
 const active=[...selected].map(id=>byId.get(id)),n=active.length;
 for(const el of sources.children){const on=selected.has(el.dataset.source);el.classList.toggle('is-selected',on);el.classList.toggle('is-excluded',n>0&&!on);el.setAttribute('aria-selected',String(on))}
 list.innerHTML=active.map(c=>`<div class="context-entry" role="listitem" aria-label="${esc(c.title)}" data-context="${esc(c.id)}"><div class="entry-preview"><img src="${c.thumb}" alt=""><button type="button" class="preview-dismiss" data-remove="${esc(c.id)}" aria-label="Remove ${esc(c.title)}">${closeIcon}</button></div></div>`).join('');
 region.classList.toggle('is-hidden',n===0);stackGroup.hidden=n===0;stackGroup.dataset.size=n===1?'one':n===2?'two':'many';
 const visible=n>3?active.slice(0,2):active.slice(0,3);
 previews.innerHTML=visible.map(c=>`<span class="stack-preview" data-context="${esc(c.id)}"><img src="${c.thumb}" alt=""></span>`).join('')+(n>3?`<span class="stack-tail" data-overflow aria-hidden="true">+${n-2}</span>`:'');
 const singleDismiss=document.querySelector('#single-dismiss');singleDismiss.hidden=n!==1;singleDismiss.innerHTML=closeIcon;if(n===1){singleDismiss.dataset.remove=active[0].id;singleDismiss.setAttribute('aria-label','Remove '+active[0].title)}else delete singleDismiss.dataset.remove;
 document.querySelector('#dock-labels').innerHTML=active.map(c=>`<span class="dock-name" data-context="${esc(c.id)}">${esc(c.title)}</span>`).join('');
 list.style.setProperty('--context-columns',Math.min(3,n)||1);popover.dataset.count=n;
 stack.setAttribute('aria-label','Using '+n+' '+(n===1?'card':'cards')+'. Toggle selected context');scope.hidden=n>0;scope.textContent='Board context';
 prompt.placeholder=n===0?'Ask about anything on this board…':n===1?'What would you like to make from this?':'What would you like to make from these?';
 if(!n)closePopover({immediate:true});status.textContent=n?'Selection ready':'The whole board is context';
 for(const b of document.querySelectorAll('button[data-count]'))b.setAttribute('aria-pressed',String(Number(b.dataset.count)===n));
 send.disabled=!prompt.value.trim();requestAnimationFrame(()=>{layout();highlight(hot)});
 window.__stackReview={getState:()=>({selected:[...selected],prompt:prompt.value,busy,popover:!popover.hidden,arranging}),setCount:selectCount};
}
function selectCount(n){finish();selected=new Set(cards.slice(0,n).map(c=>c.id));closePopover({immediate:true});render()}
function layout(){const w=app.clientWidth,z=Math.min(.72,(w-(w<650?32:120))/1320,(app.clientHeight-80)/950),ox=(w-1320*z)/2-80*z,oy=w<650?55:40;for(const c of cards){const el=sources.querySelector(`[data-source="${c.id}"]`);Object.assign(el.style,{left:(c.x*z+ox)+'px',top:(c.y*z+oy)+'px',width:c.w*z+'px',height:c.h*z+'px'});Object.assign(el.querySelector('.tl-html-container').style,{width:c.w+'px',height:c.h+'px',transform:`scale(${z})`});}placeComposer();}
function selectionBounds(){if(!selected.size)return null;const a=app.getBoundingClientRect(),rects=[...selected].map(id=>sources.querySelector(`[data-source="${id}"]`).getBoundingClientRect());const x=Math.min(...rects.map(r=>r.left))-a.left,y=Math.min(...rects.map(r=>r.top))-a.top,right=Math.max(...rects.map(r=>r.right))-a.left,bottom=Math.max(...rects.map(r=>r.bottom))-a.top;return{x,y,right,bottom,w:right-x,h:bottom-y};}
function placeComposer(){const box=selectionBounds(),group=document.querySelector('.selection-group'),width=composer.offsetWidth,height=composer.offsetHeight;let x=(app.clientWidth-width)/2,y=app.clientHeight-height-20;group.hidden=!box||selected.size<2;if(box){Object.assign(group.style,{left:box.x-11+'px',top:box.y-10+'px',width:box.w+22+'px',height:box.h+20+'px'})}if(variant==='c'&&box&&app.clientWidth>=650&&box.bottom+24+height<app.clientHeight-16){x=Math.max(12,Math.min(app.clientWidth-width-12,box.x+box.w/2-width/2));y=box.bottom+24;}Object.assign(composer.style,{left:x+'px',top:y+'px',bottom:'auto'});composer.style.setProperty('--context-space',Math.max(100,y-16)+'px');popover.dataset.labels=x+8>=180?'left':'right';popover.style.setProperty('--label-width',Math.min(180,popover.dataset.labels==='left'?x-12:app.clientWidth-x-94)+'px');positionDockLabels();}
function finish(){clearTimeout(timer);busy=false;composer.setAttribute('aria-busy','false');send.classList.remove('is-busy');send.setAttribute('aria-label','Send prompt');canvas.querySelector('.jz-board-context-field')?.remove();document.querySelector('.tl-background').classList.remove('jz-board-context-background');sources.querySelectorAll('.jz-board-context-reading').forEach(el=>{el.classList.remove('jz-board-context-reading');el.style.removeProperty('--jz-context-delay')});prompt.readOnly=false;}
composer.addEventListener('submit',e=>{e.preventDefault();if(busy){finish();return}if(!prompt.value.trim())return;closePopover();busy=true;composer.setAttribute('aria-busy','true');send.classList.add('is-busy');send.setAttribute('aria-label','Stop generating');prompt.readOnly=true;const ids=selected.size?[...selected]:cards.map(c=>c.id);ids.forEach((id,i)=>{const el=sources.querySelector(`[data-source="${id}"]`);el.style.setProperty('--jz-context-delay',i*65+'ms');el.classList.add('jz-board-context-reading')});const field=document.createElement('div');field.className='jz-board-context-field';canvas.append(field);document.querySelector('.tl-background').classList.add('jz-board-context-background');status.textContent='Request preview · '+(selected.size?ids.length+' selected cards':'the whole board')+' · no model call';timer=setTimeout(finish,5900)});
prompt.addEventListener('input',()=>{prompt.style.height='24px';prompt.style.height=Math.min(96,prompt.scrollHeight)+'px';send.disabled=!prompt.value.trim();placeComposer()});prompt.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();composer.requestSubmit()}});
for(const container of [list,stackGroup,document.querySelector('#dock-labels')]){container.addEventListener('click',e=>{const remove=e.target.closest('[data-remove]');if(remove){e.preventDefault();removeCard(remove.dataset.remove)}});container.addEventListener('pointerover',e=>{const chip=e.target.closest('[data-context]');if(chip)highlight(chip.dataset.context)});container.addEventListener('pointerleave',()=>highlight(null));container.addEventListener('focusin',e=>{const chip=e.target.closest('[data-context]');if(chip)highlight(chip.dataset.context)});container.addEventListener('focusout',()=>highlight(null));}
stack.addEventListener('click',()=>stack.getAttribute('aria-expanded')==='true'?closePopover():openPopover());
document.querySelector('.attach').addEventListener('click',()=>status.textContent='This review focuses on selected cards; file upload is unchanged.');
for(const b of document.querySelectorAll('button[data-count]'))b.addEventListener('click',()=>selectCount(Number(b.dataset.count)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!popover.hidden){closePopover();stack.focus()}else{finish();selected.clear();render()}}if((e.ctrlKey||e.metaKey)&&e.key==='a'&&!document.activeElement.matches('input,textarea,select,[contenteditable=true]')){e.preventDefault();selectCount(cards.length)}});
let drag=null;app.addEventListener('pointerdown',e=>{if(e.button!==0||e.target.closest('.composer,.source,.product-logo'))return;if(!popover.hidden){closePopover();return;}closePopover();const a=app.getBoundingClientRect();drag={x:e.clientX-a.left,y:e.clientY-a.top,moved:false,add:e.shiftKey,prior:new Set(selected)};app.setPointerCapture(e.pointerId)});app.addEventListener('pointermove',e=>{if(!drag)return;const a=app.getBoundingClientRect(),x=e.clientX-a.left,y=e.clientY-a.top;if(Math.hypot(x-drag.x,y-drag.y)>5)drag.moved=true;if(!drag.moved)return;const box={x:Math.min(x,drag.x),y:Math.min(y,drag.y),w:Math.abs(x-drag.x),h:Math.abs(y-drag.y)},el=document.querySelector('#marquee');Object.assign(el.style,{display:'block',left:box.x+'px',top:box.y+'px',width:box.w+'px',height:box.h+'px'});selected=new Set(drag.add?drag.prior:[]);for(const c of cards){const r=sources.querySelector(`[data-source="${c.id}"]`).getBoundingClientRect();if(r.right-a.left>box.x&&r.left-a.left<box.x+box.w&&r.bottom-a.top>box.y&&r.top-a.top<box.y+box.h)selected.add(c.id)}render()});app.addEventListener('pointerup',e=>{if(!drag)return;if(!drag.moved){selected.clear();render()}document.querySelector('#marquee').style.display='none';drag=null;if(app.hasPointerCapture(e.pointerId))app.releasePointerCapture(e.pointerId)});app.addEventListener('pointercancel',()=>{drag=null;document.querySelector('#marquee').style.display='none'});
prompt.addEventListener('focus',closePopover);document.addEventListener('pointerdown',e=>{if(!popover.hidden&&!e.target.closest('#composer,.motion-panel'))closePopover()});
new ResizeObserver(layout).observe(app);new ResizeObserver(placeComposer).observe(composer);render();document.fonts.ready.then(()=>{layout();app.dataset.ready='true'});

function positionDockLabels(){if(popover.hidden||arranging)return;const p=popover.getBoundingClientRect(),viewport=list.getBoundingClientRect();for(const label of document.querySelectorAll('.dock-name')){const item=list.querySelector(`[data-context="${label.dataset.context}"]`);if(!item)continue;const r=item.getBoundingClientRect();label.hidden=r.top<viewport.top+4||r.bottom>viewport.bottom-4;label.style.top=r.top+r.height/2-p.top+'px';}}
list.addEventListener('scroll',positionDockLabels,{passive:true});
