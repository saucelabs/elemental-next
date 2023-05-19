"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={title:"8: Download A File Revisited",id:"8-download-a-file-revisited-csharp",contentUrl:"docs/download-a-file-revisited/8-download-a-file-revisited-csharp",sidebar_label:"Csharp",text:"In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.",number:8,hide_table_of_contents:!0,publish_date:new Date("2015-08-20T00:00:00.000Z"),last_update:{date:new Date("2023-03-29T00:00:00.000Z")},tags:["files","downloading"],level:2,category:["remote"],language:"csharp"},i="How to Download a File Without a Browser",l={unversionedId:"download-a-file-revisited/8-download-a-file-revisited-csharp",id:"download-a-file-revisited/8-download-a-file-revisited-csharp",title:"8: Download A File Revisited",description:"Intro",source:"@site/docs/8-download-a-file-revisited/csharp.md",sourceDirName:"8-download-a-file-revisited",slug:"/download-a-file-revisited/8-download-a-file-revisited-csharp",permalink:"/elemental-next/docs/download-a-file-revisited/8-download-a-file-revisited-csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/8-download-a-file-revisited/csharp.md",tags:[{label:"files",permalink:"/elemental-next/docs/tags/files"},{label:"downloading",permalink:"/elemental-next/docs/tags/downloading"}],version:"current",lastUpdatedBy:"Rajene Harris",lastUpdatedAt:1680048e3,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"8: Download A File Revisited",id:"8-download-a-file-revisited-csharp",contentUrl:"docs/download-a-file-revisited/8-download-a-file-revisited-csharp",sidebar_label:"Csharp",text:"In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.",number:8,hide_table_of_contents:!0,publish_date:"2015-08-20T00:00:00.000Z",last_update:{date:"2023-03-29T00:00:00.000Z"},tags:["files","downloading"],level:2,category:["remote"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/use-a-page-object/7-use-a-page-object-ruby"},next:{title:"Java",permalink:"/elemental-next/docs/download-a-file-revisited/8-download-a-file-revisited-java"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-download-a-file-without-a-browser"},"How to Download a File Without a Browser"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"In a ",(0,o.kt)("a",{parentName:"p",href:"/tips/2-download-a-file"},"previous tip")," we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done."),(0,o.kt)("p",null,"While the previous method works, it requires a custom configuration that is inconsistent from browser to browser."),(0,o.kt)("p",null,"Ultimately, we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,o.kt)("em",{parentName:"p"},"can")," be downloaded, which we can do by using an HTTP client alongside Selenium in our test."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,o.kt)("em",{parentName:"p"},"can")," be downloaded. And we can do that by using an HTTP client alongside Selenium in our test."),(0,o.kt)("p",null,"With an HTTP library we can perform a header (or ",(0,o.kt)("inlineCode",{parentName:"p"},"HEAD"),") request for the file. Instead of downloading the file we'll receive header information for the file which contains information like the content type and content length (amongst other things). With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times (depending on the file size)."),(0,o.kt)("p",null,"Let's continue with an example."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"To start things off let's include our requisite classes for our test framework (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), an HTTP library to handle our HEAD request (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Net"),"), and start our class with some setup and teardown methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: FileDownloadRevisited.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System.Net;\n\npublic class FileDownloadRevisited\n{\n\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,o.kt)("p",null,"Now we're ready to wire up our test."),(0,o.kt)("p",null,"It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a ",(0,o.kt)("inlineCode",{parentName:"p"},"HEAD")," request with it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: FileDownloadRevisited.cs\n// ...\n    [Test]\n    public void CheckFileDownloadWithoutBrowser()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/download");\n        string FileURL = Driver.FindElement(By.CssSelector(".example a")).GetAttribute("href");\n        var Request = (HttpWebRequest)WebRequest.Create(FileURL);\n        Request.Method = "HEAD";\n        WebResponse Response = Request.GetResponse();\n        Assert.That(Response.ContentType.Equals("application/octet-stream"));\n        Assert.Greater(Response.ContentLength, 0);\n    }\n}\n')),(0,o.kt)("p",null,"Once we receive the response we check its header for the content type (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},'Assert.That(Response.ContentType.Equals("application/octet-stream"));'),") and content length (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"Assert.Greater(Response.ContentLength, 0);"),") to make sure the file is the correct type and not empty."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When you save this and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\FileDownloadRevisited.sln")," from the command-line) here is what will will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the browser"),(0,o.kt)("li",{parentName:"ul"},"Load the page"),(0,o.kt)("li",{parentName:"ul"},"Grab the URL of the first download link"),(0,o.kt)("li",{parentName:"ul"},"Perform a ",(0,o.kt)("inlineCode",{parentName:"li"},"HEAD")," request against it with an HTTP library"),(0,o.kt)("li",{parentName:"ul"},"Store the response headers"),(0,o.kt)("li",{parentName:"ul"},"Check the response headers to see that the file type is correct"),(0,o.kt)("li",{parentName:"ul"},"Check the response headers to see that the file is not empty"),(0,o.kt)("li",{parentName:"ul"},"Close the browser")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);