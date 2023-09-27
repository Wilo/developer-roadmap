import{D as h}from"./index.es.ebad3893.js";import{h as l}from"./http.64a7434f.js";import{i as o}from"./jwt.1b92699e.js";import{r as u,u as p,a as g,b as m}from"./resource-progress.495f7d07.js";import{p as a}from"./page.c1a8a472.js";import{s as f}from"./popup.a359f713.js";import"./hoisted.91b754da.js";import"./navigation.776bdd27.js";import"./index.a98c85f5.js";class w{resourceId;resourceType;jsonUrl;loaderHTML;containerId;loaderId;constructor(){this.resourceId="",this.resourceType="",this.jsonUrl="",this.loaderHTML=null,this.containerId="resource-svg-wrap",this.loaderId="resource-loader",this.init=this.init.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.jsonToSvg=this.jsonToSvg.bind(this),this.handleSvgClick=this.handleSvgClick.bind(this),this.handleSvgRightClick=this.handleSvgRightClick.bind(this),this.prepareConfig=this.prepareConfig.bind(this),this.switchRoadmap=this.switchRoadmap.bind(this),this.updateTopicStatus=this.updateTopicStatus.bind(this)}get loaderEl(){return document.getElementById(this.loaderId)}get containerEl(){return document.getElementById(this.containerId)}prepareConfig(){if(!this.containerEl)return!1;this.loaderHTML=this.loaderEl.innerHTML;const t=this.containerEl.dataset;return this.resourceType=t.resourceType,this.resourceId=t.resourceId,!0}jsonToSvg(t){return t?this.containerEl?(this.containerEl.innerHTML=this.loaderHTML,fetch(t).then(e=>e.json()).then(e=>h(e,{fontURL:"/fonts/balsamiq.woff2"})).then(e=>{this.containerEl?.replaceChildren(e)}).then(()=>u(this.resourceType,this.resourceId)).catch(e=>{if(!this.containerEl)return;const s=`
          <strong>There was an error.</strong><br>
          
          Try loading the page again. or submit an issue on GitHub with following:<br><br>

          ${e.message} <br /> ${e.stack}
        `;this.containerEl.innerHTML=`<div class="error py-5 text-center text-red-600 mx-auto">${s}</div>`})):null:(console.error("jsonUrl not defined in frontmatter"),null)}trackVisit(){o()&&window.setTimeout(()=>{l("https://api.roadmap.sh/v1-visit",{resourceId:this.resourceId,resourceType:this.resourceType}).then(()=>null)},0)}onDOMLoaded(){if(!this.prepareConfig())return;const e=new URLSearchParams(window.location.search).get("r");this.trackVisit(),e?this.switchRoadmap(`/${e}.json`):this.jsonToSvg(this.resourceType==="roadmap"?`/${this.resourceId}.json`:`/best-practices/${this.resourceId}.json`)}switchRoadmap(t){this.containerEl?.setAttribute("style","");const e=t.split("/").pop()?.replace(".json","");if(window?.history?.pushState){const s=new URL(window.location.href),r=this.resourceType[0];s.searchParams.delete(r),e!==this.resourceId&&s.searchParams.set(r,e),window.history.pushState(null,"",s.toString())}this.jsonToSvg(t)?.then(()=>{})}updateTopicStatus(t,e){if(!o()){f();return}a.set("Updating progress"),p({resourceId:this.resourceId,resourceType:this.resourceType,topicId:t},e).then(()=>{g(t,e),m()}).catch(s=>{alert("Something went wrong, please try again."),console.error(s)}).finally(()=>{a.set("")})}handleSvgRightClick(t){const e=t.target?.closest("g")||{},s=e.dataset?e.dataset.groupId:"";if(!s||e.classList.contains("removed"))return;t.preventDefault();const r=e.classList.contains("done"),n=s.replace(/^\d+-/,"");this.updateTopicStatus(n,r?"pending":"done")}handleSvgClick(t){const e=t.target?.closest("g")||{},s=e.dataset?e.dataset.groupId:"";if(!s||(t.stopImmediatePropagation(),e.classList.contains("removed")))return;if(/^ext_link/.test(s)){const i=s.replace("ext_link:","");i.startsWith("roadmap.sh")||window.fireEvent({category:"RoadmapExternalLink",action:`${this.resourceType} / ${this.resourceId}`,label:i}),window.open(`https://${i}`);return}if(/^json:/.test(s)){const i=s.replace("json:","");this.switchRoadmap(i);return}if(/^check:/.test(s)){window.dispatchEvent(new CustomEvent(`${this.resourceType}.topic.toggle`,{detail:{topicId:s.replace("check:",""),resourceType:this.resourceType,resourceId:this.resourceId}}));return}const r=s.replace(/^\d+-/,""),n=e.classList.contains("learning"),d=e.classList.contains("skipped");if(t.shiftKey){t.preventDefault(),this.updateTopicStatus(r,n?"pending":"learning");return}if(t.altKey){t.preventDefault(),this.updateTopicStatus(r,d?"pending":"skipped");return}window.dispatchEvent(new CustomEvent(`${this.resourceType}.topic.click`,{detail:{topicId:r,resourceId:this.resourceId,resourceType:this.resourceType}}))}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded),window.addEventListener("click",this.handleSvgClick),window.addEventListener("contextmenu",this.handleSvgRightClick)}}const I=new w;I.init();class T{constructor(){this.init=this.init.bind(this),this.onScroll=this.onScroll.bind(this),this.shareIconsId="page-share-icons"}get shareIconsEl(){return document.getElementById(this.shareIconsId)}onScroll(){if(window.scrollY<100||window.innerWidth<1050)return this.shareIconsEl.classList.add("hidden"),null;this.shareIconsEl.classList.remove("hidden")}init(){this.shareIconsEl&&window.addEventListener("scroll",this.onScroll,{passive:!0})}}const v=new T;v.init();
