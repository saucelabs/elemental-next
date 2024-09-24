"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[6106,82996],{82996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=t(74848),i=t(28453);const s={},a=void 0,o={id:"how-to-work-with-hovers/_csharp",title:"_csharp",description:"Example",source:"@site/tips/50-how-to-work-with-hovers/_csharp.mdx",sourceDirName:"50-how-to-work-with-hovers",slug:"/how-to-work-with-hovers/_csharp",permalink:"/tips/how-to-work-with-hovers/_csharp",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/50-how-to-work-with-hovers/_csharp.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172716874e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How to Do Performance Testing",permalink:"/tips/49-performance-testing"},next:{title:"_java",permalink:"/tips/how-to-work-with-hovers/_java"}},l={},h=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Our example application is available ",(0,r.jsx)(n.a,{href:"http://the-internet.herokuapp.com/hovers",children:"here"})," on ",(0,r.jsx)(n.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"}),". It has a few avatars displayed in a grid layout. When you hover over each of them they display additional user information and a link to view a full profile."]}),"\n",(0,r.jsx)(n.p,{children:"Let's write a test that will hover over the first avatar and make sure that its additional information appears."}),"\n",(0,r.jsxs)(n.p,{children:["First let's include our requisite classes for our test framework (e.g., ",(0,r.jsx)(n.code,{children:"NUnit.Framework"}),"), driving the browser with Selenium (e.g., ",(0,r.jsx)(n.code,{children:"OpenQA.Selenium"}),", etc.), and start our class off with some setup and teardown methods."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"// filename: Hovers.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing OpenQA.Selenium.Interactions;\n\npublic class Hovers\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now let's write our test."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'// filename: Hovers.cs\n    [Test]\n    public void MouseHoverDisplays()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/hovers");\n\n        IWebElement Avatar = Driver.FindElement(By.ClassName("figure"));\n        Actions Builder = new Actions(Driver);\n        Builder.MoveToElement(Avatar).Build().Perform();\n\n        By Hover = By.ClassName("figcaption");\n        Assert.That(Driver.FindElement(Hover).Displayed);\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After visiting the page we find the first avatar and store it in a variable (",(0,r.jsx)(n.code,{children:"Avatar"}),"). We then use Selenium's ",(0,r.jsx)(n.code,{children:"MoveToElement"})," method and pass the avatar variable to it (which triggers the hover) and check to see if the additional user information displayed."]}),"\n",(0,r.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(n.p,{children:["When you save this file and run it (e.g., ",(0,r.jsx)(n.code,{children:"nunit3-console.exe .\\Hovers.sln"})," from the command-line) here is what will happen:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open the browser"}),"\n",(0,r.jsx)(n.li,{children:"Visit the page"}),"\n",(0,r.jsx)(n.li,{children:"Hover over the first avatar"}),"\n",(0,r.jsx)(n.li,{children:"Assert that the caption displayed for that avatar"}),"\n",(0,r.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"Hopefully this will help you handle more complex user interactions like hovers."}),"\n",(0,r.jsx)(n.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);