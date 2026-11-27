(()=>{
 const defaults={idleSpacing:19,idleFan:12,deckSpacing:10,deckFan:5,listGap:12,hoverLift:5,openDuration:820,closeDuration:800,stagger:54,openEase:'gentle',closeEase:'gentle',curve:[.22,1,.36,1]};
 const curves={gentle:[.22,1,.36,1],smooth:[.4,0,.2,1],quick:[.16,1,.3,1],spring:[.34,1.25,.4,1],linear:[0,0,1,1]};
 const specs=[['idleSpacing','Fan spacing',8,26,1,'px','deck'],['idleFan','Fan angle',0,16,1,'°','deck'],['deckSpacing','Selected deck spacing',1,14,1,'px','deck'],['deckFan','Selected deck angle',0,6,.5,'°','deck'],['listGap','Vertical card spacing',6,24,1,'px','deck'],['hoverLift','Hover lift',1,6,1,'px','deck'],['openDuration','Opening',160,1000,20,'ms','timing'],['closeDuration','Closing',160,800,20,'ms','timing'],['stagger','Card stagger',0,60,2,'ms','timing']];
 const presets={gentle:{...defaults},snappy:{...defaults,openDuration:280,closeDuration:220,stagger:10,deckSpacing:4,deckFan:1.5,openEase:'quick'},float:{...defaults,openDuration:760,closeDuration:560,stagger:26,deckSpacing:6,deckFan:2.5,openEase:'spring'}};
 let saved={};try{saved=JSON.parse(decodeURIComponent(location.hash.slice(1)))}catch{}
 const settings=window.stackMotion={...defaults,curve:[...defaults.curve]};
 for(const [key,,min,max] of specs)if(Number.isFinite(saved[key]))settings[key]=Math.max(min,Math.min(max,saved[key]));
 for(const key of ['openEase','closeEase'])if(curves[saved[key]]||key==='openEase'&&saved[key]==='custom')settings[key]=saved[key];
 if(Array.isArray(saved.curve)&&saved.curve.length===4&&saved.curve.every(Number.isFinite))settings.curve=saved.curve.map((v,i)=>Math.min(i%2?1.5:1,Math.max(i%2?-.5:0,v)));
 window.stackEase=(name,custom)=>`cubic-bezier(${(name==='custom'?custom:curves[name]||curves.gentle).join(',')})`;
 const root=document.documentElement,status=document.querySelector('#settings-status');
 const vars={idleSpacing:'idle-spacing',idleFan:'idle-fan',deckSpacing:'deck-spacing',deckFan:'deck-fan',listGap:'list-gap',hoverLift:'hover-lift'};
 for(const [key,label,min,max,step,unit,section]of specs){document.querySelector('#'+section+'-controls').insertAdjacentHTML('beforeend',`<label class="range-control" for="${key}"><span class="range-label">${label}<output for="${key}" id="value-${key}"></output></span><input id="${key}" type="range" min="${min}" max="${max}" step="${step}" value="${settings[key]}"></label>`);document.getElementById(key).addEventListener('input',e=>{settings[key]=Number(e.target.value);apply()})}
 ['x1','y1','x2','y2'].forEach((label,i)=>{document.querySelector('#bezier-inputs').insertAdjacentHTML('beforeend',`<label>${label}<input aria-label="Bezier ${label}" id="bezier-${i}" type="number" min="${i%2?-.5:0}" max="${i%2?1.5:1}" step=".01"></label>`);document.getElementById('bezier-'+i).addEventListener('input',e=>{if(!e.target.value||!Number.isFinite(e.target.valueAsNumber))return;if(settings.openEase!=='custom')settings.curve=[...curves[settings.openEase]];settings.curve[i]=Math.min(i%2?1.5:1,Math.max(i%2?-.5:0,e.target.valueAsNumber));settings.openEase='custom';apply(false)})});
 function apply(syncCurve=true){
  for(const [key,variable]of Object.entries(vars))root.style.setProperty('--'+variable,settings[key]+(key.includes('Fan')?'deg':'px'));
  for(const [key,,,,,unit]of specs){document.getElementById(key).value=settings[key];document.getElementById('value-'+key).value=settings[key]+unit}
  document.querySelector('#ease-open').value=settings.openEase;document.querySelector('#ease-close').value=settings.closeEase;
  const c=settings.openEase==='custom'?settings.curve:curves[settings.openEase],point=(x,y)=>[20+x*200,100-y*90];
  const a=point(c[0],c[1]),b=point(c[2],c[3]);document.querySelector('#curve-path').setAttribute('d',`M20 100C${a.join(' ')} ${b.join(' ')} 220 10`);document.querySelector('#curve-guide').setAttribute('d',`M20 100L${a.join(' ')}M220 10L${b.join(' ')}`);for(const [i,p]of [a,b].entries()){const node=document.querySelector('#curve-p'+(i+1));node.setAttribute('cx',p[0]);node.setAttribute('cy',p[1])}
  document.querySelector('#curve-value').textContent=window.stackEase(settings.openEase,settings.curve);if(syncCurve)c.forEach((v,i)=>document.getElementById('bezier-'+i).value=v);
  for(const button of document.querySelectorAll('[data-preset]'))button.setAttribute('aria-pressed',String(Object.keys(defaults).every(k=>JSON.stringify(settings[k])===JSON.stringify(presets[button.dataset.preset][k]))));
  history.replaceState(null,'',location.pathname+location.search+'#'+encodeURIComponent(JSON.stringify(settings)));window.dispatchEvent(new Event('stack-motion-change'));
 }
 for(const key of ['open','close'])document.querySelector('#ease-'+key).addEventListener('change',e=>{if(key==='open'&&e.target.value==='custom')settings.curve=[...(curves[settings.openEase]||settings.curve)];settings[key+'Ease']=e.target.value;apply()});
 document.querySelector('#reset-motion').addEventListener('click',()=>{Object.assign(settings,defaults,{curve:[...defaults.curve]});apply();status.textContent='Restored your shared settings.'});
 document.querySelector('#replay-motion').addEventListener('click',()=>window.__stackLabReplay?.());
 document.querySelectorAll('[data-preset]').forEach(button=>button.addEventListener('click',()=>{Object.assign(settings,presets[button.dataset.preset],{curve:[...defaults.curve]});apply();window.__stackLabReplay?.()}));
 document.querySelector('#share-motion').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);status.textContent='Settings link copied. Send it back to keep this motion.'}catch{status.textContent='Copy the address bar to share these settings.'}});
 apply();
})();
