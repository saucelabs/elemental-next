"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8448],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(r),m=a,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Java",id:"50-hovers-java",slug:"java/",number:50,publish_date:new Date("2015-07-01T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")},tags:["hover","hovers","action builder"],level:1,category:["fundamentals"],language:"java"},i="How to Work with Hovers",l={unversionedId:"how-to-work-with-hovers/50-hovers-java",id:"how-to-work-with-hovers/50-hovers-java",title:"Java",description:"Intro",source:"@site/docs/50-how-to-work-with-hovers/java.md",sourceDirName:"50-how-to-work-with-hovers",slug:"/how-to-work-with-hovers/java/",permalink:"/elemental-next/docs/how-to-work-with-hovers/java/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/50-how-to-work-with-hovers/java.md",tags:[{label:"hover",permalink:"/elemental-next/docs/tags/hover"},{label:"hovers",permalink:"/elemental-next/docs/tags/hovers"},{label:"action builder",permalink:"/elemental-next/docs/tags/action-builder"}],version:"current",frontMatter:{title:"Java",id:"50-hovers-java",slug:"java/",number:50,publish_date:"2015-07-01T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"},tags:["hover","hovers","action builder"],level:1,category:["fundamentals"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"CSharp",permalink:"/elemental-next/docs/how-to-work-with-hovers/csharp/"},next:{title:"Javascript",permalink:"/elemental-next/docs/how-to-work-with-hovers/javascript/"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},h="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-work-with-hovers"},"How to Work with Hovers"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"The most popular use case for a hover action is to display additional menu options(submenu.)"),(0,a.kt)("p",null,"By leveraging Selenium's ",(0,a.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html"},"Action Builder")," we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Our example application is available ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/hovers"},"here")," on ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile."),(0,a.kt)("p",null,"Let's write a test that will hover over the first avatar and make sure that this additional information appears."),(0,a.kt)("p",null,"First we'll import our requisite classes (for annotations (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// filename: Hovers.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport java.time.Duration;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport org.openqa.selenium.interactions.Actions;\nimport org.openqa.selenium.support.ui.ExpectedConditions;\nimport org.openqa.selenium.support.ui.WebDriverWait;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class Hovers {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,a.kt)("p",null,"Now let's write our test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// ...\n    @Test\n    public void hoversTest() {\n        driver.get("http://the-internet.herokuapp.com/hovers");\n\n        WebElement avatar = driver.findElement(By.className("figure"));\n        Actions builder = new Actions(driver);\n        builder.moveToElement(avatar).build().perform();\n\n        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));\n        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("figcaption")));\n\n        assertThat(driver.findElement(By.className("figcaption")).isDisplayed(), is(Boolean.TRUE));\n    }\n\n}\n')),(0,a.kt)("p",null,"After visiting the page we find the first avatar and store it in a variable (",(0,a.kt)("inlineCode",{parentName:"p"},"avatar"),"). We then use Selenium's ",(0,a.kt)("inlineCode",{parentName:"p"},"action.moveToElement")," method and pass the avatar variable to it (which triggers the hover) and check to see if the additional user information displayed."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Hover over the first avatar"),(0,a.kt)("li",{parentName:"ul"},"Assert that the caption displayed to the user"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this will help you handle more complex user interactions like hovers."),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);