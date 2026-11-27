// Illustrative specialist actions, replayed locally from a small event tape.
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const exampleView = new URLSearchParams(location.search).get('view') === 'result';
const key = 'jarwiz.activity.trace.v4.' + (exampleView ? 'result' : 'board');
const reportURL = 'https://learn.microsoft.com/en-us/power-bi/create-reports/sample-datasets';
const names = {sketch:'First-run signup', notes:'Trying the product', result:'Try a sample report'};
const full = [
  ['Open a sample report','Use example data immediately.'],
  ['Explore a useful view','Filter the report and inspect one trend.'],
  ['Connect your workspace','Replace the sample when you want your own results.']
];
const short = [['Explore a sample report','Open a working report and try its filters.'],full[2]];
const stories = {
  earlier:{prompt:'Where do people hesitate?',inputs:['Trying the product · v1'],tasks:[
    ['Summarizer','Read the usability note','People paused at the workspace connection.','Trying the product · v1','“Can I see what I’m connecting this for?”']
  ],tape:[[0,0],[0,1]]},
  create:{prompt:'How could someone try this before connecting their data?',inputs:['First-run signup · v2','Trying the product · v1'],tasks:[
    ['Summarizer','Review the two selected cards','The sketch asks for access before the user sees a report.','First-run signup · v2 and Trying the product · v1','The connection field in the sketch matches the moment of hesitation in the session note.'],
    ['Researcher','Find a working sample-data example','Power BI lets people explore reports with sample data.','Power BI sample datasets','A ready-made sample report gives people something to explore before they bring their own data.'],
    ['Writer','Combine the two findings','Moved the workspace connection after the first useful view.','Summarizer’s friction finding + Researcher’s sample-report example','Drafted a three-step flow that starts with a report and ends with connecting a workspace.']
  ],tape:[[0,0],[1,0],[0,1],[1,1],[2,0],[2,1]],steps:full},
  simplify:{prompt:'Combine the first two steps of this flow.',tasks:[
    ['Writer','Revise the saved flow','Opening and exploring the report now share one step.','Previous flow card','The connection stays last. The first step now covers opening the sample and trying its filters.']
  ],tape:[[0,0],[0,1]],steps:short},
  expand:{prompt:'Split exploring the sample into two steps.',tasks:[
    ['Writer','Revise the saved flow','Opening the report and exploring a view have separate steps.','Previous flow card','The connection stays last. The sample now has a distinct entry point and exploration step.']
  ],tape:[[0,0],[0,1]],steps:full}
};
function el(tag,text,cls){const n=document.createElement(tag);if(text!=null)n.textContent=text;if(cls)n.className=cls;return n;}
function button(label,fn,cls){const b=el('button',label,cls);b.onclick=fn;return b;}
function initial(){
  const start=Date.now()-60000;
  const history=[{kind:'earlier',at:start,count:3,rev:0}];
  if(exampleView)history.push({kind:'create',at:start+30000,count:stories.create.tape.length+1,rev:1});
  return history;
}
let rows;
try{rows=JSON.parse(sessionStorage.getItem(key));}catch{}
if(!Array.isArray(rows)||!rows.length)rows=initial();
const end=row=>stories[row.kind].tape.length+1;
const saved=row=>row.count===end(row);
const last=()=>rows.at(-1);
const running=()=>!saved(last());
const visibleRevision=()=>rows.findLast(row=>row.rev && saved(row));
const selected=new Set(),views=new Map();
let mode='activity', focused=null, unseen=0;
const feed=$('#feed'),rail=$('.rail');
function persist(){try{sessionStorage.setItem(key,JSON.stringify(rows));}catch{$('.foot').textContent='This browser can keep the trace for this page visit only.';}}
function atEnd(){return !$('aside').hidden&&mode==='activity'&&rail.scrollHeight-rail.scrollTop-rail.clientHeight<30;}
function latest(){rail.scrollTop=rail.scrollHeight;unseen=0;$('.latest').hidden=true;}
function arrived(tail){if(tail)latest();else{unseen++;$('.latest').hidden=mode!=='activity';}}
function time(at){const d=new Date(at),t=el('time',d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}));t.dateTime=d.toISOString();t.title=d.toLocaleString();return t;}
function inputs(row){return stories[row.kind].inputs||[names.result+' · v'+(row.rev-1)];}
function paintTask(row,index,finished){
  const [role,assignment,finding,source,detail]=stories[row.kind].tasks[index];
  const view=views.get(row);
  if(!finished){
    if(row.kind==='create'&&role==='Writer'){
      view.list.append(el('p','Jarwiz passed both findings to the writer.','handoff just-added'));
    }
    const n=el('details',null,'node just-added'),summary=el('summary'),words=el('span'),line=el('span','In progress…','finding');
    n.dataset.role=role;
    const heading=el('b',assignment);
    heading.append(el('small',role,'specialist'));
    words.append(heading,line);
    const glyph=el('span',{Summarizer:'≡',Researcher:'⌕',Writer:'✎'}[role],'glyph');glyph.ariaHidden='true';
    summary.append(glyph,words);
    const evidence=el('div',null,'evidence');evidence.append(el('small','Received'),el('span',source));
    n.append(summary,evidence);view.list.append(n);view.tasks[index]={line,evidence};updateConnections(view);
  }else{
    const {line,evidence}=view.tasks[index];line.textContent=finding;
    evidence.append(el('small','Returned to Jarwiz'),el('span',detail));
    if(role==='Researcher'){
      const sources=el('div',null,'source-list');sources.append(el('small','Sources in this run'));
      for(const [name,origin] of [['First-run signup','Board sketch'],['Trying the product','Board document'],['Sample reports','Microsoft Learn']]){
        const entry=el('div');
        if(origin==='Microsoft Learn'){
          const a=el('a',name+' ↗');a.href=reportURL;a.target='_blank';a.rel='noreferrer';entry.append(a);
        }else entry.append(name);
        entry.append(el('span',origin));sources.append(entry);
      }
      view.list.append(sources);
      const link=el('a','Open sample guide ↗');link.href=reportURL;link.target='_blank';link.rel='noreferrer';evidence.append(el('br'),link);}
  }
}
function updateConnections(view){
  const nodes = Array.from(view.list.querySelectorAll('.node .glyph'));
  view.lines?.svg.remove();
  if(nodes.length)view.lines=connectTrace(view.list,view.parent,nodes);
}
function receipt(row){
  if(!row.rev)return;
  const n=el('div',null,'receipt'),control=button('',()=>locate(row)),words=el('span');
  words.append(el('small','Saved to board · v'+row.rev),el('span',names.result));control.append(words,el('span','↗'));n.append(control);views.get(row).list.append(n);
}
function drawEvent(row,i){
  const tape=stories[row.kind].tape,view=views.get(row);
  if(i===tape.length){view.phase.textContent=row.rev?'Delivered':'Finished';receipt(row);return;}
  const [index,finished]=tape[i];
  paintTask(row,index,finished);
  if(row.kind==='create'){
    view.phase.textContent=['Reviewing inputs','Two specialists working','Checking example','Findings ready','Writing the flow','Saving card'][i];
  }else view.phase.textContent=finished?'Finishing':'Working';
}
function addRequest(row,open=true){
  const n=el('details',null,'run'),h=el('summary'),meta=el('div',null,'request-meta');
  meta.append(el('span','You'),time(row.at));h.append(meta,el('div',stories[row.kind].prompt,'ask'));
  n.open=open;n.append(h);
  const refs=el('div',null,'inputs');inputs(row).forEach(t=>refs.append(el('span',t,'pill')));
  const root=el('div',null,'root'),phase=el('span','Received','phase');
  root.append(el('span','✦','glyph'),el('span','Jarwiz'),phase);
  const list=el('div',null,'branches');n.append(refs,root,list);const view={list,phase,tasks:[],n,parent:root.querySelector('.glyph')};
  views.set(row,view);
  const resize=new ResizeObserver(()=>view.lines?.layout());
  resize.observe(list);
  n.addEventListener('toggle',()=>view.lines?.layout(),true);
  feed.append(n);
  for(let i=0;i<row.count;i++)drawEvent(row,i);
}
function result(row,draft=false){
  const card=$('.result');
  card.hidden=!row;if(!row)return;
  const list=el('ol');
  for(const [title,hint] of stories[row.kind].steps.slice(0,draft?1:undefined)){
    const li=el('li',title);li.append(el('small',hint));list.append(li);
  }
  card.replaceChildren(el('small',draft?'Signup flow · Draft':'Signup flow · v'+row.rev),el('h2',names.result),list);
  if(!draft)card.append(el('p','Based on the signup sketch, usability note and Power BI sample-report example.','grounds'));
}
function showBoard(){
  const row=last(),draft=row.kind==='create'&&!saved(row)&&row.count>=5;
  result(draft?row:visibleRevision(),draft);
}
function locate(row){
  if(matchMedia('(max-width:700px)').matches)$('aside').hidden=true;
  if(row!==visibleRevision()){
    const summary=$('#snapshot-summary');summary.textContent=names.result+' · v'+row.rev;
    const list=$('#snapshot-steps');list.replaceChildren(...stories[row.kind].steps.map(([s])=>el('li',s)));$('#snapshot').showModal();return;
  }
  $('.result').scrollIntoView({block:'nearest'});$('.result').focus({preventScroll:true});focused='result';
}
function nextKind(){const prev=visibleRevision();return !prev?'create':prev.kind==='simplify'?'expand':'simplify';}
function composer(){
  const prev=visibleRevision();
  $('#prompt').value=running()?'Jarwiz is working…':stories[nextKind()].prompt;
  $('.chips').replaceChildren(...(prev?[names.result+' · v'+prev.rev]:[...selected].map(k=>names[k])).map(t=>el('span',t,'pill')));
  $('.send').disabled=running()||(!prev&&selected.size!==2);
  $('#prompt').style.height='auto';$('#prompt').style.height=Math.min($('#prompt').scrollHeight,68)+'px';
  $$('.source').forEach(b=>b.setAttribute('aria-pressed',!prev&&selected.has(b.dataset.card)));
}
function schedule(row){
  if(saved(row))return;
  const i=row.count,due=row.at+800+i*1350;
  setTimeout(()=>{
    const tail=atEnd();row.count++;drawEvent(row,i);persist();
    if(saved(row))selected.clear();
    showBoard();composer();arrived(tail);
    if(saved(row))$('#status').textContent='Jarwiz saved '+names.result;
    else schedule(row);
  },Math.max(0,due-Date.now()));
}
function send(){
  if($('.send').disabled)return;
  if(matchMedia('(max-width:700px)').matches){$('aside').hidden=false;setTab('activity');latest();}
  const tail=atEnd(),row={kind:nextKind(),rev:(visibleRevision()?.rev||0)+1,at:Date.now(),count:0};
  rows.push(row);addRequest(row);persist();composer();arrived(tail);schedule(row);
}
function setTab(next){
  mode=next;feed.hidden=mode!=='activity';$('#thread').hidden=mode==='activity';
  $('#thread').textContent=focused?'No comments on “'+names[focused]+'” yet.':'Select a card to see its comments.';
  $('#activity').setAttribute('aria-pressed',mode==='activity');$('#comments').setAttribute('aria-pressed',mode==='comments');$('.latest').hidden=!unseen||mode!=='activity';
}
$$('.source').forEach(b=>b.onclick=()=>{
  focused=b.dataset.card;if(!running()&&!visibleRevision()){if(selected.has(focused))selected.delete(focused);else selected.add(focused);}
  if(mode==='comments')setTab(mode);composer();
});
$('.result').onclick=()=>{focused='result';if(mode==='comments')setTab(mode);};
$('#activity').onclick=()=>setTab('activity');$('#comments').onclick=()=>setTab('comments');
$('.close').onclick=()=>{$('aside').hidden=true;$('.panel-toggle').focus();};
$('.panel-toggle').onclick=()=>{$('aside').hidden=false;$('#'+mode).focus();};
$('.latest').onclick=latest;rail.addEventListener('scroll',()=>{if(atEnd()){unseen=0;$('.latest').hidden=true;}});
$('#prompt').readOnly=true;$('.send').onclick=send;$('#prompt').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();send();}};
$('#snapshot-close').onclick=()=>$('#snapshot').close();
if(exampleView)$('.guide').textContent='Expand a specialist’s work to inspect its inputs and findings, or open the resulting card on the board.';
rows.forEach((row,index)=>addRequest(row,index===rows.length-1));showBoard();composer();setTab(mode);latest();if(running())schedule(last());
