"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[77473,43601],{43601:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(74848),r=s(28453);const i={},l=void 0,o={id:"headless/_ruby",title:"_ruby",description:"Example",source:"@site/tips/38-headless/_ruby.mdx",sourceDirName:"38-headless",slug:"/headless/_ruby",permalink:"/tips/headless/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/38-headless/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Selenium Resources",permalink:"/tips/36-available-resources"},next:{title:"Headless Xvfb",permalink:"/tips/38-headless"}},a={},d=[{value:"Example",id:"example",level:2},{value:"Option 1",id:"option-1",level:3},{value:"Option 2",id:"option-2",level:3},{value:"Option 3",id:"option-3",level:3},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Choosing The Best Option",id:"choosing-the-best-option",level:2},{value:"Running Concurrent Builds",id:"running-concurrent-builds",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Before we can use Xvfb, we need to install it (along with the browser we want if it's not already loaded)."}),"\n",(0,t.jsxs)(n.p,{children:["In Linux we need to find the relevant package names for the package manager and install them\n(e.g., ",(0,t.jsx)(n.code,{children:"apt-get install xvfb firefox"})," for Debian based systems like Ubuntu, ",(0,t.jsx)(n.code,{children:"yum install Xvfb firefox"})," for\nRedHat based systems, etc.)."]}),"\n",(0,t.jsx)(n.p,{children:"Now let's create a simple Selenium script."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# filename: headless.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'https://the-internet.herokuapp.com'\n  expect(@driver.title).to eql 'The Internet'\n  @driver.save_screenshot 'headless.png'\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here we are loading a page, asserting the title (to make sure we're in the right place), and grabbing a screenshot\n(so we can make sure our Xvfb setup is working). The screenshot will render in the directory alongside the test script."}),"\n",(0,t.jsx)(n.p,{children:"Next we need to setup Xvfb, and we have a few options."}),"\n",(0,t.jsx)(n.h3,{id:"option-1",children:"Option 1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Start Xvfb on a specific display port and background the process"}),"\n",(0,t.jsx)(n.li,{children:"Tell the terminal session to use the display port"}),"\n",(0,t.jsx)(n.li,{children:"Run the test"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Xvfb :99 &\nexport DISPLAY=:99\nruby headless.rb\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE: This approach will keep Xvfb running in the background until the process is killed."})}),"\n",(0,t.jsx)(n.h3,{id:"option-2",children:"Option 2"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"xvfb-run"})," to launch the tests (no display port declaration necessary)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"xvfb-run ruby headless.rb\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE: This approach will start and stop Xvfb for you."})}),"\n",(0,t.jsx)(n.h3,{id:"option-3",children:"Option 3"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.a,{href:"https://github.com/leonid-shevtsov/headless",children:"the headless gem"})]}),"\n",(0,t.jsxs)(n.li,{children:["Update the test ",(0,t.jsx)(n.code,{children:"setup"})," and ",(0,t.jsx)(n.code,{children:"teardown"})," to use it"]}),"\n",(0,t.jsx)(n.li,{children:"Run the test"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# filename: headless2.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\nrequire 'headless'\n\ndef setup\n  @headless = Headless.new\n  @headless.start\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\n  @headless.destroy\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'https://the-internet.herokuapp.com'\n  expect(@driver.title).to eql 'The Internet'\n  @driver.save_screenshot 'headless2.png'\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"setup"})," we are creating an instance of the headless library and issuing a ",(0,t.jsx)(n.code,{children:".start"})," command (which starts Xvfb).\nIn ",(0,t.jsx)(n.code,{children:"teardown"})," we stop Xvfb by with the ",(0,t.jsx)(n.code,{children:".destroy"})," after closing the browser with ",(0,t.jsx)(n.code,{children:"@driver.quit"}),". The only thing\nthat changed in our ",(0,t.jsx)(n.code,{children:"run"})," action is the name of the screenshot (from ",(0,t.jsx)(n.code,{children:"headless.png"})," to ",(0,t.jsx)(n.code,{children:"headless2.png"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["With the library in place, running the test (e.g., ",(0,t.jsx)(n.code,{children:"ruby headless2.rb"}),") will automatically run it headless --\nstarting and stopping Xvfb for us."]}),"\n",(0,t.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,t.jsxs)(n.p,{children:["When we save either file and run it (e.g., ",(0,t.jsx)(n.code,{children:"ruby headless.rb"})," or ",(0,t.jsx)(n.code,{children:"ruby headless2.rb"})," from the command-line) here is\nwhat will happen:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Xvfb starts"}),"\n",(0,t.jsx)(n.li,{children:"Browser opens in a virtual framebuffer"}),"\n",(0,t.jsx)(n.li,{children:"Test runs and captures a screenshot from the browser"}),"\n",(0,t.jsx)(n.li,{children:"Browser closes"}),"\n",(0,t.jsx)(n.li,{children:"Xvfb terminates (unless using Option 1)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"choosing-the-best-option",children:"Choosing The Best Option"}),"\n",(0,t.jsx)(n.p,{children:"The headless gem is a handy resource. But if you use it, you'll want to make its use configurable, so it does not load\nevery time. This will be helpful when running your tests in non-Linux environments."}),"\n",(0,t.jsx)(n.p,{children:"If you're just looking to try out headless testing, and you're unsure of how much time you want to invest, then using\nthe Xvfb application (e.g., options 1 or 2) is a sound path since you won't need to update your test code to use it."}),"\n",(0,t.jsx)(n.h2,{id:"running-concurrent-builds",children:"Running Concurrent Builds"}),"\n",(0,t.jsx)(n.p,{children:"If you're running tests headless across different builds at the same time (e.g., in parallel) on your CI server,\nthen jobs will start to break unexpectedly. This is because of a display port collision with Xvfb (e.g., two or more\nXvfb sessions trying to run on the same display port at the same time)."}),"\n",(0,t.jsxs)(n.p,{children:["When this happens you can issue a runtime flag when launching ",(0,t.jsx)(n.code,{children:"xvfb-run"})," that will keep trying display ports\nuntil it finds a free one (e.g., ",(0,t.jsx)(n.code,{children:"xvfb-run -a"}),"). You can read more about it in the man page ",(0,t.jsx)(n.a,{href:"http://manpages.ubuntu.com/manpages/lucid/man1/xvfb-run.1.html",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Alternatively you can use the CI build number as your Xvfb display port. This way each display port is unique.\nEach CI server is different, but you should have access to this value somehow. For example, this is made available\nthrough an environment variable in Jenkins."}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.p,{children:["Hopefully this tip has helped you get your tests running smoothly on your CI Server. For more information on\ntaking screenshots with Selenium, check out\n",(0,t.jsx)(n.a,{href:"https://elementalselenium.com/docs/take-screenshot-on-failure/16-take-screenshot-on-failure",children:"tip 16"}),". And to learn\nhow to run a different browser locally (e.g., Chrome), check out\n",(0,t.jsx)(n.a,{href:"https://elementalselenium.com/docs/chrome-driver/29-chrome-driver",children:"tip 29"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,t.jsxs)(n.p,{children:["Thanks to Amelia Downs and ",(0,t.jsx)(n.a,{href:"https://twitter.com/bbbco",children:"Brian Goad"})," for contributing these solutions!"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);