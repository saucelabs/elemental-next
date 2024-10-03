"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[84029,70243],{70243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(74848),i=t(28453);const a={},r=void 0,o={id:"how-to-access-basic-auth/_csharp",title:"_csharp",description:"Example 1",source:"@site/tips/13-how-to-access-basic-auth/_csharp.mdx",sourceDirName:"13-how-to-access-basic-auth",slug:"/how-to-access-basic-auth/_csharp",permalink:"/tips/how-to-access-basic-auth/_csharp",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/13-how-to-access-basic-auth/_csharp.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Opt Out of AB Tests",permalink:"/tips/12-opt-out-of-ab-tests"},next:{title:"_java",permalink:"/tips/how-to-access-basic-auth/_java"}},c={},l=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["First we'll include our requisite classes for our test framework (e.g., ",(0,s.jsx)(n.code,{children:"NUnit.Framework"}),"), driving the browser with Selenium (e.g., ",(0,s.jsx)(n.code,{children:"OpenQA.Selenium"}),", etc.), and start our class off with some setup and teardown methods."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// filename: BasicAuth1.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\npublic class BasicAuth1\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now to add our test."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'// filename: BasicAuth1.cs\n    [Test]\n    public void ConnectToBasicAuthByURL()\n    {\n        Driver.Navigate().GoToUrl("http://admin:admin@the-internet.herokuapp.com/basic_auth");\n        string PageMessage = Driver.FindElement(By.CssSelector("p")).Text;\n        Assert.That(PageMessage.Contains("Congratulations!"));\n    }\n}\n// ...\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,s.jsx)(n.code,{children:"http://admin:admin@"}),"). Once it loads we grab text from the page to make sure we ended up in the right place."]}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"Alternatively we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."}),"\n",(0,s.jsx)(n.p,{children:"Here's what that script would look like."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'// filename: BasicAuth2.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\nclass BasicAuth2\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n        Driver.Navigate().GoToUrl("http://admin:admin@the-internet.herokuapp.com/basic_auth");\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n\n    [Test]\n    public void AccessBasicAuthPageAfterAuthentication()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/basic_auth");\n        string PageMessage = Driver.FindElement(By.CssSelector("p")).Text;\n        Assert.That(PageMessage.Contains("Congratulations!"));\n    }\n\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of each type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa)."})}),"\n",(0,s.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsx)(n.p,{children:"When you save the first example and run it here is what will happen:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open the browser"}),"\n",(0,s.jsx)(n.li,{children:"Visit the page using Basic Auth"}),"\n",(0,s.jsx)(n.li,{children:"Get the page text"}),"\n",(0,s.jsx)(n.li,{children:"Assert that the text is what we expect"}),"\n",(0,s.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"And when you save the second example and run it here is what will happen:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open the browser"}),"\n",(0,s.jsx)(n.li,{children:"Visit the page using Basic Auth in the setup"}),"\n",(0,s.jsx)(n.li,{children:"Navigate to the Basic Auth page (without providing credentials)"}),"\n",(0,s.jsx)(n.li,{children:"Get the page text"}),"\n",(0,s.jsx)(n.li,{children:"Assert that the text is what we expect"}),"\n",(0,s.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it."}),"\n",(0,s.jsx)(n.p,{children:"Happy Testing!"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);