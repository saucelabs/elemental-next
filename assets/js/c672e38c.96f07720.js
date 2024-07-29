"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[88228,81734],{81734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=n(74848),r=n(28453);const s={},l=void 0,o={id:"highlight-elements/_python",title:"_python",description:"Example",source:"@site/tips/65-highlight-elements/_python.mdx",sourceDirName:"65-highlight-elements",slug:"/highlight-elements/_python",permalink:"/tips/highlight-elements/_python",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/65-highlight-elements/_python.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_javascript",permalink:"/tips/highlight-elements/_javascript"},next:{title:"_ruby",permalink:"/tips/highlight-elements/_ruby"}},h={},a=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["For our initial setup let's pull in our requisite libraries (",(0,i.jsx)(t.code,{children:"import unittest"})," for our test framework, ",(0,i.jsx)(t.code,{children:"from selenium import webdriver"})," to drive the browser, and ",(0,i.jsx)(t.code,{children:"import time"})," to add a delay in our script, so we're able to see the notification messages), declare our test class, and wire up some test ",(0,i.jsx)(t.code,{children:"setUp"})," and ",(0,i.jsx)(t.code,{children:"tearDown"})," methods."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# filename: highlight_elements.py\nimport unittest\nfrom selenium import webdriver\nimport time\nfrom selenium.webdriver.common.by import By\n\nclass HighlightElements(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n\n# ...\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Now let's create a ",(0,i.jsx)(t.code,{children:"highlight"})," helper method that will accept a Selenium WebDriver ",(0,i.jsx)(t.code,{children:"element"})," and a time to wait (e.g., ",(0,i.jsx)(t.code,{children:"duration"}),") as arguments."]}),"\n",(0,i.jsx)(t.p,{children:"By setting a duration, we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a default value for it (e.g., 3 seconds)."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'# filename: highlight_elements.py\n# ...\n    def highlight(self, element, duration=3):\n        driver = self.driver\n\n        # Store original style so it can be reset later\n        original_style = element.get_attribute("style")\n\n        # Style element with dashed red border\n        driver.execute_script(\n            "arguments[0].setAttribute(arguments[1], arguments[2])",\n            element,\n            "style",\n            "border: 2px solid red; border-style: dashed;")\n\n        # Keep element highlighted for a spell and then revert\n        if (duration > 0):\n            time.sleep(duration)\n            driver.execute_script(\n                "arguments[0].setAttribute(arguments[1], arguments[2])",\n                element,\n                "style",\n                original_style)\n\n# ...\n'})}),"\n",(0,i.jsx)(t.p,{children:"There are three things going on here."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"We store the style of the element, so we can revert it back when we're done"}),"\n",(0,i.jsx)(t.li,{children:"We change the style of the element, so it visually stands out (e.g., a red dashed border)"}),"\n",(0,i.jsx)(t.li,{children:"We revert the style of the element back after 3 seconds"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We're accomplishing the style change through JavaScript's ",(0,i.jsx)(t.code,{children:"setAttribute"})," function. And we're executing it with Selenium's ",(0,i.jsx)(t.code,{children:"execute_script"})," command."]}),"\n",(0,i.jsxs)(t.p,{children:["Now to use this in our test is simple, we just prepend a ",(0,i.jsx)(t.code,{children:"find_element"})," command with a call to the ",(0,i.jsx)(t.code,{children:"highlight"})," method."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# filename: highlight_element.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/large')\n        self.highlight(driver.find_element(By.ID,'sibling-2.3'))\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["When we save this file and run it (e.g., ",(0,i.jsx)(t.code,{children:"python highlight_elements.py"})," from the command-line) here is what will happen."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Browser opens"}),"\n",(0,i.jsx)(t.li,{children:"Load the page"}),"\n",(0,i.jsx)(t.li,{children:"Find the element"}),"\n",(0,i.jsx)(t.li,{children:"Change the styling of the element, so it has a red dashed-line border"}),"\n",(0,i.jsx)(t.li,{children:"Wait 3 seconds"}),"\n",(0,i.jsx)(t.li,{children:"Revert the styling to remove the border"}),"\n",(0,i.jsx)(t.li,{children:"Browser closes"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"If you wanted to take this a step further, you could leverage this approach along with an interactive debugger."}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, you could verify your locators by using a browser plugin like FireFinder."}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"}),"\n",(0,i.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,i.jsxs)(t.p,{children:["This is a pseudo guest post from Brian Goad. I've adapted a blog post of his with permission. You can see the original ",(0,i.jsx)(t.a,{href:"http://swdandruby.wordpress.com/2013/07/19/did-i-select-the-right-element/",children:"here"}),".  You can follow him on Twitter at ",(0,i.jsx)(t.a,{href:"https://twitter.com/bbbco",children:"@bbbco"})," and check out his testing blog ",(0,i.jsx)(t.a,{href:"http://swdandruby.wordpress.com/",children:"here"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Brian D. Goad profile picture",src:n(25764).A+"#author-img",title:"a title",width:"400",height:"400"})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},25764:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/brian-goad-06cd835a357f61c84c3c62c72fb7d03b.jpeg"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);