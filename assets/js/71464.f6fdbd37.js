"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[71464],{71464:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(74848),t=n(28453);const s={},o=void 0,a={id:"chrome-driver/_csharp",title:"_csharp",description:"Example",source:"@site/tips/29-chrome-driver/_csharp.mdx",sourceDirName:"29-chrome-driver",slug:"/chrome-driver/_csharp",permalink:"/tips/chrome-driver/_csharp",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/29-chrome-driver/_csharp.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172716874e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Upgrade from Selenium RC to WebDriver",permalink:"/tips/28-upgrading-from-rc"},next:{title:"_java",permalink:"/tips/chrome-driver/_java"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(r.p,{children:["Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,i.jsx)(r.a,{href:"http://chromedriver.storage.googleapis.com/index.html",children:"here"}),". Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Add it to the System PATH"}),"\n",(0,i.jsx)(r.li,{children:"Specify it in the Selenium setup"}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Let's start by including our requisite classes for our test framework (e.g., ",(0,i.jsx)(r.code,{children:"using NUnit.Framework"}),"), driving the browser with Selenium (e.g., ",(0,i.jsx)(r.code,{children:"using OpenQA.Selenium"}),", etc.), accessing C# methods to work with the local file system (e.g., ",(0,i.jsx)(r.code,{children:"using System.IO"}),"), and start our class with some setup and teardown methods."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-csharp",children:'// filename: Chrome.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Chrome;\nusing System.IO;\n\npublic class Chrome\n{\n    IWebDriver Driver;\n    string VendorDirectory = Directory.GetParent(\n        Path.GetDirectoryName(typeof(Chrome).Assembly.Location)).\n            Parent.FullName + @"\\Vendor";\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new ChromeDriver(VendorDirectory);\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n'})}),"\n",(0,i.jsxs)(r.p,{children:["Notice the field variable declaration for ",(0,i.jsx)(r.code,{children:"VendorDirectory"}),". With it, we are effectively grabbing the full path of the project directory and appending the ",(0,i.jsx)(r.code,{children:"Vendor"})," directory to it. This is then put to use when creating an instance of Chrome (e.g., ",(0,i.jsx)(r.code,{children:"Driver = new ChromeDriver(VendorDirectory);"}),")."]}),"\n",(0,i.jsx)(r.p,{children:"Now we're ready to add a test."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-csharp",children:'// filename: Chrome.cs\n// ...\n    [Test]\n    public void PageLoads()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");\n        Assert.That(Driver.Title.Equals("The Internet"));\n    }\n}\n'})}),"\n",(0,i.jsxs)(r.p,{children:["If we save this file and run the project (e.g., ",(0,i.jsx)(r.code,{children:"nunit3-console.exe .\\Chrome.sln"}),") it will launch an instance of Chrome, visit the homepage of ",(0,i.jsx)(r.a,{href:"http://the-internet.herokuapp.com/",children:"the-internet"}),", and assert that the page title loaded."]}),"\n",(0,i.jsx)(r.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(r.p,{children:["When you save this file and run the project (e.g., ",(0,i.jsx)(r.code,{children:"nunit3-console.exe .\\Chrome.sln"})," from the command-line) here is what will happen."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"ChromeDriver starts"}),"\n",(0,i.jsx)(r.li,{children:"Chrome opens"}),"\n",(0,i.jsx)(r.li,{children:"Test runs"}),"\n",(0,i.jsx)(r.li,{children:"Chrome closes"}),"\n",(0,i.jsx)(r.li,{children:"ChromeDriver stops"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(r.p,{children:["Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official ",(0,i.jsx)(r.a,{href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference",children:"Selenium Quick Reference page for Installing Browser Drivers"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);