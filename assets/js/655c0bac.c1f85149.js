(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8384],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>p});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),h=o,p=c["".concat(i,".").concat(h)]||c[h]||m[h]||s;return r?a.createElement(p,n(n({ref:t},d),{},{components:r})):a.createElement(p,n({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var u=2;u<s;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(67294),o=r(86010);const s={tabItem:"tabItem_Ymn6"};function n(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,n),hidden:r},t)}},74866:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var a=r(87462),o=r(67294),s=r(86010),n=r(12466),l=r(16550),i=r(91980),u=r(67392),d=r(50012);function c(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:o}}=e;return{value:t,label:r,attributes:a,default:o}}))}function m(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=m(e),[n,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,u]=p({queryString:r,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Nk)(r);return[a,(0,o.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),w=(()=>{const e=i??c;return h({value:e,tabValues:s})?e:null})();(0,o.useLayoutEffect)((()=>{w&&l(w)}),[w]);return{selectedValue:n,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var w=r(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.o5)(),m=e=>{const t=e.currentTarget,r=d.indexOf(t),a=u[r].value;a!==l&&(c(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:n}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:m},n,{className:(0,s.Z)("tabs__item",y.tabItem,n?.className,{"tabs__item--active":l===t})}),r??t)})))}function _(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=b(e);return o.createElement("div",{className:(0,s.Z)("tabs-container",y.tabList)},o.createElement(f,(0,a.Z)({},e,t)),o.createElement(_,(0,a.Z)({},e,t)))}function g(e){const t=(0,w.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},38169:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(67294),o=r(74866),s=r(85162);const n=function(e){let{contentPath:t,languages:n}=e;const[l,i]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{const e=await Promise.all(n.map((async e=>{const o=(0,a.lazy)((()=>r(53726)(`./${t}/_${e.value}.md`)));return{label:e.label,component:o}})));i(e)})()}),[t,n]),a.createElement("div",null,l.length>0&&a.createElement(o.Z,null,l.map(((e,t)=>a.createElement(s.Z,{key:t,value:e.label,label:e.label},a.createElement(a.Suspense,{fallback:a.createElement("div",null,"Loading...")},a.createElement(e.component,null)))))))}},64171:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905)),s=r(38169);const n={title:"How To Run Your Tests Headlessly with Chrome",id:"72-headless-chrome",contentUrl:"tips/headless-chrome/72-headless-chrome",sidebar_label:"Headlessly with Chrome",text:"If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in.",number:72,hide_table_of_contents:!0,publish_date:new Date("2017-09-25T00:00:00.000Z"),last_update:{date:new Date("2023-03-06T00:00:00.000Z")},tags:["headless","chrome"],level:2,category:["remote"]},l="How To Run Your Tests Headless with Chrome",i={unversionedId:"headless-chrome/72-headless-chrome",id:"headless-chrome/72-headless-chrome",title:"How To Run Your Tests Headlessly with Chrome",description:"Intro",source:"@site/tips/72-headless-chrome/main.mdx",sourceDirName:"72-headless-chrome",slug:"/headless-chrome/72-headless-chrome",permalink:"/tips/headless-chrome/72-headless-chrome",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/72-headless-chrome/main.mdx",tags:[{label:"headless",permalink:"/tips/tags/headless"},{label:"chrome",permalink:"/tips/tags/chrome"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1678060800,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"How To Run Your Tests Headlessly with Chrome",id:"72-headless-chrome",contentUrl:"tips/headless-chrome/72-headless-chrome",sidebar_label:"Headlessly with Chrome",text:"If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in.",number:72,hide_table_of_contents:!0,publish_date:"2017-09-25T00:00:00.000Z",last_update:{date:"2023-03-06T00:00:00.000Z"},tags:["headless","chrome"],level:2,category:["remote"]},sidebar:"docs",previous:{title:"Mobile Testing Pyramid",permalink:"/tips/mobile-testing-pyramid/71-mobile-testing-pyramid"},next:{title:"Open a New Window or Tab",permalink:"/tips/open-new-window/73-open-new-window"}},u={},d=[{label:"Ruby",value:"ruby"}],c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2}],m={toc:c},h="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-run-your-tests-headless-with-chrome"},"How To Run Your Tests Headless with Chrome"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is a guest post from ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/ckenst"},"Chris Kenst"),".")),(0,o.kt)("p",null,"If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you\ncan't with an out-of-the-box setup since there is no display output for the browser to launch in. You could use a\nthird party library like Xvfb or PhantomJS but those can be hard to install and aren't guaranteed to be supported\nin the long run (like PhantomJS)."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"Enter Headless Chrome (",(0,o.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md"},"link"),")"),(0,o.kt)("p",null,"Starting with Chrome 59 (Chrome 60 for Windows) we can pass Chrome a few configuration options to enable headless mode."),(0,o.kt)(s.Z,{contentPath:"72-headless-chrome",languages:d,mdxType:"DisplayTips"}))}p.isMDXComponent=!0},53726:(e,t,r)=>{var a={"./1-how-to-upload-a-file/_csharp.md":[23625,3625],"./1-how-to-upload-a-file/_java.md":[41654,1654],"./1-how-to-upload-a-file/_javascript.md":[49506,9506],"./1-how-to-upload-a-file/_python.md":[12024,2024],"./1-how-to-upload-a-file/_ruby.md":[87043,7043],"./10-retry-test-actions/_ruby.md":[77658,7658],"./11-build-an-interactive-prompt/_ruby.md":[43605,3605],"./12-opt-out-of-ab-tests/_csharp.md":[91824,1824],"./12-opt-out-of-ab-tests/_java.md":[4992,4992],"./12-opt-out-of-ab-tests/_javascript.md":[43267,9222],"./12-opt-out-of-ab-tests/_python.md":[3531,3531],"./12-opt-out-of-ab-tests/_ruby.md":[65087,5087],"./13-how-to-access-basic-auth/_csharp.md":[67594,7594],"./13-how-to-access-basic-auth/_java.md":[60997,997],"./13-how-to-access-basic-auth/_javascript.md":[533,7921],"./13-how-to-access-basic-auth/_python.md":[64334,4334],"./13-how-to-access-basic-auth/_ruby.md":[91931,1931],"./14-interactive-prompts-revisited/_ruby.md":[59788,9788],"./15-download-secure-files/_ruby.md":[64985,4985],"./16-take-screenshot-on-failure/_csharp.md":[19074,9074],"./16-take-screenshot-on-failure/_java.md":[24319,4319],"./16-take-screenshot-on-failure/_javascript.md":[62824,2824],"./16-take-screenshot-on-failure/_python.md":[93544,3544],"./16-take-screenshot-on-failure/_ruby.md":[43994,3994],"./17-retrieve-http-status-codes/_ruby.md":[43396,3396],"./19-data-driven-testing/_ruby.md":[6977,6977],"./2-download-a-file/_csharp.md":[5837,5837],"./2-download-a-file/_java.md":[42994,2994],"./2-download-a-file/_javascript.md":[78037,9409],"./2-download-a-file/_python.md":[9123,9123],"./2-download-a-file/_ruby.md":[20103,103],"./22-locator-strategy/_ruby.md":[37049,7049],"./23-dynamic-pages/_ruby.md":[69347,9347],"./24-rest-apis/_ruby.md":[93505,3505],"./25-how-to-work-with-tables/_csharp.md":[93447,3447],"./25-how-to-work-with-tables/_java.md":[9470,9470],"./25-how-to-work-with-tables/_javascript.md":[39456,9456],"./25-how-to-work-with-tables/_python.md":[19423,9423],"./25-how-to-work-with-tables/_ruby.md":[51286,1286],"./26-cloud/_ruby.md":[71140,1140],"./27-parallel/_ruby.md":[23604,3604],"./29-chrome-driver/_csharp.md":[60457,457],"./29-chrome-driver/_java.md":[423,423],"./29-chrome-driver/_python.md":[8856,8856],"./29-chrome-driver/_ruby.md":[90533,2580],"./3-work-with-frames/_csharp.md":[86741,6741],"./3-work-with-frames/_java.md":[37871,7871],"./3-work-with-frames/_javascript.md":[92881,2881],"./3-work-with-frames/_python.md":[33912,3912],"./3-work-with-frames/_ruby.md":[19892,9892],"./30-mobile/_ruby.md":[34594,4594],"./32-css-vs-xpath/_ruby.md":[43908,3908],"./33-css-vs-xpath-2/_ruby.md":[63519,3519],"./34-css-vs-xpath-3/_ruby.md":[68083,8083],"./38-headless/_ruby.md":[26019,6019],"./39-drag-and-drop/_ruby.md":[22974,2974],"./4-work-with-multiple-windows/_csharp.md":[11245,1245],"./4-work-with-multiple-windows/_java.md":[9823,9823],"./4-work-with-multiple-windows/_javascript.md":[91096,1096],"./4-work-with-multiple-windows/_python.md":[96333,6333],"./4-work-with-multiple-windows/_ruby.md":[15017,5017],"./40-disabled-element/_csharp.md":[90705,705],"./40-disabled-element/_java.md":[86107,6107],"./40-disabled-element/_javascript.md":[75596,5596],"./40-disabled-element/_python.md":[33704,3704],"./40-disabled-element/_ruby.md":[27638,7638],"./41-one-test-multiple-browsers/_ruby.md":[82842,2842],"./42-one-test-multiple-browsers-parallel/_ruby.md":[59811,9811],"./43-forgot-password/_ruby.md":[74678,4678],"./44-exception-handling/_ruby.md":[34065,4065],"./45-how-to-test-checkboxes/_csharp.md":[39377,9377],"./45-how-to-test-checkboxes/_java.md":[67737,7737],"./45-how-to-test-checkboxes/_javascript.md":[71899,1899],"./45-how-to-test-checkboxes/_python.md":[11864,1864],"./45-how-to-test-checkboxes/_ruby.md":[78093,8093],"./47-waiting/_ruby.md":[6477,6477],"./48-load-testing/_ruby.md":[46172,6172],"./49-performance-testing/_ruby.md":[7415,7415],"./5-select-from-a-dropdown/_csharp.md":[54846,4846],"./5-select-from-a-dropdown/_java.md":[81217,1217],"./5-select-from-a-dropdown/_javascript.md":[22255,2255],"./5-select-from-a-dropdown/_python.md":[93288,3288],"./5-select-from-a-dropdown/_ruby.md":[964,964],"./50-how-to-work-with-hovers/_csharp.md":[79968,9968],"./50-how-to-work-with-hovers/_java.md":[45827,3783],"./50-how-to-work-with-hovers/_javascript.md":[95625,5625],"./50-how-to-work-with-hovers/_python.md":[50111,111],"./50-how-to-work-with-hovers/_ruby.md":[47114,7114],"./51-how-to-work-with-javascript-alerts/_csharp.md":[46744,6744],"./51-how-to-work-with-javascript-alerts/_java.md":[73772,3772],"./51-how-to-work-with-javascript-alerts/_javascript.md":[26224,6224],"./51-how-to-work-with-javascript-alerts/_python.md":[99382,9382],"./51-how-to-work-with-javascript-alerts/_ruby.md":[78492,8492],"./52-grid/_java.md":[43117,3117],"./52-grid/_javascript.md":[71100,1100],"./52-grid/_python.md":[73957,3957],"./52-grid/_ruby.md":[7650,7650],"./53-growl/_csharp.md":[19988,9988],"./53-growl/_java.md":[63350,3350],"./53-growl/_javascript.md":[37234,7234],"./53-growl/_python.md":[51668,1668],"./53-growl/_ruby.md":[84394,4394],"./54-logging/_ruby.md":[21590,1590],"./55-wrapper/_ruby.md":[62423,2423],"./56-retry-failed-tests/_ruby.md":[92682,2682],"./57-junit-xml/_ruby.md":[42381,2381],"./58-tagging/_ruby.md":[66276,6276],"./60-list-tags/_ruby.md":[5247,5247],"./61-how-to-press-keyboard-keys/_csharp.md":[23285,3285],"./61-how-to-press-keyboard-keys/_java.md":[30716,716],"./61-how-to-press-keyboard-keys/_javascript.md":[55382,5382],"./61-how-to-press-keyboard-keys/_python.md":[69930,9930],"./61-how-to-press-keyboard-keys/_ruby.md":[62960,2960],"./63-right-click/_csharp.md":[84391,4391],"./63-right-click/_java.md":[4938,4938],"./63-right-click/_javascript.md":[34386,4386],"./63-right-click/_python.md":[6126,6126],"./63-right-click/_ruby.md":[36826,6826],"./64-limit-bandwidth/_ruby.md":[67781,7781],"./65-highlight-elements/_csharp.md":[72095,2095],"./65-highlight-elements/_java.md":[91280,1280],"./65-highlight-elements/_javascript.md":[30528,528],"./65-highlight-elements/_python.md":[4940,4940],"./65-highlight-elements/_ruby.md":[5538,5538],"./66-blacklist/_ruby.md":[86474,6474],"./67-broken-images/_ruby.md":[51589,1589],"./68-load-testing-revisited/_ruby.md":[55183,5183],"./69-safari/_java.md":[62886,2886],"./69-safari/_ruby.md":[56223,6223],"./7-use-a-page-object/_ruby.md":[19584,9584],"./72-headless-chrome/_ruby.md":[9312,9312],"./8-download-a-file-revisited/_csharp.md":[77068,7068],"./8-download-a-file-revisited/_java.md":[10331,331],"./8-download-a-file-revisited/_python.md":[23298,3298],"./8-download-a-file-revisited/_ruby.md":[10599,599],"./9-use-a-base-page-object/_ruby.md":[96612,6612]};function o(e){if(!r.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return r.e(t[1]).then((()=>r(o)))}o.keys=()=>Object.keys(a),o.id=53726,e.exports=o}}]);