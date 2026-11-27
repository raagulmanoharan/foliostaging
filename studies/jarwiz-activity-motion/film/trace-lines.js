// Each branch starts exactly where the previous stem ends. Measure in unscaled
// scene coordinates so camera movement never changes the joins.
window.connectTrace = function(list, root, rows) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.classList.add('trace-lines');
  svg.setAttribute('aria-hidden','true');
  const makePath=()=>{
    const path=document.createElementNS(ns,'path');
    path.setAttribute('pathLength','1');
    svg.append(path);
    return path;
  };
  const branches=rows.map(()=>({stem:makePath(),elbow:makePath()}));
  list.prepend(svg);
  function layout(){
    const base=list.getBoundingClientRect();
    if(!base.width||!list.offsetWidth)return;
    const zoom=base.width/list.offsetWidth;
    const parent=root.getBoundingClientRect();
    const x=(parent.x+parent.width/2-base.x)/zoom;
    let y=(parent.bottom-base.y)/zoom;
    rows.forEach((row,i)=>{
      const icon=row.getBoundingClientRect(),endX=(icon.left-base.left)/zoom-2;
      const endY=(icon.top+icon.height/2-base.top)/zoom;
      const bend=Math.min(6,Math.max(0,(endX-x)/2));
      const join=endY-bend;
      branches[i].stem.setAttribute('d',`M ${x} ${y} V ${join}`);
      branches[i].elbow.setAttribute('d',`M ${x} ${join} Q ${x} ${endY} ${x+bend} ${endY} H ${endX}`);
      y=join;
    });
  }
  layout();
  return {svg,branches,layout};
};
