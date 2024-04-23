(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[2417],{79012:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=a(74848),r=a(28453),n=a(54152),s=a(7840);const i={title:"How to Open a New Window or Tab",id:"6-open-new-window",slug:"/6-open-new-window",sidebar_label:"How to Open a New Window or Tab",description:"Nearly everyone, at some point during their normal flow of work on the computer, has had to open a new window or tab.",number:6,hide_table_of_contents:!0,publish_date:new Date("2023-02-17T00:00:00.000Z"),image:"img/cards/6-open-new-window.png",tags:["new window","new tab","no keystrokes needed"],level:1,category:["fundamentals"]},l=void 0,d={id:"open-new-window/6-open-new-window",title:"How to Open a New Window or Tab",description:"Nearly everyone, at some point during their normal flow of work on the computer, has had to open a new window or tab.",source:"@site/tips/6-open-new-window/main.mdx",sourceDirName:"6-open-new-window",slug:"/6-open-new-window",permalink:"/tips/6-open-new-window",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/6-open-new-window/main.mdx",tags:[{label:"new window",permalink:"/tips/tags/new-window"},{label:"new tab",permalink:"/tips/tags/new-tab"},{label:"no keystrokes needed",permalink:"/tips/tags/no-keystrokes-needed"}],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1713865687e3,frontMatter:{title:"How to Open a New Window or Tab",id:"6-open-new-window",slug:"/6-open-new-window",sidebar_label:"How to Open a New Window or Tab",description:"Nearly everyone, at some point during their normal flow of work on the computer, has had to open a new window or tab.",number:6,hide_table_of_contents:!0,publish_date:"2023-02-17T00:00:00.000Z",image:"img/cards/6-open-new-window.png",tags:["new window","new tab","no keystrokes needed"],level:1,category:["fundamentals"]},sidebar:"defaultSidebar",previous:{title:"How to Select from a Dropdown List",permalink:"/tips/5-select-from-a-dropdown"},next:{title:"Use A Page Object",permalink:"/tips/7-use-a-page-object"}},u={},c=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2},{value:"Authors",id:"authors",level:2}];function m(e){const t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,o.jsx)(t.p,{children:"Nearly everyone, at some point during their normal flow of work on the computer, has had to open a new window or\ntab. In fact, many of us often end up with several tabs open. It makes sense that this should be tested using\nautomation."}),"\n",(0,o.jsxs)(t.p,{children:["Previously, you may have sent keystrokes to open a new tab or window with a send keys method and ",(0,o.jsx)(t.code,{children:"Command t"}),"\n(macOS) or ",(0,o.jsx)(t.code,{children:"Control n"})," (Windows/Linux). However, this doesn't translate well across different operating systems\nand browser versions."]}),"\n",(0,o.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,o.jsx)(t.p,{children:"Most modern browser automation tools have a built-in method to open a new window or tab. This method allows you to\ncreate a new window or new tab (without needing a keyboard input), then select that new tab or window, and navigate\nto a website."}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n","\n",(0,o.jsx)(n.A,{languages:[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"},{label:"Selenide",value:"selenide"}]}),"\n",(0,o.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Open Firefox browser"}),"\n",(0,o.jsx)(t.li,{children:"Navigate to the-internet website"}),"\n",(0,o.jsx)(t.li,{children:"Open a New Window and move it to a different position on the screen"}),"\n",(0,o.jsx)(t.li,{children:"Navigate to the Typos page on the-internet website"}),"\n",(0,o.jsx)(t.li,{children:"Check the number of windows open"}),"\n",(0,o.jsx)(t.li,{children:"Close all browsers"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"outro",children:"Outro"}),"\n",(0,o.jsx)(t.p,{children:"There are many possible use cases for this new way of opening and focusing on new browser tabs and windows across\nOS and browser combinations."}),"\n",(0,o.jsx)(t.p,{children:"From testing the way a user can interact with two windows side-by-side, to testing performance and behavior\nof multiple windows, this new command makes it simpler to test on multiple web pages."}),"\n",(0,o.jsx)(t.p,{children:"Happy Testing!"}),"\n",(0,o.jsx)(t.h2,{id:"authors",children:"Authors"}),"\n","\n",(0,o.jsx)(s.A,{name:"Lindsay Walker ",imgSrc:"https://github.com/walkerlj0.png",description:"Creator of this tip",url:"https://github.com/walkerlj0",author:!0}),"\n",(0,o.jsx)(s.A,{name:"Diego Molina",imgSrc:"https://github.com/diemol.png",description:"Maintainer of Elemental Selenium",url:"https://github.com/diemol",author:!0})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},62771:(e,t,a)=>{"use strict";a.d(t,{_:()=>i,u:()=>l});var o=a(96540),r=a(89532),n=a(74848);const s=o.createContext(null);function i(e){let{children:t,content:a}=e;const r=function(e){return(0,o.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,n.jsx)(s.Provider,{value:r,children:t})}function l(){const e=(0,o.useContext)(s);if(null===e)throw new r.dV("DocProvider");return e}},7840:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});a(96540);var o=a(74848);const r=e=>{let{imgSrc:t,name:a,description:r,url:n,author:s=!1}=e;const i=s?"avatar__photo avatar__photo--lg":"avatar__photo";return(0,o.jsxs)("div",{className:"avatar margin-bottom--sm",children:[(0,o.jsx)("img",{className:i,src:t,alt:a}),(0,o.jsxs)("div",{className:"avatar__intro",children:[(0,o.jsx)("div",{className:"avatar__name",children:(0,o.jsx)("a",{href:n,target:"_blank",children:a})}),(0,o.jsx)("small",{className:"avatar__subtitle",children:r})]})]})}},54152:(e,t,a)=>{"use strict";a.d(t,{A:()=>T});var o=a(96540),r=a(34164),n=a(23104),s=a(56347),i=a(205),l=a(57485),d=a(31682),u=a(89466);function c(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:r}}=e;return{value:t,label:a,attributes:o,default:r}}))}(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(n),(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function w(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=m(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:n}))),[d,c]=p({queryString:a,groupId:r}),[w,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,u.Dv)(a);return[r,(0,o.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),x=(()=>{const e=d??w;return h({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,n]),tabValues:n}}var b=a(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=a(74848);function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),r=i[a].value;r!==o&&(d(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...n,className:(0,r.A)("tabs__item",x.tabItem,n?.className,{"tabs__item--active":o===t}),children:a??t},t)}))})}function f(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=w(e);return(0,_.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,_.jsx)(v,{...e,...t}),(0,_.jsx)(f,{...e,...t})]})}function g(e){const t=(0,b.A)();return(0,_.jsx)(y,{...e,children:c(e.children)},String(t))}const j={tabItem:"tabItem_Ymn6"};function k(e){let{children:t,hidden:a,className:o}=e;return(0,_.jsx)("div",{role:"tabpanel",className:(0,r.A)(j.tabItem,o),hidden:a,children:t})}var N=a(62771);const T=function(e){let{languages:t}=e;const[r,n]=(0,o.useState)([]),s=(0,N.u)().frontMatter.id;return(0,o.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,o.lazy)((()=>a(36217)(`./${s}/_${e.value}.mdx`)));return{label:e.label,component:t}})));n(e)})()}),[t]),(0,_.jsx)("div",{children:r.length>0&&(0,_.jsx)(g,{groupId:"elemental-selenium-tabs",children:r.map(((e,t)=>(0,_.jsx)(k,{value:e.label,label:e.label,children:(0,_.jsx)(o.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading..."}),children:(0,_.jsx)(e.component,{})})},t)))})})}},36217:(e,t,a)=>{var o={"./1-upload-a-file/_csharp.mdx":[1192,1869,1432,1192],"./1-upload-a-file/_java.mdx":[28169,1869,1432,8169],"./1-upload-a-file/_javascript.mdx":[98576,1869,1432,8576],"./1-upload-a-file/_python.mdx":[723,1869,1432,723],"./1-upload-a-file/_ruby.mdx":[51777,1869,1432,1777],"./1-upload-a-file/_selenide.mdx":[76066,1869,1432,6066],"./10-retry-test-actions/_ruby.mdx":[76678,6678],"./11-build-an-interactive-prompt/_ruby.mdx":[57644,7644],"./12-opt-out-of-ab-tests/_csharp.mdx":[4654,4654],"./12-opt-out-of-ab-tests/_java.mdx":[38411,8411],"./12-opt-out-of-ab-tests/_javascript.mdx":[59790,9790],"./12-opt-out-of-ab-tests/_python.mdx":[28797,8797],"./12-opt-out-of-ab-tests/_ruby.mdx":[77971,7971],"./13-how-to-access-basic-auth/_csharp.mdx":[93998,3998],"./13-how-to-access-basic-auth/_java.mdx":[15787,5787],"./13-how-to-access-basic-auth/_javascript.mdx":[81966,1966],"./13-how-to-access-basic-auth/_python.mdx":[48477,8477],"./13-how-to-access-basic-auth/_ruby.mdx":[4723,4723],"./14-interactive-prompts-revisited/_ruby.mdx":[45725,5725],"./15-download-secure-files/_ruby.mdx":[46154,6154],"./16-take-screenshot-on-failure/_csharp.mdx":[31573,1573],"./16-take-screenshot-on-failure/_java.mdx":[77184,7184],"./16-take-screenshot-on-failure/_javascript.mdx":[33853,3853],"./16-take-screenshot-on-failure/_python.mdx":[18530,8530],"./16-take-screenshot-on-failure/_ruby.mdx":[40328,328],"./17-retrieve-http-status-codes/_ruby.mdx":[64279,6660],"./19-data-driven-testing/_ruby.mdx":[25174,5174],"./2-download-a-file/_csharp.mdx":[28810,1869,1432,8810],"./2-download-a-file/_java.mdx":[10351,1869,1432,351],"./2-download-a-file/_javascript.mdx":[21082,1869,1432,1082],"./2-download-a-file/_python.mdx":[26849,1869,1432,6849],"./2-download-a-file/_ruby.mdx":[82759,1869,1432,2759],"./2-download-a-file/_selenide.mdx":[80080,1869,1432,80],"./22-locator-strategy/_ruby.mdx":[85814,5814],"./23-dynamic-pages/_ruby.mdx":[91589,3970],"./24-rest-apis/_ruby.mdx":[20686,686],"./25-how-to-work-with-tables/_csharp.mdx":[96837,6837],"./25-how-to-work-with-tables/_java.mdx":[17872,7872],"./25-how-to-work-with-tables/_javascript.mdx":[5197,5197],"./25-how-to-work-with-tables/_python.mdx":[38834,8834],"./25-how-to-work-with-tables/_ruby.mdx":[66168,6168],"./26-cloud/_ruby.mdx":[68307,8307],"./27-parallel/_ruby.mdx":[4428,2047],"./29-chrome-driver/_csharp.mdx":[77539,7539],"./29-chrome-driver/_java.mdx":[85650,5650],"./29-chrome-driver/_python.mdx":[57452,7452],"./29-chrome-driver/_ruby.mdx":[99474,9474],"./3-work-with-frames/_csharp.mdx":[94265,1869,1432,4265],"./3-work-with-frames/_java.mdx":[73084,1869,1432,3084],"./3-work-with-frames/_javascript.mdx":[81633,1869,1432,1633],"./3-work-with-frames/_python.mdx":[74478,1869,1432,4478],"./3-work-with-frames/_ruby.mdx":[59348,1869,1432,9348],"./3-work-with-frames/_selenide.mdx":[87099,1869,1432,7099],"./3-work-with-frames/_serenity-js.mdx":[31169,1869,1432,1169],"./30-mobile/_ruby.mdx":[45299,5299],"./32-css-vs-xpath/_ruby.mdx":[51822,1822],"./33-css-vs-xpath-2/_ruby.mdx":[75816,5816],"./34-css-vs-xpath-3/_ruby.mdx":[26376,6376],"./38-headless/_ruby.mdx":[64492,4492],"./39-drag-and-drop/_ruby.mdx":[16096,3715],"./4-work-with-multiple-windows/_csharp.mdx":[14338,1869,1432,4338],"./4-work-with-multiple-windows/_java.mdx":[92839,1869,1432,2839],"./4-work-with-multiple-windows/_javascript.mdx":[53922,1869,1432,3922],"./4-work-with-multiple-windows/_python.mdx":[43753,1869,1432,3753],"./4-work-with-multiple-windows/_ruby.mdx":[45823,1869,1432,5823],"./4-work-with-multiple-windows/_selenide.mdx":[43848,1869,1432,3848],"./40-disabled-element/_csharp.mdx":[1336,1336],"./40-disabled-element/_java.mdx":[33561,3561],"./40-disabled-element/_javascript.mdx":[63008,3008],"./40-disabled-element/_python.mdx":[45475,5475],"./40-disabled-element/_ruby.mdx":[57297,7297],"./41-one-test-multiple-browsers/_ruby.mdx":[26997,6997],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[65922,5922],"./43-forgot-password/_ruby.mdx":[84394,4394],"./44-exception-handling/_ruby.mdx":[82557,2557],"./45-how-to-test-checkboxes/_csharp.mdx":[75329,5329],"./45-how-to-test-checkboxes/_java.mdx":[89380,9380],"./45-how-to-test-checkboxes/_javascript.mdx":[58713,8713],"./45-how-to-test-checkboxes/_python.mdx":[87590,7590],"./45-how-to-test-checkboxes/_ruby.mdx":[11932,1932],"./47-waiting/_ruby.mdx":[44226,4226],"./48-load-testing/_ruby.mdx":[46841,6841],"./49-performance-testing/_ruby.mdx":[1096,1096],"./5-select-from-a-dropdown/_csharp.mdx":[62999,1869,1432,2999],"./5-select-from-a-dropdown/_java.mdx":[24494,1869,1432,4494],"./5-select-from-a-dropdown/_javascript.mdx":[7887,1869,1432,7887],"./5-select-from-a-dropdown/_python.mdx":[51032,1869,1432,1032],"./5-select-from-a-dropdown/_ruby.mdx":[77198,1869,1432,7198],"./5-select-from-a-dropdown/_selenide.mdx":[76269,1869,1432,6269],"./50-how-to-work-with-hovers/_csharp.mdx":[63783,3783],"./50-how-to-work-with-hovers/_java.mdx":[97694,7694],"./50-how-to-work-with-hovers/_javascript.mdx":[21663,1663],"./50-how-to-work-with-hovers/_python.mdx":[18920,8920],"./50-how-to-work-with-hovers/_ruby.mdx":[27902,5521],"./51-javascript-alerts/_csharp.mdx":[76032,6032],"./51-javascript-alerts/_java.mdx":[1,1],"./51-javascript-alerts/_javascript.mdx":[58648,8648],"./51-javascript-alerts/_python.mdx":[65339,5339],"./51-javascript-alerts/_ruby.mdx":[54265,6646],"./52-grid/_java.mdx":[80557,557],"./52-grid/_javascript.mdx":[45228,5228],"./52-grid/_python.mdx":[87015,7015],"./52-grid/_ruby.mdx":[36197,6197],"./53-growl/_csharp.mdx":[85634,5634],"./53-growl/_java.mdx":[87719,7719],"./53-growl/_javascript.mdx":[11714,1714],"./53-growl/_python.mdx":[39913,9913],"./53-growl/_ruby.mdx":[14527,4527],"./54-logging/_ruby.mdx":[39496,9496],"./55-wrapper/_ruby.mdx":[80067,67],"./56-retry-failed-tests/_ruby.mdx":[79661,9661],"./57-junit-xml/_ruby.mdx":[26596,6596],"./58-tagging/_ruby.mdx":[79922,9922],"./6-open-new-window/_csharp.mdx":[45673,1869,1432,5673],"./6-open-new-window/_java.mdx":[97900,1869,1432,7900],"./6-open-new-window/_javascript.mdx":[42993,1869,1432,2993],"./6-open-new-window/_python.mdx":[3934,1869,1432,3934],"./6-open-new-window/_ruby.mdx":[67396,1869,1432,7396],"./6-open-new-window/_selenide.mdx":[74251,1869,1432,4251],"./60-list-tags/_ruby.mdx":[93024,3024],"./61-how-to-press-keyboard-keys/_csharp.mdx":[66059,6059],"./61-how-to-press-keyboard-keys/_java.mdx":[25530,5530],"./61-how-to-press-keyboard-keys/_javascript.mdx":[8915,8915],"./61-how-to-press-keyboard-keys/_python.mdx":[50116,116],"./61-how-to-press-keyboard-keys/_ruby.mdx":[41306,1306],"./63-right-click/_csharp.mdx":[20441,441],"./63-right-click/_java.mdx":[57404,7404],"./63-right-click/_javascript.mdx":[17921,7921],"./63-right-click/_python.mdx":[2958,2958],"./63-right-click/_ruby.mdx":[54996,4996],"./64-limit-bandwidth/_ruby.mdx":[14247,4247],"./65-highlight-elements/_csharp.mdx":[94636,4636],"./65-highlight-elements/_java.mdx":[73877,3877],"./65-highlight-elements/_javascript.mdx":[86724,6724],"./65-highlight-elements/_python.mdx":[94879,4879],"./65-highlight-elements/_ruby.mdx":[96877,6877],"./66-blacklist/_ruby.mdx":[26565,6565],"./67-broken-images/_ruby.mdx":[9923,9923],"./68-load-testing-revisited/_ruby.mdx":[28323,8323],"./69-safari/_java.mdx":[33591,3591],"./69-safari/_ruby.mdx":[11823,1823],"./7-use-a-page-object/_ruby.mdx":[17244,7244],"./72-headless-chrome/_ruby.mdx":[94531,4531],"./8-download-a-file-revisited/_csharp.mdx":[45932,5932],"./8-download-a-file-revisited/_java.mdx":[73525,3525],"./8-download-a-file-revisited/_python.mdx":[52127,2127],"./8-download-a-file-revisited/_ruby.mdx":[66381,6381],"./9-use-a-base-page-object/_ruby.mdx":[80582,582]};function r(e){if(!a.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(r)))}r.keys=()=>Object.keys(o),r.id=36217,e.exports=r},28453:(e,t,a)=>{"use strict";a.d(t,{R:()=>s,x:()=>i});var o=a(96540);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);