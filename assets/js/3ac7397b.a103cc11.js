(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[6990],{86603:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=a(74848),o=a(28453),n=a(54152);const s={title:"Download Secure Files",id:"15-download-secure-files",slug:"/15-download-secure-files",sidebar_label:"Download Secure Files",description:"Previously, we've gone over how to test file downloads without a browser by leveraging Selenium Webdriver and an HTTP library in tandem. This approach is great for testing general file downloads, but what if the file you want to download is behind authentication?",number:15,hide_table_of_contents:!0,level:3,publish_date:new Date("2015-08-20T00:00:00.000Z"),tags:["files","downloading","authentication"],category:["fundamentals"]},i="How to Download Secure Files",l={id:"download-secure-files/15-download-secure-files",title:"Download Secure Files",description:"Previously, we've gone over how to test file downloads without a browser by leveraging Selenium Webdriver and an HTTP library in tandem. This approach is great for testing general file downloads, but what if the file you want to download is behind authentication?",source:"@site/tips/15-download-secure-files/main.mdx",sourceDirName:"15-download-secure-files",slug:"/15-download-secure-files",permalink:"/tips/15-download-secure-files",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/15-download-secure-files/main.mdx",tags:[{inline:!0,label:"files",permalink:"/tips/tags/files"},{inline:!0,label:"downloading",permalink:"/tips/tags/downloading"},{inline:!0,label:"authentication",permalink:"/tips/tags/authentication"}],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172716874e4,frontMatter:{title:"Download Secure Files",id:"15-download-secure-files",slug:"/15-download-secure-files",sidebar_label:"Download Secure Files",description:"Previously, we've gone over how to test file downloads without a browser by leveraging Selenium Webdriver and an HTTP library in tandem. This approach is great for testing general file downloads, but what if the file you want to download is behind authentication?",number:15,hide_table_of_contents:!0,level:3,publish_date:"2015-08-20T00:00:00.000Z",tags:["files","downloading","authentication"],category:["fundamentals"]},sidebar:"defaultSidebar",previous:{title:"_ruby",permalink:"/tips/download-secure-files/_ruby"},next:{title:"_csharp",permalink:"/tips/take-screenshot-on-failure/_csharp"}},d={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const t={h1:"h1",h2:"h2",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"how-to-download-secure-files",children:"How to Download Secure Files"}),"\n",(0,r.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,r.jsx)(t.p,{children:"Previously, we've gone over how to test file downloads without a browser by leveraging Selenium Webdriver and an\nHTTP library in tandem."}),"\n",(0,r.jsx)(t.p,{children:"This approach is great for testing general file downloads, but what if the file you want to download is behind\nauthentication?"}),"\n",(0,r.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,r.jsx)(t.p,{children:"To access secure files with our HTTP library we'll need to pull the authenticated session information out of\nSelenium's cookie store and pass it into the HTTP library when we perform the request."}),"\n",(0,r.jsx)(t.p,{children:"Let's continue with some examples."}),"\n","\n",(0,r.jsx)(n.A,{languages:[{label:"Ruby",value:"ruby"}]}),"\n",(0,r.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,r.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,r.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:a(59278).A+"#author-img",title:"a title",width:"280",height:"280"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},62771:(e,t,a)=>{"use strict";a.d(t,{_:()=>i,u:()=>l});var r=a(96540),o=a(89532),n=a(74848);const s=r.createContext(null);function i(e){let{children:t,content:a}=e;const o=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,n.jsx)(s.Provider,{value:o,children:t})}function l(){const e=(0,r.useContext)(s);if(null===e)throw new o.dV("DocProvider");return e}},54152:(e,t,a)=>{"use strict";a.d(t,{A:()=>S});var r=a(96540),o=a(34164),n=a(23104),s=a(56347),i=a(205),l=a(57485),d=a(31682),u=a(70679);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:o}}=e;return{value:t,label:a,attributes:r,default:o}}))}(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const o=(0,s.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(o.location.search);t.set(n,e),o.replace({...o.location,search:t.toString()})}),[n,o])]}function w(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,n=m(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[d,c]=p({queryString:a,groupId:o}),[w,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,n]=(0,u.Dv)(a);return[o,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:o}),x=(()=>{const e=d??w;return h({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,n]),tabValues:n}}var b=a(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function _(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),o=i[a].value;o!==r&&(d(t),s(o))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...n,className:(0,o.A)("tabs__item",x.tabItem,n?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function v(e){let{lazy:t,children:a,selectedValue:o}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=w(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,f.jsx)(_,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function g(e){const t=(0,b.A)();return(0,f.jsx)(y,{...e,children:c(e.children)},String(t))}const j={tabItem:"tabItem_Ymn6"};function k(e){let{children:t,hidden:a,className:r}=e;return(0,f.jsx)("div",{role:"tabpanel",className:(0,o.A)(j.tabItem,r),hidden:a,children:t})}var T=a(62771);const S=function(e){let{languages:t}=e;const[o,n]=(0,r.useState)([]),s=(0,T.u)().frontMatter.id;return(0,r.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,r.lazy)((()=>a(58598)(`./${s}/_${e.value}.mdx`)));return{label:e.label,component:t}})));n(e)})()}),[t]),(0,f.jsx)("div",{children:o.length>0&&(0,f.jsx)(g,{groupId:"elemental-selenium-tabs",children:o.map(((e,t)=>(0,f.jsx)(k,{value:e.label,label:e.label,children:(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(e.component,{})})},t)))})})}},59278:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});const r=a.p+"assets/images/dave-haeffner-51c0929f88475823fb30e6519d3be0a3.jpeg"},58598:(e,t,a)=>{var r={"./1-upload-a-file/_csharp.mdx":[45889,71869,21432,45889],"./1-upload-a-file/_java.mdx":[40356,71869,21432,40356],"./1-upload-a-file/_javascript.mdx":[6937,71869,21432,6937],"./1-upload-a-file/_python.mdx":[58150,71869,21432,58150],"./1-upload-a-file/_ruby.mdx":[46556,71869,21432,46556],"./1-upload-a-file/_selenide.mdx":[9635,71869,21432,9635],"./10-retry-test-actions/_ruby.mdx":[68163,68163],"./11-build-an-interactive-prompt/_ruby.mdx":[65599,65599],"./12-opt-out-of-ab-tests/_csharp.mdx":[48337,48337],"./12-opt-out-of-ab-tests/_java.mdx":[86836,86836],"./12-opt-out-of-ab-tests/_javascript.mdx":[28777,28777],"./12-opt-out-of-ab-tests/_python.mdx":[80342,80342],"./12-opt-out-of-ab-tests/_ruby.mdx":[38668,38668],"./13-how-to-access-basic-auth/_csharp.mdx":[70243,70243],"./13-how-to-access-basic-auth/_java.mdx":[71570,71570],"./13-how-to-access-basic-auth/_javascript.mdx":[66459,66459],"./13-how-to-access-basic-auth/_python.mdx":[5292,5292],"./13-how-to-access-basic-auth/_ruby.mdx":[26066,26066],"./14-interactive-prompts-revisited/_ruby.mdx":[90690,90690],"./15-download-secure-files/_ruby.mdx":[99353,99353],"./16-take-screenshot-on-failure/_csharp.mdx":[45748,45748],"./16-take-screenshot-on-failure/_java.mdx":[957,957],"./16-take-screenshot-on-failure/_javascript.mdx":[67164,67164],"./16-take-screenshot-on-failure/_python.mdx":[16983,16983],"./16-take-screenshot-on-failure/_ruby.mdx":[76821,76821],"./17-retrieve-http-status-codes/_ruby.mdx":[33150,33150],"./19-data-driven-testing/_ruby.mdx":[71841,71841],"./2-download-a-file/_csharp.mdx":[11703,71869,21432,11703],"./2-download-a-file/_java.mdx":[60654,71869,21432,60654],"./2-download-a-file/_javascript.mdx":[58223,71869,21432,58223],"./2-download-a-file/_python.mdx":[43416,71869,21432,43416],"./2-download-a-file/_ruby.mdx":[30542,71869,21432,30542],"./2-download-a-file/_selenide.mdx":[8173,71869,21432,8173],"./22-locator-strategy/_ruby.mdx":[78995,78995],"./23-dynamic-pages/_ruby.mdx":[92394,92394],"./24-rest-apis/_ruby.mdx":[27169,27169],"./25-how-to-work-with-tables/_csharp.mdx":[42614,42614],"./25-how-to-work-with-tables/_java.mdx":[36083,36083],"./25-how-to-work-with-tables/_javascript.mdx":[80102,80102],"./25-how-to-work-with-tables/_python.mdx":[12373,12373],"./25-how-to-work-with-tables/_ruby.mdx":[95931,95931],"./26-cloud/_ruby.mdx":[77932,77932],"./27-parallel/_ruby.mdx":[4125,4125],"./29-chrome-driver/_csharp.mdx":[71464,71464],"./29-chrome-driver/_java.mdx":[18665,18665],"./29-chrome-driver/_python.mdx":[74035,74035],"./29-chrome-driver/_ruby.mdx":[75617,75617],"./3-work-with-frames/_csharp.mdx":[48154,71869,21432,48154],"./3-work-with-frames/_java.mdx":[47263,71869,21432,47263],"./3-work-with-frames/_javascript.mdx":[49962,71869,21432,49962],"./3-work-with-frames/_python.mdx":[7409,71869,21432,7409],"./3-work-with-frames/_ruby.mdx":[52375,71869,21432,52375],"./3-work-with-frames/_selenide.mdx":[6272,71869,21432,6272],"./3-work-with-frames/_serenity-js.mdx":[20324,71869,21432,20324],"./30-mobile/_ruby.mdx":[11554,11554],"./32-css-vs-xpath/_ruby.mdx":[87267,87267],"./33-css-vs-xpath-2/_ruby.mdx":[41773,41773],"./34-css-vs-xpath-3/_ruby.mdx":[11821,11821],"./38-headless/_ruby.mdx":[43601,43601],"./39-drag-and-drop/_ruby.mdx":[46027,46027],"./4-work-with-multiple-windows/_csharp.mdx":[36125,71869,21432,36125],"./4-work-with-multiple-windows/_java.mdx":[46184,71869,21432,46184],"./4-work-with-multiple-windows/_javascript.mdx":[77685,71869,21432,77685],"./4-work-with-multiple-windows/_python.mdx":[3802,71869,21432,3802],"./4-work-with-multiple-windows/_ruby.mdx":[51376,71869,21432,51376],"./4-work-with-multiple-windows/_selenide.mdx":[52079,71869,21432,52079],"./40-disabled-element/_csharp.mdx":[39225,39225],"./40-disabled-element/_java.mdx":[8124,8124],"./40-disabled-element/_javascript.mdx":[15297,15297],"./40-disabled-element/_python.mdx":[19438,19438],"./40-disabled-element/_ruby.mdx":[94388,72007],"./41-one-test-multiple-browsers/_ruby.mdx":[3736,3736],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[69413,69413],"./43-forgot-password/_ruby.mdx":[27997,27997],"./44-exception-handling/_ruby.mdx":[38344,38344],"./45-how-to-test-checkboxes/_csharp.mdx":[94360,94360],"./45-how-to-test-checkboxes/_java.mdx":[58905,58905],"./45-how-to-test-checkboxes/_javascript.mdx":[99136,99136],"./45-how-to-test-checkboxes/_python.mdx":[38499,38499],"./45-how-to-test-checkboxes/_ruby.mdx":[82641,82641],"./47-waiting/_ruby.mdx":[24781,24781],"./48-load-testing/_ruby.mdx":[29968,29968],"./49-performance-testing/_ruby.mdx":[41731,41731],"./5-select-from-a-dropdown/_csharp.mdx":[93483,71869,21432,15864],"./5-select-from-a-dropdown/_java.mdx":[74809,71869,21432,74809],"./5-select-from-a-dropdown/_javascript.mdx":[22048,71869,21432,22048],"./5-select-from-a-dropdown/_python.mdx":[17891,71869,21432,17891],"./5-select-from-a-dropdown/_ruby.mdx":[11953,71869,21432,11953],"./5-select-from-a-dropdown/_selenide.mdx":[16530,71869,21432,16530],"./50-how-to-work-with-hovers/_csharp.mdx":[82996,82996],"./50-how-to-work-with-hovers/_java.mdx":[24125,24125],"./50-how-to-work-with-hovers/_javascript.mdx":[476,476],"./50-how-to-work-with-hovers/_python.mdx":[61431,61431],"./50-how-to-work-with-hovers/_ruby.mdx":[49557,49557],"./51-javascript-alerts/_csharp.mdx":[2671,2671],"./51-javascript-alerts/_java.mdx":[89542,89542],"./51-javascript-alerts/_javascript.mdx":[36215,36215],"./51-javascript-alerts/_python.mdx":[41280,41280],"./51-javascript-alerts/_ruby.mdx":[13510,13510],"./52-grid/_java.mdx":[38876,38876],"./52-grid/_javascript.mdx":[7681,7681],"./52-grid/_python.mdx":[37902,15521],"./52-grid/_ruby.mdx":[25140,25140],"./53-growl/_csharp.mdx":[17625,17625],"./53-growl/_java.mdx":[85743,85743],"./53-growl/_javascript.mdx":[48897,48897],"./53-growl/_python.mdx":[97838,97838],"./53-growl/_ruby.mdx":[72007,94388],"./54-logging/_ruby.mdx":[64071,64071],"./55-wrapper/_ruby.mdx":[92172,92172],"./56-retry-failed-tests/_ruby.mdx":[31988,31988],"./57-junit-xml/_ruby.mdx":[17703,17703],"./58-tagging/_ruby.mdx":[90889,90889],"./6-open-new-window/_csharp.mdx":[90108,71869,21432,90108],"./6-open-new-window/_java.mdx":[43205,71869,21432,43205],"./6-open-new-window/_javascript.mdx":[60852,71869,21432,60852],"./6-open-new-window/_python.mdx":[20879,71869,21432,20879],"./6-open-new-window/_ruby.mdx":[61533,71869,21432,61533],"./6-open-new-window/_selenide.mdx":[230,71869,21432,230],"./60-list-tags/_ruby.mdx":[97771,97771],"./61-how-to-press-keyboard-keys/_csharp.mdx":[65550,65550],"./61-how-to-press-keyboard-keys/_java.mdx":[39275,39275],"./61-how-to-press-keyboard-keys/_javascript.mdx":[83662,83662],"./61-how-to-press-keyboard-keys/_python.mdx":[20029,20029],"./61-how-to-press-keyboard-keys/_ruby.mdx":[11859,11859],"./63-right-click/_csharp.mdx":[69850,69850],"./63-right-click/_java.mdx":[56639,56639],"./63-right-click/_javascript.mdx":[91709,14090],"./63-right-click/_python.mdx":[29105,29105],"./63-right-click/_ruby.mdx":[61751,61751],"./64-limit-bandwidth/_ruby.mdx":[89776,89776],"./65-highlight-elements/_csharp.mdx":[85825,85825],"./65-highlight-elements/_java.mdx":[59492,59492],"./65-highlight-elements/_javascript.mdx":[93561,93561],"./65-highlight-elements/_python.mdx":[81734,81734],"./65-highlight-elements/_ruby.mdx":[65692,65692],"./66-blacklist/_ruby.mdx":[67058,67058],"./67-broken-images/_ruby.mdx":[27824,27824],"./68-load-testing-revisited/_ruby.mdx":[62278,62278],"./69-safari/_java.mdx":[61650,61650],"./69-safari/_ruby.mdx":[16146,16146],"./7-use-a-page-object/_ruby.mdx":[16741,16741],"./72-headless-chrome/_ruby.mdx":[33864,33864],"./8-download-a-file-revisited/_csharp.mdx":[30509,30509],"./8-download-a-file-revisited/_java.mdx":[89176,89176],"./8-download-a-file-revisited/_python.mdx":[21738,21738],"./8-download-a-file-revisited/_ruby.mdx":[47392,47392],"./9-use-a-base-page-object/_ruby.mdx":[57937,57937]};function o(e){if(!a.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(o)))}o.keys=()=>Object.keys(r),o.id=58598,e.exports=o},28453:(e,t,a)=>{"use strict";a.d(t,{R:()=>s,x:()=>i});var r=a(96540);const o={},n=r.createContext(o);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);