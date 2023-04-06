"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,c=h["".concat(p,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={title:"Python",id:"12-opt-out-of-ab-tests-python",slug:"python/",number:12,publish_date:new Date("2016-11-19T00:00:00.000Z"),last_update:{date:new Date("2023-03-14T00:00:00.000Z")},tags:["ab tests","optimizely","opt-out"],level:2,category:["troubleshooting"],language:"python"},i="How to Opt-out of A/B Tests",s={unversionedId:"updated-tips/opt-out-of-ab-tests/12-opt-out-of-ab-tests-python",id:"updated-tips/opt-out-of-ab-tests/12-opt-out-of-ab-tests-python",title:"Python",description:"Intro",source:"@site/docs/updated-tips/12-opt-out-of-ab-tests/python.md",sourceDirName:"updated-tips/12-opt-out-of-ab-tests",slug:"/updated-tips/opt-out-of-ab-tests/python/",permalink:"/elemental-next/docs/updated-tips/opt-out-of-ab-tests/python/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/12-opt-out-of-ab-tests/python.md",tags:[{label:"ab tests",permalink:"/elemental-next/docs/tags/ab-tests"},{label:"optimizely",permalink:"/elemental-next/docs/tags/optimizely"},{label:"opt-out",permalink:"/elemental-next/docs/tags/opt-out"}],version:"current",frontMatter:{title:"Python",id:"12-opt-out-of-ab-tests-python",slug:"python/",number:12,publish_date:"2016-11-19T00:00:00.000Z",last_update:{date:"2023-03-14T00:00:00.000Z"},tags:["ab tests","optimizely","opt-out"],level:2,category:["troubleshooting"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/elemental-next/docs/updated-tips/opt-out-of-ab-tests/javascript/"},next:{title:"Ruby",permalink:"/elemental-next/docs/updated-tips/opt-out-of-ab-tests/ruby/"}},p={},l=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:l},h="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-opt-out-of-ab-tests"},"How to Opt-out of A/B Tests"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Occasionally when running tests you may see unexpected behavior due to ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/A/B_testing"},"A/B testing (a.k.a. split testing)")," of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"First, here is a primer on Split Testing."),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"split-testing"},"Split Testing"),(0,o.kt)("p",{parentName:"blockquote"},"Split testing is a simple way to experiment with an application's features to see which changes lead to higher user engagement. A simple example would be testing variations of an e-mail landing page to see if more people sign up. In such a split test there would be the control (how the application looks and behaves now) and variants (e.g., 2 or 3 changes that could include changing text or images on the page, element positioning, color of the submit button, etc)."),(0,o.kt)("p",{parentName:"blockquote"},"Once the variants are configured, they are put into rotation, and the experiment starts. During this experiment each user will see a different version of the feature and their engagement with it will be tracked. Split tests live for the length of the experiment or until a winner is found (e.g., tracking indicates that a variant converted higher than the control). If no winner is found, new variants may be created and another experiment tried. If a winner is found, then the winning variant becomes the new control and the feature gets updated accordingly.")),(0,o.kt)("p",null,"Thankfully there are some standard opt-out mechanisms built into A/B testing platforms. They tend to come in the form of an appended URL or forging a cookie."),(0,o.kt)("p",null,"Let's start with an example for each approach with a popular A/B testing platform, ",(0,o.kt)("a",{parentName:"p",href:"https://www.optimizely.com/"},"Optimizely"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Our example page is from ",(0,o.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet")," and can be seen ",(0,o.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/abtest"},"here"),". There are three different versions of the page that are available. On each page the heading text will vary:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Control: ",(0,o.kt)("inlineCode",{parentName:"li"},"A/B Test Control")),(0,o.kt)("li",{parentName:"ul"},"Variation 1: ",(0,o.kt)("inlineCode",{parentName:"li"},"A/B Test Variation 1")),(0,o.kt)("li",{parentName:"ul"},"Opt-out: ",(0,o.kt)("inlineCode",{parentName:"li"},"No A/B Test"))),(0,o.kt)("p",null,"Let's start things off by loading our requisite libraries (",(0,o.kt)("inlineCode",{parentName:"p"},"import unittest")," for our test framework and ",(0,o.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver")," to drive the browser), declare our test class, and wire up some test ",(0,o.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# filename: ab_test_opt_out.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\n\nclass ABTestOptOut(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n")),(0,o.kt)("p",null,"Now let's begin our first test to step through loading the split testing page and verifying that the text changes after we forge an opt-out cookie."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# filename: ab_test_opt_out.py\n# ...\n    def test_forge_cookie_on_target_page(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/abtest')\n        heading_text = driver.find_element(By.TAG_NAME,'h3').text\n        assert heading_text in ['A/B Test Variation 1', 'A/B Test Control']\n        driver.add_cookie({'name' : 'optimizelyOptOut', 'value' : 'true'})\n        driver.refresh()\n        heading_text = driver.find_element(By.TAG_NAME,'h3').text\n        assert heading_text == 'No A/B Test'\n\n# ...\n")),(0,o.kt)("p",null,"After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it matches what we expect. After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again."),(0,o.kt)("p",null,"We could also load the opt-out cookie before navigating to this page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# filename: ab_test_opt_out.py\n# ...\n    def test_forge_cookie_on_homepage_then_navigate_to_target_page(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com')\n        driver.add_cookie({'name' : 'optimizelyOptOut', 'value' : 'true'})\n        driver.get('http://the-internet.herokuapp.com/abtest')\n        heading_text = driver.find_element(By.TAG_NAME,'h3').text\n        assert heading_text == 'No A/B Test'\n\n# ...\n")),(0,o.kt)("p",null,"Here we are navigating to the main page of the site first and then adding the opt-out cookie. After that we navigate to the split test page and then perform our check. Alternatively, we could opt out without forging a cookie. Instead we just need to append an opt out parameter to the URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# filename: ab_test_opt_out.py\n    def test_url_parameter(self):\n            driver = self.driver\n            driver.get('http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true')\n            driver.switch_to.alert.dismiss()\n            heading_text = driver.find_element(By.TAG_NAME,'h3').text\n            assert heading_text == 'No A/B Test'\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,o.kt)("p",null,"By appending ",(0,o.kt)("inlineCode",{parentName:"p"},"?optimizely_opt_out=true")," we achieve the same outcome as before. Keep in mind that this approach triggers a JavaScript alert, so we have to switch to and dismiss it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"driver.switch_to.alert.dismiss()"),") before performing our check."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When we save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"python ab_test_opt_out.py")," from the command-line) here is what will happen with either of the tests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the browser"),(0,o.kt)("li",{parentName:"ul"},"Opt-out of the split tests (either by cookie or appended URL)"),(0,o.kt)("li",{parentName:"ul"},"Visit the split testing page"),(0,o.kt)("li",{parentName:"ul"},"Grab the header text"),(0,o.kt)("li",{parentName:"ul"},"Confirm that the session is opted out of the split test"),(0,o.kt)("li",{parentName:"ul"},"Close the browser")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Hopefully this tip was helpful in guiding you in different methods of how to opt out of split tests."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);