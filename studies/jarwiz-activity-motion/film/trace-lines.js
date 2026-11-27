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
  const branches=rows.map(()=>{
    const marker=document.createElementNS(ns,'circle');
    marker.setAttribute('r','2.7');svg.append(marker);
    return {stem:makePath(),marker};
  });
  list.prepend(svg);
  function layout(){
    const base=list.getBoundingClientRect();
    if(!base.width||!list.offsetWidth)return;
    const zoom=base.width/list.offsetWidth;
    const parent=root.getBoundingClientRect();
    const x=(parent.x+parent.width/2-base.x)/zoom;
    let y=(parent.bottom-base.y)/zoom;
    rows.forEach((row,i)=>{
      const icon=row.getBoundingClientRect();
      const endY=(icon.top+icon.height/2-base.top)/zoom;
      branches[i].stem.setAttribute('d',`M ${x} ${y} V ${endY-3}`);
      branches[i].marker.setAttribute('cx',x);
      branches[i].marker.setAttribute('cy',endY);
      y=endY+3;
    });
  }
  layout();
  return {svg,branches,layout};
};
