(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[5652],{86401:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(74848),o=r(28453),n=r(54152);const s={title:"Cloud",id:"26-cloud",slug:"/26-cloud",sidebar_label:"Cloud",description:"In order to test features in a previous version of Chrome, you would need to run a virtual machine (VM) on your computer with a legit version of Windows installed on the VM.",number:26,hide_table_of_contents:!0,level:1,publish_date:new Date("2015-09-15T00:00:00.000Z"),tags:["sauce labs","test infrastructure","to the cloud","cloud","someone elses grid"],category:["troubleshooting"]},i="How to Run Your Tests on Any Browser & Operating System",l={id:"cloud/26-cloud",title:"Cloud",description:"In order to test features in a previous version of Chrome, you would need to run a virtual machine (VM) on your computer with a legit version of Windows installed on the VM.",source:"@site/tips/26-cloud/main.mdx",sourceDirName:"26-cloud",slug:"/26-cloud",permalink:"/tips/26-cloud",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/26-cloud/main.mdx",tags:[{label:"sauce labs",permalink:"/tips/tags/sauce-labs"},{label:"test infrastructure",permalink:"/tips/tags/test-infrastructure"},{label:"to the cloud",permalink:"/tips/tags/to-the-cloud"},{label:"cloud",permalink:"/tips/tags/cloud"},{label:"someone elses grid",permalink:"/tips/tags/someone-elses-grid"}],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1720434872e3,frontMatter:{title:"Cloud",id:"26-cloud",slug:"/26-cloud",sidebar_label:"Cloud",description:"In order to test features in a previous version of Chrome, you would need to run a virtual machine (VM) on your computer with a legit version of Windows installed on the VM.",number:26,hide_table_of_contents:!0,level:1,publish_date:"2015-09-15T00:00:00.000Z",tags:["sauce labs","test infrastructure","to the cloud","cloud","someone elses grid"],category:["troubleshooting"]},sidebar:"defaultSidebar",previous:{title:"How To Work With Tables",permalink:"/tips/25-how-to-work-with-tables"},next:{title:"Parallelization",permalink:"/tips/27-parallel"}},d={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-run-your-tests-on-any-browser--operating-system",children:"How to Run Your Tests on Any Browser & Operating System"}),"\n",(0,a.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,a.jsx)(t.p,{children:'In order to test features in a previous version of Chrome, you would need to run a virtual machine (VM) on your\ncomputer with a "legit" version of Windows installed on the VM.'}),"\n",(0,a.jsxs)(t.p,{children:["Now what about when the other half of your users use Chrome and Safari on macOS, and maybe other operating systems?\nWhat if you need to run those tests in parallel and scale up the number of VMs available? Then you're looking at\nprovisioning, running, and maintaining your own farm of machines and standing up something like ",(0,a.jsx)(t.a,{href:"https://www.selenium.dev/documentation/grid/",children:"Selenium Grid"}),"\nto coordinate tests across them."]}),"\n",(0,a.jsx)(t.p,{children:"And all you wanted to do was run your tests on the browsers you cared about... but there's a better solution to all\nof this."}),"\n",(0,a.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,a.jsxs)(t.p,{children:["Rather than take on the overhead of a test infrastructure, you can easily outsource things to a third-party cloud\nprovider (a.k.a. Someone Elses Grid). There are a handful of players in this space, but there's one that stands out --\n",(0,a.jsx)(t.a,{href:"https://saucelabs.com/",children:"Sauce Labs"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["At the heart of Selenium at scale is the use of Selenium Grid. Selenium Grid lets you distribute test execution across\nseveral machines and you connect to it with ",(0,a.jsx)(t.a,{href:"https://www.selenium.dev/documentation/webdriver/",children:"Selenium WebDriver"}),".\nWith Selenium WebDriver you specify the browser type, browser version, and operating system."]}),"\n",(0,a.jsx)(t.p,{children:"This is fundamentally how Sauce Labs works. Behind the curtain they are ultimately running Selenium Grid, and they\nreceive and execute your tests through Selenium WebDriver."}),"\n",(0,a.jsx)(t.p,{children:"Here is an example."}),"\n","\n",(0,a.jsx)(n.A,{languages:[{label:"Ruby",value:"ruby"}]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},62771:(e,t,r)=>{"use strict";r.d(t,{_:()=>i,u:()=>l});var a=r(96540),o=r(89532),n=r(74848);const s=a.createContext(null);function i(e){let{children:t,content:r}=e;const o=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return(0,n.jsx)(s.Provider,{value:o,children:t})}function l(){const e=(0,a.useContext)(s);if(null===e)throw new o.dV("DocProvider");return e}},54152:(e,t,r)=>{"use strict";r.d(t,{A:()=>V});var a=r(96540),o=r(34164),n=r(23104),s=r(56347),i=r(205),l=r(57485),d=r(31682),u=r(89466);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:o}}=e;return{value:t,label:r,attributes:a,default:o}}))}(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const o=(0,s.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(o.location.search);t.set(n,e),o.replace({...o.location,search:t.toString()})}),[n,o])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,n=m(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[d,c]=p({queryString:r,groupId:o}),[b,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,n]=(0,u.Dv)(r);return[o,(0,a.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:o}),w=(()=>{const e=d??b;return h({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{w&&l(w)}),[w]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),x(e)}),[c,x,n]),tabValues:n}}var x=r(92303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=r(74848);function f(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),o=i[r].value;o!==a&&(d(t),s(o))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...n,className:(0,o.A)("tabs__item",w.tabItem,n?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:o}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function v(e){const t=b(e);return(0,_.jsxs)("div",{className:(0,o.A)("tabs-container",w.tabList),children:[(0,_.jsx)(f,{...t,...e}),(0,_.jsx)(y,{...t,...e})]})}function g(e){const t=(0,x.A)();return(0,_.jsx)(v,{...e,children:c(e.children)},String(t))}const j={tabItem:"tabItem_Ymn6"};function k(e){let{children:t,hidden:r,className:a}=e;return(0,_.jsx)("div",{role:"tabpanel",className:(0,o.A)(j.tabItem,a),hidden:r,children:t})}var S=r(62771);const V=function(e){let{languages:t}=e;const[o,n]=(0,a.useState)([]),s=(0,S.u)().frontMatter.id;return(0,a.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,a.lazy)((()=>r(36217)(`./${s}/_${e.value}.mdx`)));return{label:e.label,component:t}})));n(e)})()}),[t]),(0,_.jsx)("div",{children:o.length>0&&(0,_.jsx)(g,{groupId:"elemental-selenium-tabs",children:o.map(((e,t)=>(0,_.jsx)(k,{value:e.label,label:e.label,children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading..."}),children:(0,_.jsx)(e.component,{})})},t)))})})}},36217:(e,t,r)=>{var a={"./1-upload-a-file/_csharp.mdx":[1192,1869,1432,8811],"./1-upload-a-file/_java.mdx":[28169,1869,1432,8169],"./1-upload-a-file/_javascript.mdx":[98576,1869,1432,8576],"./1-upload-a-file/_python.mdx":[723,1869,1432,723],"./1-upload-a-file/_ruby.mdx":[51777,1869,1432,1777],"./1-upload-a-file/_selenide.mdx":[76066,1869,1432,6066],"./10-retry-test-actions/_ruby.mdx":[76678,6678],"./11-build-an-interactive-prompt/_ruby.mdx":[57644,7644],"./12-opt-out-of-ab-tests/_csharp.mdx":[4654,4654],"./12-opt-out-of-ab-tests/_java.mdx":[38411,8411],"./12-opt-out-of-ab-tests/_javascript.mdx":[59790,9790],"./12-opt-out-of-ab-tests/_python.mdx":[28797,8797],"./12-opt-out-of-ab-tests/_ruby.mdx":[77971,7971],"./13-how-to-access-basic-auth/_csharp.mdx":[93998,1617],"./13-how-to-access-basic-auth/_java.mdx":[15787,5787],"./13-how-to-access-basic-auth/_javascript.mdx":[81966,1966],"./13-how-to-access-basic-auth/_python.mdx":[48477,8477],"./13-how-to-access-basic-auth/_ruby.mdx":[4723,4723],"./14-interactive-prompts-revisited/_ruby.mdx":[45725,5725],"./15-download-secure-files/_ruby.mdx":[46154,6154],"./16-take-screenshot-on-failure/_csharp.mdx":[31573,1573],"./16-take-screenshot-on-failure/_java.mdx":[77184,7184],"./16-take-screenshot-on-failure/_javascript.mdx":[33853,3853],"./16-take-screenshot-on-failure/_python.mdx":[18530,8530],"./16-take-screenshot-on-failure/_ruby.mdx":[40328,328],"./17-retrieve-http-status-codes/_ruby.mdx":[64279,6660],"./19-data-driven-testing/_ruby.mdx":[25174,5174],"./2-download-a-file/_csharp.mdx":[28810,1869,1432,8810],"./2-download-a-file/_java.mdx":[10351,1869,1432,351],"./2-download-a-file/_javascript.mdx":[21082,1869,1432,1082],"./2-download-a-file/_python.mdx":[26849,1869,1432,6849],"./2-download-a-file/_ruby.mdx":[82759,1869,1432,2759],"./2-download-a-file/_selenide.mdx":[80080,1869,1432,80],"./22-locator-strategy/_ruby.mdx":[85814,5814],"./23-dynamic-pages/_ruby.mdx":[91589,1589],"./24-rest-apis/_ruby.mdx":[20686,686],"./25-how-to-work-with-tables/_csharp.mdx":[96837,6837],"./25-how-to-work-with-tables/_java.mdx":[17872,7872],"./25-how-to-work-with-tables/_javascript.mdx":[5197,5197],"./25-how-to-work-with-tables/_python.mdx":[38834,8834],"./25-how-to-work-with-tables/_ruby.mdx":[66168,6168],"./26-cloud/_ruby.mdx":[68307,8307],"./27-parallel/_ruby.mdx":[4428,4428],"./29-chrome-driver/_csharp.mdx":[77539,7539],"./29-chrome-driver/_java.mdx":[85650,5650],"./29-chrome-driver/_python.mdx":[57452,7452],"./29-chrome-driver/_ruby.mdx":[99474,9474],"./3-work-with-frames/_csharp.mdx":[94265,1869,1432,4265],"./3-work-with-frames/_java.mdx":[73084,1869,1432,3084],"./3-work-with-frames/_javascript.mdx":[81633,1869,1432,1633],"./3-work-with-frames/_python.mdx":[74478,1869,1432,4478],"./3-work-with-frames/_ruby.mdx":[59348,1869,1432,9348],"./3-work-with-frames/_selenide.mdx":[87099,1869,1432,7099],"./3-work-with-frames/_serenity-js.mdx":[31169,1869,1432,1169],"./30-mobile/_ruby.mdx":[45299,5299],"./32-css-vs-xpath/_ruby.mdx":[51822,1822],"./33-css-vs-xpath-2/_ruby.mdx":[75816,5816],"./34-css-vs-xpath-3/_ruby.mdx":[26376,6376],"./38-headless/_ruby.mdx":[64492,4492],"./39-drag-and-drop/_ruby.mdx":[16096,6096],"./4-work-with-multiple-windows/_csharp.mdx":[14338,1869,1432,4338],"./4-work-with-multiple-windows/_java.mdx":[92839,1869,1432,2839],"./4-work-with-multiple-windows/_javascript.mdx":[53922,1869,1432,3922],"./4-work-with-multiple-windows/_python.mdx":[43753,1869,1432,3753],"./4-work-with-multiple-windows/_ruby.mdx":[45823,1869,1432,5823],"./4-work-with-multiple-windows/_selenide.mdx":[43848,1869,1432,3848],"./40-disabled-element/_csharp.mdx":[1336,1336],"./40-disabled-element/_java.mdx":[33561,3561],"./40-disabled-element/_javascript.mdx":[63008,3008],"./40-disabled-element/_python.mdx":[45475,5475],"./40-disabled-element/_ruby.mdx":[57297,7297],"./41-one-test-multiple-browsers/_ruby.mdx":[26997,6997],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[65922,5922],"./43-forgot-password/_ruby.mdx":[84394,4394],"./44-exception-handling/_ruby.mdx":[82557,2557],"./45-how-to-test-checkboxes/_csharp.mdx":[75329,5329],"./45-how-to-test-checkboxes/_java.mdx":[89380,9380],"./45-how-to-test-checkboxes/_javascript.mdx":[58713,8713],"./45-how-to-test-checkboxes/_python.mdx":[87590,7590],"./45-how-to-test-checkboxes/_ruby.mdx":[11932,1932],"./47-waiting/_ruby.mdx":[44226,4226],"./48-load-testing/_ruby.mdx":[46841,6841],"./49-performance-testing/_ruby.mdx":[1096,1096],"./5-select-from-a-dropdown/_csharp.mdx":[62999,1869,1432,2999],"./5-select-from-a-dropdown/_java.mdx":[24494,1869,1432,4494],"./5-select-from-a-dropdown/_javascript.mdx":[7887,1869,1432,7887],"./5-select-from-a-dropdown/_python.mdx":[51032,1869,1432,1032],"./5-select-from-a-dropdown/_ruby.mdx":[77198,1869,1432,7198],"./5-select-from-a-dropdown/_selenide.mdx":[76269,1869,1432,6269],"./50-how-to-work-with-hovers/_csharp.mdx":[63783,3783],"./50-how-to-work-with-hovers/_java.mdx":[97694,7694],"./50-how-to-work-with-hovers/_javascript.mdx":[21663,1663],"./50-how-to-work-with-hovers/_python.mdx":[18920,8920],"./50-how-to-work-with-hovers/_ruby.mdx":[27902,5521],"./51-javascript-alerts/_csharp.mdx":[76032,6032],"./51-javascript-alerts/_java.mdx":[1,1],"./51-javascript-alerts/_javascript.mdx":[58648,8648],"./51-javascript-alerts/_python.mdx":[65339,5339],"./51-javascript-alerts/_ruby.mdx":[54265,6646],"./52-grid/_java.mdx":[80557,557],"./52-grid/_javascript.mdx":[45228,5228],"./52-grid/_python.mdx":[87015,7015],"./52-grid/_ruby.mdx":[36197,6197],"./53-growl/_csharp.mdx":[85634,5634],"./53-growl/_java.mdx":[87719,7719],"./53-growl/_javascript.mdx":[11714,1714],"./53-growl/_python.mdx":[39913,9913],"./53-growl/_ruby.mdx":[14527,4527],"./54-logging/_ruby.mdx":[39496,9496],"./55-wrapper/_ruby.mdx":[80067,67],"./56-retry-failed-tests/_ruby.mdx":[79661,9661],"./57-junit-xml/_ruby.mdx":[26596,6596],"./58-tagging/_ruby.mdx":[79922,9922],"./6-open-new-window/_csharp.mdx":[45673,1869,1432,5673],"./6-open-new-window/_java.mdx":[97900,1869,1432,7900],"./6-open-new-window/_javascript.mdx":[42993,1869,1432,2993],"./6-open-new-window/_python.mdx":[3934,1869,1432,3934],"./6-open-new-window/_ruby.mdx":[67396,1869,1432,7396],"./6-open-new-window/_selenide.mdx":[74251,1869,1432,4251],"./60-list-tags/_ruby.mdx":[93024,3024],"./61-how-to-press-keyboard-keys/_csharp.mdx":[66059,6059],"./61-how-to-press-keyboard-keys/_java.mdx":[25530,5530],"./61-how-to-press-keyboard-keys/_javascript.mdx":[8915,8915],"./61-how-to-press-keyboard-keys/_python.mdx":[50116,116],"./61-how-to-press-keyboard-keys/_ruby.mdx":[41306,1306],"./63-right-click/_csharp.mdx":[20441,441],"./63-right-click/_java.mdx":[57404,7404],"./63-right-click/_javascript.mdx":[17921,7921],"./63-right-click/_python.mdx":[2958,2958],"./63-right-click/_ruby.mdx":[54996,4996],"./64-limit-bandwidth/_ruby.mdx":[14247,4247],"./65-highlight-elements/_csharp.mdx":[94636,4636],"./65-highlight-elements/_java.mdx":[73877,3877],"./65-highlight-elements/_javascript.mdx":[86724,6724],"./65-highlight-elements/_python.mdx":[94879,4879],"./65-highlight-elements/_ruby.mdx":[96877,6877],"./66-blacklist/_ruby.mdx":[26565,6565],"./67-broken-images/_ruby.mdx":[9923,9923],"./68-load-testing-revisited/_ruby.mdx":[28323,8323],"./69-safari/_java.mdx":[33591,3591],"./69-safari/_ruby.mdx":[11823,1823],"./7-use-a-page-object/_ruby.mdx":[17244,7244],"./72-headless-chrome/_ruby.mdx":[94531,4531],"./8-download-a-file-revisited/_csharp.mdx":[45932,5932],"./8-download-a-file-revisited/_java.mdx":[73525,3525],"./8-download-a-file-revisited/_python.mdx":[52127,2127],"./8-download-a-file-revisited/_ruby.mdx":[66381,6381],"./9-use-a-base-page-object/_ruby.mdx":[80582,582]};function o(e){if(!r.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(a),o.id=36217,e.exports=o},28453:(e,t,r)=>{"use strict";r.d(t,{R:()=>s,x:()=>i});var a=r(96540);const o={},n=a.createContext(o);function s(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);