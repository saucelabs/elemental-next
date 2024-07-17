"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[1663],{21663:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>s,default:()=>h,frontMatter:()=>a,toc:()=>l});var r=i(74848),t=i(28453);const a={},s=void 0,l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Our example application is available ",(0,r.jsx)(n.a,{href:"http://the-internet.herokuapp.com/hovers",children:"here"})," on ",(0,r.jsx)(n.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"}),". It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile."]}),"\n",(0,r.jsx)(n.p,{children:"We're going to write a test that will hover over the first avatar and make sure that this additional information appears."}),"\n",(0,r.jsx)(n.p,{children:"First we'll include our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'// filename: test/hovers.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Hovers", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000)\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now let's write our test."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'// filename: test/hovers.spec.js\n// ...\n  it("displays caption on hover", async function() {\n    await driver.get("http://the-internet.herokuapp.com/hovers");\n    const avatar = await driver.findElement(By.css(".figure"));\n    await driver\n      .actions({ bridge: true })\n      .move({ origin: avatar })\n      .perform();\n    const caption = await driver.findElement(By.css(".figcaption"));\n    assert(caption.isDisplayed());\n  });\n});\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After loading the page we find the first avatar and store it in a variable (",(0,r.jsx)(n.code,{children:"avatar"}),"). We then use the ",(0,r.jsx)(n.code,{children:".move"})," function and feed it the avatar variable (which triggers the hover)."]}),"\n",(0,r.jsxs)(n.p,{children:["We then check to see if the additional user information is displayed with ",(0,r.jsx)(n.code,{children:".isDisplayed"})," in our assertion."]}),"\n",(0,r.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(n.p,{children:["When we save this file and run it (e.g., ",(0,r.jsx)(n.code,{children:"mocha"})," from the command-line) here is what will happen:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open the browser"}),"\n",(0,r.jsx)(n.li,{children:"Visit the page"}),"\n",(0,r.jsx)(n.li,{children:"Hover over the first avatar"}),"\n",(0,r.jsx)(n.li,{children:"Assert that the caption appeared on the page"}),"\n",(0,r.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"Hopefully this will help you handle more complex user interactions like hovers."}),"\n",(0,r.jsx)(n.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);