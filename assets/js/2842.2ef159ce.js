"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2842],{82842:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={},o=void 0,s=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],p={toc:s},l="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"To start, we include our dependent libraries (",(0,a.kt)("inlineCode",{parentName:"p"},"'selenium-webdriver'")," to drive the browser, and ",(0,a.kt)("inlineCode",{parentName:"p"},"'rspec-expectations'"),"\nto perform our assertion) and then wire up ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown")," methods."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," we are accepting two parameters -- ",(0,a.kt)("inlineCode",{parentName:"p"},"browser_name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"browser_version"),". We put these to use when\nspecifying the browser and operating system capabilities for Sauce Labs, which gets stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"caps")," variable.\nThis variable then gets passed in as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@driver")," incantation."),(0,a.kt)("p",null,"And in ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown")," we destroy the browser session."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: example.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\n\ndef setup(browser_name, browser_version)\n  caps = Selenium::WebDriver::Remote::Capabilities.send(browser_name.to_sym)\n  caps.platform = 'Windows XP'\n  caps.version = browser_version.to_s\n\n  @driver = Selenium::WebDriver.for(\n    :remote,\n    url: \"https://#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_API_KEY']}@ondemand.saucelabs.com/wd/hub\",\n    desired_capabilities: caps)\nend\n\ndef teardown\n  @driver.quit\nend\n")),(0,a.kt)("p",null,"Note the ",(0,a.kt)("inlineCode",{parentName:"p"},"url:")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@driver")," section above. It is concatenated from environment variables that are set at run\ntime; like so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"SAUCE_USERNAME='your sauce username' SAUCE_API_KEY='your sauce api key' ruby example.rb\n")),(0,a.kt)("p",null,"Next we specify the browsers and versions we care about in a collection (e.g., a Hash), create a ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," method, and\nwire it up to loop over the collection -- running ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", test actions, and ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown")," for each browser in the\ncollection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"BROWSERS = { firefox: '27',\n             chrome: '32',\n             internet_explorer: '8' }\n\ndef run\n  BROWSERS.each_pair do |browser, browser_version|\n    setup(browser, browser_version)\n    yield\n    teardown\n  end\nend\n")),(0,a.kt)("p",null,"Once we have that, we wire up our test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'https://the-internet.herokuapp.com'\n  expect(@driver.title).to eql('The Internet')\nend\n")),(0,a.kt)("p",null,"And when we run it, we should see three jobs appear in Sauce Labs."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Load Firefox, load the page, assert the title is correct"),(0,a.kt)("li",{parentName:"ul"},"Load Chrome, load the page, assert the title is correct"),(0,a.kt)("li",{parentName:"ul"},"Load IE, load the page, assert the title is correct")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this tip has helped make multi-browser testing more approachable to you."),(0,a.kt)("p",null,"Happy Testing!"))}d.isMDXComponent=!0}}]);