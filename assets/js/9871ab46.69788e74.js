"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[27939,11859],{11859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(74848),s=n(28453);const i={},d=void 0,o={id:"how-to-press-keyboard-keys/_ruby",title:"_ruby",description:"Example",source:"@site/tips/61-how-to-press-keyboard-keys/_ruby.mdx",sourceDirName:"61-how-to-press-keyboard-keys",slug:"/how-to-press-keyboard-keys/_ruby",permalink:"/tips/how-to-press-keyboard-keys/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/61-how-to-press-keyboard-keys/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1730289692e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_python",permalink:"/tips/how-to-press-keyboard-keys/_python"},next:{title:"How To Press Keyboard Keys",permalink:"/tips/61-keyboard-keys"}},a={},l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["First we'll set up our requisite libraries to drive the browser (e.g., ",(0,r.jsx)(t.code,{children:"selenium-webdriver"}),") and perform an assertion (e.g., ",(0,r.jsx)(t.code,{children:"rspec/expections"})," and ",(0,r.jsx)(t.code,{children:"RSpec::Matchers"}),"). After that, we'll create some simple ",(0,r.jsx)(t.code,{children:"setup"}),", ",(0,r.jsx)(t.code,{children:"teardown"}),", and ",(0,r.jsx)(t.code,{children:"run"})," methods."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"# filename: key_presses.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now we can write up our test."}),"\n",(0,r.jsxs)(t.p,{children:["Let's use an example from ",(0,r.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," that will display what key has been pressed (",(0,r.jsx)(t.a,{href:"http://the-internet.herokuapp.com/key_presses",children:"link"}),"). We'll use the result text that gets displayed to perform our assertion."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/key_presses'\n  @driver.find_element(id: 'target').send_keys :space\n  expect(@driver.find_element(id: 'result').text).to eql('You entered: SPACE')\nend\n"})}),"\n",(0,r.jsxs)(t.p,{children:["After visiting the page we find an element that's visible (e.g., the one that contains the example on the page ",(0,r.jsx)(t.code,{children:"(id: 'target')"}),") and send the space key to it (e.g., ",(0,r.jsx)(t.code,{children:".send_keys :space"}),"). Then we grab the resulting text (e.g., ",(0,r.jsx)(t.code,{children:"@driver.find_element(id: 'result').text)"}),") and assert that it says what we expect (e.g., ",(0,r.jsx)(t.code,{children:"'You entered: SPACE'"}),")."]}),"\n",(0,r.jsx)(t.p,{children:"Alternatively, we can also issue a key press without finding the element first."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/key_presses'\n  @driver.action.send_keys(:tab).perform\n  expect(@driver.find_element(id: 'result').text).to eql('You entered: TAB')\nend\n"})}),"\n",(0,r.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(t.p,{children:["If we save this and run it (e.g. ",(0,r.jsx)(t.code,{children:"ruby key_presses.rb"})," from the command-line) here is what will happen:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Open the browser"}),"\n",(0,r.jsx)(t.li,{children:"Visit the page"}),"\n",(0,r.jsx)(t.li,{children:"Find the element and send the space key to it"}),"\n",(0,r.jsx)(t.li,{children:"Find the result text on the page and check to that it's what we expect"}),"\n",(0,r.jsx)(t.li,{children:"Send the tab key to the element that's currently in focus"}),"\n",(0,r.jsx)(t.li,{children:"Find the result text on the page and check to that it's what we expect"}),"\n",(0,r.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. If you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use."}),"\n",(0,r.jsx)(t.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);