"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[75617],{75617:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var n=i(74848),t=i(28453);const s={},o=void 0,l={id:"chrome-driver/_ruby",title:"_ruby",description:"A Solution",source:"@site/tips/29-chrome-driver/_ruby.mdx",sourceDirName:"29-chrome-driver",slug:"/chrome-driver/_ruby",permalink:"/tips/chrome-driver/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/29-chrome-driver/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_python",permalink:"/tips/chrome-driver/_python"},next:{title:"ChromeDriver",permalink:"/tips/29-chrome-driver"}},d={},h=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://www.selenium.dev/documentation/webdriver/",children:"WebDriver"})," works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://chromedriver.chromium.org/downloads",children:"ChromeDriver"})," is Google Chrome's browser driver. In this specific use case is of using WebDriver with Chrome in testing locally."]}),"\n",(0,n.jsxs)(r.p,{children:["Let's step through an example using ChromeDriver (",(0,n.jsx)(r.a,{href:"https://chromedriver.chromium.org/downloads",children:"download here"}),")."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(r.p,{children:["Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,n.jsx)(r.a,{href:"http://chromedriver.storage.googleapis.com/index.html",children:"here"}),". Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Add it to the System PATH"}),"\n",(0,n.jsx)(r.li,{children:"Specify it in the Selenium setup"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["We'll start by pulling in our requisite libraries (e.g., ",(0,n.jsx)(r.code,{children:"selenium-webdriver"})," to driver the browser and ",(0,n.jsx)(r.code,{children:"rspec/expectations"})," & ",(0,n.jsx)(r.code,{children:"RSpec::Matchers"})," to perform an assertion) and wiring up some simple ",(0,n.jsx)(r.code,{children:"setup"}),", ",(0,n.jsx)(r.code,{children:"teardown"}),", and ",(0,n.jsx)(r.code,{children:"run"})," methods."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ruby",children:"# filename: chrome.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  Selenium::WebDriver::Chrome::Service.driver_path = \"C:\\\\tmp\\\\chromedriver.exe\"\n  @driver = Selenium::WebDriver.for :chrome\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Notice that in ",(0,n.jsx)(r.code,{children:"setup"})," we are telling Selenium where the ChromeDriver exectuable is with ",(0,n.jsx)(r.code,{children:"driver_path"})," before creating an instance of the browser."]}),"\n",(0,n.jsx)(r.p,{children:"Now we're ready to add a simple test."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ruby",children:"# filename: chrome.rb\n# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/'\n  expect(@driver.title).to eql 'The Internet'\nend\n"})}),"\n",(0,n.jsxs)(r.p,{children:["If we save this file and run it (e.g., ",(0,n.jsx)(r.code,{children:"ruby chrome.rb"}),") it will launch an instance of Chrome, visit the homepage of ",(0,n.jsx)(r.a,{href:"http://the-internet.herokuapp.com/",children:"the-internet"}),", and assert that the page title loaded."]}),"\n",(0,n.jsx)(r.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,n.jsxs)(r.p,{children:["When we save this file and run it (e.g., ",(0,n.jsx)(r.code,{children:"ruby chrome.rb"})," from the command-line) here is what will happen."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"ChromeDriver starts"}),"\n",(0,n.jsx)(r.li,{children:"Chrome opens"}),"\n",(0,n.jsx)(r.li,{children:"Test runs"}),"\n",(0,n.jsx)(r.li,{children:"Chrome closes"}),"\n",(0,n.jsx)(r.li,{children:"ChromeDriver stops"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(r.p,{children:["Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official ",(0,n.jsx)(r.a,{href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference",children:"Selenium Quick Reference page for Installing Browser Drivers"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}}}]);