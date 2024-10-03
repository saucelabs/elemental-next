"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[52640,67164],{67164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(74848),r=n(28453);const i={},a=void 0,c={id:"take-screenshot-on-failure/_javascript",title:"_javascript",description:"Example",source:"@site/tips/16-take-screenshot-on-failure/_javascript.mdx",sourceDirName:"16-take-screenshot-on-failure",slug:"/take-screenshot-on-failure/_javascript",permalink:"/tips/take-screenshot-on-failure/_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/16-take-screenshot-on-failure/_javascript.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_java",permalink:"/tips/take-screenshot-on-failure/_java"},next:{title:"_python",permalink:"/tips/take-screenshot-on-failure/_python"}},o={},l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Let's start by importing our requisite libraries and wire up some setup and teardown methods."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// filename: test/screenshot.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\nconst fs = require("fs");\nconst path = require("path");\n\ndescribe("Screenshot", function() {\n  let driver;\n\n  beforeEach(async function() { this.timeout(60000) driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    if (this.currentTest.state !== "passed") {\n      const testName = this.currentTest.fullTitle().replace(/\\s/g, "-");\n      const fileName = path.join(__dirname, `screenshot_${testName}.jpg`);\n      fs.writeFileSync(fileName, await driver.takeScreenshot(), "base64");\n    }\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"afterEach"})," we check to see if the test was unsuccessful (e.g., ",(0,s.jsx)(t.code,{children:'this.currenTest.state !== "passed"'}),"). If not, then the test has either failed or errored and we capture a screenshot through the help of Selenium's ",(0,s.jsx)(t.code,{children:".takeScreenshot()"})," function. To save it to disk, we use ",(0,s.jsx)(t.code,{children:"fs"})," and its ",(0,s.jsx)(t.code,{children:"writeFileSync"})," function. It takes the full path to save to, the payload (e.g., the screenshot), and the encoding (which for the image is ",(0,s.jsx)(t.code,{children:'"base64"'}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["To make the filename unique we use the test name after cleaning it up (by replacing spaces with ",(0,s.jsx)(t.code,{children:"-"}),"). When this command executes it will save an image file (e.g., ",(0,s.jsx)(t.code,{children:"screenshot_Screenshot-on-failure.jpg"}),") to the local system in the current working directory."]}),"\n",(0,s.jsx)(t.p,{children:"Now to wire up a test which will fail."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// filename: test/screenshot.spec.js\n// ...\n  it("on failure", async function() {\n    await driver.get("http://the-internet.herokuapp.com");\n    assert(true === false);\n  });\n});\n'})}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["When we save this file and run it (",(0,s.jsx)(t.code,{children:"mocha"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open the browser"}),"\n",(0,s.jsxs)(t.li,{children:["Load the homepage of ",(0,s.jsx)(t.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"})]}),"\n",(0,s.jsx)(t.li,{children:"Fail on the assertion"}),"\n",(0,s.jsx)(t.li,{children:"Capture a screenshot in the current working directory"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"Having a screenshot to aid in troubleshooting failing tests along with a stack trace helps in having more insight."}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);