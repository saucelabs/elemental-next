"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[4e3,38499],{38499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=n(74848),r=n(28453);const i={},o=void 0,c={id:"how-to-test-checkboxes/_python",title:"_python",description:"Example",source:"@site/tips/45-how-to-test-checkboxes/_python.mdx",sourceDirName:"45-how-to-test-checkboxes",slug:"/how-to-test-checkboxes/_python",permalink:"/tips/how-to-test-checkboxes/_python",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/45-how-to-test-checkboxes/_python.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1724919796e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_javascript",permalink:"/tips/how-to-test-checkboxes/_javascript"},next:{title:"_ruby",permalink:"/tips/how-to-test-checkboxes/_ruby"}},h={},a=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["For reference, here is the markup from ",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/checkboxes",children:"the page we will be testing against"})," (an example from ",(0,s.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"}),")."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<form>\n  <input type="checkbox"> unchecked<br>\n  <input type="checkbox" checked=""> checked\n</form>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Let's kick things off by requiring our dependent libraries (",(0,s.jsx)(t.code,{children:"import unittest"})," for our test framework and ",(0,s.jsx)(t.code,{children:"from selenium import webdriver"})," to drive the browser), declare our test class, and wire up some test ",(0,s.jsx)(t.code,{children:"setUp"})," and ",(0,s.jsx)(t.code,{children:"tearDown"})," methods."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: checkboxes.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\n\nclass Checkboxes(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n\n# ...\n"})}),"\n",(0,s.jsx)(t.p,{children:"Before we dig into writing a test to verify the state of the page, let's walk through both checkbox approaches to see what Selenium gives us."}),"\n",(0,s.jsx)(t.p,{children:"To do that we'll want to grab all checkboxes on the page and iterate through them. Once using an attribute lookup and again asking if the element is selected. For each we'll output the return values we get from Selenium."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: checkboxes.py\n# ...\n    def test_list_values_for_different_approaches(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/checkboxes')\n        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type=\"checkbox\"]')\n\n        print(\"With .get_attribute('checked')\")\n        for checkbox in checkboxes:\n            print(checkbox.get_attribute('checked'))\n\n        print(\"\\nWith .is_selected\")\n        for checkbox in checkboxes:\n            print(checkbox.is_selected())\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When we save our file and run it (e.g., ",(0,s.jsx)(t.code,{children:"python checkboxes.py"})," from the command-line), here is the output we'll see."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"With .attribute('checked')\nNone\ntrue\n\nWith .is_selected\nFalse\nTrue\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With the attribute lookup, depending on the state of the checkbox, we receive either a ",(0,s.jsx)(t.code,{children:"None"})," string value or a ",(0,s.jsx)(t.code,{children:"true"})," boolean value. Whereas with ",(0,s.jsx)(t.code,{children:".is_selected"})," we get a boolean value either way."]}),"\n",(0,s.jsx)(t.p,{children:"Let's see what these approaches look like when put to use in our test."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: checkboxes.py\n# ...\n    def test_list_values_for_different_approaches(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/checkboxes')\n        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type=\"checkbox\"]')\n\n        assert checkboxes[-1].get_attribute('checked')\n        # or\n        assert checkboxes[-1].is_selected()\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With either approach we can simply assert on the return value (even if it's a string value of ",(0,s.jsx)(t.code,{children:"'None"}),"') and have things work as expected. We can confirm this by asserting on the checkbox which is not selected."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: checkboxes.py\n# ...\n    def test_list_values_for_different_approaches(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/checkboxes')\n        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type=\"checkbox\"]')\n\n        assert checkboxes[0].get_attribute('checked')\n        # or\n        assert checkboxes[0].is_selected()\n"})}),"\n",(0,s.jsxs)(t.p,{children:["An ",(0,s.jsx)(t.code,{children:"AssertionError"})," will be raised for either assertion."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"======================================================================\nFAIL: test_list_values_for_different_approaches (__main__.Checkboxes)\n----------------------------------------------------------------------\nTraceback (most recent call last):\n  File \"45-checkboxes/python/checkboxes.py\", line 31, in test_list_values_for_different_approaches\n    assert checkboxes[0].get_attribute('checked')\nAssertionError\n\n----------------------------------------------------------------------\nRan 1 test in 3.356s\n\nFAILED (failures=1)\n\nshell returned 1\n"})}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["When we save and run the file (e.g., ",(0,s.jsx)(t.code,{children:"python checkboxes.py"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open the browser"}),"\n",(0,s.jsx)(t.li,{children:"Visit the page"}),"\n",(0,s.jsx)(t.li,{children:"Find all checkboxes on the page"}),"\n",(0,s.jsx)(t.li,{children:"Assert that the last checkbox (the one that is supposed to be checked on initial page load) is checked"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(t.p,{children:["Attribute lookups are generally meant for pulling information out of the page for review however in this case they lend themselves to seeing if a checkbox is checked. There is a method which was built for this use case that is more readable and has a predictable set of return values. ",(0,s.jsx)(t.code,{children:"isSelected"})," should be the thing you reach for, knowing that an attribute lookup is there as a solid backup if you find you need it."]}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);