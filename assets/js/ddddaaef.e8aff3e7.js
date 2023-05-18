"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6723],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,m=d["".concat(i,".").concat(c)]||d[c]||h[c]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"72: Headless Chrome",id:"72-headless-chrome-ruby",contentUrl:"docs/headless-chrome/72-headless-chrome-ruby",sidebar_label:"Ruby",text:"If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in.",number:72,hide_table_of_contents:!0,publish_date:new Date("2017-09-25T00:00:00.000Z"),last_update:{date:new Date("2023-03-06T00:00:00.000Z")},tags:["headless","chrome"],level:2,category:["remote"],language:"ruby"},s="How To Run Your Tests Headlessly with Chrome",l={unversionedId:"headless-chrome/72-headless-chrome-ruby",id:"headless-chrome/72-headless-chrome-ruby",title:"72: Headless Chrome",description:"Intro",source:"@site/docs/72-headless-chrome/ruby.md",sourceDirName:"72-headless-chrome",slug:"/headless-chrome/72-headless-chrome-ruby",permalink:"/elemental-next/docs/headless-chrome/72-headless-chrome-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/72-headless-chrome/ruby.md",tags:[{label:"headless",permalink:"/elemental-next/docs/tags/headless"},{label:"chrome",permalink:"/elemental-next/docs/tags/chrome"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1678060800,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"72: Headless Chrome",id:"72-headless-chrome-ruby",contentUrl:"docs/headless-chrome/72-headless-chrome-ruby",sidebar_label:"Ruby",text:"If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in.",number:72,hide_table_of_contents:!0,publish_date:"2017-09-25T00:00:00.000Z",last_update:{date:"2023-03-06T00:00:00.000Z"},tags:["headless","chrome"],level:2,category:["remote"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/mobile-testing-pyramid/71-mobile-testing-pyramid"},next:{title:"Java",permalink:"/elemental-next/docs/open-new-window/73-open-new-window-java"}},i={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},d="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-run-your-tests-headlessly-with-chrome"},"How To Run Your Tests Headlessly with Chrome"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is a guest post from ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/ckenst"},"Chris Kenst"),".")),(0,a.kt)("p",null,"If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in. You could use a third party library like Xvfb (",(0,a.kt)("a",{parentName:"p",href:"/tips/38-headless"},"tip 38"),") ==",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"== or PhantomJS (",(0,a.kt)("a",{parentName:"p",href:"/tips/46-headless-ghostdriver"},"tip 46"),") ==",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"== but those can be hard to install and aren't guaranteed to be supported in the long run (like PhantomJS)."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"Enter Headless Chrome (",(0,a.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md"},"link"),")"),(0,a.kt)("p",null,"Starting with Chrome 59 (Chrome 60 for Windows) we can pass Chrome a few configuration options to enable headless mode."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Before we start make sure you\u2019ve at least got Chrome 59 installed and are using the latest ",(0,a.kt)("a",{parentName:"p",href:"https://sites.google.com/a/chromium.org/chromedriver/"},"ChromeDriver")," version."),(0,a.kt)("p",null,"First let\u2019s create a simple Selenium script. Like all test scripts, first we will pull in the requisite libraries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: headless_chrome.rb\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n")),(0,a.kt)("p",null,"Now we can create our ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," method where we will pass Chrome our headless options as command line arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def setup\n    options = Selenium::WebDriver::Chrome::Options.new\n    options.add_argument('--headless')\n    options.add_argument('--disable-gpu')\n    options.add_argument('--remote-debugging-port=9222')\n    @driver = Selenium::WebDriver.for :chrome, options: options\nend\n")),(0,a.kt)("p",null,"The first ",(0,a.kt)("inlineCode",{parentName:"p"},"add_argument")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"'-- headless'")," allows us to run Chrome in headless mode. The second argument is, ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"according to Google"),", temporarily required to work around a few known bugs. The third argument is optional but gives us the ability to debug our application in another browser if we need to (using localhost:9222)."),(0,a.kt)("p",null,"Now let's finish our test by creating our ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def teardown\n    @driver.quit\nend\n\ndef run\n    setup\n    yield\n    teardown\nend\n\nrun do\n    @driver.get 'http://the-internet.herokuapp.com'\n    expect(@driver.title).to eql 'The Internet'\n    @driver.save_screenshot('headless.png')\nend\n")),(0,a.kt)("p",null,"Here we are loading a page, asserting on the title (to make sure we are in the right place), and taking a screenshot to make sure our headless setup is working correctly."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When we save our file and run it (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby headless_chrome.rb"),") here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A headless chrome browser instance will open"),(0,a.kt)("li",{parentName:"ul"},"Test runs and captures a screenshot"),(0,a.kt)("li",{parentName:"ul"},"Browser closes")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this tip has helped you get your tests running smoothly locally (or on your CI Server). Between this and the two other headless testing tips available (",(0,a.kt)("a",{parentName:"p",href:"/tips/38-headless"},"here"),"==",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"== and ",(0,a.kt)("a",{parentName:"p",href:"/tips/46-headless-ghostdriver"},"here"),")==",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"== this is the best option since it's easy to setup, officially supported by the browser vendor, and has a consistent rendering experience to what an end-user would experience in a full instance of Chrome."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Chris Kenst is a Software Quality advocate, Test Engineer, ",(0,a.kt)("a",{parentName:"p",href:"http://kenst.com"},"occasional blogger"),", and maintainer of an open source list of software testing\nconferences (",(0,a.kt)("a",{parentName:"p",href:"http://testingconferences.org"},"link"),"). You can also find him online most places as ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/ckenst"},"@ckenst"),"."))}h.isMDXComponent=!0}}]);