(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[59296],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,h=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var r=a(87462),n=a(67294),o=a(86010),s=a(12466),l=a(16550),i=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),w=(()=>{const e=i??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{w&&l(w)}),[w]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var w=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==l&&(d(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function g(e){const t=(0,w.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}},38169:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(67294),n=a(74866),o=a(85162);const s=function(e){let{contentPath:t,languages:s}=e;const[l,i]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{const e=await Promise.all(s.map((async e=>{const n=(0,r.lazy)((()=>a(53726)(`./${t}/_${e.value}.md`)));return{label:e.label,component:n}})));i(e)})()}),[t,s]),r.createElement("div",null,l.length>0&&r.createElement(n.Z,null,l.map(((e,t)=>r.createElement(o.Z,{key:t,value:e.label,label:e.label},r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(e.component,null)))))))}},81526:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(38169);const s={title:"Work With Frames",id:"3-work-with-frames",contentUrl:"tips/work-with-frames/3-work-with-frames",sidebar_label:"Work With Frames",text:"In this tip, you'll learn how to work with frames and write tests against them. On occasion, we may encounter relics of the front-end world, such as frames.",number:3,hide_table_of_contents:!0,level:1,publish_date:new Date("2015-08-25T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["frames"],category:["fundamentals"]},l="How to Work with Frames",i={unversionedId:"work-with-frames/3-work-with-frames",id:"work-with-frames/3-work-with-frames",title:"Work With Frames",description:"Intro",source:"@site/tips/3-work-with-frames/main.mdx",sourceDirName:"3-work-with-frames",slug:"/work-with-frames/3-work-with-frames",permalink:"/tips/work-with-frames/3-work-with-frames",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/3-work-with-frames/main.mdx",tags:[{label:"frames",permalink:"/tips/tags/frames"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"Work With Frames",id:"3-work-with-frames",contentUrl:"tips/work-with-frames/3-work-with-frames",sidebar_label:"Work With Frames",text:"In this tip, you'll learn how to work with frames and write tests against them. On occasion, we may encounter relics of the front-end world, such as frames.",number:3,hide_table_of_contents:!0,level:1,publish_date:"2015-08-25T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["frames"],category:["fundamentals"]},sidebar:"docs",previous:{title:"Chrome Driver",permalink:"/tips/chrome-driver/29-chrome-driver"},next:{title:"Mobile",permalink:"/tips/mobile/30-mobile"}},u={},c=[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"}],d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}],m={toc:d},p="wrapper";function h(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-work-with-frames"},"How to Work with Frames"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"In this tip, you'll learn how to work with frames and write tests against them."),(0,n.kt)("p",null,"On occasion, we may encounter relics of the front-end world, such as frames. When writing tests against them, it's\neasy to make a mistake if we're not paying attention."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Rather than getting frustrated when authoring your tests, you can work with the elements in a frame by telling\nSelenium to switch to that frame first. Then the rest of your test should be more straightforward."),(0,n.kt)("p",null,"Let's explore further with some examples."),(0,n.kt)(o.Z,{contentPath:"3-work-with-frames",languages:c,mdxType:"DisplayTips"}),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"},53726:(e,t,a)=>{var r={"./1-how-to-upload-a-file/_csharp.md":[23625,23625],"./1-how-to-upload-a-file/_java.md":[41654,41654],"./1-how-to-upload-a-file/_javascript.md":[49506,49506],"./1-how-to-upload-a-file/_python.md":[12024,12024],"./1-how-to-upload-a-file/_ruby.md":[87043,87043],"./10-retry-test-actions/_ruby.md":[77658,77658],"./11-build-an-interactive-prompt/_ruby.md":[43605,43605],"./12-opt-out-of-ab-tests/_csharp.md":[91824,91824],"./12-opt-out-of-ab-tests/_java.md":[4992,4992],"./12-opt-out-of-ab-tests/_javascript.md":[43267,43267],"./12-opt-out-of-ab-tests/_python.md":[3531,3531],"./12-opt-out-of-ab-tests/_ruby.md":[65087,65087],"./13-how-to-access-basic-auth/_csharp.md":[67594,67594],"./13-how-to-access-basic-auth/_java.md":[60997,60997],"./13-how-to-access-basic-auth/_javascript.md":[533,533],"./13-how-to-access-basic-auth/_python.md":[64334,64334],"./13-how-to-access-basic-auth/_ruby.md":[91931,91931],"./2-download-a-file/_csharp.md":[5837,5837],"./2-download-a-file/_java.md":[42994,42994],"./2-download-a-file/_javascript.md":[78037,78037],"./2-download-a-file/_python.md":[9123,9123],"./2-download-a-file/_ruby.md":[20103,20103],"./3-work-with-frames/_csharp.md":[86741,86741],"./3-work-with-frames/_java.md":[37871,37871],"./3-work-with-frames/_javascript.md":[92881,92881],"./3-work-with-frames/_python.md":[33912,33912],"./3-work-with-frames/_ruby.md":[19892,19892],"./4-work-with-multiple-windows/_csharp.md":[11245,11245],"./4-work-with-multiple-windows/_java.md":[9823,9823],"./4-work-with-multiple-windows/_javascript.md":[91096,91096],"./4-work-with-multiple-windows/_python.md":[96333,96333],"./4-work-with-multiple-windows/_ruby.md":[15017,15017],"./5-select-from-a-dropdown/_csharp.md":[54846,54846],"./5-select-from-a-dropdown/_java.md":[81217,81217],"./5-select-from-a-dropdown/_javascript.md":[22255,22255],"./5-select-from-a-dropdown/_python.md":[93288,93288],"./5-select-from-a-dropdown/_ruby.md":[964,964],"./7-use-a-page-object/_ruby.md":[19584,19584],"./8-download-a-file-revisited/_csharp.md":[77068,77068],"./8-download-a-file-revisited/_java.md":[10331,10331],"./8-download-a-file-revisited/_python.md":[23298,23298],"./8-download-a-file-revisited/_ruby.md":[10599,10599],"./9-use-a-base-page-object/_ruby.md":[96612,96612]};function n(e){if(!a.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return a.e(t[1]).then((()=>a(n)))}n.keys=()=>Object.keys(r),n.id=53726,e.exports=n}}]);