"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[66459],{66459:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=s(74848),n=s(28453);const i={},r=void 0,c={id:"how-to-access-basic-auth/_javascript",title:"_javascript",description:"Example 1",source:"@site/tips/13-how-to-access-basic-auth/_javascript.mdx",sourceDirName:"13-how-to-access-basic-auth",slug:"/how-to-access-basic-auth/_javascript",permalink:"/tips/how-to-access-basic-auth/_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/13-how-to-access-basic-auth/_javascript.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172716874e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_java",permalink:"/tips/how-to-access-basic-auth/_java"},next:{title:"_python",permalink:"/tips/how-to-access-basic-auth/_python"}},h={},l=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function o(e){const t={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(t.p,{children:"Let's start by requiring our requisite libraries, declare our test class, and wire up some test setup and teardown methods."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'// filename: test/basic-auth.spec.js\n// ...\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Basic Auth", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000);\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,a.jsx)(t.p,{children:"Now let's add our test code to the script."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'// filename: test/basic-auth-1.spec.js\n// ...\n  it("should visit basic auth secured page directly", async function() {\n    await driver.get(\n      "http://admin:admin@the-internet.herokuapp.com/basic_auth"\n    );\n    const page_message = await driver\n      .findElement(By.css(".example p"))\n      .getText();\n    assert(\n      page_message === "Congratulations! You must have the proper credentials."\n    );\n  });\n});\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,a.jsx)(t.code,{children:"http://admin:admin@"}),"). Once it loads we grab text from the page to make sure we ended up in the right place."]}),"\n",(0,a.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, we could have accessed this page before the test (e.g., as part of the test setup). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."}),"\n",(0,a.jsx)(t.p,{children:"Here's what that script would look like."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'// filename: test/basic-auth.spec-2.js\n// ...\n  beforeEach(async function() {\n    this.timeout(60000);\n    driver = await new Builder().forBrowser("chrome").build();\n    await driver.get(\n      "http://admin:admin@the-internet.herokuapp.com/basic_auth"\n    );\n  });\n\n  // ...\n\n  it("should visit basic auth without credentials after visiting page with them", async function() {\n    await driver.get("http://the-internet.herokuapp.com/basic_auth");\n    const page_message = await driver\n      .findElement(By.css(".example p"))\n      .getText();\n    assert(\n      page_message === "Congratulations! You must have the proper credentials."\n    );\n  });\n});\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of ",(0,a.jsx)(t.em,{children:"each"})," type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa)."]})}),"\n",(0,a.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,a.jsxs)(t.p,{children:["When you save these files and run them (e.g., ",(0,a.jsx)(t.code,{children:"mocha"}),"), here is what will happen:"]}),"\n",(0,a.jsx)("u",{children:"basic-auth-1.spec.js"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Open the browser"}),"\n",(0,a.jsx)(t.li,{children:"Visit the page using Basic Auth"}),"\n",(0,a.jsx)(t.li,{children:"Get the page text"}),"\n",(0,a.jsx)(t.li,{children:"Assert that the text is what we expect"}),"\n",(0,a.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["And when you save the second example and run it (e.g., ",(0,a.jsx)(t.code,{children:"basic-auth-2.spec.js"}),"), here is what will happen:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Open the browser"}),"\n",(0,a.jsx)(t.li,{children:"Visit the page using Basic Auth as part of the test setup"}),"\n",(0,a.jsx)(t.li,{children:"Visit the page without the Basic Auth credentials (successfully)"}),"\n",(0,a.jsx)(t.li,{children:"Get the page text"}),"\n",(0,a.jsx)(t.li,{children:"Assert that the text is what we expect"}),"\n",(0,a.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it."}),"\n",(0,a.jsx)(t.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);