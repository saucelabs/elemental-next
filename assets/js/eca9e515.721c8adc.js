"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6436],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={language:"javascript",level:2,hide_sidebar:!0,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-03-28T00:00:00.000Z")}},l=void 0,o={unversionedId:"right-click/javascript",id:"right-click/javascript",title:"javascript",description:"A Solution",source:"@site/docs/63-right-click/javascript.md",sourceDirName:"63-right-click",slug:"/right-click/javascript",permalink:"/docs/right-click/javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/63-right-click/javascript.md",tags:[],version:"current",lastUpdatedBy:"discombobulateme",lastUpdatedAt:1679961600,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{language:"javascript",level:2,hide_sidebar:!0,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-03-28T00:00:00.000Z"}}},s={},c=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By leveraging Selenium's ",(0,r.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html"},"Actions")," we can issue a right-click command (a.k.a. a ",(0,r.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html#contextClick"},(0,r.kt)("inlineCode",{parentName:"a"},"contextClick")),")."),(0,r.kt)("p",null,"You could then select an option from the menu by traversing it with keyboard keys (if a system dialog) or through ",(0,r.kt)("inlineCode",{parentName:"p"},"findElement")," (if a rendered element). It depends on how the application under test has implemented it."),(0,r.kt)("p",null,"Let's try an example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's start by pulling in our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/right-click.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Right click", function() {\n  let driver;\n\n  beforeEach(async function() {\n  this.timeout(60000)\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,r.kt)("p",null,"Now we're ready to write our test."),(0,r.kt)("p",null,"We'll use an example from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that will trigger a JavaScript alert when when we right-click on a specific area of the page (",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/context_menu"},"link"),"). It will say ",(0,r.kt)("inlineCode",{parentName:"p"},"You selected a context menu"),". We'll grab this text and use it to assert that the menu was actually triggered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/right-click.spec.js\n// ...\n  it("displays browser context menu", async function() {\n    await driver.get("http://the-internet.herokuapp.com/context_menu");\n    const menuArea = await driver.findElement(By.id("hot-spot"));\n    await driver\n      .actions({ bridge: true })\n      .contextClick(menuArea)\n      .perform();\n    const alertText = await driver\n      .switchTo()\n      .alert()\n      .getText();\n    assert(alertText === "You selected a context menu");\n  });\n});\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha"),") from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser and visit the page"),(0,r.kt)("li",{parentName:"ul"},"Find and right-click the area which will render a custom context menu"),(0,r.kt)("li",{parentName:"ul"},"JavaScript alert appears"),(0,r.kt)("li",{parentName:"ul"},"Grab the text of the JavaScript alert"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text from the alert is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"To learn more about context menus, you can read ",(0,r.kt)("a",{parentName:"p",href:"http://blog.teamtreehouse.com/building-html5-context-menus"},"this write-up from the Tree House blog"),"."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About the Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}m.isMDXComponent=!0},89417:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);