(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4952],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>f});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?o.createElement(f,l(l({ref:t},d),{},{components:a})):o.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var o=a(67294),n=a(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var o=a(87462),n=a(67294),r=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),d=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:n}}=e;return{value:t,label:a,attributes:o,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const o=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,r=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[s,u]=f({queryString:a,groupId:o}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,d.Nk)(a);return[o,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:o}),w=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{w&&i(w)}),[w]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var w=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),o=u[a].value;o!==i&&(c(t),s(o))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:o}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},n.createElement(v,(0,o.Z)({},e,t)),n.createElement(g,(0,o.Z)({},e,t)))}function _(e){const t=(0,w.Z)();return n.createElement(y,(0,o.Z)({key:String(t)},e))}},38169:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var o=a(67294),n=a(74866),r=a(85162);const l=function(e){let{contentPath:t,languages:l}=e;const[i,s]=(0,o.useState)([]);return(0,o.useEffect)((()=>{(async()=>{const e=await Promise.all(l.map((async e=>{const n=(0,o.lazy)((()=>a(53726)(`./${t}/_${e.value}.md`)));return{label:e.label,component:n}})));s(e)})()}),[t,l]),o.createElement("div",null,i.length>0&&o.createElement(n.Z,null,i.map(((e,t)=>o.createElement(r.Z,{key:t,value:e.label,label:e.label},o.createElement(o.Suspense,{fallback:o.createElement("div",null,"Loading...")},o.createElement(e.component,null)))))))}},25704:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=a(87462),n=(a(67294),a(3905)),r=a(38169);const l={title:"How To Download a File",id:"2-download-a-file",contentUrl:"tips/download-a-file/2-download-a-file",sidebar_label:"How To Download a File",text:"Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.",number:2,hide_table_of_contents:!0,level:2,publish_date:new Date("2015-07-27T00:00:00.000Z"),last_update:{date:new Date("2023-03-08T00:00:00.000Z")},tags:["files","downloading","file download"],category:["remote","fundamentals"]},i="How To Download a File",s={unversionedId:"download-a-file/2-download-a-file",id:"download-a-file/2-download-a-file",title:"How To Download a File",description:"Intro",source:"@site/tips/2-download-a-file/main.mdx",sourceDirName:"2-download-a-file",slug:"/download-a-file/2-download-a-file",permalink:"/tips/download-a-file/2-download-a-file",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/2-download-a-file/main.mdx",tags:[{label:"files",permalink:"/tips/tags/files"},{label:"downloading",permalink:"/tips/tags/downloading"},{label:"file download",permalink:"/tips/tags/file-download"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1678233600,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{title:"How To Download a File",id:"2-download-a-file",contentUrl:"tips/download-a-file/2-download-a-file",sidebar_label:"How To Download a File",text:"Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.",number:2,hide_table_of_contents:!0,level:2,publish_date:"2015-07-27T00:00:00.000Z",last_update:{date:"2023-03-08T00:00:00.000Z"},tags:["files","downloading","file download"],category:["remote","fundamentals"]},sidebar:"docs",previous:{title:"Data Driven Testing",permalink:"/tips/data-driven-testing/19-data-driven-testing"},next:{title:"How To Pick a Programming Language",permalink:"/tips/adding-a-language/21-choosing-a-language"}},u={},d=[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"}],c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:c},m="wrapper";function f(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-download-a-file"},"How To Download a File"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"Just like with ",(0,n.kt)("a",{parentName:"p",href:"/tips/how-to-upload-a-file/1-upload-a-file"},"uploading files")," we hit the same issue with downloading\nthem -- a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"In order to avoid the dialog box, we will be instructing the browser to download files to a specific location without\nbeing prompted."),(0,n.kt)("p",null,"After the file is downloaded we can then perform some simple checks to make sure the file is what we expect."),(0,n.kt)("p",null,"Let's continue with an example."),(0,n.kt)(r.Z,{contentPath:"2-download-a-file",languages:d,mdxType:"DisplayTips"}),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}f.isMDXComponent=!0},89417:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"},53726:(e,t,a)=>{var o={"./1-how-to-upload-a-file/_csharp.md":[23625,3625],"./1-how-to-upload-a-file/_java.md":[41654,1654],"./1-how-to-upload-a-file/_javascript.md":[49506,9506],"./1-how-to-upload-a-file/_python.md":[12024,2024],"./1-how-to-upload-a-file/_ruby.md":[87043,7043],"./10-retry-test-actions/_ruby.md":[77658,7658],"./11-build-an-interactive-prompt/_ruby.md":[43605,3605],"./12-opt-out-of-ab-tests/_csharp.md":[91824,1824],"./12-opt-out-of-ab-tests/_java.md":[4992,4992],"./12-opt-out-of-ab-tests/_javascript.md":[43267,9222],"./12-opt-out-of-ab-tests/_python.md":[3531,3531],"./12-opt-out-of-ab-tests/_ruby.md":[65087,5087],"./13-how-to-access-basic-auth/_csharp.md":[67594,7594],"./13-how-to-access-basic-auth/_java.md":[60997,997],"./13-how-to-access-basic-auth/_javascript.md":[533,7921],"./13-how-to-access-basic-auth/_python.md":[64334,4334],"./13-how-to-access-basic-auth/_ruby.md":[91931,1931],"./14-interactive-prompts-revisited/_ruby.md":[59788,9788],"./15-download-secure-files/_ruby.md":[64985,4985],"./16-take-screenshot-on-failure/_csharp.md":[19074,9074],"./16-take-screenshot-on-failure/_java.md":[24319,4319],"./16-take-screenshot-on-failure/_javascript.md":[62824,2824],"./16-take-screenshot-on-failure/_python.md":[93544,3544],"./16-take-screenshot-on-failure/_ruby.md":[43994,3994],"./17-retrieve-http-status-codes/_ruby.md":[43396,3396],"./19-data-driven-testing/_ruby.md":[6977,6977],"./2-download-a-file/_csharp.md":[5837,5837],"./2-download-a-file/_java.md":[42994,2994],"./2-download-a-file/_javascript.md":[78037,9409],"./2-download-a-file/_python.md":[9123,9123],"./2-download-a-file/_ruby.md":[20103,103],"./22-locator-strategy/_ruby.md":[37049,5686],"./23-dynamic-pages/_ruby.md":[69347,9347],"./24-rest-apis/_ruby.md":[93505,3505],"./25-how-to-work-with-tables/_csharp.md":[93447,3447],"./25-how-to-work-with-tables/_java.md":[9470,9470],"./25-how-to-work-with-tables/_javascript.md":[39456,9456],"./25-how-to-work-with-tables/_python.md":[19423,9423],"./25-how-to-work-with-tables/_ruby.md":[51286,1286],"./26-cloud/_ruby.md":[71140,1140],"./27-parallel/_ruby.md":[23604,3604],"./3-work-with-frames/_csharp.md":[86741,6741],"./3-work-with-frames/_java.md":[37871,7871],"./3-work-with-frames/_javascript.md":[92881,2881],"./3-work-with-frames/_python.md":[33912,3912],"./3-work-with-frames/_ruby.md":[19892,9892],"./4-work-with-multiple-windows/_csharp.md":[11245,1245],"./4-work-with-multiple-windows/_java.md":[9823,9823],"./4-work-with-multiple-windows/_javascript.md":[91096,1096],"./4-work-with-multiple-windows/_python.md":[96333,6333],"./4-work-with-multiple-windows/_ruby.md":[15017,5017],"./5-select-from-a-dropdown/_csharp.md":[54846,4846],"./5-select-from-a-dropdown/_java.md":[81217,1217],"./5-select-from-a-dropdown/_javascript.md":[22255,2255],"./5-select-from-a-dropdown/_python.md":[93288,3288],"./5-select-from-a-dropdown/_ruby.md":[964,964],"./7-use-a-page-object/_ruby.md":[19584,9584],"./8-download-a-file-revisited/_csharp.md":[77068,7068],"./8-download-a-file-revisited/_java.md":[10331,331],"./8-download-a-file-revisited/_python.md":[23298,3298],"./8-download-a-file-revisited/_ruby.md":[10599,599],"./9-use-a-base-page-object/_ruby.md":[96612,6612]};function n(e){if(!a.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return a.e(t[1]).then((()=>a(n)))}n.keys=()=>Object.keys(o),n.id=53726,e.exports=n}}]);