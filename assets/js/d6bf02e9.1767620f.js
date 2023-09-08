"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[86790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={language:"python",level:2,hide_sidebar:!0,publish_date:new Date("2016-11-17T00:00:00.000Z"),last_update:{date:new Date("2023-02-24T00:00:00.000Z")}},i=void 0,l={unversionedId:"grid/python",id:"grid/python",title:"python",description:"A Solution",source:"@site/docs/52-grid/python.md",sourceDirName:"52-grid",slug:"/grid/python",permalink:"/docs/grid/python",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/52-grid/python.md",tags:[],version:"current",lastUpdatedBy:"discombobulateme",lastUpdatedAt:1677196800,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{language:"python",level:2,hide_sidebar:!0,publish_date:"2016-11-17T00:00:00.000Z",last_update:{date:"2023-02-24T00:00:00.000Z"}}},s={},u=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Part 1: Grid Setup",id:"part-1-grid-setup",level:3},{value:"Part 2: Test Setup",id:"part-2-test-setup",level:3},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/grid/"},"Selenium Grid")," you can stand up a simple infrastructure of various browsers on different operating systems to not only distribute test load, but also give you a diversity of browsers to work with."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A brief primer of Selenium Grid"),(0,a.kt)("p",{parentName:"blockquote"},"Selenium Grid is part of ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/"},"the Selenium project"),". It lets you distribute test execution across several machines. You can connect to it with a remote WebDriver by specifying the browser, browser version, and operating system you want. You specify these values through Selenium ",(0,a.kt)("inlineCode",{parentName:"p"},"Capabilities"),"."),(0,a.kt)("p",{parentName:"blockquote"},'There are two main elements to Selenium Grid -- a Hub, and Nodes. First you need to stand up a Hub. Then you can connect (or "register") Nodes to that Hub.\nNodes are where your tests will run, and the Hub is responsible for making sure your tests end up on the right one (e.g., the machine with the operating\nsystem and browser you specified in your test).')),(0,a.kt)("p",null,"Let's continue with an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"part-1-grid-setup"},"Part 1: Grid Setup"),(0,a.kt)("p",null,"Selenium Grid comes built into the Selenium Standalone Server. So to get started we'll need to download the latest version of it from the Selenium\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/releases"},"releases"),"."),(0,a.kt)("p",null,"Then we need to start the Hub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> java -jar selenium-server-<version>.jar hub\n...\n16:49:29.816 INFO [Hub.execute] - Started Selenium Hub\n...\n")),(0,a.kt)("p",null,"After that we can register Nodes to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> java -jar selenium-server-<version>.jar node --hub http://localhost:4444\n...\n16:51:47.726 INFO [NodeServer.execute] - Started Selenium Node\n...\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: This example only demonstrates a single node on the same machine as the hub. To span nodes across multiple machines you will need to place the standalone server on each machine and launch it with the same registration command (replacing ",(0,a.kt)("inlineCode",{parentName:"strong"},"http://localhost")," with the location of your hub, and specifying additional parameters as needed).")),(0,a.kt)("p",null,"Now that the grid is running we can view the available browsers by visiting our Grid's console at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4444/grid/console"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Grid Console",src:n(74180).Z,width:"823",height:"565"})),(0,a.kt)("p",null,"To refine the list of available browsers, we can specify an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"--driver-implementation")," parameter when registering the Node.\nFor instance, if we wanted to only offer Safari on a node, we could specify it with ",(0,a.kt)("inlineCode",{parentName:"p"},"--driver-implementation safari"),", which would look\nlike this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar selenium-server-<version>.jar node --hub http://localhost:4444 --driver-implementation safari\n")),(0,a.kt)("p",null,"We could also repeat this parameter again if we wanted to explicitly specify more than one browser."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar selenium-server-<version>.jar node --hub http://localhost:4444 --driver-implementation safari --driver-implementation chrome\n")),(0,a.kt)("p",null,"There are numerous parameters that we can use at run time. You can see a full list at the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/grid/configuration/cli_options/"},"Selenium Grid documentation"),"."),(0,a.kt)("h3",{id:"part-2-test-setup"},"Part 2: Test Setup"),(0,a.kt)("p",null,"Now let's wire up a simple test script to use our new Grid."),(0,a.kt)("p",null,"First we'll need to pull in our requisite libraries (",(0,a.kt)("inlineCode",{parentName:"p"},"import unittest")," for our test framework and ",(0,a.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver")," to drive the browser), declare our test class, and wire up some test ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: grid.py\nimport unittest\nfrom selenium import webdriver\n\n\nclass Grid(unittest.TestCase):\n\n    def setUp(self):\n        firefox_options = webdriver.FirefoxOptions()\n        self.driver = webdriver.Remote(\n            command_executor='http://localhost:4444/wd/hub',\n            options=firefox_options\n        )\n\n    def tearDown(self):\n        self.driver.quit()\n\n    def test_page_loaded(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com')\n        assert driver.title == 'The Internet'\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,a.kt)("p",null,"Notice in ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp")," we're using remote WebDriver in Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"webdriver.Remote"),") to connect to the Grid.\nAnd we are telling the Grid which browser we want to use with the browser options (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"firefox_options = webdriver.FirefoxOptions()"),")."),(0,a.kt)("p",null,"You can see a full list of the available browser options at the ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/browsers/"},"Selenium documentation"),"."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"python grid.py")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect to the Grid Hub"),(0,a.kt)("li",{parentName:"ul"},"Hub determines which Node has the necessary browser/platform combination"),(0,a.kt)("li",{parentName:"ul"},"Hub connects the test to the Node"),(0,a.kt)("li",{parentName:"ul"},"Browser opens on the Node"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Browser closes on the Node")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"If you're looking to set up Selenium Grid to work with Internet Explorer or Chrome, be sure to read up on how to set them up since there is\nadditional configuration required for each. And if you run into issues, be sure to check out the browser driver documentation for the\nbrowser you're working with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chromedriver.chromium.org/"},"ChromeDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html"},"FirefoxDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/webkit/about_webdriver_for_safari"},"SafariDriver"))),(0,a.kt)("p",null,"Also, it's worth noting that while Selenium Grid is a great option for scaling your test infrastructure, it by itself will NOT give you\nparallelization. That is to say, it can handle as many connections as you throw at it (within reason), but you will still need to find a\nway to execute your tests in parallel."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of\ntesting professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International,\nSittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around\nthe world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}m.isMDXComponent=!0},74180:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/grid-console-9bf5440f0883d8546a58533d06efed07.png"},89417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);