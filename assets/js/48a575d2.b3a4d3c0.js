"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),w=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=w(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=w(n),h=a,c=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?i.createElement(c,o(o({ref:t},d),{},{components:n})):i.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var w=2;w<r;w++)o[w]=n[w];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>w});var i=n(7462),a=(n(7294),n(3905));const r={title:"Java",id:"4-work-with-multiple-windows-java",slug:"java/",number:4,publish_date:new Date("2015-08-21T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")},tags:["windows","multiple windows","new window"],level:2,category:["fundamentals"],language:"java"},o="How to Work with Multiple Windows",l={unversionedId:"work-with-multiple-windows/4-work-with-multiple-windows-java",id:"work-with-multiple-windows/4-work-with-multiple-windows-java",title:"Java",description:"Intro",source:"@site/docs/4-work-with-multiple-windows/java.md",sourceDirName:"4-work-with-multiple-windows",slug:"/work-with-multiple-windows/java/",permalink:"/elemental-next/docs/work-with-multiple-windows/java/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4-work-with-multiple-windows/java.md",tags:[{label:"windows",permalink:"/elemental-next/docs/tags/windows"},{label:"multiple windows",permalink:"/elemental-next/docs/tags/multiple-windows"},{label:"new window",permalink:"/elemental-next/docs/tags/new-window"}],version:"current",frontMatter:{title:"Java",id:"4-work-with-multiple-windows-java",slug:"java/",number:4,publish_date:"2015-08-21T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"},tags:["windows","multiple windows","new window"],level:2,category:["fundamentals"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"Csharp",permalink:"/elemental-next/docs/work-with-multiple-windows/4-work-with-multiple-windows-csharp"},next:{title:"Javascript",permalink:"/elemental-next/docs/work-with-multiple-windows/javascript/"}},s={},w=[{value:"Intro",id:"intro",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],d={toc:w},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-work-with-multiple-windows"},"How to Work with Multiple Windows"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"This tip will explain how to work with multiple windows in Selenium and switch between them."),(0,a.kt)("p",null,"Occasionally you'll run into a link or action in the application you're testing that will open a new window. In order to work with both the new and originating windows you'll need to switch between them."),(0,a.kt)("p",null,"On the face of it, this is a pretty straightforward concept. But there may be a small challenge to watch out for that you may find in some browsers and not others."),(0,a.kt)("p",null,"Let's step through a couple of examples to demonstrate."),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("p",null,"First let's import our requisite classes (for annotations (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// filename: MultipleWindows.java\n\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport java.util.Set;\nimport static org.hamcrest.MatcherAssert.assertThat;\nimport static org.hamcrest.CoreMatchers.*;\n\npublic class MultipleWindows {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,a.kt)("p",null,"Now let's write a test that exercises new window functionality from an application. In this case, we'll be using ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/windows"},"the new window example")," from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: MultipleWindows.java\n// ...\n    @Test\n    public void multipleWindows() {\n        driver.get("http://the-internet.herokuapp.com/windows");\n        driver.findElement(By.cssSelector(".example a")).click();\n        Object[] allWindows = driver.getWindowHandles().toArray();\n        driver.switchTo().window(allWindows[0].toString());\n        assertThat(driver.getTitle(), is(not("New Window")));\n        driver.switchTo().window(allWindows[1].toString());\n\n        Thread.sleep(2000);\n        assertThat(driver.getTitle(), is("New Window"));\n        Thread.sleep(2000);\n    }\n// ...\n')),(0,a.kt)("p",null,"After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the second one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window."),(0,a.kt)("p",null,"While this may seem like a good approach, it can present problems later. That's because the order of the window handles is not consistent across all browsers. Some return it in the order opened, others ",(0,a.kt)("em",{parentName:"p"},"alphabetically"),"."),(0,a.kt)("p",null,"Here's a more resilient approach. One that will work across all browsers."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: MultipleWindows.java\n// ...\n    @Test\n    public void multipleWindowsRedux() {\n        driver.get("http://the-internet.herokuapp.com/windows");\n        String firstWindow = driver.getWindowHandle();\n        String newWindow = "";\n        driver.findElement(By.cssSelector(".example a")).click();\n        Set<String> allWindows = driver.getWindowHandles();\n\n        for (String window : allWindows) {\n            if (!window.equals(firstWindow)) {\n                newWindow = window;\n            }\n        }\n\n        driver.switchTo().window(firstWindow);\n        assertThat(driver.getTitle(), is(not(equalTo("New Window"))));\n\n        driver.switchTo().window(newWindow);\n        \n        Thread.sleep(2000);\n        assertThat(driver.getTitle(), is(equalTo("New Window")));\n        Thread.sleep(2000);\n    }\n\n}\n')),(0,a.kt)("p",null,"After loading the page we store the window handle in a variable (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"firstWindow"),") and then proceed with clicking the new window link."),(0,a.kt)("p",null,"Now that we have two windows open we grab all of the window handles and search through them to find the new window handle (e.g., the handle that doesn't match the one we've already stored). We store the new window result in another variable (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"newWindow"),") and then switch between the windows, checking page title each time to make sure the correct window is in focus."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"If you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen for either example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Click to open a new window"),(0,a.kt)("li",{parentName:"ul"},"Switch between the windows"),(0,a.kt)("li",{parentName:"ul"},"Check the page title to make sure the correct window is in focus"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"I hope this was a helpful guide on how to work with and switch between multiple windows using Selenium."),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/jimevansmusic"},"Jim Evans")," for providing the info for this tip, and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for the initial code contribution."),(0,a.kt)("p",null,"For more information about switching windows (and tabs) visit the official Selenium HQ ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/interactions/windows/"},"documentation page"),"."),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}u.isMDXComponent=!0}}]);