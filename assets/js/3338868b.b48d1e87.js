(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8602],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?o.createElement(h,i(i({ref:t},d),{},{components:a})):o.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var o=a(67294),n=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var o=a(87462),n=a(67294),r=a(86010),i=a(12466),l=a(16550),s=a(91980),u=a(67392),d=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:n}}=e;return{value:t,label:a,attributes:o,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const o=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,r=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:a,groupId:o}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,d.Nk)(a);return[o,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:o}),w=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{w&&l(w)}),[w]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var w=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),o=u[a].value;o!==l&&(c(t),s(o))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:o}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function g(e){const t=f(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},n.createElement(v,(0,o.Z)({},e,t)),n.createElement(y,(0,o.Z)({},e,t)))}function _(e){const t=(0,w.Z)();return n.createElement(g,(0,o.Z)({key:String(t)},e))}},38169:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var o=a(67294),n=a(74866),r=a(85162);const i=function(e){let{contentPath:t,languages:i}=e;const[l,s]=(0,o.useState)([]);return(0,o.useEffect)((()=>{(async()=>{const e=await Promise.all(i.map((async e=>{const n=(0,o.lazy)((()=>a(53726)(`./${t}/_${e.value}.md`)));return{label:e.label,component:n}})));s(e)})()}),[t,i]),o.createElement("div",null,l.length>0&&o.createElement(n.Z,null,l.map(((e,t)=>o.createElement(r.Z,{key:t,value:e.label,label:e.label},o.createElement(o.Suspense,{fallback:o.createElement("div",null,"Loading...")},o.createElement(e.component,null)))))))}},93276:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(87462),n=(a(67294),a(3905)),r=a(38169);const i={title:"Download A File Revisited",id:"8-download-a-file-revisited",contentUrl:"tips/download-a-file-revisited/8-download-a-file-revisited",sidebar_label:"Download A File Revisited",text:"In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.",number:8,hide_table_of_contents:!0,level:2,publish_date:new Date("2015-08-20T00:00:00.000Z"),last_update:{date:"03-08-2023"},tags:["files","downloading"],category:["remote"]},l="How to Download a File Without a Browser",s={unversionedId:"download-a-file-revisited/8-download-a-file-revisited",id:"download-a-file-revisited/8-download-a-file-revisited",title:"Download A File Revisited",description:"Intro",source:"@site/tips/8-download-a-file-revisited/main.mdx",sourceDirName:"8-download-a-file-revisited",slug:"/download-a-file-revisited/8-download-a-file-revisited",permalink:"/tips/download-a-file-revisited/8-download-a-file-revisited",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/8-download-a-file-revisited/main.mdx",tags:[{label:"files",permalink:"/tips/tags/files"},{label:"downloading",permalink:"/tips/tags/downloading"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1678233600,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{title:"Download A File Revisited",id:"8-download-a-file-revisited",contentUrl:"tips/download-a-file-revisited/8-download-a-file-revisited",sidebar_label:"Download A File Revisited",text:"In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.",number:8,hide_table_of_contents:!0,level:2,publish_date:"2015-08-20T00:00:00.000Z",last_update:{date:"03-08-2023"},tags:["files","downloading"],category:["remote"]},sidebar:"docs",previous:{title:"Open a New Window or Tab",permalink:"/tips/open-new-window/73-open-new-window"},next:{title:"Use A Base Page Object",permalink:"/tips/use-a-base-page-object/9-use-a-base-page-object"}},u={},d=[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Ruby",value:"ruby"}],c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:c},m="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-download-a-file-without-a-browser"},"How to Download a File Without a Browser"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"In a ",(0,n.kt)("a",{parentName:"p",href:"/tips/2-download-a-file"},"previous tip")," we went through how to download files with Selenium by configuring the browser to download\nthem locally and verifying their file size when done."),(0,n.kt)("p",null,"While the previous method works, it requires a custom configuration that is inconsistent from browser to browser."),(0,n.kt)("p",null,"Ultimately, we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,n.kt)("em",{parentName:"p"},"can")," be downloaded,\nwhich we can do by using an HTTP client alongside Selenium in our test."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,n.kt)("em",{parentName:"p"},"can")," be downloaded.\nAnd we can do that by using an HTTP client alongside Selenium in our test."),(0,n.kt)("p",null,"With an HTTP library we can perform a header (or ",(0,n.kt)("inlineCode",{parentName:"p"},"HEAD"),") request for the file. Instead of downloading the file we'll\nreceive header information for the file which contains information like the content type and content length\n(amongst other things). With this information we can easily confirm the file is what we expect without onerous\nconfiguration, local disk usage, or lengthy download times (depending on the file size)."),(0,n.kt)("p",null,"Let's continue with an example."),(0,n.kt)(r.Z,{contentPath:"8-download-a-file-revisited",languages:d,mdxType:"DisplayTips"}),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"},53726:(e,t,a)=>{var o={"./1-how-to-upload-a-file/_csharp.md":[23625,3625],"./1-how-to-upload-a-file/_java.md":[41654,1654],"./1-how-to-upload-a-file/_javascript.md":[49506,9506],"./1-how-to-upload-a-file/_python.md":[12024,2024],"./1-how-to-upload-a-file/_ruby.md":[87043,7043],"./10-retry-test-actions/_ruby.md":[77658,7658],"./11-build-an-interactive-prompt/_ruby.md":[43605,3605],"./12-opt-out-of-ab-tests/_csharp.md":[91824,1824],"./12-opt-out-of-ab-tests/_java.md":[4992,4992],"./12-opt-out-of-ab-tests/_javascript.md":[43267,9222],"./12-opt-out-of-ab-tests/_python.md":[3531,3531],"./12-opt-out-of-ab-tests/_ruby.md":[65087,5087],"./13-how-to-access-basic-auth/_csharp.md":[67594,7594],"./13-how-to-access-basic-auth/_java.md":[60997,997],"./13-how-to-access-basic-auth/_javascript.md":[533,7921],"./13-how-to-access-basic-auth/_python.md":[64334,4334],"./13-how-to-access-basic-auth/_ruby.md":[91931,1931],"./14-interactive-prompts-revisited/_ruby.md":[59788,9788],"./15-download-secure-files/_ruby.md":[64985,4985],"./16-take-screenshot-on-failure/_csharp.md":[19074,9074],"./16-take-screenshot-on-failure/_java.md":[24319,4319],"./16-take-screenshot-on-failure/_javascript.md":[62824,2824],"./16-take-screenshot-on-failure/_python.md":[93544,3544],"./16-take-screenshot-on-failure/_ruby.md":[43994,3994],"./17-retrieve-http-status-codes/_ruby.md":[43396,3396],"./19-data-driven-testing/_ruby.md":[6977,6977],"./2-download-a-file/_csharp.md":[5837,5837],"./2-download-a-file/_java.md":[42994,2994],"./2-download-a-file/_javascript.md":[78037,9409],"./2-download-a-file/_python.md":[9123,9123],"./2-download-a-file/_ruby.md":[20103,103],"./22-locator-strategy/_ruby.md":[37049,5686],"./23-dynamic-pages/_ruby.md":[69347,9347],"./24-rest-apis/_ruby.md":[93505,3505],"./25-how-to-work-with-tables/_csharp.md":[93447,3447],"./25-how-to-work-with-tables/_java.md":[9470,9470],"./25-how-to-work-with-tables/_javascript.md":[39456,9456],"./25-how-to-work-with-tables/_python.md":[19423,9423],"./25-how-to-work-with-tables/_ruby.md":[51286,1286],"./26-cloud/_ruby.md":[71140,1140],"./27-parallel/_ruby.md":[23604,3604],"./3-work-with-frames/_csharp.md":[86741,6741],"./3-work-with-frames/_java.md":[37871,7871],"./3-work-with-frames/_javascript.md":[92881,2881],"./3-work-with-frames/_python.md":[33912,3912],"./3-work-with-frames/_ruby.md":[19892,9892],"./4-work-with-multiple-windows/_csharp.md":[11245,1245],"./4-work-with-multiple-windows/_java.md":[9823,9823],"./4-work-with-multiple-windows/_javascript.md":[91096,1096],"./4-work-with-multiple-windows/_python.md":[96333,6333],"./4-work-with-multiple-windows/_ruby.md":[15017,5017],"./5-select-from-a-dropdown/_csharp.md":[54846,4846],"./5-select-from-a-dropdown/_java.md":[81217,1217],"./5-select-from-a-dropdown/_javascript.md":[22255,2255],"./5-select-from-a-dropdown/_python.md":[93288,3288],"./5-select-from-a-dropdown/_ruby.md":[964,964],"./7-use-a-page-object/_ruby.md":[19584,9584],"./8-download-a-file-revisited/_csharp.md":[77068,7068],"./8-download-a-file-revisited/_java.md":[10331,331],"./8-download-a-file-revisited/_python.md":[23298,3298],"./8-download-a-file-revisited/_ruby.md":[10599,599],"./9-use-a-base-page-object/_ruby.md":[96612,6612]};function n(e){if(!a.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return a.e(t[1]).then((()=>a(n)))}n.keys=()=>Object.keys(o),n.id=53726,e.exports=n}}]);