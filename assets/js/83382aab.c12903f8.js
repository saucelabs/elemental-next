"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[49827,33864],{33864:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=r(74848),t=r(28453);const i={},o=void 0,a={id:"headless-chrome/_ruby",title:"_ruby",description:"Example",source:"@site/tips/72-headless-chrome/_ruby.mdx",sourceDirName:"72-headless-chrome",slug:"/headless-chrome/_ruby",permalink:"/tips/headless-chrome/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/72-headless-chrome/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Mobile Testing Pyramid",permalink:"/tips/71-mobile-testing-pyramid"},next:{title:"Headlessly with Chrome",permalink:"/tips/72-headless-chrome"}},l={},d=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Before we start make sure you\u2019ve at least got Chrome 59 installed and are using the latest ",(0,s.jsx)(n.a,{href:"https://sites.google.com/a/chromium.org/chromedriver/",children:"ChromeDriver"})," version."]}),"\n",(0,s.jsx)(n.p,{children:"First let\u2019s create a simple Selenium script. Like all test scripts, first we will pull in the requisite libraries:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"# filename: headless_chrome.rb\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now we can create our ",(0,s.jsx)(n.code,{children:"setup"})," method where we will pass Chrome our headless options as command line arguments."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"def setup\n    options = Selenium::WebDriver::Chrome::Options.new\n    options.add_argument('--headless')\n    options.add_argument('--disable-gpu')\n    options.add_argument('--remote-debugging-port=9222')\n    @driver = Selenium::WebDriver.for :chrome, options: options\nend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The first ",(0,s.jsx)(n.code,{children:"add_argument"})," of ",(0,s.jsx)(n.code,{children:"'-- headless'"})," allows us to run Chrome in headless mode. The second argument is, ",(0,s.jsx)(n.a,{href:"https://developers.google.com/web/updates/2017/04/headless-chrome",children:"according to Google"}),", temporarily required to work around a few known bugs. The third argument is optional but gives us the ability to debug our application in another browser if we need to (using localhost:9222)."]}),"\n",(0,s.jsxs)(n.p,{children:["Now let's finish our test by creating our ",(0,s.jsx)(n.code,{children:"teardown"})," and ",(0,s.jsx)(n.code,{children:"run"})," methods."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"def teardown\n    @driver.quit\nend\n\ndef run\n    setup\n    yield\n    teardown\nend\n\nrun do\n    @driver.get 'http://the-internet.herokuapp.com'\n    expect(@driver.title).to eql 'The Internet'\n    @driver.save_screenshot('headless.png')\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here we are loading a page, asserting on the title (to make sure we are in the right place), and taking a screenshot to make sure our headless setup is working correctly."}),"\n",(0,s.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(n.p,{children:["When we save our file and run it (e.g. ",(0,s.jsx)(n.code,{children:"ruby headless_chrome.rb"}),") here is what will happen:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A headless chrome browser instance will open"}),"\n",(0,s.jsx)(n.li,{children:"Test runs and captures a screenshot"}),"\n",(0,s.jsx)(n.li,{children:"Browser closes"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Hopefully this tip has helped you get your tests running smoothly locally (or on your CI Server). This is the best option since it's easy to setup, officially supported by the browser vendor, and has a consistent rendering experience to what an end-user would experience in a full instance of Chrome."}),"\n",(0,s.jsx)(n.p,{children:"Happy Testing!"}),"\n",(0,s.jsx)(n.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,s.jsxs)(n.p,{children:["Chris Kenst is a Software Quality advocate, Test Engineer, ",(0,s.jsx)(n.a,{href:"http://kenst.com",children:"occasional blogger"}),", and maintainer of an open source list of software testing\nconferences (",(0,s.jsx)(n.a,{href:"http://testingconferences.org",children:"link"}),"). You can also find him online most places as ",(0,s.jsx)(n.a,{href:"https://twitter.com/ckenst",children:"@ckenst"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Chris Kenst profile picture",src:r(57898).A+"#author-img",title:"a title",width:"333",height:"333"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},57898:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/chris-kenst-e4079537da75a7d2568585c5c5f3078c.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);