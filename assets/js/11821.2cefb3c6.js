"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[11821],{11821:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>h,toc:()=>l});var s=a(74848),r=a(28453);const n={},i=void 0,h={id:"css-vs-xpath-3/_ruby",title:"_ruby",description:"The Results",source:"@site/tips/34-css-vs-xpath-3/_ruby.mdx",sourceDirName:"34-css-vs-xpath-3",slug:"/css-vs-xpath-3/_ruby",permalink:"/tips/css-vs-xpath-3/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/34-css-vs-xpath-3/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172716874e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"CSS vs. Xpath 2",permalink:"/tips/33-css-vs-xpath-2"},next:{title:"CSS vs. Xpath 3",permalink:"/tips/34-css-vs-xpath-3"}},o={},l=[{value:"The Results",id:"the-results",level:2},{value:"In Table Form",id:"in-table-form",level:3},{value:"In Chart Form",id:"in-chart-form",level:3},{value:"What The Results Tell Us",id:"what-the-results-tell-us",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"the-results",children:"The Results"}),"\n",(0,s.jsx)(t.h3,{id:"in-table-form",children:"In Table Form"}),"\n",(0,s.jsxs)(t.p,{children:["[",(0,s.jsx)(t.img,{alt:"benchmark data in an ASCII table",src:a(39341).A+"",width:"1002",height:"252"}),"]"]}),"\n",(0,s.jsx)(t.h3,{id:"in-chart-form",children:"In Chart Form"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"chart of chrome",src:a(32980).A+"",width:"597",height:"367"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"chart of firefox",src:a(77783).A+"",width:"597",height:"369"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"chart of ie8",src:a(56546).A+"",width:"595",height:"369"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"chart of ie9",src:a(20203).A+"",width:"597",height:"367"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"chart of ie10",src:a(28328).A+"",width:"598",height:"369"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"chart of opera",src:a(42785).A+"",width:"596",height:"367"})}),"\n",(0,s.jsx)(t.h2,{id:"what-the-results-tell-us",children:"What The Results Tell Us"}),"\n",(0,s.jsx)(t.p,{children:"Chrome and Firefox are clearly tuned for faster CSS performance. Internet Explorer 8 is a grab bag of CSS that\nwon't work, an out of control XPath traversal that takes ~65 seconds, and a 38 second table traversal with no CSS\nresult to compare it against."}),"\n",(0,s.jsxs)(t.p,{children:["In IE 9 and 10, XPath is faster overall. In Safari, it's a toss up, except for a couple of slower traversal runs\nwith XPath. And across almost all browsers,\n",(0,s.jsx)(t.a,{href:"https://github.com/diemol/selenium-benchmark/blob/master/lib/page-objects/large_dom.rb#L13",children:"the nested sibling traversal"}),"\nand ",(0,s.jsx)(t.a,{href:"https://github.com/diemol/selenium-benchmark/blob/master/lib/page-objects/large_dom.rb#L41",children:"table cell traversal"}),"\ndone with XPath are an expensive operation."]}),"\n",(0,s.jsx)(t.p,{children:"That shouldn't be too surprising though since they are brittle and inefficient ways to write locators. Do try to avoid them."}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"So all in all there are two circumstances where XPath is markedly slower than CSS. But they are easily avoidable.\nOtherwise, the performance difference is slightly in favor of CSS for non-IE browsers and slightly in favor of\nXPath for IE browsers. Given that, I would recommend that you choose your locator strategy based on what works for\nyou and your team. And really, it doesn't matter. If you can ensure that the primary elements on your page have\nunique IDs and Classes then that will always be faster than traversing across the DOM (regardless of which locator\nstrategy you use)."}),"\n",(0,s.jsxs)(t.p,{children:["If you want to do some benchmarking on your own, I wrapped up all the code I wrote into\n",(0,s.jsx)(t.a,{href:"https://github.com/diemol/selenium-benchmark",children:"this library"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"}),"\n",(0,s.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,s.jsxs)(t.p,{children:["A huge thanks to ",(0,s.jsx)(t.a,{href:"https://twitter.com/AutomatedTester",children:"David Burns"}),", ",(0,s.jsx)(t.a,{href:"https://twitter.com/bbbco",children:"Brian Goad"}),", ",(0,s.jsx)(t.a,{href:"https://twitter.com/dimacus",children:"Dima Kovalenko"}),",\nand ",(0,s.jsx)(t.a,{href:"https://twitter.com/shs96c",children:"Simon Stewart"})," who provided great feedback and insight into the test and example design."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},32980:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/chart-chrome-aa5c7168649f3ff3c115c170b8bb4a8a.png"},77783:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/chart-firefox-798cf61293028193e13661908912f76a.png"},28328:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/chart-ie10-a35ccad54ba12d80871400341c2352ee.png"},56546:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/chart-ie8-a4304524fafaca7cab625763acb42ac0.png"},20203:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/chart-ie9-f98710c24c829ad214e8d7e099bcbfda.png"},42785:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/chart-opera-32d5b767b499a767c7db7362eddbbdfc.png"},39341:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/full-benchmark-data-5ad00e7347d4aabebf73c9efebf26d11.png"}}]);