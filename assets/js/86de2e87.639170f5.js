"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[10564,28777],{28777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(74848),a=n(28453);const s={},r=void 0,o={id:"opt-out-of-ab-tests/_javascript",title:"_javascript",description:"Example",source:"@site/tips/12-opt-out-of-ab-tests/_javascript.mdx",sourceDirName:"12-opt-out-of-ab-tests",slug:"/opt-out-of-ab-tests/_javascript",permalink:"/tips/opt-out-of-ab-tests/_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/12-opt-out-of-ab-tests/_javascript.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_java",permalink:"/tips/opt-out-of-ab-tests/_java"},next:{title:"_python",permalink:"/tips/opt-out-of-ab-tests/_python"}},h={},c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Our example page is from ",(0,i.jsx)(t.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"})," and can be seen ",(0,i.jsx)(t.a,{href:"http://the-internet.herokuapp.com/abtest",children:"here"}),". There are three different versions of the page that are available. On each page the heading text will vary:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Control: ",(0,i.jsx)(t.code,{children:"A/B Test Control"})]}),"\n",(0,i.jsxs)(t.li,{children:["Variation 1: ",(0,i.jsx)(t.code,{children:"A/B Test Variation 1"})]}),"\n",(0,i.jsxs)(t.li,{children:["Opt-out: ",(0,i.jsx)(t.code,{children:"No A/B Test"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Let's start by loading our requisite libraries, declare our test class, and wire up some setup and teardown methods for our tests."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'// filename: test/abOptOut.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\n\ndescribe("A/B opt-out", function() {\n  let driver;\n\n  beforeEach(async function() { this.timeout(60000) driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,i.jsx)(t.p,{children:"Now let's wire up our first test to step through loading the split testing page and verifying that the text changes after we forge an opt-out cookie."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'// filename: test/abOptOut.spec.js\n// ...\n  it("with cookie after visiting page", async function() {\n    await driver.get("http://the-internet.herokuapp.com/abtest");\n    let headingText = await driver.findElement(By.css("h3")).getText();\n    if (headingText.startsWith("A/B Test")) {\n      await driver\n        .manage()\n        .addCookie({ name: "optimizelyOptOut", value: "true" });\n      await driver.navigate().refresh();\n      headingText = await driver.findElement(By.css("h3")).getText();\n    }\n    assert.equal(headingText, "No A/B Test");\n  });\n// ...\n'})}),"\n",(0,i.jsx)(t.p,{children:"After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it matches what we expect. After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again."}),"\n",(0,i.jsx)(t.p,{children:"We could also load the opt-out cookie before navigating to this page."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'// filename: test/abOptOut.spec.js\n  it("with cookie before visiting page", async function() {\n    await driver.get("http://the-internet.herokuapp.com");\n    await driver\n      .manage()\n      .addCookie({ name: "optimizelyOptOut", value: "true" });\n    await driver.get("http://the-internet.herokuapp.com/abtest");\n    assert.equal(\n      await driver.findElement(By.css("h3")).getText(),\n      "No A/B Test"\n    );\n  });\n// ...\n'})}),"\n",(0,i.jsx)(t.p,{children:"Here we are navigating to the main page of the site first and then adding the opt-out cookie. After that we navigate to the split test page and then perform our check. Alternatively, we could opt out without forging a cookie. Instead, we just need to append an opt out parameter to the URL."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'// filename: test/abOptOut.spec.js\n// ...\n  it("with opt out URL", async function() {\n    await driver.get(\n      "http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true"\n    );\n    await driver\n      .switchTo()\n      .alert()\n      .dismiss();\n    assert.equal(\n      await driver.findElement(By.css("h3")).getText(),\n      "No A/B Test"\n    );\n  });\n});\n'})}),"\n",(0,i.jsxs)(t.p,{children:["By appending ",(0,i.jsx)(t.code,{children:"?optimizely_opt_out=true"})," we achieve the same outcome as before. Keep in mind that this approach triggers a JavaScript alert, so we have to switch to and dismiss it (e.g., ",(0,i.jsx)(t.code,{children:"driver.switchTo().alert().dismiss()"}),") before performing our check."]}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["When we save this file and run it (e.g., ",(0,i.jsx)(t.code,{children:"mocha"})," from the command-line) here is what will happen with either of the tests:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser"}),"\n",(0,i.jsx)(t.li,{children:"Opt-out of the split tests (either by cookie or appended URL)"}),"\n",(0,i.jsx)(t.li,{children:"Visit the split testing page"}),"\n",(0,i.jsx)(t.li,{children:"Grab the header text"}),"\n",(0,i.jsx)(t.li,{children:"Confirm that the session is opted out of the split test"}),"\n",(0,i.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"In this tip, we learned about split testing and learned about some standard opt-out mechanisms built into A/B testing platforms."}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);