"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[82641],{82641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>h,toc:()=>a});var s=n(74848),r=n(28453);const c={},i=void 0,h={id:"how-to-test-checkboxes/_ruby",title:"_ruby",description:"Example",source:"@site/tips/45-how-to-test-checkboxes/_ruby.mdx",sourceDirName:"45-how-to-test-checkboxes",slug:"/how-to-test-checkboxes/_ruby",permalink:"/tips/how-to-test-checkboxes/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/45-how-to-test-checkboxes/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1723147274e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_python",permalink:"/tips/how-to-test-checkboxes/_python"},next:{title:"How To Test Checkboxes",permalink:"/tips/45-checkboxes"}},o={},a=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["For reference, here is the markup from ",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/checkboxes",children:"the page we will be testing against"})," (an example from ",(0,s.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"}),")."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<form>\n  <input type="checkbox"> unchecked<br>\n  <input type="checkbox" checked=""> checked\n</form>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We kick things off by requiring our dependent libraries (e.g., ",(0,s.jsx)(t.code,{children:"selenium-webdriver"})," to drive the browser, and ",(0,s.jsx)(t.code,{children:"rspec/expectations"})," & ",(0,s.jsx)(t.code,{children:"RSpec::Matchers"})," to handle our assertions) and wire up some simple ",(0,s.jsx)(t.code,{children:"setup"}),", ",(0,s.jsx)(t.code,{children:"teardown"}),", and ",(0,s.jsx)(t.code,{children:"run"})," methods to abstract our test configuration."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# filename: checkboxes.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,s.jsx)(t.p,{children:"Before we write any tests, let's walk through both checkbox approaches to see what Selenium gives us."}),"\n",(0,s.jsx)(t.p,{children:"To do that we'll want to grab all checkboxes on the page, and iterate through them. Once using an attribute lookup, and again asking if the element is selected -- each time outputting the return value we get from Selenium."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/checkboxes'\n  checkboxes = @driver.find_elements(css: 'input[type=\"checkbox\"]')\n\n  puts \"With .attribute('checked')\"\n  checkboxes.each { |checkbox| puts checkbox.attribute('checked').inspect }\n\n  puts \"\\nWith .selected?\"\n  checkboxes.each { |checkbox| puts checkbox.selected?.inspect }\nend\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When we save our file and run it (e.g., ",(0,s.jsx)(t.code,{children:"ruby checkboxes.rb"})," from the command-line), here is the output we'll see."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"With .attribute('checked')\nnil\n\"true\"\n\nWith .selected?\nfalse\ntrue\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With the attribute lookup, depending on the state of the checkbox, we receive either a ",(0,s.jsx)(t.code,{children:"nil"})," or a string with the value ",(0,s.jsx)(t.code,{children:'"true"'}),". Whereas with ",(0,s.jsx)(t.code,{children:".selected?"})," we get a boolean (",(0,s.jsx)(t.code,{children:"true"})," or ",(0,s.jsx)(t.code,{children:"false"}),") response."]}),"\n",(0,s.jsx)(t.p,{children:"Let's see what these approaches look like when put to use in a test."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/checkboxes'\n  checkboxes = @driver.find_elements(css: 'input[type=\"checkbox\"]')\n  expect(checkboxes.last.attribute('checked')).not_to be_nil\n  # alternatively\n  expect(checkboxes.last.attribute('checked')).to eql(\"true\")\nend\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With an attribute lookup, the simplest thing to do is to assert that the return value is not ",(0,s.jsx)(t.code,{children:"nil"}),". Alternatively we could have checked for the value ",(0,s.jsx)(t.code,{children:'"true"'}),". Let's see what the other approach looks like."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/checkboxes'\n  checkboxes = @driver.find_elements(css: 'input[type=\"checkbox\"]')\n  expect(checkboxes.last.selected?).to eql true\nend\n"})}),"\n",(0,s.jsx)(t.p,{children:"When checking to see if a checkbox has been selected, it's a straightforward matter of checking for a boolean value."}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["When you save and run the file (e.g., ",(0,s.jsx)(t.code,{children:"ruby checkboxes.rb"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open the browser"}),"\n",(0,s.jsx)(t.li,{children:"Visit the page"}),"\n",(0,s.jsx)(t.li,{children:"Find all checkboxes on the page"}),"\n",(0,s.jsx)(t.li,{children:"Assert that the last checkbox (the one that is supposed to be checked on initial page load) is checked"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(t.p,{children:["Attribute lookups are generally meant for pulling information out of the page for review, however, in this case they lend themselves to seeing if a checkbox is checked. There is a method which was built for this use case that is more readable and has a predictable set of return values. ",(0,s.jsx)(t.code,{children:"isSelected"})," should be the thing you reach for, knowing that an attribute lookup is there as a solid backup if you find you need it."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);