"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(d,i(i({ref:t},h),{},{components:n})):o.createElement(d,i({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={title:"45: How To Test Checkboxes",id:"45-checkboxes-csharp",contentUrl:"docs/how-to-test-checkboxes/45-checkboxes-csharp",sidebar_label:"Csharp",text:"Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests.",number:45,hide_table_of_contents:!0,publish_date:new Date("2015-10-13T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")},tags:["checkboxes","attribute","selected"],level:1,category:["fundamentals"],language:"csharp"},i="How to Test Checkboxes",s={unversionedId:"how-to-test-checkboxes/45-checkboxes-csharp",id:"how-to-test-checkboxes/45-checkboxes-csharp",title:"45: How To Test Checkboxes",description:"Intro",source:"@site/docs/45-how-to-test-checkboxes/csharp.md",sourceDirName:"45-how-to-test-checkboxes",slug:"/how-to-test-checkboxes/45-checkboxes-csharp",permalink:"/elemental-next/docs/how-to-test-checkboxes/45-checkboxes-csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/45-how-to-test-checkboxes/csharp.md",tags:[{label:"checkboxes",permalink:"/elemental-next/docs/tags/checkboxes"},{label:"attribute",permalink:"/elemental-next/docs/tags/attribute"},{label:"selected",permalink:"/elemental-next/docs/tags/selected"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1680134400,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{title:"45: How To Test Checkboxes",id:"45-checkboxes-csharp",contentUrl:"docs/how-to-test-checkboxes/45-checkboxes-csharp",sidebar_label:"Csharp",text:"Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests.",number:45,hide_table_of_contents:!0,publish_date:"2015-10-13T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"},tags:["checkboxes","attribute","selected"],level:1,category:["fundamentals"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/exception-handling/ruby"},next:{title:"Java",permalink:"/elemental-next/docs/how-to-test-checkboxes/45-checkboxes-java"}},l={},c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],h={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-test-checkboxes"},"How to Test Checkboxes"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests."),(0,a.kt)("p",null,"Intuitively you may reach for a method that has the word 'checked' in it -- like ",(0,a.kt)("inlineCode",{parentName:"p"},".checked")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".is_checked")," but this doesn't exist in Selenium."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"There are two ways to approach this issue -- by seeing if an element has a ",(0,a.kt)("inlineCode",{parentName:"p"},"checked")," attribute (a.k.a. performing an attribute lookup), or by asking an element if it has been ",(0,a.kt)("em",{parentName:"p"},"selected"),"."),(0,a.kt)("p",null,"We're going to go through each of these approaches to see their pros and cons."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"For reference, here is the markup from ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/checkboxes"},"the page we'll be testing against")," (from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <input type="checkbox" /> unchecked<br />\n  <input type="checkbox" checked="" /> checked\n</form>\n')),(0,a.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), access to common C# functions (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"System"),", etc.) and start our class off with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Checkboxes.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System;\nusing System.Collections.Generic;\n\npublic class Checkboxes\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,a.kt)("p",null,"Before we write any tests let's walk through both checkbox approaches to see what Selenium gives us."),(0,a.kt)("p",null,"To do that we'll want to grab all of the checkboxes on the page and iterate through them. Once using an attribute lookup, and again asking if the element is selected. Each time outputting the return value we get from Selenium."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Checkboxes.cs\n// ...\n[Test]\n    public void CheckboxDiscovery()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");\n        IReadOnlyCollection<IWebElement> Checkboxes = Driver.FindElements(By.CssSelector("input[type=\\"checkbox\\"]"));\n\n        Console.Write("With .attribute(\'checked\')");\n        foreach(IWebElement Checkbox in Checkboxes)\n        {\n            Console.WriteLine(Checkbox.GetAttribute("checked"));\n        }\n\n        Console.WriteLine("With .selected?");\n        foreach(IWebElement Checkbox in Checkboxes)\n        {\n            Console.WriteLine(Checkbox.Selected);\n        }\n    }\n// ...\n')),(0,a.kt)("p",null,"When we save our file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Checkboxes.sln")," from the command-line), here is the output we'll see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"With .attribute('checked')\ntrue\nWith .selected?\nFalse\nTrue\n")),(0,a.kt)("p",null,"With the attribute lookup, depending on the state of the checkbox, we receive either a nothing or a string with the value ",(0,a.kt)("inlineCode",{parentName:"p"},'"true"'),". Whereas with ",(0,a.kt)("inlineCode",{parentName:"p"},".selected?")," we get a boolean (",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),") response."),(0,a.kt)("p",null,"Let's see what these approaches look like when put to use in a test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Checkboxes.cs\n// ...\n    [Test]\n    public void GetCheckBoxStatusByAttribute()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");\n        IWebElement Checkbox = Driver.FindElement(By.CssSelector("form input:nth-of-type(2)"));\n        Assert.That(Checkbox.GetAttribute("checked").Equals("true"));\n    }\n// ...\n')),(0,a.kt)("p",null,"With an attribute lookup we check against the return value (which is a string). In this case we're seeing if the return value is ",(0,a.kt)("inlineCode",{parentName:"p"},'"true"'),". Let's see what the other approach looks like."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Checkboxes.cs\n// ...\n    [Test]\n    public void GetCheckBoxesStatusByQuery()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");\n        IWebElement Checkbox = Driver.FindElement(By.CssSelector("form input:nth-of-type(2)"));\n        Assert.That(Checkbox.Selected);\n    }\n}\n')),(0,a.kt)("p",null,"In this case, when referencing the return value it's a simple matter of checking against a boolean value."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save and run the test file (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Checkboxes.sln")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Find all of the checkboxes on the page"),(0,a.kt)("li",{parentName:"ul"},"Assert that the second checkbox (the one that is supposed to be checked on initial page load) is checked"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Attribute lookups are meant for pulling information out of the page for review. While they work in this circumstance you're better off using a selected lookup. But the approach you choose will depend on how the checkboxes you're testing are constructed."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}p.isMDXComponent=!0}}]);