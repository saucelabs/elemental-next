"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[38497,29105],{29105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var i=n(74848),r=n(28453);const s={},l=void 0,a={id:"right-click/_python",title:"_python",description:"Example",source:"@site/tips/63-right-click/_python.mdx",sourceDirName:"63-right-click",slug:"/right-click/_python",permalink:"/tips/right-click/_python",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/63-right-click/_python.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_javascript",permalink:"/tips/right-click/_javascript"},next:{title:"_ruby",permalink:"/tips/right-click/_ruby"}},c={},o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Let's start by pulling in our requisite libraries, declare the test class, and wire up some simple ",(0,i.jsx)(t.code,{children:"setUp"})," and ",(0,i.jsx)(t.code,{children:"tearDown"})," methods."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# filename: right_click.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.action_chains import ActionChains\nfrom selenium.webdriver.common.keys import Keys\nfrom selenium.webdriver.common.by import By\n\n\nclass RightClick(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now we're ready to write our test."}),"\n",(0,i.jsxs)(t.p,{children:["We'll use an example from ",(0,i.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," that will render a custom context menu when we right-click on a specific area of the page (",(0,i.jsx)(t.a,{href:"http://the-internet.herokuapp.com/context_menu",children:"link"}),"). Clicking the context menu will trigger a JavaScript alert which will say ",(0,i.jsx)(t.code,{children:"You selected a context menu"}),". We'll grab this text and use it to assert that the menu was actually triggered."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# filename: right_click.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/context_menu')\n        menu_area = driver.find_element(By.ID,'hot-spot')\n        ActionChains(driver).context_click(\n            menu_area).send_keys(\n            Keys.ARROW_DOWN).send_keys(\n            Keys.ARROW_DOWN).send_keys(\n            Keys.ARROW_DOWN).send_keys(\n            Keys.ENTER).perform()\n        alert = driver.switch_to.alert\n        assert alert.text == 'You selected a context menu'\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["When we save this file and run it (e.g., ",(0,i.jsx)(t.code,{children:"python right_click.py"}),") from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser and visit the page"}),"\n",(0,i.jsx)(t.li,{children:"Find and right-click the area which will render a custom context menu"}),"\n",(0,i.jsx)(t.li,{children:"Select the context menu option with keyboard keys"}),"\n",(0,i.jsx)(t.li,{children:"JavaScript alert appears"}),"\n",(0,i.jsx)(t.li,{children:"Grab the text of the JavaScript alert"}),"\n",(0,i.jsx)(t.li,{children:"Assert that the text from the alert is what we expect"}),"\n",(0,i.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about context menus, you can read ",(0,i.jsx)(t.a,{href:"http://blog.teamtreehouse.com/building-html5-context-menus",children:"this write-up from the Tree House blog"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);