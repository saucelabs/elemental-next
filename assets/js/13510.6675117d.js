"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[13510],{13510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=r(74848),i=r(28453);const s={},a=void 0,l={id:"javascript-alerts/_ruby",title:"_ruby",description:"Example",source:"@site/tips/51-javascript-alerts/_ruby.mdx",sourceDirName:"51-javascript-alerts",slug:"/javascript-alerts/_ruby",permalink:"/tips/javascript-alerts/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/51-javascript-alerts/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1731433488e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_python",permalink:"/tips/javascript-alerts/_python"},next:{title:"How To Work With JavaScript Alerts",permalink:"/tips/51-javascript-alerts"}},c={},o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["Our example application is available ",(0,n.jsx)(t.a,{href:"http://the-internet.herokuapp.com/javascript_alerts",children:"here"})," on ",(0,n.jsx)(t.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"}),". It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click ",(0,n.jsx)(t.code,{children:"Ok"})," or ",(0,n.jsx)(t.code,{children:"Cancel"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["First, we'll include our requisite libraries (e.g., ",(0,n.jsx)(t.code,{children:"selenium-webdriver"})," to control the browser and ",(0,n.jsx)(t.code,{children:"rspec/expectations"})," and ",(0,n.jsx)(t.code,{children:"RSpec::Matchers"})," for our assertion) and wire up some simple ",(0,n.jsx)(t.code,{children:"setup"}),", ",(0,n.jsx)(t.code,{children:"teardown"}),", and ",(0,n.jsx)(t.code,{children:"run"})," methods."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"# filename: javascript_alerts.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now let's write our test."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/javascript_alerts'\n  @driver.find_elements(css: 'button')[1].click\n\n  popup = @driver.switch_to.alert\n  popup.accept\n\n  result = @driver.find_element(id: 'result').text\n  expect(result).to eql('You clicked: Ok')\nend\n"})}),"\n",(0,n.jsxs)(t.p,{children:["A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find all buttons on the page using ",(0,n.jsx)(t.code,{children:"find_elements"})," and click on the second one. Since ",(0,n.jsx)(t.code,{children:"find_elements"})," returns an Array of all found elements, we can assume that the first item can be selected using ",(0,n.jsx)(t.code,{children:"[0]"})," (since Arrays in Ruby start counting at ",(0,n.jsx)(t.code,{children:"0"}),"). So the second item would be ",(0,n.jsx)(t.code,{children:"[1]"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["After click the button to trigger the JavaScript Alert we use Selenium's ",(0,n.jsx)(t.code,{children:"switch_to.alert"})," method to focus on the JavaScript pop-up and use ",(0,n.jsx)(t.code,{children:".accept"})," to click ",(0,n.jsx)(t.code,{children:"Ok"}),". If we wanted to click ",(0,n.jsx)(t.code,{children:"Cancel"})," we would have used ",(0,n.jsx)(t.code,{children:".dismiss"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["After accepting the alert, our main browser window will automatically regain focus and the page will display the result that we chose. This text is what we use for our assertion, making sure that the words ",(0,n.jsx)(t.code,{children:"You clicked: Ok"})," are displayed on the page."]}),"\n",(0,n.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,n.jsxs)(t.p,{children:["If you save this file and run it (e.g., ",(0,n.jsx)(t.code,{children:"ruby javascript_alerts.rb"})," from the command-line) here is what will happen:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Open the browser"}),"\n",(0,n.jsx)(t.li,{children:"Load the page"}),"\n",(0,n.jsx)(t.li,{children:"Click the second button on the page"}),"\n",(0,n.jsx)(t.li,{children:"JavaScript Confirmation Alert appears"}),"\n",(0,n.jsx)(t.li,{children:"Accept the JavaScript Confirmation Alert"}),"\n",(0,n.jsx)(t.li,{children:"Assert that the result on the page is what we expect"}),"\n",(0,n.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(t.p,{children:["We've learned how to accept/dismiss Javascript alerts using Selenium Webdriver by locating the alert using Selenium's ",(0,n.jsx)(t.code,{children:"switchTo().alert()"}),". After accepting/dismissing the alert, our main browser window will automatically regain focus and the page will display the result."]}),"\n",(0,n.jsx)(t.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);