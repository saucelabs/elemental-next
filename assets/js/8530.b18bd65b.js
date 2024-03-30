"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[8530],{18530:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>h,default:()=>o,frontMatter:()=>r,toc:()=>l});var s=t(74848),i=t(28453);const r={},h=void 0,l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Let's start by importing our requisite libraries (",(0,s.jsx)(n.code,{children:"import unittest"})," for our test framework, ",(0,s.jsx)(n.code,{children:"from selenium import webdriver"})," to drive the browser, and ",(0,s.jsx)(n.code,{children:"import sys"})," to determine when there's a test failure), declare our test class, and write test ",(0,s.jsx)(n.code,{children:"setUp"})," and ",(0,s.jsx)(n.code,{children:"tearDown"})," methods."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# filename: screenshot.py\nimport sys\nimport unittest\nfrom selenium import webdriver\n\n\nclass ScreenShotOnFailure(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Chrome()\n\n    def tearDown(self):\n        if sys.exc_info():\n            self.driver.save_screenshot("failshot_%s.png" % self._testMethodName)\n        self.driver.quit()\n# ...\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"tearDown"})," we check to see if ",(0,s.jsx)(n.code,{children:"sys.exc_info()"})," exists. If it does, then there's been a test failure, and we capture a screenshot through the help of Selenium's ",(0,s.jsx)(n.code,{children:".save_screenshot"})," method. ",(0,s.jsx)(n.code,{children:".save_screenshot"})," accepts a filename as a string (e.g., ",(0,s.jsx)(n.code,{children:"'failshot.png'"}),"). To make the filename unique we use the test method name (e.g., ",(0,s.jsx)(n.code,{children:"self._testMethodName"}),"). When this command executes it will save an image file to the local system in the current working directory."]}),"\n",(0,s.jsx)(n.p,{children:"Now to wire up a test which will fail."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# filename: screenshot.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com')\n        assert driver.title == 'blah blah blah'\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(n.p,{children:["When we save this file and run it (",(0,s.jsx)(n.code,{children:"python screenshot.py"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open the browser"}),"\n",(0,s.jsxs)(n.li,{children:["Load the homepage of ",(0,s.jsx)(n.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"})]}),"\n",(0,s.jsx)(n.li,{children:"Check the text of the page header and fail"}),"\n",(0,s.jsx)(n.li,{children:"Output a failure message in the terminal"}),"\n",(0,s.jsx)(n.li,{children:"Capture a screenshot in the current working directory"}),"\n",(0,s.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.p,{children:["Having a screenshot to aid in troubleshooting failing tests along with a stack trace helps in having more insight. Using the ",(0,s.jsx)(n.code,{children:"import sys"})," determines when there's been a test failure."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want truly unique filenames, then you should use a unique ID in the filename instead of a timestamp (e.g., something like ",(0,s.jsx)(n.a,{href:"https://github.com/assaf/uuid",children:(0,s.jsx)(n.code,{children:"uuid"})}),"). This will prevent screenshots from getting overwritten when you have two (or more) tests taking screenshots at the same time."]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);