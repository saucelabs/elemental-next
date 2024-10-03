"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[15297],{15297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var s=t(74848),i=t(28453);const a={},l=void 0,r={id:"disabled-element/_javascript",title:"_javascript",description:"Example",source:"@site/tips/40-disabled-element/_javascript.mdx",sourceDirName:"40-disabled-element",slug:"/disabled-element/_javascript",permalink:"/tips/disabled-element/_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/40-disabled-element/_javascript.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_java",permalink:"/tips/disabled-element/_java"},next:{title:"_python",permalink:"/tips/disabled-element/_python"}},d={},o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["For this example we will use ",(0,s.jsx)(n.a,{href:"http://the-internet.herokuapp.com/dropdown",children:"a dropdown list"})," from ",(0,s.jsx)(n.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"}),". In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled."]}),"\n",(0,s.jsx)(n.p,{children:"First we'll require our dependent libraries, declare our test class, and wire up some setup and teardown methods for our test."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// filename: test/disabledElement.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\n\ndescribe("Disabled Element", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000);\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now let's wire up our test."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// filename: test/disabledElement.spec.js\n// ...\n  it("dropdown list should contain disabled and enabled elements", async function() {\n    driver.get("http://the-internet.herokuapp.com/dropdown");\n    const dropdownList = await driver.findElements(By.css("option"));\n    assert((await dropdownList[0].isEnabled()) === false);\n  });\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After loading the page, we find all the elements that have an option tag (which are all the items in the dropdown list). This returns a list of elements, so we use the first one (which is the one with the text of ",(0,s.jsx)(n.code,{children:"'Please select an option'"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Once we have the element we want we see if it's enabled (with ",(0,s.jsx)(n.code,{children:".isEnabled"}),") and assert based on the response."]}),"\n",(0,s.jsx)(n.p,{children:"Also, since we grabbed all the dropdown list options, we can easily test the opposite case by checking the second or third option in the list."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// filename: test/disabledElement.spec.js\n// ...\n  it("dropdown list should contain disabled and enabled elements", async function() {\n\t\t// ...\n    assert(await dropdownList[1].isEnabled());\n  });\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(n.p,{children:["When we save this file and run it (e.g., ",(0,s.jsx)(n.code,{children:"mocha"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open a browser"}),"\n",(0,s.jsx)(n.li,{children:"Visit the page"}),"\n",(0,s.jsx)(n.li,{children:"Grab all dropdown list elements"}),"\n",(0,s.jsx)(n.li,{children:"Assert that the first element in the list is not enabled"}),"\n",(0,s.jsx)(n.li,{children:"Assert that the second element in the list is enabled"}),"\n",(0,s.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Hopefully this tip has helped make the task of seeing whether an element is enabled or disabled more approachable."}),"\n",(0,s.jsx)(n.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);