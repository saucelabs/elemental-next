"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[52168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={language:"csharp",level:2,hide_sidebar:!0,publish_date:new Date("2016-06-12T00:00:00.000Z"),last_update:{date:new Date("2023-03-29T00:00:00.000Z")}},o=void 0,s={unversionedId:"opt-out-of-ab-tests/csharp",id:"opt-out-of-ab-tests/csharp",title:"csharp",description:"A Solution",source:"@site/docs/12-opt-out-of-ab-tests/csharp.md",sourceDirName:"12-opt-out-of-ab-tests",slug:"/opt-out-of-ab-tests/csharp",permalink:"/docs/opt-out-of-ab-tests/csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/12-opt-out-of-ab-tests/csharp.md",tags:[],version:"current",lastUpdatedBy:"discombobulateme",lastUpdatedAt:1680048e3,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{language:"csharp",level:2,hide_sidebar:!0,publish_date:"2016-06-12T00:00:00.000Z",last_update:{date:"2023-03-29T00:00:00.000Z"}}},l={},p=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},h="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"a-solution"},"A Solution"),(0,i.kt)("p",null,"First, here is a primer on Split Testing."),(0,i.kt)("blockquote",null,(0,i.kt)("h3",{parentName:"blockquote",id:"split-testing"},"Split Testing"),(0,i.kt)("p",{parentName:"blockquote"},"Split testing is a simple way to experiment with an application's features to see which changes lead to higher user engagement. A simple example would be testing variations of an e-mail landing page to see if more people sign up. In such a split test there would be the control (how the application looks and behaves now) and variants (e.g., 2 or 3 changes that could include changing text or images on the page, element positioning, color of the submit button, etc)."),(0,i.kt)("p",{parentName:"blockquote"},"Once the variants are configured, they are put into rotation, and the experiment starts. During this experiment each user will see a different version of the feature and their engagement with it will be tracked. Split tests live for the length of the experiment or until a winner is found (e.g., tracking indicates that a variant converted higher than the control). If no winner is found, new variants may be created and another experiment tried. If a winner is found, then the winning variant becomes the new control and the feature gets updated accordingly.")),(0,i.kt)("p",null,"Thankfully there are some standard opt-out mechanisms built into A/B testing platforms. They tend to come in the form of an appended URL or forging a cookie."),(0,i.kt)("p",null,"Let's start with an example for each approach with a popular A/B testing platform, ",(0,i.kt)("a",{parentName:"p",href:"https://www.optimizely.com/"},"Optimizely"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Our example page is from ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet")," and can be seen ",(0,i.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/abtest"},"here"),". There are three different variants of the page that are available, each with different heading text:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Control: ",(0,i.kt)("inlineCode",{parentName:"li"},"A/B Test Control")),(0,i.kt)("li",{parentName:"ul"},"Variation 1: ",(0,i.kt)("inlineCode",{parentName:"li"},"A/B Test Variation 1")),(0,i.kt)("li",{parentName:"ul"},"Opt-out: ",(0,i.kt)("inlineCode",{parentName:"li"},"No A/B Test"))),(0,i.kt)("p",null,"Let's start things off by including our requisite classes for our test framework (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), and start our class with some setup and teardown methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: ABTestOptOut.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\npublic class ABTestOptOut\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,i.kt)("p",null,"Now let's wire up our first test to step through visiting the page and verifying that the text changes as we forge an opt-out cookie."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: ABTestOptOut.cs\n// ...\n    [Test]\n    public void OptOutWithCookieAfterVisitingPage()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/abtest");\n        string HeadingText = Driver.FindElement(By.TagName("h3")).Text;\n        Assert.That(HeadingText.StartsWith("A/B Test"));\n        Driver.Manage().Cookies.AddCookie(new Cookie("optimizelyOptOut", "true"));\n        Driver.Navigate().Refresh();\n        HeadingText = Driver.FindElement(By.TagName("h3")).Text;\n        Assert.That(HeadingText.StartsWith("No A/B Test"));\n    }\n// ...\n')),(0,i.kt)("p",null,"After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it starts with the text ",(0,i.kt)("inlineCode",{parentName:"p"},'"A/B Test"'),". After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again."),(0,i.kt)("p",null,"We could also load the opt-out cookie ",(0,i.kt)("em",{parentName:"p"},"before")," navigating to the page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: ABTestOptOut.cs\n// ...\n    [Test]\n    public void OptOutWithCookieBeforeVisitingPage()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");\n        Driver.Manage().Cookies.AddCookie(new Cookie("optimizelyOptOut", "true"));\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/abtest");\n        string HeadingText = Driver.FindElement(By.TagName("h3")).Text;\n        Assert.That(HeadingText.StartsWith("No A/B Test"));\n    }\n// ...\n')),(0,i.kt)("p",null,"Here we are navigating to the main page of the site first (to establish the host) and then adding the opt-out cookie. If we didn't visit the site first, then adding the cookie wouldn't have worked. Once added we navigate to the example page and perform our checks just like before."),(0,i.kt)("p",null,"Alternatively, we can achieve the same thing without forging a cookie. Instead we can append an opt-out query to the URL when visiting the page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: ABTestOptOut.cs\n// ...\n    [Test]\n    public void OptOutWithURL()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");\n        Driver.SwitchTo().Alert().Dismiss();\n        Driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(20);\n        string HeadingText = Driver.FindElement(By.TagName("h3")).Text;\n        Assert.That(HeadingText.StartsWith("No A/B Test"));\n    }\n}\n')),(0,i.kt)("p",null,"By appending ",(0,i.kt)("inlineCode",{parentName:"p"},"?optimizely_opt_out=true")," to the URL we achieve the same outcome as with forging a cookie. But keep in mind that this approach triggers a JavaScript alert, so we have to switch to it and dismiss it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"Driver.SwitchTo().Alert().Dismiss();"),") before performing our assertion."),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"When you save this file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\ABTestOptOut.sln")," from the command-line) here is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the browser"),(0,i.kt)("li",{parentName:"ul"},"Opt-out of the split tests (either by cookie or appended URL)"),(0,i.kt)("li",{parentName:"ul"},"Visit the split testing page"),(0,i.kt)("li",{parentName:"ul"},"Grab the header text"),(0,i.kt)("li",{parentName:"ul"},"Confirm that the session is opted out of the split tests"),(0,i.kt)("li",{parentName:"ul"},"Close the browser")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Hopefully this tip was helpful in guiding you in different methods of how to opt out of split tests."),(0,i.kt)("p",null,"Happy Testing!"),(0,i.kt)("h2",{id:"about-the-author"},"About The Author"),(0,i.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,i.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);