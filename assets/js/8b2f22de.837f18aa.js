"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[85424,41280],{41280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=n(74848),r=n(28453);const s={},a=void 0,l={id:"javascript-alerts/_python",title:"_python",description:"Example",source:"@site/tips/51-javascript-alerts/_python.mdx",sourceDirName:"51-javascript-alerts",slug:"/javascript-alerts/_python",permalink:"/tips/javascript-alerts/_python",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/51-javascript-alerts/_python.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_javascript",permalink:"/tips/javascript-alerts/_javascript"},next:{title:"_ruby",permalink:"/tips/javascript-alerts/_ruby"}},c={},o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Our example application is available ",(0,i.jsx)(t.a,{href:"http://the-internet.herokuapp.com/javascript_alerts",children:"here"})," on ",(0,i.jsx)(t.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"}),". It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click ",(0,i.jsx)(t.code,{children:"Ok"})," or ",(0,i.jsx)(t.code,{children:"Cancel"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["First, we'll include our requisite libraries, declare the test class, and wire up some simple ",(0,i.jsx)(t.code,{children:"setUp"})," and ",(0,i.jsx)(t.code,{children:"tearDown"})," methods."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# filename: javascript_alerts.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\n\nclass JavaScriptAlerts(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now let's write our test."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# filename: javascript_alerts.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/javascript_alerts')\n        driver.find_element(By.CSS_SELECTOR, \"ul > li:nth-child(1) > button\").click()\n        popup = driver.switch_to.alert\n        popup.accept()\n        result = driver.find_element(By.ID, 'result').text\n        assert result == 'You successfully clicked an alert'\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,i.jsxs)(t.p,{children:["A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find all buttons on the page using ",(0,i.jsx)(t.code,{children:"find_elements"})," and click on the second one. Since ",(0,i.jsx)(t.code,{children:"find_elements"})," returns a list of all found elements, we can assume that the first item can be selected using ",(0,i.jsx)(t.code,{children:"[0]"})," (since lists in Python start counting at ",(0,i.jsx)(t.code,{children:"0"}),"). So the second item would be ",(0,i.jsx)(t.code,{children:"[1]"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["After click the button to trigger the JavaScript Alert we use Selenium's ",(0,i.jsx)(t.code,{children:"switch_to.alert"})," method to focus on the JavaScript pop-up and use ",(0,i.jsx)(t.code,{children:".accept()"})," to click ",(0,i.jsx)(t.code,{children:"Ok"}),". If we wanted to click ",(0,i.jsx)(t.code,{children:"Cancel"})," we would have used ",(0,i.jsx)(t.code,{children:".dismiss()"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["After accepting the alert, our main browser window will automatically regain focus and the page will display the result that we chose. This text is what we use for our assertion, making sure that the words ",(0,i.jsx)(t.code,{children:"You clicked: Ok"})," are displayed on the page."]}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["When we save this file and run it (e.g., ",(0,i.jsx)(t.code,{children:"python javascript_alerts.py"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser"}),"\n",(0,i.jsx)(t.li,{children:"Load the page"}),"\n",(0,i.jsx)(t.li,{children:"Click the second button on the page"}),"\n",(0,i.jsx)(t.li,{children:"JavaScript Confirmation Alert appears"}),"\n",(0,i.jsx)(t.li,{children:"Accept the JavaScript Confirmation Alert"}),"\n",(0,i.jsx)(t.li,{children:"Assert that the result on the page is what we expect"}),"\n",(0,i.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(t.p,{children:["We've learned how to accept/dismiss Javascript alerts using Selenium Webdriver by locating the alert using Selenium's ",(0,i.jsx)(t.code,{children:"switchTo().alert()"}),". After accepting/dismissing the alert, our main browser window will automatically regain focus and the page will display the result."]}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);