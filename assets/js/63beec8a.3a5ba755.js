"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1276],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"How To Use Selenium Grid",id:"52-how-to-use-selenium-grid-java",contentUrl:"docs/grid/52-how-to-use-selenium-grid-java",sidebar_label:"Java",text:"With Selenium Grid you can stand up a simple infrastructure of various browsers on different operating systems to not only distribute test load, but also give you a diversity of browsers to work with.",number:52,hide_table_of_contents:!0,publish_date:new Date("2015-11-11T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["grid","selenium grid","cross browser"],level:2,category:["tools"],language:"java"},i="How to Use Selenium Grid",s={unversionedId:"grid/52-how-to-use-selenium-grid-java",id:"grid/52-how-to-use-selenium-grid-java",title:"How To Use Selenium Grid",description:"Intro",source:"@site/docs/52-grid/java.mdx",sourceDirName:"52-grid",slug:"/grid/52-how-to-use-selenium-grid-java",permalink:"/docs/grid/52-how-to-use-selenium-grid-java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/52-grid/java.mdx",tags:[{label:"grid",permalink:"/docs/tags/grid"},{label:"selenium grid",permalink:"/docs/tags/selenium-grid"},{label:"cross browser",permalink:"/docs/tags/cross-browser"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"How To Use Selenium Grid",id:"52-how-to-use-selenium-grid-java",contentUrl:"docs/grid/52-how-to-use-selenium-grid-java",sidebar_label:"Java",text:"With Selenium Grid you can stand up a simple infrastructure of various browsers on different operating systems to not only distribute test load, but also give you a diversity of browsers to work with.",number:52,hide_table_of_contents:!0,publish_date:"2015-11-11T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["grid","selenium grid","cross browser"],level:2,category:["tools"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/how-to-work-with-javascript-alerts/51-javascript-alerts-ruby"},next:{title:"Javascript",permalink:"/docs/grid/52-how-to-use-selenium-grid-javascript"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Part 1: Grid Setup",id:"part-1-grid-setup",level:3},{value:"Part 2: Test Setup",id:"part-2-test-setup",level:3},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-selenium-grid"},"How to Use Selenium Grid"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"If you're looking to run your tests on different browser and operating system combinations but you're unable to justify using\na third-party solution like ",(0,a.kt)("a",{parentName:"p",href:"https://saucelabs.com/"},"Sauce Labs")," or ",(0,a.kt)("a",{parentName:"p",href:"http://www.browserstack.com/"},"BrowserStack")," then what\ndo you do?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/grid/"},"Selenium Grid")," you can stand up a simple infrastructure of various browsers on different operating systems to not only distribute test load, but also give you a diversity of browsers to work with."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A brief primer of Selenium Grid"),(0,a.kt)("p",{parentName:"blockquote"},"Selenium Grid is part of ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/"},"the Selenium project"),". It lets you distribute test execution across several machines. You can connect to it with a remote WebDriver by specifying the browser, browser version, and operating system you want. You specify these values through Selenium ",(0,a.kt)("inlineCode",{parentName:"p"},"Capabilities"),"."),(0,a.kt)("p",{parentName:"blockquote"},'There are two main elements to Selenium Grid -- a Hub, and Nodes. First you need to stand up a Hub. Then you can connect (or "register") Nodes to that Hub.\nNodes are where your tests will run, and the Hub is responsible for making sure your tests end up on the right one (e.g., the machine with the operating\nsystem and browser you specified in your test).')),(0,a.kt)("p",null,"Let's continue with an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"part-1-grid-setup"},"Part 1: Grid Setup"),(0,a.kt)("p",null,"Selenium Grid comes built into the Selenium Standalone Server. So to get started we'll need to download the latest version of it from the Selenium\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/releases"},"releases"),"."),(0,a.kt)("p",null,"Then we need to start the Hub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> java -jar selenium-server-<version>.jar hub\n...\n16:49:29.816 INFO [Hub.execute] - Started Selenium Hub\n...\n")),(0,a.kt)("p",null,"After that we can register Nodes to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> java -jar selenium-server-<version>.jar node --hub http://localhost:4444\n...\n16:51:47.726 INFO [NodeServer.execute] - Started Selenium Node\n...\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: This example only demonstrates a single node on the same machine as the hub. To span nodes across multiple machines you will need to place the standalone server on each machine and launch it with the same registration command (replacing ",(0,a.kt)("inlineCode",{parentName:"strong"},"http://localhost")," with the location of your hub, and specifying additional parameters as needed).")),(0,a.kt)("p",null,"Now that the grid is running we can view the available browsers by visiting our Grid's console at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4444/grid/console"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Grid Console",src:r(4180).Z,width:"823",height:"565"})),(0,a.kt)("p",null,"To refine the list of available browsers, we can specify an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"--driver-implementation")," parameter when registering the Node.\nFor instance, if we wanted to only offer Safari on a node, we could specify it with ",(0,a.kt)("inlineCode",{parentName:"p"},"--driver-implementation safari"),", which would look\nlike this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar selenium-server-<version>.jar node --hub http://localhost:4444 --driver-implementation safari\n")),(0,a.kt)("p",null,"We could also repeat this parameter again if we wanted to explicitly specify more than one browser."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar selenium-server-<version>.jar node --hub http://localhost:4444 --driver-implementation safari --driver-implementation chrome\n")),(0,a.kt)("p",null,"There are numerous parameters that we can use at run time. You can see a full list at the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/grid/configuration/cli_options/"},"Selenium Grid documentation"),"."),(0,a.kt)("h3",{id:"part-2-test-setup"},"Part 2: Test Setup"),(0,a.kt)("p",null,"Now let's wire up a simple test to use our new Grid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Grid.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport java.net.URL;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class Grid {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        FirefoxOptions capabilities = new FirefoxOptions();\n        String url = "http://localhost:4444";\n        driver = new RemoteWebDriver(new URL(url), capabilities);\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n\n    @Test\n    public void gridTest() {\n        driver.get("http://the-internet.herokuapp.com/");\n        assertThat(driver.getTitle(), is(equalTo("The Internet")));\n    }\n\n}\n')),(0,a.kt)("p",null,"Notice in this configuration we're using a remote WebDriver in Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"new RemoteWebDriver()"),") to connect to the Grid.\nAnd we are telling the Grid which browser we want to use with the browser options (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"new FirefoxOptions();"),")."),(0,a.kt)("p",null,"You can see a full list of the available browser options at the ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/browsers/"},"Selenium documentation"),"."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect to the Grid Hub"),(0,a.kt)("li",{parentName:"ul"},"Hub determines which Node has the necessary browser/platform combination"),(0,a.kt)("li",{parentName:"ul"},"Hub connects the test to the Node"),(0,a.kt)("li",{parentName:"ul"},"Browser opens on the Node"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Browser closes on the Node")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"If you're looking to set up Selenium Grid to work with Internet Explorer or Chrome, be sure to read up on how to set them up since there is\nadditional configuration required for each. And if you run into issues, be sure to check out the browser driver documentation for the\nbrowser you're working with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chromedriver.chromium.org/"},"ChromeDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html"},"FirefoxDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/webkit/about_webdriver_for_safari"},"SafariDriver"))),(0,a.kt)("p",null,"Also, it's worth noting that while Selenium Grid is a great option for scaling your test infrastructure, it by itself will NOT give you\nparallelization. That is to say, it can handle as many connections as you throw at it (within reason), but you will still need to find a\nway to execute your tests in parallel."),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of\ntesting professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International,\nSittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around\nthe world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:r(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},4180:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grid-console-9bf5440f0883d8546a58533d06efed07.png"},9417:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);