"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(n),m=r,g=h["".concat(s,".").concat(m)]||h[m]||c[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={title:"Javascript",id:"65-hightlight-elements-javascript",slug:"javascript/",number:65,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-03-28T00:00:00.000Z")},tags:["guest post","highlight","javascript","locators"],level:2,category:["troubleshooting"],language:"javascript"},l="How to Visually Verify Your Locators",o={unversionedId:"highlight-elements/65-hightlight-elements-javascript",id:"highlight-elements/65-hightlight-elements-javascript",title:"Javascript",description:"Intro",source:"@site/docs/65-highlight-elements/javascript.md",sourceDirName:"65-highlight-elements",slug:"/highlight-elements/javascript/",permalink:"/elemental-next/docs/highlight-elements/javascript/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/65-highlight-elements/javascript.md",tags:[{label:"guest post",permalink:"/elemental-next/docs/tags/guest-post"},{label:"highlight",permalink:"/elemental-next/docs/tags/highlight"},{label:"javascript",permalink:"/elemental-next/docs/tags/javascript"},{label:"locators",permalink:"/elemental-next/docs/tags/locators"}],version:"current",frontMatter:{title:"Javascript",id:"65-hightlight-elements-javascript",slug:"javascript/",number:65,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-03-28T00:00:00.000Z"},tags:["guest post","highlight","javascript","locators"],level:2,category:["troubleshooting"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/elemental-next/docs/highlight-elements/java/"},next:{title:"Python",permalink:"/elemental-next/docs/highlight-elements/python/"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},h="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-visually-verify-your-locators"},"How to Visually Verify Your Locators"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a pseudo guest post from Brian Goad. I've adapted one of his blog posts with his permission. You can see the original blog post ",(0,r.kt)("a",{parentName:"p",href:"http://swdandruby.wordpress.com/2013/07/19/did-i-select-the-right-element/"},"here"),".")),(0,r.kt)("p",null,"It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?"),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By leveraging some simple JavaScript and CSS styling, we can highlight the element on the page that we're targeting. This way we can visually inspect it to make sure it is the one that we want."),(0,r.kt)("p",null,"Let's take a look at an example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"For our initial setup let's pull in our requisite libraries, declare our test class, and wire up some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/highlight-elements.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Highlight elements", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000)\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,r.kt)("p",null,"Now let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"highlight")," helper function that will accept a found ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," from Selenium and a time to wait (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"duration"),") as arguments."),(0,r.kt)("p",null,"By setting a duration, we can control how long to highlight an element on the page before reverting the styling back. We can also make this an optional argument by setting a default value for it (e.g., 3 seconds)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/highlight-elements.spec.js\n// ...\n  async function highlight(element, duration = 2000) {\n    // store original style so it can be reset later\n    const originalStyle = await element.getAttribute("style");\n\n    // style element with callout (e.g., dashed red border)\n    await driver.executeScript(\n      "arguments[0].setAttribute(arguments[1], arguments[2])",\n      element,\n      "style",\n      "border: 2px solid red; border-style: dashed;"\n    );\n\n    // keep element highlighted for the duration and then revert\n    await driver.sleep(duration);\n    await driver.executeScript(\n      "arguments[0].setAttribute(arguments[1], arguments[2])",\n      element,\n      "style",\n      originalStyle\n    );\n  }\n// ...\n')),(0,r.kt)("p",null,"There are three things going on here."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We store the style of the element so we can revert it back when we're done"),(0,r.kt)("li",{parentName:"ol"},"We change the style of the element so it visually stands out (e.g., a red dashed border)"),(0,r.kt)("li",{parentName:"ol"},"We revert the style of the element back after 3 seconds")),(0,r.kt)("p",null,"We're accomplishing the style change through JavaScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"setAttribute")," function. And we're executing it with Selenium's ",(0,r.kt)("inlineCode",{parentName:"p"},"executeScript")," command."),(0,r.kt)("p",null,"Now to use this in our test is simple, we just prepend a ",(0,r.kt)("inlineCode",{parentName:"p"},"findElement")," command with a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"highlight")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/highlight-elements.spec.js\n// ...\n  it("highlights target element", async function() {\n    await driver.get("http://the-internet.herokuapp.com/large");\n    await highlight(await driver.findElement(By.id("sibling-2.3")));\n  });\n});\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Browser opens"),(0,r.kt)("li",{parentName:"ul"},"Load the page"),(0,r.kt)("li",{parentName:"ul"},"Find the element"),(0,r.kt)("li",{parentName:"ul"},"Change the styling of the element so it has a red dashed-line border"),(0,r.kt)("li",{parentName:"ul"},"Wait 3 seconds"),(0,r.kt)("li",{parentName:"ul"},"Revert the styling to remove the border"),(0,r.kt)("li",{parentName:"ul"},"Browser closes")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"If you wanted to take this a step further, you could leverage this approach along with an interactive debugger. You can read more about how to do that ",(0,r.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/14-interactive-prompts-revisited"},"here in Brian's other guest post"),"==",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"==."),(0,r.kt)("p",null,"Alternatively, you could verify your locators by using a browser plugin like FireFinder. You can read more about how to do that ",(0,r.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/verifying-locators"},"here in this previous tip"),"==",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"==."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"You can follow Brian on Twitter at ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/bbbco"},"@bbbco"),"."))}c.isMDXComponent=!0}}]);