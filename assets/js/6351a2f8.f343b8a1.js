"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[43004,2671],{2671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=n(74848),i=n(28453);const a={},s=void 0,l={id:"javascript-alerts/_csharp",title:"_csharp",description:"Example",source:"@site/tips/51-javascript-alerts/_csharp.mdx",sourceDirName:"51-javascript-alerts",slug:"/javascript-alerts/_csharp",permalink:"/tips/javascript-alerts/_csharp",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/51-javascript-alerts/_csharp.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How To Work With Hovers",permalink:"/tips/50-hovers"},next:{title:"_java",permalink:"/tips/javascript-alerts/_java"}},c={},o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["Our example application is available ",(0,r.jsx)(t.a,{href:"http://the-internet.herokuapp.com/javascript_alerts",children:"here"})," on ",(0,r.jsx)(t.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"}),". It has various JavaScript alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click ",(0,r.jsx)(t.code,{children:"Ok"})," or ",(0,r.jsx)(t.code,{children:"Cancel"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["First let's include our requisite classes for our test framework (e.g., ",(0,r.jsx)(t.code,{children:"NUnit.Framework"}),"), driving the browser with Selenium (e.g., ",(0,r.jsx)(t.code,{children:"OpenQA.Selenium"}),", etc.), and start our class off with some setup and teardown methods."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"// filename: JavaScriptAlerts.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\npublic class JavaScriptAlerts\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now let's write our test."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'// filename: JavaScriptAlerts.cs\n// ...\n    [Test]\n    public void JavaScriptAlertAppearsAndAccepted()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/javascript_alerts");\n        Driver.FindElement(By.CssSelector(".example li:nth-child(2) button")).Click();\n        IAlert Popup = Driver.SwitchTo().Alert();\n        Popup.Accept();\n        string Result = Driver.FindElement(By.Id("result")).Text;\n        Assert.That(Result.Equals("You clicked: Ok"));\n    }\n\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find it with a child CSS Pseudo-class (",(0,r.jsx)(t.code,{children:"nth-child(2)"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["After click the button to trigger the JavaScript alert we use Selenium's ",(0,r.jsx)(t.code,{children:"SwitchTo().Alert();"})," method to focus on the JavaScript pop-up and use ",(0,r.jsx)(t.code,{children:".Accept();"})," to click ",(0,r.jsx)(t.code,{children:"Ok"}),". If we wanted to click ",(0,r.jsx)(t.code,{children:"Cancel"})," we would have used ",(0,r.jsx)(t.code,{children:".Dismiss();"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["After accepting the alert our browser window will automatically regain focus and the page will display the result that we chose. We use this text for our assertion, making sure that the words ",(0,r.jsx)(t.code,{children:"You clicked: Ok"})," are displayed."]}),"\n",(0,r.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(t.p,{children:["When you save this file and run it (e.g., ",(0,r.jsx)(t.code,{children:"nunit3-console.exe .\\JavaScriptAlerts.sln"})," from the command-line) here is what will happen:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Open the browser"}),"\n",(0,r.jsx)(t.li,{children:"Load the page"}),"\n",(0,r.jsx)(t.li,{children:"Click the second button on the page"}),"\n",(0,r.jsx)(t.li,{children:"JavaScript confirmation alert appears"}),"\n",(0,r.jsx)(t.li,{children:"JavaScript confirmation alert is accepted and goes away"}),"\n",(0,r.jsx)(t.li,{children:"Browser window is returned to focus"}),"\n",(0,r.jsx)(t.li,{children:"Assert that the result on the page is what we expect"}),"\n",(0,r.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.p,{children:["We've learned how to accept/dismiss Javascript alerts using Selenium Webdriver by locating the alert using Selenium's ",(0,r.jsx)(t.code,{children:"SwitchTo().Alert();"}),". After accepting/dismissing the alert, our main browser window will automatically regain focus and the page will display the result."]}),"\n",(0,r.jsx)(t.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);