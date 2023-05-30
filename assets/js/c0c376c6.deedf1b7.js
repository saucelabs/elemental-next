"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5453],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,y=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"How To Press Keyboard Keys",id:"61-keyboard-keys-csharp",contentUrl:"docs/how-to-press-keyboard-keys/61-keyboard-keys-csharp",sidebar_label:"Csharp",text:"On occasion you'll come across functionality that requires the use of keyboard key presses in your tests. Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter. But how do you do it and where do you start?",number:61,hide_table_of_contents:!0,publish_date:new Date("2016-06-13T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")},tags:["keyboard","keys","key presses","tab","enter"],level:1,category:["fundamentals"],language:"csharp"},s="How to Press Keyboard Keys",i={unversionedId:"how-to-press-keyboard-keys/61-keyboard-keys-csharp",id:"how-to-press-keyboard-keys/61-keyboard-keys-csharp",title:"How To Press Keyboard Keys",description:"Intro",source:"@site/docs/61-how-to-press-keyboard-keys/csharp.mdx",sourceDirName:"61-how-to-press-keyboard-keys",slug:"/how-to-press-keyboard-keys/61-keyboard-keys-csharp",permalink:"/docs/how-to-press-keyboard-keys/61-keyboard-keys-csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/61-how-to-press-keyboard-keys/csharp.mdx",tags:[{label:"keyboard",permalink:"/docs/tags/keyboard"},{label:"keys",permalink:"/docs/tags/keys"},{label:"key presses",permalink:"/docs/tags/key-presses"},{label:"tab",permalink:"/docs/tags/tab"},{label:"enter",permalink:"/docs/tags/enter"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1680134400,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{title:"How To Press Keyboard Keys",id:"61-keyboard-keys-csharp",contentUrl:"docs/how-to-press-keyboard-keys/61-keyboard-keys-csharp",sidebar_label:"Csharp",text:"On occasion you'll come across functionality that requires the use of keyboard key presses in your tests. Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter. But how do you do it and where do you start?",number:61,hide_table_of_contents:!0,publish_date:"2016-06-13T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"},tags:["keyboard","keys","key presses","tab","enter"],level:1,category:["fundamentals"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/list-tags/60-list-tags-ruby"},next:{title:"Java",permalink:"/docs/how-to-press-keyboard-keys/61-keyboard-keys-java"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-press-keyboard-keys"},"How to Press Keyboard Keys"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"On occasion you'll come across functionality that requires the use of keyboard key presses in your tests."),(0,a.kt)("p",null,"Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter."),(0,a.kt)("p",null,"But how do you do it and where do you start?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"You can easily issue a key press by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"SendKeys")," command. This can be done to a specific element, or generically with Selenium's Action Builder (which has been documented on ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Interactions_Actions.htm"},"the Selenium Actions page for Building Advanced User Interactions"),")."),(0,a.kt)("p",null,"Either approach will send a key press. The latter approach will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found."),(0,a.kt)("p",null,"You can see a full list of Selenium's available keyboard keys ",(0,a.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Keys.htm"},"here"),"."),(0,a.kt)("p",null,"Let's try out a couple of examples."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), and start our class off with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: KeyboardKeys.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing OpenQA.Selenium.Interactions;\n\npublic class KeyboardKeys\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,a.kt)("p",null,"Now we can wire up our test."),(0,a.kt)("p",null,"Let's use an example from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that will display what key has been pressed (",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/key_presses"},"link"),"). We'll use the result text that gets displayed on the page to perform our assertion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: KeyboardKeys.cs\n// ...\n    [Test]\n    public void KeyboardKeysExample()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/key_presses");\n\n        Driver.FindElement(By.Id("target")).SendKeys(Keys.Space);\n        Assert.That(Driver.FindElement(By.Id("result")).Text.Equals("You entered: SPACE"));\n// ...\n')),(0,a.kt)("p",null,"After visiting the page we find a visible element (e.g., the primary content of the page) and send the space key to it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},".SendKeys(Keys.SPACE)"),"). Then we grab the resulting text (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},'Driver.FindElement(By.Id("result")).Text'),") and assert that it says what we expect (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},'.Equals("You entered: SPACE"'),")."),(0,a.kt)("p",null,"Alternatively, we can issue a key press without finding the element by using the Selenium Action Builder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: KeyboardKeys.cs\n// ...\n        Actions Builder = new Actions(Driver);\n        Builder.SendKeys(Keys.Left).Build().Perform();\n        Assert.That(Driver.FindElement(By.Id("result")).Text.Equals("You entered: LEFT"));\n    }\n}\n')),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\KeyboardKeys.sln")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Find the element and send the space key to it"),(0,a.kt)("li",{parentName:"ul"},"Find the result text on the page and asset it's what we expect"),(0,a.kt)("li",{parentName:"ul"},"Send the left arrow key to the element that's currently in focus"),(0,a.kt)("li",{parentName:"ul"},"Find the result text on the page and assert it's what we expect"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. If you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use."),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:r(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},9417:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);