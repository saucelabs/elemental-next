"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8150],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={title:"How To Work With JavaScript Alerts",id:"51-javascript-alerts-javascript",contentUrl:"docs/how-to-work-with-javascript-alerts/51-javascript-alerts-javascript",sidebar_label:"Javascript",text:"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach.",number:51,hide_table_of_contents:!0,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["javascript","javascript alerts","javascript popups","javascript dialogs"],level:1,category:["fundamentals","tools"],language:"javascript"},o="How to Work with JavaScript Alerts",s={unversionedId:"how-to-work-with-javascript-alerts/51-javascript-alerts-javascript",id:"how-to-work-with-javascript-alerts/51-javascript-alerts-javascript",title:"How To Work With JavaScript Alerts",description:"Intro",source:"@site/docs/51-how-to-work-with-javascript-alerts/javascript.mdx",sourceDirName:"51-how-to-work-with-javascript-alerts",slug:"/how-to-work-with-javascript-alerts/51-javascript-alerts-javascript",permalink:"/docs/how-to-work-with-javascript-alerts/51-javascript-alerts-javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/51-how-to-work-with-javascript-alerts/javascript.mdx",tags:[{label:"javascript",permalink:"/docs/tags/javascript"},{label:"javascript alerts",permalink:"/docs/tags/javascript-alerts"},{label:"javascript popups",permalink:"/docs/tags/javascript-popups"},{label:"javascript dialogs",permalink:"/docs/tags/javascript-dialogs"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"How To Work With JavaScript Alerts",id:"51-javascript-alerts-javascript",contentUrl:"docs/how-to-work-with-javascript-alerts/51-javascript-alerts-javascript",sidebar_label:"Javascript",text:"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach.",number:51,hide_table_of_contents:!0,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["javascript","javascript alerts","javascript popups","javascript dialogs"],level:1,category:["fundamentals","tools"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/how-to-work-with-javascript-alerts/51-javascript-alerts-java"},next:{title:"Python",permalink:"/docs/how-to-work-with-javascript-alerts/51-javascript-alerts-python"}},l={},c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-work-with-javascript-alerts"},"How to Work with JavaScript Alerts"),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes."),(0,i.kt)("p",null,"A popular use case for alerts is in the case of error prevention for password restrictions."),(0,i.kt)("p",null,"If your application triggers any JavaScript pop-ups (a.k.a. alerts, dialogs, etc.) then you need to know how to handle them in your Selenium tests."),(0,i.kt)("h2",{id:"a-solution"},"A Solution"),(0,i.kt)("p",null,"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Our example application is available ",(0,i.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/javascript_alerts"},"here")," on ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Cancel"),")."),(0,i.kt)("p",null,"First, we'll include our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/js-alerts.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("JS Alerts", function() {\n  let driver;\n\n  beforeEach(async function() {\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,i.kt)("p",null,"Now let's write our test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/js-alerts.spec.js\n// ...\n  it("general use", async function() {\n    await driver.get("http://the-internet.herokuapp.com/javascript_alerts");\n    await driver.findElement(By.css("ul > li:nth-child(2) > button")).click();\n    const popup = await driver.switchTo().alert();\n    popup.accept();\n    const result = await driver.findElement(By.id("result")).getText();\n    assert(result == "You clicked: Ok");\n  });\n});\n')),(0,i.kt)("p",null,"A quick glance at the page's markup shows that there are no unique IDs on the buttons. In order to click on the second button (to trigger the JavaScript confirmation dialog) we need a locator which targets the second item in the unordered list."),(0,i.kt)("p",null,"After we click the button to trigger the JavaScript Alert we use Selenium's ",(0,i.kt)("inlineCode",{parentName:"p"},"switchTo().alert()")," to focus on the JavaScript pop-up and use ",(0,i.kt)("inlineCode",{parentName:"p"},".accept()")," to click ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok")," (if we wanted to click ",(0,i.kt)("inlineCode",{parentName:"p"},"Cancel")," we would have used ",(0,i.kt)("inlineCode",{parentName:"p"},".dismiss()"),")."),(0,i.kt)("p",null,"After accepting the alert, our main browser window will automatically regain focus and the page will display the result that we chose. This text is what we use for our assertion, making sure that the words ",(0,i.kt)("inlineCode",{parentName:"p"},"You clicked: Ok")," are displayed on the page."),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"When we save this file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the browser"),(0,i.kt)("li",{parentName:"ul"},"Load the page"),(0,i.kt)("li",{parentName:"ul"},"Click the second button on the page"),(0,i.kt)("li",{parentName:"ul"},"JavaScript Confirmation Alert appears"),(0,i.kt)("li",{parentName:"ul"},"Accept the JavaScript Confirmation Alert"),(0,i.kt)("li",{parentName:"ul"},"Assert that the result on the page is what we expect"),(0,i.kt)("li",{parentName:"ul"},"Close the browser")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"We've learned how to accept/dismiss Javascript alerts using Selenium Webdriver by locating the alert using Selenium's ",(0,i.kt)("inlineCode",{parentName:"p"},"switchTo().alert()"),". After accepting/dismissing the alert, our main browser window will automatically regain focus and the page will display the result."),(0,i.kt)("p",null,"Happy Testing!"),(0,i.kt)("h2",{id:"about-the-author"},"About The Author"),(0,i.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,i.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dave Haeffner profile picture",src:a(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}d.isMDXComponent=!0},9417:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);