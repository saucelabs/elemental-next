"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[41940,93561],{93561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var i=n(74848),r=n(28453);const s={},l=void 0,a={id:"highlight-elements/_javascript",title:"_javascript",description:"Example",source:"@site/tips/65-highlight-elements/_javascript.mdx",sourceDirName:"65-highlight-elements",slug:"/highlight-elements/_javascript",permalink:"/tips/highlight-elements/_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/65-highlight-elements/_javascript.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172716874e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_java",permalink:"/tips/highlight-elements/_java"},next:{title:"_python",permalink:"/tips/highlight-elements/_python"}},h={},o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"For our initial setup let's pull in our requisite libraries, declare our test class, and wire up some setup and teardown methods."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'// filename: test/highlight-elements.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Highlight elements", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000)\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Now let's create a ",(0,i.jsx)(t.code,{children:"highlight"})," helper function that will accept a found ",(0,i.jsx)(t.code,{children:"element"})," from Selenium and a time to wait (e.g., ",(0,i.jsx)(t.code,{children:"duration"}),") as arguments."]}),"\n",(0,i.jsx)(t.p,{children:"By setting a duration, we can control how long to highlight an element on the page before reverting the styling back. We can also make this an optional argument by setting a default value for it (e.g., 3 seconds)."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'// filename: test/highlight-elements.spec.js\n// ...\n  async function highlight(element, duration = 2000) {\n    // store original style so it can be reset later\n    const originalStyle = await element.getAttribute("style");\n\n    // style element with callout (e.g., dashed red border)\n    await driver.executeScript(\n      "arguments[0].setAttribute(arguments[1], arguments[2])",\n      element,\n      "style",\n      "border: 2px solid red; border-style: dashed;"\n    );\n\n    // keep element highlighted for the duration and then revert\n    await driver.sleep(duration);\n    await driver.executeScript(\n      "arguments[0].setAttribute(arguments[1], arguments[2])",\n      element,\n      "style",\n      originalStyle\n    );\n  }\n// ...\n'})}),"\n",(0,i.jsx)(t.p,{children:"There are three things going on here."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"We store the style of the element, so we can revert it back when we're done"}),"\n",(0,i.jsx)(t.li,{children:"We change the style of the element, so it visually stands out (e.g., a red dashed border)"}),"\n",(0,i.jsx)(t.li,{children:"We revert the style of the element back after 3 seconds"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We're accomplishing the style change through JavaScript's ",(0,i.jsx)(t.code,{children:"setAttribute"})," function. And we're executing it with Selenium's ",(0,i.jsx)(t.code,{children:"executeScript"})," command."]}),"\n",(0,i.jsxs)(t.p,{children:["Now to use this in our test is simple, we just prepend a ",(0,i.jsx)(t.code,{children:"findElement"})," command with a call to the ",(0,i.jsx)(t.code,{children:"highlight"})," method."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'// filename: test/highlight-elements.spec.js\n// ...\n  it("highlights target element", async function() {\n    await driver.get("http://the-internet.herokuapp.com/large");\n    await highlight(await driver.findElement(By.id("sibling-2.3")));\n  });\n});\n'})}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["When we save this file and run it (e.g., ",(0,i.jsx)(t.code,{children:"mocha"})," from the command-line) here is what will happen."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Browser opens"}),"\n",(0,i.jsx)(t.li,{children:"Load the page"}),"\n",(0,i.jsx)(t.li,{children:"Find the element"}),"\n",(0,i.jsx)(t.li,{children:"Change the styling of the element, so it has a red dashed-line border"}),"\n",(0,i.jsx)(t.li,{children:"Wait 3 seconds"}),"\n",(0,i.jsx)(t.li,{children:"Revert the styling to remove the border"}),"\n",(0,i.jsx)(t.li,{children:"Browser closes"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"If you wanted to take this a step further, you could leverage this approach along with an interactive debugger."}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, you could verify your locators by using a browser plugin like FireFinder."}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"}),"\n",(0,i.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,i.jsxs)(t.p,{children:["You can follow Brian on Twitter at ",(0,i.jsx)(t.a,{href:"https://twitter.com/bbbco",children:"@bbbco"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Brian D. Goad profile picture",src:n(25764).A+"#author-img",title:"a title",width:"400",height:"400"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},25764:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/brian-goad-06cd835a357f61c84c3c62c72fb7d03b.jpeg"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);