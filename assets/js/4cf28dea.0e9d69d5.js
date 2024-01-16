"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[76535],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94918:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={language:"javascript",level:1,hide_sidebar:!0,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")}},o=void 0,l={unversionedId:"how-to-work-with-hovers/javascript",id:"how-to-work-with-hovers/javascript",title:"javascript",description:"A Solution",source:"@site/docs/50-how-to-work-with-hovers/javascript.md",sourceDirName:"50-how-to-work-with-hovers",slug:"/how-to-work-with-hovers/javascript",permalink:"/docs/how-to-work-with-hovers/javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/50-how-to-work-with-hovers/javascript.md",tags:[],version:"current",lastUpdatedBy:"Esther",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{language:"javascript",level:1,hide_sidebar:!0,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"}}},s={},p=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"The most popular use case for a hover action is to display additional menu options(submenu.)"),(0,n.kt)("p",null,"By leveraging Selenium's ",(0,n.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html"},"Actions")," we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Our example application is available ",(0,n.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/hovers"},"here")," on ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile."),(0,n.kt)("p",null,"We're going to write a test that will hover over the first avatar and make sure that this additional information appears."),(0,n.kt)("p",null,"First we'll include our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/hovers.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Hovers", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000)\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,n.kt)("p",null,"Now let's write our test."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/hovers.spec.js\n// ...\n  it("displays caption on hover", async function() {\n    await driver.get("http://the-internet.herokuapp.com/hovers");\n    const avatar = await driver.findElement(By.css(".figure"));\n    await driver\n      .actions({ bridge: true })\n      .move({ origin: avatar })\n      .perform();\n    const caption = await driver.findElement(By.css(".figcaption"));\n    assert(caption.isDisplayed());\n  });\n});\n')),(0,n.kt)("p",null,"After loading the page we find the first avatar and store it in a variable (",(0,n.kt)("inlineCode",{parentName:"p"},"avatar"),"). We then use the ",(0,n.kt)("inlineCode",{parentName:"p"},".move")," function and feed it the avatar variable (which triggers the hover)."),(0,n.kt)("p",null,"We then check to see if the additional user information is displayed with ",(0,n.kt)("inlineCode",{parentName:"p"},".isDisplayed")," in our assertion."),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("p",null,"When we save this file and run it (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the browser"),(0,n.kt)("li",{parentName:"ul"},"Visit the page"),(0,n.kt)("li",{parentName:"ul"},"Hover over the first avatar"),(0,n.kt)("li",{parentName:"ul"},"Assert that the caption appeared on the page"),(0,n.kt)("li",{parentName:"ul"},"Close the browser")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Hopefully this will help you handle more complex user interactions like hovers."),(0,n.kt)("p",null,"Happy Testing!"),(0,n.kt)("h2",{id:"about-the-author"},"About the Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);