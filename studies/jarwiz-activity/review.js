// A deterministic board fixture. The durable product event pipeline is separate.
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const key = 'jarwiz.activity.review.v3';
const names = {notes:'Trying the product', sketch:'First-run signup', result:'Try a sample report'};
const suggestions = {
  create:'Use these two cards to sketch a first run with sample data.',
  simplify:'Combine the first two steps of this flow.',
  expand:'Split exploring the sample into two steps.'
};
const full = ['Open a sample report', 'Explore a useful view', 'Connect your workspace'];
const short = ['Explore a sample report', 'Connect your workspace'];
function el(tag, text, cls) {
  const n=document.createElement(tag);
  if(text!==undefined)n.textContent=text;
  if(cls)n.className=cls;
  return n;
}
function button(label, fn, cls) {
  const b=el('button',label,cls); b.onclick=fn;return b;
}
function initial(){
  const now=Date.now();
  return {head:null,entries:[{type:'read',at:now-60000,prompt:'Where did testers hesitate?',events:[
    {label:'Read the usability note',detail:'Summarizer inspected the quote about connecting a workspace.',at:now-59000},
    {label:'Returned a finding',detail:'People wanted to see a report before giving access to their data. This request made no board changes.',at:now-57500}
  ]}]};
}
let data;
try{data=JSON.parse(sessionStorage.getItem(key));}catch{}
if(!data?.entries)data=initial();
const get=id=>data.entries.find(row=>row.id===id);
const current=()=>get(data.head);
const running=()=>data.entries.find(row=>row.type==='run'&&!row.saved);
let mode='activity',focused=null,previewId=null;
const selected=new Set();
function save(){try{sessionStorage.setItem(key,JSON.stringify(data));}catch{$('.foot').textContent='Tab storage is unavailable. This review history lasts for the current page visit.';}}
const feed=$('#feed'), rail=$('.rail');
function atEnd(){return !($('aside').hidden||mode!=='activity') && rail.scrollHeight-rail.scrollTop-rail.clientHeight<32;}
function added(wasAtEnd){
  if(wasAtEnd)rail.scrollTop=rail.scrollHeight;
  else $('.latest').hidden=mode!=='activity';
}
function clock(at){const d=new Date(at),t=el('time',d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}));t.dateTime=d.toISOString();t.title=d.toLocaleString();return t;}
function describe(event){
  const d=el('details',undefined,'event');
  const p=el('p',event.detail);p.append(clock(event.at));
  d.append(el('summary',event.label),p);
  return d;
}
const views=new Map();
let lastDay;
function renderEntry(row){
  const day=new Date(row.at).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});
  if(day!==lastDay){feed.append(el('p',day,'day'));lastDay=day;}
  const n=el('section',undefined,'run'),h=el('header'),person=el('div',undefined,'byline');
  person.append(el('span','Y','avatar'),el('span','You'));h.append(person,clock(row.at));n.append(h);
  if(row.type==='undo'){
    n.append(el('p',row.to?'Restored the previous flow':'Removed the generated flow','ask'));
    n.append(el('p','Rolled back “'+get(row.target).prompt+'”','detail'));
  }else{
    n.append(el('p',row.prompt,'ask'));
    const inputs=el('div',undefined,'inputs');
    for(const ref of row.inputs??['Trying the product · v1'])inputs.append(el('span',ref,'pill'));
    const list=el('div',undefined,'event-list');
    for(const e of row.events)list.append(describe(e));
    n.append(inputs,list);
    if(row.type==='run'){
      const actions=el('div',undefined,'result-actions');n.append(actions);
      views.set(row.id,{list,actions});
    }
  }
  feed.append(n);
}
function refreshActions(){
  for(const row of data.entries.filter(r=>r.type==='run'&&r.saved)){
    const a=views.get(row.id).actions;
    const status=row.reverted?'reverted':data.head!==row.id?'later':running()?'busy':'active';
    if(a.dataset.state===status)continue;
    a.dataset.state=status;a.replaceChildren();
    if(status==='active')a.append(button('Locate card ↗',locate,'text-btn'),button('Roll back…',()=>openPreview(row.id),'text-btn'));
    else a.append(el('span',{reverted:'Rolled back',later:'A later revision is on the board',busy:'Another change is in progress'}[status],'unavailable'));
  }
}
function renderCard(){
  const card=$('.result'),row=current();card.hidden=!row;
  if(!row)return;
  const ol=el('ol');row.steps.forEach(t=>ol.append(el('li',t)));
  card.replaceChildren(el('small','Signup flow · v'+row.rev),el('h2',names.result),ol,el('p','Let people see what a report can do before asking them to connect a workspace.'));
}
function renderComposer(){
  const row=current(),busy=running();
  const op=row?(row.steps.length===3?'simplify':'expand'):'create';
  $('#prompt').value=busy?'Jarwiz is working…':suggestions[op];
  $('#prompt').readOnly=true;
  $('.chips').replaceChildren(...(row?[names.result+' · v'+row.rev]:[...selected].map(k=>names[k])).map(t=>el('span',t,'pill')));
  $('.send').disabled=!!busy||(!row&&selected.size!==2);
  $('#prompt').style.height='auto';
  $('#prompt').style.height=Math.min($('#prompt').scrollHeight,66)+'px';
  $$('.source').forEach(b=>b.setAttribute('aria-pressed',!row&&selected.has(b.dataset.card)));
}
function send(){
  if($('.send').disabled)return;
  const parent=current(),at=Date.now(),op=parent?(parent.steps.length===3?'simplify':'expand'):'create';
  const row={id:crypto.randomUUID(),type:'run',at,prompt:suggestions[op],op,parent:data.head,
    rev:1+Math.max(0,...data.entries.map(r=>r.rev||0)),inputs:parent?[names.result+' · v'+parent.rev]:[...selected].map(k=>names[k]+(k==='sketch'?' · v2':' · v1')),
    steps:op==='simplify'?short:full,events:[],saved:false};
  const tail=atEnd();data.entries.push(row);save();renderEntry(row);refreshActions();renderComposer();added(tail);schedule(row);
}
function schedule(row){
  const work=row.op==='create'?[
    ['Jarwiz delegated the request','A summarizer reviews the two selected inputs. A writer uses the finding to draft a flow.'],
    ['Summarizer reviewed both cards','The sketch asks for a workspace connection. The usability note records hesitation at that same step.'],
    ['Writer drafted three steps','A sample report gives someone a useful view before they connect their own workspace.']
  ]:[
    ['Jarwiz opened the saved flow',row.inputs[0]+' was supplied to the writer.'],
    ['Writer revised the sample-report steps',row.op==='simplify'?'Combined opening and exploring the sample. The connection step stays last.':'Separated opening a sample from exploring its contents. The connection step stays last.']
  ];
  work.push([row.parent?'Saved the revised flow':'Created a flow card',names.result+' · v'+row.rev+' was saved to the board.']);
  function next(){
    const i=row.events.length;
    if(i>=work.length)return;
    const due=row.at+1100+i*1500;
    setTimeout(()=>{
      const tail=atEnd(),[label,detail]=work[i],event={label,detail,at:due};
      row.events.push(event);views.get(row.id).list.append(describe(event));
      if(i===work.length-1){row.saved=true;data.head=row.id;selected.clear();renderCard();refreshActions();renderComposer();$('#status').textContent=label;}
      save();added(tail);next();
    },Math.max(0,due-Date.now()));
  }
  next();
}
function locate(){
  if(matchMedia('(max-width:700px)').matches)$('aside').hidden=true;
  $('.result').scrollIntoView({block:'nearest'});$('.result').focus({preventScroll:true});focused='result';
}
function openPreview(id){
  const row=get(id);if(data.head!==id||row.reverted||running())return;
  previewId=id;const parent=get(row.parent);
  $('#dialog-copy').textContent=parent?'Restore the steps from v'+parent.rev+' of “'+names.result+'”.':'Remove “'+names.result+'” from this board. Your sketch and research notes stay in place.';
  const diff=$('.diff');diff.replaceChildren();
  for(const [label,steps] of [['Current · v'+row.rev,row.steps],['After rollback',parent?.steps]]){
    diff.append(el('small',label));
    if(steps){const list=el('ol');steps.forEach(s=>list.append(el('li',s)));diff.append(list);}
    else diff.append(el('p','Card removed'));
  }
  $('#preview').showModal();
}
function undo(){
  const row=get(previewId);
  if(!row||row.reverted||data.head!==row.id||running())return;
  const tail=atEnd();row.reverted=true;data.head=row.parent;
  const record={type:'undo',at:Date.now(),target:row.id,to:row.parent};data.entries.push(record);
  $('#preview').close();save();renderEntry(record);refreshActions();renderCard();renderComposer();added(tail);
  $('#activity').focus({preventScroll:true});$('#status').textContent='Rollback recorded.';
}
function setTab(next){
  mode=next;feed.hidden=mode!=='activity';$('#thread').hidden=mode==='activity';
  $('#thread').textContent=focused?'No comments on “'+names[focused]+'” yet.':'Select a board card to see its comments.';
  $('#activity').setAttribute('aria-pressed',mode==='activity');$('#comments').setAttribute('aria-pressed',mode==='comments');
  $('.latest').hidden=mode!=='activity'||atEnd();
}
$$('.source').forEach(b=>b.onclick=()=>{
  focused=b.dataset.card;
  if(!running()&&!current()){if(selected.has(focused))selected.delete(focused);else selected.add(focused);}
  if(mode==='comments')setTab(mode);renderComposer();
});
$('.result').onclick=()=>{focused='result';if(mode==='comments')setTab(mode);};
$('#activity').onclick=()=>setTab('activity');$('#comments').onclick=()=>setTab('comments');
$('.close').onclick=()=>{$('aside').hidden=true;$('.panel-toggle').focus();};
$('.panel-toggle').onclick=()=>{$('aside').hidden=false;$('#'+mode).focus();};
$('.latest').onclick=()=>{rail.scrollTop=rail.scrollHeight;$('.latest').hidden=true;};
rail.addEventListener('scroll',()=>{if(atEnd())$('.latest').hidden=true;});
$('.send').onclick=send;$('#prompt').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();send();}};
$('#confirm').onclick=undo;$('#cancel').onclick=()=>$('#preview').close();
for(const row of data.entries)renderEntry(row);
renderCard();refreshActions();renderComposer();setTab(mode);rail.scrollTop=rail.scrollHeight;
if(running())schedule(running());
