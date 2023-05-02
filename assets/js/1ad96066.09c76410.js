"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Python",id:"45-checkboxes-python",slug:"python/",number:45,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-03-03T00:00:00.000Z")},tags:["checkboxes","attribute","selected"],level:1,category:["fundamentals"],language:"python"},i="How to Test Checkboxes",s={unversionedId:"how-to-test-checkboxes/45-checkboxes-python",id:"how-to-test-checkboxes/45-checkboxes-python",title:"Python",description:"Intro",source:"@site/docs/45-how-to-test-checkboxes/python.md",sourceDirName:"45-how-to-test-checkboxes",slug:"/how-to-test-checkboxes/python/",permalink:"/elemental-next/docs/how-to-test-checkboxes/python/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/45-how-to-test-checkboxes/python.md",tags:[{label:"checkboxes",permalink:"/elemental-next/docs/tags/checkboxes"},{label:"attribute",permalink:"/elemental-next/docs/tags/attribute"},{label:"selected",permalink:"/elemental-next/docs/tags/selected"}],version:"current",frontMatter:{title:"Python",id:"45-checkboxes-python",slug:"python/",number:45,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-03-03T00:00:00.000Z"},tags:["checkboxes","attribute","selected"],level:1,category:["fundamentals"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/elemental-next/docs/how-to-test-checkboxes/javascript/"},next:{title:"Ruby",permalink:"/elemental-next/docs/how-to-test-checkboxes/45-checkboxes-ruby"}},l={},c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],h={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-test-checkboxes"},"How to Test Checkboxes"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests."),(0,r.kt)("p",null,"Intuitively you may reach for a method that has the word 'checked' in it -- like ",(0,r.kt)("inlineCode",{parentName:"p"},".checked")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".is_checked")," but this doesn't exist in Selenium."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"There are two ways to approach this issue -- by seeing if an element has a ",(0,r.kt)("inlineCode",{parentName:"p"},"checked")," attribute (a.k.a. performing an attribute lookup), or by asking an element if it has been ",(0,r.kt)("em",{parentName:"p"},"selected"),"."),(0,r.kt)("p",null,"We're going to go through each of these approaches to see their pros and cons."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"For reference, here is the markup from ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/checkboxes"},"the page we will be testing against")," (an example from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <input type="checkbox"> unchecked<br>\n  <input type="checkbox" checked=""> checked\n</form>\n')),(0,r.kt)("p",null,"Let's kick things off by requiring our dependent libraries (",(0,r.kt)("inlineCode",{parentName:"p"},"import unittest")," for our test framework and ",(0,r.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver")," to drive the browser), declare our test class, and wire up some test ",(0,r.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: checkboxes.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\n\nclass Checkboxes(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n\n# ...\n")),(0,r.kt)("p",null,"Before we dig into writing a test to verify the state of the page, let's walk through both checkbox approaches to see what Selenium gives us."),(0,r.kt)("p",null,"To do that we'll want to grab all of the checkboxes on the page and iterate through them. Once using an attribute lookup and again asking if the element is selected. For each we'll output the return values we get from Selenium."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: checkboxes.py\n# ...\n    def test_list_values_for_different_approaches(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/checkboxes')\n        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type=\"checkbox\"]')\n\n        print(\"With .get_attribute('checked')\")\n        for checkbox in checkboxes:\n            print(checkbox.get_attribute('checked'))\n\n        print(\"\\nWith .is_selected\")\n        for checkbox in checkboxes:\n            print(checkbox.is_selected())\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,r.kt)("p",null,"When we save our file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"python checkboxes.py")," from the command-line), here is the output we'll see."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"With .attribute('checked')\nNone\ntrue\n\nWith .is_selected\nFalse\nTrue\n")),(0,r.kt)("p",null,"With the attribute lookup, depending on the state of the checkbox, we receive either a ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," string value or a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," boolean value. Whereas with ",(0,r.kt)("inlineCode",{parentName:"p"},".is_selected")," we get a boolean value either way."),(0,r.kt)("p",null,"Let's see what these approaches look like when put to use in our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: checkboxes.py\n# ...\n    def test_list_values_for_different_approaches(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/checkboxes')\n        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type=\"checkbox\"]')\n\n        assert checkboxes[-1].get_attribute('checked')\n        # or\n        assert checkboxes[-1].is_selected()\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,r.kt)("p",null,"With either approach we can simply assert on the return value (even if it's a string value of ",(0,r.kt)("inlineCode",{parentName:"p"},"'None"),"') and have things work as expected. We can confirm this by asserting on the checkbox which is not selected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: checkboxes.py\n# ...\n    def test_list_values_for_different_approaches(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/checkboxes')\n        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type=\"checkbox\"]')\n\n        assert checkboxes[0].get_attribute('checked')\n        # or\n        assert checkboxes[0].is_selected()\n")),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"AssertionError")," will be raised for either assertion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"======================================================================\nFAIL: test_list_values_for_different_approaches (__main__.Checkboxes)\n----------------------------------------------------------------------\nTraceback (most recent call last):\n  File \"45-checkboxes/python/checkboxes.py\", line 31, in test_list_values_for_different_approaches\n    assert checkboxes[0].get_attribute('checked')\nAssertionError\n\n----------------------------------------------------------------------\nRan 1 test in 3.356s\n\nFAILED (failures=1)\n\nshell returned 1\n")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save and run the file (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"python checkboxes.py")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Find all of the checkboxes on the page"),(0,r.kt)("li",{parentName:"ul"},"Assert that the last checkbox (the one that is supposed to be checked on initial page load) is checked"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Attribute lookups are generally meant for pulling information out of the page for review however in this case they lend themselves to seeing if a checkbox is checked. There is a method which was built for this use case that is more readable and has a predictable set of return values. ",(0,r.kt)("inlineCode",{parentName:"p"},"isSelected")," should be the thing you reach for, knowing that an attribute lookup is there as a solid backup if you find you need it."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About the Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing;\nincluding The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}u.isMDXComponent=!0}}]);