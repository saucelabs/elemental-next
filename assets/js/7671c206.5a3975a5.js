"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[40889,26066],{26066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(74848),i=t(28453);const r={},a=void 0,c={id:"how-to-access-basic-auth/_ruby",title:"_ruby",description:"Example 1",source:"@site/tips/13-how-to-access-basic-auth/_ruby.mdx",sourceDirName:"13-how-to-access-basic-auth",slug:"/how-to-access-basic-auth/_ruby",permalink:"/tips/how-to-access-basic-auth/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/13-how-to-access-basic-auth/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_python",permalink:"/tips/how-to-access-basic-auth/_python"},next:{title:"Work With Basic Auth",permalink:"/tips/13-work-with-basic-auth"}},o={},l=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["Let's start by requiring our requisite libraries (e.g., ",(0,s.jsx)(n.code,{children:"selenium-webdriver"})," to drive the browser and ",(0,s.jsx)(n.code,{children:"rspec/expectations"})," & ",(0,s.jsx)(n.code,{children:"RSpec::Matchers"})," to handle our assertions) and implementing some helper methods (e.g., ",(0,s.jsx)(n.code,{children:"setup"}),", ",(0,s.jsx)(n.code,{children:"teardown"}),", and ",(0,s.jsx)(n.code,{children:"run"}),") to handle our test configuration."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"# filename: basic_auth.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now let's add our test code to the script."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/basic_auth'\n  page_message = @driver.find_element(css: '.example p').text\n  expect(page_message).to eql 'Congratulations! You must have the proper credentials.'\nend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,s.jsx)(n.code,{children:"http://admin:admin@"}),"). Once it loads we grab text from the page to make sure we ended up in the right place."]}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."}),"\n",(0,s.jsx)(n.p,{children:"Here's what that script would look like."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"# filename: basic_auth_setup.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/basic_auth'\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/basic_auth'\n  page_message = @driver.find_element(css: '.example p').text\n  expect(page_message).to eql 'Congratulations! You must have the proper credentials.'\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of each type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).__"}),"\n",(0,s.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(n.p,{children:["When you save the first example and run it (e.g., ",(0,s.jsx)(n.code,{children:"ruby basic_auth.rb"}),"), here is what will happen:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open the browser"}),"\n",(0,s.jsx)(n.li,{children:"Visit the page using Basic Auth"}),"\n",(0,s.jsx)(n.li,{children:"Get the page text"}),"\n",(0,s.jsx)(n.li,{children:"Assert that the text is what we expect"}),"\n",(0,s.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["And when you save the second example and run it (e.g., ",(0,s.jsx)(n.code,{children:"ruby basic_auth_setup.rb"}),"), here is what will happen:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open the browser"}),"\n",(0,s.jsx)(n.li,{children:"Visit the page using Basic Auth in the setup"}),"\n",(0,s.jsx)(n.li,{children:"Navigate to the Basic Auth page (without providing credentials)"}),"\n",(0,s.jsx)(n.li,{children:"Get the page text"}),"\n",(0,s.jsx)(n.li,{children:"Assert that the text is what we expect"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it."}),"\n",(0,s.jsx)(n.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);