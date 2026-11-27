const $ = s => document.querySelector(s);
const tl = gsap.timeline({paused:true,defaults:{ease:'power2.inOut'}});
const space = $('#space').getBoundingClientRect();
function target(selector, fx=.55, fy=.55){
  const r=$(selector).getBoundingClientRect();
  return {x:r.left-space.left+fx*r.width,y:r.top-space.top+fy*r.height};
}
const connectors=connectTrace($('.tree'),$('#parent b'),[...document.querySelectorAll('.task .symbol')]);
const writer=target('#disclose',.88,.85),receipt=target('#receipt',.8);
function cursor(x,y,t,d){tl.to('#pointer',{x,y,duration:d,ease:'sine.inOut'},t);}
function click(t){tl.to('#pointer svg',{scale:.87,transformOrigin:'3px 2px',duration:.1,yoyo:true,repeat:1},t);}
function enter(sel,t,d=.45){tl.fromTo(sel,{autoAlpha:0,y:5},{autoAlpha:1,y:0,duration:d,ease:'power2.out'},t);}
function exit(sel,t,d=.26){tl.to(sel,{autoAlpha:0,duration:d},t);}
function camera(scale,x,y,t,d){tl.to('#shell',{scale,x,y,duration:d,ease:'sine.inOut'},t);}
const prompt='How can people try this before connecting their data?';
const count={n:0};
tl.set('#pointer',{x:140,y:405},0);
tl.set('#sources',{y:68},0);
tl.set('#next,#busy,#glow,.outline,.deck img,#typed,#run,#parent,.tree,#sum,#research,#writer,#inspect,#receipt,.finding,.handoff,#evidence-box,#result',{autoAlpha:0},0);
cursor(202,252,.45,.86);click(1.31);
tl.to('#sketch .outline',{autoAlpha:1,duration:.27},1.31);enter('#mini1',1.33);
cursor(493,256,1.75,.93);click(2.68);
tl.to('#notes .outline',{autoAlpha:1,duration:.27},2.68);enter('#mini2',2.7);
camera(1.19,-54,-123,2.93,1.1);
cursor(226,651,3.08,1.05);click(4.13);exit('#placeholder',4.15,.15);
tl.set('#typed',{autoAlpha:1},4.28);
tl.to(count,{n:prompt.length,snap:{n:1},duration:2.35,ease:'none',onUpdate:()=>{$('#typed').textContent=prompt.slice(0,count.n);}},4.32);
tl.set('#typed',{className:'caret'},4.28);tl.set('#typed',{className:''},7.55);
cursor(628,684,6.76,.77);click(7.53);
exit('#typed,.outline,.deck img',7.63);enter('#busy',7.68,.3);
tl.to('#glow',{autoAlpha:.85,duration:.5},7.7);
camera(1.38,-445,-89,7.7,1.65);enter('#run',7.84);enter('#parent',8.55);
tl.set('.tree',{autoAlpha:1},8.85);for(const [i,start] of [8.89,9.42,15.39].entries()){
  const {stem,marker}=connectors.branches[i];
  tl.fromTo(stem,{strokeDashoffset:1},{strokeDashoffset:0,duration:.28,ease:'sine.inOut'},start);
  tl.fromTo(marker,{opacity:0},{opacity:1,duration:.18,ease:'sine.out'},start+.26);
}
enter('#sum',9.05);enter('#research',9.55);
cursor(1185,338,8.15,1.45);
exit('#sum .doing',11.1);enter('#sum .finding',11.33,.4);
exit('#research .doing',12.77);enter('#research .finding',13.05,.4);
enter('#evidence-box',13.5,.42);enter('.handoff',14.65,.46);enter('#writer',15.75,.48);
camera(1.28,-338,-213,15.0,1.23);cursor(writer.x,writer.y,15.6,.96);click(16.58);tl.to('#disclose',{rotation:90,duration:.25},16.58);enter('#inspect',16.65,.45);
tl.to('#sources',{y:-26,duration:1.35,ease:'sine.inOut'},16.9);
camera(1.04,-15,-10,17.85,1.65);
tl.set('#result',{autoAlpha:1},18.0);
tl.fromTo('#result',{clipPath:'inset(0 0 100% 0 round 10px)'},{clipPath:'inset(0 0 0% 0 round 10px)',duration:3.05,ease:'sine.inOut'},18.0);for(const [i,cover] of [...document.querySelectorAll('.ink')].entries()){
  tl.fromTo(cover,{scaleX:1},{scaleX:0,transformOrigin:'100% 50%',duration:.48,ease:'sine.out'},18.05+i*.44);
}
tl.to('.history',{y:-88,duration:.8,ease:'sine.inOut'},20.8);enter('#receipt',21.3,.5);exit('#busy,#glow',21.55);enter('#next',21.85);
cursor(receipt.x,receipt.y-88,21.62,1.05);click(22.69);
tl.fromTo('#result',{boxShadow:'0 0 0 0px transparent'},{boxShadow:'0 0 0 2px #c5b6de',duration:.32,yoyo:true,repeat:1,repeatDelay:.58},22.72);
camera(1,0,0,22.78,1.25);cursor(721,570,23.19,1.25);
tl.fromTo('#rewind',{autoAlpha:0},{autoAlpha:1,duration:.8,ease:'sine.inOut'},26.2);
window.__timelines={'jarwiz-trace':tl};
window.seekTrace=t=>{tl.time(Math.min(27,Math.max(.001,t)),false);$('#typed').textContent=prompt.slice(0,count.n);};
window.seekTrace(.001);
