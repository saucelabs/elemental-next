(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[6767],{79370:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"right-click/63-right-click","title":"Right Click","description":"Sometimes you\'ll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu). These menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?","source":"@site/tips/63-right-click/main.mdx","sourceDirName":"63-right-click","slug":"/63-right-click","permalink":"/tips/63-right-click","draft":false,"unlisted":false,"editUrl":"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/63-right-click/main.mdx","tags":[{"inline":true,"label":"right-click","permalink":"/tips/tags/right-click"},{"inline":true,"label":"right click","permalink":"/tips/tags/right-click"},{"inline":true,"label":"context menu","permalink":"/tips/tags/context-menu"},{"inline":true,"label":"action builder","permalink":"/tips/tags/action-builder"},{"inline":true,"label":"context click","permalink":"/tips/tags/context-click"}],"version":"current","lastUpdatedBy":"Diego Molina","lastUpdatedAt":1710769270000,"frontMatter":{"title":"Right Click","id":"63-right-click","slug":"/63-right-click","sidebar_label":"Right Click","description":"Sometimes you\'ll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu). These menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?","number":63,"hide_table_of_contents":true,"level":2,"publish_date":"2015-10-13T00:00:00.000Z","tags":["right-click","right click","context menu","action builder","context click"],"category":["fundamentals"]},"sidebar":"defaultSidebar","previous":{"title":"How To Press Keyboard Keys","permalink":"/tips/61-keyboard-keys"},"next":{"title":"Limit Bandwidth","permalink":"/tips/64-limit-bandwidth"}}');var r=a(74848),i=a(28453),o=a(54152);const s={title:"Right Click",id:"63-right-click",slug:"/63-right-click",sidebar_label:"Right Click",description:"Sometimes you'll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu). These menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?",number:63,hide_table_of_contents:!0,level:2,publish_date:new Date("2015-10-13T00:00:00.000Z"),tags:["right-click","right click","context menu","action builder","context click"],category:["fundamentals"]},l="How to Right-click",d={},c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-right-click",children:"How to Right-click"})}),"\n",(0,r.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,r.jsx)(t.p,{children:"Sometimes you'll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu).\nThese menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?"}),"\n",(0,r.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,r.jsxs)(t.p,{children:["By leveraging ",(0,r.jsx)(t.a,{href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Interactions_Actions.htm",children:"Selenium's Action Builder"})," we can issue a right-click command (a.k.a. a ",(0,r.jsx)(t.a,{href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_Interactions_Actions_ContextClick.htm",children:(0,r.jsx)(t.code,{children:"ContextClick"})}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["We can then select an option from the menu by traversing it with keyboard arrow keys (which we can issue with the\nAction Builder's ",(0,r.jsx)(t.a,{href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_Interactions_Actions_SendKeys_1.htm",children:(0,r.jsx)(t.code,{children:"SendKeys"})})," command)."]}),"\n",(0,r.jsx)(t.p,{children:"Let's continue with an example."}),"\n","\n",(0,r.jsx)(o.A,{languages:[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"}]}),"\n",(0,r.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,r.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,r.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:a(59278).A+"#author-img",title:"a title",width:"280",height:"280"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},60542:(e,t,a)=>{"use strict";a.d(t,{_:()=>s,u:()=>l});var n=a(96540),r=a(89532),i=a(74848);const o=n.createContext(null);function s(e){let{children:t,content:a}=e;const r=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,i.jsx)(o.Provider,{value:r,children:t})}function l(){const e=(0,n.useContext)(o);if(null===e)throw new r.dV("DocProvider");return e}},54152:(e,t,a)=>{"use strict";a.d(t,{A:()=>A});var n=a(96540),r=a(34164),i=a(23104),o=a(56347),s=a(205),l=a(57485),d=a(31682),c=a(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=m(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[d,u]=p({queryString:a,groupId:r}),[b,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),_=(()=>{const e=d??b;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{_&&l(_)}),[_]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=a(92303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=a(74848);function y(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=s[a].value;r!==n&&(d(t),o(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.A)("tabs__item",_.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function f(e){let{lazy:t,children:a,selectedValue:i}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=b(e);return(0,w.jsxs)("div",{className:(0,r.A)("tabs-container",_.tabList),children:[(0,w.jsx)(y,{...t,...e}),(0,w.jsx)(f,{...t,...e})]})}function g(e){const t=(0,x.A)();return(0,w.jsx)(v,{...e,children:u(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:a,className:n}=e;return(0,w.jsx)("div",{role:"tabpanel",className:(0,r.A)(k.tabItem,n),hidden:a,children:t})}var S=a(60542);const A=function(e){let{languages:t}=e;const[r,i]=(0,n.useState)([]),o=(0,S.u)().frontMatter.id;return(0,n.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,n.lazy)((()=>a(36217)(`./${o}/_${e.value}.mdx`)));return{label:e.label,component:t}})));i(e)})()}),[t]),(0,w.jsx)("div",{children:r.length>0&&(0,w.jsx)(g,{groupId:"elemental-selenium-tabs",children:r.map(((e,t)=>(0,w.jsx)(j,{value:e.label,label:e.label,children:(0,w.jsx)(n.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(e.component,{})})},t)))})})}},59278:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/images/dave-haeffner-51c0929f88475823fb30e6519d3be0a3.jpeg"},36217:(e,t,a)=>{var n={"./1-upload-a-file/_csharp.mdx":[45889,1869,1432,5889],"./1-upload-a-file/_java.mdx":[40356,1869,1432,356],"./1-upload-a-file/_javascript.mdx":[6937,1869,1432,6937],"./1-upload-a-file/_python.mdx":[58150,1869,1432,8150],"./1-upload-a-file/_ruby.mdx":[46556,1869,1432,6556],"./1-upload-a-file/_selenide.mdx":[9635,1869,1432,9635],"./10-retry-test-actions/_ruby.mdx":[68163,8163],"./11-build-an-interactive-prompt/_ruby.mdx":[65599,5599],"./12-opt-out-of-ab-tests/_csharp.mdx":[48337,8337],"./12-opt-out-of-ab-tests/_java.mdx":[86836,6836],"./12-opt-out-of-ab-tests/_javascript.mdx":[28777,8777],"./12-opt-out-of-ab-tests/_python.mdx":[80342,342],"./12-opt-out-of-ab-tests/_ruby.mdx":[38668,8668],"./13-how-to-access-basic-auth/_csharp.mdx":[70243,243],"./13-how-to-access-basic-auth/_java.mdx":[71570,1570],"./13-how-to-access-basic-auth/_javascript.mdx":[66459,6459],"./13-how-to-access-basic-auth/_python.mdx":[5292,5292],"./13-how-to-access-basic-auth/_ruby.mdx":[26066,6066],"./14-interactive-prompts-revisited/_ruby.mdx":[90690,690],"./15-download-secure-files/_ruby.mdx":[99353,9353],"./16-take-screenshot-on-failure/_csharp.mdx":[45748,5748],"./16-take-screenshot-on-failure/_java.mdx":[957,957],"./16-take-screenshot-on-failure/_javascript.mdx":[67164,7164],"./16-take-screenshot-on-failure/_python.mdx":[16983,6983],"./16-take-screenshot-on-failure/_ruby.mdx":[76821,6821],"./17-retrieve-http-status-codes/_ruby.mdx":[33150,3150],"./19-data-driven-testing/_ruby.mdx":[71841,1841],"./2-download-a-file/_csharp.mdx":[11703,1869,1432,1703],"./2-download-a-file/_java.mdx":[60654,1869,1432,654],"./2-download-a-file/_javascript.mdx":[58223,1869,1432,8223],"./2-download-a-file/_python.mdx":[43416,1869,1432,3416],"./2-download-a-file/_ruby.mdx":[30542,1869,1432,542],"./2-download-a-file/_selenide.mdx":[8173,1869,1432,8173],"./22-locator-strategy/_ruby.mdx":[78995,8995],"./23-dynamic-pages/_ruby.mdx":[92394,13],"./24-rest-apis/_ruby.mdx":[27169,7169],"./25-how-to-work-with-tables/_csharp.mdx":[42614,2614],"./25-how-to-work-with-tables/_java.mdx":[36083,6083],"./25-how-to-work-with-tables/_javascript.mdx":[80102,102],"./25-how-to-work-with-tables/_python.mdx":[12373,2373],"./25-how-to-work-with-tables/_ruby.mdx":[95931,5931],"./26-cloud/_ruby.mdx":[77932,5551],"./27-parallel/_ruby.mdx":[4125,4125],"./29-chrome-driver/_csharp.mdx":[71464,1464],"./29-chrome-driver/_java.mdx":[18665,8665],"./29-chrome-driver/_python.mdx":[74035,4035],"./29-chrome-driver/_ruby.mdx":[75617,5617],"./3-work-with-frames/_csharp.mdx":[48154,1869,1432,8154],"./3-work-with-frames/_java.mdx":[47263,1869,1432,7263],"./3-work-with-frames/_javascript.mdx":[49962,1869,1432,9962],"./3-work-with-frames/_python.mdx":[7409,1869,1432,7409],"./3-work-with-frames/_ruby.mdx":[52375,1869,1432,2375],"./3-work-with-frames/_selenide.mdx":[6272,1869,1432,6272],"./3-work-with-frames/_serenity-js.mdx":[20324,1869,1432,324],"./30-mobile/_ruby.mdx":[11554,1554],"./32-css-vs-xpath/_ruby.mdx":[87267,7267],"./33-css-vs-xpath-2/_ruby.mdx":[41773,1773],"./34-css-vs-xpath-3/_ruby.mdx":[11821,1821],"./38-headless/_ruby.mdx":[43601,3601],"./39-drag-and-drop/_ruby.mdx":[46027,6027],"./4-work-with-multiple-windows/_csharp.mdx":[36125,1869,1432,6125],"./4-work-with-multiple-windows/_java.mdx":[46184,1869,1432,6184],"./4-work-with-multiple-windows/_javascript.mdx":[77685,1869,1432,7685],"./4-work-with-multiple-windows/_python.mdx":[3802,1869,1432,3802],"./4-work-with-multiple-windows/_ruby.mdx":[51376,1869,1432,1376],"./4-work-with-multiple-windows/_selenide.mdx":[52079,1869,1432,2079],"./40-disabled-element/_csharp.mdx":[39225,9225],"./40-disabled-element/_java.mdx":[8124,8124],"./40-disabled-element/_javascript.mdx":[15297,5297],"./40-disabled-element/_python.mdx":[19438,9438],"./40-disabled-element/_ruby.mdx":[94388,9626],"./41-one-test-multiple-browsers/_ruby.mdx":[3736,3736],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[69413,9413],"./43-forgot-password/_ruby.mdx":[27997,7997],"./44-exception-handling/_ruby.mdx":[38344,8344],"./45-how-to-test-checkboxes/_csharp.mdx":[94360,4360],"./45-how-to-test-checkboxes/_java.mdx":[58905,8905],"./45-how-to-test-checkboxes/_javascript.mdx":[99136,9136],"./45-how-to-test-checkboxes/_python.mdx":[38499,8499],"./45-how-to-test-checkboxes/_ruby.mdx":[82641,2641],"./47-waiting/_ruby.mdx":[24781,4781],"./48-load-testing/_ruby.mdx":[29968,9968],"./49-performance-testing/_ruby.mdx":[41731,1731],"./5-select-from-a-dropdown/_csharp.mdx":[93483,1869,1432,5864],"./5-select-from-a-dropdown/_java.mdx":[74809,1869,1432,4809],"./5-select-from-a-dropdown/_javascript.mdx":[22048,1869,1432,2048],"./5-select-from-a-dropdown/_python.mdx":[17891,1869,1432,7891],"./5-select-from-a-dropdown/_ruby.mdx":[11953,1869,1432,1953],"./5-select-from-a-dropdown/_selenide.mdx":[16530,1869,1432,6530],"./50-how-to-work-with-hovers/_csharp.mdx":[82996,2996],"./50-how-to-work-with-hovers/_java.mdx":[24125,6506],"./50-how-to-work-with-hovers/_javascript.mdx":[476,476],"./50-how-to-work-with-hovers/_python.mdx":[61431,1431],"./50-how-to-work-with-hovers/_ruby.mdx":[49557,9557],"./51-javascript-alerts/_csharp.mdx":[2671,2671],"./51-javascript-alerts/_java.mdx":[89542,9542],"./51-javascript-alerts/_javascript.mdx":[36215,6215],"./51-javascript-alerts/_python.mdx":[41280,1280],"./51-javascript-alerts/_ruby.mdx":[13510,3510],"./52-grid/_java.mdx":[38876,8876],"./52-grid/_javascript.mdx":[7681,7681],"./52-grid/_python.mdx":[37902,5521],"./52-grid/_ruby.mdx":[25140,5140],"./53-growl/_csharp.mdx":[17625,7625],"./53-growl/_java.mdx":[85743,5743],"./53-growl/_javascript.mdx":[48897,8897],"./53-growl/_python.mdx":[97838,7838],"./53-growl/_ruby.mdx":[72007,4388],"./54-logging/_ruby.mdx":[64071,4071],"./55-wrapper/_ruby.mdx":[92172,2172],"./56-retry-failed-tests/_ruby.mdx":[31988,1988],"./57-junit-xml/_ruby.mdx":[17703,7703],"./58-tagging/_ruby.mdx":[90889,889],"./6-open-new-window/_csharp.mdx":[90108,1869,1432,108],"./6-open-new-window/_java.mdx":[43205,1869,1432,3205],"./6-open-new-window/_javascript.mdx":[60852,1869,1432,852],"./6-open-new-window/_python.mdx":[20879,1869,1432,879],"./6-open-new-window/_ruby.mdx":[61533,1869,1432,1533],"./6-open-new-window/_selenide.mdx":[230,1869,1432,230],"./60-list-tags/_ruby.mdx":[97771,7771],"./61-how-to-press-keyboard-keys/_csharp.mdx":[65550,5550],"./61-how-to-press-keyboard-keys/_java.mdx":[39275,9275],"./61-how-to-press-keyboard-keys/_javascript.mdx":[83662,3662],"./61-how-to-press-keyboard-keys/_python.mdx":[20029,29],"./61-how-to-press-keyboard-keys/_ruby.mdx":[11859,1859],"./63-right-click/_csharp.mdx":[69850,9850],"./63-right-click/_java.mdx":[56639,6639],"./63-right-click/_javascript.mdx":[91709,4090],"./63-right-click/_python.mdx":[29105,9105],"./63-right-click/_ruby.mdx":[61751,1751],"./64-limit-bandwidth/_ruby.mdx":[89776,9776],"./65-highlight-elements/_csharp.mdx":[85825,5825],"./65-highlight-elements/_java.mdx":[59492,9492],"./65-highlight-elements/_javascript.mdx":[93561,3561],"./65-highlight-elements/_python.mdx":[81734,1734],"./65-highlight-elements/_ruby.mdx":[65692,5692],"./66-blacklist/_ruby.mdx":[67058,7058],"./67-broken-images/_ruby.mdx":[27824,7824],"./68-load-testing-revisited/_ruby.mdx":[62278,9897],"./69-safari/_java.mdx":[61650,1650],"./69-safari/_ruby.mdx":[16146,6146],"./7-use-a-page-object/_ruby.mdx":[16741,6741],"./72-headless-chrome/_ruby.mdx":[33864,3864],"./8-download-a-file-revisited/_csharp.mdx":[30509,509],"./8-download-a-file-revisited/_java.mdx":[89176,9176],"./8-download-a-file-revisited/_python.mdx":[21738,1738],"./8-download-a-file-revisited/_ruby.mdx":[47392,7392],"./9-use-a-base-page-object/_ruby.mdx":[57937,7937]};function r(e){if(!a.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(r)))}r.keys=()=>Object.keys(n),r.id=36217,e.exports=r},28453:(e,t,a)=>{"use strict";a.d(t,{R:()=>o,x:()=>s});var n=a(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);