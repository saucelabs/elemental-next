"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[77932],{77932:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=s(74848),t=s(28453);const i={},o=void 0,a={id:"cloud/_ruby",title:"_ruby",description:"Example",source:"@site/tips/26-cloud/_ruby.mdx",sourceDirName:"26-cloud",slug:"/cloud/_ruby",permalink:"/tips/cloud/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/26-cloud/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727344076e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How To Work With Tables",permalink:"/tips/25-how-to-work-with-tables"},next:{title:"Cloud",permalink:"/tips/26-cloud"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Another Browser",id:"another-browser",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": You'll need an account to use Sauce Labs. You can sign up for a\n",(0,r.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial account (no credit-card required)"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["First we'll include our dependent libraries (to drive the browser and do assertions), and wire up some simple\n",(0,r.jsx)(n.code,{children:"setup"}),", ",(0,r.jsx)(n.code,{children:"teardown"}),", and ",(0,r.jsx)(n.code,{children:"run"})," methods. We recommend exporting your Sauce Labs ",(0,r.jsx)(n.code,{children:"SAUCE_USERNAME"})," and\n",(0,r.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})," as environment variables."]}),"\n",(0,r.jsx)(n.p,{children:"Here are instructions for setting environment variables on each Operating System:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/",children:"Windows"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x",children:"macOS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://askubuntu.com/questions/58814/how-do-i-add-environment-variables",children:"Linux"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"# filename: cloud.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  options = Selenium::WebDriver::Options.chrome\n  options.browser_version = '109'\n  options.platform_name = 'macOS 13'\n  sauce_options = {}\n  sauce_options[:name] = 'Elemental Selenium - Tip 26 - Hello!'\n  options.add_option('sauce:options', sauce_options)\n\n  url = \"https://#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_ACCESS_KEY']}@ondemand.us-west-1.saucelabs.com:443/wd/hub\"\n  @driver = Selenium::WebDriver.for(:remote, :url => url, :capabilities => options)\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Our ",(0,r.jsx)(n.code,{children:"setup"})," method is where the magic is happening. We declare the browser options\nfor Chrome and store it in a variable for immediate reuse. We then set the browser version\n(e.g. ",(0,r.jsx)(n.code,{children:"options.browser_version = '109'"}),", but you can also use ",(0,r.jsx)(n.code,{children:"latest"})," to use the most recent\nversion), specify the operating system we would like to use (e.g. ",(0,r.jsx)(n.code,{children:"options.platform_name = 'macOS 13'"}),"),\nand set the test name (e.g., ",(0,r.jsx)(n.code,{children:"sauce_options[:name] = 'Elemental Selenium - Tip 26 - Hello!'"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"We then connect to Sauce Labs with Selenium WebDriver and feed in our browser options object."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": The URL contains the URI for the Sauce Labs cl service as well as our Sauce user and\naccess credentials. In this case, they are specified through environment variables. But you can\njust as easily hard-code your info here. We recommend exporting your Sauce Labs ",(0,r.jsx)(n.code,{children:"SAUCE_USERNAME"})," and\n",(0,r.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})," as environment variables."]}),"\n",(0,r.jsx)(n.p,{children:"Here are instructions for setting environment variables on each Operating System:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/",children:"Windows"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x",children:"macOS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://askubuntu.com/questions/58814/how-do-i-add-environment-variables",children:"Linux"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Now we're ready to add a test to run in Sauce Labs."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n  expect(@driver.title.include?('The Internet')).to eql true\nend\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If we save this and run it (e.g., ",(0,r.jsx)(n.code,{children:"ruby cloud.rb"})," from the command-line) it will execute the test on\nan Chrome 109 browser instance running on macOS 13 (Ventura) in Sauce Labs."]}),"\n",(0,r.jsx)(n.h2,{id:"another-browser",children:"Another Browser"}),"\n",(0,r.jsx)(n.p,{children:"If you want to change up the browser, you would just need to alter the options:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"  # For Chrome 110\n  options = Selenium::WebDriver::Options.chrome\n  options.browser_version = '110'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or..."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"  # For Safari 16\n  options = Selenium::WebDriver::Options.safari\n  options.browser_version = '16'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or..."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"  # For Edge 109\n  options = Selenium::WebDriver::Options.edge\n  options.browser_version = '109'\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": You can find a full list of configuration options along with example code for all of Sauce supported\nlanguages at their ",(0,r.jsx)(n.a,{href:"https://saucelabs.com/products/platform-configurator#/",children:"Platform Configurator"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open a specified browser in Sauce Labs"}),"\n",(0,r.jsx)(n.li,{children:"Test runs"}),"\n",(0,r.jsx)(n.li,{children:"Browser closes"}),"\n",(0,r.jsxs)(n.li,{children:["Test results (along with a video recording, screenshots, and other debugging information) are available on the\n",(0,r.jsx)(n.a,{href:"https://docs.saucelabs.com/test-results/viewing-test-results/",children:"test results dashboard"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"Hopefully this tip has helped you get your tests up and running against numerous browsers."}),"\n",(0,r.jsxs)(n.p,{children:["There are some other things to consider when using Sauce Labs (e.g., testing your secure apps through\n",(0,r.jsx)(n.a,{href:"https://docs.saucelabs.com/secure-connections/sauce-connect/",children:"Sauce Connect"}),", setting the pass/fail status\nfor your tests, and dynamically setting the test name). You can find more information about these things\nin ",(0,r.jsx)(n.a,{href:"https://docs.saucelabs.com/",children:"the Sauce Labs docs"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Happy Testing!"})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);