"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[27213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},55618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={language:"csharp",level:2,hide_sidebar:!0,publish_date:new Date("2016-06-13T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")}},i=void 0,l={unversionedId:"growl/csharp",id:"growl/csharp",title:"csharp",description:"A Solution",source:"@site/docs/53-growl/csharp.md",sourceDirName:"53-growl",slug:"/growl/csharp",permalink:"/docs/growl/csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/53-growl/csharp.md",tags:[],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1680134400,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{language:"csharp",level:2,hide_sidebar:!0,publish_date:"2016-06-13T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"}}},s={},p=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"By leveraging something like ",(0,a.kt)("a",{parentName:"p",href:"http://ksylvest.github.io/jquery-growl/"},"jQuery Growl")," you can output non-interactive debugging statements directly to the page you're testing."),(0,a.kt)("p",null,"With Growl way you can see helpful information and more-likely correlate it to the test actions that are being taken. This can a boon for your test runs when coupled with screenshots and/or video recordings of your test runs"),(0,a.kt)("p",null,"Let's step through an example of how to set this up."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), access to C#'s Thread.Sleep function (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Threading"),"), and start our class off with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Growl.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System.Threading;\n\npublic class Growl\n{\n    IWebDriver Driver;\n    IJavaScriptExecutor JSDriver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n        JSDriver = (IJavaScriptExecutor) Driver;\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,a.kt)("p",null,"Next we'll need to visit the page we want to display notifications on and do some work with JavaScript to load ",(0,a.kt)("a",{parentName:"p",href:"http://jquery.com/"},"jQuery"),", jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Growl.cs\n// ...\n    [Test]\n    public void GrowlNotificationExample()\n    {\n        Driver.Navigate().GoToUrl(\"http://the-internet.herokuapp.com\");\n\n        // check for jQuery, add it if it's not on the page\n        JSDriver.ExecuteScript(\"if (!window.jQuery) {\" +\n                               \"var jquery = document.createElement('script'); jquery.type = 'text/javascript';\" +\n                               \"jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';\" +\n                               \"document.getElementsByTagName('head')[0].appendChild(jquery);\" +\n                               \"}\");\n\n        // add jQuery Growl to the page\n        JSDriver.ExecuteScript(\"$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')\");\n\n        // add jQuery Growl Styles to the page\n        JSDriver.ExecuteScript(\"$('head').append(\\\"<link rel='stylesheet' \" +\n                               \"href='http://the-internet.herokuapp.com/css/jquery.growl.css' \" +\n                               \"type='text/css' />\\\");\");\n\n        // Adding 5 seconds of extra time\n        Thread.Sleep(5000);\n\n        // trigger a plain jQuery Growl notification to display on the page\n        JSDriver.ExecuteScript(\"$.growl({ title: 'GET', message: '/' });\");\n\n        // Adding 5 seconds of extra time to see 'GET' message\n        Thread.Sleep(5000);\n// ...\n")),(0,a.kt)("p",null,"If we wanted to see color-coded notifications we would use one of the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Growl.cs\n// ...\n        JSDriver.ExecuteScript(\"$.growl.error({ title: 'ERROR', message: 'your message goes here' });\");\n        JSDriver.ExecuteScript(\"$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });\");\n        JSDriver.ExecuteScript(\"$.growl.notice({ title: 'Warning!', message: 'your warning message goes here' });\");\n        Thread.Sleep(5000);\n    }\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Thread.Sleep(5000);")," is there for demonstration purposes. It will keep the Growl notifications on the page for 5 seconds so they're easier to see. However, if your test fails due to ",(0,a.kt)("inlineCode",{parentName:"p"},"growl"),", you can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"Thread.Sleep(5000);")," to add some more time to your test."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Growl.sln")," from the command-line) this is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser opens"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Make sure jQuery is on the page, add it if it's not"),(0,a.kt)("li",{parentName:"ul"},"Add jQuery Growl and its styles to the page"),(0,a.kt)("li",{parentName:"ul"},"Display a set of notification messages in the top-right corner of the page with jQuery Growl"),(0,a.kt)("li",{parentName:"ul"},"Notification messages disappear after 5 seconds"),(0,a.kt)("li",{parentName:"ul"},"Browser closes")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In order to use this approach you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this, then that's the price you have to pay (unless you can get your team to add it to the application under test)."),(0,a.kt)("p",null,"I'd like to give a big thanks to Jon Austen (",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/austenjt"},"Twitter"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/djangofan"},"GitHub"),", ",(0,a.kt)("a",{parentName:"p",href:"http://jonausten.info/"},"Blog"),") for giving me the idea to use jQuery Growl with Selenium."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:r(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}d.isMDXComponent=!0},89417:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);