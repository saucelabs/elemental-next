(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[7314],{88276:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=a(74848),n=a(28453),o=a(54152),s=a(7840);const i={title:"How to Work with Frames",id:"3-work-with-frames",slug:"/3-work-with-frames",sidebar_label:"How to Work with Frames",description:"In this tip, you'll learn how to work with frames and write tests against them.",number:3,hide_table_of_contents:!0,level:1,publish_date:new Date("2015-08-25T00:00:00.000Z"),image:"img/cards/3-work-with-frames.png",tags:["frames"],category:["fundamentals"]},l="How to Work with Frames",d={id:"work-with-frames/3-work-with-frames",title:"How to Work with Frames",description:"In this tip, you'll learn how to work with frames and write tests against them.",source:"@site/tips/3-work-with-frames/main.mdx",sourceDirName:"3-work-with-frames",slug:"/3-work-with-frames",permalink:"/tips/3-work-with-frames",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/3-work-with-frames/main.mdx",tags:[{label:"frames",permalink:"/tips/tags/frames"}],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1713865687e3,frontMatter:{title:"How to Work with Frames",id:"3-work-with-frames",slug:"/3-work-with-frames",sidebar_label:"How to Work with Frames",description:"In this tip, you'll learn how to work with frames and write tests against them.",number:3,hide_table_of_contents:!0,level:1,publish_date:"2015-08-25T00:00:00.000Z",image:"img/cards/3-work-with-frames.png",tags:["frames"],category:["fundamentals"]},sidebar:"defaultSidebar",previous:{title:"How To Download a File",permalink:"/tips/2-download-a-file"},next:{title:"How to Work with Multiple Windows",permalink:"/tips/4-work-with-multiple-windows"}},u={},h=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Examples",id:"examples",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Outro",id:"outro",level:2},{value:"Special Thanks",id:"special-thanks",level:2},{value:"Authors",id:"authors",level:2}];function c(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"how-to-work-with-frames",children:"How to Work with Frames"}),"\n",(0,r.jsx)(t.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,r.jsx)(t.p,{children:"In this tip, you'll learn how to work with frames and write tests against them."}),"\n",(0,r.jsx)(t.p,{children:"On occasion, we may encounter relics of the front-end world, such as frames. When writing tests against them, it's\neasy to make a mistake if we're not paying attention."}),"\n",(0,r.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,r.jsx)(t.p,{children:"Rather than getting frustrated when authoring your tests, you can work with the elements in a frame switching\nto that frame first. Then the rest of your test should be more straightforward."}),"\n",(0,r.jsx)(t.p,{children:"Let's explore further with some examples."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,r.jsx)(o.A,{languages:[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"},{label:"Selenide",value:"selenide"},{label:"Serenity/JS",value:"serenity-js"}]}),"\n",(0,r.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsx)(t.h3,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Open the browser"}),"\n",(0,r.jsx)(t.li,{children:"Visit the page"}),"\n",(0,r.jsx)(t.li,{children:"Switch to the nested frame"}),"\n",(0,r.jsx)(t.li,{children:"Grab the text from the frame and assert that Selenium is in the correct place"}),"\n",(0,r.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Open the browser"}),"\n",(0,r.jsx)(t.li,{children:"Visit the page"}),"\n",(0,r.jsx)(t.li,{children:"Switch to the frame that contains the TinyMCE editor"}),"\n",(0,r.jsx)(t.li,{children:"Grab and clear the text in the editor"}),"\n",(0,r.jsx)(t.li,{children:"Input and grab new text in the editor"}),"\n",(0,r.jsx)(t.li,{children:"Assert that the original and new text entries don't match"}),"\n",(0,r.jsx)(t.li,{children:"Switch to the top level of the page"}),"\n",(0,r.jsx)(t.li,{children:"Grab the text from the top of the page and assert that it's not empty"}),"\n",(0,r.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"outro",children:"Outro"}),"\n",(0,r.jsx)(t.p,{children:"Now you're ready to handily defeat frames when they cross your path."}),"\n",(0,r.jsx)(t.p,{children:"Happy Testing!"}),"\n",(0,r.jsx)(t.h2,{id:"special-thanks",children:"Special Thanks"}),"\n","\n",(0,r.jsx)(s.A,{name:"Mike Millgate",imgSrc:"https://github.com/trabulmonkee.png",description:"Contributed the Python code for this tip.",url:"https://github.com/trabulmonkee"}),"\n",(0,r.jsx)(s.A,{name:"Isaul Vargas",imgSrc:"https://github.com/isaulv.png",description:"Python code review",url:"https://github.com/isaulv"}),"\n",(0,r.jsx)(s.A,{name:"Peter Bittner",imgSrc:"https://github.com/bittner.png",description:"Python code review",url:"https://github.com/bittner"}),"\n",(0,r.jsx)(s.A,{name:"Jonathan Taylor",imgSrc:"https://github.com/jtay2380.png",description:"Contributed the initial C# code for this tip.",url:"https://github.com/jtay2380"}),"\n",(0,r.jsx)(s.A,{name:"Roman Isko",imgSrc:"https://github.com/sturman.png",description:"Contributed the initial Java code for this tip.",url:"https://github.com/sturman"}),"\n",(0,r.jsx)(s.A,{name:"Jan Molak",imgSrc:"https://github.com/jan-molak.png",description:"Contributed the Serenity/JS code for this tip.",url:"https://github.com/jan-molak"}),"\n",(0,r.jsx)(s.A,{name:"Andrei Solntsev",imgSrc:"https://github.com/asolntsev.png",description:"Contributed the Selenide code for this tip.",url:"https://github.com/asolntsev"}),"\n",(0,r.jsx)(t.h2,{id:"authors",children:"Authors"}),"\n",(0,r.jsx)(s.A,{name:"Dave Piacente",imgSrc:"https://github.com/tourdedave.png",description:"Original creator of Elemental Selenium",url:"https://github.com/tourdedave",author:!0}),"\n",(0,r.jsx)(s.A,{name:"Diego Molina",imgSrc:"https://github.com/diemol.png",description:"Current maintainer of Elemental Selenium",url:"https://github.com/diemol",author:!0})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},62771:(e,t,a)=>{"use strict";a.d(t,{_:()=>i,u:()=>l});var r=a(96540),n=a(89532),o=a(74848);const s=r.createContext(null);function i(e){let{children:t,content:a}=e;const n=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,o.jsx)(s.Provider,{value:n,children:t})}function l(){const e=(0,r.useContext)(s);if(null===e)throw new n.dV("DocProvider");return e}},7840:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});a(96540);var r=a(74848);const n=e=>{let{imgSrc:t,name:a,description:n,url:o,author:s=!1}=e;const i=s?"avatar__photo avatar__photo--lg":"avatar__photo";return(0,r.jsxs)("div",{className:"avatar margin-bottom--sm",children:[(0,r.jsx)("img",{className:i,src:t,alt:a}),(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)("a",{href:o,target:"_blank",children:a})}),(0,r.jsx)("small",{className:"avatar__subtitle",children:n})]})]})}},54152:(e,t,a)=>{"use strict";a.d(t,{A:()=>A});var r=a(96540),n=a(34164),o=a(23104),s=a(56347),i=a(205),l=a(57485),d=a(31682),u=a(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function x(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=c(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,h]=p({queryString:a,groupId:n}),[x,w]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=d??x;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),w(e)}),[h,w,o]),tabValues:o}}var w=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function v(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),n=i[a].value;n!==r&&(d(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:u,...o,className:(0,n.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function _(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(_,{...e,...t})]})}function y(e){const t=(0,w.A)();return(0,f.jsx)(g,{...e,children:h(e.children)},String(t))}const j={tabItem:"tabItem_Ymn6"};function k(e){let{children:t,hidden:a,className:r}=e;return(0,f.jsx)("div",{role:"tabpanel",className:(0,n.A)(j.tabItem,r),hidden:a,children:t})}var S=a(62771);const A=function(e){let{languages:t}=e;const[n,o]=(0,r.useState)([]),s=(0,S.u)().frontMatter.id;return(0,r.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,r.lazy)((()=>a(36217)(`./${s}/_${e.value}.mdx`)));return{label:e.label,component:t}})));o(e)})()}),[t]),(0,f.jsx)("div",{children:n.length>0&&(0,f.jsx)(y,{groupId:"elemental-selenium-tabs",children:n.map(((e,t)=>(0,f.jsx)(k,{value:e.label,label:e.label,children:(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(e.component,{})})},t)))})})}},36217:(e,t,a)=>{var r={"./1-upload-a-file/_csharp.mdx":[1192,1869,1432,1192],"./1-upload-a-file/_java.mdx":[28169,1869,1432,8169],"./1-upload-a-file/_javascript.mdx":[98576,1869,1432,8576],"./1-upload-a-file/_python.mdx":[723,1869,1432,723],"./1-upload-a-file/_ruby.mdx":[51777,1869,1432,1777],"./1-upload-a-file/_selenide.mdx":[76066,1869,1432,6066],"./10-retry-test-actions/_ruby.mdx":[76678,6678],"./11-build-an-interactive-prompt/_ruby.mdx":[57644,7644],"./12-opt-out-of-ab-tests/_csharp.mdx":[4654,4654],"./12-opt-out-of-ab-tests/_java.mdx":[38411,8411],"./12-opt-out-of-ab-tests/_javascript.mdx":[59790,9790],"./12-opt-out-of-ab-tests/_python.mdx":[28797,8797],"./12-opt-out-of-ab-tests/_ruby.mdx":[77971,7971],"./13-how-to-access-basic-auth/_csharp.mdx":[93998,3998],"./13-how-to-access-basic-auth/_java.mdx":[15787,5787],"./13-how-to-access-basic-auth/_javascript.mdx":[81966,1966],"./13-how-to-access-basic-auth/_python.mdx":[48477,8477],"./13-how-to-access-basic-auth/_ruby.mdx":[4723,4723],"./14-interactive-prompts-revisited/_ruby.mdx":[45725,5725],"./15-download-secure-files/_ruby.mdx":[46154,6154],"./16-take-screenshot-on-failure/_csharp.mdx":[31573,1573],"./16-take-screenshot-on-failure/_java.mdx":[77184,7184],"./16-take-screenshot-on-failure/_javascript.mdx":[33853,3853],"./16-take-screenshot-on-failure/_python.mdx":[18530,8530],"./16-take-screenshot-on-failure/_ruby.mdx":[40328,328],"./17-retrieve-http-status-codes/_ruby.mdx":[64279,6660],"./19-data-driven-testing/_ruby.mdx":[25174,5174],"./2-download-a-file/_csharp.mdx":[28810,1869,1432,8810],"./2-download-a-file/_java.mdx":[10351,1869,1432,351],"./2-download-a-file/_javascript.mdx":[21082,1869,1432,1082],"./2-download-a-file/_python.mdx":[26849,1869,1432,6849],"./2-download-a-file/_ruby.mdx":[82759,1869,1432,2759],"./2-download-a-file/_selenide.mdx":[80080,1869,1432,80],"./22-locator-strategy/_ruby.mdx":[85814,5814],"./23-dynamic-pages/_ruby.mdx":[91589,3970],"./24-rest-apis/_ruby.mdx":[20686,686],"./25-how-to-work-with-tables/_csharp.mdx":[96837,6837],"./25-how-to-work-with-tables/_java.mdx":[17872,7872],"./25-how-to-work-with-tables/_javascript.mdx":[5197,5197],"./25-how-to-work-with-tables/_python.mdx":[38834,8834],"./25-how-to-work-with-tables/_ruby.mdx":[66168,6168],"./26-cloud/_ruby.mdx":[68307,8307],"./27-parallel/_ruby.mdx":[4428,2047],"./29-chrome-driver/_csharp.mdx":[77539,7539],"./29-chrome-driver/_java.mdx":[85650,5650],"./29-chrome-driver/_python.mdx":[57452,7452],"./29-chrome-driver/_ruby.mdx":[99474,9474],"./3-work-with-frames/_csharp.mdx":[94265,1869,1432,4265],"./3-work-with-frames/_java.mdx":[73084,1869,1432,3084],"./3-work-with-frames/_javascript.mdx":[81633,1869,1432,1633],"./3-work-with-frames/_python.mdx":[74478,1869,1432,4478],"./3-work-with-frames/_ruby.mdx":[59348,1869,1432,9348],"./3-work-with-frames/_selenide.mdx":[87099,1869,1432,7099],"./3-work-with-frames/_serenity-js.mdx":[31169,1869,1432,1169],"./30-mobile/_ruby.mdx":[45299,5299],"./32-css-vs-xpath/_ruby.mdx":[51822,1822],"./33-css-vs-xpath-2/_ruby.mdx":[75816,5816],"./34-css-vs-xpath-3/_ruby.mdx":[26376,6376],"./38-headless/_ruby.mdx":[64492,4492],"./39-drag-and-drop/_ruby.mdx":[16096,3715],"./4-work-with-multiple-windows/_csharp.mdx":[14338,1869,1432,4338],"./4-work-with-multiple-windows/_java.mdx":[92839,1869,1432,2839],"./4-work-with-multiple-windows/_javascript.mdx":[53922,1869,1432,3922],"./4-work-with-multiple-windows/_python.mdx":[43753,1869,1432,3753],"./4-work-with-multiple-windows/_ruby.mdx":[45823,1869,1432,5823],"./4-work-with-multiple-windows/_selenide.mdx":[43848,1869,1432,3848],"./40-disabled-element/_csharp.mdx":[1336,1336],"./40-disabled-element/_java.mdx":[33561,3561],"./40-disabled-element/_javascript.mdx":[63008,3008],"./40-disabled-element/_python.mdx":[45475,5475],"./40-disabled-element/_ruby.mdx":[57297,7297],"./41-one-test-multiple-browsers/_ruby.mdx":[26997,6997],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[65922,5922],"./43-forgot-password/_ruby.mdx":[84394,4394],"./44-exception-handling/_ruby.mdx":[82557,2557],"./45-how-to-test-checkboxes/_csharp.mdx":[75329,5329],"./45-how-to-test-checkboxes/_java.mdx":[89380,9380],"./45-how-to-test-checkboxes/_javascript.mdx":[58713,8713],"./45-how-to-test-checkboxes/_python.mdx":[87590,7590],"./45-how-to-test-checkboxes/_ruby.mdx":[11932,1932],"./47-waiting/_ruby.mdx":[44226,4226],"./48-load-testing/_ruby.mdx":[46841,6841],"./49-performance-testing/_ruby.mdx":[1096,1096],"./5-select-from-a-dropdown/_csharp.mdx":[62999,1869,1432,2999],"./5-select-from-a-dropdown/_java.mdx":[24494,1869,1432,4494],"./5-select-from-a-dropdown/_javascript.mdx":[7887,1869,1432,7887],"./5-select-from-a-dropdown/_python.mdx":[51032,1869,1432,1032],"./5-select-from-a-dropdown/_ruby.mdx":[77198,1869,1432,7198],"./5-select-from-a-dropdown/_selenide.mdx":[76269,1869,1432,6269],"./50-how-to-work-with-hovers/_csharp.mdx":[63783,3783],"./50-how-to-work-with-hovers/_java.mdx":[97694,7694],"./50-how-to-work-with-hovers/_javascript.mdx":[21663,1663],"./50-how-to-work-with-hovers/_python.mdx":[18920,8920],"./50-how-to-work-with-hovers/_ruby.mdx":[27902,5521],"./51-javascript-alerts/_csharp.mdx":[76032,6032],"./51-javascript-alerts/_java.mdx":[1,1],"./51-javascript-alerts/_javascript.mdx":[58648,8648],"./51-javascript-alerts/_python.mdx":[65339,5339],"./51-javascript-alerts/_ruby.mdx":[54265,6646],"./52-grid/_java.mdx":[80557,557],"./52-grid/_javascript.mdx":[45228,5228],"./52-grid/_python.mdx":[87015,7015],"./52-grid/_ruby.mdx":[36197,6197],"./53-growl/_csharp.mdx":[85634,5634],"./53-growl/_java.mdx":[87719,7719],"./53-growl/_javascript.mdx":[11714,1714],"./53-growl/_python.mdx":[39913,9913],"./53-growl/_ruby.mdx":[14527,4527],"./54-logging/_ruby.mdx":[39496,9496],"./55-wrapper/_ruby.mdx":[80067,67],"./56-retry-failed-tests/_ruby.mdx":[79661,9661],"./57-junit-xml/_ruby.mdx":[26596,6596],"./58-tagging/_ruby.mdx":[79922,9922],"./6-open-new-window/_csharp.mdx":[45673,1869,1432,5673],"./6-open-new-window/_java.mdx":[97900,1869,1432,7900],"./6-open-new-window/_javascript.mdx":[42993,1869,1432,2993],"./6-open-new-window/_python.mdx":[3934,1869,1432,3934],"./6-open-new-window/_ruby.mdx":[67396,1869,1432,7396],"./6-open-new-window/_selenide.mdx":[74251,1869,1432,4251],"./60-list-tags/_ruby.mdx":[93024,3024],"./61-how-to-press-keyboard-keys/_csharp.mdx":[66059,6059],"./61-how-to-press-keyboard-keys/_java.mdx":[25530,5530],"./61-how-to-press-keyboard-keys/_javascript.mdx":[8915,8915],"./61-how-to-press-keyboard-keys/_python.mdx":[50116,116],"./61-how-to-press-keyboard-keys/_ruby.mdx":[41306,1306],"./63-right-click/_csharp.mdx":[20441,441],"./63-right-click/_java.mdx":[57404,7404],"./63-right-click/_javascript.mdx":[17921,7921],"./63-right-click/_python.mdx":[2958,2958],"./63-right-click/_ruby.mdx":[54996,4996],"./64-limit-bandwidth/_ruby.mdx":[14247,4247],"./65-highlight-elements/_csharp.mdx":[94636,4636],"./65-highlight-elements/_java.mdx":[73877,3877],"./65-highlight-elements/_javascript.mdx":[86724,6724],"./65-highlight-elements/_python.mdx":[94879,4879],"./65-highlight-elements/_ruby.mdx":[96877,6877],"./66-blacklist/_ruby.mdx":[26565,6565],"./67-broken-images/_ruby.mdx":[9923,9923],"./68-load-testing-revisited/_ruby.mdx":[28323,8323],"./69-safari/_java.mdx":[33591,3591],"./69-safari/_ruby.mdx":[11823,1823],"./7-use-a-page-object/_ruby.mdx":[17244,7244],"./72-headless-chrome/_ruby.mdx":[94531,4531],"./8-download-a-file-revisited/_csharp.mdx":[45932,5932],"./8-download-a-file-revisited/_java.mdx":[73525,3525],"./8-download-a-file-revisited/_python.mdx":[52127,2127],"./8-download-a-file-revisited/_ruby.mdx":[66381,6381],"./9-use-a-base-page-object/_ruby.mdx":[80582,582]};function n(e){if(!a.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(n)))}n.keys=()=>Object.keys(r),n.id=36217,e.exports=n},28453:(e,t,a)=>{"use strict";a.d(t,{R:()=>s,x:()=>i});var r=a(96540);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);