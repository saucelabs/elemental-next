"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[91430,67058],{67058:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(74848),s=t(28453);const o={},i=void 0,l={id:"blacklist/_ruby",title:"_ruby",description:"Example",source:"@site/tips/66-blacklist/_ruby.mdx",sourceDirName:"66-blacklist",slug:"/blacklist/_ruby",permalink:"/tips/blacklist/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/66-blacklist/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1722239299e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Highlight Elements",permalink:"/tips/65-highlight-elements"},next:{title:"Blacklist",permalink:"/tips/66-blacklist"}},a={},c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.strong,{children:["NOTE: For a brief primer on proxy servers check out ",(0,n.jsx)(r.a,{href:"/tips/64-limit-bandwidth",children:"tip 64"}),"."]})}),"\n",(0,n.jsxs)(r.p,{children:["To get started we'll need to download a copy of Browsermob Proxy (",(0,n.jsx)(r.a,{href:"http://bmp.lightbody.net/",children:"link"}),") and write our script. In it, we'll pull in our requisite libraries (e.g., ",(0,n.jsx)(r.code,{children:"browsermob/proxy"})," to control the proxy server, ",(0,n.jsx)(r.code,{children:"selenium-webdriver"})," to drive the browser, and ",(0,n.jsx)(r.code,{children:"rspec/expectations"})," and it's matchers to perform assertions)."]}),"\n",(0,n.jsxs)(r.p,{children:["After that, we'll configure the proxy server and wire up some simple ",(0,n.jsx)(r.code,{children:"setup"}),", ",(0,n.jsx)(r.code,{children:"teardown"}),", and ",(0,n.jsx)(r.code,{children:"run"})," methods. As part of ",(0,n.jsx)(r.code,{children:"setup"})," we'll want to configure the blacklist. To do that we'll add a regular expression to find the resource we want to block and the status code we'd like the resource to be changed to (e.g., blocking a resource from loading with a ",(0,n.jsx)(r.code,{children:"200"})," response code and having it return a ",(0,n.jsx)(r.code,{children:"404"})," instead)."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ruby",children:"# filename: blacklist.rb\n\nrequire 'browsermob/proxy'\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef configure_proxy\n  server = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.0-beta-9/bin/browsermob-proxy')\n  server.start\n  @proxy = server.create_proxy\n  profile = Selenium::WebDriver::Firefox::Profile.new\n  profile.proxy = @proxy.selenium_proxy\n  return profile\nend\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox, profile: configure_proxy\n  @proxy.blacklist('http:\\/\\/the-internet.herokuapp.com\\/slow_external', 404)\nend\n\ndef teardown\n  @driver.quit\n  @proxy.close\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Now we're ready to wire up our test. Let's use an example from ",(0,n.jsx)(r.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," that has a slow loading resource. It has a rogue ",(0,n.jsx)(r.code,{children:"GET"})," request that takes 30 seconds to load. You can see it ",(0,n.jsx)(r.a,{href:"http://the-internet.herokuapp.com/slow",children:"here"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ruby",children:"run do\n  @proxy.new_har\n  @driver.get 'http://the-internet.herokuapp.com/slow'\n  entry = @proxy.har.entries.find { |e| e.request.url.include? 'slow_external' }\n  expect(entry).not_to be_nil\n  expect(entry.response.status).to eq(404)\nend\n"})}),"\n",(0,n.jsxs)(r.p,{children:["We start the test by creating a new HTTP Archive (HAR) for tracking the page requests. We then load the example page, find the entry for the slow loading resource from the HAR, and assert that the response code for it is ",(0,n.jsx)(r.code,{children:"404"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,n.jsxs)(r.p,{children:["If you save this file and run it (e.g., ",(0,n.jsx)(r.code,{children:"ruby blacklist.rb"})," from the command-line) here is what will happen:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Proxy server starts"}),"\n",(0,n.jsx)(r.li,{children:"Proxy server session created"}),"\n",(0,n.jsx)(r.li,{children:"Browser opens"}),"\n",(0,n.jsx)(r.li,{children:"Visit the page"}),"\n",(0,n.jsx)(r.li,{children:"Find the entry we want from the HTTP Archive"}),"\n",(0,n.jsx)(r.li,{children:"Check that the HTTP status code for the entry has the correct status code from the blacklist"}),"\n",(0,n.jsx)(r.li,{children:"Browser closes"}),"\n",(0,n.jsx)(r.li,{children:"Proxy session closes"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(r.p,{children:"Hopefully this helps you with blocking external resources that you don't want to load during testing."}),"\n",(0,n.jsx)(r.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);