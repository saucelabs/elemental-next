"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[78995],{78995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var i=n(74848),r=n(28453);const l={},s=void 0,a={id:"locator-strategy/_ruby",title:"_ruby",description:"Example 1",source:"@site/tips/22-locator-strategy/_ruby.mdx",sourceDirName:"22-locator-strategy",slug:"/locator-strategy/_ruby",permalink:"/tips/locator-strategy/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/22-locator-strategy/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How To Pick a Programming Language",permalink:"/tips/21-choosing-a-language"},next:{title:"Locator Strategy",permalink:"/tips/22-locator-strategy"}},o={},h=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(t.p,{children:["With the markup below (taken from ",(0,i.jsx)(t.a,{href:"http://the-internet.herokuapp.com/download",children:"here"}),") we can demonstrate grabbing the first link from a series of links with varying degrees of precision via CSS Selectors."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<div id="content" class="large-12 columns">\n  <div class="example">\n    <h3>File Downloader</h3>\n    <a href="download/hello-world.pdf">hello-world.pdf</a><br>\n    <a href="download/avatar.jpg">avatar.jpg</a>\n  </div>\n</div>\n'})}),"\n",(0,i.jsx)(t.p,{children:"To begin the script, here are the setup, teardown, and run actions we will use."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"require 'selenium-webdriver'\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,i.jsx)(t.p,{children:"The way Selenium works is by first finding the element you want and then chaining additional actions to it. So, to grab the first link and output it's URL we can do the following."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/download'\n  link = @driver.find_element(css: 'a').attribute('href')\n  puts link\nend\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note the ",(0,i.jsx)(t.code,{children:"css: a"}),". The ",(0,i.jsx)(t.code,{children:"css:"})," is us telling Selenium what locator strategy to use, and the ",(0,i.jsx)(t.code,{children:"a"})," is a selector for a link."]}),"\n",(0,i.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(t.p,{children:"While the previous solution works, it's far from perfect. Of all the possible links on the page Selenium will return the first one. So, if there were other links aside from the ones listed in the download list, we may not get the result we want. To help this, we can be more precise with our CSS."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/download'\n  link = @driver.find_element(css: '#content a').attribute('href')\n  puts link\nend\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note the ",(0,i.jsx)(t.code,{children:"css: '#content a'"}),". The ",(0,i.jsx)(t.code,{children:"#content"})," is a selector for an HTML element with ",(0,i.jsx)(t.code,{children:'id="content"'}),". With it, we are able to chain together the previously used ",(0,i.jsx)(t.code,{children:"a"})," (separated by spaces) to grab the first link from within the content div on the page."]}),"\n",(0,i.jsx)(t.h2,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(t.p,{children:"While Example 2 does become more precise, we can scope down even further."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/download'\n  link = @driver.find_element(css: '#content .example a').attribute('href')\n  puts link\nend\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note the ",(0,i.jsx)(t.code,{children:"css: '#content .example a'"}),". The ",(0,i.jsx)(t.code,{children:".example"})," is a selector for an HTML element with ",(0,i.jsx)(t.code,{children:'class="example"'}),". With this we are able to grab the first link from within the example div which is within the content div."]}),"\n",(0,i.jsxs)(t.p,{children:["Alternatively, we could have just scoped into ",(0,i.jsx)(t.code,{children:".example a"}),". Either would have worked and for this simple example it doesn't matter. The layout of a page will ultimately influence your CSS Selector decision. The ultimate goal is to find and use unique and reliable selectors that will get you the intended behavior you want for your test."]}),"\n",(0,i.jsxs)(t.p,{children:["You can find a full list of CSS Selectors ",(0,i.jsx)(t.a,{href:"http://www.w3schools.com/cssref/css_selectors.asp",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsx)("u",{children:"Example 1"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser"}),"\n",(0,i.jsx)(t.li,{children:"Visit the page"}),"\n",(0,i.jsx)(t.li,{children:"Grab the first link and output the URL to terminal"}),"\n"]}),"\n",(0,i.jsx)("u",{children:"Example 1"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser"}),"\n",(0,i.jsx)(t.li,{children:"Visit the page"}),"\n",(0,i.jsx)(t.li,{children:"Grab the first link within the content div on the page and output the URL to terminal"}),"\n"]}),"\n",(0,i.jsx)("u",{children:"Example 1"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser"}),"\n",(0,i.jsx)(t.li,{children:"Visit the page"}),"\n",(0,i.jsx)(t.li,{children:"Grab the first link from within the example div, which is within the content div, and output the URL to terminal"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"In a perfect world all pages would be written with sound markup and uniquely named bits but that's more the exception than the rule. So, you will likely find as you dig into automating various sites that things will not be as straightforward as the examples above. There are some circumstances where you have a selector dialed in, but you hit issues with older browsers."}),"\n",(0,i.jsx)(t.p,{children:"As far as finding CSS Selectors, the simplest way to find them is to inspect the elements on a page. The best way to do this is from within your web browser. Fortunately popular browsers of today come pre-loaded with development tools that make this simple to accomplish."}),"\n",(0,i.jsxs)(t.p,{children:["When viewing the page, right click on the element you want to interact with and click ",(0,i.jsx)(t.strong,{children:"Inspect Element"}),". This will bring up a small window with all the HTML for the page but zoomed into your selection highlighted. From here you can see if there are unique attributes you can work with (e.g. ",(0,i.jsx)(t.code,{children:"id"}),", ",(0,i.jsx)(t.code,{children:"class"}),", etc.). At the bottom of the window a set of selectors will be listed showing you the selector for your selection and a hierarchy of the selectors on the page that lead up to your selection."]}),"\n",(0,i.jsx)(t.p,{children:"From here you should be able to construct a CSS Selector to use in a test."}),"\n",(0,i.jsx)(t.p,{children:"To that end, stay tuned for future tips where we'll cover more advanced CSS Selector techniques and strategies for dealing with older browsers."}),"\n",(0,i.jsx)(t.p,{children:"Until then, Happy Testing!"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);