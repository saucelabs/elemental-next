"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Java",id:"61-keyboard-keys-java",slug:"java/",number:61,publish_date:new Date("2015-10-12T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")},tags:["keyboard","keys","key presses","tab","enter"],level:1,category:["fundamentals"],language:"java"},s="How to Press Keyboard Keys",i={unversionedId:"how-to-press-keyboard-keys/61-keyboard-keys-java",id:"how-to-press-keyboard-keys/61-keyboard-keys-java",title:"Java",description:"Intro",source:"@site/docs/61-how-to-press-keyboard-keys/java.md",sourceDirName:"61-how-to-press-keyboard-keys",slug:"/how-to-press-keyboard-keys/java/",permalink:"/elemental-next/docs/how-to-press-keyboard-keys/java/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/61-how-to-press-keyboard-keys/java.md",tags:[{label:"keyboard",permalink:"/elemental-next/docs/tags/keyboard"},{label:"keys",permalink:"/elemental-next/docs/tags/keys"},{label:"key presses",permalink:"/elemental-next/docs/tags/key-presses"},{label:"tab",permalink:"/elemental-next/docs/tags/tab"},{label:"enter",permalink:"/elemental-next/docs/tags/enter"}],version:"current",frontMatter:{title:"Java",id:"61-keyboard-keys-java",slug:"java/",number:61,publish_date:"2015-10-12T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"},tags:["keyboard","keys","key presses","tab","enter"],level:1,category:["fundamentals"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"CSharp",permalink:"/elemental-next/docs/how-to-press-keyboard-keys/csharp/"},next:{title:"Javascript",permalink:"/elemental-next/docs/how-to-press-keyboard-keys/javascript/"}},l={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-press-keyboard-keys"},"How to Press Keyboard Keys"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"On occasion you'll come across functionality that requires the use of keyboard key presses in your tests."),(0,r.kt)("p",null,"Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter."),(0,r.kt)("p",null,"But how do you do it and where do you start?"),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"You can easily issue a key press by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"send_keys")," command. This can be done to a specific element, or generically with Selenium's Action Builder (which has been documented on ",(0,r.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html"},"the Selenium Actions page for Building Advanced User Interactions"),")."),(0,r.kt)("p",null,"Either approach will send a key press. The latter approach will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found."),(0,r.kt)("p",null,"Let's try out a couple of examples."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"First let's import our requisite classes (for annotations (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// filename: KeyboardKeys.java\n\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport org.openqa.selenium.interactions.Actions;\nimport org.openqa.selenium.Keys;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.junit.Assert.assertThat;\n\npublic class KeyboardKeys {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    } \n// ...\n")),(0,r.kt)("p",null,"Now we can wire up our test."),(0,r.kt)("p",null,"Let's use an example from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that will display what key has been pressed (",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/key_presses"},"link"),"). We'll use the result text that gets displayed to perform our assertion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: KeyboardKeys.java\n// ...\n    @Test\n    public void uploadFile() throws Exception {\n        driver.get("http://the-internet.herokuapp.com/key_presses");\n        driver.findElement(By.id("target")).sendKeys(Keys.SPACE);\n        assertThat(driver.findElement(By.id("result")).getText(), is("You entered: SPACE"));\n// ...\n')),(0,r.kt)("p",null,"After visiting the page we find an element that's visible (e.g., the one that contains the example on the page) and send the space key to it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"builder.sendKeys(Keys.SPACE).build().perform()"),"). Then we grab the resulting text (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'driver.findElement(By.id("result")).getText()'),") and assert that it says what we expect (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'is("You entered: SPACE"));'),")."),(0,r.kt)("p",null,"Alternatively, we can also issue a key press without finding the element first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: KeyboardKeys.java\n// ...\n        Actions builder = new Actions(driver);\n        builder.sendKeys(Keys.LEFT).build().perform();\n        assertThat(driver.findElement(By.id("result")).getText(), is("You entered: LEFT"));\n    }\n\n}\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save this file and run it (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Find the element and send the space key to it"),(0,r.kt)("li",{parentName:"ul"},"Find the result text on the page and check to that it's what we expect"),(0,r.kt)("li",{parentName:"ul"},"Send the left arrow key to the element that's currently in focus"),(0,r.kt)("li",{parentName:"ul"},"Find the result text on the page and check to that it's what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. But if you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use."),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this ti."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);