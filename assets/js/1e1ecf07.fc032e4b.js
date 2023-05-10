"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,p=m["".concat(s,".").concat(d)]||m[d]||h[d]||a;return r?n.createElement(p,i(i({ref:t},u),{},{components:r})):n.createElement(p,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"29: Chrome Driver",id:"29-chrome-driver-csharp",contentUrl:"docs/chrome-driver/29-chrome-driver-csharp",sidebar_label:"Csharp",text:"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started.",number:29,hide_table_of_contents:!0,publish_date:new Date("2016-11-26T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")},tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:["fundamentals","remote"],language:"csharp"},i="How to Run Your Tests Locally Against Chrome",l={unversionedId:"chrome-driver/29-chrome-driver-csharp",id:"chrome-driver/29-chrome-driver-csharp",title:"29: Chrome Driver",description:"Intro",source:"@site/docs/29-chrome-driver/csharp.md",sourceDirName:"29-chrome-driver",slug:"/chrome-driver/29-chrome-driver-csharp",permalink:"/elemental-next/docs/chrome-driver/29-chrome-driver-csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/29-chrome-driver/csharp.md",tags:[{label:"drivers",permalink:"/elemental-next/docs/tags/drivers"},{label:"chromedriver",permalink:"/elemental-next/docs/tags/chromedriver"},{label:"chrome",permalink:"/elemental-next/docs/tags/chrome"},{label:"different browsers",permalink:"/elemental-next/docs/tags/different-browsers"}],version:"current",frontMatter:{title:"29: Chrome Driver",id:"29-chrome-driver-csharp",contentUrl:"docs/chrome-driver/29-chrome-driver-csharp",sidebar_label:"Csharp",text:"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started.",number:29,hide_table_of_contents:!0,publish_date:"2016-11-26T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"},tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:["fundamentals","remote"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/cloud/26-cloud-ruby"},next:{title:"Java",permalink:"/elemental-next/docs/chrome-driver/29-chrome-driver-java"}},s={},c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:c},m="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-run-your-tests-locally-against-chrome"},"How to Run Your Tests Locally Against Chrome"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started."),(0,o.kt)("p",null,"With the introduction of WebDriver (circa Selenium 2) a lot of benefits were realized (e.g. more effective & faster browser execution, no more single host origin issues, etc). But with it came some architectural & configuration differences that may not be widely known. Namely -- browser drivers."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/"},"WebDriver")," works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"ChromeDriver")," is Google Chrome's browser driver. In this specific use case is of using WebDriver with Chrome in testing locally."),(0,o.kt)("p",null,"Let's step through an example using ChromeDriver (",(0,o.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"download here"),")."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,o.kt)("a",{parentName:"p",href:"http://chromedriver.storage.googleapis.com/index.html"},"here"),". Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add it to the System PATH"),(0,o.kt)("li",{parentName:"ul"},"Specify it in the Selenium setup")),(0,o.kt)("p",null,"Let's start by including our requisite classes for our test framework (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"using NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"using OpenQA.Selenium"),", etc.), accessing C# methods to work with the local file system (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"using System.IO"),"), and start our class with some setup and teardown methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Chrome.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Chrome;\nusing System.IO;\n\npublic class Chrome\n{\n    IWebDriver Driver;\n    string VendorDirectory = Directory.GetParent(\n        Path.GetDirectoryName(typeof(Chrome).Assembly.Location)).\n            Parent.FullName + @"\\Vendor";\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new ChromeDriver(VendorDirectory);\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n')),(0,o.kt)("p",null,"Notice the field variable declaration for ",(0,o.kt)("inlineCode",{parentName:"p"},"VendorDirectory"),". With it we are effectively grabbing the full path of the project directory and appending the ",(0,o.kt)("inlineCode",{parentName:"p"},"Vendor")," directory to it. This is then put to use when creating an instance of Chrome (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"Driver = new ChromeDriver(VendorDirectory);"),")."),(0,o.kt)("p",null,"Now we're ready to add a test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Chrome.cs\n// ...\n    [Test]\n    public void PageLoads()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");\n        Assert.That(Driver.Title.Equals("The Internet"));\n    }\n}\n')),(0,o.kt)("p",null,"If we save this file and run the project (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Chrome.sln"),") it will launch an instance of Chrome, visit the homepage of ",(0,o.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/"},"the-internet"),", and assert that the page title loaded."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When you save this file and run the project (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Chrome.sln")," from the command-line) here is what will happen."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ChromeDriver starts"),(0,o.kt)("li",{parentName:"ul"},"Chrome opens"),(0,o.kt)("li",{parentName:"ul"},"Test runs"),(0,o.kt)("li",{parentName:"ul"},"Chrome closes"),(0,o.kt)("li",{parentName:"ul"},"ChromeDriver stops")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official ",(0,o.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference"},"Selenium Quick Reference page for Installing Browser Drivers"),"."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}h.isMDXComponent=!0}}]);