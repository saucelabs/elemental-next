"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"How To Do Load Testing",slug:"48-load-testing",number:48,publish_date:new Date("2014-04-30T00:00:00.000Z"),tags:["load testing"],level:3,category:"testing"},i=void 0,l={unversionedId:"non-updated-tips/load-testing/readme",id:"non-updated-tips/load-testing/readme",title:"How To Do Load Testing",description:"The Problem",source:"@site/docs/non-updated-tips/48-load-testing/readme.md",sourceDirName:"non-updated-tips/48-load-testing",slug:"/non-updated-tips/load-testing/48-load-testing",permalink:"/elemental-next/docs/non-updated-tips/load-testing/48-load-testing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/48-load-testing/readme.md",tags:[{label:"load testing",permalink:"/elemental-next/docs/tags/load-testing"}],version:"current",frontMatter:{title:"How To Do Load Testing",slug:"48-load-testing",number:48,publish_date:"2014-04-30T00:00:00.000Z",tags:["load testing"],level:3,category:"testing"},sidebar:"tutorialSidebar",previous:{title:"How To Test For Disabled Elements",permalink:"/elemental-next/docs/non-updated-tips/disabled-element/python/40-disabled-element"},next:{title:"How To Do Performance Testing",permalink:"/elemental-next/docs/non-updated-tips/performance-testing/49-performance-testing"}},s={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"One of the most commonly asked questions in Selenium is ",(0,a.kt)("em",{parentName:"p"},'"How do you do load testing?"'),". The often stated short answer is ",(0,a.kt)("em",{parentName:"p"},'"Well... you don\'t"'),"."),(0,a.kt)("p",null,"There are plenty of resources citing that while it ",(0,a.kt)("em",{parentName:"p"},"can")," be done there are better tools for the job. Tools like ",(0,a.kt)("a",{parentName:"p",href:"https://jmeter.apache.org/"},"JMeter")," are often recommended. But they can be intimidating and challenging to get started with."),(0,a.kt)("p",null,"If you start to go down this rabbit hole then there are a couple of options. You could stand up a Selenium Grid with a bunch of host nodes, run a big suite of tests in parallel, and hope for the best. You could also do this with a cloud provider (instead of maintaining your own Grid). But these are hard enough to get right when you're just trying to get your automated tests working well in the first place. Alternatively, you could go with a third-party provider like ",(0,a.kt)("a",{parentName:"p",href:"http://www.neustar.biz/services/web-performance/load-testing"},"Neustar")," to help you on your way, but that might not be your cup of tea."),(0,a.kt)("p",null,"Regardless of the approach, it can be a bumpy road to do load testing."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"Rather than invest time, money, and frustration into JMeter, a Selenium infrastructure, or a third-party provider, we can generate a good amount of load by leveraging an existing Selenium script, a proxy server, and an HTTP client library along with some parallel threads."),(0,a.kt)("p",null,"With a proxy server we can capture the HTTP requests generated by Selenium and replay them with an HTTP client library in parallel -- effectively replicating the same actions hitting the web server simultaneously, in large numbers."),(0,a.kt)("p",null,"Let's dig in with an example."),(0,a.kt)("h2",{id:"an-example"},"An Example"),(0,a.kt)("p",null,"Before we get started we'll need to ",(0,a.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"download a copy of BrowserMob Proxy"),". Once we have that, we'll want to include our requisite libraries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"selenium-webdriver")," to control the browser"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"browsermob/proxy")," to configure/use BrowserMob Proxy"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"typhoeus")," to replay HTTP requests")),(0,a.kt)("p",null,"After that, we can create methods to configure the proxy server (",(0,a.kt)("inlineCode",{parentName:"p"},"configure_proxy"),"), set the browser profile to use the proxy server (",(0,a.kt)("inlineCode",{parentName:"p"},"browser_profile"),"), pull these together so the test will have a working browser that uses the proxy server (",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),"), and tear things down after running the test (",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: load.rb\n\nrequire 'selenium-webdriver'\nrequire 'browsermob/proxy'\nrequire 'typhoeus'\n\ndef configure_proxy\n  proxy_binary = BrowserMob::Proxy::Server.new('./browsermob-proxy/bin/browsermob-proxy')\n  proxy_binary.start\n  proxy_binary.create_proxy\nend\n\ndef browser_profile\n  browser_profile = Selenium::WebDriver::Firefox::Profile.new\n  browser_profile.proxy = @proxy.selenium_proxy\n  browser_profile\nend\n\ndef setup\n  @proxy = configure_proxy\n  @driver = Selenium::WebDriver.for :firefox, profile: browser_profile\nend\n\ndef teardown\n  @driver.quit\n  @proxy.close\nend\n")),(0,a.kt)("p",null,"Next we'll want to tell the proxy server to capture traffic and return a payload (a.k.a. a HTTP Archive, or HAR). For easier debugging later, we will want to add some error handling to output the results from each HTTP request that's replayed (",(0,a.kt)("inlineCode",{parentName:"p"},"error_handling"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'def capture_traffic\n  @proxy.new_har\n  yield\n  @proxy.har\nend\n\ndef error_handling(request)\n  request.on_complete do |response|\n    if response.success?\n      puts "success"\n    elsif response.timed_out?\n      puts "got a time out"\n    elsif response.code == 0\n      # Could not get an http response, something\'s wrong.\n      puts response.return_message\n    else\n      # Received a non-successful http response.\n      puts "HTTP request failed: " + response.code.to_s\n    end\n  end\nend\n')),(0,a.kt)("p",null,"Now for the meat of the issue -- replaying the requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'def replay(http_requests, number_of_replays, debug = false)\n  requests = []\n  http_requests.entries.each do |entry|\n    requests << Typhoeus::Request.new(\n      entry.request.url,\n      method: entry.request.method.downcase.to_sym)\n  end\n\n  start_time = Time.now\n  puts "Start time: #{start_time}"\n  threads = []\n  number_of_replays.times do\n    threads << Thread.new do\n      requests.each do |request|\n        error_handling request if debug\n        request.run\n      end\n    end\n  end\n  threads.each {|thread| thread.join }\n  finish_time = Time.now\n  puts "Finish time: #{finish_time}"\n  puts "#{number_of_replays} runs completed in #{finish_time - start_time} seconds"\nend\n')),(0,a.kt)("p",null,"We start by iterating through each of the entries in the HAR payload, creating a new request for Typhoeus to use -- storing them all in an array."),(0,a.kt)("p",null,"After printing the current time to the terminal, we create a new thread and execute all of the Typhoeus HTTP requests within it (outputting the error handling for each request if a debug parameter is passed in). This gets repeated based on the number of times specified when ",(0,a.kt)("inlineCode",{parentName:"p"},"replay")," is called."),(0,a.kt)("p",null,"After the threads run and terminate, we output the current time, and then list the total time run time along with the number of replays attempted."),(0,a.kt)("p",null,"We can now pull all of this together by implementing a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def run\n  setup\n  http_requests = capture_traffic { yield }\n  teardown\n  replay(http_requests, 100)\nend\n")),(0,a.kt)("p",null,"If we wanted to see the debug output, we would pass in ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," as a third parameter like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"replay(http_requests, 100, true)\n")),(0,a.kt)("p",null,"Now that everything's wired up, we can drop our Selenium actions into a run block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'\n  @driver.find_element(css: '#start button').click\n  Selenium::WebDriver::Wait.new(timeout: 8).until do\n    @driver.find_element(css: '#finish')\n  end\nend\n")),(0,a.kt)("p",null,"If we run this script without debugging turned on, then we should see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Start time: 2014-04-30 14:22:33 -0400\nFinish time: 2014-04-30 14:23:10 -0400\n100 runs completed in 37.575052 seconds\n")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Load a browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page and complete the actions specified while capturing the HTTP requests"),(0,a.kt)("li",{parentName:"ul"},"Close the browser and shutdown the proxy server"),(0,a.kt)("li",{parentName:"ul"},"Replay the HTTP requests generated by Selenium 100 times in parallel")))}m.isMDXComponent=!0}}]);