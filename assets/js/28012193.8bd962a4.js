(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[4963],{33562:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=o(74848),r=o(28453),n=o(54152);const s={title:"How To Work With Hovers",id:"50-hovers",slug:"/50-hovers",sidebar_label:"How To Work With Hovers",description:"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution.",number:50,hide_table_of_contents:!0,publish_date:new Date("2015-07-01T00:00:00.000Z"),tags:["hover","hovers","action builder"],level:1,category:["fundamentals"]},i="How to Work with Hovers",l={id:"how-to-work-with-hovers/50-hovers",title:"How To Work With Hovers",description:"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution.",source:"@site/tips/50-how-to-work-with-hovers/main.mdx",sourceDirName:"50-how-to-work-with-hovers",slug:"/50-hovers",permalink:"/tips/50-hovers",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/50-how-to-work-with-hovers/main.mdx",tags:[{label:"hover",permalink:"/tips/tags/hover"},{label:"hovers",permalink:"/tips/tags/hovers"},{label:"action builder",permalink:"/tips/tags/action-builder"}],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1711919504,formattedLastUpdatedAt:"Mar 31, 2024",frontMatter:{title:"How To Work With Hovers",id:"50-hovers",slug:"/50-hovers",sidebar_label:"How To Work With Hovers",description:"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution.",number:50,hide_table_of_contents:!0,publish_date:"2015-07-01T00:00:00.000Z",tags:["hover","hovers","action builder"],level:1,category:["fundamentals"]},sidebar:"defaultSidebar",previous:{title:"How to Do Performance Testing",permalink:"/tips/49-performance-testing"},next:{title:"How To Work With JavaScript Alerts",permalink:"/tips/51-javascript-alerts"}},u={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-work-with-hovers",children:"How to Work with Hovers"}),"\n",(0,a.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,a.jsx)(t.p,{children:"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick\nsearch through the official Selenium documentation can also be confusing, and might leave you scouring online forums\nand search engines for the solution."}),"\n",(0,a.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,a.jsx)(t.p,{children:"The most popular use case for a hover action is to display additional menu options(submenu.)"}),"\n",(0,a.jsxs)(t.p,{children:["By leveraging Selenium's ",(0,a.jsx)(t.a,{href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Interactions_Actions.htm",children:"Action Builder"})," we can handle more complex user interactions like hovers. This is\ndone by telling Selenium which element we want to move the mouse to, and then performing what we need to after."]}),"\n","\n","\n",(0,a.jsx)(n.A,{languages:[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"}]}),"\n",(0,a.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,a.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,a.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:o(59278).A+"#author-img",title:"a title",width:"280",height:"280"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},62771:(e,t,o)=>{"use strict";o.d(t,{_:()=>i,u:()=>l});var a=o(96540),r=o(89532),n=o(74848);const s=a.createContext(null);function i(e){let{children:t,content:o}=e;const r=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(o);return(0,n.jsx)(s.Provider,{value:r,children:t})}function l(){const e=(0,a.useContext)(s);if(null===e)throw new r.dV("DocProvider");return e}},54152:(e,t,o)=>{"use strict";o.d(t,{A:()=>T});var a=o(96540),r=o(34164),n=o(23104),s=o(56347),i=o(205),l=o(57485),u=o(31682),d=o(89466);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:o}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:o,attributes:a,default:r}}=e;return{value:t,label:o,attributes:a,default:r}}))}(o);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function m(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:o}=e;const r=(0,s.W6)(),n=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,l.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function b(e){const{defaultValue:t,queryString:o=!1,groupId:r}=e,n=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=o.find((e=>e.default))??o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[u,c]=p({queryString:o,groupId:r}),[b,w]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,d.Dv)(o);return[r,(0,a.useCallback)((e=>{o&&n.set(e)}),[o,n])]}({groupId:r}),x=(()=>{const e=u??b;return m({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),w(e)}),[c,w,n]),tabValues:n}}var w=o(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=o(74848);function f(e){let{className:t,block:o,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),d=e=>{const t=e.currentTarget,o=l.indexOf(t),r=i[o].value;r!==a&&(u(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;t=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;t=l[o]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":o},t),children:i.map((e=>{let{value:t,label:o,attributes:n}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...n,className:(0,r.A)("tabs__item",x.tabItem,n?.className,{"tabs__item--active":a===t}),children:o??t},t)}))})}function _(e){let{lazy:t,children:o,selectedValue:r}=e;const n=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(_,{...e,...t})]})}function g(e){const t=(0,w.A)();return(0,v.jsx)(y,{...e,children:c(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:o,className:a}=e;return(0,v.jsx)("div",{role:"tabpanel",className:(0,r.A)(k.tabItem,a),hidden:o,children:t})}var S=o(62771);const T=function(e){let{languages:t}=e;const[r,n]=(0,a.useState)([]),s=(0,S.u)().frontMatter.id;return(0,a.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,a.lazy)((()=>o(36217)(`./${s}/_${e.value}.mdx`)));return{label:e.label,component:t}})));n(e)})()}),[t]),(0,v.jsx)("div",{children:r.length>0&&(0,v.jsx)(g,{groupId:"elemental-selenium-tabs",children:r.map(((e,t)=>(0,v.jsx)(j,{value:e.label,label:e.label,children:(0,v.jsx)(a.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(e.component,{})})},t)))})})}},59278:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});const a=o.p+"assets/images/dave-haeffner-51c0929f88475823fb30e6519d3be0a3.jpeg"},36217:(e,t,o)=>{var a={"./1-upload-a-file/_csharp.mdx":[1192,1869,1432,1192],"./1-upload-a-file/_java.mdx":[28169,1869,1432,8169],"./1-upload-a-file/_javascript.mdx":[98576,1869,1432,8576],"./1-upload-a-file/_python.mdx":[723,1869,1432,723],"./1-upload-a-file/_ruby.mdx":[51777,1869,1432,1777],"./1-upload-a-file/_selenide.mdx":[76066,1869,1432,6066],"./10-retry-test-actions/_ruby.mdx":[76678,6678],"./11-build-an-interactive-prompt/_ruby.mdx":[57644,7644],"./12-opt-out-of-ab-tests/_csharp.mdx":[4654,4654],"./12-opt-out-of-ab-tests/_java.mdx":[38411,8411],"./12-opt-out-of-ab-tests/_javascript.mdx":[59790,9790],"./12-opt-out-of-ab-tests/_python.mdx":[28797,8797],"./12-opt-out-of-ab-tests/_ruby.mdx":[77971,7971],"./13-how-to-access-basic-auth/_csharp.mdx":[93998,3998],"./13-how-to-access-basic-auth/_java.mdx":[15787,5787],"./13-how-to-access-basic-auth/_javascript.mdx":[81966,1966],"./13-how-to-access-basic-auth/_python.mdx":[48477,8477],"./13-how-to-access-basic-auth/_ruby.mdx":[4723,4723],"./14-interactive-prompts-revisited/_ruby.mdx":[45725,5725],"./15-download-secure-files/_ruby.mdx":[46154,6154],"./16-take-screenshot-on-failure/_csharp.mdx":[31573,1573],"./16-take-screenshot-on-failure/_java.mdx":[77184,7184],"./16-take-screenshot-on-failure/_javascript.mdx":[33853,3853],"./16-take-screenshot-on-failure/_python.mdx":[18530,8530],"./16-take-screenshot-on-failure/_ruby.mdx":[40328,328],"./17-retrieve-http-status-codes/_ruby.mdx":[64279,6660],"./19-data-driven-testing/_ruby.mdx":[25174,5174],"./2-download-a-file/_csharp.mdx":[28810,1869,1432,8810],"./2-download-a-file/_java.mdx":[10351,1869,1432,351],"./2-download-a-file/_javascript.mdx":[21082,1869,1432,1082],"./2-download-a-file/_python.mdx":[26849,1869,1432,6849],"./2-download-a-file/_ruby.mdx":[82759,1869,1432,2759],"./22-locator-strategy/_ruby.mdx":[85814,5814],"./23-dynamic-pages/_ruby.mdx":[91589,3970],"./24-rest-apis/_ruby.mdx":[20686,686],"./25-how-to-work-with-tables/_csharp.mdx":[96837,6837],"./25-how-to-work-with-tables/_java.mdx":[17872,7872],"./25-how-to-work-with-tables/_javascript.mdx":[5197,5197],"./25-how-to-work-with-tables/_python.mdx":[38834,8834],"./25-how-to-work-with-tables/_ruby.mdx":[66168,6168],"./26-cloud/_ruby.mdx":[68307,8307],"./27-parallel/_ruby.mdx":[4428,2047],"./29-chrome-driver/_csharp.mdx":[77539,7539],"./29-chrome-driver/_java.mdx":[85650,5650],"./29-chrome-driver/_python.mdx":[57452,7452],"./29-chrome-driver/_ruby.mdx":[99474,9474],"./3-work-with-frames/_csharp.mdx":[94265,1869,1432,4265],"./3-work-with-frames/_java.mdx":[73084,1869,1432,3084],"./3-work-with-frames/_javascript.mdx":[81633,1869,1432,1633],"./3-work-with-frames/_python.mdx":[74478,1869,1432,4478],"./3-work-with-frames/_ruby.mdx":[59348,1869,1432,9348],"./3-work-with-frames/_selenide.mdx":[87099,1869,1432,7099],"./3-work-with-frames/_serenity-js.mdx":[31169,1869,1432,1169],"./30-mobile/_ruby.mdx":[45299,5299],"./32-css-vs-xpath/_ruby.mdx":[51822,1822],"./33-css-vs-xpath-2/_ruby.mdx":[75816,5816],"./34-css-vs-xpath-3/_ruby.mdx":[26376,6376],"./38-headless/_ruby.mdx":[64492,4492],"./39-drag-and-drop/_ruby.mdx":[16096,3715],"./4-work-with-multiple-windows/_csharp.mdx":[14338,1869,1432,4338],"./4-work-with-multiple-windows/_java.mdx":[92839,1869,1432,2839],"./4-work-with-multiple-windows/_javascript.mdx":[53922,1869,1432,3922],"./4-work-with-multiple-windows/_python.mdx":[43753,1869,1432,3753],"./4-work-with-multiple-windows/_ruby.mdx":[45823,1869,1432,5823],"./4-work-with-multiple-windows/_selenide.mdx":[43848,1869,1432,3848],"./40-disabled-element/_csharp.mdx":[1336,1336],"./40-disabled-element/_java.mdx":[33561,3561],"./40-disabled-element/_javascript.mdx":[63008,3008],"./40-disabled-element/_python.mdx":[45475,5475],"./40-disabled-element/_ruby.mdx":[57297,7297],"./41-one-test-multiple-browsers/_ruby.mdx":[26997,6997],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[65922,5922],"./43-forgot-password/_ruby.mdx":[84394,4394],"./44-exception-handling/_ruby.mdx":[82557,2557],"./45-how-to-test-checkboxes/_csharp.mdx":[75329,5329],"./45-how-to-test-checkboxes/_java.mdx":[89380,9380],"./45-how-to-test-checkboxes/_javascript.mdx":[58713,8713],"./45-how-to-test-checkboxes/_python.mdx":[87590,7590],"./45-how-to-test-checkboxes/_ruby.mdx":[11932,1932],"./47-waiting/_ruby.mdx":[44226,4226],"./48-load-testing/_ruby.mdx":[46841,6841],"./49-performance-testing/_ruby.mdx":[1096,1096],"./5-select-from-a-dropdown/_csharp.mdx":[62999,1869,1432,2999],"./5-select-from-a-dropdown/_java.mdx":[24494,1869,1432,4494],"./5-select-from-a-dropdown/_javascript.mdx":[7887,1869,1432,7887],"./5-select-from-a-dropdown/_python.mdx":[51032,1869,1432,1032],"./5-select-from-a-dropdown/_ruby.mdx":[77198,1869,1432,7198],"./5-select-from-a-dropdown/_selenide.mdx":[76269,1869,1432,6269],"./50-how-to-work-with-hovers/_csharp.mdx":[63783,3783],"./50-how-to-work-with-hovers/_java.mdx":[97694,7694],"./50-how-to-work-with-hovers/_javascript.mdx":[21663,1663],"./50-how-to-work-with-hovers/_python.mdx":[18920,8920],"./50-how-to-work-with-hovers/_ruby.mdx":[27902,5521],"./51-javascript-alerts/_csharp.mdx":[76032,6032],"./51-javascript-alerts/_java.mdx":[1,1],"./51-javascript-alerts/_javascript.mdx":[58648,8648],"./51-javascript-alerts/_python.mdx":[65339,5339],"./51-javascript-alerts/_ruby.mdx":[54265,6646],"./52-grid/_java.mdx":[80557,557],"./52-grid/_javascript.mdx":[45228,5228],"./52-grid/_python.mdx":[87015,7015],"./52-grid/_ruby.mdx":[36197,6197],"./53-growl/_csharp.mdx":[85634,5634],"./53-growl/_java.mdx":[87719,7719],"./53-growl/_javascript.mdx":[11714,1714],"./53-growl/_python.mdx":[39913,9913],"./53-growl/_ruby.mdx":[14527,4527],"./54-logging/_ruby.mdx":[39496,9496],"./55-wrapper/_ruby.mdx":[80067,67],"./56-retry-failed-tests/_ruby.mdx":[79661,9661],"./57-junit-xml/_ruby.mdx":[26596,6596],"./58-tagging/_ruby.mdx":[79922,9922],"./6-open-new-window/_csharp.mdx":[45673,1869,1432,5673],"./6-open-new-window/_java.mdx":[97900,1869,1432,7900],"./6-open-new-window/_javascript.mdx":[42993,1869,1432,2993],"./6-open-new-window/_python.mdx":[3934,1869,1432,3934],"./6-open-new-window/_ruby.mdx":[67396,1869,1432,7396],"./60-list-tags/_ruby.mdx":[93024,3024],"./61-how-to-press-keyboard-keys/_csharp.mdx":[66059,6059],"./61-how-to-press-keyboard-keys/_java.mdx":[25530,5530],"./61-how-to-press-keyboard-keys/_javascript.mdx":[8915,8915],"./61-how-to-press-keyboard-keys/_python.mdx":[50116,116],"./61-how-to-press-keyboard-keys/_ruby.mdx":[41306,1306],"./63-right-click/_csharp.mdx":[20441,441],"./63-right-click/_java.mdx":[57404,7404],"./63-right-click/_javascript.mdx":[17921,7921],"./63-right-click/_python.mdx":[2958,2958],"./63-right-click/_ruby.mdx":[54996,4996],"./64-limit-bandwidth/_ruby.mdx":[14247,4247],"./65-highlight-elements/_csharp.mdx":[94636,4636],"./65-highlight-elements/_java.mdx":[73877,3877],"./65-highlight-elements/_javascript.mdx":[86724,6724],"./65-highlight-elements/_python.mdx":[94879,4879],"./65-highlight-elements/_ruby.mdx":[96877,6877],"./66-blacklist/_ruby.mdx":[26565,6565],"./67-broken-images/_ruby.mdx":[9923,9923],"./68-load-testing-revisited/_ruby.mdx":[28323,8323],"./69-safari/_java.mdx":[33591,3591],"./69-safari/_ruby.mdx":[11823,1823],"./7-use-a-page-object/_ruby.mdx":[17244,7244],"./72-headless-chrome/_ruby.mdx":[94531,4531],"./8-download-a-file-revisited/_csharp.mdx":[45932,5932],"./8-download-a-file-revisited/_java.mdx":[73525,3525],"./8-download-a-file-revisited/_python.mdx":[52127,2127],"./8-download-a-file-revisited/_ruby.mdx":[66381,6381],"./9-use-a-base-page-object/_ruby.mdx":[80582,582]};function r(e){if(!o.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(o.e)).then((()=>o(r)))}r.keys=()=>Object.keys(a),r.id=36217,e.exports=r},28453:(e,t,o)=>{"use strict";o.d(t,{R:()=>s,x:()=>i});var a=o(96540);const r={},n=a.createContext(r);function s(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);