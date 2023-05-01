"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={title:"Python",id:"5-select-from-a-dropdown-python",slug:"python/",number:5,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-03-02T00:00:00.000Z")},tags:["dropdown","forms"],level:1,category:["fundamentals"],language:"python"},a="How to Select from a Dropdown List",l={unversionedId:"updated-tips/select-from-a-dropdown/5-select-from-a-dropdown-python",id:"updated-tips/select-from-a-dropdown/5-select-from-a-dropdown-python",title:"Python",description:"Intro",source:"@site/docs/updated-tips/5-select-from-a-dropdown/python.md",sourceDirName:"updated-tips/5-select-from-a-dropdown",slug:"/updated-tips/select-from-a-dropdown/python/",permalink:"/elemental-next/docs/updated-tips/select-from-a-dropdown/python/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/5-select-from-a-dropdown/python.md",tags:[{label:"dropdown",permalink:"/elemental-next/docs/tags/dropdown"},{label:"forms",permalink:"/elemental-next/docs/tags/forms"}],version:"current",frontMatter:{title:"Python",id:"5-select-from-a-dropdown-python",slug:"python/",number:5,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-03-02T00:00:00.000Z"},tags:["dropdown","forms"],level:1,category:["fundamentals"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/elemental-next/docs/updated-tips/select-from-a-dropdown/javascript/"},next:{title:"Ruby",permalink:"/elemental-next/docs/updated-tips/select-from-a-dropdown/5-select-from-a-dropdown-ruby"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-select-from-a-dropdown-list"},"How to Select from a Dropdown List"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might ",(0,r.kt)("em",{parentName:"p"},"seem")," straightforward -- just grab the list by its element and select an item within it, based on the text you want -- there's a bit more skill to it."),(0,r.kt)("p",null,"Let's take a look at a couple of different approaches."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"First let's pull in our requisite libraries, declare the test class, and wire up some simple ",(0,r.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: dropdown.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\n\nclass DropDown(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n\n# ...\n")),(0,r.kt)("p",null,"Now lets' wire up our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: dropdown.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/dropdown')\n        dropdown_list = driver.find_element(By.ID, 'dropdown')\n        options = dropdown_list.find_elements(By.TAG_NAME, 'option')\n        for opt in options:\n            if opt.text == 'Option 1':\n                opt.click()\n                break\n        for opt in options:\n            if opt.is_selected():\n                selected_option = opt.text\n                break\n        assert selected_option == 'Option 1', \"Selected option should be Option 1\"\n\n")),(0,r.kt)("p",null,"After visiting ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"the example application")," we find the dropdown list by its ID and store it in a variable. We then find each clickable element in the dropdown list (e.g., each ",(0,r.kt)("inlineCode",{parentName:"p"},"option"),") with ",(0,r.kt)("inlineCode",{parentName:"p"},"find_elements_by_tag_name"),"."),(0,r.kt)("p",null,"Grabbing all of the options returns a collection that we iterate over and when the text matches what we want it will click on it."),(0,r.kt)("p",null,"We finish the test by performing a check to see that our selection was made correctly. This is done by reiterating over the dropdown options collection one more time. This time we're getting the text of the item that was selected, storing it in a variable, and making an assertion against it."),(0,r.kt)("p",null,"While this works, there is a simpler, built-in way to do this with Selenium. Let's give that a go."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: dropdown.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.support.select import Select as WebDriverSelect\n# ...\n\n    def test_example_2(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/dropdown')\n        dropdown = driver.find_element(By.ID, 'dropdown')\n        select_list = WebDriverSelect(dropdown)\n        select_list.select_by_visible_text('Option 1')\n        selected_option = select_list.first_selected_option.text\n        assert selected_option == 'Option 1', \"Selected option should be Option 1\"\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,r.kt)("p",null,"Similar to the first example, we are finding the dropdown list by its ID. But instead of iterating over its option elements and clicking based on a conditional check, we are leveraging a built-in helper function of Selenium, ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.select.html#module-selenium.webdriver.support.select"},(0,r.kt)("inlineCode",{parentName:"a"},"Select")),", and its ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.select.html#selenium.webdriver.support.select.Select.select_by_visible_text"},(0,r.kt)("inlineCode",{parentName:"a"},"select_by_visibile_text"))," method to choose the item we want."),(0,r.kt)("p",null,"We then ask the ",(0,r.kt)("inlineCode",{parentName:"p"},"select_list")," what option was selected by using the ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.select.html#selenium.webdriver.support.select.Select.first_selected_option"},(0,r.kt)("inlineCode",{parentName:"a"},"first_selected_option"))," method. This returns a Selenium Element that we grab the text from, storing it in a variable (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"selected_option"),")."),(0,r.kt)("p",null,"Then we perform our assertion against this variable (just like in the previous example)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: In addition to selecting by text, you can also select by value.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"  select_list.select_by_value('1')\n")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"If you save this file with either of these examples and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"python dropdown.py")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the example application"),(0,r.kt)("li",{parentName:"ul"},"Find the dropdown list"),(0,r.kt)("li",{parentName:"ul"},"Select the requested item from the dropdown list"),(0,r.kt)("li",{parentName:"ul"},"Assert that the selected option is the one you expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this tip, we've gone over using Selenium to select from a drop down using the drop down list, or XPath to find an element within the dropdown list."),(0,r.kt)("p",null,"Hopefully this will help you when selecting items from a dropdown list."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About the Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}u.isMDXComponent=!0}}]);