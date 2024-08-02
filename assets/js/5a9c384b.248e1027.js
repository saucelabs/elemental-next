"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[80058,14090],{91709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(74848),i=n(28453);const a={},s=void 0,c={id:"right-click/_javascript",title:"_javascript",description:"Example",source:"@site/tips/63-right-click/_javascript.mdx",sourceDirName:"63-right-click",slug:"/right-click/_javascript",permalink:"/tips/right-click/_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/63-right-click/_javascript.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_java",permalink:"/tips/right-click/_java"},next:{title:"_python",permalink:"/tips/right-click/_python"}},l={},o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"Let's start by pulling in our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'// filename: test/right-click.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Right click", function() {\n  let driver;\n\n  beforeEach(async function() {\n  this.timeout(60000)\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,r.jsx)(t.p,{children:"Now we're ready to write our test."}),"\n",(0,r.jsxs)(t.p,{children:["We'll use an example from ",(0,r.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," that will trigger a JavaScript alert when we right-click on a specific area of the page (",(0,r.jsx)(t.a,{href:"http://the-internet.herokuapp.com/context_menu",children:"link"}),"). It will say ",(0,r.jsx)(t.code,{children:"You selected a context menu"}),". We'll grab this text and use it to assert that the menu was actually triggered."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'// filename: test/right-click.spec.js\n// ...\n  it("displays browser context menu", async function() {\n    await driver.get("http://the-internet.herokuapp.com/context_menu");\n    const menuArea = await driver.findElement(By.id("hot-spot"));\n    await driver\n      .actions({ bridge: true })\n      .contextClick(menuArea)\n      .perform();\n    const alertText = await driver\n      .switchTo()\n      .alert()\n      .getText();\n    assert(alertText === "You selected a context menu");\n  });\n});\n'})}),"\n",(0,r.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(t.p,{children:["When we save this file and run it (e.g., ",(0,r.jsx)(t.code,{children:"mocha"}),") from the command-line) here is what will happen:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Open the browser and visit the page"}),"\n",(0,r.jsx)(t.li,{children:"Find and right-click the area which will render a custom context menu"}),"\n",(0,r.jsx)(t.li,{children:"JavaScript alert appears"}),"\n",(0,r.jsx)(t.li,{children:"Grab the text of the JavaScript alert"}),"\n",(0,r.jsx)(t.li,{children:"Assert that the text from the alert is what we expect"}),"\n",(0,r.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.p,{children:["To learn more about context menus, you can read ",(0,r.jsx)(t.a,{href:"http://blog.teamtreehouse.com/building-html5-context-menus",children:"this write-up from the Tree House blog"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);