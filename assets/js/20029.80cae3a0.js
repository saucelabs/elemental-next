"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[20029],{20029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=n(74848),r=n(28453);const i={},a=void 0,l={id:"how-to-press-keyboard-keys/_python",title:"_python",description:"An Example",source:"@site/tips/61-how-to-press-keyboard-keys/_python.mdx",sourceDirName:"61-how-to-press-keyboard-keys",slug:"/how-to-press-keyboard-keys/_python",permalink:"/tips/how-to-press-keyboard-keys/_python",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/61-how-to-press-keyboard-keys/_python.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_javascript",permalink:"/tips/how-to-press-keyboard-keys/_javascript"},next:{title:"_ruby",permalink:"/tips/how-to-press-keyboard-keys/_ruby"}},d={},o=[{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"an-example",children:"An Example"}),"\n",(0,s.jsxs)(t.p,{children:["First we'll include our requisite libraries, declare the test class, and wire up some simple ",(0,s.jsx)(t.code,{children:"setUp"})," and ",(0,s.jsx)(t.code,{children:"tearDown"})," methods."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: keyboard_keys.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\nfrom selenium.webdriver.common.action_chains import ActionChains\nfrom selenium.webdriver.common.by import By\n\nclass KeyboardKeys(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now we can wire up our test."}),"\n",(0,s.jsxs)(t.p,{children:["Let's use an example from ",(0,s.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," that will display what key has been pressed (",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/key_presses",children:"link"}),"). We'll use the result text that gets displayed to perform our assertion."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: keyboard_keys.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/key_presses')\n        ddriver.find_element(By.CLASS_NAME, 'example').send_keys(Keys.SPACE)\n        assert driver.find_element(By.ID, 'result').text == 'You entered: SPACE'\n        ActionChains(driver).send_keys(Keys.TAB).perform()\n        assert driver.find_element(By.ID, 'result').text == 'You entered: TAB'\n\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,s.jsxs)(t.p,{children:["After visiting the page we find an element that's visible (e.g., the div that contains the example on the page) and send the space key to it (e.g., ",(0,s.jsx)(t.code,{children:".send_keys(Keys.SPACE"}),"). Then we grab the resulting text (e.g., ",(0,s.jsx)(t.code,{children:"driver.find_element(By.ID, 'result').text"}),") and assert that it says what we expect (e.g., ",(0,s.jsx)(t.code,{children:"'You entered: SPACE'"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["Alternatively, we can also issue a key press without finding the element first by using the Action Builder (e.g., ",(0,s.jsx)(t.code,{children:"ActionChains"}),")."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: keyboard_keys.py\n# ...\n    def test_example_1(self):\n        # ...\n        ActionChains(driver).send_keys(Keys.TAB).perform()\n        assert driver.find_element(By.ID, 'result').text == 'You entered: TAB'\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["When we save this file and run it (e.g. ",(0,s.jsx)(t.code,{children:"python keyboard_keys.py"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open the browser"}),"\n",(0,s.jsx)(t.li,{children:"Visit the page"}),"\n",(0,s.jsx)(t.li,{children:"Find the element and send the space key to it"}),"\n",(0,s.jsx)(t.li,{children:"Find the result text on the page and check that it's what we expect"}),"\n",(0,s.jsx)(t.li,{children:"Send the tab key to the element that's currently in focus"}),"\n",(0,s.jsx)(t.li,{children:"Find the result text on the page and check that it's what we expect"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. But if you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should reach for."}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);