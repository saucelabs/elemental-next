"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[97810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),d=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return n?i.createElement(h,l(l({ref:t},s),{},{components:n})):i.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={language:"ruby",level:2,hide_sidebar:!0,publish_date:new Date("2015-10-13T00:00:00.000Z"),last_update:{date:new Date("2023-02-28T00:00:00.000Z")}},l=void 0,o={unversionedId:"dynamic-pages/ruby",id:"dynamic-pages/ruby",title:"ruby",description:"A Solution",source:"@site/docs/23-dynamic-pages/ruby.md",sourceDirName:"23-dynamic-pages",slug:"/dynamic-pages/ruby",permalink:"/docs/dynamic-pages/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/23-dynamic-pages/ruby.md",tags:[],version:"current",lastUpdatedBy:"discombobulateme",lastUpdatedAt:1677542400,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{language:"ruby",level:2,hide_sidebar:!0,publish_date:"2015-10-13T00:00:00.000Z",last_update:{date:"2023-02-28T00:00:00.000Z"}}},u={},d=[{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],s={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"By using a flexible wait strategy you can easily meet the rigors of testing dynamic web applications."),(0,a.kt)("p",null,"Thankfully Selenium comes with one built in -- ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/wiki/Ruby-Bindings#explicit-waits"},"Explicit Waits"),". With them you specify a timeout and an action. Selenium will repeatedly try that action until it can either complete it successfully (at which point it will move onto the next step of the test), or it will throw a timeout exception (causing your test to error)."),(0,a.kt)("p",null,"Let's continue with an example."),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("p",null,"Let's use from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," which load content dynamically (",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dynamic_loading"},"link"),"). On it there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Start")," button that when clicked will trigger a loading bar to appear for 5 seconds. After that time it will disappear and a new element with the text ",(0,a.kt)("inlineCode",{parentName:"p"},"'Hello World!'")," will appear."),(0,a.kt)("p",null,"We'll start by requiring our dependent libraries (",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webriver")," to drive the browser and ",(0,a.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," to perform our assertions) and wiring up some ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods to handle our test configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: dynamic_loading.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Now we can create our first test. In it we'll visit the page, click the start button, wait for the finish text to appear, and assert that it appeared."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'\n  @driver.find_element(css: '#start button').click\n  Selenium::WebDriver::Wait.new(timeout: 6).until { @driver.find_element(id: 'finish').displayed? }\n  expect(@driver.find_element(id: 'finish').displayed?).to eql true\nend\n")),(0,a.kt)("p",null,"In the code above we are using an explicit wait with a timeout of ",(0,a.kt)("inlineCode",{parentName:"p"},"6")," seconds (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Selenium::WebDriver::Wait.new(timeout: 6).until"),"), looking for the element with the finish text (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"@driver.find_element(id: 'finish')"),", and seeing if it's displayed (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},".displayed?"),")."),(0,a.kt)("p",null,"If we set the timeout too low (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout: 2"),") Selenium won't wait long enough for the loading bar to finish, which will trigger the timeout threshold and throw an exception (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"until': timed out after 2 seconds (Selenium::WebDriver::Error::TimeOutError)"),")."),(0,a.kt)("p",null,"And if we didn't use an explicit wait at all, the test would have errored because Selenium would have tried to check for the finish text before it displayed and return a ",(0,a.kt)("inlineCode",{parentName:"p"},"NoSuchElement")," exception (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},'Unable to locate element: {"method":"css selector","selector":"#finish"} (Selenium::WebDriver::Error::NoSuchElementError)'),")."),(0,a.kt)("p",null,"For applications that already have the target element on the page but have it hidden, this approach will work as well (which we can see by pointing our test at the other dynamic loading example)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'\n  @driver.find_element(css: '#start button').click\n  Selenium::WebDriver::Wait.new(timeout: 6).until { @driver.find_element(id: 'finish').displayed? }\n  expect(@driver.find_element(id: 'finish').displayed?).to eql true\nend\n")),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("p",null,"Explicit waits are a useful tool to have in your toolbelt since they enable you to finely tune your tests and avoid static sleeps and arbitrary timeouts. But rather than litter your test code with the verbose Selenium incantation, it's best to pull this code out into a method that accepts a timeout argument and the action you want to wait for as a block."),(0,a.kt)("p",null,"You can then clean up our test code and reuse this method whenever an explicit wait is needed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def wait_for(seconds = 6)\n  Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'\n  @driver.find_element(css: '#start button').click\n  wait_for { @driver.find_element(id: 'finish').displayed? }\n  expect(@driver.find_element(id: 'finish').displayed?).to eql true\nend\n")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save the file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby dynamic_loading.rb")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Click the Start button"),(0,a.kt)("li",{parentName:"ul"},"Wait for the loading bar to disappear and display the finish text"),(0,a.kt)("li",{parentName:"ul"},"Assert that the finish text element is displayed"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this tip will help you build more efficient and resilient tests when faced with dynamic pages that are constructed in various ways."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);