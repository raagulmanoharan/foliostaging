// Shared by the interactive audit rail and its motion study.
window.auditUI = (() => {
  const assets = document.documentElement.dataset.auditAssets || 'assets/';
  const ns = 'http://www.w3.org/2000/svg';
  const paths = {
    Jarwiz:'M12 3l2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4z',
    Summarizer:'M5 5h14v14H5z M8 9h8 M8 12h8 M8 15h4',
    Researcher:'M16 16l5 5 M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 1 1 15 0',
    Writer:'M4 16l11-11 4 4L8 20l-5 1z M13 7l4 4'
  };
  function agent(name){
    const pill=document.createElement('span');pill.className='agent-pill';pill.dataset.agent=name;
    const icon=document.createElementNS(ns,'svg'),path=document.createElementNS(ns,'path');
    icon.setAttribute('viewBox','0 0 24 24');icon.setAttribute('aria-hidden','true');
    path.setAttribute('d',paths[name]);icon.append(path);pill.append(icon,name);return pill;
  }
  function favicon(external=false){
    const img=document.createElement('img');img.className='source-favicon';img.alt='';
    img.width=15;img.height=15;img.src=assets+(external?'microsoft-learn.png':'jarwiz-favicon.svg');return img;
  }
  const sources=[
    ['First-run signup','Board sketch','sketch'],
    ['Usability notes','Board document','notes'],
    ['Power BI sample reports','Microsoft Learn','https://learn.microsoft.com/en-us/power-bi/create-reports/sample-datasets']
  ];
  function sourceList(onLocate){
    const list=document.createElement('section');list.className='audit-sources';
    const label=document.createElement('div');label.className='sources-label';label.textContent='Sources reviewed';
    const count=document.createElement('span');count.textContent=String(sources.length);label.append(count);list.append(label);
    for(const [title,origin,target] of sources){
      const external=target.startsWith('https:');
      const row=document.createElement(onLocate?(external?'a':'button'):'div');row.className='source-item';
      if(onLocate){
        if(external){row.href=target;row.target='_blank';row.rel='noreferrer';}
        else{row.type='button';row.onclick=()=>onLocate(target);}
      }
      const text=document.createElement('span');text.className='source-name';text.textContent=title;
      const by=document.createElement('span');by.className='source-origin';by.textContent=origin;
      row.append(favicon(external),text,by);list.append(row);
    }
    return list;
  }
  return {agent,favicon,sourceList};
})();
