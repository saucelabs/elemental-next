(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[7314],{82223:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"work-with-frames/3-work-with-frames","title":"How to Work with Frames","description":"In this tip, you\'ll learn how to work with frames and write tests against them.","source":"@site/tips/3-work-with-frames/main.mdx","sourceDirName":"3-work-with-frames","slug":"/3-work-with-frames","permalink":"/tips/3-work-with-frames","draft":false,"unlisted":false,"editUrl":"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/3-work-with-frames/main.mdx","tags":[{"inline":true,"label":"frames","permalink":"/tips/tags/frames"}],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1732054621000,"frontMatter":{"title":"How to Work with Frames","id":"3-work-with-frames","slug":"/3-work-with-frames","sidebar_label":"How to Work with Frames","description":"In this tip, you\'ll learn how to work with frames and write tests against them.","number":3,"hide_table_of_contents":true,"level":1,"publish_date":"2015-08-25T00:00:00.000Z","image":"img/cards/3-work-with-frames.png","tags":["frames"],"category":["fundamentals"]},"sidebar":"defaultSidebar","previous":{"title":"How To Download a File","permalink":"/tips/2-download-a-file"},"next":{"title":"How to Work with Multiple Windows","permalink":"/tips/4-work-with-multiple-windows"}}');var s=a(74848),n=a(28453),o=a(54152),i=a(7840);const l={title:"How to Work with Frames",id:"3-work-with-frames",slug:"/3-work-with-frames",sidebar_label:"How to Work with Frames",description:"In this tip, you'll learn how to work with frames and write tests against them.",number:3,hide_table_of_contents:!0,level:1,publish_date:new Date("2015-08-25T00:00:00.000Z"),image:"img/cards/3-work-with-frames.png",tags:["frames"],category:["fundamentals"]},d="How to Work with Frames",u={},h=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Examples",id:"examples",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Outro",id:"outro",level:2},{value:"Special Thanks",id:"special-thanks",level:2},{value:"Authors",id:"authors",level:2}];function c(e){const t={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"how-to-work-with-frames",children:"How to Work with Frames"})}),"\n",(0,s.jsx)(t.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,s.jsx)(t.p,{children:"In this tip, you'll learn how to work with frames and write tests against them."}),"\n",(0,s.jsx)(t.p,{children:"On occasion, we may encounter relics of the front-end world, such as frames. When writing tests against them, it's\neasy to make a mistake if we're not paying attention."}),"\n",(0,s.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,s.jsx)(t.p,{children:"Rather than getting frustrated when authoring your tests, you can work with the elements in a frame switching\nto that frame first. Then the rest of your test should be more straightforward."}),"\n",(0,s.jsx)(t.p,{children:"Let's explore further with some examples."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,s.jsx)(o.A,{languages:[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"},{label:"Selenide",value:"selenide"},{label:"Serenity/JS",value:"serenity-js"}]}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsx)(t.h3,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open the browser"}),"\n",(0,s.jsx)(t.li,{children:"Visit the page"}),"\n",(0,s.jsx)(t.li,{children:"Switch to the nested frame"}),"\n",(0,s.jsx)(t.li,{children:"Grab the text from the frame and assert that Selenium is in the correct place"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open the browser"}),"\n",(0,s.jsx)(t.li,{children:"Visit the page"}),"\n",(0,s.jsx)(t.li,{children:"Switch to the frame that contains the TinyMCE editor"}),"\n",(0,s.jsx)(t.li,{children:"Grab and clear the text in the editor"}),"\n",(0,s.jsx)(t.li,{children:"Input and grab new text in the editor"}),"\n",(0,s.jsx)(t.li,{children:"Assert that the original and new text entries don't match"}),"\n",(0,s.jsx)(t.li,{children:"Switch to the top level of the page"}),"\n",(0,s.jsx)(t.li,{children:"Grab the text from the top of the page and assert that it's not empty"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"outro",children:"Outro"}),"\n",(0,s.jsx)(t.p,{children:"Now you're ready to handily defeat frames when they cross your path."}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"}),"\n",(0,s.jsx)(t.h2,{id:"special-thanks",children:"Special Thanks"}),"\n","\n",(0,s.jsx)(i.A,{name:"Mike Millgate",imgSrc:"https://github.com/trabulmonkee.png",description:"Contributed the Python code for this tip.",url:"https://github.com/trabulmonkee"}),"\n",(0,s.jsx)(i.A,{name:"Isaul Vargas",imgSrc:"https://github.com/isaulv.png",description:"Python code review",url:"https://github.com/isaulv"}),"\n",(0,s.jsx)(i.A,{name:"Peter Bittner",imgSrc:"https://github.com/bittner.png",description:"Python code review",url:"https://github.com/bittner"}),"\n",(0,s.jsx)(i.A,{name:"Jonathan Taylor",imgSrc:"https://github.com/jtay2380.png",description:"Contributed the initial C# code for this tip.",url:"https://github.com/jtay2380"}),"\n",(0,s.jsx)(i.A,{name:"Roman Isko",imgSrc:"https://github.com/sturman.png",description:"Contributed the initial Java code for this tip.",url:"https://github.com/sturman"}),"\n",(0,s.jsx)(i.A,{name:"Jan Molak",imgSrc:"https://github.com/jan-molak.png",description:"Contributed the Serenity/JS code for this tip.",url:"https://github.com/jan-molak"}),"\n",(0,s.jsx)(i.A,{name:"Andrei Solntsev",imgSrc:"https://github.com/asolntsev.png",description:"Contributed the Selenide code for this tip.",url:"https://github.com/asolntsev"}),"\n",(0,s.jsx)(t.h2,{id:"authors",children:"Authors"}),"\n",(0,s.jsx)(i.A,{name:"Dave Piacente",imgSrc:"https://github.com/tourdedave.png",description:"Original creator of Elemental Selenium",url:"https://github.com/tourdedave",author:!0}),"\n",(0,s.jsx)(i.A,{name:"Diego Molina",imgSrc:"https://github.com/diemol.png",description:"Current maintainer of Elemental Selenium",url:"https://github.com/diemol",author:!0})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},60542:(e,t,a)=>{"use strict";a.d(t,{_:()=>i,u:()=>l});var r=a(96540),s=a(89532),n=a(74848);const o=r.createContext(null);function i(e){let{children:t,content:a}=e;const s=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,n.jsx)(o.Provider,{value:s,children:t})}function l(){const e=(0,r.useContext)(o);if(null===e)throw new s.dV("DocProvider");return e}},7840:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});a(96540);var r=a(74848);const s=e=>{let{imgSrc:t,name:a,description:s,url:n,author:o=!1}=e;const i=o?"avatar__photo avatar__photo--lg":"avatar__photo";return(0,r.jsxs)("div",{className:"avatar margin-bottom--sm",children:[(0,r.jsx)("img",{className:i,src:t,alt:a}),(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)("a",{href:n,target:"_blank",children:a})}),(0,r.jsx)("small",{className:"avatar__subtitle",children:s})]})]})}},54152:(e,t,a)=>{"use strict";a.d(t,{A:()=>A});var r=a(96540),s=a(34164),n=a(23104),o=a(56347),i=a(205),l=a(57485),d=a(31682),u=a(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:s}}=e;return{value:t,label:a,attributes:r,default:s}}))}(a);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const s=(0,o.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function x(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,n=c(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[d,h]=p({queryString:a,groupId:s}),[x,w]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,u.Dv)(a);return[s,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:s}),b=(()=>{const e=d??x;return m({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),w(e)}),[h,w,n]),tabValues:n}}var w=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function _(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),s=i[a].value;s!==r&&(d(t),o(s))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:u,...n,className:(0,s.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(_,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function y(e){const t=(0,w.A)();return(0,f.jsx)(g,{...e,children:h(e.children)},String(t))}const j={tabItem:"tabItem_Ymn6"};function k(e){let{children:t,hidden:a,className:r}=e;return(0,f.jsx)("div",{role:"tabpanel",className:(0,s.A)(j.tabItem,r),hidden:a,children:t})}var S=a(60542);const A=function(e){let{languages:t}=e;const[s,n]=(0,r.useState)([]),o=(0,S.u)().frontMatter.id;return(0,r.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,r.lazy)((()=>a(36217)(`./${o}/_${e.value}.mdx`)));return{label:e.label,component:t}})));n(e)})()}),[t]),(0,f.jsx)("div",{children:s.length>0&&(0,f.jsx)(y,{groupId:"elemental-selenium-tabs",children:s.map(((e,t)=>(0,f.jsx)(k,{value:e.label,label:e.label,children:(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(e.component,{})})},t)))})})}},36217:(e,t,a)=>{var r={"./1-upload-a-file/_csharp.mdx":[45889,1869,1432,5889],"./1-upload-a-file/_java.mdx":[40356,1869,1432,356],"./1-upload-a-file/_javascript.mdx":[6937,1869,1432,6937],"./1-upload-a-file/_python.mdx":[58150,1869,1432,8150],"./1-upload-a-file/_ruby.mdx":[46556,1869,1432,6556],"./1-upload-a-file/_selenide.mdx":[9635,1869,1432,9635],"./10-retry-test-actions/_ruby.mdx":[68163,8163],"./11-build-an-interactive-prompt/_ruby.mdx":[65599,5599],"./12-opt-out-of-ab-tests/_csharp.mdx":[48337,8337],"./12-opt-out-of-ab-tests/_java.mdx":[86836,6836],"./12-opt-out-of-ab-tests/_javascript.mdx":[28777,8777],"./12-opt-out-of-ab-tests/_python.mdx":[80342,342],"./12-opt-out-of-ab-tests/_ruby.mdx":[38668,8668],"./13-how-to-access-basic-auth/_csharp.mdx":[70243,243],"./13-how-to-access-basic-auth/_java.mdx":[71570,1570],"./13-how-to-access-basic-auth/_javascript.mdx":[66459,6459],"./13-how-to-access-basic-auth/_python.mdx":[5292,5292],"./13-how-to-access-basic-auth/_ruby.mdx":[26066,6066],"./14-interactive-prompts-revisited/_ruby.mdx":[90690,690],"./15-download-secure-files/_ruby.mdx":[99353,9353],"./16-take-screenshot-on-failure/_csharp.mdx":[45748,5748],"./16-take-screenshot-on-failure/_java.mdx":[957,957],"./16-take-screenshot-on-failure/_javascript.mdx":[67164,7164],"./16-take-screenshot-on-failure/_python.mdx":[16983,6983],"./16-take-screenshot-on-failure/_ruby.mdx":[76821,6821],"./17-retrieve-http-status-codes/_ruby.mdx":[33150,3150],"./19-data-driven-testing/_ruby.mdx":[71841,1841],"./2-download-a-file/_csharp.mdx":[11703,1869,1432,1703],"./2-download-a-file/_java.mdx":[60654,1869,1432,654],"./2-download-a-file/_javascript.mdx":[58223,1869,1432,8223],"./2-download-a-file/_python.mdx":[43416,1869,1432,3416],"./2-download-a-file/_ruby.mdx":[30542,1869,1432,542],"./2-download-a-file/_selenide.mdx":[8173,1869,1432,8173],"./22-locator-strategy/_ruby.mdx":[78995,8995],"./23-dynamic-pages/_ruby.mdx":[92394,13],"./24-rest-apis/_ruby.mdx":[27169,7169],"./25-how-to-work-with-tables/_csharp.mdx":[42614,2614],"./25-how-to-work-with-tables/_java.mdx":[36083,6083],"./25-how-to-work-with-tables/_javascript.mdx":[80102,102],"./25-how-to-work-with-tables/_python.mdx":[12373,2373],"./25-how-to-work-with-tables/_ruby.mdx":[95931,5931],"./26-cloud/_ruby.mdx":[77932,5551],"./27-parallel/_ruby.mdx":[4125,4125],"./29-chrome-driver/_csharp.mdx":[71464,1464],"./29-chrome-driver/_java.mdx":[18665,8665],"./29-chrome-driver/_python.mdx":[74035,4035],"./29-chrome-driver/_ruby.mdx":[75617,5617],"./3-work-with-frames/_csharp.mdx":[48154,1869,1432,8154],"./3-work-with-frames/_java.mdx":[47263,1869,1432,7263],"./3-work-with-frames/_javascript.mdx":[49962,1869,1432,9962],"./3-work-with-frames/_python.mdx":[7409,1869,1432,7409],"./3-work-with-frames/_ruby.mdx":[52375,1869,1432,2375],"./3-work-with-frames/_selenide.mdx":[6272,1869,1432,6272],"./3-work-with-frames/_serenity-js.mdx":[20324,1869,1432,324],"./30-mobile/_ruby.mdx":[11554,1554],"./32-css-vs-xpath/_ruby.mdx":[87267,7267],"./33-css-vs-xpath-2/_ruby.mdx":[41773,1773],"./34-css-vs-xpath-3/_ruby.mdx":[11821,1821],"./38-headless/_ruby.mdx":[43601,3601],"./39-drag-and-drop/_ruby.mdx":[46027,6027],"./4-work-with-multiple-windows/_csharp.mdx":[36125,1869,1432,6125],"./4-work-with-multiple-windows/_java.mdx":[46184,1869,1432,6184],"./4-work-with-multiple-windows/_javascript.mdx":[77685,1869,1432,7685],"./4-work-with-multiple-windows/_python.mdx":[3802,1869,1432,3802],"./4-work-with-multiple-windows/_ruby.mdx":[51376,1869,1432,1376],"./4-work-with-multiple-windows/_selenide.mdx":[52079,1869,1432,2079],"./40-disabled-element/_csharp.mdx":[39225,9225],"./40-disabled-element/_java.mdx":[8124,8124],"./40-disabled-element/_javascript.mdx":[15297,5297],"./40-disabled-element/_python.mdx":[19438,9438],"./40-disabled-element/_ruby.mdx":[94388,9626],"./41-one-test-multiple-browsers/_ruby.mdx":[3736,3736],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[69413,9413],"./43-forgot-password/_ruby.mdx":[27997,7997],"./44-exception-handling/_ruby.mdx":[38344,8344],"./45-how-to-test-checkboxes/_csharp.mdx":[94360,4360],"./45-how-to-test-checkboxes/_java.mdx":[58905,8905],"./45-how-to-test-checkboxes/_javascript.mdx":[99136,9136],"./45-how-to-test-checkboxes/_python.mdx":[38499,8499],"./45-how-to-test-checkboxes/_ruby.mdx":[82641,2641],"./47-waiting/_ruby.mdx":[24781,4781],"./48-load-testing/_ruby.mdx":[29968,9968],"./49-performance-testing/_ruby.mdx":[41731,1731],"./5-select-from-a-dropdown/_csharp.mdx":[93483,1869,1432,5864],"./5-select-from-a-dropdown/_java.mdx":[74809,1869,1432,4809],"./5-select-from-a-dropdown/_javascript.mdx":[22048,1869,1432,2048],"./5-select-from-a-dropdown/_python.mdx":[17891,1869,1432,7891],"./5-select-from-a-dropdown/_ruby.mdx":[11953,1869,1432,1953],"./5-select-from-a-dropdown/_selenide.mdx":[16530,1869,1432,6530],"./50-how-to-work-with-hovers/_csharp.mdx":[82996,2996],"./50-how-to-work-with-hovers/_java.mdx":[24125,6506],"./50-how-to-work-with-hovers/_javascript.mdx":[476,476],"./50-how-to-work-with-hovers/_python.mdx":[61431,1431],"./50-how-to-work-with-hovers/_ruby.mdx":[49557,9557],"./51-javascript-alerts/_csharp.mdx":[2671,2671],"./51-javascript-alerts/_java.mdx":[89542,9542],"./51-javascript-alerts/_javascript.mdx":[36215,6215],"./51-javascript-alerts/_python.mdx":[41280,1280],"./51-javascript-alerts/_ruby.mdx":[13510,3510],"./52-grid/_java.mdx":[38876,8876],"./52-grid/_javascript.mdx":[7681,7681],"./52-grid/_python.mdx":[37902,5521],"./52-grid/_ruby.mdx":[25140,5140],"./53-growl/_csharp.mdx":[17625,7625],"./53-growl/_java.mdx":[85743,5743],"./53-growl/_javascript.mdx":[48897,8897],"./53-growl/_python.mdx":[97838,7838],"./53-growl/_ruby.mdx":[72007,4388],"./54-logging/_ruby.mdx":[64071,4071],"./55-wrapper/_ruby.mdx":[92172,2172],"./56-retry-failed-tests/_ruby.mdx":[31988,1988],"./57-junit-xml/_ruby.mdx":[17703,7703],"./58-tagging/_ruby.mdx":[90889,889],"./6-open-new-window/_csharp.mdx":[90108,1869,1432,108],"./6-open-new-window/_java.mdx":[43205,1869,1432,3205],"./6-open-new-window/_javascript.mdx":[60852,1869,1432,852],"./6-open-new-window/_python.mdx":[20879,1869,1432,879],"./6-open-new-window/_ruby.mdx":[61533,1869,1432,1533],"./6-open-new-window/_selenide.mdx":[230,1869,1432,230],"./60-list-tags/_ruby.mdx":[97771,7771],"./61-how-to-press-keyboard-keys/_csharp.mdx":[65550,5550],"./61-how-to-press-keyboard-keys/_java.mdx":[39275,9275],"./61-how-to-press-keyboard-keys/_javascript.mdx":[83662,3662],"./61-how-to-press-keyboard-keys/_python.mdx":[20029,29],"./61-how-to-press-keyboard-keys/_ruby.mdx":[11859,1859],"./63-right-click/_csharp.mdx":[69850,9850],"./63-right-click/_java.mdx":[56639,6639],"./63-right-click/_javascript.mdx":[91709,4090],"./63-right-click/_python.mdx":[29105,9105],"./63-right-click/_ruby.mdx":[61751,1751],"./64-limit-bandwidth/_ruby.mdx":[89776,9776],"./65-highlight-elements/_csharp.mdx":[85825,5825],"./65-highlight-elements/_java.mdx":[59492,9492],"./65-highlight-elements/_javascript.mdx":[93561,3561],"./65-highlight-elements/_python.mdx":[81734,1734],"./65-highlight-elements/_ruby.mdx":[65692,5692],"./66-blacklist/_ruby.mdx":[67058,7058],"./67-broken-images/_ruby.mdx":[27824,7824],"./68-load-testing-revisited/_ruby.mdx":[62278,9897],"./69-safari/_java.mdx":[61650,1650],"./69-safari/_ruby.mdx":[16146,6146],"./7-use-a-page-object/_ruby.mdx":[16741,6741],"./72-headless-chrome/_ruby.mdx":[33864,3864],"./8-download-a-file-revisited/_csharp.mdx":[30509,509],"./8-download-a-file-revisited/_java.mdx":[89176,9176],"./8-download-a-file-revisited/_python.mdx":[21738,1738],"./8-download-a-file-revisited/_ruby.mdx":[47392,7392],"./9-use-a-base-page-object/_ruby.mdx":[57937,7937]};function s(e){if(!a.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(s)))}s.keys=()=>Object.keys(r),s.id=36217,e.exports=s},28453:(e,t,a)=>{"use strict";a.d(t,{R:()=>o,x:()=>i});var r=a(96540);const s={},n=r.createContext(s);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);