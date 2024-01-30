"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7551],{7551:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>t,toc:()=>a});var s=r(5893),i=r(1151);const t={},o=void 0,a=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["To start, we include our dependent libraries (",(0,s.jsx)(n.code,{children:"'selenium-webdriver'"})," to drive the browser, and ",(0,s.jsx)(n.code,{children:"'rspec-expectations'"}),"\nto perform our assertion) and then wire up ",(0,s.jsx)(n.code,{children:"setup"})," and ",(0,s.jsx)(n.code,{children:"teardown"})," methods."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"setup"})," we are accepting two parameters -- ",(0,s.jsx)(n.code,{children:"browser_name"})," and ",(0,s.jsx)(n.code,{children:"browser_version"}),". We put these to use when\nspecifying the browser and operating system capabilities for Sauce Labs, which gets stored in the ",(0,s.jsx)(n.code,{children:"caps"})," variable.\nThis variable then gets passed in as part of the ",(0,s.jsx)(n.code,{children:"@driver"})," incantation."]}),"\n",(0,s.jsxs)(n.p,{children:["And in ",(0,s.jsx)(n.code,{children:"teardown"})," we destroy the browser session."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"# filename: example.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\n\ndef setup(browser_name, browser_version)\n  caps = Selenium::WebDriver::Remote::Capabilities.send(browser_name.to_sym)\n  caps.platform = 'Windows XP'\n  caps.version = browser_version.to_s\n\n  @driver = Selenium::WebDriver.for(\n    :remote,\n    url: \"https://#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_API_KEY']}@ondemand.saucelabs.com/wd/hub\",\n    desired_capabilities: caps)\nend\n\ndef teardown\n  @driver.quit\nend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note the ",(0,s.jsx)(n.code,{children:"url:"})," in the ",(0,s.jsx)(n.code,{children:"@driver"})," section above. It is concatenated from environment variables that are set at run\ntime; like so."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"SAUCE_USERNAME='your sauce username' SAUCE_API_KEY='your sauce api key' ruby example.rb\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next we specify the browsers and versions we care about in a collection (e.g., a Hash), create a ",(0,s.jsx)(n.code,{children:"run"})," method, and\nwire it up to loop over the collection -- running ",(0,s.jsx)(n.code,{children:"setup"}),", test actions, and ",(0,s.jsx)(n.code,{children:"teardown"})," for each browser in the\ncollection."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"BROWSERS = { firefox: '27',\n             chrome: '32',\n             internet_explorer: '8' }\n\ndef run\n  BROWSERS.each_pair do |browser, browser_version|\n    setup(browser, browser_version)\n    yield\n    teardown\n  end\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once we have that, we wire up our test."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'https://the-internet.herokuapp.com'\n  expect(@driver.title).to eql('The Internet')\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"And when we run it, we should see three jobs appear in Sauce Labs."}),"\n",(0,s.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Load Firefox, load the page, assert the title is correct"}),"\n",(0,s.jsx)(n.li,{children:"Load Chrome, load the page, assert the title is correct"}),"\n",(0,s.jsx)(n.li,{children:"Load IE, load the page, assert the title is correct"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Hopefully this tip has helped make multi-browser testing more approachable to you."}),"\n",(0,s.jsx)(n.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);