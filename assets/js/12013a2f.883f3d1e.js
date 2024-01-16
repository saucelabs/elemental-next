"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[27767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,m=d["".concat(s,".").concat(c)]||d[c]||h[c]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={language:"ruby",level:1,hide_sidebar:!0,publish_date:new Date("2013-10-22T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")}},l=void 0,i={unversionedId:"locator-strategy/ruby",id:"locator-strategy/ruby",title:"ruby",description:"A Solution",source:"@site/docs/22-locator-strategy/ruby.md",sourceDirName:"22-locator-strategy",slug:"/locator-strategy/ruby",permalink:"/docs/locator-strategy/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/22-locator-strategy/ruby.md",tags:[],version:"current",lastUpdatedBy:"Esther",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{language:"ruby",level:1,hide_sidebar:!0,publish_date:"2013-10-22T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"}}},s={},u=[{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},d="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"While each locator strategy serves its purpose there is one approach that is better. It is one that is cross-browser performant, simpler to maintain, and powerful -- that's CSS Selectors."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"With the markup below (taken from ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/download"},"here"),") we can demonstrate grabbing the first link from a series of links with varying degrees of precision via CSS Selectors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="content" class="large-12 columns">\n  <div class="example">\n    <h3>File Downloader</h3>\n    <a href="download/hello-world.pdf">hello-world.pdf</a><br>\n    <a href="download/avatar.jpg">avatar.jpg</a>\n  </div>\n</div>\n')),(0,r.kt)("p",null,"To begin the script, here are the setup, teardown, and run actions we will use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'selenium-webdriver'\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,r.kt)("p",null,"The way Selenium works is by first finding the element you want and then chaining additional actions to it. So, to grab the first link and output it's URL we can do the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/download'\n  link = @driver.find_element(css: 'a').attribute('href')\n  puts link\nend\n")),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"css: a"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"css:")," is us telling Selenium what locator strategy to use, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," is a selector for a link."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"While the previous solution works, it's far from perfect. Of all the possible links on the page Selenium will return the first one. So, if there were other links aside from the ones listed in the download list, we may not get the result we want. To help this, we can be more precise with our CSS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/download'\n  link = @driver.find_element(css: '#content a').attribute('href')\n  puts link\nend\n")),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"css: '#content a'"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"#content")," is a selector for an HTML element with ",(0,r.kt)("inlineCode",{parentName:"p"},'id="content"'),". With it we are able to chain together the previously used ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," (separated by spaces) to grab the first link from within the content div on the page."),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("p",null,"While Example 2 does become more precise, we can scope down even further."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/download'\n  link = @driver.find_element(css: '#content .example a').attribute('href')\n  puts link\nend\n")),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"css: '#content .example a'"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},".example")," is a selector for an HTML element with ",(0,r.kt)("inlineCode",{parentName:"p"},'class="example"'),". With this we are able to grab the first link from within the example div which is within the content div."),(0,r.kt)("p",null,"Alternatively, we could have just scoped into ",(0,r.kt)("inlineCode",{parentName:"p"},".example a"),". Either would have worked and for this simple example it doesn't matter. The layout of a page will ultimately influence your CSS Selector decision. The ultimate goal is to find and use unique and reliable selectors that will get you the intended behavior you want for your test."),(0,r.kt)("p",null,"You can find a full list of CSS Selectors ",(0,r.kt)("a",{parentName:"p",href:"http://www.w3schools.com/cssref/css_selectors.asp"},"here"),"."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("u",null,"Example 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Grab the first link and output the URL to terminal")),(0,r.kt)("u",null,"Example 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Grab the first link within the content div on the page and output the URL to terminal")),(0,r.kt)("u",null,"Example 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Grab the first link from within the example div, which is within the content div, and output the URL to terminal")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In a perfect world all pages would be written with sound markup and uniquely named bits but that's more the exception than the rule. So, you will likely find as you dig into automating various sites that things will not be as straightforward as the examples above. There are some circumstances where you have a selector dialed in but you hit issues with older browsers."),(0,r.kt)("p",null,"As far as finding CSS Selectors, the simplest way to find them is to inspect the elements on a page. The best way to do this is from within your web browser. Fortunately popular browsers of today come pre-loaded with development tools that make this simple to accomplish."),(0,r.kt)("p",null,"When viewing the page right click on the element you want to interact with and click ",(0,r.kt)("strong",{parentName:"p"},"Inspect Element"),". This will bring up a small window with all of the HTML for the page but zoomed into your selection highlighted. From here you can see if there are unique attributes you can work with (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"class"),", etc). At the bottom of the window a set of selectors will be listed showing you the selector for your selection and a heirarchy of the selectors on the page that lead up to your selection."),(0,r.kt)("p",null,"From here you should able to construct a CSS Selector to use in a test."),(0,r.kt)("p",null,"To that end, stay tuned for future tips where we'll cover more advanced CSS Selector techniques and strategies for dealing with older browsers."),(0,r.kt)("p",null,"Until then, Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);