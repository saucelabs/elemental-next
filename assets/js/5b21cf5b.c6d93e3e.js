"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7844],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,p=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(p,i(i({ref:t},m),{},{components:r})):n.createElement(p,i({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"29: Chrome Driver",id:"29-chrome-driver-java",contentUrl:"docs/chrome-driver/29-chrome-driver-java",sidebar_label:"Java",text:"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started.",number:29,hide_table_of_contents:!0,publish_date:new Date("2016-11-26T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")},tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:["fundamentals","remote"],language:"java"},i="How to Run Your Tests Locally Against Chrome",l={unversionedId:"chrome-driver/29-chrome-driver-java",id:"chrome-driver/29-chrome-driver-java",title:"29: Chrome Driver",description:"Intro",source:"@site/docs/29-chrome-driver/java.md",sourceDirName:"29-chrome-driver",slug:"/chrome-driver/29-chrome-driver-java",permalink:"/elemental-next/docs/chrome-driver/29-chrome-driver-java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/29-chrome-driver/java.md",tags:[{label:"drivers",permalink:"/elemental-next/docs/tags/drivers"},{label:"chromedriver",permalink:"/elemental-next/docs/tags/chromedriver"},{label:"chrome",permalink:"/elemental-next/docs/tags/chrome"},{label:"different browsers",permalink:"/elemental-next/docs/tags/different-browsers"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:168048e4,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{title:"29: Chrome Driver",id:"29-chrome-driver-java",contentUrl:"docs/chrome-driver/29-chrome-driver-java",sidebar_label:"Java",text:"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started.",number:29,hide_table_of_contents:!0,publish_date:"2016-11-26T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"},tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:["fundamentals","remote"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"Csharp",permalink:"/elemental-next/docs/chrome-driver/29-chrome-driver-csharp"},next:{title:"Python",permalink:"/elemental-next/docs/chrome-driver/29-chrome-driver-python"}},s={},c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-run-your-tests-locally-against-chrome"},"How to Run Your Tests Locally Against Chrome"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started. "),(0,a.kt)("p",null,"With the introduction of WebDriver (circa Selenium 2) a lot of benefits were realized (e.g. more effective & faster browser execution, no more single host origin issues, etc). But with it came some architectural & configuration differences that may not be widely known. Namely -- browser drivers."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/"},"WebDriver")," works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"ChromeDriver")," is Google Chrome's browser driver. In this specific use case is of using WebDriver with Chrome in testing locally."),(0,a.kt)("p",null,"Let's step through an example using ChromeDriver (",(0,a.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"download here"),")."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,a.kt)("a",{parentName:"p",href:"http://chromedriver.storage.googleapis.com/index.html"},"here"),". Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add it to the System PATH"),(0,a.kt)("li",{parentName:"ul"},"Specify it in the Selenium setup")),(0,a.kt)("p",null,"We'll start by importing our requisite classes (for annotations (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: ChromeDriverExample.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.chrome.ChromeDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.junit.Assert.assertThat;\n\npublic class ChromeDriverExample {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        System.setProperty("web-driver.chrome.driver",\n                System.getProperty("user.dir") + "/../../vendor/chrome-driver-2.15/chromedriver_mac32");\n        driver = new ChromeDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n')),(0,a.kt)("p",null,"Notice that in ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp")," we are telling Selenium where the ChromeDriver exectuable is with ",(0,a.kt)("inlineCode",{parentName:"p"},'setProperty("webdriver.chrome.driver"')," before creating an instance of the browser. And by using ",(0,a.kt)("inlineCode",{parentName:"p"},'System.getProperty("user.dir")')," we are able to reference the ChromeDriver binary within our project."),(0,a.kt)("p",null,"Now we're ready to add a test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: ChromeDriverExample.java\n// ...\n    @Test\n    public void chromeDriverTest() {\n        driver.get("http://the-internet.herokuapp.com/");\n        assertThat(driver.getTitle(), is(equalTo("The Internet")));\n    }\n\n}\n')),(0,a.kt)("p",null,"If we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean test"),") it will launch an instance of Chrome, visit the homepage of ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/"},"the-internet"),", and assert that the page title loaded."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ChromeDriver starts"),(0,a.kt)("li",{parentName:"ul"},"Chrome opens"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Chrome closes"),(0,a.kt)("li",{parentName:"ul"},"ChromeDriver stops")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference"},"Selenium Quick Reference page for Installing Browser Drivers"),"."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);