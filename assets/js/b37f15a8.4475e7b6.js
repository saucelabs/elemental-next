"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[63240,16983],{16983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=n(74848),r=n(28453);const i={},a=void 0,o={id:"take-screenshot-on-failure/_python",title:"_python",description:"Example",source:"@site/tips/16-take-screenshot-on-failure/_python.mdx",sourceDirName:"16-take-screenshot-on-failure",slug:"/take-screenshot-on-failure/_python",permalink:"/tips/take-screenshot-on-failure/_python",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/16-take-screenshot-on-failure/_python.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_javascript",permalink:"/tips/take-screenshot-on-failure/_javascript"},next:{title:"_ruby",permalink:"/tips/take-screenshot-on-failure/_ruby"}},l={},h=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["Let's start by importing our requisite libraries (",(0,s.jsx)(t.code,{children:"import unittest"})," for our test framework, ",(0,s.jsx)(t.code,{children:"from selenium import webdriver"})," to drive the browser, and ",(0,s.jsx)(t.code,{children:"import sys"})," to determine when there's a test failure), declare our test class, and write test ",(0,s.jsx)(t.code,{children:"setUp"})," and ",(0,s.jsx)(t.code,{children:"tearDown"})," methods."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'# filename: screenshot.py\nimport sys\nimport unittest\nfrom selenium import webdriver\n\n\nclass ScreenShotOnFailure(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Chrome()\n\n    def tearDown(self):\n        if sys.exc_info():\n            self.driver.save_screenshot("failshot_%s.png" % self._testMethodName)\n        self.driver.quit()\n# ...\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"tearDown"})," we check to see if ",(0,s.jsx)(t.code,{children:"sys.exc_info()"})," exists. If it does, then there's been a test failure, and we capture a screenshot through the help of Selenium's ",(0,s.jsx)(t.code,{children:".save_screenshot"})," method. ",(0,s.jsx)(t.code,{children:".save_screenshot"})," accepts a filename as a string (e.g., ",(0,s.jsx)(t.code,{children:"'failshot.png'"}),"). To make the filename unique we use the test method name (e.g., ",(0,s.jsx)(t.code,{children:"self._testMethodName"}),"). When this command executes it will save an image file to the local system in the current working directory."]}),"\n",(0,s.jsx)(t.p,{children:"Now to wire up a test which will fail."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: screenshot.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com')\n        assert driver.title == 'blah blah blah'\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["When we save this file and run it (",(0,s.jsx)(t.code,{children:"python screenshot.py"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open the browser"}),"\n",(0,s.jsxs)(t.li,{children:["Load the homepage of ",(0,s.jsx)(t.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"})]}),"\n",(0,s.jsx)(t.li,{children:"Check the text of the page header and fail"}),"\n",(0,s.jsx)(t.li,{children:"Output a failure message in the terminal"}),"\n",(0,s.jsx)(t.li,{children:"Capture a screenshot in the current working directory"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(t.p,{children:["Having a screenshot to aid in troubleshooting failing tests along with a stack trace helps in having more insight. Using the ",(0,s.jsx)(t.code,{children:"import sys"})," determines when there's been a test failure."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want truly unique filenames, then you should use a unique ID in the filename instead of a timestamp (e.g., something like ",(0,s.jsx)(t.a,{href:"https://github.com/assaf/uuid",children:(0,s.jsx)(t.code,{children:"uuid"})}),"). This will prevent screenshots from getting overwritten when you have two (or more) tests taking screenshots at the same time."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);