"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,d=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(d,i(i({ref:t},h),{},{components:n})):r.createElement(d,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Python'",id:"50-hovers-python",slug:"python/",number:50,publish_date:new Date("2016-11-23T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["hover","hovers","action builder"],level:1,category:["fundamentals"],language:"python"},i="How to Work with Hovers",l={unversionedId:"how-to-work-with-hovers/50-hovers-python",id:"how-to-work-with-hovers/50-hovers-python",title:"Python'",description:"Intro",source:"@site/docs/50-how-to-work-with-hovers/python.md",sourceDirName:"50-how-to-work-with-hovers",slug:"/how-to-work-with-hovers/python/",permalink:"/elemental-next/docs/how-to-work-with-hovers/python/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/50-how-to-work-with-hovers/python.md",tags:[{label:"hover",permalink:"/elemental-next/docs/tags/hover"},{label:"hovers",permalink:"/elemental-next/docs/tags/hovers"},{label:"action builder",permalink:"/elemental-next/docs/tags/action-builder"}],version:"current",frontMatter:{title:"Python'",id:"50-hovers-python",slug:"python/",number:50,publish_date:"2016-11-23T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["hover","hovers","action builder"],level:1,category:["fundamentals"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/elemental-next/docs/how-to-work-with-hovers/javascript/"},next:{title:"Ruby",permalink:"/elemental-next/docs/how-to-work-with-hovers/50-hovers-ruby"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],h={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-work-with-hovers"},"How to Work with Hovers"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"The most popular use case for a hover action is to display additional menu options(submenu.)"),(0,o.kt)("p",null,"By leveraging Selenium's ",(0,o.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.action_chains.html"},"Actions")," we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Our example application is available ",(0,o.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/hovers"},"here")," on ",(0,o.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile."),(0,o.kt)("p",null,"We're going to write a test that will hover over the first avatar and make sure that this additional information appears."),(0,o.kt)("p",null,"First we'll include our requisite libraries, declare the test class, and wire up some simple ",(0,o.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# filename: hovers.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.action_chains import ActionChains\nfrom selenium.webdriver.common.by import By\n\n\nclass Hovers(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n\n# ...\n")),(0,o.kt)("p",null,"Now let's write our test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# filename: hovers.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/hovers')\n        avatar = driver.find_element(By.CLASS_NAME, 'figure')\n        ActionChains(driver).move_to_element(avatar).perform()\n        avatar_caption = driver.find_element(By.CLASS_NAME, 'figcaption')\n        assert avatar_caption.is_displayed()\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,o.kt)("p",null,"After loading the page we find the first avatar and store it in a variable (",(0,o.kt)("inlineCode",{parentName:"p"},"avatar"),"). We then use the ",(0,o.kt)("inlineCode",{parentName:"p"},".move_to_element")," method and feed it the avatar variable (which triggers the hover)."),(0,o.kt)("p",null,"We then check to see if the additional user information is displayed with ",(0,o.kt)("inlineCode",{parentName:"p"},".is_displayed")," in our assertion."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When we save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"python hover.py")," from the command-line) here is what will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the browser"),(0,o.kt)("li",{parentName:"ul"},"Visit the page"),(0,o.kt)("li",{parentName:"ul"},"Hover over the first avatar"),(0,o.kt)("li",{parentName:"ul"},"Assert that the caption appeared on the page"),(0,o.kt)("li",{parentName:"ul"},"Close the browser")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Hopefully this will help you handle more complex user interactions like hovers."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About the Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);