"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"CSharp",id:"61-keyboard-keys-csharp",slug:"csharp/",number:61,publish_date:new Date("2015-10-12T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")},tags:["keyboard","keys","key presses","tab","enter"],level:1,category:["fundamentals"],language:"csharp"},s="How to Press Keyboard Keys",l={unversionedId:"how-to-press-keyboard-keys/61-keyboard-keys-csharp",id:"how-to-press-keyboard-keys/61-keyboard-keys-csharp",title:"CSharp",description:"Intro",source:"@site/docs/61-how-to-press-keyboard-keys/csharp.md",sourceDirName:"61-how-to-press-keyboard-keys",slug:"/how-to-press-keyboard-keys/csharp/",permalink:"/elemental-next/docs/how-to-press-keyboard-keys/csharp/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/61-how-to-press-keyboard-keys/csharp.md",tags:[{label:"keyboard",permalink:"/elemental-next/docs/tags/keyboard"},{label:"keys",permalink:"/elemental-next/docs/tags/keys"},{label:"key presses",permalink:"/elemental-next/docs/tags/key-presses"},{label:"tab",permalink:"/elemental-next/docs/tags/tab"},{label:"enter",permalink:"/elemental-next/docs/tags/enter"}],version:"current",frontMatter:{title:"CSharp",id:"61-keyboard-keys-csharp",slug:"csharp/",number:61,publish_date:"2015-10-12T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"},tags:["keyboard","keys","key presses","tab","enter"],level:1,category:["fundamentals"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/list-tags/60-list-tags-ruby"},next:{title:"Java",permalink:"/elemental-next/docs/how-to-press-keyboard-keys/java/"}},i={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-press-keyboard-keys"},"How to Press Keyboard Keys"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"On occasion you'll come across functionality that requires the use of keyboard key presses in your tests."),(0,a.kt)("p",null,"Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter."),(0,a.kt)("p",null,"But how do you do it and where do you start?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"You can easily issue a key press by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"SendKeys")," command. This can be done to a specific element, or generically with Selenium's Action Builder (which has been documented on ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Interactions_Actions.htm"},"the Selenium Actions page for Building Advanced User Interactions"),")."),(0,a.kt)("p",null,"Either approach will send a key press. The latter approach will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found."),(0,a.kt)("p",null,"You can see a full list of Selenium's available keyboard keys ",(0,a.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Keys.htm"},"here"),"."),(0,a.kt)("p",null,"Let's try out a couple of examples."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), and start our class off with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: KeyboardKeys.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing OpenQA.Selenium.Interactions;\n\npublic class KeyboardKeys\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,a.kt)("p",null,"Now we can wire up our test."),(0,a.kt)("p",null,"Let's use an example from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that will display what key has been pressed (",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/key_presses"},"link"),"). We'll use the result text that gets displayed on the page to perform our assertion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: KeyboardKeys.cs\n// ...\n    [Test]\n    public void KeyboardKeysExample()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/key_presses");\n\n        Driver.FindElement(By.Id("target")).SendKeys(Keys.Space);\n        Assert.That(Driver.FindElement(By.Id("result")).Text.Equals("You entered: SPACE"));\n// ...\n')),(0,a.kt)("p",null,"After visiting the page we find a visible element (e.g., the primary content of the page) and send the space key to it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},".SendKeys(Keys.SPACE)"),"). Then we grab the resulting text (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},'Driver.FindElement(By.Id("result")).Text'),") and assert that it says what we expect (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},'.Equals("You entered: SPACE"'),")."),(0,a.kt)("p",null,"Alternatively, we can issue a key press without finding the element by using the Selenium Action Builder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: KeyboardKeys.cs\n// ...\n        Actions Builder = new Actions(Driver);\n        Builder.SendKeys(Keys.Left).Build().Perform();\n        Assert.That(Driver.FindElement(By.Id("result")).Text.Equals("You entered: LEFT"));\n    }\n}\n')),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\KeyboardKeys.sln")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Find the element and send the space key to it"),(0,a.kt)("li",{parentName:"ul"},"Find the result text on the page and asset it's what we expect"),(0,a.kt)("li",{parentName:"ul"},"Send the left arrow key to the element that's currently in focus"),(0,a.kt)("li",{parentName:"ul"},"Find the result text on the page and assert it's what we expect"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. If you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use."),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);