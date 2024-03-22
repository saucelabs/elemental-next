"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[1306],{41306:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>a,frontMatter:()=>i,toc:()=>l});var r=t(74848),s=t(28453);const i={},d=void 0,l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["First we'll set up our requisite libraries to drive the browser (e.g., ",(0,r.jsx)(n.code,{children:"selenium-webdriver"}),") and perform an assertion (e.g., ",(0,r.jsx)(n.code,{children:"rspec/expections"})," and ",(0,r.jsx)(n.code,{children:"RSpec::Matchers"}),"). After that, we'll create some simple ",(0,r.jsx)(n.code,{children:"setup"}),", ",(0,r.jsx)(n.code,{children:"teardown"}),", and ",(0,r.jsx)(n.code,{children:"run"})," methods."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"# filename: key_presses.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now we can write up our test."}),"\n",(0,r.jsxs)(n.p,{children:["Let's use an example from ",(0,r.jsx)(n.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," that will display what key has been pressed (",(0,r.jsx)(n.a,{href:"http://the-internet.herokuapp.com/key_presses",children:"link"}),"). We'll use the result text that gets displayed to perform our assertion."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/key_presses'\n  @driver.find_element(id: 'target').send_keys :space\n  expect(@driver.find_element(id: 'result').text).to eql('You entered: SPACE')\nend\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After visiting the page we find an element that's visible (e.g., the one that contains the example on the page ",(0,r.jsx)(n.code,{children:"(id: 'target')"}),") and send the space key to it (e.g., ",(0,r.jsx)(n.code,{children:".send_keys :space"}),"). Then we grab the resulting text (e.g., ",(0,r.jsx)(n.code,{children:"@driver.find_element(id: 'result').text)"}),") and assert that it says what we expect (e.g., ",(0,r.jsx)(n.code,{children:"'You entered: SPACE'"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, we can also issue a key press without finding the element first."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/key_presses'\n  @driver.action.send_keys(:tab).perform\n  expect(@driver.find_element(id: 'result').text).to eql('You entered: TAB')\nend\n"})}),"\n",(0,r.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(n.p,{children:["If we save this and run it (e.g. ",(0,r.jsx)(n.code,{children:"ruby key_presses.rb"})," from the command-line) here is what will happen:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open the browser"}),"\n",(0,r.jsx)(n.li,{children:"Visit the page"}),"\n",(0,r.jsx)(n.li,{children:"Find the element and send the space key to it"}),"\n",(0,r.jsx)(n.li,{children:"Find the result text on the page and check to that it's what we expect"}),"\n",(0,r.jsx)(n.li,{children:"Send the tab key to the element that's currently in focus"}),"\n",(0,r.jsx)(n.li,{children:"Find the result text on the page and check to that it's what we expect"}),"\n",(0,r.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. If you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use."}),"\n",(0,r.jsx)(n.p,{children:"Happy Testing!"})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);