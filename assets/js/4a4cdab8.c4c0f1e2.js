"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),h=o,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Headless Chrome",id:"72-headless-chrome-ruby",contentUrl:"docs/headless-chrome/72-headless-chrome-ruby",sidebar_label:"Ruby",text:"If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in.",number:72,hide_table_of_contents:!0,publish_date:new Date("2017-09-25T00:00:00.000Z"),last_update:{date:new Date("2023-03-06T00:00:00.000Z")},tags:["headless","chrome"],level:2,category:["remote"],language:"ruby"},s="How To Run Your Tests Headlessly with Chrome",l={unversionedId:"headless-chrome/72-headless-chrome-ruby",id:"headless-chrome/72-headless-chrome-ruby",title:"Headless Chrome",description:"Intro",source:"@site/docs/72-headless-chrome/ruby.mdx",sourceDirName:"72-headless-chrome",slug:"/headless-chrome/72-headless-chrome-ruby",permalink:"/docs/headless-chrome/72-headless-chrome-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/72-headless-chrome/ruby.mdx",tags:[{label:"headless",permalink:"/docs/tags/headless"},{label:"chrome",permalink:"/docs/tags/chrome"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1678060800,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"Headless Chrome",id:"72-headless-chrome-ruby",contentUrl:"docs/headless-chrome/72-headless-chrome-ruby",sidebar_label:"Ruby",text:"If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in.",number:72,hide_table_of_contents:!0,publish_date:"2017-09-25T00:00:00.000Z",last_update:{date:"2023-03-06T00:00:00.000Z"},tags:["headless","chrome"],level:2,category:["remote"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/mobile-testing-pyramid/71-mobile-testing-pyramid"},next:{title:"Java",permalink:"/docs/open-new-window/73-open-new-window-java"}},i={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-run-your-tests-headlessly-with-chrome"},"How To Run Your Tests Headlessly with Chrome"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is a guest post from ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/ckenst"},"Chris Kenst"),".")),(0,o.kt)("p",null,"If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in. You could use a third party library like Xvfb or PhantomJS but those can be hard to install and aren't guaranteed to be supported in the long run (like PhantomJS)."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"Enter Headless Chrome (",(0,o.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md"},"link"),")"),(0,o.kt)("p",null,"Starting with Chrome 59 (Chrome 60 for Windows) we can pass Chrome a few configuration options to enable headless mode."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Before we start make sure you\u2019ve at least got Chrome 59 installed and are using the latest ",(0,o.kt)("a",{parentName:"p",href:"https://sites.google.com/a/chromium.org/chromedriver/"},"ChromeDriver")," version."),(0,o.kt)("p",null,"First let\u2019s create a simple Selenium script. Like all test scripts, first we will pull in the requisite libraries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: headless_chrome.rb\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n")),(0,o.kt)("p",null,"Now we can create our ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," method where we will pass Chrome our headless options as command line arguments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"def setup\n    options = Selenium::WebDriver::Chrome::Options.new\n    options.add_argument('--headless')\n    options.add_argument('--disable-gpu')\n    options.add_argument('--remote-debugging-port=9222')\n    @driver = Selenium::WebDriver.for :chrome, options: options\nend\n")),(0,o.kt)("p",null,"The first ",(0,o.kt)("inlineCode",{parentName:"p"},"add_argument")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"'-- headless'")," allows us to run Chrome in headless mode. The second argument is, ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"according to Google"),", temporarily required to work around a few known bugs. The third argument is optional but gives us the ability to debug our application in another browser if we need to (using localhost:9222)."),(0,o.kt)("p",null,"Now let's finish our test by creating our ",(0,o.kt)("inlineCode",{parentName:"p"},"teardown")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"def teardown\n    @driver.quit\nend\n\ndef run\n    setup\n    yield\n    teardown\nend\n\nrun do\n    @driver.get 'http://the-internet.herokuapp.com'\n    expect(@driver.title).to eql 'The Internet'\n    @driver.save_screenshot('headless.png')\nend\n")),(0,o.kt)("p",null,"Here we are loading a page, asserting on the title (to make sure we are in the right place), and taking a screenshot to make sure our headless setup is working correctly."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When we save our file and run it (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby headless_chrome.rb"),") here is what will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A headless chrome browser instance will open"),(0,o.kt)("li",{parentName:"ul"},"Test runs and captures a screenshot"),(0,o.kt)("li",{parentName:"ul"},"Browser closes")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Hopefully this tip has helped you get your tests running smoothly locally (or on your CI Server). This is the best option since it's easy to setup, officially supported by the browser vendor, and has a consistent rendering experience to what an end-user would experience in a full instance of Chrome."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Chris Kenst is a Software Quality advocate, Test Engineer, ",(0,o.kt)("a",{parentName:"p",href:"http://kenst.com"},"occasional blogger"),", and maintainer of an open source list of software testing\nconferences (",(0,o.kt)("a",{parentName:"p",href:"http://testingconferences.org"},"link"),"). You can also find him online most places as ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/ckenst"},"@ckenst"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chris Kenst profile picture",src:r(4193).Z+"#author-img",title:"a title",width:"333",height:"333"})))}d.isMDXComponent=!0},4193:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/chris-kenst-e4079537da75a7d2568585c5c5f3078c.png"}}]);