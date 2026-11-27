const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const example = 'Make this signup flow easier to try.';
const titles = {sketch:'First-run signup', notes:'Trying the product', result:'A first run with sample data'};
const versions = {sketch:'v2', notes:'v1'};
const scenes = {
  ready:['Ready','Select the sketch and the notes, then send the prompt. Selection stays private to the draft until you send it.'],
  working:['Working','The submitted request keeps its two inputs. Jarwiz groups the delegated work underneath it.'],
  input:['Needs input','Jarwiz pauses for a decision. Choose a direction in the panel to see the answer attached to the request.'],
  partial:['Partial failure','The board keeps the useful flow. The request identifies the missing comparison and offers a scoped retry.'],
  completed:['Completed','Open the saved result from Activity. Expand the source record to see what was inspected and cited.']
};
let scene, tab, draft, submitted, selected, inputs, answer, retried, focusCard;
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nav = $('.states');
for (const [id,[label]] of Object.entries(scenes)) {
  const b = document.createElement('button');
  b.textContent=label;
  b.onclick=()=>loadScene(id);
  b.dataset.scene=id;
  nav.append(b);
}
function loadScene(id) {
  scene=id;tab='activity';draft=id==='ready'?example:'';submitted=example;
  selected=new Set();inputs=id==='ready'?[]:['sketch','notes'];answer='';retried=false;focusCard=null;
  $('aside').hidden=false;
  history.replaceState(null,'','#'+id);
  render();
}
function showChips(ids, versioned=false) {
  return ids.map(id=>'<span class="pill">'+titles[id]+(versioned?' · '+versions[id]:'')+'</span>').join('');
}
function updateComposer() {
  $('.chips').innerHTML=showChips([...selected]);
  $('#prompt').value=draft;
  $('#prompt').readOnly=scene!=='ready';
  $('#prompt').placeholder=scene==='input'?'Answer Jarwiz in Activity':scene==='working'?'Jarwiz is working on your request':'Ask about this board';
  $('.send').disabled=scene!=='ready'||!draft.trim()||selected.size!==2;
  $$('.source').forEach(b=>b.setAttribute('aria-pressed',selected.has(b.dataset.card)));
}
function steps(list) {
  return '<ol class="steps">'+list.map(([title,subtitle])=>'<li>'+title+'<small>'+subtitle+'</small></li>').join('')+'</ol>';
}
function action(key,label) {return '<button class="rail-action" data-action="'+key+'">'+label+'</button>';}
const prior='<details class="prior"><summary>Earlier · Summarize the signup notes</summary><p>You asked Jarwiz to pull out the point where testers hesitated. Jarwiz created “Trying the product” from the session notes.</p>'+action('notes','Locate notes ↗')+'</details>';
function record() {
  const complete=scene==='completed',partial=scene==='partial';
  const intro = '<div class="entry"><div class="byline"><span class="avatar">Y</span>You</div><p class="ask">'+esc(submitted)+'</p><div class="inputs">'+showChips(inputs,true)+'</div></div><div class="work"><div class="byline"><span class="avatar agent">✦</span>Jarwiz</div>';
  let body='';
  if(answer) body+='<p class="detail">You clarified · '+esc(answer)+'</p>';
  if(retried) body+='<details class="trace"><summary>First lookup attempt</summary><p>The Power BI example timed out. The saved draft was kept for the retry.</p></details>';
  if(scene==='working') {
    body+='<p class="summary">Checking how someone could try a report before connecting a workspace.</p>'+steps([['Review the two inputs','Summarizer · reviewed the sketch and notes'],['Find a sample-report example','Researcher · retrieving the Power BI guide'],['Draft the first step','Writer · using the two board inputs']])+action('result','Locate draft ↗');
  } else if(scene==='input') {
    body+='<p class="summary">The sketch asks for a workspace first. Should the first run work for someone who has no data to connect?</p>'+action('sample','Yes, use a sample report')+action('own','Keep the workspace connection first');
  } else {
    body+='<p class="summary">'+(partial?'Saved the revised flow from your two cards. The external comparison is still missing.':'Saved the revised flow. '+(answer.startsWith('Keep')?'It now explains the connection before asking for access.':'People can explore a sample report before connecting their workspace.'))+'</p>';
    body+=steps([['Review the two inputs','Summarizer · sketch and usability note inspected'],['Check a sample-report example',partial?'Researcher · Power BI lookup timed out':'Researcher · Power BI sample guide retrieved'],['Write the revised flow','Writer · saved one board card']]);
    body+=action('result','Locate revised flow ↗');
    if(partial)body+=action('retry','Retry example lookup');
  }
  body+='<details class="trace"><summary>Source record</summary><p class="detail">Provided and inspected · '+inputs.map(id=>titles[id]+' '+versions[id]).join(' and ')+'. The sketch shows the connection screen. The usability note records the hesitation.</p>';
  if(complete)body+='<p class="detail">Cited in the flow · both board inputs and the <a href="https://learn.microsoft.com/en-us/power-bi/create-reports/sample-datasets" target="_blank" rel="noreferrer">Power BI sample guide</a>.</p>';
  if(partial)body+='<p class="detail">Cited in the flow · both board inputs. The external guide could not be retrieved.</p>';
  return intro+body+'</details></div>';
}
function renderRail(){
  $('#activity').setAttribute('aria-pressed',tab==='activity');
  $('#comments').setAttribute('aria-pressed',tab==='comments');
  if(tab==='comments') {
    $('.rail').innerHTML=focusCard?'<div class="byline">'+titles[focusCard]+'</div><p class="muted">No comments on this card yet.</p>':'<p class="muted">Select a board card to view its comments.</p>';
  } else {
    $('.rail').innerHTML=prior+(scene==='ready'?'<p class="muted">Your next request will appear here when you send it.</p>':record());
  }
}
function renderResult(){
  const card=$('.result');
  const show=['partial','completed','working'].includes(scene);
  card.hidden=!show;
  if(!show)return;
  if(scene==='working'){
    card.innerHTML='<small>Signup flow · Drafting</small><h2>'+titles.result+'</h2><ol><li>Open a sample report</li></ol><p>Let someone explore a report before asking them to connect a workspace.</p>';
    return;
  }
  const own=answer.startsWith('Keep');
  const labels=own?['Preview what will be imported','Connect a workspace','Open your first report']:['Open a sample report','Explore a useful view','Connect your own data'];
  card.innerHTML='<small>Signup flow</small><h2>'+titles.result+'</h2><ol>'+labels.map(s=>'<li>'+s+'</li>').join('')+'</ol><p class="detail">'+(scene==='partial'?'Based on your sketch and usability notes. External comparison pending.':own?'Show the value of connecting before asking for access.':'Give people a report they can explore before asking for access.')+'</p><div class="inputs">'+showChips(inputs)+(scene==='completed'?'<a class="pill" href="https://learn.microsoft.com/en-us/power-bi/create-reports/sample-datasets" target="_blank" rel="noreferrer">Power BI samples ↗</a>':'')+'</div>';
}
function render() {
  $$('.states button').forEach(b=>b.setAttribute('aria-current',b.dataset.scene===scene));
  $('.caption').textContent=scenes[scene][1];
  titles.result=answer.startsWith('Keep')?'A guided workspace connection':'A first run with sample data';
  updateComposer();renderResult();renderRail();
}
function transition(id){
  scene=id;history.replaceState(null,'','#'+id);render();
}
function locate(id){
  const card=id==='result'?$('.result'):$('[data-card="'+id+'"]');
  if(matchMedia('(max-width:700px)').matches)$('aside').hidden=true;
  card.scrollIntoView({block:'nearest'});card.focus({preventScroll:true});card.classList.add('located');
  setTimeout(()=>card.classList.remove('located'),1500);focusCard=id;
}
$$('.source').forEach(b=>b.onclick=()=>{
  const id=b.dataset.card;
  focusCard=id;
  if(selected.has(id))selected.delete(id);else selected.add(id);
  updateComposer();if(tab==='comments')renderRail();
});
$('.result').onclick=()=>{focusCard='result';if(tab==='comments')renderRail();};
$('#prompt').oninput=e=>{draft=e.target.value;$('.send').disabled=!draft.trim()||selected.size!==2;};
$('.send').onclick=()=>{
  if($('.send').disabled)return;
  submitted=draft.trim();inputs=[...selected];selected.clear();draft='';tab='activity';$('aside').hidden=false;transition('working');
};
$('#prompt').onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();$('.send').click();}};
$('#activity').onclick=()=>{tab='activity';renderRail();};
$('#comments').onclick=()=>{tab='comments';renderRail();};
$('.close').onclick=()=>{$('aside').hidden=true;$('.panel-toggle').focus();};
$('.panel-toggle').onclick=()=>{$('aside').hidden=false;$('#'+tab).focus();};
$('.rail').onclick=e=>{
  const key=e.target.closest('[data-action]')?.dataset.action;
  if(key==='notes'||key==='result')locate(key);
  if(key==='sample'||key==='own'){answer=e.target.textContent;transition('completed');}
  if(key==='retry'){retried=true;transition('completed');}
};
const initial=location.hash.slice(1);
loadScene(Object.hasOwn(scenes,initial)?initial:'ready');
