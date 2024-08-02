"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[71836,48897],{48897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(74848),i=n(28453);const a={},o=void 0,s={id:"growl/_javascript",title:"_javascript",description:"Example",source:"@site/tips/53-growl/_javascript.mdx",sourceDirName:"53-growl",slug:"/growl/_javascript",permalink:"/tips/growl/_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/53-growl/_javascript.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_java",permalink:"/tips/growl/_java"},next:{title:"_python",permalink:"/tips/growl/_python"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"First we'll need to pull in our requisite libraries, declare our test suite, and wire up some setup and teardown methods."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'// filename: test/growl.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Growl", function() {\n  let driver;\n\n  beforeEach(async function() {\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Now for our test. We'll need to visit the page we want to display notifications on and do some work with JavaScript to load ",(0,r.jsx)(t.a,{href:"http://jquery.com/",children:"jQuery"}),", jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// filename: test/growl.spec.js\n// ...\n  it(\"runs and shows growl debugging output\", async function() {\n    await driver.get(\"http://the-internet.herokuapp.com\");\n\n    // check for jQuery on the page, add it if needed\n    await driver.executeScript(\n      `if (!window.jQuery) { var jquery = document.createElement('script'); jquery.type = 'text/javascript'; jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'; document.getElementsByTagName('head')[0].appendChild(jquery);}`\n    );\n\n    // use jQuery to add jquery-growl to the page\n    await driver.executeScript(\n      \"$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js');\"\n    );\n\n    // use jQuery to add jquery-growl styles to the page\n    await driver.executeScript(\n      `$('head').append(\"<link rel=stylesheet href=http://the-internet.herokuapp.com/css/jquery.growl.css type=text/css />\");`\n    );\n\n    await driver.sleep(1000);\n\n    await driver.executeScript(\"$.growl({ title: 'GET', message: '/' });\");\n\n    await driver.sleep(3000);\n  });\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"In addition to loading the scripts and styles, we also need to have Selenium work at the right pace for our needs. So we add a slight delay (e.g., 1 second) before the call to jquery-growl to make sure it will be available. After that, we add a slightly longer delay (e.g., 3 seconds) so the rendered growl notification stays on the page long enough for viewing."}),"\n",(0,r.jsx)(t.p,{children:"If we wanted to see color-coded notifications, then we could use one of the following:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// filename: test/growl.spec.js\n// ...\n  it(\"runs and shows growl debugging output\", async function() {\n    // ...\n    await driver.executeScript(\n      \"$.growl.error({ title: 'ERROR', message: 'your error message goes here' });\"\n    );\n    await driver.executeScript(\n      \"$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });\"\n    );\n    await driver.executeScript(\n      \"$.growl.warning({ title: 'Warning!', message: 'your warning message goes here' });\"\n    );\n\n    await driver.sleep(3000);\n  });\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(t.p,{children:["When we save this file and run it (e.g., ",(0,r.jsx)(t.code,{children:"mocha"}),") here is what will happen:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Browser opens"}),"\n",(0,r.jsx)(t.li,{children:"Load the page"}),"\n",(0,r.jsx)(t.li,{children:"Add jQuery, jQuery Growl, and jQuery Growl notifications to the page"}),"\n",(0,r.jsx)(t.li,{children:"Display a set of notification messages in the top-right corner of the page"}),"\n",(0,r.jsx)(t.li,{children:"Notification messages disappear"}),"\n",(0,r.jsx)(t.li,{children:"Browser closes"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this then that's the price you have to pay (unless you can get your team to add it to the application under test)."}),"\n",(0,r.jsxs)(t.p,{children:["I'd like to give a big thanks to Jon Austen (",(0,r.jsx)(t.a,{href:"https://github.com/djangofan",children:"GitHub"}),") for giving me the idea to use jQuery Growl with Selenium."]}),"\n",(0,r.jsx)(t.p,{children:"Happy Testing!"})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);