"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6415],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=u(a),p=o,h=c["".concat(s,".").concat(p)]||c[p]||d[p]||r;return a?n.createElement(h,i(i({ref:t},g),{},{components:a})):n.createElement(h,i({ref:t},g))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4817:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const r={title:"21: Choosing a Programming Language",id:"21-choosing-a-language",contentUrl:"docs/adding-a-language/21-choosing-a-language",text:"In order to work well with Selenium you need to choose a programming language to write your acceptance tests in. This guide will help you determine which language to choose for testing.",number:21,hide_table_of_contents:!0,publish_date:new Date("2015-10-13T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["programming language","frameworks"],level:1,category:["resources"],language:"all"},i="How to Pick a Programming Language",l={unversionedId:"adding-a-language/21-choosing-a-language",id:"adding-a-language/21-choosing-a-language",title:"21: Choosing a Programming Language",description:"Intro",source:"@site/docs/21-adding-a-language/adding-a-language.md",sourceDirName:"21-adding-a-language",slug:"/adding-a-language/21-choosing-a-language",permalink:"/elemental-next/docs/adding-a-language/21-choosing-a-language",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/21-adding-a-language/adding-a-language.md",tags:[{label:"programming language",permalink:"/elemental-next/docs/tags/programming-language"},{label:"frameworks",permalink:"/elemental-next/docs/tags/frameworks"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"21: Choosing a Programming Language",id:"21-choosing-a-language",contentUrl:"docs/adding-a-language/21-choosing-a-language",text:"In order to work well with Selenium you need to choose a programming language to write your acceptance tests in. This guide will help you determine which language to choose for testing.",number:21,hide_table_of_contents:!0,publish_date:"2015-10-13T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["programming language","frameworks"],level:1,category:["resources"],language:"all"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/data-driven-testing/19-data-driven-testing-ruby"},next:{title:"Ruby",permalink:"/elemental-next/docs/locator-strategy/22-locator-strategy-ruby"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],g={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-pick-a-programming-language"},"How to Pick a Programming Language"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"In order to work well with Selenium you need to choose a programming language to write your acceptance tests in. This guide will help you determine which language to choose for testing."),(0,o.kt)("p",null,"It might seem like a good idea to choose the same language that the application you're testing is written in, because if you get stuck you can ask the developers on your team for help."),(0,o.kt)("p",null,"But if you're not proficient in this language (or new to software development), then your progress will be slow and you'll likely end up asking for more developer help than they have time for which could hinder your automation efforts and slow your testing progress."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"A great way to determine which language to go with is to answer one simple question: ",(0,o.kt)("strong",{parentName:"p"},"Who will own the automated tests?")),(0,o.kt)("p",null,"The answer to this, and the discussion that unfolds from it, will help you more effectively choose a programming language for test automation."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"If you're a tester (or a team of testers) and you will be building and maintaining the test automation, then it's best to consider what languages you (and your team) already have experience with, or are interested in gaining, rather than what the application you're testing is built in. Have a discussion with your team to see what interests them."),(0,o.kt)("p",null,"For example, there's not much advantage in writing your test automation in Java if your team has no previous development experience and will be the ones owning it. Instead, try to choose a language that is more approachable -- e.g. a scripting language like Ruby or Python. But if you're a developer that is working on the application and just looking to add automated acceptance testing to the mix then it makes sense to continue with the same language."),(0,o.kt)("p",null,"As your suite of tests grow you will find the need to add functionality to make things easier to use, run faster, offer better reporting, etc. When this happens you will effectively be doing two jobs -- building a test harness (a.k.a. a Selenium framework) AND writing automated tests."),(0,o.kt)("p",null,"As you're considering which language to go with, consider what open source frameworks already exist for the languages you're considering. Going with one that's already built will save you a lot of time and give you a host of functionality out of the box that you would otherwise have to build and maintain yourself -- and it's FREE."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Choosing a programming language for automated testing is not a decision that should be taken lightly. If you're just starting out (or looking to port your tests) then considering and discussing this will help position you for greater success."),(0,o.kt)("p",null,"For a second and third opinion on this topic you can read Adam Goucher and Joe Colantonio's takes ",(0,o.kt)("a",{parentName:"p",href:"https://saucelabs.com/resources/blog/stop-being-a-language-snob-debunking-the-but-our-application-is-written-in-x-myth-guest-post"},"here")," and ",(0,o.kt)("a",{parentName:"p",href:"http://www.joecolantonio.com/2015/05/31/selenium-what-programming-language-you-should-learn-to-get-into-test-automation/"},"here"),"."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);