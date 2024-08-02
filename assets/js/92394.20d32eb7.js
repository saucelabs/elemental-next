"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[92394],{92394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=n(74848),r=n(28453);const a={},d=void 0,l={id:"dynamic-pages/_ruby",title:"_ruby",description:"Example 1",source:"@site/tips/23-dynamic-pages/_ruby.mdx",sourceDirName:"23-dynamic-pages",slug:"/dynamic-pages/_ruby",permalink:"/tips/dynamic-pages/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/23-dynamic-pages/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Locator Strategy",permalink:"/tips/22-locator-strategy"},next:{title:"Dynamic Pages",permalink:"/tips/23-dynamic-pages"}},s={},o=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(t.p,{children:["Let's use from ",(0,i.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," which load content dynamically (",(0,i.jsx)(t.a,{href:"http://the-internet.herokuapp.com/dynamic_loading",children:"link"}),"). On it there is a ",(0,i.jsx)(t.code,{children:"Start"})," button that when clicked will trigger a loading bar to appear for 5 seconds. After that time it will disappear and a new element with the text ",(0,i.jsx)(t.code,{children:"'Hello World!'"})," will appear."]}),"\n",(0,i.jsxs)(t.p,{children:["We'll start by requiring our dependent libraries (",(0,i.jsx)(t.code,{children:"selenium-webriver"})," to drive the browser and ",(0,i.jsx)(t.code,{children:"rspec/expectations"})," & ",(0,i.jsx)(t.code,{children:"RSpec::Matchers"})," to perform our assertions) and wiring up some ",(0,i.jsx)(t.code,{children:"setup"}),", ",(0,i.jsx)(t.code,{children:"teardown"}),", and ",(0,i.jsx)(t.code,{children:"run"})," methods to handle our test configuration."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"# filename: dynamic_loading.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now we can create our first test. In it, we'll visit the page, click the start button, wait for the finish text to appear, and assert that it appeared."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'\n  @driver.find_element(css: '#start button').click\n  Selenium::WebDriver::Wait.new(timeout: 6).until { @driver.find_element(id: 'finish').displayed? }\n  expect(@driver.find_element(id: 'finish').displayed?).to eql true\nend\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the code above we are using an explicit wait with a timeout of ",(0,i.jsx)(t.code,{children:"6"})," seconds (e.g. ",(0,i.jsx)(t.code,{children:"Selenium::WebDriver::Wait.new(timeout: 6).until"}),"), looking for the element with the finish text (e.g., ",(0,i.jsx)(t.code,{children:"@driver.find_element(id: 'finish')"}),", and seeing if it's displayed (e.g., ",(0,i.jsx)(t.code,{children:".displayed?"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["If we set the timeout too low (e.g. ",(0,i.jsx)(t.code,{children:"timeout: 2"}),") Selenium won't wait long enough for the loading bar to finish, which will trigger the timeout threshold and throw an exception (e.g. ",(0,i.jsx)(t.code,{children:"until': timed out after 2 seconds (Selenium::WebDriver::Error::TimeOutError)"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["And if we didn't use an explicit wait at all, the test would have errored because Selenium would have tried to check for the finish text before it displayed and return a ",(0,i.jsx)(t.code,{children:"NoSuchElement"})," exception (e.g., ",(0,i.jsx)(t.code,{children:'Unable to locate element: {"method":"css selector","selector":"#finish"} (Selenium::WebDriver::Error::NoSuchElementError)'}),")."]}),"\n",(0,i.jsx)(t.p,{children:"For applications that already have the target element on the page but have it hidden, this approach will work as well (which we can see by pointing our test at the other dynamic loading example)."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'\n  @driver.find_element(css: '#start button').click\n  Selenium::WebDriver::Wait.new(timeout: 6).until { @driver.find_element(id: 'finish').displayed? }\n  expect(@driver.find_element(id: 'finish').displayed?).to eql true\nend\n"})}),"\n",(0,i.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(t.p,{children:"Explicit waits are a useful tool to have in your toolbelt since they enable you to finely tune your tests and avoid static sleeps and arbitrary timeouts. But rather than litter your test code with the verbose Selenium incantation, it's best to pull this code out into a method that accepts a timeout argument and the action you want to wait for as a block."}),"\n",(0,i.jsx)(t.p,{children:"You can then clean up our test code and reuse this method whenever an explicit wait is needed."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"def wait_for(seconds = 6)\n  Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'\n  @driver.find_element(css: '#start button').click\n  wait_for { @driver.find_element(id: 'finish').displayed? }\n  expect(@driver.find_element(id: 'finish').displayed?).to eql true\nend\n"})}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["When you save the file and run it (e.g., ",(0,i.jsx)(t.code,{children:"ruby dynamic_loading.rb"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser"}),"\n",(0,i.jsx)(t.li,{children:"Visit the page"}),"\n",(0,i.jsx)(t.li,{children:"Click the Start button"}),"\n",(0,i.jsx)(t.li,{children:"Wait for the loading bar to disappear and display the finish text"}),"\n",(0,i.jsx)(t.li,{children:"Assert that the finish text element is displayed"}),"\n",(0,i.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"Hopefully this tip will help you build more efficient and resilient tests when faced with dynamic pages that are constructed in various ways."}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);