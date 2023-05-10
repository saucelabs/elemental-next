"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const r={title:"40: Disabled Element",id:"40-disabled-element-csharp",contentUrl:"docs/disabled-element/40-disabled-element-csharp",sidebar_label:"Csharp",text:"On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain.",number:40,hide_table_of_contents:!0,publish_date:new Date("2015-07-06T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")},tags:["dropdown list","dropdown lists","disabled element"],level:2,category:["remote","troubleshooting"],language:"csharp"},i="How to Test For Disabled Elements",o={unversionedId:"disabled-element/40-disabled-element-csharp",id:"disabled-element/40-disabled-element-csharp",title:"40: Disabled Element",description:"Intro",source:"@site/docs/40-disabled-element/csharp.md",sourceDirName:"40-disabled-element",slug:"/disabled-element/40-disabled-element-csharp",permalink:"/elemental-next/docs/disabled-element/40-disabled-element-csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/40-disabled-element/csharp.md",tags:[{label:"dropdown list",permalink:"/elemental-next/docs/tags/dropdown-list"},{label:"dropdown lists",permalink:"/elemental-next/docs/tags/dropdown-lists"},{label:"disabled element",permalink:"/elemental-next/docs/tags/disabled-element"}],version:"current",frontMatter:{title:"40: Disabled Element",id:"40-disabled-element-csharp",contentUrl:"docs/disabled-element/40-disabled-element-csharp",sidebar_label:"Csharp",text:"On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain.",number:40,hide_table_of_contents:!0,publish_date:"2015-07-06T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"},tags:["dropdown list","dropdown lists","disabled element"],level:2,category:["remote","troubleshooting"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/drag-and-drop/39-drag-and-drop-ruby"},next:{title:"Java",permalink:"/elemental-next/docs/disabled-element/40-disabled-element-java"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-test-for-disabled-elements"},"How to Test For Disabled Elements"),(0,l.kt)("h2",{id:"intro"},"Intro"),(0,l.kt)("p",null,"On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain."),(0,l.kt)("h2",{id:"a-solution"},"A Solution"),(0,l.kt)("p",null,"If we look at ",(0,l.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_IWebElement.htm"},"the API documentation for Selenium's IWebElement Interface")," we can see there is an available method called ",(0,l.kt)("inlineCode",{parentName:"p"},"Enabled")," that can help us accomplish what we want."),(0,l.kt)("p",null,"Let's take a look at how to use it."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"For this example we will use ",(0,l.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the dropdown list")," from ",(0,l.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"the-internet"),". In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is in fact disabled."),(0,l.kt)("p",null,"Let's start by including our requisite classes for our test framework (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), and start our class off with some setup and teardown methods."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: DisabledElements.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing OpenQA.Selenium.Support.UI;\n\npublic class DisabledElements\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,l.kt)("p",null,"Now to wire up our test."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: DisabledElements.cs\n// ...\n    [Test]\n    public void ElementDisabled()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/dropdown");\n        var Dropdown = new SelectElement(Driver.FindElement(By.Id("dropdown")));\n        // The SelectedOption we want is selected by default on page load\n        Assert.False(Dropdown.SelectedOption.Enabled);\n    }\n}\n')),(0,l.kt)("p",null,"After visiting the page we find the dropdown list with the ",(0,l.kt)("inlineCode",{parentName:"p"},"SelectElement")," function and store it in a variable. We then use in our assertion, focusing on the currently selected option which is the first one by default on page load (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"Dropdown.SelectedOption"),") and check that it is enabled (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},".Enabled"),"). This will return a boolean result. If the element is disabled (e.g., not selectable) then Selenium will return ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". So that's what we use in our assertion (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"Assert.False"),")."),(0,l.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,l.kt)("p",null,"When you save this file and run it (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\DisabledElements.sln")," from the command-line) here is what will happen:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open a browser"),(0,l.kt)("li",{parentName:"ul"},"Visit the page"),(0,l.kt)("li",{parentName:"ul"},"Grab the dropdown list"),(0,l.kt)("li",{parentName:"ul"},"Assert that the target element is not enabled"),(0,l.kt)("li",{parentName:"ul"},"Close the browser")),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"Hopefully this tip has helped make the task of seeing whether or not an element is enabled or disabled more approachable."),(0,l.kt)("p",null,"Happy Testing!"),(0,l.kt)("h2",{id:"about-the-author"},"About The Author"),(0,l.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,l.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);