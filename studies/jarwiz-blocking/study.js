/* Finite, seekable blocking studies. The page preview loops them outside the timeline. */
const gsap = window.gsap
const key = new URLSearchParams(location.search).get('scene') || 'question'
const keys = ['question','context','board','selection','agents','tasks','apps','friends']
const scene = keys.includes(key) ? key : 'question'
const n = keys.indexOf(scene) + 1
const duration = [14,15,14,14,13,16,15,16][n-1]
const root = document.querySelector('#composition')
root.dataset.compositionId = `jarwiz-${scene}`
root.dataset.duration = duration
root.className = `scene-${n}`
const row = text => `<p class="stream">${text}</p>`
const chips = names => `<div class="sources stream">${names.map(s=>`<span class="chip">${s}</span>`).join('')}</div>`
const card = (id,title,body,span='span2',extra='') => `<article class="card ${span} ${extra}" id="${id}"><h2>${title}</h2>${body}</article>`
const outline = '<div class="source-outline" aria-hidden="true"></div>'
const table = (heads,rows) => `<table class="table"><thead><tr>${heads.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr class="stream">${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`
const cursor = (id='pointer',name='',secondary=false) => `<div class="cursor ${secondary?'secondary':''}" id="${id}" aria-hidden="true"><svg viewBox="0 0 30 38" fill="${secondary?'#ededed':'#b4b8ff'}"><path d="M3 2 26 24 16 25 11 35Z" stroke="#161616" stroke-width="2"/></svg>${name?`<span class="name">${name}</span>`:''}</div>`
const composer = (text,hint='') => `<div class="composer"><span class="text type">${text}</span>${hint?`<span class="hint">${hint}</span>`:''}<span class="send">↑</span></div>`
const map = (large=false) => `<div class="${large?'map-large':'mini-map'}"><svg viewBox="0 0 520 300" aria-label="Schematic map of Kyoto"><g fill="none" stroke="#aaa3" stroke-width="16"><path d="M0 65H520M0 160H520M0 250H520M90 0V300M220 0V300M360 0V300M470 0V300"/></g><path d="M295 -10 280 70 310 150 290 220 315 310" stroke="#aaa4" stroke-width="22" fill="none"/><text class="map-label" x="326" y="72">Higashiyama</text><text class="map-label" x="334" y="155">Gion</text><text class="map-label" x="46" y="268">Kyoto</text><g class="route-one"><path class="map-route" d="M355 105 430 105 430 205 365 205"/><circle class="map-pin" cx="355" cy="105" r="9"/><circle class="map-pin" cx="430" cy="205" r="9"/></g><g class="route-two"><path class="map-route" d="M210 70 210 150 120 150 120 235"/><circle class="map-pin" cx="210" cy="70" r="9"/><circle class="map-pin" cx="120" cy="235" r="9"/></g></svg></div>`
const sketch = `<svg viewBox="0 0 300 180" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="m8 12 280 2 3 154-282 4Z M12 45l273-1 M175 49l-2 117 M22 63l140-2-1 50-138 3Z M22 125l137 1 M22 143l137 2 M187 63l82 1-2 92-79-2Z M199 79l19 4 13-12 22 24-8 26-28 15-18-22Z"/><path d="m23 27 35 1m11 0 26-2m110 49 17 10 19-2"/></svg>`
const doc = `<div class="doc-lines stream"><span class="doc-line"></span><span class="doc-line"></span><span class="doc-line accent"></span><span class="doc-line"></span></div>`
let body='',prompt='',hint='',panel='',extra='',name='Kyoto, four days'
if(n===1){
 prompt='Help me plan four days in Kyoto.'
 body=card('answer','A walkable first day',row('Start near your hotel in <mark>Higashiyama</mark>. Keep arrival day light.')+row('Save the cross-city trips for later.')+chips(['Kyoto Travel']))+
 card('comparison','Pick a neighborhood',table(['Area','Good for'],[['Higashiyama','Historic streets'],['Arashiyama','A half-day out'],['Gion','An evening walk']]))+
 card('visual','A little structure',`<div class="outline-flow"><div class="flow-box stream">Day 1 · Settle in</div><div class="flow-box stream">Day 2 · Go south</div><div class="flow-box stream">Day 3 · Head west</div><div class="flow-box stream">Day 4 · Leave room</div></div>`+row('Plan around places, not a packed checklist.'))
 extra='<div class="start-message">What are we building?</div>'
}else if(n===2){
 prompt='Use these to shape the trip.'
 body=card('notes','Trip notes',row('Walkable days. Room to explore.')+doc+chips(['Research notes.docx']))+
 card('booking','Hotel confirmation',row('<mark>Higashiyama</mark> · Four nights')+row('Arrival afternoon kept free.')+chips(['Hotel booking.pdf']))+
 card('sheet','Saved places',table(['Place','Area'],[['Kiyomizu-dera','East'],['Fushimi Inari','South'],['Arashiyama','West']])+chips(['Saved places.xlsx']))+
 card('synthesis','Here’s what your files tell me',`<div class="note stream">You’re staying in Higashiyama. Keep the first day nearby.</div>`+row('Group the saved places into two half-day trips. Leave room for unplanned walks.')+chips(['Trip notes','Hotel booking','Saved places']),'span6')
 extra='<div class="drop-zone">Drop your context here</div><div class="file-stack"><div class="file">Research notes.docx</div><div class="file">Hotel booking.pdf</div><div class="file">Saved places.xlsx</div></div>'
}else if(n===3){
 prompt='What should we book before we go?';hint='What should we book before we go?'
 body=card('context-stay','Where we’re staying',row('Higashiyama · Four nights')+chips(['Hotel booking'])+outline,'span2','busy-card context-card')+
 card('context-plan','The plan so far',row('An easy first day. A south-side morning. A day in the west.')+outline,'span2','busy-card context-card')+
 card('context-notes','What matters to us',row('Walkable days, good food and room to explore.')+outline,'span2','busy-card context-card')+
 card('context-places','Places we saved',row('Kiyomizu-dera, Gion and Inari.')+outline,'span2','busy-card context-card')+
 card('context-time','Time we have',row('Four days. Arrival afternoon free.')+outline,'span2','busy-card context-card')+
 card('context-ideas','A little inspiration',row('Quiet streets and small cafés.')+outline,'span2','busy-card context-card')+
 card('new-answer','Book these first',table(['What','Decision','Why'],[['Tea ceremony','Choose a time','A fixed-time experience'],['Hotel','Already booked','Found in your confirmation'],['City transport','Keep flexible','Follow each day’s route']])+chips(['Hotel booking','Trip notes','Current plan']),'span6')
}else if(n===4){
 prompt='Use these two to make a trip planner.'
 body=card('sketch','A quick pencil sketch',`<div class="sketch">${sketch}</div>`+row('A day list beside a map.')+outline,'','sketch')+
 card('input-data','Our saved places',table(['Place','Area'],[['Kiyomizu-dera','East'],['Gion','East'],['Fushimi Inari','South']])+outline,'','input-data')+
 card('sketch-result','Your layout, filled in',`<div class="result-tag stream">From 2 selected cards</div><div class="stream">${map()}</div>`+row('Day 1 · Higashiyama')+row('Kiyomizu-dera → Gion'),'','sketch-result')
 extra='<div class="selection-pill">2 cards selected</div>'
}else if(n===5){
 prompt='Keep working with my Kyoto board.'
 body=card('agent-context','The plan so far',row('Four days. Three areas. A slower arrival day.')+doc+outline,'span3')+
 card('routing','A routing note',row('Keep <mark>Arashiyama</mark> together as a half-day outing.')+row('It sits west of the places on your first-day list.')+chips(['Saved places','Kyoto Travel']),'span3')
 panel=`<aside class="panel"><h2>Agents</h2><div class="entry planner"><h3 class="agent-label"><span class="agent-icon">✦</span>Planner</h3><p class="activity">Grouping your saved places by area.</p><p class="small">Reading the itinerary + 3 cards</p></div><div class="entry researcher"><h3 class="agent-label"><span class="agent-icon">↗</span>Researcher</h3><p class="activity">Checking the visitor guide for the west-side trip.</p><p class="small">Kyoto Travel · Official guide</p></div><div class="entry reviewer"><h3 class="agent-label"><span class="agent-icon">✓</span>Reviewer</h3><p class="activity">Flagged a cross-city detour. Added a routing note.</p><p class="small">Linked to your itinerary</p></div></aside>`
}else if(n===6){
 prompt='Kyoto places, ready to plan around.'
 const places=[['Fushimi Inari','Shrine grounds','<span class="hours">24h grounds</span>'],['Kiyomizu-dera','Temple','<span class="hours">6:00–18:00</span>'],['Nijō Castle','Castle','<span class="hours">8:45–17:00</span>']]
 body=card('task-table','Places to visit',table(['Place','Type','<span class="hours">Opening hours</span>'],places)+`<div class="hours">${chips(['inari.jp','kiyomizudera.or.jp','Nijō Castle'])}</div>`,'span6')
 panel=`<aside class="panel"><h2>Comments</h2><div class="entry user-comment"><h3>You</h3><p class="comment-type">Add opening hours. Use the official sites.</p><p class="small">On “Places to visit”</p></div><div class="entry agent-reply"><h3 class="agent-label"><span class="agent-icon">✦</span>Research sidekick</h3><p>I’ll check each venue’s official site and add the column.</p></div><div class="reply task-done"><p class="activity">Added opening hours for all three places.</p><p class="small">Sources are attached to the table.</p></div><div class="thread-input">Reply or ask a follow-up…</div></aside>`
 extra='<div class="comment-pin">1</div>'
}else if(n===7){
 prompt='Build a map planner from our saved places.'
 body=card('map-app','Kyoto, day by day',`<div class="result-tag stream">Uses your saved places</div><div class="app-tabs stream"><span>Day 1</span><span>Day 2</span><span>Day 3</span><span class="active-tab"></span></div><div class="app-content"><div class="stream">${map(true)}</div><div class="place-list stream"><div class="day-one-list"><h3>Higashiyama</h3><p class="place">1. Kiyomizu-dera</p><p class="place">2. Walk the old streets</p><p class="place">3. Gion at dusk</p></div><div class="day-two-list"><h3>South-side morning</h3><p class="place">1. Fushimi Inari</p><p class="place">2. A quiet lunch stop</p><p class="place">3. Leave the afternoon open</p></div></div></div>`,'span6','app-card')
}else{
 prompt='Turn our ideas into a shared first day.'
 body=card('shared-context','Our Kyoto board',row('Four days. A few fixed plans. Plenty of room for ideas.')+chips(['Trip notes','Saved places']),'span2')+
 card('maya-idea','A thought from Maya',row('Let’s leave the first afternoon open for a long walk.'),'span2','remote-idea')+
 card('alex-idea','A thought from Alex',row('Start near the hotel. We can head south the next morning.'),'span2','remote-idea')+
 card('shared-result','A first day we can build on',table(['When','Together'],[['Afternoon','Settle in + walk Higashiyama'],['Evening','Find dinner around Gion']])+chips(['Maya’s note','Alex’s note','Hotel booking']),'span6')
 extra=cursor('maya','Maya')+cursor('alex','Alex',true)
}
const withPanel=!!panel
root.innerHTML=`<div class="scene-screen"><header><span class="mark">✦</span><span class="board-name">${name}</span><div class="people">${n===8?'<span class="avatar">Y</span><span class="avatar">M</span><span class="avatar">A</span>':'<span class="avatar">Y</span>'}</div></header><div class="canvas ${withPanel?'with-panel':''}"><div class="toolbar">↖<span>＋</span><span>▧</span><span>▤</span><span>✦</span></div><div class="world"><div class="board-grid">${body}</div></div>${composer(prompt,hint)}${extra}${panel}${cursor()}<div class="ring" aria-hidden="true"></div></div></div>`
const q = selector => root.querySelectorAll(selector)
const tl = gsap.timeline({paused:true,defaults:{duration:.45,ease:'power2.out'}})
tl.from(q('.scene-screen'),{opacity:0,duration:.35,ease:'sine.out'},.15)
const move=(x,y,time,d=.65,id='#pointer')=>tl.to(q(id),{x,y,duration:d,ease:'power2.inOut'},time)
const click=(x,y,time)=>{tl.fromTo(q('.ring'),{x:x-15,y:y-15,opacity:.8,scale:.6},{opacity:0,scale:1.25,duration:.45,ease:'power1.out'},time)}
const enter=(selector,time,from={})=>tl.from(q(selector),{opacity:0,y:14,duration:.55,ease:'power3.out',...from},time)
const stream=(selector,time,stagger=.22)=>tl.from(q(`${selector} .stream`),{opacity:0,y:5,duration:.5,stagger,ease:'sine.out'},time)
const type=(time,d=2)=>tl.from(q('.type'),{clipPath:'inset(0 100% 0 0)',duration:d,ease:'none'},time)
const sourceCards=(selector,time=.25)=>enter(selector,time,{y:0,scale:.98,stagger:.08,ease:'power1.out'})
const generate=(selector,time)=>{enter(selector,time,{y:18,scale:.98});stream(selector,time+.25)}
const contextPulse=(selector,time)=>{tl.fromTo(q(selector),{opacity:0},{opacity:1,duration:.4,stagger:.15,ease:'sine.inOut'},time);tl.to(q(selector),{opacity:.2,duration:.7,ease:'sine.inOut'},time+1.7)}
tl.set(q('#pointer'),{x:1060,y:620},0)
tl.set(q('.ring'),{opacity:0},0)
if(n===1){
 tl.set(q('.composer'),{y:-270},0);enter('.start-message',.3,{y:8});tl.to(q('.start-message'),{opacity:0,duration:.4},3.3)
 type(.8,2);move(1030,383,2.9,.6);click(1045,388,3.5)
 tl.to(q('.composer'),{y:0,duration:.9,ease:'power2.inOut'},3.7)
 tl.from(q('.board-name'),{opacity:0,duration:.6},4.2)
 generate('#answer',4.7);generate('#comparison',6.1);generate('#visual',7.4)
 move(265,150,4.2,.9);move(680,206,6.1,1);move(1010,250,7.8,1)
}else if(n===2){
 tl.set(q('.type'),{opacity:0},0);enter('.drop-zone',.3,{y:0});enter('.file-stack',.6,{x:170,y:-70,rotation:-5,duration:.8})
 move(610,230,.8,.8);tl.to(q('.file-stack'),{x:-30,y:95,rotation:0,duration:1,ease:'power2.inOut'},1.6);move(580,325,1.6,1)
 tl.to(q('.file-stack,.drop-zone'),{opacity:0,duration:.4},2.8)
 sourceCards('#notes',3.1);stream('#notes',3.4,.15);sourceCards('#booking',3.5);stream('#booking',3.8,.15);sourceCards('#sheet',4.1);stream('#sheet',4.4,.12)
 tl.to(q('.type'),{opacity:1,duration:.3},4.7);type(4.8,1.7);move(1040,640,6,.6);click(1045,647,6.6)
 generate('#synthesis',7.2);move(330,450,7.4,.9)
}else if(n===3){
 sourceCards('.context-card');tl.from(q('.hint'),{opacity:0,duration:.7},.7);tl.to(q('.hint'),{opacity:0,duration:.2},2.2);type(2.3,2.1)
 move(1040,638,4.4,.6);click(1045,645,5);contextPulse('.source-outline',3.2)
 tl.to(q('.world'),{scale:1.015,duration:.55,ease:'sine.inOut',yoyo:true,repeat:1},2.6)
 generate('#new-answer',7.5);move(500,450,7.7,.8)
}else if(n===4){
 sourceCards('#input-data');enter('#sketch',.8,{x:-420,y:-100,rotation:-6,duration:1});move(200,230,.6,1)
 tl.set(q('.source-outline'),{opacity:0},0);tl.to(q('#sketch .source-outline'),{opacity:1,duration:.25},2.5);click(220,200,2.5);move(580,220,2.9,.7);click(590,225,3.6);tl.to(q('#input-data .source-outline'),{opacity:1,duration:.25},3.6)
 enter('.selection-pill',3.8,{y:6});type(4.3,2);move(1040,638,6.3,.6);click(1045,645,6.9);generate('#sketch-result',7.6);move(990,260,8,.9)
 tl.set(q('.route-two'),{opacity:0},0)
}else if(n===5){
 sourceCards('#agent-context');tl.set(q('.type'),{opacity:.5},0);enter('.panel',.7,{x:390,y:0,duration:.8,ease:'power2.out'})
 enter('.planner',1.5,{y:8});tl.from(q('.planner .activity'),{clipPath:'inset(0 100% 0 0)',duration:1,ease:'none'},1.8)
 enter('.researcher',3.4,{y:8});tl.from(q('.researcher .activity'),{clipPath:'inset(0 100% 0 0)',duration:1.3,ease:'none'},3.8)
 contextPulse('.source-outline',4.9);enter('.reviewer',6.1,{y:8});generate('#routing',7.2);move(969,285,1,.8);move(965,455,3.7,.8);move(560,280,7.4,1)
}else if(n===6){
 sourceCards('#task-table');tl.set(q('.type'),{opacity:.4},0);move(751,133,.8,.8);click(770,145,1.7)
 enter('.panel',1.8,{x:390,y:0,duration:.8});enter('.comment-pin',1.8,{y:0,scale:.5});enter('.user-comment',2.4,{y:8});tl.from(q('.comment-type'),{clipPath:'inset(0 100% 0 0)',duration:1.7,ease:'none'},2.7)
 enter('.agent-reply',5.2,{y:8});tl.from(q('.agent-reply p'),{clipPath:'inset(0 100% 0 0)',duration:1.4,ease:'none'},5.5)
 tl.from(q('.hours'),{opacity:0,duration:.65,stagger:.4,ease:'sine.out'},7.5);enter('.task-done',10.1,{y:8});enter('.thread-input',10.5,{y:0});move(590,230,7.5,1);move(980,608,11,.9)
}else if(n===7){
 type(.6,2.2);move(1040,638,2.7,.7);click(1045,645,3.4);enter('#map-app',4.1,{scale:.97,y:18});stream('#map-app',4.6,.7)
 tl.set(q('.route-two,.day-two-list'),{opacity:0},0);move(210,190,8.2,1);click(216,195,9.2)
 tl.to(q('.active-tab'),{x:87,duration:.3,ease:'power2.inOut'},9.3);tl.to(q('.route-one,.day-one-list'),{opacity:0,duration:.35},9.4);tl.to(q('.route-two,.day-two-list'),{opacity:1,duration:.5,ease:'sine.out'},9.6);move(570,350,10.3,1)
}else{
 sourceCards('#shared-context');tl.set(q('#maya'),{x:750,y:80},0);tl.set(q('#alex'),{x:1040,y:370},0)
 enter('#maya',.7,{y:0});enter('#alex',1.2,{y:0});move(530,180,1,.9,'#maya');enter('#maya-idea',2.3,{y:10});stream('#maya-idea',2.6,.3)
 move(936,220,2.8,.9,'#alex');enter('#alex-idea',4,{x:12,y:0});stream('#alex-idea',4.3,.25)
 type(5.5,2);move(1040,638,7.3,.7);click(1045,645,8);generate('#shared-result',8.7)
 move(460,432,8.8,1,'#maya');move(860,470,9.6,1,'#alex');move(620,470,10.3,.9)
}
// End-state reading hold, then the only whole-scene exit. No infinite repeats.
tl.to(q('.scene-screen'),{opacity:0,duration:.45,ease:'sine.in'},duration-.45)
window.__timelines=window.__timelines||{}
window.__timelines[`jarwiz-${scene}`]=tl
window.__study={scene,duration,timeline:tl}
const fit=()=>{const scale=Math.min(innerWidth/1280,innerHeight/800);root.style.transform=`scale(${scale})`;root.style.position='absolute';root.style.left=`${(innerWidth-1280*scale)/2}px`;root.style.top=`${(innerHeight-800*scale)/2}px`}
fit();addEventListener('resize',fit)
const capture=new URLSearchParams(location.search).has('capture')
if(!capture){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let visible=false
 const sync=()=>{if(reduced.matches){tl.pause().time(duration-1);return}if(visible&&!document.hidden){if(tl.progress()>=.999)tl.restart();else tl.play()}else tl.pause()}
 tl.eventCallback('onComplete',()=>{if(visible&&!document.hidden&&!reduced.matches)tl.restart()})
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()},{threshold:.15}).observe(document.documentElement)
 reduced.addEventListener('change',sync);document.addEventListener('visibilitychange',sync)
}
