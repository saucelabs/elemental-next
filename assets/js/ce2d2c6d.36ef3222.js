"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[29590,62278],{62278:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(74848),i=r(28453);const o={},s=void 0,a={id:"load-testing-revisited/_ruby",title:"_ruby",description:"Example",source:"@site/tips/68-load-testing-revisited/_ruby.mdx",sourceDirName:"68-load-testing-revisited",slug:"/load-testing-revisited/_ruby",permalink:"/tips/load-testing-revisited/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/68-load-testing-revisited/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Broken Images",permalink:"/tips/67-broken-images"},next:{title:"Load Testing Revisited",permalink:"/tips/68-load-testing-revisited"}},l={},d=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["We'll first need to ",(0,t.jsx)(n.code,{children:"require"})," our requisite libraries (e.g., ",(0,t.jsx)(n.code,{children:"selenium-webdriver"})," for Selenium, ",(0,t.jsx)(n.code,{children:"browsermob/proxy"})," for our proxy, and ",(0,t.jsx)(n.code,{children:"convert"})," to convert -- a local file to convert the HAR to JMX)."]}),"\n",(0,t.jsxs)(n.p,{children:["Then we'll need to launch the proxy (e.g., ",(0,t.jsx)(n.code,{children:"configure_proxy"}),"), connect it to a browser profile (e.g., ",(0,t.jsx)(n.code,{children:"browser_profile"}),"), and tell Selenium to use this as it launches the browser (e.g., ",(0,t.jsx)(n.code,{children:"setup"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# filename: har.rb\n\nrequire 'selenium-webdriver'\nrequire 'browsermob/proxy'\nrequire_relative 'convert'\n\ndef configure_proxy\n  proxy_binary = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.0-beta-9/bin/browsermob-proxy')\n  proxy_binary.start\n  proxy_binary.create_proxy\nend\n\ndef browser_profile\n  profile = Selenium::WebDriver::Firefox::Profile.new\n  profile.proxy = @proxy.selenium_proxy\n  profile\nend\n\ndef setup\n  @proxy = configure_proxy\n  @driver = Selenium::WebDriver.for :firefox, profile: browser_profile\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now we need to make sure each test run closes the proxy and cleans up the browser (e.g., ",(0,t.jsx)(n.code,{children:"teardown"}),"). We'll also want to add a helper method to capture the traffic and wire everything up with a central ",(0,t.jsx)(n.code,{children:"run"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"def teardown\n  @driver.quit\n  @proxy.close\nend\n\ndef capture_traffic\n  @proxy.new_har\n  yield\n  @proxy.har\nend\n\ndef run\n  setup\n  @har = capture_traffic { yield }\n  teardown\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now it's a simple matter of specifying the Selenium actions and outputting the HAR to a file."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'\n  @driver.find_element(css: '#start button').click\n  Selenium::WebDriver::Wait.new(timeout: 8).until do\n    @driver.find_element(css: '#finish')\n  end\nend\n\n@har.save_to './selenium.har'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If we save this and run it (e.g., ",(0,t.jsx)(n.code,{children:"ruby har.rb"})," from the command-line) it will launch the browser, run the Selenium commands, and create a new file called ",(0,t.jsx)(n.code,{children:"selenium.har"})," (or overwrite it if there's one there already)."]}),"\n",(0,t.jsxs)(n.p,{children:["Now we're ready to convert the HAR file to JMeter XML. To do that, we can use ",(0,t.jsx)(n.a,{href:"https://github.com/flood-io/ruby-jmeter/blob/master/examples/basic_har.rb",children:"the basic HAR converter"})," that is available in the examples of ",(0,t.jsxs)(n.a,{href:"https://github.com/flood-io/ruby-jmeter",children:["the ",(0,t.jsx)(n.code,{children:"ruby-jmeter"})," gem"]})," (thanks to the fine folks at ",(0,t.jsx)(n.a,{href:"https://flood.io/",children:"flood.io"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"With a few modifications, it's ready for our needs."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# filename: convert.rb\n\nrequire 'ruby-jmeter'\nrequire 'recursive-open-struct'\nrequire 'json'\nrequire 'pry-debugger'\n\nmodule HARtoJMX\n  def self.convert(file)\n    har = RecursiveOpenStruct.new(JSON.parse(File.open(file).read), recurse_over_arrays: true)\n\n    test do\n      cache\n\n      cookies\n\n      header [\n        { name: 'Accept-Encoding', value: 'gzip,deflate,sdch' },\n        { name: 'Accept', value: 'text/javascript, text/html, application/xml, text/xml, */*' }\n      ]\n\n      threads count: 1 do\n\n        har.log.entries.collect {|entry| entry.pageref }.uniq.each do |page|\n\n          transaction name: page do\n            har.log.entries.select {|request| request.pageref == page }.each do |entry|\n              next unless entry.request.url =~ /http/\n              params = entry.request.postData && entry.request.postData.params.collect {|param| [param.name, param.value] }.flatten\n              self.send entry.request.to_h.values.first.downcase, entry.request.url, fill_in: Hash[*params] do\n                with_xhr if entry.request.headers.to_s =~ /XMLHttpRequest/\n              end\n            end\n          end\n        end\n      end\n    end.jmx\n  end\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now let's put it to use in our Selenium script."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# filename: har.rb\n\n...\n\nHARtoJMX.convert 'selenium.har'\n# the default filename output is `jmeter.jmx`\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Assuming you've ",(0,t.jsx)(n.a,{href:"http://jmeter.apache.org/download_jmeter.cgi",children:"downloaded a copy of JMeter"})," you're ready to run your load test."]}),"\n",(0,t.jsx)(n.p,{children:"To execute it from the command-line you'll need to specify the path to the JMeter binary executable, a couple of arguments, and the path to the JMX file."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"./apache-jmeter-2.11/bin/jmeter -n -t ./jmeter.jmx\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-n"})," tells JMeter ot run in non-GUI mode, and ",(0,t.jsx)(n.code,{children:"-t"})," is used to specify the path to the JMX file."]}),"\n",(0,t.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Selenium runs the test in Firefox while connected to the proxy server"}),"\n",(0,t.jsx)(n.li,{children:"The HTTP Archive (HAR) is exported to a file on disk"}),"\n",(0,t.jsx)(n.li,{children:"The HAR file is converted to a JMeter XML (JMX) file"}),"\n",(0,t.jsx)(n.li,{children:"JMeter is launched from the command-line and runs using the new JMX file"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you could open up the JMeter GUI, load the JMX file, and add on to it/reconfigure it/etc. This is a ",(0,t.jsx)(n.em,{children:"much"})," better place to start from since it saves you loads of up front busy work creating the load test from scratch."]}),"\n",(0,t.jsxs)(n.p,{children:["From here, it would be pretty trivial to add in a data set (e.g., ",(0,t.jsx)(n.a,{href:"https://wiki.apache.org/jmeter/JMeterFAQ#How_do_I_parameterize_my_JMeter_test_cases.3F",children:"parameterize the test case"}),"), increase the number of concurrent users, and change all kinds of simulated user behavior."]}),"\n",(0,t.jsx)(n.p,{children:"If you go this route, be sure to take a look at the JMeter Wiki. It's got loads of good information."}),"\n",(0,t.jsx)(n.p,{children:"Happy Testing!"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(96540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);