"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[35752,92172],{92172:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var i=r(74848),t=r(28453);const s={},l=void 0,a={id:"wrapper/_ruby",title:"_ruby",description:"A Solution",source:"@site/tips/55-wrapper/_ruby.mdx",sourceDirName:"55-wrapper",slug:"/wrapper/_ruby",permalink:"/tips/wrapper/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/55-wrapper/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How to Access Selenium Logs in Real-Time",permalink:"/tips/54-logging"},next:{title:"Wrapper",permalink:"/tips/55-wrapper"}},d={},o=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,i.jsx)(n.p,{children:"Instead of hard-coding logging requests all over the place, we can leverage an event listener to give us the information we want -- automatically and for each Selenium action."}),"\n",(0,i.jsxs)(n.p,{children:["This functionality is built in to Selenium in what's called the ",(0,i.jsx)(n.a,{href:"https://code.google.com/p/selenium/source/browse/rb/lib/selenium/webdriver/support/abstract_event_listener.rb",children:"AbstractEventListener"}),". This is a class which comes preloaded with helper methods that enable us to add behavior before and after common Selenium actions -- here's a list of the available methods:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"before_navigate_to"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"after_navigate_to"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"before_navigate_back"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"after_navigate_back"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"before_navigate_forward"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"after_navigate_forward"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"before_find"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"after_find"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"before_click"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"after_click"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"before_change_value_of"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"after_change_value_of"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"before_execute_script"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"after_execute_script"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"before_quit"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"after_quit"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"before_close"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"after_close"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We can pick and choose from each of these methods and specify the additional behavior we want to occur. After that, it's just a simple matter of passing this information to Selenium when creating a browser instance."}),"\n",(0,i.jsx)(n.p,{children:"Here is an example."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["To start, let's create a ",(0,i.jsx)(n.code,{children:"Wrapper"})," class that inherits from ",(0,i.jsx)(n.code,{children:"AbstractEventListener"})," and add our behavior there."]}),"\n",(0,i.jsxs)(n.p,{children:["The helper methods we're interested in are ",(0,i.jsx)(n.code,{children:"after_navigate_to"}),", ",(0,i.jsx)(n.code,{children:"before_find"}),", ",(0,i.jsx)(n.code,{children:"after_find"}),", ",(0,i.jsx)(n.code,{children:"before_click"}),", and ",(0,i.jsx)(n.code,{children:"after_click"})," and they each require different arguments to be specified. See ",(0,i.jsx)(n.a,{href:"https://code.google.com/p/selenium/source/browse/rb/lib/selenium/webdriver/support/abstract_event_listener.rb#30",children:"here"})," for details."]}),"\n",(0,i.jsx)(n.p,{children:"And to make things interesting, let's wire up jQuery Growl notifications."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:'# filename: wrapper.rb\n\nclass Wrapper < Selenium::WebDriver::Support::AbstractEventListener\n\n  def after_navigate_to(url, driver)\n    add_growl(driver)\n    display_growl(driver, "Navigated to #{url}")\n  end\n\n  def before_find(by, what, driver)\n    display_growl(driver, "Finding element #{what}")\n  end\n\n  def after_find(by, what, driver)\n    display_growl(driver, "Found element #{what}")\n  end\n\n  def before_click(element, driver)\n    display_growl(driver, "Clicking on #{element.text}")\n    @pre_click_url = driver.current_url\n  end\n\n  def after_click(element, driver)\n    unless @pre_click_url == driver.current_url\n      add_growl(driver)\n      display_growl(driver, "URL changed to #{driver.current_url}")\n    end\n  end\n\n  private\n\n  def add_growl(driver)\n     driver.execute_script("if (!window.jQuery) {\n        var jquery = document.createElement(\'script\'); jquery.type = \'text/javascript\';\n        jquery.src = \'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js\';\n        document.getElementsByTagName(\'head\')[0].appendChild(jquery);\n      }")\n\n    driver.execute_script("$.getScript(\'http://the-internet.herokuapp.com/js/vendor/jquery.growl.js\')")\n\n    driver.execute_script("$(\'head\').append(\'<link rel=\\"stylesheet\\" href=\\"http://the-internet.herokuapp.com/css/jquery.growl.css\\" type=\\"text/css\\" />\');")\n\n    sleep 1\n  end\n\n  def display_growl(driver, message)\n    driver.execute_script("$.growl({ title: \'Selenium\', message: \'#{message}\' });")\n    sleep 0.5\n  end\n\nend\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Our Event Listener helper methods give us access to the driver object at the precise moments we want in our test steps, and by wiring up growl notifications (see ",(0,i.jsx)(n.code,{children:"add_growl"})," and ",(0,i.jsx)(n.code,{children:"display_growl"}),") we can now display notification messages in the browser window automatically without any additional work in our test code."]}),"\n",(0,i.jsx)(n.p,{children:"Let's go ahead and wire up our test code to use this new wrapper."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"# filename: wrapper_test.rb\n\nrequire 'selenium-webdriver'\nrequire_relative 'wrapper'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox, listener: Wrapper.new\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com'\n  @driver.find_elements(css: 'a').last.click\nend\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Everything here is pretty standard with the exception of two small changes to handle our wrapper. We first need to include the file (",(0,i.jsx)(n.code,{children:"require_relative 'wrapper'"}),") and then pass in an instance of the wrapper to Selenium (",(0,i.jsx)(n.code,{children:"listener: Wrapper.new"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["Now if we run our test (",(0,i.jsx)(n.code,{children:"ruby wrapper_test.rb"}),") then we will see notification messages appear around each of the test actions as they occur."]}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Load the browser"}),"\n",(0,i.jsx)(n.li,{children:"Load jQuery if it's not already loaded"}),"\n",(0,i.jsx)(n.li,{children:"Load jQuery Growl and it's styles"}),"\n",(0,i.jsx)(n.li,{children:"Display notifications in the browser window for each of the test actions"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.p,{children:["To see a video demo of this test, ",(0,i.jsx)(n.a,{href:"https://vimeo.com/98736887",children:"click here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var i=r(96540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);