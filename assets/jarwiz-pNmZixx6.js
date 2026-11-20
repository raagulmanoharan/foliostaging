import"./modulepreload-polyfill-B5Qt9EMX.js";const S="/foliostaging/",y=(e,a,t)=>`${S}work/${e}/${a}?v=${t}`,v=matchMedia("(prefers-reduced-motion: reduce)"),$={start:{directory:"jarwiz-review",file:"onboarding-flow",poster:"flow-poster.jpg",version:"first-flow-v21",duration:15,title:"Start with evidence",caption:"A question and two reports become research, opportunities, evidence, alternatives and a service blueprint.",description:"Start with a question, add two reports, and explore five native cards on the Jarwiz canvas."},build:{directory:"jarwiz-grounded-review",file:"grounded-flow",poster:"poster.jpg",version:"grounded-flow-v5",duration:15,title:"Build from selected context",caption:"The selected journey and screenshot become one working onboarding prototype.",description:"Select a journey and the current screen, then watch a working onboarding prototype take shape element by element."},refine:{directory:"jarwiz-grounded-review",file:"refine-flow",poster:"refine-poster.jpg",version:"grounded-flow-v5",duration:15,title:"Refine the same prototype",caption:"A comment asks for a visible “Paste my notes” action. Jarwiz proposes the change; approval updates the same prototype.",description:"Point to a detail, leave a comment, and approve a targeted correction to the same prototype card."},notice:{directory:"jarwiz-notice-review",file:"notice-flow",poster:"poster.jpg",version:"prd-flow-v1",duration:15,title:"Notice the mismatch",caption:"An onboarding-session workbook prompts a proposal: offer invitations after the first useful plan.",description:"New session data arrives as a native spreadsheet. Jarwiz reads it and comments on the conflicting invitation requirement."},update:{directory:"jarwiz-notice-review",file:"update-flow",poster:"update-poster.jpg",version:"prd-flow-v1",duration:12,title:"Approve a focused change",caption:"The invitation requirement and its acceptance criterion update in place. The rest of the document stays intact.",description:"Approve the proposed change and watch the requirement and acceptance criterion update inside the existing PRD."},discussion:{directory:"jarwiz-scout-review",file:"scout-flow",poster:"poster.jpg",version:"background-teammate-v7",duration:15,title:"Keep the conversation close",caption:"Human review, supporting evidence and Jarwiz’s contribution stay attached to the passage being discussed.",description:"While the author writes a travel-notes PRD, teammates comment. After the author replies, Jarwiz joins the same thread with a sourced recommendation."},context:{directory:"jarwiz-context-review",file:"context-flow",poster:"poster.jpg",version:"context-flow-v2",duration:15,title:"Ask the next question",caption:"Four practical pieces, each with a reason, an illustration and a link to browse similar items.",description:"Ask what to wear for a trip already planned on the canvas. Jarwiz creates a table grounded in the itinerary, packing limits and preferences."},sales:{directory:"jarwiz-sales-review",file:"pipeline-flow",poster:"poster.jpg",version:"sales-flow-v4",duration:42.916666666666664,title:"Turn source updates into a working view",caption:"Inspect the source records, then move from the dashboard overview into the account table.",description:"Review connected source snapshots, ask for next quarter’s pipeline, and inspect the generated dashboard and detailed account table.",chapters:[{time:0,label:"Connected context"},{time:8.433,label:"Ask"},{time:15.067,label:"Generate"},{time:23.133,label:"Explore"}]}},j={play:'<path d="m6 3 11 7-11 7V3Z" fill="currentColor"/>',pause:'<path d="M6 3v14M14 3v14" stroke="currentColor" stroke-width="2.5"/>',replay:'<path d="M3.2 8.5a7 7 0 1 1 .9 5.6M3 3v5.5h5.5"/>',fullscreen:'<path d="M3 8V3h5m4 0h5v5M3 12v5h5m4 0h5v-5"/>'},m=e=>`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${j[e]}</svg>`,d=e=>`${Math.floor(Math.max(0,e||0)/60)}:${String(Math.floor(Math.max(0,e||0)%60)).padStart(2,"0")}`,b=(e,a)=>y(e.directory,a,e.version);function c(e,a=!1){const t=$[e],n=b(t,`${t.file}.mp4`);return`<figure class="case-film${a?" case-film--opening":""}" id="${e}" data-film="${e}" aria-labelledby="caption-${e}">
    <div class="case-media">
      <video width="1440" height="960" muted playsinline loop preload="none" poster="${b(t,t.poster)}" aria-label="${t.description}" data-video><source data-src="${n}" type="video/mp4"></video>
      <div class="film-error" hidden><p>This film could not load.</p><a href="${n}" target="_blank" rel="noopener">Open the video ↗</a></div>
    </div>
    <figcaption id="caption-${e}">${t.caption}</figcaption>
    <div class="film-controls" role="group" aria-label="${t.title} playback controls">
      <button type="button" class="film-button" data-play aria-label="Play ${t.title}"><span data-play-icon>${m("play")}</span></button>
      <button type="button" class="film-button" data-replay aria-label="Replay ${t.title}" title="Replay">${m("replay")}</button>
      <input class="film-progress" data-progress type="range" min="0" max="${t.duration}" step="0.01" value="0" disabled aria-label="Position in ${t.title}" aria-valuetext="0:00 of ${d(t.duration)}">
      <span class="film-time" data-time>0:00 / ${d(t.duration)}</span>
      <button type="button" class="film-button" data-fullscreen data-inspect aria-label="View ${t.title} full screen" title="Fullscreen">${m("fullscreen")}</button>
    </div>
    ${t.chapters?'<details class="film-chapters"><summary>Explore the film <span aria-hidden="true">⌄</span></summary><div data-chapters></div></details>':""}
  </figure>`}const L=y("jarwiz-grounded-review","prototypes/revised.html","grounded-flow-v5"),M=y("jarwiz-grounded-review","journey-map.png","grounded-flow-v5");document.querySelector("#case-content").innerHTML=`
  <section class="case-opening" aria-label="Start with evidence">
    ${c("start",!0)}
    <p class="motion-note" hidden>Films are paused for reduced motion. Play any film when you’re ready.</p>
  </section>
  <section class="case-interlude case-introduction" aria-labelledby="thinking-title">
    <h2 id="thinking-title">Product thinking rarely arrives in order.</h2>
    <p>Reports suggest possibilities. Prototypes expose gaps. New evidence changes the plan. I designed Jarwiz to keep the sources, ideas and working artifacts together as the thinking changes.</p>
    <p class="scenario-note">A familiar PM question: how might a new user reach a first useful plan?</p>
  </section>
  <section class="case-chapter" aria-labelledby="tangible-title">
    <header class="case-interlude case-interlude--attached">
      <h2 id="tangible-title">Make a direction tangible.</h2>
      <p>Select the journey and current screen to give a prototype its starting point. Then point to the detail that needs work.</p>
    </header>
    <div class="film-pair">${c("build")}${c("refine")}</div>
    <div class="case-companions" aria-label="Explore the onboarding direction"><a href="${L}" target="_blank" rel="noopener">Try the prototype ↗</a><a href="${M}" target="_blank" rel="noopener">Explore the journey map ↗</a></div>
  </section>
  <section class="case-chapter" aria-labelledby="evidence-title">
    <header class="case-interlude">
      <h2 id="evidence-title">Let new evidence change the plan.</h2>
      <p>Sessions from onboarding v1 put a requirement in PRD v2 in question. Jarwiz flags the tension; the PM decides whether to change it.</p>
      <p class="scenario-note">Illustrative session data</p>
    </header>
    <div class="film-pair">${c("notice")}${c("update")}</div>
  </section>
  <section class="case-chapter" aria-labelledby="conversation-title">
    <header class="case-interlude">
      <p class="case-context">Team review · A separate travel-notes PRD</p>
      <h2 id="conversation-title">Keep the conversation close.</h2>
      <p>As the author writes, teammates question the sync behavior. After a human reply, Jarwiz joins the thread with a sourced recommendation. The document stays under the author’s control.</p>
    </header>
    ${c("discussion")}
  </section>
  <section class="case-interlude case-expansion" aria-labelledby="beyond-title">
    <h2 id="beyond-title">The same model, in other kinds of work.</h2>
    <p>Context can guide a small personal decision or a detailed operating plan. These examples extend the canvas beyond the PM workflow.</p>
  </section>
  <section class="case-chapter" aria-labelledby="context-title">
    <header class="case-interlude case-interlude--attached">
      <p class="case-context">Personal planning · Kyoto</p>
      <h2 id="context-title">Ask the next question.</h2>
      <p>A detailed trip is already on the board. “What should I wear for this trip?” draws on the walking plans, packing limits and fit preferences.</p>
    </header>
    ${c("context")}
  </section>
  <section class="case-chapter" aria-labelledby="sales-title">
    <header class="case-interlude">
      <p class="case-context">Sales planning · Connected-source workflow</p>
      <h2 id="sales-title">Turn source updates into a working view.</h2>
      <p>An opportunity register, quarter plan and deal updates become a dashboard with an overview, account detail and owned next steps.</p>
    </header>
    ${c("sales")}
    <p class="case-source-note">Demonstrated with prepared Google Drive and Slack source snapshots and illustrative sales data.</p>
  </section>
  <section class="case-decisions" aria-labelledby="decisions-title">
    <h2 id="decisions-title">A few decisions behind the experience.</h2>
    <div class="decision-list">
      <div><h3>Keep context inspectable.</h3><p>I replaced inter-card wires with compact source chips, keeping references close while allowing the board to grow.</p></div>
      <div><h3>Let the task shape the output.</h3><p>A prototype needs working controls. A comparison needs rows and visuals. A pipeline needs a dashboard people can inspect.</p></div>
      <div><h3>Make changes deliberate.</h3><p>Comments propose a correction. Explicit approval applies it. The existing artifact stays visible while the replacement is prepared.</p></div>
    </div>
  </section>
  <section class="case-interlude case-reflection" aria-labelledby="reflection-title">
    <h2 id="reflection-title">Keep the reasoning available.</h2>
    <p>The result is a working product and a set of demonstrated workflows. Next, I’d test whether PMs can trace a recommendation to its source, revise it confidently and distinguish a suggestion from an applied change.</p>
  </section>`;const s=new Map;let u=null,l=null,w=0;function o(e){const a=s.get(e),t=!e.paused&&!e.ended,n=Number.isFinite(e.duration)?e.duration:a.film.duration;a.playButton.setAttribute("aria-label",`${t?"Pause":"Play"} ${a.film.title}`),a.playButton.querySelector("[data-play-icon]").innerHTML=m(t?"pause":"play"),a.figure.dataset.playing=String(t),a.time.textContent=`${d(e.currentTime)} / ${d(n)}`,a.progress.max=n,a.scrubbing||(a.progress.value=e.currentTime),a.progress.setAttribute("aria-valuetext",`${d(e.currentTime)} of ${d(n)}`)}function x(e,a){const t=e.figure.querySelector("[data-chapters]");t&&(t.replaceChildren(),a.forEach(n=>{const i=document.createElement("button");i.type="button",i.textContent=`${d(n.time)}  ${n.label}`,i.addEventListener("click",()=>{f(e.video);const r=()=>{e.video.currentTime=n.time,g(e.video,!0)};e.video.readyState>=1?r():e.video.addEventListener("loadedmetadata",r,{once:!0}),t.closest("details").open=!1}),t.append(i)}))}function f(e){const a=s.get(e);a.prepared||(a.prepared=!0,e.querySelector("source").src=e.querySelector("source").dataset.src,e.load(),fetch(b(a.film,`${a.film.file}.json`)).then(t=>t.ok?t.json():null).then(t=>{var i;if(!t||!Number.isFinite(t.duration)||t.duration<=0)return;const n=(i=t.chapters)==null?void 0:i.filter(r=>Number.isFinite(r.time)&&r.time>=0&&r.time<t.duration&&typeof r.label=="string");n!=null&&n.length&&a.film.chapters&&x(a,n)}).catch(()=>{}))}function p(e=null){s.forEach((a,t)=>{t!==e&&t.pause()})}function g(e,a=!1){const t=s.get(e);f(e),a&&(t.userPaused=!1,l=e),u=e,p(e),e.play().then(()=>{(u!==e||document.hidden)&&e.pause()}).catch(()=>o(e))}function P(){if(w=0,document.hidden){p();return}if(l&&s.get(l).inView){p(l);return}if(l=null,v.matches){u=null,p();return}let e=null,a=-1/0;if(s.forEach((t,n)=>{if(!t.inView||t.unavailable)return;const i=n.getBoundingClientRect(),r=Math.max(0,Math.min(innerHeight,i.bottom)-Math.max(0,i.top));if(r<Math.min(i.height,innerHeight)*.35)return;const k=r-Math.abs(i.top+i.height/2-innerHeight/2)*.2;k>a&&(e=n,a=k)}),!e||s.get(e).userPaused){u=null,p();return}(u!==e||e.paused)&&g(e)}function h(){w||(w=requestAnimationFrame(P))}const E=new IntersectionObserver(e=>{e.forEach(({target:a,isIntersecting:t})=>{t&&(f(a),E.unobserve(a))})},{rootMargin:"400px 0px"}),A=new IntersectionObserver(e=>{e.forEach(({target:a,isIntersecting:t,intersectionRatio:n})=>{const i=s.get(a);i.inView=t&&n>=.15,i.inView||(a.pause(),l===a&&(l=null))}),h()},{threshold:[0,.15,.35,.5,.75,1]});for(const e of document.querySelectorAll("[data-video]")){const a=e.closest("[data-film]"),t={video:e,figure:a,film:$[a.dataset.film],prepared:!1,inView:!1,userPaused:!1,unavailable:!1,scrubbing:!1,playButton:a.querySelector("[data-play]"),progress:a.querySelector("[data-progress]"),time:a.querySelector("[data-time]")};s.set(e,t),t.film.chapters&&x(t,t.film.chapters),e.addEventListener("play",()=>{p(e),o(e)}),e.addEventListener("pause",()=>o(e)),e.addEventListener("timeupdate",()=>o(e)),e.addEventListener("seeked",()=>o(e)),e.addEventListener("loadedmetadata",()=>{t.progress.disabled=!1,o(e)}),e.addEventListener("loadeddata",()=>{t.unavailable=!1,h()});const n=()=>{t.prepared&&(t.unavailable=!0,a.querySelector(".film-error").hidden=!1,o(e))};e.addEventListener("error",n),e.querySelector("source").addEventListener("error",n),t.playButton.addEventListener("click",()=>{e.paused?g(e,!0):(t.userPaused=!0,l=null,u=null,e.pause())}),a.querySelector("[data-replay]").addEventListener("click",()=>{f(e);const r=()=>{e.currentTime=0,g(e,!0)};e.readyState>=1?r():e.addEventListener("loadedmetadata",r,{once:!0})}),t.progress.addEventListener("pointerdown",()=>{t.scrubbing=!0});const i=()=>{t.scrubbing=!1,o(e)};t.progress.addEventListener("pointerup",i),t.progress.addEventListener("pointercancel",i),t.progress.addEventListener("blur",i),t.progress.addEventListener("input",()=>{e.currentTime=Number(t.progress.value),o(e)}),a.querySelector("[data-fullscreen]").addEventListener("click",async()=>{f(e),e.controls=!0;try{e.requestFullscreen?await e.requestFullscreen():e.webkitEnterFullscreen?e.webkitEnterFullscreen():window.open(e.querySelector("source").src,"_blank","noopener")}catch{window.open(e.querySelector("source").src,"_blank","noopener")}}),e.addEventListener("webkitendfullscreen",()=>{e.controls=!1}),E.observe(e),A.observe(e)}function q(){document.querySelector(".motion-note").hidden=!v.matches,v.matches&&(l=null,u=null,p()),h()}q();v.addEventListener("change",q);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||s.forEach((e,a)=>{a.controls=!1})});document.addEventListener("visibilitychange",h);window.addEventListener("scroll",h,{passive:!0});window.addEventListener("resize",h);
