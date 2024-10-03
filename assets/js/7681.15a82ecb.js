"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[7681],{7681:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=r(74848),t=r(28453);const s={},a=void 0,o={id:"grid/_javascript",title:"_javascript",description:"Example",source:"@site/tips/52-grid/_javascript.mdx",sourceDirName:"52-grid",slug:"/grid/_javascript",permalink:"/tips/grid/_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/52-grid/_javascript.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_java",permalink:"/tips/grid/_java"},next:{title:"_python",permalink:"/tips/grid/_python"}},l={},d=[{value:"Example",id:"example",level:2},{value:"Part 1: Grid Setup",id:"part-1-grid-setup",level:3},{value:"Part 2: Test Setup",id:"part-2-test-setup",level:3},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.h3,{id:"part-1-grid-setup",children:"Part 1: Grid Setup"}),"\n",(0,i.jsxs)(n.p,{children:["Selenium Grid comes built into the Selenium Standalone Server. So to get started we'll need to download the latest version of it from the Selenium\n",(0,i.jsx)(n.a,{href:"https://github.com/SeleniumHQ/selenium/releases",children:"releases"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Then we need to start the Hub."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"> java -jar selenium-server-<version>.jar hub\n...\n16:49:29.816 INFO [Hub.execute] - Started Selenium Hub\n...\n"})}),"\n",(0,i.jsx)(n.p,{children:"After that we can register Nodes to it."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"> java -jar selenium-server-<version>.jar node --hub http://localhost:4444\n...\n16:51:47.726 INFO [NodeServer.execute] - Started Selenium Node\n...\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["NOTE: This example only demonstrates a single node on the same machine as the hub. To span nodes across multiple machines you will need to place the standalone server on each machine and launch it with the same registration command (replacing ",(0,i.jsx)(n.code,{children:"http://localhost"})," with the location of your hub, and specifying additional parameters as needed)."]})}),"\n",(0,i.jsxs)(n.p,{children:["Now that the grid is running we can view the available browsers by visiting our Grid's console at ",(0,i.jsx)(n.code,{children:"http://localhost:4444/grid/console"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Grid Console",src:r(5667).A+"",width:"823",height:"565"})}),"\n",(0,i.jsxs)(n.p,{children:["To refine the list of available browsers, we can specify an additional ",(0,i.jsx)(n.code,{children:"--driver-implementation"})," parameter when registering the Node.\nFor instance, if we wanted to only offer Safari on a node, we could specify it with ",(0,i.jsx)(n.code,{children:"--driver-implementation safari"}),", which would look\nlike this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"java -jar selenium-server-<version>.jar node --hub http://localhost:4444 --driver-implementation safari\n"})}),"\n",(0,i.jsx)(n.p,{children:"We could also repeat this parameter again if we wanted to explicitly specify more than one browser."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"java -jar selenium-server-<version>.jar node --hub http://localhost:4444 --driver-implementation safari --driver-implementation chrome\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There are numerous parameters that we can use at run time. You can see a full list at the\n",(0,i.jsx)(n.a,{href:"https://www.selenium.dev/documentation/grid/configuration/cli_options/",children:"Selenium Grid documentation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"part-2-test-setup",children:"Part 2: Test Setup"}),"\n",(0,i.jsx)(n.p,{children:"Now let's wire up a simple test script to use our new Grid."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'// filename: test/grid.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\n\ndescribe("Grid", function() {\n  let driver;\n\n  beforeEach(async function() {\n    const url = "http://localhost:4444";\n    driver = await new Builder()\n      .usingServer(url)\n      .forBrowser("chrome")\n      .build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n\n  it("hello world", async function() {\n    await driver.get("http://the-internet.herokuapp.com/");\n    assert((await driver.getTitle()) === "The Internet");\n  });\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Notice in ",(0,i.jsx)(n.code,{children:"beforeEach"})," we're using a URL to connect to the Grid (e.g., ",(0,i.jsx)(n.code,{children:"usingServer(url)"}),"). And we are telling the Grid which\nbrowser we want to use by using the ",(0,i.jsx)(n.code,{children:"forBrowser"})," method."]}),"\n",(0,i.jsxs)(n.p,{children:["You can see a full list of the available browser options at the ",(0,i.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/browsers/",children:"Selenium documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.p,{children:["When we save this file and run it (e.g., ",(0,i.jsx)(n.code,{children:"mocha"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Connect to the Grid Hub"}),"\n",(0,i.jsx)(n.li,{children:"Hub determines which Node has the necessary browser/platform combination"}),"\n",(0,i.jsx)(n.li,{children:"Hub connects the test to the Node"}),"\n",(0,i.jsx)(n.li,{children:"Browser opens on the Node"}),"\n",(0,i.jsx)(n.li,{children:"Test runs"}),"\n",(0,i.jsx)(n.li,{children:"Browser closes on the Node"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"If you're looking to set up Selenium Grid to work with Internet Explorer or Chrome, be sure to read up on how to set them up since there is\nadditional configuration required for each. And if you run into issues, be sure to check out the browser driver documentation for the\nbrowser you're working with:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://chromedriver.chromium.org/",children:"ChromeDriver"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html",children:"FirefoxDriver"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.apple.com/documentation/webkit/about_webdriver_for_safari",children:"SafariDriver"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Also, it's worth noting that while Selenium Grid is a great option for scaling your test infrastructure, it by itself will NOT give you\nparallelization. That is to say, it can handle as many connections as you throw at it (within reason), but you will still need to find a\nway to execute your tests in parallel."}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5667:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/grid-console-bcc357a6230d956715a13048c088490b.png"}}]);