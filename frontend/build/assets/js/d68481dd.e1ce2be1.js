"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var w=i.createContext({}),s=function(e){var t=i.useContext(w),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(w.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,w=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,m=p["".concat(w,".").concat(u)]||p[u]||h[u]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var w in t)hasOwnProperty.call(t,w)&&(l[w]=t[w]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={title:"Python",id:"4-work-with-multiple-windows-python",slug:"python/",number:4,publish_date:new Date("2016-11-14T00:00:00.000Z"),last_update:{date:new Date("2023-03-14T00:00:00.000Z")},tags:["windows","multiple windows","new window"],level:2,category:["fundamentals"],language:"python"},a="How to Work with Multiple Windows",l={unversionedId:"updated-tips/work-with-multiple-windows/4-work-with-multiple-windows-python",id:"updated-tips/work-with-multiple-windows/4-work-with-multiple-windows-python",title:"Python",description:"Intro",source:"@site/docs/updated-tips/4-work-with-multiple-windows/python.md",sourceDirName:"updated-tips/4-work-with-multiple-windows",slug:"/updated-tips/work-with-multiple-windows/python/",permalink:"/elemental-next/docs/updated-tips/work-with-multiple-windows/python/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/4-work-with-multiple-windows/python.md",tags:[{label:"windows",permalink:"/elemental-next/docs/tags/windows"},{label:"multiple windows",permalink:"/elemental-next/docs/tags/multiple-windows"},{label:"new window",permalink:"/elemental-next/docs/tags/new-window"}],version:"current",frontMatter:{title:"Python",id:"4-work-with-multiple-windows-python",slug:"python/",number:4,publish_date:"2016-11-14T00:00:00.000Z",last_update:{date:"2023-03-14T00:00:00.000Z"},tags:["windows","multiple windows","new window"],level:2,category:["fundamentals"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/elemental-next/docs/updated-tips/work-with-multiple-windows/javascript/"},next:{title:"Ruby",permalink:"/elemental-next/docs/updated-tips/work-with-multiple-windows/ruby/"}},w={},s=[{value:"Intro",id:"intro",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],d={toc:s},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-work-with-multiple-windows"},"How to Work with Multiple Windows"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"This tip will explain how to work with multiple windows in Selenium and switch between them."),(0,r.kt)("p",null,"Occasionally you'll run into a link or action in the application you're testing that will open a new window. In order to work with both the new and originating windows you'll need to switch between them."),(0,r.kt)("p",null,"On the face of it, this is a pretty straightforward concept. But there may be a small challenge to watch out for that you may find in some browsers and not others."),(0,r.kt)("p",null,"Let's step through a couple of examples to demonstrate."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"First we'll need to pull in our requisite libraries (",(0,r.kt)("inlineCode",{parentName:"p"},"import unittest")," for our test framework and ",(0,r.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver")," to drive the browser), declare our test class, and wire up some test ",(0,r.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: new_window.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\n\nclass Windows(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n")),(0,r.kt)("p",null,"Now let's write a test that exercises new window functionality from an application. In this case, we'll be using ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/windows"},"the new window example")," found on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# filename: new_window.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get(\'http://the-internet.herokuapp.com/windows\')\n        driver.find_element(By.CSS_SELECTOR,\'.example a\').click()\n        driver.switch_to.window(driver.window_handles[0])\n        assert driver.title != "New Window", "title should not be New Window"\n        driver.switch_to.window(driver.window_handles[-1])\n        assert driver.title == "New Window", "title should be New Window"\n\n# ...\n')),(0,r.kt)("p",null,"After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the last one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window."),(0,r.kt)("p",null,"While this may seem like a good approach, it can present problems later. That's because the order of the window handles is not consistent across all browsers. Some return in the order opened, others ",(0,r.kt)("em",{parentName:"p"},"alphabetically"),"."),(0,r.kt)("p",null,"Here's a more resilient approach. One that will work across all browsers."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# filename: new_window.py\n# ...\n    def test_example_2(self):\n        driver = self.driver\n        driver.get(\'http://the-internet.herokuapp.com/windows\')\n\n        first_window = driver.window_handles[0]\n        driver.find_element(By.CSS_SELECTOR,\'.example a\').click()\n        all_windows = driver.window_handles\n        for window in all_windows:\n            if window != first_window:\n                new_window = window\n        driver.switch_to.window(first_window)\n        assert driver.title != "New Window", "title should not be New Window"\n        driver.switch_to.window(new_window)\n        assert driver.title == "New Window", "title should be New Window"\n\nif __name__ == "__main__":\n    unittest.main()\n')),(0,r.kt)("p",null,"After loading the page we store the window handle in a variable (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"first_window"),") and then proceed with clicking the new window link."),(0,r.kt)("p",null,"Now that we have two windows open we grab all of the window handles and search through them to find the new window handle (e.g., the handle that doesn't match the first one we've already stored). We store the result in another variable (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"new_window"),") and then switch between the windows. Each time checking the page title to make sure the correct window is in focus."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Find the window handle for the current window"),(0,r.kt)("li",{parentName:"ul"},"Click a link that opens a new window"),(0,r.kt)("li",{parentName:"ul"},"Find the window handle out of all available window handles"),(0,r.kt)("li",{parentName:"ul"},"Switch between the windows"),(0,r.kt)("li",{parentName:"ul"},"Assert that the correct window is in focus"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Hat tip to ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/jimevansmusic"},"Jim Evans")," for providing the info for this tip. And thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trabulmonkee"},"Mike Millgate")," for contributing the Python code for this tip and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Dude-X"},"Isaul Vargas")," & ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bittner"},"Peter Bittner")," for code reviewing!"),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/jimevansmusic"},"Jim Evans")," for providing the info for this tip."))}h.isMDXComponent=!0}}]);