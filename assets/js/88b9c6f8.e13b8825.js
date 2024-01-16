"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9489],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61954:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={language:"csharp",level:1,hide_sidebar:!0,publish_date:new Date("2016-06-12T00:00:00.000Z"),last_update:{date:new Date("2023-03-29T00:00:00.000Z")}},s=void 0,o={unversionedId:"how-to-access-basic-auth/csharp",id:"how-to-access-basic-auth/csharp",title:"csharp",description:"A Solution",source:"@site/docs/13-how-to-access-basic-auth/csharp.md",sourceDirName:"13-how-to-access-basic-auth",slug:"/how-to-access-basic-auth/csharp",permalink:"/docs/how-to-access-basic-auth/csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/13-how-to-access-basic-auth/csharp.md",tags:[],version:"current",lastUpdatedBy:"Esther",lastUpdatedAt:1680048e3,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{language:"csharp",level:1,hide_sidebar:!0,publish_date:"2016-06-12T00:00:00.000Z",last_update:{date:"2023-03-29T00:00:00.000Z"}}},l={},u=[{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By specifying the username and password ",(0,r.kt)("em",{parentName:"p"},"in the URL")," when visiting a page with Selenium, we can a side-step the system level dialog box and avoid setting up a proxy server. This approach will work for both HTTP or HTTPS pages."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"First we'll include our requisite classes for our test framework (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), and start our class off with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: BasicAuth1.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\npublic class BasicAuth1\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now to add our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: BasicAuth1.cs\n    [Test]\n    public void ConnectToBasicAuthByURL()\n    {\n        Driver.Navigate().GoToUrl("http://admin:admin@the-internet.herokuapp.com/basic_auth");\n        string PageMessage = Driver.FindElement(By.CssSelector("p")).Text;\n        Assert.That(PageMessage.Contains("Congratulations!"));\n    }\n}\n// ...\n')),(0,r.kt)("p",null,"In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"http://admin:admin@"),"). Once it loads we grab text from the page to make sure we ended up in the right place."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"Alternatively we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."),(0,r.kt)("p",null,"Here's what that script would look like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: BasicAuth2.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\nclass BasicAuth2\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n        Driver.Navigate().GoToUrl("http://admin:admin@the-internet.herokuapp.com/basic_auth");\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n\n    [Test]\n    public void AccessBasicAuthPageAfterAuthentication()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/basic_auth");\n        string PageMessage = Driver.FindElement(By.CssSelector("p")).Text;\n        Assert.That(PageMessage.Contains("Congratulations!"));\n    }\n\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of each type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save the first example and run it here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth"),(0,r.kt)("li",{parentName:"ul"},"Get the page text"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("p",null,"And when you save the second example and run it here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth in the setup"),(0,r.kt)("li",{parentName:"ul"},"Navigate to the Basic Auth page (without providing credentials)"),(0,r.kt)("li",{parentName:"ul"},"Get the page text"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);