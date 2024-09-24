"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[76418,83662],{83662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(74848),r=n(28453);const i={},a=void 0,o={id:"how-to-press-keyboard-keys/_javascript",title:"_javascript",description:"Example",source:"@site/tips/61-how-to-press-keyboard-keys/_javascript.mdx",sourceDirName:"61-how-to-press-keyboard-keys",slug:"/how-to-press-keyboard-keys/_javascript",permalink:"/tips/how-to-press-keyboard-keys/_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/61-how-to-press-keyboard-keys/_javascript.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172716874e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_java",permalink:"/tips/how-to-press-keyboard-keys/_java"},next:{title:"_python",permalink:"/tips/how-to-press-keyboard-keys/_python"}},d={},l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"First we'll include our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// filename: test/keyboard-keys.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Keyboard Keys", function() {\n  let driver;\n\n  beforeEach(async function() {\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,s.jsx)(t.p,{children:"Now we can write up our test."}),"\n",(0,s.jsxs)(t.p,{children:["Let's use an example from ",(0,s.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," that will display what key has been pressed (",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/key_presses",children:"link"}),"). We'll use the result text that gets displayed to perform our assertion."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// filename: test/keyboard-keys.spec.js\n  it("send keys", async function() {\n    await driver.get("http://the-internet.herokuapp.com/key_presses");\n    await driver.findElement(By.id("target")).sendKeys(Key.SPACE);\n    assert(\n      (await driver.findElement(By.id("result")).getText()) ===\n        "You entered: SPACE"\n    );\n  });\n});\n'})}),"\n",(0,s.jsxs)(t.p,{children:["After visiting the page we find an element that's both visible and interactable with the keyboard (e.g., the input element on the page) and send the space key to it (e.g., ",(0,s.jsx)(t.code,{children:".sendKeys(Key.SPACE"}),"). Then we grab the resulting text (e.g., ",(0,s.jsx)(t.code,{children:"driver.findElement(By.id('result')).getText()"}),") and assert that it says what we expect (e.g., ",(0,s.jsx)(t.code,{children:"'You entered: SPACE'"}),")."]}),"\n",(0,s.jsx)(t.p,{children:"Alternatively, we can issue a key press without finding the element first by using the Action Builder."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// filename: test/keyboard-keys.spec.js\n// ...\n  it("send keys", async function() {\n\t\tawait driver.get("http://the-internet.herokuapp.com/key_presses");\n    await driver\n      .actions({ bridge: true })\n      .sendKeys(Key.TAB)\n      .perform();\n    assert(\n      (await driver.findElement(By.id("result")).getText()) ==\n        "You entered: TAB"\n    );\n  });\n});\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["NOTE: In order for this approach to work in browsers other than Firefox, we need to specify ",(0,s.jsx)(t.code,{children:"{bridge: true}"})," when calling ",(0,s.jsx)(t.code,{children:"driver.actions"})," (e.g., ",(0,s.jsx)(t.code,{children:"driver.actions({ bridge: true })"}),"). You can see ",(0,s.jsx)(t.a,{href:"https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html",children:"the documentation"})," for further details."]})}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["When we save this file and run it (e.g. ",(0,s.jsx)(t.code,{children:"mocha"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open the browser"}),"\n",(0,s.jsx)(t.li,{children:"Visit the page"}),"\n",(0,s.jsx)(t.li,{children:"Find the element and send the space key to it"}),"\n",(0,s.jsx)(t.li,{children:"Find the result text on the page and check that it's what we expect"}),"\n",(0,s.jsx)(t.li,{children:"Send the tab key to the element that's currently in focus"}),"\n",(0,s.jsx)(t.li,{children:"Find the result text on the page and check that it's what we expect"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. If you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use."}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);