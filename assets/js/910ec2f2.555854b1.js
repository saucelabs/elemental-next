"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[78951,76821],{76821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(74848),s=t(28453);const i={},o=void 0,a={id:"take-screenshot-on-failure/_ruby",title:"_ruby",description:"Example",source:"@site/tips/16-take-screenshot-on-failure/_ruby.mdx",sourceDirName:"16-take-screenshot-on-failure",slug:"/take-screenshot-on-failure/_ruby",permalink:"/tips/take-screenshot-on-failure/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/16-take-screenshot-on-failure/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172716874e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_python",permalink:"/tips/take-screenshot-on-failure/_python"},next:{title:"Take Screenshot on Failure",permalink:"/tips/16-take-screenshot-on-failure"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Let's start by including our requisite libraries (",(0,r.jsx)(n.code,{children:"selenium-webdriver"})," to drive the browser and ",(0,r.jsx)(n.code,{children:"rspec/expectations"})," & ",(0,r.jsx)(n.code,{children:"RSpec::Matchers"})," for our assertion) and wire up some simple ",(0,r.jsx)(n.code,{children:"setup"})," and ",(0,r.jsx)(n.code,{children:"teardown"})," methods."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"# filename: screenshot.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n"})}),"\n",(0,r.jsx)(n.p,{children:"Next we'll want to create a method to execute our tests. This is where we'll capture when a failure occurs and take a screenshot."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:'def run\n  setup\n  begin\n    yield\n  rescue RSpec::Expectations::ExpectationNotMetError => error\n    puts error.message\n    @driver.save_screenshot "./#{Time.now.strftime("failshot__%d_%m_%Y__%H_%M_%S")}.png"\n  end\n  teardown\nend\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After calling ",(0,r.jsx)(n.code,{children:"setup"})," and before calling ",(0,r.jsx)(n.code,{children:"teardown"})," we wrap our test code execution (e.g., ",(0,r.jsx)(n.code,{children:"yield"}),") in a ",(0,r.jsx)(n.code,{children:"rescue"})," block. This handles the exception that a test failure will return. When a failure occurs the error message will get outputted to the terminal (just like it normally would) but now we are also capturing a screenshot through the help of Selenium's ",(0,r.jsx)(n.code,{children:".save_screenshot"})," method."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".save_screenshot"})," accepts a filename as a string (e.g., ",(0,r.jsx)(n.code,{children:"'failshot.png'"}),"). When this command executes it will save an image file to your local system in the current working directory."]}),"\n",(0,r.jsxs)(n.p,{children:["Note the use of ",(0,r.jsx)(n.code,{children:"Time.now.strftime"})," in the screenshot filename. This is adding a timestamp (down to the second) to the filename. This provides a (reasonably) unique file name and has the added benefit of listing the files in the order taken."]}),"\n",(0,r.jsx)(n.p,{children:"Now let's wire up our test."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n  expect(@driver.find_element(css: 'h1').text).to eql 'blah blah blah'\nend\n"})}),"\n",(0,r.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(n.p,{children:["If we save this file and run it (",(0,r.jsx)(n.code,{children:"ruby screenshot.rb"})," from the command-line) here is what would happen:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open the browser"}),"\n",(0,r.jsxs)(n.li,{children:["Load the homepage of ",(0,r.jsx)(n.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"})]}),"\n",(0,r.jsx)(n.li,{children:"Check the text of the page header and fail"}),"\n",(0,r.jsx)(n.li,{children:"Output a failure message in the terminal"}),"\n",(0,r.jsx)(n.li,{children:"Capture a timestamped screenshot in the current working directory"}),"\n",(0,r.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.p,{children:["For more info on ",(0,r.jsx)(n.code,{children:"strftime"})," (a.k.a. String Formatted Time) go ",(0,r.jsx)(n.a,{href:"http://apidock.com/ruby/DateTime/strftime",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["But if you want truly unique filenames, then you should use a unique ID in the filename instead of a timestamp (e.g., something like ",(0,r.jsx)(n.a,{href:"https://github.com/assaf/uuid",children:(0,r.jsx)(n.code,{children:"uuid"})}),"). This will prevent screenshots from getting overwritten when you have two (or more) tests taking screenshots at the same time."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);