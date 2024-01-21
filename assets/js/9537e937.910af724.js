"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={language:"ruby",level:2,hide_sidebar:!0,publish_date:new Date("2015-10-13T00:00:00.000Z"),last_update:{date:new Date("2023-03-15T00:00:00.000Z")}},o=void 0,l={unversionedId:"waiting/ruby",id:"waiting/ruby",title:"ruby",description:"A Solution",source:"@site/tips/47-waiting/ruby.md",sourceDirName:"47-waiting",slug:"/waiting/ruby",permalink:"/tips/waiting/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/47-waiting/ruby.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1678838400,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{language:"ruby",level:2,hide_sidebar:!0,publish_date:"2015-10-13T00:00:00.000Z",last_update:{date:"2023-03-15T00:00:00.000Z"}}},s={},p=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"The short answer? Use explicit waits."),(0,a.kt)("p",null,"Adding an implicit wait to your Selenium tests is simple enough and may seem intuitive. But there are cases where it simply doesn't help you like you think it will. And while you can combine explicit and implicit waits together (e.g., override an implicit wait with an explicit wait to make a Selenium action wait longer) -- you shouldn't. I'll discuss more on that later."),(0,a.kt)("p",null,"Let's continue with some examples."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's step through some examples that deal with ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dynamic_loading"},"dynamically loaded content")," available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),". There are two examples, each is constructed slightly differently, but they have the same behavior (e.g., when you click the button on the page a loading bar appears for 5 seconds then disappears and displays some text)."),(0,a.kt)("p",null,"First let's pull in our dependent libraries (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, and ",(0,a.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertions) and wire up some simple methods (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run"),") to handle our test configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: waiting.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\n  @driver.manage.timeouts.implicit_wait = 3\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Notice that in ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," we are specifying an implicit wait of ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," seconds. This tells Selenium to retry each ",(0,a.kt)("inlineCode",{parentName:"p"},"find_element")," action for up to 3 seconds. If it can complete the action in that amount of time, it will proceed onto the next command. Otherwise it will raise a timeout exception."),(0,a.kt)("p",null,"Now let's add our first test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'\n  @driver.find_element(css: '#start button').click\n  @driver.find_element(id: 'finish').displayed?\n  expect(@driver.find_element(id: 'finish').text).to eql('Hello World!')\nend\n")),(0,a.kt)("p",null,"In this example the element we're interested in is already on the page, just hidden. When we execute this (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby waiting.rb")," from the command-line) the ",(0,a.kt)("inlineCode",{parentName:"p"},".displayed?")," step runs but it doesn't trigger the implicit wait. Instead, the test proceeds directly to the assertion looking for text that's not there and failing."),(0,a.kt)("p",null,"Let's run the same test against the other dynamic loading example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'\n  @driver.find_element(css: '#start button').click\n  @driver.find_element(id: 'finish').displayed?\n  expect(@driver.find_element(id: 'finish').text).to eql('Hello World!')\nend\n")),(0,a.kt)("p",null,"In this example the element we're interested in gets rendered ",(0,a.kt)("em",{parentName:"p"},"after")," the loading bar. When we run this (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby waiting.rb")," from the command-line) the ",(0,a.kt)("inlineCode",{parentName:"p"},".displayed?")," step will wait as we intend, but the assertion will still fail. That's because the implicit wait is not long enough (because the loading bar takes 5 seconds to complete, but the implicit wait is set at ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," seconds)."),(0,a.kt)("p",null,"Now we're at a cross-roads. Do we increase the implicit wait to account for this? That would be a simple enough fix for this example. But that's a bad option since it would impact ",(0,a.kt)("em",{parentName:"p"},"all")," of the tests that use this setup. Instead, we can use an explicit wait."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def wait_for(seconds)\n  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'\n  @driver.find_element(css: '#start button').click\n  wait_for(10) { @driver.find_element(id: 'finish').displayed? }\n  expect(@driver.find_element(id: 'finish').text).to eql('Hello World!')\nend\n")),(0,a.kt)("p",null,"If we wrap our ",(0,a.kt)("inlineCode",{parentName:"p"},".displayed?")," action in an explicit wait we are able to override the implicit wait and wait for up 10 seconds. Now when we run our test, our test will pass. And if we revisit our first example and do the same, then it will pass too."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'\n  @driver.find_element(css: '#start button').click\n  wait_for(10) { @driver.find_element(id: 'finish').displayed? }\n  expect(@driver.find_element(id: 'finish').text).to eql('Hello World!')\nend\n")),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"on-not-mixing-explicit-and-implicit-waits"},"On Not Mixing Explicit and Implicit Waits"),(0,a.kt)("p",{parentName:"blockquote"},"If your test suite uses both explicit and implicit waits, then you're in for some pain (e.g., transient failures as you scale your test suite). For more details about this, check out ",(0,a.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/15164742/combining-implicit-wait-and-explicit-wait-together-results-in-unexpected-wait-ti#answer-15174978"},"this StackOverflow answer")," from ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/jimevansmusic"},"Jim Evans")," (a member of the Selenium core team)."),(0,a.kt)("p",{parentName:"blockquote"},"The best thing is to only use explicit waits. We already have them in place, so we can go ahead and simply remove the implicit wait from our ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," method."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def setup\n @driver = Selenium::WebDriver.for :firefox\nend\n")),(0,a.kt)("p",{parentName:"blockquote"},"And there you go!"),(0,a.kt)("h2",{parentName:"blockquote",id:"expected-behavior"},"Expected Behavior")),(0,a.kt)("p",null,"If we save the file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby waiting.rb")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Click the Start button"),(0,a.kt)("li",{parentName:"ul"},"Wait for the progress bar to disappear and finish text to appear"),(0,a.kt)("li",{parentName:"ul"},"Assert that the finish text appears on the page"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"While an implicit wait can be useful, providing you an initial blanket of cover, it's not ideal for every circumstance. Instead explicit waits are a better tool for the job since they provide more resilient and predictable results (even if they make your test code more verbose)."),(0,a.kt)("p",null,"Regardless of the approach you choose, be sure never to mix implicit and explicit waits together."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);