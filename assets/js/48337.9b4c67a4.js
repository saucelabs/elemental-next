"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[48337],{48337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(74848),r=n(28453);const s={},a=void 0,o={id:"opt-out-of-ab-tests/_csharp",title:"_csharp",description:"Example",source:"@site/tips/12-opt-out-of-ab-tests/_csharp.mdx",sourceDirName:"12-opt-out-of-ab-tests",slug:"/opt-out-of-ab-tests/_csharp",permalink:"/tips/opt-out-of-ab-tests/_csharp",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/12-opt-out-of-ab-tests/_csharp.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Build An Interactive Prompt",permalink:"/tips/11-build-an-interactive-prompt"},next:{title:"_java",permalink:"/tips/opt-out-of-ab-tests/_java"}},h={},l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Our example page is from ",(0,i.jsx)(t.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"})," and can be seen ",(0,i.jsx)(t.a,{href:"http://the-internet.herokuapp.com/abtest",children:"here"}),". There are three different variants of the page that are available, each with different heading text:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Control: ",(0,i.jsx)(t.code,{children:"A/B Test Control"})]}),"\n",(0,i.jsxs)(t.li,{children:["Variation 1: ",(0,i.jsx)(t.code,{children:"A/B Test Variation 1"})]}),"\n",(0,i.jsxs)(t.li,{children:["Opt-out: ",(0,i.jsx)(t.code,{children:"No A/B Test"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Let's start things off by including our requisite classes for our test framework (e.g., ",(0,i.jsx)(t.code,{children:"NUnit.Framework"}),"), driving the browser with Selenium (e.g., ",(0,i.jsx)(t.code,{children:"OpenQA.Selenium"}),", etc.), and start our class with some setup and teardown methods."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"// filename: ABTestOptOut.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\npublic class ABTestOptOut\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now let's wire up our first test to step through visiting the page and verifying that the text changes as we forge an opt-out cookie."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// filename: ABTestOptOut.cs\n// ...\n    [Test]\n    public void OptOutWithCookieAfterVisitingPage()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/abtest");\n        string HeadingText = Driver.FindElement(By.TagName("h3")).Text;\n        Assert.That(HeadingText.StartsWith("A/B Test"));\n        Driver.Manage().Cookies.AddCookie(new Cookie("optimizelyOptOut", "true"));\n        Driver.Navigate().Refresh();\n        HeadingText = Driver.FindElement(By.TagName("h3")).Text;\n        Assert.That(HeadingText.StartsWith("No A/B Test"));\n    }\n// ...\n'})}),"\n",(0,i.jsxs)(t.p,{children:["After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it starts with the text ",(0,i.jsx)(t.code,{children:'"A/B Test"'}),". After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again."]}),"\n",(0,i.jsxs)(t.p,{children:["We could also load the opt-out cookie ",(0,i.jsx)(t.em,{children:"before"})," navigating to the page."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// filename: ABTestOptOut.cs\n// ...\n    [Test]\n    public void OptOutWithCookieBeforeVisitingPage()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");\n        Driver.Manage().Cookies.AddCookie(new Cookie("optimizelyOptOut", "true"));\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/abtest");\n        string HeadingText = Driver.FindElement(By.TagName("h3")).Text;\n        Assert.That(HeadingText.StartsWith("No A/B Test"));\n    }\n// ...\n'})}),"\n",(0,i.jsx)(t.p,{children:"Here we are navigating to the main page of the site first (to establish the host) and then adding the opt-out cookie. If we didn't visit the site first, then adding the cookie wouldn't have worked. Once added we navigate to the example page and perform our checks just like before."}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, we can achieve the same thing without forging a cookie. Instead, we can append an opt-out query to the URL when visiting the page."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// filename: ABTestOptOut.cs\n// ...\n    [Test]\n    public void OptOutWithURL()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");\n        Driver.SwitchTo().Alert().Dismiss();\n        Driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(20);\n        string HeadingText = Driver.FindElement(By.TagName("h3")).Text;\n        Assert.That(HeadingText.StartsWith("No A/B Test"));\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["By appending ",(0,i.jsx)(t.code,{children:"?optimizely_opt_out=true"})," to the URL we achieve the same outcome as with forging a cookie. But keep in mind that this approach triggers a JavaScript alert, so we have to switch to it and dismiss it (e.g., ",(0,i.jsx)(t.code,{children:"Driver.SwitchTo().Alert().Dismiss();"}),") before performing our assertion."]}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["When you save this file and run it (e.g., ",(0,i.jsx)(t.code,{children:"nunit3-console.exe .\\ABTestOptOut.sln"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser"}),"\n",(0,i.jsx)(t.li,{children:"Opt-out of the split tests (either by cookie or appended URL)"}),"\n",(0,i.jsx)(t.li,{children:"Visit the split testing page"}),"\n",(0,i.jsx)(t.li,{children:"Grab the header text"}),"\n",(0,i.jsx)(t.li,{children:"Confirm that the session is opted out of the split tests"}),"\n",(0,i.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"Hopefully this tip was helpful in guiding you in different methods of how to opt out of split tests."}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);