"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[67966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,c=m["".concat(s,".").concat(d)]||m[d]||h[d]||i;return r?n.createElement(c,o(o({ref:t},u),{},{components:r})):n.createElement(c,o({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={language:"python",level:2,hide_sidebar:!0,publish_date:new Date("2016-11-26T00:00:00.000Z"),last_update:{date:new Date("2023-03-09T00:00:00.000Z")}},o=void 0,l={unversionedId:"chrome-driver/python",id:"chrome-driver/python",title:"python",description:"A Solution",source:"@site/docs/29-chrome-driver/python.md",sourceDirName:"29-chrome-driver",slug:"/chrome-driver/python",permalink:"/docs/chrome-driver/python",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/29-chrome-driver/python.md",tags:[],version:"current",lastUpdatedBy:"discombobulateme",lastUpdatedAt:167832e4,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{language:"python",level:2,hide_sidebar:!0,publish_date:"2016-11-26T00:00:00.000Z",last_update:{date:"2023-03-09T00:00:00.000Z"}}},s={},p=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},m="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/"},"WebDriver")," works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"ChromeDriver")," is Google Chrome's browser driver. In this specific use case is of using WebDriver with Chrome in testing locally."),(0,a.kt)("p",null,"Let's step through an example using ChromeDriver (",(0,a.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"download here"),")."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,a.kt)("a",{parentName:"p",href:"http://chromedriver.storage.googleapis.com/index.html"},"here"),". Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add it to the System PATH"),(0,a.kt)("li",{parentName:"ul"},"Specify it in the Selenium setup")),(0,a.kt)("p",null,"We'll start by pulling in our requisite libraries for interacting with the operating system (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"import os"),"), our testing framework (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"import unittest"),"), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver"),"), declare our test class, and wire up some test ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: chrome.py\nimport os\nimport unittest\nfrom selenium import webdriver\n\n\nclass Chrome(unittest.TestCase):\n\n    def setUp(self):\n        chromedriver_path = os.getcwd() + '/vendor/chromedriver'\n        self.driver = webdriver.Chrome(chromedriver_path)\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n")),(0,a.kt)("p",null,"Notice that in ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp")," we are telling Selenium where the ChromeDriver exectuable is with ",(0,a.kt)("inlineCode",{parentName:"p"},"chromedriver_path")," before creating an instance of the browser and passing it in as an argument."),(0,a.kt)("p",null,"Now we're ready to add a simple test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: chrome.rb\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/upload')\n        assert driver.title == 'The Internet'\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,a.kt)("p",null,"When we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"python chrome.py"),") it will launch an instance of Chrome, visit the homepage of ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/"},"the-internet"),", and assert that the page title loaded."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"python chrome.py")," from the command-line) here is what will happen."),(0,a.kt)("u",null,"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ChromeDriver starts"),(0,a.kt)("li",{parentName:"ul"},"Chrome opens"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Chrome closes"),(0,a.kt)("li",{parentName:"ul"},"ChromeDriver stops")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference"},"Selenium Quick Reference page for Installing Browser Drivers"),"."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:r(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);