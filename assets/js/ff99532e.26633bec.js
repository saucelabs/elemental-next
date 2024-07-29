"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[80762,64071],{64071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(74848),r=t(28453);const i={},o=void 0,l={id:"logging/_ruby",title:"_ruby",description:"Example",source:"@site/tips/54-logging/_ruby.mdx",sourceDirName:"54-logging",slug:"/logging/_ruby",permalink:"/tips/logging/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/54-logging/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Growl",permalink:"/tips/53-growl"},next:{title:"How to Access Selenium Logs in Real-Time",permalink:"/tips/54-logging"}},a={},c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["First, we'll need to ",(0,s.jsx)(n.a,{href:"https://www.selenium.dev/downloads/",children:"download a copy of Selenium Server"})," and launch it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"java -jar selenium-server-4.8.2.jar standalone\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, we'll want to create a mechanism to access the Selenium Server logs through the WebDriver Wire Protocol via an\nHTTP library -- filtering out the logs we don't want and return the most recent one."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:'# filename: logger.rb\n\nrequire \'rest-client\'\nrequire \'json\'\n\nclass Logger\n\n  def initialize(session_id)\n    @session_id = session_id\n  end\n\n  def latest\n    parse(fetch).last\n  end\n\n  private\n\n  def fetch\n    RestClient.post(\n      "http://127.0.0.1:4444/wd/hub/session/#{@session_id}/log",\n      { "type" => "client" }.to_json,\n      content_type: :json,\n      accept: :json\n    )\n  end\n\n  def parse(input)\n    logs = JSON.parse(input)\n    messages = []\n    logs["value"].each do |entry|\n      msg = entry["message"]\n      unless msg.include? "session:" or\n        msg.include? "fetching logs" or\n          msg.include? "execute script"\n            messages << msg.scan(/handle(.*)$/)[-1][-1]\n      end\n    end\n    messages\n  end\n\nend\n'})}),"\n",(0,s.jsx)(n.p,{children:"A couple of things to note."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"session_id"})," will come from the instance of Selenium that gets created in our test (via Selenium Grid). To see\nyour sessions, navigate to the instance in your web browser (",(0,s.jsx)(n.a,{href:"http://localhost:4444/",children:"http://localhost:4444/"}),") and then click Sessions in the\nside panel. This session ID maps to a URI endpoint on the Selenium Server that we use to get the logging payload\nwith an HTTP POST (see ",(0,s.jsx)(n.code,{children:"fetch"}),"). We are then taking that payload (which comes back as a JSON object in String form)\nand parsing it into JSON, iterating through it, grabbing the relevant bits we want (see ",(0,s.jsx)(n.code,{children:"parse"}),"). When that's all\ndone, we return the last entry found (see ",(0,s.jsx)(n.code,{children:"latest"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["And of ",(0,s.jsx)(n.a,{href:"https://code.google.com/p/selenium/wiki/Logging#Log_Types",children:"all the available log types we can access"}),", we're grabbing the client logs\n(which will give us the real time actions taken in our test)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE: Each time we access the logs, it will clear the cache of logs. So the next time we access them, it will\nonly return new entries."})}),"\n",(0,s.jsx)(n.p,{children:"Now we're ready to wire up our test to use the Selenium Server, access our logger class, and output the latest\nlog entries after each Selenium action."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"# filename: log_test.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\nrequire_relative 'logger'\n\ndef setup\n  @driver = Selenium::WebDriver.for :remote, url: 'http://127.0.0.1:4444/wd/hub'\n  @logger = Logger.new(@driver.session_id)\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'https://the-internet.herokuapp.com'\n  puts @logger.latest\n  @driver.find_elements(css: 'a').last.click\n  puts @logger.latest\nend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When we run this (e.g., ",(0,s.jsx)(n.code,{children:"ruby log_test.rb"}),"), here's what we should see."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:" Done: [get: http://the-internet.herokuapp.com]\n Done: [click: 23 [[FirefoxDriver: firefox on MAC (2afa5f83-1aba-ad43-b1f3-9b4907ae9471)] -> css selector: a]]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If we couple this with jQuery Growl Notifications (",(0,s.jsx)(n.a,{href:"https://elementalselenium.com/docs/growl/53-growl",children:"covered in the last tip"}),")\nthen we can really put this information to work."]}),"\n",(0,s.jsx)(n.p,{children:"Let's add some helper methods to add jQuery Growl to the page and display notification messages."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"def add_growl_notifications\n  @driver.execute_script(\"if (!window.jQuery) {\n      var jquery = document.createElement('script'); jquery.type = 'text/javascript';\n      jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';\n      document.getElementsByTagName('head')[0].appendChild(jquery);\n    }\")\n\n  @driver.execute_script(\"$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')\")\n\n  @driver.execute_script(\"$('head').append('<link rel=\\\"stylesheet\\\" href=\\\"http://the-internet.herokuapp.com/css/jquery.growl.css\\\" type=\\\"text/css\\\" />');\")\nend\n\ndef display_growl_message(message)\n  @driver.execute_script(\"$.growl({ title: 'Selenium', message: '#{message}' });\")\n  sleep 2\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now let's update our test to perform an action and then display it through jQuery Growl notifications."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n  add_growl_notifications\n  display_growl_message(@logger.latest)\nend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When we run this (e.g., ",(0,s.jsx)(n.code,{children:"ruby log_test.rb"}),"), we should see the latest log action appear in a growl notification within\nthe browser window."]}),"\n",(0,s.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Load the browser"}),"\n",(0,s.jsx)(n.li,{children:"Take an action"}),"\n",(0,s.jsx)(n.li,{children:"Grab the action from the logs"}),"\n",(0,s.jsx)(n.li,{children:"Display the action"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Hopefully that was a helpful tip on how to get browser-agnostic, real-time logging information."}),"\n",(0,s.jsx)(n.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);