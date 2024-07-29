(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[87314],{97149:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=r(74848),s=r(28453),n=r(54152),o=r(7840);const i={title:"How to Work with Frames",id:"3-work-with-frames",slug:"/3-work-with-frames",sidebar_label:"How to Work with Frames",description:"In this tip, you'll learn how to work with frames and write tests against them.",number:3,hide_table_of_contents:!0,level:1,publish_date:new Date("2015-08-25T00:00:00.000Z"),image:"img/cards/3-work-with-frames.png",tags:["frames"],category:["fundamentals"]},l="How to Work with Frames",d={id:"work-with-frames/3-work-with-frames",title:"How to Work with Frames",description:"In this tip, you'll learn how to work with frames and write tests against them.",source:"@site/tips/3-work-with-frames/main.mdx",sourceDirName:"3-work-with-frames",slug:"/3-work-with-frames",permalink:"/tips/3-work-with-frames",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/3-work-with-frames/main.mdx",tags:[{inline:!0,label:"frames",permalink:"/tips/tags/frames"}],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{title:"How to Work with Frames",id:"3-work-with-frames",slug:"/3-work-with-frames",sidebar_label:"How to Work with Frames",description:"In this tip, you'll learn how to work with frames and write tests against them.",number:3,hide_table_of_contents:!0,level:1,publish_date:"2015-08-25T00:00:00.000Z",image:"img/cards/3-work-with-frames.png",tags:["frames"],category:["fundamentals"]},sidebar:"defaultSidebar",previous:{title:"_serenity-js",permalink:"/tips/work-with-frames/_serenity-js"},next:{title:"_csharp",permalink:"/tips/work-with-multiple-windows/_csharp"}},h={},u=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Examples",id:"examples",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Outro",id:"outro",level:2},{value:"Special Thanks",id:"special-thanks",level:2},{value:"Authors",id:"authors",level:2}];function c(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-work-with-frames",children:"How to Work with Frames"}),"\n",(0,a.jsx)(t.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,a.jsx)(t.p,{children:"In this tip, you'll learn how to work with frames and write tests against them."}),"\n",(0,a.jsx)(t.p,{children:"On occasion, we may encounter relics of the front-end world, such as frames. When writing tests against them, it's\neasy to make a mistake if we're not paying attention."}),"\n",(0,a.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,a.jsx)(t.p,{children:"Rather than getting frustrated when authoring your tests, you can work with the elements in a frame switching\nto that frame first. Then the rest of your test should be more straightforward."}),"\n",(0,a.jsx)(t.p,{children:"Let's explore further with some examples."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,a.jsx)(n.A,{languages:[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"},{label:"Selenide",value:"selenide"},{label:"Serenity/JS",value:"serenity-js"}]}),"\n",(0,a.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,a.jsx)(t.h3,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Open the browser"}),"\n",(0,a.jsx)(t.li,{children:"Visit the page"}),"\n",(0,a.jsx)(t.li,{children:"Switch to the nested frame"}),"\n",(0,a.jsx)(t.li,{children:"Grab the text from the frame and assert that Selenium is in the correct place"}),"\n",(0,a.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Open the browser"}),"\n",(0,a.jsx)(t.li,{children:"Visit the page"}),"\n",(0,a.jsx)(t.li,{children:"Switch to the frame that contains the TinyMCE editor"}),"\n",(0,a.jsx)(t.li,{children:"Grab and clear the text in the editor"}),"\n",(0,a.jsx)(t.li,{children:"Input and grab new text in the editor"}),"\n",(0,a.jsx)(t.li,{children:"Assert that the original and new text entries don't match"}),"\n",(0,a.jsx)(t.li,{children:"Switch to the top level of the page"}),"\n",(0,a.jsx)(t.li,{children:"Grab the text from the top of the page and assert that it's not empty"}),"\n",(0,a.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"outro",children:"Outro"}),"\n",(0,a.jsx)(t.p,{children:"Now you're ready to handily defeat frames when they cross your path."}),"\n",(0,a.jsx)(t.p,{children:"Happy Testing!"}),"\n",(0,a.jsx)(t.h2,{id:"special-thanks",children:"Special Thanks"}),"\n","\n",(0,a.jsx)(o.A,{name:"Mike Millgate",imgSrc:"https://github.com/trabulmonkee.png",description:"Contributed the Python code for this tip.",url:"https://github.com/trabulmonkee"}),"\n",(0,a.jsx)(o.A,{name:"Isaul Vargas",imgSrc:"https://github.com/isaulv.png",description:"Python code review",url:"https://github.com/isaulv"}),"\n",(0,a.jsx)(o.A,{name:"Peter Bittner",imgSrc:"https://github.com/bittner.png",description:"Python code review",url:"https://github.com/bittner"}),"\n",(0,a.jsx)(o.A,{name:"Jonathan Taylor",imgSrc:"https://github.com/jtay2380.png",description:"Contributed the initial C# code for this tip.",url:"https://github.com/jtay2380"}),"\n",(0,a.jsx)(o.A,{name:"Roman Isko",imgSrc:"https://github.com/sturman.png",description:"Contributed the initial Java code for this tip.",url:"https://github.com/sturman"}),"\n",(0,a.jsx)(o.A,{name:"Jan Molak",imgSrc:"https://github.com/jan-molak.png",description:"Contributed the Serenity/JS code for this tip.",url:"https://github.com/jan-molak"}),"\n",(0,a.jsx)(o.A,{name:"Andrei Solntsev",imgSrc:"https://github.com/asolntsev.png",description:"Contributed the Selenide code for this tip.",url:"https://github.com/asolntsev"}),"\n",(0,a.jsx)(t.h2,{id:"authors",children:"Authors"}),"\n",(0,a.jsx)(o.A,{name:"Dave Piacente",imgSrc:"https://github.com/tourdedave.png",description:"Original creator of Elemental Selenium",url:"https://github.com/tourdedave",author:!0}),"\n",(0,a.jsx)(o.A,{name:"Diego Molina",imgSrc:"https://github.com/diemol.png",description:"Current maintainer of Elemental Selenium",url:"https://github.com/diemol",author:!0})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},62771:(e,t,r)=>{"use strict";r.d(t,{_:()=>i,u:()=>l});var a=r(96540),s=r(89532),n=r(74848);const o=a.createContext(null);function i(e){let{children:t,content:r}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return(0,n.jsx)(o.Provider,{value:s,children:t})}function l(){const e=(0,a.useContext)(o);if(null===e)throw new s.dV("DocProvider");return e}},7840:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});r(96540);var a=r(74848);const s=e=>{let{imgSrc:t,name:r,description:s,url:n,author:o=!1}=e;const i=o?"avatar__photo avatar__photo--lg":"avatar__photo";return(0,a.jsxs)("div",{className:"avatar margin-bottom--sm",children:[(0,a.jsx)("img",{className:i,src:t,alt:r}),(0,a.jsxs)("div",{className:"avatar__intro",children:[(0,a.jsx)("div",{className:"avatar__name",children:(0,a.jsx)("a",{href:n,target:"_blank",children:r})}),(0,a.jsx)("small",{className:"avatar__subtitle",children:s})]})]})}},54152:(e,t,r)=>{"use strict";r.d(t,{A:()=>A});var a=r(96540),s=r(34164),n=r(23104),o=r(56347),i=r(205),l=r(57485),d=r(31682),h=r(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:s}}=e;return{value:t,label:r,attributes:a,default:s}}))}(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=c(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[d,u]=p({queryString:r,groupId:s}),[x,w]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,h.Dv)(r);return[s,(0,a.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),b=(()=>{const e=d??x;return m({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),w(e)}),[u,w,n]),tabValues:n}}var w=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=r(74848);function f(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),h=e=>{const t=e.currentTarget,r=l.indexOf(t),s=i[r].value;s!==a&&(d(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:h,...n,className:(0,s.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=x(e);return(0,_.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,_.jsx)(f,{...t,...e}),(0,_.jsx)(v,{...t,...e})]})}function g(e){const t=(0,w.A)();return(0,_.jsx)(y,{...e,children:u(e.children)},String(t))}const j={tabItem:"tabItem_Ymn6"};function k(e){let{children:t,hidden:r,className:a}=e;return(0,_.jsx)("div",{role:"tabpanel",className:(0,s.A)(j.tabItem,a),hidden:r,children:t})}var S=r(62771);const A=function(e){let{languages:t}=e;const[s,n]=(0,a.useState)([]),o=(0,S.u)().frontMatter.id;return(0,a.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,a.lazy)((()=>r(58598)(`./${o}/_${e.value}.mdx`)));return{label:e.label,component:t}})));n(e)})()}),[t]),(0,_.jsx)("div",{children:s.length>0&&(0,_.jsx)(g,{groupId:"elemental-selenium-tabs",children:s.map(((e,t)=>(0,_.jsx)(k,{value:e.label,label:e.label,children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading..."}),children:(0,_.jsx)(e.component,{})})},t)))})})}},58598:(e,t,r)=>{var a={"./1-upload-a-file/_csharp.mdx":[45889,71869,21432,45889],"./1-upload-a-file/_java.mdx":[40356,71869,21432,40356],"./1-upload-a-file/_javascript.mdx":[6937,71869,21432,6937],"./1-upload-a-file/_python.mdx":[58150,71869,21432,58150],"./1-upload-a-file/_ruby.mdx":[46556,71869,21432,46556],"./1-upload-a-file/_selenide.mdx":[9635,71869,21432,9635],"./10-retry-test-actions/_ruby.mdx":[68163,68163],"./11-build-an-interactive-prompt/_ruby.mdx":[65599,65599],"./12-opt-out-of-ab-tests/_csharp.mdx":[48337,48337],"./12-opt-out-of-ab-tests/_java.mdx":[86836,86836],"./12-opt-out-of-ab-tests/_javascript.mdx":[28777,28777],"./12-opt-out-of-ab-tests/_python.mdx":[80342,80342],"./12-opt-out-of-ab-tests/_ruby.mdx":[38668,38668],"./13-how-to-access-basic-auth/_csharp.mdx":[70243,70243],"./13-how-to-access-basic-auth/_java.mdx":[71570,71570],"./13-how-to-access-basic-auth/_javascript.mdx":[66459,66459],"./13-how-to-access-basic-auth/_python.mdx":[5292,5292],"./13-how-to-access-basic-auth/_ruby.mdx":[26066,26066],"./14-interactive-prompts-revisited/_ruby.mdx":[90690,90690],"./15-download-secure-files/_ruby.mdx":[99353,99353],"./16-take-screenshot-on-failure/_csharp.mdx":[45748,45748],"./16-take-screenshot-on-failure/_java.mdx":[957,957],"./16-take-screenshot-on-failure/_javascript.mdx":[67164,67164],"./16-take-screenshot-on-failure/_python.mdx":[16983,16983],"./16-take-screenshot-on-failure/_ruby.mdx":[76821,76821],"./17-retrieve-http-status-codes/_ruby.mdx":[33150,33150],"./19-data-driven-testing/_ruby.mdx":[71841,71841],"./2-download-a-file/_csharp.mdx":[11703,71869,21432,11703],"./2-download-a-file/_java.mdx":[60654,71869,21432,60654],"./2-download-a-file/_javascript.mdx":[58223,71869,21432,58223],"./2-download-a-file/_python.mdx":[43416,71869,21432,43416],"./2-download-a-file/_ruby.mdx":[30542,71869,21432,30542],"./2-download-a-file/_selenide.mdx":[8173,71869,21432,8173],"./22-locator-strategy/_ruby.mdx":[78995,78995],"./23-dynamic-pages/_ruby.mdx":[92394,92394],"./24-rest-apis/_ruby.mdx":[27169,27169],"./25-how-to-work-with-tables/_csharp.mdx":[42614,42614],"./25-how-to-work-with-tables/_java.mdx":[36083,36083],"./25-how-to-work-with-tables/_javascript.mdx":[80102,80102],"./25-how-to-work-with-tables/_python.mdx":[12373,12373],"./25-how-to-work-with-tables/_ruby.mdx":[95931,95931],"./26-cloud/_ruby.mdx":[77932,77932],"./27-parallel/_ruby.mdx":[4125,4125],"./29-chrome-driver/_csharp.mdx":[71464,71464],"./29-chrome-driver/_java.mdx":[18665,18665],"./29-chrome-driver/_python.mdx":[74035,74035],"./29-chrome-driver/_ruby.mdx":[75617,75617],"./3-work-with-frames/_csharp.mdx":[48154,71869,21432,48154],"./3-work-with-frames/_java.mdx":[47263,71869,21432,47263],"./3-work-with-frames/_javascript.mdx":[49962,71869,21432,49962],"./3-work-with-frames/_python.mdx":[7409,71869,21432,7409],"./3-work-with-frames/_ruby.mdx":[52375,71869,21432,52375],"./3-work-with-frames/_selenide.mdx":[6272,71869,21432,6272],"./3-work-with-frames/_serenity-js.mdx":[20324,71869,21432,20324],"./30-mobile/_ruby.mdx":[11554,11554],"./32-css-vs-xpath/_ruby.mdx":[87267,87267],"./33-css-vs-xpath-2/_ruby.mdx":[41773,41773],"./34-css-vs-xpath-3/_ruby.mdx":[11821,11821],"./38-headless/_ruby.mdx":[43601,43601],"./39-drag-and-drop/_ruby.mdx":[46027,46027],"./4-work-with-multiple-windows/_csharp.mdx":[36125,71869,21432,36125],"./4-work-with-multiple-windows/_java.mdx":[46184,71869,21432,46184],"./4-work-with-multiple-windows/_javascript.mdx":[77685,71869,21432,77685],"./4-work-with-multiple-windows/_python.mdx":[3802,71869,21432,3802],"./4-work-with-multiple-windows/_ruby.mdx":[51376,71869,21432,51376],"./4-work-with-multiple-windows/_selenide.mdx":[52079,71869,21432,52079],"./40-disabled-element/_csharp.mdx":[39225,39225],"./40-disabled-element/_java.mdx":[8124,8124],"./40-disabled-element/_javascript.mdx":[15297,15297],"./40-disabled-element/_python.mdx":[19438,19438],"./40-disabled-element/_ruby.mdx":[94388,72007],"./41-one-test-multiple-browsers/_ruby.mdx":[3736,3736],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[69413,69413],"./43-forgot-password/_ruby.mdx":[27997,27997],"./44-exception-handling/_ruby.mdx":[38344,38344],"./45-how-to-test-checkboxes/_csharp.mdx":[94360,94360],"./45-how-to-test-checkboxes/_java.mdx":[58905,58905],"./45-how-to-test-checkboxes/_javascript.mdx":[99136,99136],"./45-how-to-test-checkboxes/_python.mdx":[38499,38499],"./45-how-to-test-checkboxes/_ruby.mdx":[82641,82641],"./47-waiting/_ruby.mdx":[24781,24781],"./48-load-testing/_ruby.mdx":[29968,29968],"./49-performance-testing/_ruby.mdx":[41731,41731],"./5-select-from-a-dropdown/_csharp.mdx":[93483,71869,21432,15864],"./5-select-from-a-dropdown/_java.mdx":[74809,71869,21432,74809],"./5-select-from-a-dropdown/_javascript.mdx":[22048,71869,21432,22048],"./5-select-from-a-dropdown/_python.mdx":[17891,71869,21432,17891],"./5-select-from-a-dropdown/_ruby.mdx":[11953,71869,21432,11953],"./5-select-from-a-dropdown/_selenide.mdx":[16530,71869,21432,16530],"./50-how-to-work-with-hovers/_csharp.mdx":[82996,82996],"./50-how-to-work-with-hovers/_java.mdx":[24125,24125],"./50-how-to-work-with-hovers/_javascript.mdx":[476,476],"./50-how-to-work-with-hovers/_python.mdx":[61431,61431],"./50-how-to-work-with-hovers/_ruby.mdx":[49557,49557],"./51-javascript-alerts/_csharp.mdx":[2671,2671],"./51-javascript-alerts/_java.mdx":[89542,89542],"./51-javascript-alerts/_javascript.mdx":[36215,36215],"./51-javascript-alerts/_python.mdx":[41280,41280],"./51-javascript-alerts/_ruby.mdx":[13510,13510],"./52-grid/_java.mdx":[38876,38876],"./52-grid/_javascript.mdx":[7681,7681],"./52-grid/_python.mdx":[37902,15521],"./52-grid/_ruby.mdx":[25140,25140],"./53-growl/_csharp.mdx":[17625,17625],"./53-growl/_java.mdx":[85743,85743],"./53-growl/_javascript.mdx":[48897,48897],"./53-growl/_python.mdx":[97838,97838],"./53-growl/_ruby.mdx":[72007,94388],"./54-logging/_ruby.mdx":[64071,64071],"./55-wrapper/_ruby.mdx":[92172,92172],"./56-retry-failed-tests/_ruby.mdx":[31988,31988],"./57-junit-xml/_ruby.mdx":[17703,17703],"./58-tagging/_ruby.mdx":[90889,90889],"./6-open-new-window/_csharp.mdx":[90108,71869,21432,90108],"./6-open-new-window/_java.mdx":[43205,71869,21432,43205],"./6-open-new-window/_javascript.mdx":[60852,71869,21432,60852],"./6-open-new-window/_python.mdx":[20879,71869,21432,20879],"./6-open-new-window/_ruby.mdx":[61533,71869,21432,61533],"./6-open-new-window/_selenide.mdx":[230,71869,21432,230],"./60-list-tags/_ruby.mdx":[97771,97771],"./61-how-to-press-keyboard-keys/_csharp.mdx":[65550,65550],"./61-how-to-press-keyboard-keys/_java.mdx":[39275,39275],"./61-how-to-press-keyboard-keys/_javascript.mdx":[83662,83662],"./61-how-to-press-keyboard-keys/_python.mdx":[20029,20029],"./61-how-to-press-keyboard-keys/_ruby.mdx":[11859,11859],"./63-right-click/_csharp.mdx":[69850,69850],"./63-right-click/_java.mdx":[56639,56639],"./63-right-click/_javascript.mdx":[91709,14090],"./63-right-click/_python.mdx":[29105,29105],"./63-right-click/_ruby.mdx":[61751,61751],"./64-limit-bandwidth/_ruby.mdx":[89776,89776],"./65-highlight-elements/_csharp.mdx":[85825,85825],"./65-highlight-elements/_java.mdx":[59492,59492],"./65-highlight-elements/_javascript.mdx":[93561,93561],"./65-highlight-elements/_python.mdx":[81734,81734],"./65-highlight-elements/_ruby.mdx":[65692,65692],"./66-blacklist/_ruby.mdx":[67058,67058],"./67-broken-images/_ruby.mdx":[27824,27824],"./68-load-testing-revisited/_ruby.mdx":[62278,62278],"./69-safari/_java.mdx":[61650,61650],"./69-safari/_ruby.mdx":[16146,16146],"./7-use-a-page-object/_ruby.mdx":[16741,16741],"./72-headless-chrome/_ruby.mdx":[33864,33864],"./8-download-a-file-revisited/_csharp.mdx":[30509,30509],"./8-download-a-file-revisited/_java.mdx":[89176,89176],"./8-download-a-file-revisited/_python.mdx":[21738,21738],"./8-download-a-file-revisited/_ruby.mdx":[47392,47392],"./9-use-a-base-page-object/_ruby.mdx":[57937,57937]};function s(e){if(!r.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(s)))}s.keys=()=>Object.keys(a),s.id=58598,e.exports=s},28453:(e,t,r)=>{"use strict";r.d(t,{R:()=>o,x:()=>i});var a=r(96540);const s={},n=a.createContext(s);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);