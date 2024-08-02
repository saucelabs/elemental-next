"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[17625],{17625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(74848),i=n(28453);const s={},o=void 0,a={id:"growl/_csharp",title:"_csharp",description:"Example",source:"@site/tips/53-growl/_csharp.mdx",sourceDirName:"53-growl",slug:"/growl/_csharp",permalink:"/tips/growl/_csharp",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/53-growl/_csharp.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How To Use Selenium Grid",permalink:"/tips/52-how-to-use-selenium-grid"},next:{title:"_java",permalink:"/tips/growl/_java"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["First let's include our requisite classes for our test framework (e.g., ",(0,r.jsx)(t.code,{children:"NUnit.Framework"}),"), driving the browser with Selenium (e.g., ",(0,r.jsx)(t.code,{children:"OpenQA.Selenium"}),", etc.), access to C#'s Thread.Sleep function (e.g., ",(0,r.jsx)(t.code,{children:"System.Threading"}),"), and start our class off with some setup and teardown methods."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"// filename: Growl.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System.Threading;\n\npublic class Growl\n{\n    IWebDriver Driver;\n    IJavaScriptExecutor JSDriver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n        JSDriver = (IJavaScriptExecutor) Driver;\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Next we'll need to visit the page we want to display notifications on and do some work with JavaScript to load ",(0,r.jsx)(t.a,{href:"http://jquery.com/",children:"jQuery"}),", jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"// filename: Growl.cs\n// ...\n    [Test]\n    public void GrowlNotificationExample()\n    {\n        Driver.Navigate().GoToUrl(\"http://the-internet.herokuapp.com\");\n\n        // check for jQuery, add it if it's not on the page\n        JSDriver.ExecuteScript(\"if (!window.jQuery) {\" +\n                               \"var jquery = document.createElement('script'); jquery.type = 'text/javascript';\" +\n                               \"jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';\" +\n                               \"document.getElementsByTagName('head')[0].appendChild(jquery);\" +\n                               \"}\");\n\n        // add jQuery Growl to the page\n        JSDriver.ExecuteScript(\"$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')\");\n\n        // add jQuery Growl Styles to the page\n        JSDriver.ExecuteScript(\"$('head').append(\\\"<link rel='stylesheet' \" +\n                               \"href='http://the-internet.herokuapp.com/css/jquery.growl.css' \" +\n                               \"type='text/css' />\\\");\");\n\n        // Adding 5 seconds of extra time\n        Thread.Sleep(5000);\n\n        // trigger a plain jQuery Growl notification to display on the page\n        JSDriver.ExecuteScript(\"$.growl({ title: 'GET', message: '/' });\");\n\n        // Adding 5 seconds of extra time to see 'GET' message\n        Thread.Sleep(5000);\n// ...\n"})}),"\n",(0,r.jsx)(t.p,{children:"If we wanted to see color-coded notifications we would use one of the following."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"// filename: Growl.cs\n// ...\n        JSDriver.ExecuteScript(\"$.growl.error({ title: 'ERROR', message: 'your message goes here' });\");\n        JSDriver.ExecuteScript(\"$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });\");\n        JSDriver.ExecuteScript(\"$.growl.notice({ title: 'Warning!', message: 'your warning message goes here' });\");\n        Thread.Sleep(5000);\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Thread.Sleep(5000);"})," is there for demonstration purposes. It will keep the Growl notifications on the page for 5 seconds, so they're easier to see. However, if your test fails due to ",(0,r.jsx)(t.code,{children:"growl"}),", you can also use ",(0,r.jsx)(t.code,{children:"Thread.Sleep(5000);"})," to add some more time to your test."]}),"\n",(0,r.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(t.p,{children:["When you save this file and run it (e.g., ",(0,r.jsx)(t.code,{children:"nunit3-console.exe .\\Growl.sln"})," from the command-line) this is what will happen:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Browser opens"}),"\n",(0,r.jsx)(t.li,{children:"Visit the page"}),"\n",(0,r.jsx)(t.li,{children:"Make sure jQuery is on the page, add it if it's not"}),"\n",(0,r.jsx)(t.li,{children:"Add jQuery Growl and its styles to the page"}),"\n",(0,r.jsx)(t.li,{children:"Display a set of notification messages in the top-right corner of the page with jQuery Growl"}),"\n",(0,r.jsx)(t.li,{children:"Notification messages disappear after 5 seconds"}),"\n",(0,r.jsx)(t.li,{children:"Browser closes"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"In order to use this approach you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this, then that's the price you have to pay (unless you can get your team to add it to the application under test)."}),"\n",(0,r.jsxs)(t.p,{children:["I'd like to give a big thanks to Jon Austen (",(0,r.jsx)(t.a,{href:"https://twitter.com/austenjt",children:"Twitter"}),", ",(0,r.jsx)(t.a,{href:"https://github.com/djangofan",children:"GitHub"}),", ",(0,r.jsx)(t.a,{href:"http://jonausten.info/",children:"Blog"}),") for giving me the idea to use jQuery Growl with Selenium."]}),"\n",(0,r.jsx)(t.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);