"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[31807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={language:"javascript",level:1,hide_sidebar:!0,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")}},s=void 0,o={unversionedId:"how-to-access-basic-auth/javascript",id:"how-to-access-basic-auth/javascript",title:"javascript",description:"A Solution",source:"@site/docs/13-how-to-access-basic-auth/javascript.md",sourceDirName:"13-how-to-access-basic-auth",slug:"/how-to-access-basic-auth/javascript",permalink:"/docs/how-to-access-basic-auth/javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/13-how-to-access-basic-auth/javascript.md",tags:[],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{language:"javascript",level:1,hide_sidebar:!0,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"}}},l={},u=[{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By specifying the username and password ",(0,r.kt)("em",{parentName:"p"},"in the URL")," when visiting a page with Selenium, we can side-step the system level dialog box and avoid setting up a proxy server. This approach will work for both HTTP or HTTPS pages."),(0,r.kt)("p",null,"Let's take a look at an example."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"Let's start by requiring our requisite libraries, declare our test class, and wire up some test setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/basic-auth.spec.js\n// ...\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Basic Auth", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000);\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,r.kt)("p",null,"Now let's add our test code to the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/basic-auth-1.spec.js\n// ...\n  it("should visit basic auth secured page directly", async function() {\n    await driver.get(\n      "http://admin:admin@the-internet.herokuapp.com/basic_auth"\n    );\n    const page_message = await driver\n      .findElement(By.css(".example p"))\n      .getText();\n    assert(\n      page_message === "Congratulations! You must have the proper credentials."\n    );\n  });\n});\n')),(0,r.kt)("p",null,"In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"http://admin:admin@"),"). Once it loads we grab text from the page to make sure we ended up in the right place."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"Alternatively, we could have accessed this page before the test (e.g., as part of the test setup). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."),(0,r.kt)("p",null,"Here's what that script would look like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/basic-auth.spec-2.js\n// ...\n  beforeEach(async function() {\n    this.timeout(60000);\n    driver = await new Builder().forBrowser("chrome").build();\n    await driver.get(\n      "http://admin:admin@the-internet.herokuapp.com/basic_auth"\n    );\n  });\n\n  // ...\n\n  it("should visit basic auth without credentials after visiting page with them", async function() {\n    await driver.get("http://the-internet.herokuapp.com/basic_auth");\n    const page_message = await driver\n      .findElement(By.css(".example p"))\n      .getText();\n    assert(\n      page_message === "Congratulations! You must have the proper credentials."\n    );\n  });\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of ",(0,r.kt)("em",{parentName:"strong"},"each")," type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save these files and run them (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha"),"), here is what will happen:"),(0,r.kt)("u",null,"basic-auth-1.spec.js"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth"),(0,r.kt)("li",{parentName:"ul"},"Get the page text"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("p",null,"And when you save the second example and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"basic-auth-2.spec.js"),"), here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth as part of the test setup"),(0,r.kt)("li",{parentName:"ul"},"Visit the page without the Basic Auth credentials (successfully)"),(0,r.kt)("li",{parentName:"ul"},"Get the page text"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);