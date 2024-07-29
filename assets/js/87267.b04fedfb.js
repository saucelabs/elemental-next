"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[87267],{87267:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(74848),n=t(28453);const r={},i=void 0,o={id:"css-vs-xpath/_ruby",title:"_ruby",description:"Example",source:"@site/tips/32-css-vs-xpath/_ruby.mdx",sourceDirName:"32-css-vs-xpath",slug:"/css-vs-xpath/_ruby",permalink:"/tips/css-vs-xpath/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/32-css-vs-xpath/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Accessing Previous Tips Archive",permalink:"/tips/31-archives"},next:{title:"CSS vs. Xpath",permalink:"/tips/32-css-vs-xpath"}},h={},c=[{value:"Example",id:"example",level:2},{value:"Finding Elements By ID and Class",id:"finding-elements-by-id-and-class",level:3},{value:"Finding Elements By Traversing",id:"finding-elements-by-traversing",level:3},{value:"What The Results Tell Us",id:"what-the-results-tell-us",level:2},{value:"Some Additional Food For Thought",id:"some-additional-food-for-thought",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const s={a:"a",br:"br",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(s.p,{children:"To test the differences between CSS and XPath, we will use two sets of tests. The first set will work with\nsimple attributes like ID and Class, and the other will traverse the DOM top down to work with nested elements."}),"\n",(0,a.jsx)(s.p,{children:"Ideally, this would be run locally and the speed of each find element action would be measured and compared.\nBut for this we're going to use Sauce Labs and track the total test time for each run. While the prior is more\nprecise, the latter is more accurate since it demonstrates an end-to-end workflow."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsxs)(s.strong,{children:["NOTE: For a more rigorous benchmark, check out\n",(0,a.jsx)(s.a,{href:"https://elementalselenium.com/docs/xpath-vs-css-revisited/33-xpath-vs-css-revisited",children:"Tip 33 -- CSS vs. XPath, Under a Microscope"}),"."]})}),"\n",(0,a.jsxs)(s.p,{children:["For our example application we will use ",(0,a.jsx)(s.a,{href:"http://the-internet.herokuapp.com/tables",children:"a page with two HTML data tables"}),".\nOne table is written without helpful attributes, and the other with them.\nThe test code used can be seen ",(0,a.jsx)(s.a,{href:"https://gist.github.com/tourdedave/8309313",children:"here"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"Here are the results after running the suite three consecutive times and averaging them (each linkable to a job\nin Sauce Labs)."}),"\n",(0,a.jsx)(s.h3,{id:"finding-elements-by-id-and-class",children:"Finding Elements By ID and Class"}),"\n",(0,a.jsxs)(s.p,{children:["Browser | CSS | XPath",(0,a.jsx)(s.br,{}),"\n","Internet Explorer 8 | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/99c76814cf9749ef83a0908af96f36e8",children:"23 seconds"}),"  | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/3052b7b1d04d4a6ca8e69a78e2c7143f",children:"22 seconds"}),(0,a.jsx)(s.br,{}),"\n","Chrome 31           | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/57e12106969b4c27a888f34815eabade",children:"17 seconds"}),"  | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/aadb81d6c7e74485aa6b4cc8b5545306",children:"16 seconds"}),(0,a.jsx)(s.br,{}),"\n","Firefox 26          | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/0195437ad34f41be9ccf50d2b354bca5",children:"22 seconds"}),"  | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/882bb654f1f247938d9283acd687c6a7",children:"22 seconds"}),(0,a.jsx)(s.br,{}),"\n","Opera 12            | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/dc33e27d94ed4a6481375223bf836647",children:"17 seconds"}),"  | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/0f1187556f50476484c71e182151c70c",children:"20 seconds"}),(0,a.jsx)(s.br,{}),"\n","Safari 5            | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/4bc307aec4d9467e85538d29ac9929d1",children:"18 seconds"}),"  | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/8bd1c7fbb2604429ba903f0a814ee9df",children:"18 seconds"})]}),"\n",(0,a.jsx)(s.h3,{id:"finding-elements-by-traversing",children:"Finding Elements By Traversing"}),"\n",(0,a.jsxs)(s.p,{children:["Browser | CSS | XPath",(0,a.jsx)(s.br,{}),"\n","Internet Explorer 8 | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/4caa9a370f234359afbd31bb86ae3089",children:"not supported"}),"  | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/8405a88ef187475d9ca191fb2adf5634",children:"29 seconds"}),(0,a.jsx)(s.br,{}),"\n","Chrome 31           | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/cdae032631a34f87b75ca1daadbaf6cf",children:"24 seconds"}),"  | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/cae82a0567d845858c35602d34558f8c",children:"26 seconds"}),(0,a.jsx)(s.br,{}),"\n","Firefox 26          | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/62192045bf2149e6bae5f1010b491810",children:"27 seconds"}),"  | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/50dc24e1e484489cbe8eaa8eb2cebbf1",children:"27 seconds"}),(0,a.jsx)(s.br,{}),"\n","Opera 12            | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/399fbd76410d42ca9207ed829da93952",children:"25 seconds"}),"  | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/0f4bd7a9ab8c4bdcb5d0bef91043c41b",children:"25 seconds"}),(0,a.jsx)(s.br,{}),"\n","Safari 5            | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/9247cb6c27c9431b8f5d555ee00e22c3",children:"23 seconds"}),"  | ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/tests/7cf2656786094645b9fcf2329f452c80",children:"22 seconds"})]}),"\n",(0,a.jsx)(s.h2,{id:"what-the-results-tell-us",children:"What The Results Tell Us"}),"\n",(0,a.jsx)(s.p,{children:"The results help illustrate and illuminate a couple of things."}),"\n",(0,a.jsxs)(s.p,{children:["For starters there is no dramatic difference in performance between XPath and CSS. This is surprising since\nit is ",(0,a.jsx)(s.a,{href:"http://stackoverflow.com/questions/13975595/why-one-should-prefer-using-css-over-xpath-in-ie/14139380#14139380",children:"the main reason cited in favor of CSS"}),".\nThere may be other functionality or page structures that demonstrates this speed gap (e.g. more dense and\ncomplex pages), but it's not readily apparent -- and I'm skeptical that it would make a substantial impact\n(e.g. the order of magnitude difference demonstrated by ",(0,a.jsx)(s.a,{href:"https://twitter.com/santiycr",children:"Santi"})," in ",(0,a.jsx)(s.a,{href:"http://www.youtube.com/watch?v=6vPu3TO6XZ4",children:"a presentation at the SF Selenium Meetup back in 2011"}),")."]}),"\n",(0,a.jsx)(s.p,{children:"Traversing the DOM in older browsers like Internet Explorer 8 does not work with CSS but is fine with XPath. And\nXPath can walk up the DOM (e.g. from child to parent), whereas CSS can only traverse down the DOM (e.g.\nfrom parent to child)."}),"\n",(0,a.jsx)(s.p,{children:"Based on the data, XPath looks more favorable than it once was."}),"\n",(0,a.jsx)(s.h2,{id:"some-additional-food-for-thought",children:"Some Additional Food For Thought"}),"\n",(0,a.jsxs)(s.p,{children:["Not being able to traverse the DOM with CSS in older browsers isn't necessarily a bad thing. To me, it's more of an\nindicator that your page has poor design and could benefit from some helpful markup. I outline an approach\nin ",(0,a.jsx)(s.a,{href:"https://elementalselenium.com/docs/how-to-work-with-tables/25-tables",children:"a previous tip"}),' under the heading\n"But What About Older Browsers?".']}),"\n",(0,a.jsxs)(s.p,{children:["Some other arguments in favor of CSS are that they are more readable, brief, and concise. While I tend to agree,\nit is a subjective call. Sauce Labs has\n",(0,a.jsx)(s.a,{href:"https://saucelabs.com/resources/blog/selenium-tips-css-selectors",children:"a good set of examples that demonstrate CSS and XPath side-by-side to accomplish both simple and advanced tasks"}),".\nIt's worth a look for you to determine for yourself."]}),"\n",(0,a.jsxs)(s.p,{children:["In ",(0,a.jsx)(s.a,{href:"https://twitter.com/bjburton",children:"Ben Burton"}),"'s talk (",(0,a.jsx)(s.a,{href:"http://vimeo.com/44133409",children:"Selenium WebDriver Best Practices"}),") he posits that you\nshould use CSS because that's how applications are built. This makes the tests easier to write, talk about, and have\nothers help maintain. This is also a point that Santi makes in his presentation."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://twitter.com/adamgoucher",children:"Adam Goucher"}),"'s advice is to adopt a more hybrid approach -- focusing first on IDs, then CSS, and leveraging\nXPath only when you ",(0,a.jsx)(s.strong,{children:"need"})," it (e.g. walking up the DOM). He says he does this without hesitation because it's\nthe right tool for the task, and that XPath will always be more powerful for advanced locators."]}),"\n",(0,a.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(s.p,{children:"So, which do you choose?"}),"\n",(0,a.jsxs)(s.p,{children:["It's a tough call to make. Especially now that we're armed with the knowledge that the choice is not as reliant\non performance as it once was. But the choice is not as permanent as\n",(0,a.jsx)(s.a,{href:"https://elementalselenium.com/docs/adding-a-language/21-choosing-a-language",children:"choosing a programming language"}),", and\nif you are using helpful abstraction (e.g. ",(0,a.jsx)(s.a,{href:"https://elementalselenium.com/docs/use-a-page-object/7-use-a-page-object",children:"Page Objects"}),")\nthen leveraging a hybrid approach is simple to implement."]}),"\n",(0,a.jsx)(s.p,{children:"It's just a matter of finding what works for you and your team and not listening to all the hype."}),"\n",(0,a.jsx)(s.p,{children:"Good luck and Happy Testing!"})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);