"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[27650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={language:"csharp",level:1,hide_sidebar:!0,publish_date:new Date("2016-06-12T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")}},i=void 0,l={unversionedId:"how-to-test-checkboxes/csharp",id:"how-to-test-checkboxes/csharp",title:"csharp",description:"A Solution",source:"@site/docs/45-how-to-test-checkboxes/csharp.md",sourceDirName:"45-how-to-test-checkboxes",slug:"/how-to-test-checkboxes/csharp",permalink:"/docs/how-to-test-checkboxes/csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/45-how-to-test-checkboxes/csharp.md",tags:[],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1680134400,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{language:"csharp",level:1,hide_sidebar:!0,publish_date:"2016-06-12T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"}}},s={},c=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"There are two ways to approach this issue -- by seeing if an element has a ",(0,r.kt)("inlineCode",{parentName:"p"},"checked")," attribute (a.k.a. performing an attribute lookup), or by asking an element if it has been ",(0,r.kt)("em",{parentName:"p"},"selected"),"."),(0,r.kt)("p",null,"We're going to go through each of these approaches to see their pros and cons."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"For reference, here is the markup from ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/checkboxes"},"the page we'll be testing against")," (from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <input type="checkbox" /> unchecked<br />\n  <input type="checkbox" checked="" /> checked\n</form>\n')),(0,r.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), access to common C# functions (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"System"),", etc.) and start our class off with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Checkboxes.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System;\nusing System.Collections.Generic;\n\npublic class Checkboxes\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Before we write any tests let's walk through both checkbox approaches to see what Selenium gives us."),(0,r.kt)("p",null,"To do that we'll want to grab all of the checkboxes on the page and iterate through them. Once using an attribute lookup, and again asking if the element is selected. Each time outputting the return value we get from Selenium."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Checkboxes.cs\n// ...\n[Test]\n    public void CheckboxDiscovery()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");\n        IReadOnlyCollection<IWebElement> Checkboxes = Driver.FindElements(By.CssSelector("input[type=\\"checkbox\\"]"));\n\n        Console.Write("With .attribute(\'checked\')");\n        foreach(IWebElement Checkbox in Checkboxes)\n        {\n            Console.WriteLine(Checkbox.GetAttribute("checked"));\n        }\n\n        Console.WriteLine("With .selected?");\n        foreach(IWebElement Checkbox in Checkboxes)\n        {\n            Console.WriteLine(Checkbox.Selected);\n        }\n    }\n// ...\n')),(0,r.kt)("p",null,"When we save our file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Checkboxes.sln")," from the command-line), here is the output we'll see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"With .attribute('checked')\ntrue\nWith .selected?\nFalse\nTrue\n")),(0,r.kt)("p",null,"With the attribute lookup, depending on the state of the checkbox, we receive either a nothing or a string with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'"true"'),". Whereas with ",(0,r.kt)("inlineCode",{parentName:"p"},".selected?")," we get a boolean (",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") response."),(0,r.kt)("p",null,"Let's see what these approaches look like when put to use in a test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Checkboxes.cs\n// ...\n    [Test]\n    public void GetCheckBoxStatusByAttribute()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");\n        IWebElement Checkbox = Driver.FindElement(By.CssSelector("form input:nth-of-type(2)"));\n        Assert.That(Checkbox.GetAttribute("checked").Equals("true"));\n    }\n// ...\n')),(0,r.kt)("p",null,"With an attribute lookup we check against the return value (which is a string). In this case we're seeing if the return value is ",(0,r.kt)("inlineCode",{parentName:"p"},'"true"'),". Let's see what the other approach looks like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Checkboxes.cs\n// ...\n    [Test]\n    public void GetCheckBoxesStatusByQuery()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");\n        IWebElement Checkbox = Driver.FindElement(By.CssSelector("form input:nth-of-type(2)"));\n        Assert.That(Checkbox.Selected);\n    }\n}\n')),(0,r.kt)("p",null,"In this case, when referencing the return value it's a simple matter of checking against a boolean value."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save and run the test file (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Checkboxes.sln")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Find all of the checkboxes on the page"),(0,r.kt)("li",{parentName:"ul"},"Assert that the second checkbox (the one that is supposed to be checked on initial page load) is checked"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Attribute lookups are meant for pulling information out of the page for review. While they work in this circumstance you're better off using a selected lookup. But the approach you choose will depend on how the checkboxes you're testing are constructed."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);