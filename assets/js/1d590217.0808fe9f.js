"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[35656,74035],{74035:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(74848),i=t(28453);const s={},o=void 0,l={id:"chrome-driver/_python",title:"_python",description:"Example",source:"@site/tips/29-chrome-driver/_python.mdx",sourceDirName:"29-chrome-driver",slug:"/chrome-driver/_python",permalink:"/tips/chrome-driver/_python",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/29-chrome-driver/_python.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_java",permalink:"/tips/chrome-driver/_java"},next:{title:"_ruby",permalink:"/tips/chrome-driver/_ruby"}},a={},d=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(r.p,{children:["Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,n.jsx)(r.a,{href:"http://chromedriver.storage.googleapis.com/index.html",children:"here"}),". Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Add it to the System PATH"}),"\n",(0,n.jsx)(r.li,{children:"Specify it in the Selenium setup"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["We'll start by pulling in our requisite libraries for interacting with the operating system (e.g., ",(0,n.jsx)(r.code,{children:"import os"}),"), our testing framework (e.g., ",(0,n.jsx)(r.code,{children:"import unittest"}),"), driving the browser with Selenium (e.g., ",(0,n.jsx)(r.code,{children:"from selenium import webdriver"}),"), declare our test class, and wire up some test ",(0,n.jsx)(r.code,{children:"setUp"})," and ",(0,n.jsx)(r.code,{children:"tearDown"})," methods."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"# filename: chrome.py\nimport os\nimport unittest\nfrom selenium import webdriver\n\n\nclass Chrome(unittest.TestCase):\n\n    def setUp(self):\n        chromedriver_path = os.getcwd() + '/vendor/chromedriver'\n        self.driver = webdriver.Chrome(chromedriver_path)\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Notice that in ",(0,n.jsx)(r.code,{children:"setUp"})," we are telling Selenium where the ChromeDriver exectuable is with ",(0,n.jsx)(r.code,{children:"chromedriver_path"})," before creating an instance of the browser and passing it in as an argument."]}),"\n",(0,n.jsx)(r.p,{children:"Now we're ready to add a simple test."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"# filename: chrome.rb\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/upload')\n        assert driver.title == 'The Internet'\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,n.jsxs)(r.p,{children:["When we save this file and run it (e.g., ",(0,n.jsx)(r.code,{children:"python chrome.py"}),") it will launch an instance of Chrome, visit the homepage of ",(0,n.jsx)(r.a,{href:"http://the-internet.herokuapp.com/",children:"the-internet"}),", and assert that the page title loaded."]}),"\n",(0,n.jsx)(r.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,n.jsxs)(r.p,{children:["When we save this file and run it (e.g., ",(0,n.jsx)(r.code,{children:"python chrome.py"})," from the command-line) here is what will happen."]}),"\n",(0,n.jsx)("u",{children:"Example"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"ChromeDriver starts"}),"\n",(0,n.jsx)(r.li,{children:"Chrome opens"}),"\n",(0,n.jsx)(r.li,{children:"Test runs"}),"\n",(0,n.jsx)(r.li,{children:"Chrome closes"}),"\n",(0,n.jsx)(r.li,{children:"ChromeDriver stops"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(r.p,{children:["Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official ",(0,n.jsx)(r.a,{href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference",children:"Selenium Quick Reference page for Installing Browser Drivers"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>l});var n=t(96540);const i={},s=n.createContext(i);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);