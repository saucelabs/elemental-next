"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2580],{90533:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={},o=void 0,l=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],s={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"a-solution"},"A Solution"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/"},"WebDriver")," works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"ChromeDriver")," is Google Chrome's browser driver. In this specific use case is of using WebDriver with Chrome in testing locally."),(0,i.kt)("p",null,"Let's step through an example using ChromeDriver (",(0,i.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"download here"),")."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,i.kt)("a",{parentName:"p",href:"http://chromedriver.storage.googleapis.com/index.html"},"here"),". Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add it to the System PATH"),(0,i.kt)("li",{parentName:"ul"},"Specify it in the Selenium setup")),(0,i.kt)("p",null,"We'll start by pulling in our requisite libraries (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to driver the browser and ",(0,i.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," to perform an assertion) and wiring up some simple ",(0,i.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: chrome.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  Selenium::WebDriver::Chrome::Service.driver_path = \"C:\\\\tmp\\\\chromedriver.exe\"\n  @driver = Selenium::WebDriver.for :chrome\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,i.kt)("p",null,"Notice that in ",(0,i.kt)("inlineCode",{parentName:"p"},"setup")," we are telling Selenium where the ChromeDriver exectuable is with ",(0,i.kt)("inlineCode",{parentName:"p"},"driver_path")," before creating an instance of the browser."),(0,i.kt)("p",null,"Now we're ready to add a simple test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: chrome.rb\n# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/'\n  expect(@driver.title).to eql 'The Internet'\nend\n")),(0,i.kt)("p",null,"If we save this file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"ruby chrome.rb"),") it will launch an instance of Chrome, visit the homepage of ",(0,i.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/"},"the-internet"),", and assert that the page title loaded."),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"When we save this file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"ruby chrome.rb")," from the command-line) here is what will happen."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ChromeDriver starts"),(0,i.kt)("li",{parentName:"ul"},"Chrome opens"),(0,i.kt)("li",{parentName:"ul"},"Test runs"),(0,i.kt)("li",{parentName:"ul"},"Chrome closes"),(0,i.kt)("li",{parentName:"ul"},"ChromeDriver stops")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official ",(0,i.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference"},"Selenium Quick Reference page for Installing Browser Drivers"),"."),(0,i.kt)("p",null,"Happy Testing!"))}u.isMDXComponent=!0}}]);