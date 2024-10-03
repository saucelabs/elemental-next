"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[72110,3736],{3736:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(74848),s=r(28453);const i={},o=void 0,a={id:"one-test-multiple-browsers/_ruby",title:"_ruby",description:"Example",source:"@site/tips/41-one-test-multiple-browsers/_ruby.mdx",sourceDirName:"41-one-test-multiple-browsers",slug:"/one-test-multiple-browsers/_ruby",permalink:"/tips/one-test-multiple-browsers/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/41-one-test-multiple-browsers/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Disabled Element",permalink:"/tips/40-disabled-element"},next:{title:"How to Run a Test on Multiple Browsers",permalink:"/tips/41-one-test-multiple-browsers"}},l={},d=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["To start, we include our dependent libraries (",(0,t.jsx)(n.code,{children:"'selenium-webdriver'"})," to drive the browser, and ",(0,t.jsx)(n.code,{children:"'rspec-expectations'"}),"\nto perform our assertion) and then wire up ",(0,t.jsx)(n.code,{children:"setup"})," and ",(0,t.jsx)(n.code,{children:"teardown"})," methods."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"setup"})," we are accepting two parameters -- ",(0,t.jsx)(n.code,{children:"browser_name"})," and ",(0,t.jsx)(n.code,{children:"browser_version"}),". We put these to use when\nspecifying the browser and operating system capabilities for Sauce Labs, which gets stored in the ",(0,t.jsx)(n.code,{children:"caps"})," variable.\nThis variable then gets passed in as part of the ",(0,t.jsx)(n.code,{children:"@driver"})," incantation."]}),"\n",(0,t.jsxs)(n.p,{children:["And in ",(0,t.jsx)(n.code,{children:"teardown"})," we destroy the browser session."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# filename: example.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\n\ndef setup(browser_name, browser_version)\n  caps = Selenium::WebDriver::Remote::Capabilities.send(browser_name.to_sym)\n  caps.platform = 'Windows XP'\n  caps.version = browser_version.to_s\n\n  @driver = Selenium::WebDriver.for(\n    :remote,\n    url: \"https://#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_API_KEY']}@ondemand.saucelabs.com/wd/hub\",\n    desired_capabilities: caps)\nend\n\ndef teardown\n  @driver.quit\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note the ",(0,t.jsx)(n.code,{children:"url:"})," in the ",(0,t.jsx)(n.code,{children:"@driver"})," section above. It is concatenated from environment variables that are set at run\ntime; like so."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"SAUCE_USERNAME='your sauce username' SAUCE_API_KEY='your sauce api key' ruby example.rb\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next we specify the browsers and versions we care about in a collection (e.g., a Hash), create a ",(0,t.jsx)(n.code,{children:"run"})," method, and\nwire it up to loop over the collection -- running ",(0,t.jsx)(n.code,{children:"setup"}),", test actions, and ",(0,t.jsx)(n.code,{children:"teardown"})," for each browser in the\ncollection."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"BROWSERS = { firefox: '27',\n             chrome: '32',\n             internet_explorer: '8' }\n\ndef run\n  BROWSERS.each_pair do |browser, browser_version|\n    setup(browser, browser_version)\n    yield\n    teardown\n  end\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once we have that, we wire up our test."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'https://the-internet.herokuapp.com'\n  expect(@driver.title).to eql('The Internet')\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"And when we run it, we should see three jobs appear in Sauce Labs."}),"\n",(0,t.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Load Firefox, load the page, assert the title is correct"}),"\n",(0,t.jsx)(n.li,{children:"Load Chrome, load the page, assert the title is correct"}),"\n",(0,t.jsx)(n.li,{children:"Load IE, load the page, assert the title is correct"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"Hopefully this tip has helped make multi-browser testing more approachable to you."}),"\n",(0,t.jsx)(n.p,{children:"Happy Testing!"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);