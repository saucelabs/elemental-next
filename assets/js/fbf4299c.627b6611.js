(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[2710],{25014:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(74848),r=a(28453),s=a(54152);const n={title:"Implicit vs Explicit Waits",id:"47-waiting",slug:"/47-waiting",sidebar_label:"Implicit vs Explicit Waits",description:"In order to make our Selenium tests resilient, we need to make them wait for certain elements to load. Elements that we want to interact with. This is especially true with JavaScript heavy pages.",number:47,hide_table_of_contents:!0,level:2,publish_date:new Date("2015-10-13T00:00:00.000Z"),tags:["waiting","dynamic pages","explicit waits","implicit waits"],category:["troubleshooting"]},o="Implicit vs Explicit Waits",l={id:"waiting/47-waiting",title:"Implicit vs Explicit Waits",description:"In order to make our Selenium tests resilient, we need to make them wait for certain elements to load. Elements that we want to interact with. This is especially true with JavaScript heavy pages.",source:"@site/tips/47-waiting/main.mdx",sourceDirName:"47-waiting",slug:"/47-waiting",permalink:"/tips/47-waiting",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/47-waiting/main.mdx",tags:[{label:"waiting",permalink:"/tips/tags/waiting"},{label:"dynamic pages",permalink:"/tips/tags/dynamic-pages"},{label:"explicit waits",permalink:"/tips/tags/explicit-waits"},{label:"implicit waits",permalink:"/tips/tags/implicit-waits"}],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1712263356,formattedLastUpdatedAt:"Apr 4, 2024",frontMatter:{title:"Implicit vs Explicit Waits",id:"47-waiting",slug:"/47-waiting",sidebar_label:"Implicit vs Explicit Waits",description:"In order to make our Selenium tests resilient, we need to make them wait for certain elements to load. Elements that we want to interact with. This is especially true with JavaScript heavy pages.",number:47,hide_table_of_contents:!0,level:2,publish_date:"2015-10-13T00:00:00.000Z",tags:["waiting","dynamic pages","explicit waits","implicit waits"],category:["troubleshooting"]},sidebar:"defaultSidebar",previous:{title:"How To Test Checkboxes",permalink:"/tips/45-checkboxes"},next:{title:"Load Testing",permalink:"/tips/48-load-testing"}},d={},c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}];function u(e){const t={em:"em",h1:"h1",h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"implicit-vs-explicit-waits",children:"Implicit vs Explicit Waits"}),"\n",(0,i.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,i.jsx)(t.p,{children:"In order to make our Selenium tests resilient, we need to make them wait for certain elements to load. Elements that we want to interact with. This is especially true with JavaScript heavy pages."}),"\n",(0,i.jsx)(t.p,{children:"But should we be using static sleeps, implicit waits, explicit waits?"}),"\n",(0,i.jsxs)(t.p,{children:["Static sleeps are something to be avoided, because they force your tests to wait a ",(0,i.jsx)(t.em,{children:"hard-coded"})," amount of time to perform an action -- this is not recommended. But what about implicit waits, explicit waits... and what about using them together?"]}),"\n",(0,i.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,i.jsx)(t.p,{children:"The short answer? Use explicit waits."}),"\n",(0,i.jsx)(t.p,{children:"Adding an implicit wait to your Selenium tests is simple enough and may seem intuitive. But there are cases where it\nsimply doesn't help you like you think it will. And while you can combine explicit and implicit waits together\n(e.g., override an implicit wait with an explicit wait to make a Selenium action wait longer) -- you shouldn't.\nI'll discuss more on that later."}),"\n",(0,i.jsx)(t.p,{children:"Let's continue with some examples."}),"\n","\n","\n",(0,i.jsx)(s.A,{languages:[{label:"Ruby",value:"ruby"}]}),"\n",(0,i.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,i.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,i.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:a(59278).A+"#author-img",title:"a title",width:"280",height:"280"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},62771:(e,t,a)=>{"use strict";a.d(t,{_:()=>o,u:()=>l});var i=a(96540),r=a(89532),s=a(74848);const n=i.createContext(null);function o(e){let{children:t,content:a}=e;const r=function(e){return(0,i.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,s.jsx)(n.Provider,{value:r,children:t})}function l(){const e=(0,i.useContext)(n);if(null===e)throw new r.dV("DocProvider");return e}},54152:(e,t,a)=>{"use strict";a.d(t,{A:()=>S});var i=a(96540),r=a(34164),s=a(23104),n=a(56347),o=a(205),l=a(57485),d=a(31682),c=a(89466);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:r}}=e;return{value:t,label:a,attributes:i,default:r}}))}(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,n.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function w(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=m(e),[n,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[d,u]=p({queryString:a,groupId:r}),[w,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(a);return[r,(0,i.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=d??w;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:n,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=a(74848);function f(e){let{className:t,block:a,selectedValue:i,selectValue:n,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==i&&(d(t),n(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t}),children:a??t},t)}))})}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=w(e);return(0,_.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,_.jsx)(f,{...e,...t}),(0,_.jsx)(v,{...e,...t})]})}function g(e){const t=(0,x.A)();return(0,_.jsx)(y,{...e,children:u(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:a,className:i}=e;return(0,_.jsx)("div",{role:"tabpanel",className:(0,r.A)(k.tabItem,i),hidden:a,children:t})}var I=a(62771);const S=function(e){let{languages:t}=e;const[r,s]=(0,i.useState)([]),n=(0,I.u)().frontMatter.id;return(0,i.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,i.lazy)((()=>a(36217)(`./${n}/_${e.value}.mdx`)));return{label:e.label,component:t}})));s(e)})()}),[t]),(0,_.jsx)("div",{children:r.length>0&&(0,_.jsx)(g,{groupId:"elemental-selenium-tabs",children:r.map(((e,t)=>(0,_.jsx)(j,{value:e.label,label:e.label,children:(0,_.jsx)(i.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading..."}),children:(0,_.jsx)(e.component,{})})},t)))})})}},59278:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});const i=a.p+"assets/images/dave-haeffner-51c0929f88475823fb30e6519d3be0a3.jpeg"},36217:(e,t,a)=>{var i={"./1-upload-a-file/_csharp.mdx":[1192,1869,1432,1192],"./1-upload-a-file/_java.mdx":[28169,1869,1432,8169],"./1-upload-a-file/_javascript.mdx":[98576,1869,1432,8576],"./1-upload-a-file/_python.mdx":[723,1869,1432,723],"./1-upload-a-file/_ruby.mdx":[51777,1869,1432,1777],"./1-upload-a-file/_selenide.mdx":[76066,1869,1432,6066],"./10-retry-test-actions/_ruby.mdx":[76678,6678],"./11-build-an-interactive-prompt/_ruby.mdx":[57644,7644],"./12-opt-out-of-ab-tests/_csharp.mdx":[4654,4654],"./12-opt-out-of-ab-tests/_java.mdx":[38411,8411],"./12-opt-out-of-ab-tests/_javascript.mdx":[59790,9790],"./12-opt-out-of-ab-tests/_python.mdx":[28797,8797],"./12-opt-out-of-ab-tests/_ruby.mdx":[77971,7971],"./13-how-to-access-basic-auth/_csharp.mdx":[93998,3998],"./13-how-to-access-basic-auth/_java.mdx":[15787,5787],"./13-how-to-access-basic-auth/_javascript.mdx":[81966,1966],"./13-how-to-access-basic-auth/_python.mdx":[48477,8477],"./13-how-to-access-basic-auth/_ruby.mdx":[4723,4723],"./14-interactive-prompts-revisited/_ruby.mdx":[45725,5725],"./15-download-secure-files/_ruby.mdx":[46154,6154],"./16-take-screenshot-on-failure/_csharp.mdx":[31573,1573],"./16-take-screenshot-on-failure/_java.mdx":[77184,7184],"./16-take-screenshot-on-failure/_javascript.mdx":[33853,3853],"./16-take-screenshot-on-failure/_python.mdx":[18530,8530],"./16-take-screenshot-on-failure/_ruby.mdx":[40328,328],"./17-retrieve-http-status-codes/_ruby.mdx":[64279,6660],"./19-data-driven-testing/_ruby.mdx":[25174,5174],"./2-download-a-file/_csharp.mdx":[28810,1869,1432,8810],"./2-download-a-file/_java.mdx":[10351,1869,1432,351],"./2-download-a-file/_javascript.mdx":[21082,1869,1432,1082],"./2-download-a-file/_python.mdx":[26849,1869,1432,6849],"./2-download-a-file/_ruby.mdx":[82759,1869,1432,2759],"./2-download-a-file/_selenide.mdx":[80080,1869,1432,80],"./22-locator-strategy/_ruby.mdx":[85814,5814],"./23-dynamic-pages/_ruby.mdx":[91589,3970],"./24-rest-apis/_ruby.mdx":[20686,686],"./25-how-to-work-with-tables/_csharp.mdx":[96837,6837],"./25-how-to-work-with-tables/_java.mdx":[17872,7872],"./25-how-to-work-with-tables/_javascript.mdx":[5197,5197],"./25-how-to-work-with-tables/_python.mdx":[38834,8834],"./25-how-to-work-with-tables/_ruby.mdx":[66168,6168],"./26-cloud/_ruby.mdx":[68307,8307],"./27-parallel/_ruby.mdx":[4428,2047],"./29-chrome-driver/_csharp.mdx":[77539,7539],"./29-chrome-driver/_java.mdx":[85650,5650],"./29-chrome-driver/_python.mdx":[57452,7452],"./29-chrome-driver/_ruby.mdx":[99474,9474],"./3-work-with-frames/_csharp.mdx":[94265,1869,1432,4265],"./3-work-with-frames/_java.mdx":[73084,1869,1432,3084],"./3-work-with-frames/_javascript.mdx":[81633,1869,1432,1633],"./3-work-with-frames/_python.mdx":[74478,1869,1432,4478],"./3-work-with-frames/_ruby.mdx":[59348,1869,1432,9348],"./3-work-with-frames/_selenide.mdx":[87099,1869,1432,7099],"./3-work-with-frames/_serenity-js.mdx":[31169,1869,1432,1169],"./30-mobile/_ruby.mdx":[45299,5299],"./32-css-vs-xpath/_ruby.mdx":[51822,1822],"./33-css-vs-xpath-2/_ruby.mdx":[75816,5816],"./34-css-vs-xpath-3/_ruby.mdx":[26376,6376],"./38-headless/_ruby.mdx":[64492,4492],"./39-drag-and-drop/_ruby.mdx":[16096,3715],"./4-work-with-multiple-windows/_csharp.mdx":[14338,1869,1432,4338],"./4-work-with-multiple-windows/_java.mdx":[92839,1869,1432,2839],"./4-work-with-multiple-windows/_javascript.mdx":[53922,1869,1432,3922],"./4-work-with-multiple-windows/_python.mdx":[43753,1869,1432,3753],"./4-work-with-multiple-windows/_ruby.mdx":[45823,1869,1432,5823],"./4-work-with-multiple-windows/_selenide.mdx":[43848,1869,1432,3848],"./40-disabled-element/_csharp.mdx":[1336,1336],"./40-disabled-element/_java.mdx":[33561,3561],"./40-disabled-element/_javascript.mdx":[63008,3008],"./40-disabled-element/_python.mdx":[45475,5475],"./40-disabled-element/_ruby.mdx":[57297,7297],"./41-one-test-multiple-browsers/_ruby.mdx":[26997,6997],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[65922,5922],"./43-forgot-password/_ruby.mdx":[84394,4394],"./44-exception-handling/_ruby.mdx":[82557,2557],"./45-how-to-test-checkboxes/_csharp.mdx":[75329,5329],"./45-how-to-test-checkboxes/_java.mdx":[89380,9380],"./45-how-to-test-checkboxes/_javascript.mdx":[58713,8713],"./45-how-to-test-checkboxes/_python.mdx":[87590,7590],"./45-how-to-test-checkboxes/_ruby.mdx":[11932,1932],"./47-waiting/_ruby.mdx":[44226,4226],"./48-load-testing/_ruby.mdx":[46841,6841],"./49-performance-testing/_ruby.mdx":[1096,1096],"./5-select-from-a-dropdown/_csharp.mdx":[62999,1869,1432,2999],"./5-select-from-a-dropdown/_java.mdx":[24494,1869,1432,4494],"./5-select-from-a-dropdown/_javascript.mdx":[7887,1869,1432,7887],"./5-select-from-a-dropdown/_python.mdx":[51032,1869,1432,1032],"./5-select-from-a-dropdown/_ruby.mdx":[77198,1869,1432,7198],"./5-select-from-a-dropdown/_selenide.mdx":[76269,1869,1432,6269],"./50-how-to-work-with-hovers/_csharp.mdx":[63783,3783],"./50-how-to-work-with-hovers/_java.mdx":[97694,7694],"./50-how-to-work-with-hovers/_javascript.mdx":[21663,1663],"./50-how-to-work-with-hovers/_python.mdx":[18920,8920],"./50-how-to-work-with-hovers/_ruby.mdx":[27902,5521],"./51-javascript-alerts/_csharp.mdx":[76032,6032],"./51-javascript-alerts/_java.mdx":[1,1],"./51-javascript-alerts/_javascript.mdx":[58648,8648],"./51-javascript-alerts/_python.mdx":[65339,5339],"./51-javascript-alerts/_ruby.mdx":[54265,6646],"./52-grid/_java.mdx":[80557,557],"./52-grid/_javascript.mdx":[45228,5228],"./52-grid/_python.mdx":[87015,7015],"./52-grid/_ruby.mdx":[36197,6197],"./53-growl/_csharp.mdx":[85634,5634],"./53-growl/_java.mdx":[87719,7719],"./53-growl/_javascript.mdx":[11714,1714],"./53-growl/_python.mdx":[39913,9913],"./53-growl/_ruby.mdx":[14527,4527],"./54-logging/_ruby.mdx":[39496,9496],"./55-wrapper/_ruby.mdx":[80067,67],"./56-retry-failed-tests/_ruby.mdx":[79661,9661],"./57-junit-xml/_ruby.mdx":[26596,6596],"./58-tagging/_ruby.mdx":[79922,9922],"./6-open-new-window/_csharp.mdx":[45673,1869,1432,5673],"./6-open-new-window/_java.mdx":[97900,1869,1432,7900],"./6-open-new-window/_javascript.mdx":[42993,1869,1432,2993],"./6-open-new-window/_python.mdx":[3934,1869,1432,3934],"./6-open-new-window/_ruby.mdx":[67396,1869,1432,7396],"./60-list-tags/_ruby.mdx":[93024,3024],"./61-how-to-press-keyboard-keys/_csharp.mdx":[66059,6059],"./61-how-to-press-keyboard-keys/_java.mdx":[25530,5530],"./61-how-to-press-keyboard-keys/_javascript.mdx":[8915,8915],"./61-how-to-press-keyboard-keys/_python.mdx":[50116,116],"./61-how-to-press-keyboard-keys/_ruby.mdx":[41306,1306],"./63-right-click/_csharp.mdx":[20441,441],"./63-right-click/_java.mdx":[57404,7404],"./63-right-click/_javascript.mdx":[17921,7921],"./63-right-click/_python.mdx":[2958,2958],"./63-right-click/_ruby.mdx":[54996,4996],"./64-limit-bandwidth/_ruby.mdx":[14247,4247],"./65-highlight-elements/_csharp.mdx":[94636,4636],"./65-highlight-elements/_java.mdx":[73877,3877],"./65-highlight-elements/_javascript.mdx":[86724,6724],"./65-highlight-elements/_python.mdx":[94879,4879],"./65-highlight-elements/_ruby.mdx":[96877,6877],"./66-blacklist/_ruby.mdx":[26565,6565],"./67-broken-images/_ruby.mdx":[9923,9923],"./68-load-testing-revisited/_ruby.mdx":[28323,8323],"./69-safari/_java.mdx":[33591,3591],"./69-safari/_ruby.mdx":[11823,1823],"./7-use-a-page-object/_ruby.mdx":[17244,7244],"./72-headless-chrome/_ruby.mdx":[94531,4531],"./8-download-a-file-revisited/_csharp.mdx":[45932,5932],"./8-download-a-file-revisited/_java.mdx":[73525,3525],"./8-download-a-file-revisited/_python.mdx":[52127,2127],"./8-download-a-file-revisited/_ruby.mdx":[66381,6381],"./9-use-a-base-page-object/_ruby.mdx":[80582,582]};function r(e){if(!a.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(r)))}r.keys=()=>Object.keys(i),r.id=36217,e.exports=r},28453:(e,t,a)=>{"use strict";a.d(t,{R:()=>n,x:()=>o});var i=a(96540);const r={},s=i.createContext(r);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);