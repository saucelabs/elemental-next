"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Take Screenshot on Failure",id:"16-take-screenshot-on-failure-ruby",contentUrl:"docs/take-screenshot-on-failure/16-take-screenshot-on-failure-ruby",sidebar_label:"Ruby",text:"With browser tests it can often be challenging to track down the issue that caused a failure. By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future.",number:16,hide_table_of_contents:!0,publish_date:new Date("2015-07-08T00:00:00.000Z"),last_update:{date:new Date("2023-02-28T00:00:00.000Z")},tags:["reporting","screenshot"],level:2,category:["troubleshooting"],language:"ruby"},i="How to Take A Screenshot on Failure",s={unversionedId:"take-screenshot-on-failure/16-take-screenshot-on-failure-ruby",id:"take-screenshot-on-failure/16-take-screenshot-on-failure-ruby",title:"Take Screenshot on Failure",description:"Intro",source:"@site/docs/16-take-screenshot-on-failure/ruby.mdx",sourceDirName:"16-take-screenshot-on-failure",slug:"/take-screenshot-on-failure/16-take-screenshot-on-failure-ruby",permalink:"/docs/take-screenshot-on-failure/16-take-screenshot-on-failure-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/16-take-screenshot-on-failure/ruby.mdx",tags:[{label:"reporting",permalink:"/docs/tags/reporting"},{label:"screenshot",permalink:"/docs/tags/screenshot"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677542400,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"Take Screenshot on Failure",id:"16-take-screenshot-on-failure-ruby",contentUrl:"docs/take-screenshot-on-failure/16-take-screenshot-on-failure-ruby",sidebar_label:"Ruby",text:"With browser tests it can often be challenging to track down the issue that caused a failure. By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future.",number:16,hide_table_of_contents:!0,publish_date:"2015-07-08T00:00:00.000Z",last_update:{date:"2023-02-28T00:00:00.000Z"},tags:["reporting","screenshot"],level:2,category:["troubleshooting"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/take-screenshot-on-failure/16-take-screenshot-on-failure-python"},next:{title:"Ruby",permalink:"/docs/retrieve-http-status-codes/17-retrieve-http-status-codes-ruby"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],c={toc:u},h="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-take-a-screenshot-on-failure"},"How to Take A Screenshot on Failure"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"With browser tests it can often be challenging to track down the issue that caused a failure."),(0,r.kt)("p",null,"By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"A simple way to gain insight into your test failures is to capture screenshots at the moment of failure. This is something that is fairly quick to add to your tests, and allows you to review these error messages."),(0,r.kt)("p",null,"Here is an example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's start by including our requisite libraries (",(0,r.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser and ",(0,r.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertion) and wire up some simple ",(0,r.kt)("inlineCode",{parentName:"p"},"setup")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"teardown")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: screenshot.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n")),(0,r.kt)("p",null,"Next we'll want to create a method to execute our tests. This is where we'll capture when a failure occurs and take a screenshot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'def run\n  setup\n  begin\n    yield\n  rescue RSpec::Expectations::ExpectationNotMetError => error\n    puts error.message\n    @driver.save_screenshot "./#{Time.now.strftime("failshot__%d_%m_%Y__%H_%M_%S")}.png"\n  end\n  teardown\nend\n')),(0,r.kt)("p",null,"After calling ",(0,r.kt)("inlineCode",{parentName:"p"},"setup")," and before calling ",(0,r.kt)("inlineCode",{parentName:"p"},"teardown")," we wrap our test code execution (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"yield"),") in a ",(0,r.kt)("inlineCode",{parentName:"p"},"rescue")," block. This handles the exception that a test failure will return. When a failure occurs the error message will get outputted to the terminal (just like it normally would) but now we are also capturing a screenshot through the help of Selenium's ",(0,r.kt)("inlineCode",{parentName:"p"},".save_screenshot")," method."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".save_screenshot")," accepts a filename as a string (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"'failshot.png'"),"). When this command executes it will save an image file to your local system in the current working directory."),(0,r.kt)("p",null,"Note the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"Time.now.strftime")," in the screenshot filename. This is adding a timestamp (down to the second) to the filename. This provides a (reasonably) unique file name and has the added benefit of listing the files in the order taken."),(0,r.kt)("p",null,"Now let's wire up our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n  expect(@driver.find_element(css: 'h1').text).to eql 'blah blah blah'\nend\n")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"If we save this file and run it (",(0,r.kt)("inlineCode",{parentName:"p"},"ruby screenshot.rb")," from the command-line) here is what would happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Load the homepage of ",(0,r.kt)("a",{parentName:"li",href:"http://github.com/tourdedave/the-internet"},"the-internet")),(0,r.kt)("li",{parentName:"ul"},"Check the text of the page header and fail"),(0,r.kt)("li",{parentName:"ul"},"Output a failure message in the terminal"),(0,r.kt)("li",{parentName:"ul"},"Capture a timestamped screenshot in the current working directory"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"For more info on ",(0,r.kt)("inlineCode",{parentName:"p"},"strftime")," (a.k.a. String Formatted Time) go ",(0,r.kt)("a",{parentName:"p",href:"http://apidock.com/ruby/DateTime/strftime"},"here"),"."),(0,r.kt)("p",null,"But if you want truly unique filenames, then you should use a unique ID in the filename instead of a timestamp (e.g., something like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/assaf/uuid"},(0,r.kt)("inlineCode",{parentName:"a"},"uuid")),"). This will prevent screenshots from getting overwritten when you have two (or more) tests taking screenshots at the same time."),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:n(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}p.isMDXComponent=!0},9417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);