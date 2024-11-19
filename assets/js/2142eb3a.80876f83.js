(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[2007],{38385:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"select-from-a-dropdown/5-select-from-a-dropdown","title":"How to Select from a Dropdown List","description":"Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment.","source":"@site/tips/5-select-from-a-dropdown/main.mdx","sourceDirName":"5-select-from-a-dropdown","slug":"/5-select-from-a-dropdown","permalink":"/tips/5-select-from-a-dropdown","draft":false,"unlisted":false,"editUrl":"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/5-select-from-a-dropdown/main.mdx","tags":[{"inline":true,"label":"dropdown","permalink":"/tips/tags/dropdown"},{"inline":true,"label":"forms","permalink":"/tips/tags/forms"}],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1732054621000,"frontMatter":{"title":"How to Select from a Dropdown List","id":"5-select-from-a-dropdown","slug":"/5-select-from-a-dropdown","sidebar_label":"How to Select from a Dropdown List","description":"Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment.","number":5,"hide_table_of_contents":true,"level":1,"publish_date":"2015-07-06T00:00:00.000Z","image":"img/cards/5-select-from-a-dropdown.png","tags":["dropdown","forms"],"category":["fundamentals"]},"sidebar":"defaultSidebar","previous":{"title":"How to Work with Multiple Windows","permalink":"/tips/4-work-with-multiple-windows"},"next":{"title":"How to Open a New Window or Tab","permalink":"/tips/6-open-new-window"}}');var a=r(74848),s=r(28453),n=r(54152),i=r(7840);const l={title:"How to Select from a Dropdown List",id:"5-select-from-a-dropdown",slug:"/5-select-from-a-dropdown",sidebar_label:"How to Select from a Dropdown List",description:"Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment.",number:5,hide_table_of_contents:!0,level:1,publish_date:new Date("2015-07-06T00:00:00.000Z"),image:"img/cards/5-select-from-a-dropdown.png",tags:["dropdown","forms"],category:["fundamentals"]},d="How to Select from a Dropdown List",c={},u=[{value:"The Problem",id:"the-problem",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2},{value:"Special Thanks",id:"special-thanks",level:2},{value:"Authors",id:"authors",level:2}];function m(e){const t={em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"how-to-select-from-a-dropdown-list",children:"How to Select from a Dropdown List"})}),"\n",(0,a.jsx)(t.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,a.jsxs)(t.p,{children:["Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown\nmenu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list\nmight ",(0,a.jsx)(t.em,{children:"seem"})," straightforward -- just grab the list by its element and select an item within it, based on the\ntext you want -- there's a bit more skill to it."]}),"\n",(0,a.jsx)(t.p,{children:"Let's take a look at a couple of different approaches."}),"\n","\n",(0,a.jsx)(n.A,{languages:[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"},{label:"Selenide",value:"selenide"}]}),"\n",(0,a.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Open the browser"}),"\n",(0,a.jsx)(t.li,{children:"Visit the example application"}),"\n",(0,a.jsx)(t.li,{children:"Find the dropdown list"}),"\n",(0,a.jsx)(t.li,{children:"Select the specified item from the dropdown list"}),"\n",(0,a.jsx)(t.li,{children:"Assert that the selected option is what you expect"}),"\n",(0,a.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"outro",children:"Outro"}),"\n",(0,a.jsx)(t.p,{children:"Hopefully this tip will help you breeze through selecting items from a dropdown list."}),"\n",(0,a.jsx)(t.p,{children:"Happy Testing!"}),"\n",(0,a.jsx)(t.h2,{id:"special-thanks",children:"Special Thanks"}),"\n","\n",(0,a.jsx)(i.A,{name:"Roman Isko",imgSrc:"https://github.com/sturman.png",description:"Contributed the initial Java code for this tip.",url:"https://github.com/sturman"}),"\n",(0,a.jsx)(i.A,{name:"Mike Millgate",imgSrc:"https://github.com/trabulmonkee.png",description:"Contributed the Python code for this tip.",url:"https://github.com/trabulmonkee"}),"\n",(0,a.jsx)(i.A,{name:"Isaul Vargas",imgSrc:"https://github.com/isaulv.png",description:"Python code review",url:"https://github.com/isaulv"}),"\n",(0,a.jsx)(i.A,{name:"Peter Bittner",imgSrc:"https://github.com/bittner.png",description:"Python code review",url:"https://github.com/bittner"}),"\n",(0,a.jsx)(i.A,{name:"Jonathan Taylor",imgSrc:"https://github.com/jtay2380.png",description:"Contributed the initial C# code for this tip.",url:"https://github.com/jtay2380"}),"\n",(0,a.jsx)(i.A,{name:"Andrei Solntsev",imgSrc:"https://github.com/asolntsev.png",description:"Contributed the Selenide code for this tip.",url:"https://github.com/asolntsev"}),"\n",(0,a.jsx)(t.h2,{id:"authors",children:"Authors"}),"\n",(0,a.jsx)(i.A,{name:"Dave Piacente",imgSrc:"https://github.com/tourdedave.png",description:"Original creator of Elemental Selenium",url:"https://github.com/tourdedave",author:!0}),"\n",(0,a.jsx)(i.A,{name:"Diego Molina",imgSrc:"https://github.com/diemol.png",description:"Current maintainer of Elemental Selenium",url:"https://github.com/diemol",author:!0})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},60542:(e,t,r)=>{"use strict";r.d(t,{_:()=>i,u:()=>l});var o=r(96540),a=r(89532),s=r(74848);const n=o.createContext(null);function i(e){let{children:t,content:r}=e;const a=function(e){return(0,o.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return(0,s.jsx)(n.Provider,{value:a,children:t})}function l(){const e=(0,o.useContext)(n);if(null===e)throw new a.dV("DocProvider");return e}},7840:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});r(96540);var o=r(74848);const a=e=>{let{imgSrc:t,name:r,description:a,url:s,author:n=!1}=e;const i=n?"avatar__photo avatar__photo--lg":"avatar__photo";return(0,o.jsxs)("div",{className:"avatar margin-bottom--sm",children:[(0,o.jsx)("img",{className:i,src:t,alt:r}),(0,o.jsxs)("div",{className:"avatar__intro",children:[(0,o.jsx)("div",{className:"avatar__name",children:(0,o.jsx)("a",{href:s,target:"_blank",children:r})}),(0,o.jsx)("small",{className:"avatar__subtitle",children:a})]})]})}},54152:(e,t,r)=>{"use strict";r.d(t,{A:()=>A});var o=r(96540),a=r(34164),s=r(23104),n=r(56347),i=r(205),l=r(57485),d=r(31682),c=r(70679);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:o,default:a}}=e;return{value:t,label:r,attributes:o,default:a}}))}(r);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,n.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=m(e),[n,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[d,u]=p({queryString:r,groupId:a}),[b,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,o.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),w=(()=>{const e=d??b;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{w&&l(w)}),[w]);return{selectedValue:n,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=r(92303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function _(e){let{className:t,block:r,selectedValue:o,selectValue:n,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==o&&(d(t),n(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.A)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":o===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",w.tabList),children:[(0,f.jsx)(_,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function y(e){const t=(0,x.A)();return(0,f.jsx)(g,{...e,children:u(e.children)},String(t))}const j={tabItem:"tabItem_Ymn6"};function k(e){let{children:t,hidden:r,className:o}=e;return(0,f.jsx)("div",{role:"tabpanel",className:(0,a.A)(j.tabItem,o),hidden:r,children:t})}var S=r(60542);const A=function(e){let{languages:t}=e;const[a,s]=(0,o.useState)([]),n=(0,S.u)().frontMatter.id;return(0,o.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,o.lazy)((()=>r(36217)(`./${n}/_${e.value}.mdx`)));return{label:e.label,component:t}})));s(e)})()}),[t]),(0,f.jsx)("div",{children:a.length>0&&(0,f.jsx)(y,{groupId:"elemental-selenium-tabs",children:a.map(((e,t)=>(0,f.jsx)(k,{value:e.label,label:e.label,children:(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(e.component,{})})},t)))})})}},36217:(e,t,r)=>{var o={"./1-upload-a-file/_csharp.mdx":[45889,1869,1432,5889],"./1-upload-a-file/_java.mdx":[40356,1869,1432,356],"./1-upload-a-file/_javascript.mdx":[6937,1869,1432,6937],"./1-upload-a-file/_python.mdx":[58150,1869,1432,8150],"./1-upload-a-file/_ruby.mdx":[46556,1869,1432,6556],"./1-upload-a-file/_selenide.mdx":[9635,1869,1432,9635],"./10-retry-test-actions/_ruby.mdx":[68163,8163],"./11-build-an-interactive-prompt/_ruby.mdx":[65599,5599],"./12-opt-out-of-ab-tests/_csharp.mdx":[48337,8337],"./12-opt-out-of-ab-tests/_java.mdx":[86836,6836],"./12-opt-out-of-ab-tests/_javascript.mdx":[28777,8777],"./12-opt-out-of-ab-tests/_python.mdx":[80342,342],"./12-opt-out-of-ab-tests/_ruby.mdx":[38668,8668],"./13-how-to-access-basic-auth/_csharp.mdx":[70243,243],"./13-how-to-access-basic-auth/_java.mdx":[71570,1570],"./13-how-to-access-basic-auth/_javascript.mdx":[66459,6459],"./13-how-to-access-basic-auth/_python.mdx":[5292,5292],"./13-how-to-access-basic-auth/_ruby.mdx":[26066,6066],"./14-interactive-prompts-revisited/_ruby.mdx":[90690,690],"./15-download-secure-files/_ruby.mdx":[99353,9353],"./16-take-screenshot-on-failure/_csharp.mdx":[45748,5748],"./16-take-screenshot-on-failure/_java.mdx":[957,957],"./16-take-screenshot-on-failure/_javascript.mdx":[67164,7164],"./16-take-screenshot-on-failure/_python.mdx":[16983,6983],"./16-take-screenshot-on-failure/_ruby.mdx":[76821,6821],"./17-retrieve-http-status-codes/_ruby.mdx":[33150,3150],"./19-data-driven-testing/_ruby.mdx":[71841,1841],"./2-download-a-file/_csharp.mdx":[11703,1869,1432,1703],"./2-download-a-file/_java.mdx":[60654,1869,1432,654],"./2-download-a-file/_javascript.mdx":[58223,1869,1432,8223],"./2-download-a-file/_python.mdx":[43416,1869,1432,3416],"./2-download-a-file/_ruby.mdx":[30542,1869,1432,542],"./2-download-a-file/_selenide.mdx":[8173,1869,1432,8173],"./22-locator-strategy/_ruby.mdx":[78995,8995],"./23-dynamic-pages/_ruby.mdx":[92394,13],"./24-rest-apis/_ruby.mdx":[27169,7169],"./25-how-to-work-with-tables/_csharp.mdx":[42614,2614],"./25-how-to-work-with-tables/_java.mdx":[36083,6083],"./25-how-to-work-with-tables/_javascript.mdx":[80102,102],"./25-how-to-work-with-tables/_python.mdx":[12373,2373],"./25-how-to-work-with-tables/_ruby.mdx":[95931,5931],"./26-cloud/_ruby.mdx":[77932,5551],"./27-parallel/_ruby.mdx":[4125,4125],"./29-chrome-driver/_csharp.mdx":[71464,1464],"./29-chrome-driver/_java.mdx":[18665,8665],"./29-chrome-driver/_python.mdx":[74035,4035],"./29-chrome-driver/_ruby.mdx":[75617,5617],"./3-work-with-frames/_csharp.mdx":[48154,1869,1432,8154],"./3-work-with-frames/_java.mdx":[47263,1869,1432,7263],"./3-work-with-frames/_javascript.mdx":[49962,1869,1432,9962],"./3-work-with-frames/_python.mdx":[7409,1869,1432,7409],"./3-work-with-frames/_ruby.mdx":[52375,1869,1432,2375],"./3-work-with-frames/_selenide.mdx":[6272,1869,1432,6272],"./3-work-with-frames/_serenity-js.mdx":[20324,1869,1432,324],"./30-mobile/_ruby.mdx":[11554,1554],"./32-css-vs-xpath/_ruby.mdx":[87267,7267],"./33-css-vs-xpath-2/_ruby.mdx":[41773,1773],"./34-css-vs-xpath-3/_ruby.mdx":[11821,1821],"./38-headless/_ruby.mdx":[43601,3601],"./39-drag-and-drop/_ruby.mdx":[46027,6027],"./4-work-with-multiple-windows/_csharp.mdx":[36125,1869,1432,6125],"./4-work-with-multiple-windows/_java.mdx":[46184,1869,1432,6184],"./4-work-with-multiple-windows/_javascript.mdx":[77685,1869,1432,7685],"./4-work-with-multiple-windows/_python.mdx":[3802,1869,1432,3802],"./4-work-with-multiple-windows/_ruby.mdx":[51376,1869,1432,1376],"./4-work-with-multiple-windows/_selenide.mdx":[52079,1869,1432,2079],"./40-disabled-element/_csharp.mdx":[39225,9225],"./40-disabled-element/_java.mdx":[8124,8124],"./40-disabled-element/_javascript.mdx":[15297,5297],"./40-disabled-element/_python.mdx":[19438,9438],"./40-disabled-element/_ruby.mdx":[94388,9626],"./41-one-test-multiple-browsers/_ruby.mdx":[3736,3736],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[69413,9413],"./43-forgot-password/_ruby.mdx":[27997,7997],"./44-exception-handling/_ruby.mdx":[38344,8344],"./45-how-to-test-checkboxes/_csharp.mdx":[94360,4360],"./45-how-to-test-checkboxes/_java.mdx":[58905,8905],"./45-how-to-test-checkboxes/_javascript.mdx":[99136,9136],"./45-how-to-test-checkboxes/_python.mdx":[38499,8499],"./45-how-to-test-checkboxes/_ruby.mdx":[82641,2641],"./47-waiting/_ruby.mdx":[24781,4781],"./48-load-testing/_ruby.mdx":[29968,9968],"./49-performance-testing/_ruby.mdx":[41731,1731],"./5-select-from-a-dropdown/_csharp.mdx":[93483,1869,1432,5864],"./5-select-from-a-dropdown/_java.mdx":[74809,1869,1432,4809],"./5-select-from-a-dropdown/_javascript.mdx":[22048,1869,1432,2048],"./5-select-from-a-dropdown/_python.mdx":[17891,1869,1432,7891],"./5-select-from-a-dropdown/_ruby.mdx":[11953,1869,1432,1953],"./5-select-from-a-dropdown/_selenide.mdx":[16530,1869,1432,6530],"./50-how-to-work-with-hovers/_csharp.mdx":[82996,2996],"./50-how-to-work-with-hovers/_java.mdx":[24125,6506],"./50-how-to-work-with-hovers/_javascript.mdx":[476,476],"./50-how-to-work-with-hovers/_python.mdx":[61431,1431],"./50-how-to-work-with-hovers/_ruby.mdx":[49557,9557],"./51-javascript-alerts/_csharp.mdx":[2671,2671],"./51-javascript-alerts/_java.mdx":[89542,9542],"./51-javascript-alerts/_javascript.mdx":[36215,6215],"./51-javascript-alerts/_python.mdx":[41280,1280],"./51-javascript-alerts/_ruby.mdx":[13510,3510],"./52-grid/_java.mdx":[38876,8876],"./52-grid/_javascript.mdx":[7681,7681],"./52-grid/_python.mdx":[37902,5521],"./52-grid/_ruby.mdx":[25140,5140],"./53-growl/_csharp.mdx":[17625,7625],"./53-growl/_java.mdx":[85743,5743],"./53-growl/_javascript.mdx":[48897,8897],"./53-growl/_python.mdx":[97838,7838],"./53-growl/_ruby.mdx":[72007,4388],"./54-logging/_ruby.mdx":[64071,4071],"./55-wrapper/_ruby.mdx":[92172,2172],"./56-retry-failed-tests/_ruby.mdx":[31988,1988],"./57-junit-xml/_ruby.mdx":[17703,7703],"./58-tagging/_ruby.mdx":[90889,889],"./6-open-new-window/_csharp.mdx":[90108,1869,1432,108],"./6-open-new-window/_java.mdx":[43205,1869,1432,3205],"./6-open-new-window/_javascript.mdx":[60852,1869,1432,852],"./6-open-new-window/_python.mdx":[20879,1869,1432,879],"./6-open-new-window/_ruby.mdx":[61533,1869,1432,1533],"./6-open-new-window/_selenide.mdx":[230,1869,1432,230],"./60-list-tags/_ruby.mdx":[97771,7771],"./61-how-to-press-keyboard-keys/_csharp.mdx":[65550,5550],"./61-how-to-press-keyboard-keys/_java.mdx":[39275,9275],"./61-how-to-press-keyboard-keys/_javascript.mdx":[83662,3662],"./61-how-to-press-keyboard-keys/_python.mdx":[20029,29],"./61-how-to-press-keyboard-keys/_ruby.mdx":[11859,1859],"./63-right-click/_csharp.mdx":[69850,9850],"./63-right-click/_java.mdx":[56639,6639],"./63-right-click/_javascript.mdx":[91709,4090],"./63-right-click/_python.mdx":[29105,9105],"./63-right-click/_ruby.mdx":[61751,1751],"./64-limit-bandwidth/_ruby.mdx":[89776,9776],"./65-highlight-elements/_csharp.mdx":[85825,5825],"./65-highlight-elements/_java.mdx":[59492,9492],"./65-highlight-elements/_javascript.mdx":[93561,3561],"./65-highlight-elements/_python.mdx":[81734,1734],"./65-highlight-elements/_ruby.mdx":[65692,5692],"./66-blacklist/_ruby.mdx":[67058,7058],"./67-broken-images/_ruby.mdx":[27824,7824],"./68-load-testing-revisited/_ruby.mdx":[62278,9897],"./69-safari/_java.mdx":[61650,1650],"./69-safari/_ruby.mdx":[16146,6146],"./7-use-a-page-object/_ruby.mdx":[16741,6741],"./72-headless-chrome/_ruby.mdx":[33864,3864],"./8-download-a-file-revisited/_csharp.mdx":[30509,509],"./8-download-a-file-revisited/_java.mdx":[89176,9176],"./8-download-a-file-revisited/_python.mdx":[21738,1738],"./8-download-a-file-revisited/_ruby.mdx":[47392,7392],"./9-use-a-base-page-object/_ruby.mdx":[57937,7937]};function a(e){if(!r.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(a)))}a.keys=()=>Object.keys(o),a.id=36217,e.exports=a},28453:(e,t,r)=>{"use strict";r.d(t,{R:()=>n,x:()=>i});var o=r(96540);const a={},s=o.createContext(a);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);