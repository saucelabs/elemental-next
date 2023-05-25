"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5029],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(a),d=i,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={title:"Work With Basic Auth",id:"13-work-with-basic-auth-python",contentUrl:"docs/how-to-access-basic-auth/13-work-with-basic-auth-python",sidebar_label:"Python",text:"Sometimes you'll work with applications that are secured behind Basic HTTP Authentication. In order to access them you'll need to pass credentials to the site when requesting a page otherwise you'll get a system level pop-up prompting you for a username and password rendering Selenium helpless.",number:13,hide_table_of_contents:!0,publish_date:new Date("2016-11-17T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["authentication"],level:1,category:["troubleshooting"],language:"python"},s="How to Access Basic Auth",o={unversionedId:"how-to-access-basic-auth/13-work-with-basic-auth-python",id:"how-to-access-basic-auth/13-work-with-basic-auth-python",title:"Work With Basic Auth",description:"Intro",source:"@site/docs/13-how-to-access-basic-auth/python.mdx",sourceDirName:"13-how-to-access-basic-auth",slug:"/how-to-access-basic-auth/13-work-with-basic-auth-python",permalink:"/elemental-next/docs/how-to-access-basic-auth/13-work-with-basic-auth-python",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/13-how-to-access-basic-auth/python.mdx",tags:[{label:"authentication",permalink:"/elemental-next/docs/tags/authentication"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"Work With Basic Auth",id:"13-work-with-basic-auth-python",contentUrl:"docs/how-to-access-basic-auth/13-work-with-basic-auth-python",sidebar_label:"Python",text:"Sometimes you'll work with applications that are secured behind Basic HTTP Authentication. In order to access them you'll need to pass credentials to the site when requesting a page otherwise you'll get a system level pop-up prompting you for a username and password rendering Selenium helpless.",number:13,hide_table_of_contents:!0,publish_date:"2016-11-17T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["authentication"],level:1,category:["troubleshooting"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/elemental-next/docs/how-to-access-basic-auth/13-work-with-basic-auth-javascript"},next:{title:"Ruby",permalink:"/elemental-next/docs/how-to-access-basic-auth/13-work-with-basic-auth-ruby"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},h="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-access-basic-auth"},"How to Access Basic Auth"),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"In this guide, you will learn how to pass credentials to a site when requesting a page that is secured behind Basic HTTP Authentication."),(0,i.kt)("p",null,"Sometimes you'll work with applications that are secured behind ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic HTTP Authentication")," (a.k.a. Basic Auth). In order to access them you'll need to pass credentials to the site when requesting a page otherwise you'll get a system level pop-up prompting you for a username and password -- rendering Selenium helpless."),(0,i.kt)("p",null,"Before Selenium 2 we were able to accomplish this by injecting credentials into a custom header, but now a popular way to do it is using something like ",(0,i.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"BrowserMob Proxy"),". Some people are also solving this issue with browser specific configurations but those methods feel a little heavy and complicated."),(0,i.kt)("p",null,"Instead, let's use a more straightforward approach that is browser agnostic and quick to setup."),(0,i.kt)("h2",{id:"a-solution"},"A Solution"),(0,i.kt)("p",null,"By specifying the username and password ",(0,i.kt)("em",{parentName:"p"},"in the URL")," when visiting a page with Selenium, we can side-step the system level dialog box and avoid setting up a proxy server. This approach will work for both HTTP or HTTPS pages."),(0,i.kt)("p",null,"Let's take a look at an example."),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("p",null,"Let's start by requiring our requisite libraries (",(0,i.kt)("inlineCode",{parentName:"p"},"import unittest")," for our test framework and ",(0,i.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver")," to drive the browser), declare our test class, and wire up some test ",(0,i.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# filename: basic_auth_1.py\n\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\nclass BasicAuth1(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n")),(0,i.kt)("p",null,"Now to add our test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# filename: basic_auth_1.py\n# ...\n    def test_visit_basic_auth_secured_page(self):\n        driver = self.driver\n        driver.get('http://admin:admin@the-internet.herokuapp.com/basic_auth')\n        page_message = driver.find_element(By.CSS_SELECTOR, '.example p').text\n        assert page_message == 'Congratulations! You must have the proper credentials.'\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,i.kt)("p",null,"In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"http://admin:admin@"),"). Once it loads we grab text from the page to make sure we ended up in the right place."),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,"Alternatively, we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."),(0,i.kt)("p",null,"Here's what that would look like."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# filename: basic_auth_2.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\n\nclass BasicAuth1(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n        self.driver.get('http://admin:admin@the-internet.herokuapp.com/basic_auth')\n\n    def tearDown(self):\n        self.driver.quit()\n\n    def test_visit_basic_auth_secured_page(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/basic_auth')\n        page_message = driver.find_element(By.CSS_SELECTOR, '.example p').text\n        assert page_message == 'Congratulations! You must have the proper credentials.'\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of ",(0,i.kt)("em",{parentName:"strong"},"each")," type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).")),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"When you save the first example and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"python basic_auth_1.py"),"), here is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the browser"),(0,i.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth"),(0,i.kt)("li",{parentName:"ul"},"Get the page text"),(0,i.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,i.kt)("li",{parentName:"ul"},"Close the browser")),(0,i.kt)("p",null,"And when you save the second example and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"python basic_auth_2.py"),"), here is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the browser"),(0,i.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth in the setup"),(0,i.kt)("li",{parentName:"ul"},"Navigate to the Basic Auth page (without providing credentials)"),(0,i.kt)("li",{parentName:"ul"},"Get the page text"),(0,i.kt)("li",{parentName:"ul"},"Assert that the text is what we expect")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Hopefully this tip will help save you from getting tripped by Basic Auth when you come across it."),(0,i.kt)("p",null,"Happy Testing!"),(0,i.kt)("h2",{id:"about-the-author"},"About The Author"),(0,i.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,i.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dave Haeffner profile picture",src:a(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},9417:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);