const frame=document.querySelector('iframe'),stage=document.querySelector('.stage'),motion=matchMedia('(prefers-reduced-motion: reduce)');
let preference=motion.matches;
let elapsed=0,previous=0,playing=!motion.matches,visible=true;
let scale=1,travel=0;
function size(){
  scale=stage.clientHeight/820;
  travel=Math.max(0,1280*scale-stage.clientWidth);
  frame.style.transform='scale('+scale+')';
}
function ease(t,start,end){
  const u=Math.max(0,Math.min(1,(t-start)/(end-start)));
  return (1-Math.cos(Math.PI*u))/2;
}
new ResizeObserver(size).observe(stage);size();
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;previous=0;}).observe(stage);
function tick(now){
  if(preference!==motion.matches){
    preference=motion.matches;playing=!preference;previous=0;
  }
  const seek=frame.contentWindow?.seekTrace;
  if(seek){
    if(playing&&visible&&!document.hidden&&previous)elapsed=(elapsed+Math.min(.08,(now-previous)/1000))%27;
    const t=motion.matches&&!playing?25:elapsed;
    seek(t);
    if(travel>.5){
      const inspect=ease(t,7.55,9.15)-ease(t,18,19.9);
      frame.style.transform='translateX('+(-travel*inspect)+'px) scale('+scale+')';
    }
  }
  previous=now;requestAnimationFrame(tick);
}
function pause(e){if(e.code==='Space'){e.preventDefault();playing=!playing;previous=0;}}
document.addEventListener('keydown',pause);
frame.addEventListener('load',()=>frame.contentDocument.addEventListener('keydown',pause));
motion.addEventListener('change',()=>{playing=!motion.matches;previous=0;});
requestAnimationFrame(tick);
