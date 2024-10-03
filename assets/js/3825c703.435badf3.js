"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[61868,29968],{29968:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(74848),s=r(28453);const i={},o=void 0,a={id:"load-testing/_ruby",title:"_ruby",description:"Example",source:"@site/tips/48-load-testing/_ruby.mdx",sourceDirName:"48-load-testing",slug:"/load-testing/_ruby",permalink:"/tips/load-testing/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/48-load-testing/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Implicit vs Explicit Waits",permalink:"/tips/47-waiting"},next:{title:"Load Testing",permalink:"/tips/48-load-testing"}},l={},d=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Before we get started we'll need to ",(0,t.jsx)(n.a,{href:"http://bmp.lightbody.net/",children:"download a copy of BrowserMob Proxy"}),". Once we have that, we'll want to include our requisite libraries:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"selenium-webdriver"})," to control the browser"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"browsermob/proxy"})," to configure/use BrowserMob Proxy"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"typhoeus"})," to replay HTTP requests"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After that, we can create methods to configure the proxy server (",(0,t.jsx)(n.code,{children:"configure_proxy"}),"), set the browser profile to use the proxy server (",(0,t.jsx)(n.code,{children:"browser_profile"}),"), pull these together so the test will have a working browser that uses the proxy server (",(0,t.jsx)(n.code,{children:"setup"}),"), and tear things down after running the test (",(0,t.jsx)(n.code,{children:"teardown"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# filename: load.rb\n\nrequire 'selenium-webdriver'\nrequire 'browsermob/proxy'\nrequire 'typhoeus'\n\ndef configure_proxy\n  proxy_binary = BrowserMob::Proxy::Server.new('./browsermob-proxy/bin/browsermob-proxy')\n  proxy_binary.start\n  proxy_binary.create_proxy\nend\n\ndef browser_profile\n  browser_profile = Selenium::WebDriver::Firefox::Profile.new\n  browser_profile.proxy = @proxy.selenium_proxy\n  browser_profile\nend\n\ndef setup\n  @proxy = configure_proxy\n  @driver = Selenium::WebDriver.for :firefox, profile: browser_profile\nend\n\ndef teardown\n  @driver.quit\n  @proxy.close\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next we'll want to tell the proxy server to capture traffic and return a payload (a.k.a. a HTTP Archive, or HAR). For easier debugging later, we will want to add some error handling to output the results from each HTTP request that's replayed (",(0,t.jsx)(n.code,{children:"error_handling"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:'def capture_traffic\n  @proxy.new_har\n  yield\n  @proxy.har\nend\n\ndef error_handling(request)\n  request.on_complete do |response|\n    if response.success?\n      puts "success"\n    elsif response.timed_out?\n      puts "got a time out"\n    elsif response.code == 0\n      # Could not get an http response, something\'s wrong.\n      puts response.return_message\n    else\n      # Received a non-successful http response.\n      puts "HTTP request failed: " + response.code.to_s\n    end\n  end\nend\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now for the meat of the issue -- replaying the requests."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:'def replay(http_requests, number_of_replays, debug = false)\n  requests = []\n  http_requests.entries.each do |entry|\n    requests << Typhoeus::Request.new(\n      entry.request.url,\n      method: entry.request.method.downcase.to_sym)\n  end\n\n  start_time = Time.now\n  puts "Start time: #{start_time}"\n  threads = []\n  number_of_replays.times do\n    threads << Thread.new do\n      requests.each do |request|\n        error_handling request if debug\n        request.run\n      end\n    end\n  end\n  threads.each {|thread| thread.join }\n  finish_time = Time.now\n  puts "Finish time: #{finish_time}"\n  puts "#{number_of_replays} runs completed in #{finish_time - start_time} seconds"\nend\n'})}),"\n",(0,t.jsx)(n.p,{children:"We start by iterating through each of the entries in the HAR payload, creating a new request for Typhoeus to use -- storing them all in an array."}),"\n",(0,t.jsxs)(n.p,{children:["After printing the current time to the terminal, we create a new thread and execute all Typhoeus HTTP requests within it (outputting the error handling for each request if a debug parameter is passed in). This gets repeated based on the number of times specified when ",(0,t.jsx)(n.code,{children:"replay"})," is called."]}),"\n",(0,t.jsx)(n.p,{children:"After the threads run and terminate, we output the current time, and then list the total time run time along with the number of replays attempted."}),"\n",(0,t.jsxs)(n.p,{children:["We can now pull all of this together by implementing a simple ",(0,t.jsx)(n.code,{children:"run"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"def run\n  setup\n  http_requests = capture_traffic { yield }\n  teardown\n  replay(http_requests, 100)\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If we wanted to see the debug output, we would pass in ",(0,t.jsx)(n.code,{children:"true"})," as a third parameter like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"replay(http_requests, 100, true)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now that everything's wired up, we can drop our Selenium actions into a run block."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'\n  @driver.find_element(css: '#start button').click\n  Selenium::WebDriver::Wait.new(timeout: 8).until do\n    @driver.find_element(css: '#finish')\n  end\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"If we run this script without debugging turned on, then we should see something like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Start time: 2014-04-30 14:22:33 -0400\nFinish time: 2014-04-30 14:23:10 -0400\n100 runs completed in 37.575052 seconds\n"})}),"\n",(0,t.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Load a browser"}),"\n",(0,t.jsx)(n.li,{children:"Visit the page and complete the actions specified while capturing the HTTP requests"}),"\n",(0,t.jsx)(n.li,{children:"Close the browser and shutdown the proxy server"}),"\n",(0,t.jsx)(n.li,{children:"Replay the HTTP requests generated by Selenium 100 times in parallel"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"Hopefully this was helpful in helping you figure out how to do load testing."}),"\n",(0,t.jsx)(n.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);