"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return a?r.createElement(m,i(i({ref:t},h),{},{components:a})):r.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={title:"How To Work With Hovers",id:"50-hovers-javascript",contentUrl:"docs/how-to-work-with-hovers/50-hovers-javascript",sidebar_label:"Javascript",text:"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution.",number:50,hide_table_of_contents:!0,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["hover","hovers","action builder"],level:1,category:["fundamentals"],language:"javascript"},i="How to Work with Hovers",s={unversionedId:"how-to-work-with-hovers/50-hovers-javascript",id:"how-to-work-with-hovers/50-hovers-javascript",title:"How To Work With Hovers",description:"Intro",source:"@site/docs/50-how-to-work-with-hovers/javascript.mdx",sourceDirName:"50-how-to-work-with-hovers",slug:"/how-to-work-with-hovers/50-hovers-javascript",permalink:"/elemental-next/docs/how-to-work-with-hovers/50-hovers-javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/50-how-to-work-with-hovers/javascript.mdx",tags:[{label:"hover",permalink:"/elemental-next/docs/tags/hover"},{label:"hovers",permalink:"/elemental-next/docs/tags/hovers"},{label:"action builder",permalink:"/elemental-next/docs/tags/action-builder"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"How To Work With Hovers",id:"50-hovers-javascript",contentUrl:"docs/how-to-work-with-hovers/50-hovers-javascript",sidebar_label:"Javascript",text:"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution.",number:50,hide_table_of_contents:!0,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["hover","hovers","action builder"],level:1,category:["fundamentals"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/elemental-next/docs/how-to-work-with-hovers/50-hovers-java"},next:{title:"Python",permalink:"/elemental-next/docs/how-to-work-with-hovers/50-hovers-python"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],h={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-work-with-hovers"},"How to Work with Hovers"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"The most popular use case for a hover action is to display additional menu options(submenu.)"),(0,n.kt)("p",null,"By leveraging Selenium's ",(0,n.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html"},"Actions")," we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Our example application is available ",(0,n.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/hovers"},"here")," on ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile."),(0,n.kt)("p",null,"We're going to write a test that will hover over the first avatar and make sure that this additional information appears."),(0,n.kt)("p",null,"First we'll include our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/hovers.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Hovers", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000)\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,n.kt)("p",null,"Now let's write our test."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/hovers.spec.js\n// ...\n  it("displays caption on hover", async function() {\n    await driver.get("http://the-internet.herokuapp.com/hovers");\n    const avatar = await driver.findElement(By.css(".figure"));\n    await driver\n      .actions({ bridge: true })\n      .move({ origin: avatar })\n      .perform();\n    const caption = await driver.findElement(By.css(".figcaption"));\n    assert(caption.isDisplayed());\n  });\n});\n')),(0,n.kt)("p",null,"After loading the page we find the first avatar and store it in a variable (",(0,n.kt)("inlineCode",{parentName:"p"},"avatar"),"). We then use the ",(0,n.kt)("inlineCode",{parentName:"p"},".move")," function and feed it the avatar variable (which triggers the hover)."),(0,n.kt)("p",null,"We then check to see if the additional user information is displayed with ",(0,n.kt)("inlineCode",{parentName:"p"},".isDisplayed")," in our assertion."),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("p",null,"When we save this file and run it (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the browser"),(0,n.kt)("li",{parentName:"ul"},"Visit the page"),(0,n.kt)("li",{parentName:"ul"},"Hover over the first avatar"),(0,n.kt)("li",{parentName:"ul"},"Assert that the caption appeared on the page"),(0,n.kt)("li",{parentName:"ul"},"Close the browser")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Hopefully this will help you handle more complex user interactions like hovers."),(0,n.kt)("p",null,"Happy Testing!"),(0,n.kt)("h2",{id:"about-the-author"},"About the Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dave Haeffner profile picture",src:a(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}p.isMDXComponent=!0},9417:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);