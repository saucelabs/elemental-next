"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[83],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=r,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"CSharp",id:"3-work-with-frames-csharp",slug:"csharp/",number:3,publish_date:new Date("2023-02-21T00:00:00.000Z"),last_update:{date:new Date("2023-03-29T00:00:00.000Z")},tags:["frames"],level:1,category:["fundamentals"],language:"csharp"},o="How to Work with Frames",l={unversionedId:"updated-tips/work-with-frames/3-work-with-frames-csharp",id:"updated-tips/work-with-frames/3-work-with-frames-csharp",title:"CSharp",description:"Intro",source:"@site/docs/3-work-with-frames/csharp.md",sourceDirName:"updated-tips/3-work-with-frames",slug:"/work-with-frames/csharp/",permalink:"/elemental-next/docs/work-with-frames/csharp/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-work-with-frames/csharp.md",tags:[{label:"frames",permalink:"/elemental-next/docs/tags/frames"}],version:"current",frontMatter:{title:"CSharp",id:"3-work-with-frames-csharp",slug:"csharp/",number:3,publish_date:"2023-02-21T00:00:00.000Z",last_update:{date:"2023-03-29T00:00:00.000Z"},tags:["frames"],level:1,category:["fundamentals"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/download-a-file/2-download-a-file-ruby"},next:{title:"Java",permalink:"/elemental-next/docs/work-with-frames/java/"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-work-with-frames"},"How to Work with Frames"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"In this tip, you'll learn how to work with frames and write tests against them."),(0,r.kt)("p",null,"On occasion, we may encounter relics of the front-end world, such as frames. When writing tests against them, it's easy to make a mistake if we're not paying attention."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"Rather than getting frustrated when authoring your tests, you can work with the elements in a frame by telling Selenium to switch to that frame first. Then the rest of your test should be more straightforward."),(0,r.kt)("p",null,"Let's explore further with some examples."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"First we'll need to include our requisite classes for our test framework (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), and start our class off with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Frames.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\npublic class Frames\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now onto our test. In it we'll step through ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/nested_frames"},"an example of nested frames")," from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Frames.cs\n// ...\n    [Test]\n    public void NestedFrames()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/nested_frames");\n        Driver.SwitchTo().Frame("frame-top");\n        Driver.SwitchTo().Frame("frame-middle");\n        Assert.That(Driver.FindElement(By.Id("content")).Text.Equals("MIDDLE"));\n    }\n// ...\n')),(0,r.kt)("p",null,"With Selenium's ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_IWebDriver_SwitchTo.htm"},(0,r.kt)("inlineCode",{parentName:"a"},".SwitchTo()"))," method we can easily switch to the frame we want. When using it for frames (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"Driver.SwitchTo().Frame();"),") it accepts either an ID or name attribute. But in order to get the text of the middle frame (e.g., a frame nested within another frame), we need to switch to the parent frame (e.g., the top frame) first ",(0,r.kt)("em",{parentName:"p"},"and then")," switch to the child frame (e.g., the middle frame)."),(0,r.kt)("p",null,"Once we've done that we're able to find the element we need, grab its text, and assert that it's what we expect."),(0,r.kt)("p",null,"While this example helps illustrate the point of frame switching, it's not very practical."),(0,r.kt)("p",null,"Here is a more likely example you'll run into -- working with a WYSIWYG Editor like ",(0,r.kt)("a",{parentName:"p",href:"http://www.tinymce.com/"},"TinyMCE"),". You can see the page we're testing ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/tinymce"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Frames.cs\n// ...\n    [Test]\n    public void Iframes()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/tinymce");\n        Driver.SwitchTo().Frame("mce_0_ifr");\n        IWebElement Editor = Driver.FindElement(By.Id("tinymce"));\n        string StartText = Editor.Text;\n        Editor.Clear();\n        Editor.SendKeys("Hello World!");\n        string EndText = Editor.Text;\n        Assert.AreNotEqual(EndText, StartText);\n// ...\n')),(0,r.kt)("p",null,"Once the page loads we switch into the frame that contains TinyMCE and..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"grab the original text and store it"),(0,r.kt)("li",{parentName:"ul"},"clear and input new text"),(0,r.kt)("li",{parentName:"ul"},"grab the new text value"),(0,r.kt)("li",{parentName:"ul"},"assert that the original and new texts are not the same")),(0,r.kt)("p",null,"Keep in mind that if we need to access a part of the page outside of the frame we're currently in we'll need to switch to it. Thankfully Selenium has a method that enables us to quickly jump back to the top level of the page -- ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_ITargetLocator_DefaultContent.htm"},(0,r.kt)("inlineCode",{parentName:"a"},".DefaultContent();")),"."),(0,r.kt)("p",null,"Here is what that looks like in practice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Frames.cs\n// ...\n        Driver.SwitchTo().DefaultContent();\n        string HeaderText = Driver.FindElement(By.CssSelector("h3")).Text;\n        Assert.That(HeaderText.Equals("An iFrame containing the TinyMCE WYSIWYG Editor"));\n    }\n}\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Frames.sln")," from the command-line) here is what will happen:"),(0,r.kt)("u",null,"Example 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Switch to the nested frame"),(0,r.kt)("li",{parentName:"ul"},"Grab the text from the frame and assert that Selenium is in the correct place"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("u",null,"Example 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Switch to the frame that contains the TinyMCE editor"),(0,r.kt)("li",{parentName:"ul"},"Find and store the text in the editor"),(0,r.kt)("li",{parentName:"ul"},"Clear the text in the editor"),(0,r.kt)("li",{parentName:"ul"},"Input new text in the editor"),(0,r.kt)("li",{parentName:"ul"},"Find and store the new text in the editor"),(0,r.kt)("li",{parentName:"ul"},"Assert that the original and new text entries don't match"),(0,r.kt)("li",{parentName:"ul"},"Switch to the top level of the page"),(0,r.kt)("li",{parentName:"ul"},"Grab the text from the top of the page and assert it's what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Now you're ready to handily defeat frames when they cross your path."),(0,r.kt)("p",null,"Thanks to Jonathan Taylor for contributing the initial C# code for this tip!"),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);