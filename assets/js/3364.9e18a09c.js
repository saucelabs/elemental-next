"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3364],{3364:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>l,frontMatter:()=>s,toc:()=>d});var i=t(5893),r=t(1151);const s={},a=void 0,d=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(n.p,{children:["Let's start by requiring our requisite libraries (e.g., ",(0,i.jsx)(n.code,{children:"selenium-webdriver"})," to drive the browser and ",(0,i.jsx)(n.code,{children:"rspec/expectations"})," & ",(0,i.jsx)(n.code,{children:"RSpec::Matchers"})," to handle our assertions) and implementing some helper methods (e.g., ",(0,i.jsx)(n.code,{children:"setup"}),", ",(0,i.jsx)(n.code,{children:"teardown"}),", and ",(0,i.jsx)(n.code,{children:"run"}),") to handle our test configuration."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"# filename: basic_auth.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now let's add our test code to the script."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/basic_auth'\n  page_message = @driver.find_element(css: '.example p').text\n  expect(page_message).to eql 'Congratulations! You must have the proper credentials.'\nend\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,i.jsx)(n.code,{children:"http://admin:admin@"}),"). Once it loads we grab text from the page to make sure we ended up in the right place."]}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."}),"\n",(0,i.jsx)(n.p,{children:"Here's what that script would look like."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"# filename: basic_auth_setup.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/basic_auth'\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/basic_auth'\n  page_message = @driver.find_element(css: '.example p').text\n  expect(page_message).to eql 'Congratulations! You must have the proper credentials.'\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of each type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).__"}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.p,{children:["When you save the first example and run it (e.g., ",(0,i.jsx)(n.code,{children:"ruby basic_auth.rb"}),"), here is what will happen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the browser"}),"\n",(0,i.jsx)(n.li,{children:"Visit the page using Basic Auth"}),"\n",(0,i.jsx)(n.li,{children:"Get the page text"}),"\n",(0,i.jsx)(n.li,{children:"Assert that the text is what we expect"}),"\n",(0,i.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["And when you save the second example and run it (e.g., ",(0,i.jsx)(n.code,{children:"ruby basic_auth_setup.rb"}),"), here is what will happen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the browser"}),"\n",(0,i.jsx)(n.li,{children:"Visit the page using Basic Auth in the setup"}),"\n",(0,i.jsx)(n.li,{children:"Navigate to the Basic Auth page (without providing credentials)"}),"\n",(0,i.jsx)(n.li,{children:"Get the page text"}),"\n",(0,i.jsx)(n.li,{children:"Assert that the text is what we expect"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it."}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);