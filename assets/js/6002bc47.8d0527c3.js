"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[65273,38668],{38668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(74848),r=n(28453);const o={},s=void 0,a={id:"opt-out-of-ab-tests/_ruby",title:"_ruby",description:"Example",source:"@site/tips/12-opt-out-of-ab-tests/_ruby.mdx",sourceDirName:"12-opt-out-of-ab-tests",slug:"/opt-out-of-ab-tests/_ruby",permalink:"/tips/opt-out-of-ab-tests/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/12-opt-out-of-ab-tests/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_python",permalink:"/tips/opt-out-of-ab-tests/_python"},next:{title:"Opt Out of AB Tests",permalink:"/tips/12-opt-out-of-ab-tests"}},d={},l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Our example page is from ",(0,i.jsx)(t.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"})," and can be seen ",(0,i.jsx)(t.a,{href:"http://the-internet.herokuapp.com/abtest",children:"here"}),". There are three different versions of the page that are available. On each page the heading text will vary:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Control: ",(0,i.jsx)(t.code,{children:"A/B Test Control"})]}),"\n",(0,i.jsxs)(t.li,{children:["Variation 1: ",(0,i.jsx)(t.code,{children:"A/B Test Variation 1"})]}),"\n",(0,i.jsxs)(t.li,{children:["Opt-out: ",(0,i.jsx)(t.code,{children:"No A/B Test"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Let's kick things off by loading our requisite libraries (e.g., ",(0,i.jsx)(t.code,{children:"selenium-webdriver"})," to control the browser and ",(0,i.jsx)(t.code,{children:"rspec/expectations"})," and it's matchers for our assertions) and adding some simple ",(0,i.jsx)(t.code,{children:"setup"}),", ",(0,i.jsx)(t.code,{children:"teardown"}),", and ",(0,i.jsx)(t.code,{children:"run"})," methods to handle our test configuration."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"# filename: split_test.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude ::RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now let's wire up our first test to step through loading the split testing page and verifying that the text changes as we forge an opt-out cookie."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/abtest'\n  heading_text = @driver.find_element(css: 'h3').text\n  expect(['A/B Test Variation 1', 'A/B Test Control'].include? heading_text).to eql true\n  @driver.manage.add_cookie(name: 'optimizelyOptOut', value: 'true')\n  @driver.navigate.refresh\n  heading_text = @driver.find_element(css: 'h3').text\n  expect(heading_text).to eql('No A/B Test')\nend\n"})}),"\n",(0,i.jsx)(t.p,{children:"After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it matches what we expect. After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again."}),"\n",(0,i.jsx)(t.p,{children:"We could also load the opt-out cookie before navigating to this page."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n  @driver.manage.add_cookie(name: 'optimizelyOptOut', value: 'true')\n  @driver.get 'http://the-internet.herokuapp.com/abtest'\n  expect(@driver.find_element(css: 'h3').text).to eql('No A/B Test')\nend\n"})}),"\n",(0,i.jsx)(t.p,{children:"Here we first navigate to the main page of the site and then add the opt-out cookie. After that, we navigate to the split test page and perform our checks. Alternatively, we could opt out without forging a cookie. Instead, we would need to append an opt out request to the URL."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true'\n  @driver.switch_to.alert.dismiss\n  expect(@driver.find_element(css: 'h3').text).to eql('No A/B Test')\nend\n"})}),"\n",(0,i.jsxs)(t.p,{children:["By appending ",(0,i.jsx)(t.code,{children:"?optimizely_opt_out=true"})," we achieve the same outcome as before. Keep in mind that this approach triggers a JavaScript alert, so we have to switch to and dismiss it (e.g., ",(0,i.jsx)(t.code,{children:"@driver.switch_to.alert.dismiss"}),") before performing our check."]}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["If you save this file and run it (e.g., ",(0,i.jsx)(t.code,{children:"ruby split_test.rb"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser"}),"\n",(0,i.jsx)(t.li,{children:"Opt-out of the split tests (either by cookie or appended URL)"}),"\n",(0,i.jsx)(t.li,{children:"Visit the split testing page"}),"\n",(0,i.jsx)(t.li,{children:"Grab the header text"}),"\n",(0,i.jsx)(t.li,{children:"Confirm that the session is opted out of the split tests"}),"\n",(0,i.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"Hopefully this tip was helpful in guiding you in different methods of how to opt out of split tests."}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);