"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[21182,85825],{85825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var i=t(74848),r=t(28453);const l={},s=void 0,a={id:"highlight-elements/_csharp",title:"_csharp",description:"Example",source:"@site/tips/65-highlight-elements/_csharp.mdx",sourceDirName:"65-highlight-elements",slug:"/highlight-elements/_csharp",permalink:"/tips/highlight-elements/_csharp",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/65-highlight-elements/_csharp.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Limit Bandwidth",permalink:"/tips/64-limit-bandwidth"},next:{title:"_java",permalink:"/tips/highlight-elements/_java"}},h={},o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["First let's include our requisite classes for our test framework (e.g., ",(0,i.jsx)(n.code,{children:"NUnit.Framework"}),"), driving the browser with Selenium (e.g., ",(0,i.jsx)(n.code,{children:"OpenQA.Selenium"}),", etc.), access to C# collections (e.g., ",(0,i.jsx)(n.code,{children:"System.Collections.Generic"}),"), and start our class off with some setup and teardown methods."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"// filename: HighlightElements.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System.Threading;\n\npublic class HighlightElements\n{\n    IWebDriver Driver;\n    IJavaScriptExecutor JSDriver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n        JSDriver = (IJavaScriptExecutor) Driver;\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now let's create a ",(0,i.jsx)(n.code,{children:"HighlightElement"})," helper method that will accept a Selenium WebDriver ",(0,i.jsx)(n.code,{children:"IWebElement"})," and a time to wait (e.g., ",(0,i.jsx)(n.code,{children:"Duration"}),") as parameters."]}),"\n",(0,i.jsx)(n.p,{children:"By setting a duration we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a sensible default (e.g., 3 seconds)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// filename: HighlightElements.cs\n// ...\n    private void HighlightElement(IWebElement Element, int Duration = 3)\n    {\n        string OriginalStyle = Element.GetAttribute("style");\n\n        JSDriver.ExecuteScript("arguments[0].setAttribute(arguments[1], arguments[2])",\n                               Element,\n                               "style",\n                               "border: 2px solid red; border-style: dashed;");\n\n        Thread.Sleep(Duration * 1000);\n        JSDriver.ExecuteScript("arguments[0].setAttribute(arguments[1], arguments[2])",\n                               Element,\n                               "style",\n                               OriginalStyle);\n    }\n// ...\n'})}),"\n",(0,i.jsx)(n.p,{children:"There are three things going on here."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We store the style of the element, so we can revert it back when we're done"}),"\n",(0,i.jsx)(n.li,{children:"We change the style of the element, so it visually stands out (e.g., a red dashed border)"}),"\n",(0,i.jsx)(n.li,{children:"We revert the style of the element back after 3 seconds (or longer if specified)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We're accomplishing the style change through JavaScript's ",(0,i.jsx)(n.code,{children:"setAttribute"})," function. And we're executing it with Selenium's ",(0,i.jsx)(n.code,{children:"ExecuteScript"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["Now to use this in our test is a simple matter to finding an element and passing it to ",(0,i.jsx)(n.code,{children:"HighlightElement"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// filename: HighlightElements.cs\n// ...\n    [Test]\n    public void HighlightElementExample()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/large");\n        IWebElement TargetElement = Driver.FindElement(By.Id("sibling-2.3"));\n        HighlightElement(TargetElement);\n    }\n\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.p,{children:["When you save this file and run it (e.g., ",(0,i.jsx)(n.code,{children:"nunit3-console.exe .\\HighlightElements.sln"})," from the command-line) here is what will happen."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the browser"}),"\n",(0,i.jsx)(n.li,{children:"Load the page"}),"\n",(0,i.jsx)(n.li,{children:"Find the element to highlight"}),"\n",(0,i.jsx)(n.li,{children:"Change the styling of the element, so it has a red dashed-line border"}),"\n",(0,i.jsx)(n.li,{children:"Wait 3 seconds"}),"\n",(0,i.jsx)(n.li,{children:"Revert the styling of the element back (removing the red border)"}),"\n",(0,i.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"If you wanted to take this a step further, you could leverage this approach along with an interactive debugger."}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, you could verify your locators by using a browser plugin like FireFinder."}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"}),"\n",(0,i.jsx)(n.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,i.jsxs)(n.p,{children:["You can follow Brian D. Goad on Twitter at ",(0,i.jsx)(n.a,{href:"https://twitter.com/bbbco",children:"@bbbco"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Brian D. Goad profile picture",src:t(25764).A+"#author-img",title:"a title",width:"400",height:"400"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},25764:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/brian-goad-06cd835a357f61c84c3c62c72fb7d03b.jpeg"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);