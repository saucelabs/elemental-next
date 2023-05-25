"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7836],{3905:(t,e,o)=>{o.d(e,{Zo:()=>h,kt:()=>y});var a=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var u=a.createContext({}),l=function(t){var e=a.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},h=function(t){var e=l(t.components);return a.createElement(u.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,u=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),d=l(o),p=n,y=d["".concat(u,".").concat(p)]||d[p]||c[p]||r;return o?a.createElement(y,i(i({ref:e},h),{},{components:o})):a.createElement(y,i({ref:e},h))}));function y(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[d]="string"==typeof t?t:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},163:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=o(7462),n=(o(7294),o(3905));const r={title:"How To Figure Out What to Update",id:"18-what-to-test",contentUrl:"docs/how-to-figure-out-what-to-update/18-what-to-test",sidebar_label:"Ruby",text:"There is a lot to figure out when it comes to automated web testing, but where do you start? If you've already started, how do you know you're on the right track? And how do you avoid testing everything in every browser without missing important issues?",number:18,hide_table_of_contents:!0,publish_date:new Date("2015-10-13T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["test strategy"],level:1,category:["fundamentals"],language:"all"},i="How to Figure Out What to Test",s={unversionedId:"how-to-figure-out-what-to-update/18-what-to-test",id:"how-to-figure-out-what-to-update/18-what-to-test",title:"How To Figure Out What to Update",description:"Intro",source:"@site/docs/18-how-to-figure-out-what-to-update/ruby.mdx",sourceDirName:"18-how-to-figure-out-what-to-update",slug:"/how-to-figure-out-what-to-update/18-what-to-test",permalink:"/elemental-next/docs/how-to-figure-out-what-to-update/18-what-to-test",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/18-how-to-figure-out-what-to-update/ruby.mdx",tags:[{label:"test strategy",permalink:"/elemental-next/docs/tags/test-strategy"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"How To Figure Out What to Update",id:"18-what-to-test",contentUrl:"docs/how-to-figure-out-what-to-update/18-what-to-test",sidebar_label:"Ruby",text:"There is a lot to figure out when it comes to automated web testing, but where do you start? If you've already started, how do you know you're on the right track? And how do you avoid testing everything in every browser without missing important issues?",number:18,hide_table_of_contents:!0,publish_date:"2015-10-13T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["test strategy"],level:1,category:["fundamentals"],language:"all"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/retrieve-http-status-codes/17-retrieve-http-status-codes-ruby"},next:{title:"Ruby",permalink:"/elemental-next/docs/data-driven-testing/19-data-driven-testing-ruby"}},u={},l=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"What To Do With The Answers",id:"what-to-do-with-the-answers",level:2},{value:"Question 1 - Money/Value",id:"question-1---moneyvalue",level:3},{value:"Question 2 - Usage Data",id:"question-2---usage-data",level:3},{value:"Question 3 - Browsers",id:"question-3---browsers",level:3},{value:"Question 4 - Risky Bits",id:"question-4---risky-bits",level:3},{value:"Now You Are Ready",id:"now-you-are-ready",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],h={toc:l},d="wrapper";function c(t){let{components:e,...r}=t;return(0,n.kt)(d,(0,a.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-figure-out-what-to-test"},"How to Figure Out What to Test"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"There is a lot to figure out when it comes to automated web testing, but where do you start? If you've already started, how do you know you're on the right track? And how do you avoid testing everything in every browser without missing important issues?"),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"A great way to increase your chances of automated web testing success is to map out a testing strategy. The best way to do this is to answer these four questions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"How does your business make money?"),(0,n.kt)("li",{parentName:"ol"},"How do your users use your application?"),(0,n.kt)("li",{parentName:"ol"},"What browsers are your users using?"),(0,n.kt)("li",{parentName:"ol"},"What things have broken in the application before?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE: for organizations that don't deal ",(0,n.kt)("em",{parentName:"strong"},"directly")," in dollars and cents (e.g. non-profits, federal agencies, etc.) you should focus on how the application generates value for the end user.")),(0,n.kt)("p",null,"After answering these questions you'll have a better understanding of the critical functionality and relevant browsers for the application you're testing. This will help you focus your test automation efforts on the things that matter most."),(0,n.kt)("p",null,"You'll want to keep track of these items somehow -- the recommended approach is to use a prioritized backlog."),(0,n.kt)("h2",{id:"what-to-do-with-the-answers"},"What To Do With The Answers"),(0,n.kt)("h3",{id:"question-1---moneyvalue"},"Question 1 - Money/Value"),(0,n.kt)("p",null,"Every company's application makes money (or generates value) through a core set of functionality -- a.k.a. a 'funnel'. Your answers to this question will help you determine what functionality makes up the funnel. This will be your highest priority for test automation."),(0,n.kt)("h3",{id:"question-2---usage-data"},"Question 2 - Usage Data"),(0,n.kt)("p",null,"There can be a big difference between how you think your application is used  and how your users actually use it. Odds are your application offers a robust set of functionality that grows well beyond the core functionality of the funnel."),(0,n.kt)("p",null,"Your answers to this question will help you determine what features are highly used and lightly used. Add the highly used items onto your automation backlog based on order of use below the answers to question 1."),(0,n.kt)("h3",{id:"question-3---browsers"},"Question 3 - Browsers"),(0,n.kt)("p",null,"Now that you know what functionality is business critical and widely adopted by your users, you need to determine what browsers to focus your automated web testing efforts on. Your usage data will tell you this as well. It will help you determine which browsers you can reasonably avoid testing in (e.g. based on non-existent or low usage numbers)."),(0,n.kt)("p",null,"Note the top 2 browsers (or 3 depending on your numbers), but focus on the top 1 for now. This is the browser you will start writing your automated tests in."),(0,n.kt)("h3",{id:"question-4---risky-bits"},"Question 4 - Risky Bits"),(0,n.kt)("p",null,"To round out the strategy it is best to think about what things have broken in the application before. You might be able to glean some of this information from a defect tracker but the best information is often in the minds of your colleagues. Ask around and see what they say."),(0,n.kt)("p",null,"What you come up with will likely read like a laundry list of browser specific issues or functionality that has been flaky or forgotten about in the past. Be sure to check this list against your automation backlog. If you've come across something that's not already in the backlog, add it and put it at the bottom. If it is there, make a note in the backlog item that this has been an issue in the past. If the issue has happened numerous times and has the potential to occur again, move the item up in the backlog priority."),(0,n.kt)("p",null,"If issues keep cropping up that are related to a specific browser, compare this browser to your short list from question #3. If it's a browser that's not in your list but it's a small pocket of high value users, track it on the backlog but put it at the bottom."),(0,n.kt)("h2",{id:"now-you-are-ready"},"Now You Are Ready"),(0,n.kt)("p",null,"Having answered these questions you should now have a prioritized backlog of critical functionality that's backed up by usage data, a short list of browsers to focus on, and an understanding of the risky parts of your application. With it you can make sure you are on the right track with your test automation (regardless if you're just getting started with test automation or already have a mature test automation practice)."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Hopefully this strategy will help you focus your testing efforts, avoid wasting time, and increase your confidence in the approach you are taking."),(0,n.kt)("p",null,"This strategy works best for applications with existing functionality and does not speak directly to testing new functionality that's being actively developed. That's not to say that the two couldn't co-exist. It largely depends on your available resources and pace of development but in order to reach high quality at speed, you first have to go slow."),(0,n.kt)("h2",{id:"about-the-author"},"About the Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dave Haeffner profile picture",src:o(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},9417:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);