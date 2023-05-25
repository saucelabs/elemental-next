"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={title:"Growl",id:"53-growl-javascript",contentUrl:"docs/growl/53-growl-javascript",sidebar_label:"Javascript",text:"Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece all for the sake of trying to track down a transient issue.",number:53,hide_table_of_contents:!0,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-03-28T00:00:00.000Z")},tags:["jquery","growl","growl notifications","jquery-growl"],level:2,category:["troubleshooting"],language:"javascript"},i="How to Add Growl Notifications to Your Tests",l={unversionedId:"growl/53-growl-javascript",id:"growl/53-growl-javascript",title:"Growl",description:"Intro",source:"@site/docs/53-growl/javascript.mdx",sourceDirName:"53-growl",slug:"/growl/53-growl-javascript",permalink:"/elemental-next/docs/growl/53-growl-javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/53-growl/javascript.mdx",tags:[{label:"jquery",permalink:"/elemental-next/docs/tags/jquery"},{label:"growl",permalink:"/elemental-next/docs/tags/growl"},{label:"growl notifications",permalink:"/elemental-next/docs/tags/growl-notifications"},{label:"jquery-growl",permalink:"/elemental-next/docs/tags/jquery-growl"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1679961600,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{title:"Growl",id:"53-growl-javascript",contentUrl:"docs/growl/53-growl-javascript",sidebar_label:"Javascript",text:"Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece all for the sake of trying to track down a transient issue.",number:53,hide_table_of_contents:!0,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-03-28T00:00:00.000Z"},tags:["jquery","growl","growl notifications","jquery-growl"],level:2,category:["troubleshooting"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/elemental-next/docs/growl/53-growl-java"},next:{title:"Python",permalink:"/elemental-next/docs/growl/53-growl-python"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-add-growl-notifications-to-your-tests"},"How to Add Growl Notifications to Your Tests"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece -- all for the sake of trying to track down a transient issue."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"By leveraging something like ",(0,n.kt)("a",{parentName:"p",href:"http://ksylvest.github.io/jquery-growl/"},"jQuery Growl")," you can output non-interactive debugging statements directly to the page you're testing."),(0,n.kt)("p",null,"With Growl way you can see helpful information and more-likely correlate it to the test actions that are being taken. This can a boon for your test runs when coupled with screenshots and/or video recordings of your test runs"),(0,n.kt)("p",null,"Let's step through an example of how to set this up."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"First we'll need to pull in our requisite libraries, declare our test suite, and wire up some setup and teardown methods."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/growl.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Growl", function() {\n  let driver;\n\n  beforeEach(async function() {\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,n.kt)("p",null,"Now for our test. We'll need to visit the page we want to display notifications on and do some work with JavaScript to load ",(0,n.kt)("a",{parentName:"p",href:"http://jquery.com/"},"jQuery"),", jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// filename: test/growl.spec.js\n// ...\n  it(\"runs and shows growl debugging output\", async function() {\n    await driver.get(\"http://the-internet.herokuapp.com\");\n\n    // check for jQuery on the page, add it if needed\n    await driver.executeScript(\n      `if (!window.jQuery) { var jquery = document.createElement('script'); jquery.type = 'text/javascript'; jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'; document.getElementsByTagName('head')[0].appendChild(jquery);}`\n    );\n\n    // use jQuery to add jquery-growl to the page\n    await driver.executeScript(\n      \"$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js');\"\n    );\n\n    // use jQuery to add jquery-growl styles to the page\n    await driver.executeScript(\n      `$('head').append(\"<link rel=stylesheet href=http://the-internet.herokuapp.com/css/jquery.growl.css type=text/css />\");`\n    );\n\n    await driver.sleep(1000);\n\n    await driver.executeScript(\"$.growl({ title: 'GET', message: '/' });\");\n\n    await driver.sleep(3000);\n  });\n});\n")),(0,n.kt)("p",null,"In addition to loading the scripts and styles, we also need to have Selenium work at the right pace for our needs. So we add a slight delay (e.g., 1 second) before the call to jquery-growl to make sure it will be available. After that, we add a slightly longer delay (e.g., 3 seconds) so the rendered growl notification stays on the page long enough for viewing."),(0,n.kt)("p",null,"If we wanted to see color-coded notifications, then we could use one of the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// filename: test/growl.spec.js\n// ...\n  it(\"runs and shows growl debugging output\", async function() {\n    // ...\n    await driver.executeScript(\n      \"$.growl.error({ title: 'ERROR', message: 'your error message goes here' });\"\n    );\n    await driver.executeScript(\n      \"$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });\"\n    );\n    await driver.executeScript(\n      \"$.growl.warning({ title: 'Warning!', message: 'your warning message goes here' });\"\n    );\n\n    await driver.sleep(3000);\n  });\n});\n")),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("p",null,"When we save this file and run it (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha"),") here is what will happen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Browser opens"),(0,n.kt)("li",{parentName:"ul"},"Load the page"),(0,n.kt)("li",{parentName:"ul"},"Add jQuery, jQuery Growl, and jQuery Growl notifications to the page"),(0,n.kt)("li",{parentName:"ul"},"Display a set of notification messages in the top-right corner of the page"),(0,n.kt)("li",{parentName:"ul"},"Notification messages disappear"),(0,n.kt)("li",{parentName:"ul"},"Browser closes")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this then that's the price you have to pay (unless you can get your team to add it to the application under test)."),(0,n.kt)("p",null,"I'd like to give a big thanks to Jon Austen (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/djangofan"},"GitHub"),") for giving me the idea to use jQuery Growl with Selenium."),(0,n.kt)("p",null,"Happy Testing!"),(0,n.kt)("h2",{id:"about-the-author"},"About the Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dave Haeffner profile picture",src:r(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}d.isMDXComponent=!0},9417:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);