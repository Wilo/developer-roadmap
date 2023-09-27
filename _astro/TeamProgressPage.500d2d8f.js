import{j as e}from"./jsx-runtime.391947bd.js";import{r as d}from"./index.ed373d49.js";import{a as A}from"./http.64a7434f.js";import{p as L}from"./page.c1a8a472.js";import{u as B}from"./use-toast.fb52de5d.js";import{u as K}from"./index.9435383e.js";import{b as H}from"./team.12f2469e.js";import{g as V,s as J}from"./browser.cc6a173a.js";import{E as O}from"./external-link.c102f3b3.js";import{u as R}from"./use-auth.2b975076.js";import{D as Q}from"./index.es.ebad3893.js";import{S as W}from"./Spinner.cc2f813e.js";/* empty css                       */import{u as X}from"./use-outside-click.54b69c89.js";import{u as Z}from"./use-keydown.0305ad6b.js";import{a as I,u as ee}from"./resource-progress.495f7d07.js";import{C as se}from"./close.bb7a0ac2.js";import"./jwt.1b92699e.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function re(g){const{member:t,onShowResourceProgress:n,isMyProgress:u=!1}=g,h=t?.progress?.sort((o,m)=>m.done-o.done),[f,p]=d.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex h-full min-h-[270px] flex-col overflow-hidden rounded-md border",children:[e.jsxs("div",{className:"relative flex items-center gap-3 border-b p-3",children:[e.jsx("img",{src:t.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${t.avatar}`:"/images/default-avatar.png",alt:t.name||"",className:"min-w-[32px] min-h-[32px] h-8 w-8 rounded-full"}),e.jsxs("div",{className:"inline-grid w-full",children:[!u&&e.jsx("h3",{className:"truncate font-medium",children:t.name}),u&&e.jsxs("div",{className:"inline-grid grid-cols-[auto,32px] items-center gap-1.5",children:[e.jsx("h3",{className:"truncate font-medium",children:t.name}),e.jsx("span",{className:"rounded-md bg-red-500 px-1 py-0.5 text-xs text-white",children:"You"})]}),e.jsx("p",{className:"truncate text-sm text-gray-500",children:t.email})]})]}),e.jsxs("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(f?h:h.slice(0,4)).map(o=>e.jsxs("button",{onClick:()=>n(o.resourceId),className:"group relative overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none",children:[e.jsxs("span",{className:"relative z-10 flex items-center justify-between text-sm",children:[e.jsx("span",{className:"inline-grid",children:e.jsx("span",{className:"truncate",children:o.resourceTitle})}),e.jsxs("span",{className:"ml-1.5 shrink-0 text-xs text-gray-400",children:[o.done," / ",o.total]})]}),e.jsx("span",{className:"absolute inset-0 bg-gray-100 group-hover:bg-gray-200",style:{width:`${o.done/o.total*100}%`}})]},o.resourceId)),h.length>4&&!f&&e.jsxs("button",{onClick:()=>p(!0),className:"text-sm text-gray-400 underline",children:["+ ",h.length-4," more"]}),f&&e.jsx("button",{onClick:()=>p(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),h.length===0&&e.jsx("div",{className:"text-sm text-gray-500",children:"No progress"})]})]},t._id)})}function te(g){const{onShowResourceProgress:t}=g,{members:n,resourceTitle:u,resourceId:h}=g.roadmap,{t:f}=V(),p=R(),[o,m]=d.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex h-full min-h-[270px] flex-col rounded-md border",children:[e.jsx("div",{className:"flex items-center gap-3 border-b p-3",children:e.jsxs("div",{className:"flex min-w-0 flex-grow items-center justify-between",children:[e.jsx("h3",{className:"truncate font-medium",children:u}),e.jsx("a",{href:`/${h}?t=${f}`,className:"group mb-0.5 flex shrink-0 items-center justify-between text-base font-medium leading-none text-black",target:"_blank",children:e.jsx("img",{alt:"link",src:O.src,className:"ml-2 h-4 w-4 opacity-20 transition-opacity group-hover:opacity-100"})})]})}),e.jsxs("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(o?n:n.slice(0,4)).map(l=>{const x=p?.email===l?.member?.email;return l.progress?e.jsxs("button",{className:`group relative w-full overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none ${x?"border-green-500 hover:border-green-600":""}`,onClick:()=>{t(l.member,l.progress?.resourceId)},children:[e.jsxs("span",{className:"relative z-10 flex items-center justify-between gap-1 text-sm",children:[e.jsxs("span",{className:"inline-grid grid-cols-[20px_auto] gap-3",children:[e.jsx("img",{src:l.member.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${l.member.avatar}`:"/images/default-avatar.png",alt:l.member.name||"",className:"h-5 w-5 shrink-0 rounded-full"}),e.jsx("span",{className:"inline-grid grid-cols-[auto,32px] items-center",children:e.jsx("span",{className:"mr-[5px] truncate",children:l?.member?.name})})]}),e.jsxs("span",{className:"shrink-0 text-xs text-gray-400",children:[l?.progress?.done," / ",l?.progress?.total]})]}),e.jsx("span",{className:`absolute inset-0 ${x?"bg-green-100 group-hover:bg-green-200":"bg-gray-100 group-hover:bg-gray-200"}`,style:{width:`${l?.progress?.done/l?.progress?.total*100}%`}})]},l?.member._id):null}),n.length>4&&!o&&e.jsxs("button",{onClick:()=>m(!0),className:"text-sm text-gray-400 underline",children:["+ ",n.length-4," more"]}),o&&e.jsx("button",{onClick:()=>m(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),n.length===0&&e.jsx("div",{className:"text-sm text-gray-500",children:"No progress"})]})]})})}function ae(g){const{resourceId:t,member:n,resourceType:u,onShowMyProgress:h,teamId:f,onClose:p}=g,m=R()?.email===n.email,l=K(H),x=d.useRef(null),j=d.useRef(null),[C,D]=d.useState(!1),[N,r]=d.useState(),[i,y]=d.useState(!0),w=B();let S="https://roadmap.sh";u==="roadmap"?S+=`/${t}.json`:S+=`/best-practices/${t}.json`;async function G(s,a,c,b){const{error:v,response:k}=await A(`https://api.roadmap.sh/v1-get-member-resource-progress/${s}/${a}?resourceType=${c}&resourceId=${b}`);if(v||!k){w.error(v?.message||"Failed to get member progress");return}return r(k),k}async function Y(s){const c=await(await fetch(s)).json(),b=await Q(c,{fontURL:"/fonts/balsamiq.woff2"});x.current?.replaceChildren(b)}Z("Escape",()=>{C||p()}),X(j,()=>{C||p()}),d.useEffect(()=>{!x.current||!S||!t||!u||!f||(y(!0),Promise.all([Y(S),G(f,n._id,u,t)]).then(([s,a={}])=>{const{removed:c=[],done:b=[],learning:v=[],skipped:k=[]}=a;b.forEach(P=>I(P,"done")),v.forEach(P=>I(P,"learning")),k.forEach(P=>I(P,"skipped")),c.forEach(P=>I(P,"removed"))}).catch(s=>{console.error(s),w.error(s?.message||"Something went wrong. Please try again!")}).finally(()=>{y(!1)}))},[n]);function $(s,a){!t||!u||!m||(L.set("Updating progress"),ee({resourceId:t,resourceType:u,topicId:s},a).then(()=>{I(s,a),G(f,n._id,u,t).then(c=>{r(c)})}).catch(c=>{alert("Something went wrong, please try again."),console.error(c)}).finally(()=>{L.set("")}))}async function _(s){const a=s.target?.closest("g");if(!a)return;const c=a.dataset?a.dataset.groupId:"";if(!c)return;if(a.classList.contains("removed")){s.preventDefault();return}s.preventDefault();const b=a.classList.contains("done"),v=c.replace(/^\d+-/,"");$(v,b?"pending":"done")}async function z(s){const a=s.target?.closest("g");if(!a)return;const c=a.dataset?a.dataset.groupId:"";if(!c||a.classList.contains("removed"))return;s.preventDefault();const b=c.replace(/^\d+-/,""),v=a.classList.contains("learning"),k=a.classList.contains("skipped");if(s.shiftKey){s.preventDefault(),$(b,v?"pending":"learning");return}if(s.altKey){s.preventDefault(),$(b,k?"pending":"skipped");return}}d.useEffect(()=>{if(!(!n||!x.current))return x.current?.addEventListener("contextmenu",_),x.current?.addEventListener("click",z),()=>{x.current?.removeEventListener("contextmenu",_),x.current?.removeEventListener("click",z)}},[n]);const T=N?.removed||[],E=N?.done.filter(s=>!T.includes(s)).length||0,q=N?.learning.filter(s=>!T.includes(s)).length||0,F=N?.skipped.filter(s=>!T.includes(s)).length||0,M=n.progress.find(s=>s.resourceId===t)?.total||0,U=Math.round(E/M*100);return e.jsx("div",{className:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e.jsx("div",{id:l?.type==="company"?"customized-roadmap":"original-roadmap",className:"relative mx-auto h-full w-full max-w-4xl p-4 md:h-auto",children:e.jsxs("div",{ref:j,className:"popup-body relative rounded-lg bg-white pt-[1px] shadow",children:[m&&e.jsxs("div",{className:"sticky top-1 mx-1 mb-0 mt-1 rounded-xl bg-gray-900 p-4 text-gray-300",children:[e.jsx("h2",{className:"mb-1.5 text-base",children:"Follow the Instructions below to update your progress"}),e.jsxs("ul",{className:"flex flex-col gap-1",children:[e.jsxs("li",{className:"leading-loose",children:[e.jsx("kbd",{className:"rounded-md bg-yellow-200 px-2 py-1.5 text-xs text-gray-900",children:"Right Mouse Click"})," ","on a topic to mark as"," ",e.jsx("span",{className:"font-medium text-white",children:"Done"}),"."]}),e.jsxs("li",{className:"leading-loose",children:[e.jsx("kbd",{className:"rounded-md bg-yellow-200 px-2 py-1.5 text-xs text-gray-900",children:"Shift"})," ","+"," ",e.jsx("kbd",{className:"rounded-md bg-yellow-200 px-2 py-1.5 text-xs text-gray-900",children:"Click"})," ","on a topic to mark as"," ",e.jsx("span",{className:"font-medium text-white",children:"In progress"}),"."]})]})]}),e.jsxs("div",{className:"p-4",children:[!m&&e.jsxs("div",{className:"mb-5 mt-0 text-left md:mt-4 md:text-center",children:[e.jsxs("h2",{className:"mb-1 text-lg font-bold md:text-2xl",children:[n.name,"'s Progress"]}),e.jsxs("p",{className:"hidden text-xs text-gray-500 sm:text-sm md:block md:text-base",children:["You are looking at ",n.name,"'s progress."," ",e.jsx("button",{className:"text-blue-600 underline",onClick:h,children:"View your progress"}),"."]}),e.jsx("p",{className:"block text-gray-500 md:hidden",children:e.jsx("button",{className:"text-blue-600 underline",onClick:h,children:"View your progress."})})]}),e.jsxs("p",{className:`-mx-4 mb-3 flex items-center justify-start border-b border-t px-4 py-2 text-sm sm:hidden ${i?"striped-loader":""}`,children:[e.jsxs("span",{className:"mr-2.5 block rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e.jsx("span",{children:U}),"% Done"]}),e.jsxs("span",{children:[e.jsx("span",{children:E})," of ",e.jsx("span",{children:M})," done"]})]}),e.jsxs("p",{className:`-mx-4 mb-3 hidden items-center justify-center border-b border-t py-2 text-sm sm:flex ${i?"striped-loader":""}`,children:[e.jsxs("span",{className:"mr-2.5 block rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e.jsx("span",{children:U}),"% Done"]}),e.jsxs("span",{children:[e.jsx("span",{children:E})," completed"]}),e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-learning":"",children:q})," in progress"]}),F>0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-skipped":"",children:F})," ","skipped"]})]}),e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-total":"",children:M})," Total"]})]})]}),e.jsx("div",{id:"resource-svg-wrap",ref:x,className:"px-4 pb-2"}),i&&e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(W,{isDualRing:!1,className:"mb-4 mt-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-8 sm:w-8"})}),e.jsxs("button",{type:"button",className:`absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:text-gray-900 lg:hidden ${m?"hover:bg-gray-800":"hover:bg-gray-100"}`,onClick:p,children:[e.jsx("img",{alt:"close",src:se.src,className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]})})})}const ne=[{label:"Members",value:"member"},{label:"Roadmaps",value:"roadmap"}];function Ie(){const{t:g,gb:t}=V(),[n,u]=d.useState(!0),h=B(),f=K(H),p=R(),[o,m]=d.useState(),[l,x]=d.useState([]),[j,C]=d.useState(t||"member");async function D(){const{response:r,error:i}=await A(`https://api.roadmap.sh/v1-get-team-progress/${g}`);if(i||!r){h.error(i?.message||"Failed to get team progress");return}x(r.sort((y,w)=>y.email===p?.email?-1:w.email===p?.email?1:0))}d.useEffect(()=>{g&&D().then(()=>{L.set(""),u(!1)})},[g]),d.useEffect(()=>{j&&J({gb:j})},[j]);const N=[];for(const r of f?.roadmaps||[]){const i=[];for(const y of l){const w=y.progress.find(S=>S.resourceId===r);w&&i.push({member:y,progress:w})}i.length&&N.push({resourceId:r,resourceTitle:i?.[0].progress?.resourceTitle||"",resourceType:"roadmap",members:i})}if(!g){window.location.href="/";return}return n?null:e.jsxs("div",{children:[o&&e.jsx(ae,{member:o.member,teamId:g,resourceId:o.resourceId,resourceType:"roadmap",onClose:()=>{m(void 0)},onShowMyProgress:()=>{m({resourceId:o.resourceId,member:l.find(r=>r.email===p?.email)})}}),e.jsx("div",{className:"flex items-center gap-2",children:ne.map(r=>e.jsx("button",{className:`rounded-md border p-1 px-2 text-sm ${j===r.value?" border-gray-400 bg-gray-200 ":""}`,onClick:()=>C(r.value),children:r.label},r.value))}),e.jsxs("div",{className:"mt-6",children:[j==="roadmap"&&e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:N.map(r=>e.jsx(te,{roadmap:r,onShowResourceProgress:(i,y)=>{m({resourceId:y,member:i})}},r.resourceId))}),j==="member"&&e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:l.map(r=>e.jsx(re,{member:r,isMyProgress:r?.email===p?.email,onShowResourceProgress:i=>{m({resourceId:i,member:r})}},r._id))})]})]})}export{Ie as TeamProgressPage};
