(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[4486],{27072:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"build-an-interactive-prompt/11-build-an-interactive-prompt","title":"Build An Interactive Prompt","description":"Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate, it becomes challenging to work through it to completion.","source":"@site/tips/11-build-an-interactive-prompt/main.mdx","sourceDirName":"11-build-an-interactive-prompt","slug":"/11-build-an-interactive-prompt","permalink":"/tips/11-build-an-interactive-prompt","draft":false,"unlisted":false,"editUrl":"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/11-build-an-interactive-prompt/main.mdx","tags":[{"inline":true,"label":"repl","permalink":"/tips/tags/repl"},{"inline":true,"label":"debugging","permalink":"/tips/tags/debugging"}],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1732054621000,"frontMatter":{"title":"Build An Interactive Prompt","id":"11-build-an-interactive-prompt","slug":"/11-build-an-interactive-prompt","sidebar_label":"Build An Interactive Prompt","description":"Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate, it becomes challenging to work through it to completion.","number":11,"hide_table_of_contents":true,"level":2,"publish_date":"2013-08-06T00:00:00.000Z","tags":["repl","debugging"],"category":["troubleshooting"]},"sidebar":"defaultSidebar","previous":{"title":"Retry Test Actions","permalink":"/tips/10-retry-test-actions"},"next":{"title":"Opt Out of AB Tests","permalink":"/tips/12-opt-out-of-ab-tests"}}');var n=a(74848),o=a(28453),i=a(54152);const s={title:"Build An Interactive Prompt",id:"11-build-an-interactive-prompt",slug:"/11-build-an-interactive-prompt",sidebar_label:"Build An Interactive Prompt",description:"Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate, it becomes challenging to work through it to completion.",number:11,hide_table_of_contents:!0,level:2,publish_date:new Date("2013-08-06T00:00:00.000Z"),tags:["repl","debugging"],category:["troubleshooting"]},l="Building an Interactive Prompt",d={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"building-an-interactive-prompt",children:"Building an Interactive Prompt"})}),"\n",(0,n.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,n.jsx)(t.p,{children:"Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate,\nit becomes challenging to work through it to completion."}),"\n",(0,n.jsx)(t.p,{children:"The typical approach is to walk through the scenario manually and inspect its markup, identify the parts you want to\ninteract with, write up the test script, run it, and watch it. If it passes, then pat yourself on the back. If it\nfails, make some tweaks and run it again -- repeating until it passes."}),"\n",(0,n.jsx)(t.p,{children:"This is a real pain, and it's even more frustrating when debugging tests that fail intermittently."}),"\n",(0,n.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,n.jsx)(t.p,{children:"One way to simplify things, and make it easier for testers to transition from Selenium IDE, is to build an interactive\nprompt -- also known as a read-eval-print-loop (REPL)."}),"\n",(0,n.jsx)(t.p,{children:"Upon loading the prompt it will launch a browser and accept Selenium commands just the same as they are written in\ntest code. And if a command is issued that errors (or that it doesn't recognize) the prompt will provide that\ninformation and continue to function."}),"\n",(0,n.jsx)(t.p,{children:"This will enable us to continue through specific Selenium actions and locators to verify that they work before\nputting them into test code."}),"\n","\n",(0,n.jsx)(i.A,{languages:[{label:"Ruby",value:"ruby"}]}),"\n",(0,n.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,n.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,n.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:a(59278).A+"#author-img",title:"a title",width:"280",height:"280"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},60542:(e,t,a)=>{"use strict";a.d(t,{_:()=>s,u:()=>l});var r=a(96540),n=a(89532),o=a(74848);const i=r.createContext(null);function s(e){let{children:t,content:a}=e;const n=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,o.jsx)(i.Provider,{value:n,children:t})}function l(){const e=(0,r.useContext)(i);if(null===e)throw new n.dV("DocProvider");return e}},54152:(e,t,a)=>{"use strict";a.d(t,{A:()=>A});var r=a(96540),n=a(34164),o=a(23104),i=a(56347),s=a(205),l=a(57485),d=a(31682),u=a(70679);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,c]=p({queryString:a,groupId:n}),[b,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),w=(()=>{const e=d??b;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{w&&l(w)}),[w]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),x(e)}),[c,x,o]),tabValues:o}}var x=a(92303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function v(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),n=s[a].value;n!==r&&(d(t),i(n))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...o,className:(0,n.A)("tabs__item",w.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function _(e){let{lazy:t,children:a,selectedValue:o}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function g(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",w.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(_,{...t,...e})]})}function y(e){const t=(0,x.A)();return(0,f.jsx)(g,{...e,children:c(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:a,className:r}=e;return(0,f.jsx)("div",{role:"tabpanel",className:(0,n.A)(k.tabItem,r),hidden:a,children:t})}var I=a(60542);const A=function(e){let{languages:t}=e;const[n,o]=(0,r.useState)([]),i=(0,I.u)().frontMatter.id;return(0,r.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,r.lazy)((()=>a(36217)(`./${i}/_${e.value}.mdx`)));return{label:e.label,component:t}})));o(e)})()}),[t]),(0,f.jsx)("div",{children:n.length>0&&(0,f.jsx)(y,{groupId:"elemental-selenium-tabs",children:n.map(((e,t)=>(0,f.jsx)(j,{value:e.label,label:e.label,children:(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(e.component,{})})},t)))})})}},59278:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});const r=a.p+"assets/images/dave-haeffner-51c0929f88475823fb30e6519d3be0a3.jpeg"},36217:(e,t,a)=>{var r={"./1-upload-a-file/_csharp.mdx":[45889,1869,1432,5889],"./1-upload-a-file/_java.mdx":[40356,1869,1432,356],"./1-upload-a-file/_javascript.mdx":[6937,1869,1432,6937],"./1-upload-a-file/_python.mdx":[58150,1869,1432,8150],"./1-upload-a-file/_ruby.mdx":[46556,1869,1432,6556],"./1-upload-a-file/_selenide.mdx":[9635,1869,1432,9635],"./10-retry-test-actions/_ruby.mdx":[68163,8163],"./11-build-an-interactive-prompt/_ruby.mdx":[65599,5599],"./12-opt-out-of-ab-tests/_csharp.mdx":[48337,8337],"./12-opt-out-of-ab-tests/_java.mdx":[86836,6836],"./12-opt-out-of-ab-tests/_javascript.mdx":[28777,8777],"./12-opt-out-of-ab-tests/_python.mdx":[80342,342],"./12-opt-out-of-ab-tests/_ruby.mdx":[38668,8668],"./13-how-to-access-basic-auth/_csharp.mdx":[70243,243],"./13-how-to-access-basic-auth/_java.mdx":[71570,1570],"./13-how-to-access-basic-auth/_javascript.mdx":[66459,6459],"./13-how-to-access-basic-auth/_python.mdx":[5292,5292],"./13-how-to-access-basic-auth/_ruby.mdx":[26066,6066],"./14-interactive-prompts-revisited/_ruby.mdx":[90690,690],"./15-download-secure-files/_ruby.mdx":[99353,9353],"./16-take-screenshot-on-failure/_csharp.mdx":[45748,5748],"./16-take-screenshot-on-failure/_java.mdx":[957,957],"./16-take-screenshot-on-failure/_javascript.mdx":[67164,7164],"./16-take-screenshot-on-failure/_python.mdx":[16983,6983],"./16-take-screenshot-on-failure/_ruby.mdx":[76821,6821],"./17-retrieve-http-status-codes/_ruby.mdx":[33150,3150],"./19-data-driven-testing/_ruby.mdx":[71841,1841],"./2-download-a-file/_csharp.mdx":[11703,1869,1432,1703],"./2-download-a-file/_java.mdx":[60654,1869,1432,654],"./2-download-a-file/_javascript.mdx":[58223,1869,1432,8223],"./2-download-a-file/_python.mdx":[43416,1869,1432,3416],"./2-download-a-file/_ruby.mdx":[30542,1869,1432,542],"./2-download-a-file/_selenide.mdx":[8173,1869,1432,8173],"./22-locator-strategy/_ruby.mdx":[78995,8995],"./23-dynamic-pages/_ruby.mdx":[92394,13],"./24-rest-apis/_ruby.mdx":[27169,7169],"./25-how-to-work-with-tables/_csharp.mdx":[42614,2614],"./25-how-to-work-with-tables/_java.mdx":[36083,6083],"./25-how-to-work-with-tables/_javascript.mdx":[80102,102],"./25-how-to-work-with-tables/_python.mdx":[12373,2373],"./25-how-to-work-with-tables/_ruby.mdx":[95931,5931],"./26-cloud/_ruby.mdx":[77932,5551],"./27-parallel/_ruby.mdx":[4125,4125],"./29-chrome-driver/_csharp.mdx":[71464,1464],"./29-chrome-driver/_java.mdx":[18665,8665],"./29-chrome-driver/_python.mdx":[74035,4035],"./29-chrome-driver/_ruby.mdx":[75617,5617],"./3-work-with-frames/_csharp.mdx":[48154,1869,1432,8154],"./3-work-with-frames/_java.mdx":[47263,1869,1432,7263],"./3-work-with-frames/_javascript.mdx":[49962,1869,1432,9962],"./3-work-with-frames/_python.mdx":[7409,1869,1432,7409],"./3-work-with-frames/_ruby.mdx":[52375,1869,1432,2375],"./3-work-with-frames/_selenide.mdx":[6272,1869,1432,6272],"./3-work-with-frames/_serenity-js.mdx":[20324,1869,1432,324],"./30-mobile/_ruby.mdx":[11554,1554],"./32-css-vs-xpath/_ruby.mdx":[87267,7267],"./33-css-vs-xpath-2/_ruby.mdx":[41773,1773],"./34-css-vs-xpath-3/_ruby.mdx":[11821,1821],"./38-headless/_ruby.mdx":[43601,3601],"./39-drag-and-drop/_ruby.mdx":[46027,6027],"./4-work-with-multiple-windows/_csharp.mdx":[36125,1869,1432,6125],"./4-work-with-multiple-windows/_java.mdx":[46184,1869,1432,6184],"./4-work-with-multiple-windows/_javascript.mdx":[77685,1869,1432,7685],"./4-work-with-multiple-windows/_python.mdx":[3802,1869,1432,3802],"./4-work-with-multiple-windows/_ruby.mdx":[51376,1869,1432,1376],"./4-work-with-multiple-windows/_selenide.mdx":[52079,1869,1432,2079],"./40-disabled-element/_csharp.mdx":[39225,9225],"./40-disabled-element/_java.mdx":[8124,8124],"./40-disabled-element/_javascript.mdx":[15297,5297],"./40-disabled-element/_python.mdx":[19438,9438],"./40-disabled-element/_ruby.mdx":[94388,9626],"./41-one-test-multiple-browsers/_ruby.mdx":[3736,3736],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[69413,9413],"./43-forgot-password/_ruby.mdx":[27997,7997],"./44-exception-handling/_ruby.mdx":[38344,8344],"./45-how-to-test-checkboxes/_csharp.mdx":[94360,4360],"./45-how-to-test-checkboxes/_java.mdx":[58905,8905],"./45-how-to-test-checkboxes/_javascript.mdx":[99136,9136],"./45-how-to-test-checkboxes/_python.mdx":[38499,8499],"./45-how-to-test-checkboxes/_ruby.mdx":[82641,2641],"./47-waiting/_ruby.mdx":[24781,4781],"./48-load-testing/_ruby.mdx":[29968,9968],"./49-performance-testing/_ruby.mdx":[41731,1731],"./5-select-from-a-dropdown/_csharp.mdx":[93483,1869,1432,5864],"./5-select-from-a-dropdown/_java.mdx":[74809,1869,1432,4809],"./5-select-from-a-dropdown/_javascript.mdx":[22048,1869,1432,2048],"./5-select-from-a-dropdown/_python.mdx":[17891,1869,1432,7891],"./5-select-from-a-dropdown/_ruby.mdx":[11953,1869,1432,1953],"./5-select-from-a-dropdown/_selenide.mdx":[16530,1869,1432,6530],"./50-how-to-work-with-hovers/_csharp.mdx":[82996,2996],"./50-how-to-work-with-hovers/_java.mdx":[24125,6506],"./50-how-to-work-with-hovers/_javascript.mdx":[476,476],"./50-how-to-work-with-hovers/_python.mdx":[61431,1431],"./50-how-to-work-with-hovers/_ruby.mdx":[49557,9557],"./51-javascript-alerts/_csharp.mdx":[2671,2671],"./51-javascript-alerts/_java.mdx":[89542,9542],"./51-javascript-alerts/_javascript.mdx":[36215,6215],"./51-javascript-alerts/_python.mdx":[41280,1280],"./51-javascript-alerts/_ruby.mdx":[13510,3510],"./52-grid/_java.mdx":[38876,8876],"./52-grid/_javascript.mdx":[7681,7681],"./52-grid/_python.mdx":[37902,5521],"./52-grid/_ruby.mdx":[25140,5140],"./53-growl/_csharp.mdx":[17625,7625],"./53-growl/_java.mdx":[85743,5743],"./53-growl/_javascript.mdx":[48897,8897],"./53-growl/_python.mdx":[97838,7838],"./53-growl/_ruby.mdx":[72007,4388],"./54-logging/_ruby.mdx":[64071,4071],"./55-wrapper/_ruby.mdx":[92172,2172],"./56-retry-failed-tests/_ruby.mdx":[31988,1988],"./57-junit-xml/_ruby.mdx":[17703,7703],"./58-tagging/_ruby.mdx":[90889,889],"./6-open-new-window/_csharp.mdx":[90108,1869,1432,108],"./6-open-new-window/_java.mdx":[43205,1869,1432,3205],"./6-open-new-window/_javascript.mdx":[60852,1869,1432,852],"./6-open-new-window/_python.mdx":[20879,1869,1432,879],"./6-open-new-window/_ruby.mdx":[61533,1869,1432,1533],"./6-open-new-window/_selenide.mdx":[230,1869,1432,230],"./60-list-tags/_ruby.mdx":[97771,7771],"./61-how-to-press-keyboard-keys/_csharp.mdx":[65550,5550],"./61-how-to-press-keyboard-keys/_java.mdx":[39275,9275],"./61-how-to-press-keyboard-keys/_javascript.mdx":[83662,3662],"./61-how-to-press-keyboard-keys/_python.mdx":[20029,29],"./61-how-to-press-keyboard-keys/_ruby.mdx":[11859,1859],"./63-right-click/_csharp.mdx":[69850,9850],"./63-right-click/_java.mdx":[56639,6639],"./63-right-click/_javascript.mdx":[91709,4090],"./63-right-click/_python.mdx":[29105,9105],"./63-right-click/_ruby.mdx":[61751,1751],"./64-limit-bandwidth/_ruby.mdx":[89776,9776],"./65-highlight-elements/_csharp.mdx":[85825,5825],"./65-highlight-elements/_java.mdx":[59492,9492],"./65-highlight-elements/_javascript.mdx":[93561,3561],"./65-highlight-elements/_python.mdx":[81734,1734],"./65-highlight-elements/_ruby.mdx":[65692,5692],"./66-blacklist/_ruby.mdx":[67058,7058],"./67-broken-images/_ruby.mdx":[27824,7824],"./68-load-testing-revisited/_ruby.mdx":[62278,9897],"./69-safari/_java.mdx":[61650,1650],"./69-safari/_ruby.mdx":[16146,6146],"./7-use-a-page-object/_ruby.mdx":[16741,6741],"./72-headless-chrome/_ruby.mdx":[33864,3864],"./8-download-a-file-revisited/_csharp.mdx":[30509,509],"./8-download-a-file-revisited/_java.mdx":[89176,9176],"./8-download-a-file-revisited/_python.mdx":[21738,1738],"./8-download-a-file-revisited/_ruby.mdx":[47392,7392],"./9-use-a-base-page-object/_ruby.mdx":[57937,7937]};function n(e){if(!a.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(n)))}n.keys=()=>Object.keys(r),n.id=36217,e.exports=n},28453:(e,t,a)=>{"use strict";a.d(t,{R:()=>i,x:()=>s});var r=a(96540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);