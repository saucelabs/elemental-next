"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,d=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(d,i(i({ref:t},h),{},{components:n})):a.createElement(d,i({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"16: Take Screenshot on Failure",id:"16-take-screenshot-on-failure-python",contentUrl:"docs/take-screenshot-on-failure/16-take-screenshot-on-failure-python",sidebar_label:"Python",text:"With browser tests it can often be challenging to track down the issue that caused a failure. By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future.",number:16,hide_table_of_contents:!0,publish_date:new Date("2016-11-26T00:00:00.000Z"),last_update:{date:new Date("2023-03-14T00:00:00.000Z")},tags:["reporting","screenshot"],level:2,category:["troubleshooting"],language:"python"},i="How to Take A Screenshot On Failure",s={unversionedId:"take-screenshot-on-failure/16-take-screenshot-on-failure-python",id:"take-screenshot-on-failure/16-take-screenshot-on-failure-python",title:"16: Take Screenshot on Failure",description:"Intro",source:"@site/docs/16-take-screenshot-on-failure/python.md",sourceDirName:"16-take-screenshot-on-failure",slug:"/take-screenshot-on-failure/16-take-screenshot-on-failure-python",permalink:"/elemental-next/docs/take-screenshot-on-failure/16-take-screenshot-on-failure-python",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/16-take-screenshot-on-failure/python.md",tags:[{label:"reporting",permalink:"/elemental-next/docs/tags/reporting"},{label:"screenshot",permalink:"/elemental-next/docs/tags/screenshot"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1678752e3,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{title:"16: Take Screenshot on Failure",id:"16-take-screenshot-on-failure-python",contentUrl:"docs/take-screenshot-on-failure/16-take-screenshot-on-failure-python",sidebar_label:"Python",text:"With browser tests it can often be challenging to track down the issue that caused a failure. By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future.",number:16,hide_table_of_contents:!0,publish_date:"2016-11-26T00:00:00.000Z",last_update:{date:"2023-03-14T00:00:00.000Z"},tags:["reporting","screenshot"],level:2,category:["troubleshooting"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/elemental-next/docs/take-screenshot-on-failure/16-take-screenshot-on-failure-javascript"},next:{title:"Ruby",permalink:"/elemental-next/docs/take-screenshot-on-failure/16-take-screenshot-on-failure-ruby"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],h={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-take-a-screenshot-on-failure"},"How to Take A Screenshot On Failure"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"With browser tests it can often be challenging to track down the issue that caused a failure."),(0,r.kt)("p",null,"By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"A simple way to gain insight into your test failures is to capture screenshots at the moment of failure. And it's a quick and easy thing to add to your tests."),(0,r.kt)("p",null,"Let's start with an example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's start by importing our requisite libraries (",(0,r.kt)("inlineCode",{parentName:"p"},"import unittest")," for our test framework, ",(0,r.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver")," to drive the browser, and ",(0,r.kt)("inlineCode",{parentName:"p"},"import sys")," to determine when there's a test failure), declare our test class, and write test ",(0,r.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# filename: screenshot.py\nimport sys\nimport unittest\nfrom selenium import webdriver\n\n\nclass ScreenShotOnFailure(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Chrome()\n\n    def tearDown(self):\n        if sys.exc_info():\n            self.driver.save_screenshot("failshot_%s.png" % self._testMethodName)\n        self.driver.quit()\n# ...\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown")," we check to see if ",(0,r.kt)("inlineCode",{parentName:"p"},"sys.exc_info()")," exists. If it does, then there's been a test failure and we capture a screenshot through the help of Selenium's ",(0,r.kt)("inlineCode",{parentName:"p"},".save_screenshot")," method. ",(0,r.kt)("inlineCode",{parentName:"p"},".save_screenshot")," accepts a filename as a string (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"'failshot.png'"),"). To make the filename unique we use the test method name (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"self._testMethodName"),"). When this command executes it will save an image file to the local system in the current working directory."),(0,r.kt)("p",null,"Now to wire up a test which will fail."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: screenshot.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com')\n        assert driver.title == 'blah blah blah'\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (",(0,r.kt)("inlineCode",{parentName:"p"},"python screenshot.py")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Load the homepage of ",(0,r.kt)("a",{parentName:"li",href:"http://github.com/tourdedave/the-internet"},"the-internet")),(0,r.kt)("li",{parentName:"ul"},"Check the text of the page header and fail"),(0,r.kt)("li",{parentName:"ul"},"Output a failure message in the terminal"),(0,r.kt)("li",{parentName:"ul"},"Capture a screenshot in the current working directory"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Having a screenshot to aid in troubleshooting failing tests along with a stack trace helps in having more insight. Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"import sys")," determines when there's been a test failure."),(0,r.kt)("p",null,"If you want truly unique filenames, then you should use a unique ID in the filename instead of a timestamp (e.g., something like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/assaf/uuid"},(0,r.kt)("inlineCode",{parentName:"a"},"uuid")),"). This will prevent screenshots from getting overwritten when you have two (or more) tests taking screenshots at the same time."),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}p.isMDXComponent=!0}}]);