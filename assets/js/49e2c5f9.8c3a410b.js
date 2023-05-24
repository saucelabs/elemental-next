"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"68: Load Testing Revisited",id:"68-load-testing-revisited-ruby",contentUrl:"docs/load-testing-revisited/68-load-testing-revisited-ruby",sidebar_label:"Ruby",text:"In [a previous tip](http://elementalselenium.com/tips/48-load-testing) I demonstrated a way to accomplish a simple load test with a Selenium script and an HTTP library. While it works, it's only useful for rudimentary test cases. For more involved test cases and more powerful load generation, we're going to need something stronger.",number:68,hide_table_of_contents:!0,publish_date:new Date("2014-10-08T00:00:00.000Z"),last_update:{date:new Date("2023-04-06T00:00:00.000Z")},tags:["jmeter","load testing"],level:3,category:["tools"],language:"ruby"},i="How to Do Load Testing With Jmeter and Selenium",l={unversionedId:"load-testing-revisited/68-load-testing-revisited-ruby",id:"load-testing-revisited/68-load-testing-revisited-ruby",title:"68: Load Testing Revisited",description:"Intro",source:"@site/docs/68-load-testing-revisited/ruby.mdx",sourceDirName:"68-load-testing-revisited",slug:"/load-testing-revisited/68-load-testing-revisited-ruby",permalink:"/elemental-next/docs/load-testing-revisited/68-load-testing-revisited-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/68-load-testing-revisited/ruby.mdx",tags:[{label:"jmeter",permalink:"/elemental-next/docs/tags/jmeter"},{label:"load testing",permalink:"/elemental-next/docs/tags/load-testing"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1680739200,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{title:"68: Load Testing Revisited",id:"68-load-testing-revisited-ruby",contentUrl:"docs/load-testing-revisited/68-load-testing-revisited-ruby",sidebar_label:"Ruby",text:"In [a previous tip](http://elementalselenium.com/tips/48-load-testing) I demonstrated a way to accomplish a simple load test with a Selenium script and an HTTP library. While it works, it's only useful for rudimentary test cases. For more involved test cases and more powerful load generation, we're going to need something stronger.",number:68,hide_table_of_contents:!0,publish_date:"2014-10-08T00:00:00.000Z",last_update:{date:"2023-04-06T00:00:00.000Z"},tags:["jmeter","load testing"],level:3,category:["tools"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/broken-images/67-broken-images-ruby"},next:{title:"Csharp",permalink:"/elemental-next/docs/safari/69-safari-csharp"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-do-load-testing-with-jmeter-and-selenium"},"How to Do Load Testing With Jmeter and Selenium"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/48-load-testing"},"a previous tip")," I demonstrated a way to accomplish a simple load test with a Selenium script and an HTTP library. While it works, it's only useful for rudimentary test cases."),(0,a.kt)("p",null,"For more involved test cases and more powerful load generation, we're going to need something stronger."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"JMeter is the defacto open source load testing solution that is used in industry. The hardest part of using it is authoring the test cases (e.g., in the JMeter GUI). Thankfully we can sidestep that by repurposing our Selenium tests into initial JMeter scripts. To do this we'll need a proxy server, the HTTP Archive (HAR) each test generates, and a HAR to JMeter XML (JMX) converter."),(0,a.kt)("p",null,"When we're done, we'll have working JMeter test cases that we can modify and run (either from the GUI or the command-line)."),(0,a.kt)("p",null,"Let's dig in with an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"We'll first need to ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," our requisite libraries (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," for Selenium, ",(0,a.kt)("inlineCode",{parentName:"p"},"browsermob/proxy")," for our proxy, and ",(0,a.kt)("inlineCode",{parentName:"p"},"convert")," to convert -- a local file to convert the HAR to JMX)."),(0,a.kt)("p",null,"Then we'll need to launch the proxy (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"configure_proxy"),"), connect it to a browser profile (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"browser_profile"),"), and tell Selenium to use this as it launches the browser (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: har.rb\n\nrequire 'selenium-webdriver'\nrequire 'browsermob/proxy'\nrequire_relative 'convert'\n\ndef configure_proxy\n  proxy_binary = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.0-beta-9/bin/browsermob-proxy')\n  proxy_binary.start\n  proxy_binary.create_proxy\nend\n\ndef browser_profile\n  profile = Selenium::WebDriver::Firefox::Profile.new\n  profile.proxy = @proxy.selenium_proxy\n  profile\nend\n\ndef setup\n  @proxy = configure_proxy\n  @driver = Selenium::WebDriver.for :firefox, profile: browser_profile\nend\n")),(0,a.kt)("p",null,"Now we need to make sure each test run closes the proxy and cleans up the browser (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),"). We'll also want to add a helper method to capture the traffic and wire everything up with a central ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def teardown\n  @driver.quit\n  @proxy.close\nend\n\ndef capture_traffic\n  @proxy.new_har\n  yield\n  @proxy.har\nend\n\ndef run\n  setup\n  @har = capture_traffic { yield }\n  teardown\nend\n")),(0,a.kt)("p",null,"Now it's a simple matter of specifying the Selenium actions and outputting the HAR to a file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'\n  @driver.find_element(css: '#start button').click\n  Selenium::WebDriver::Wait.new(timeout: 8).until do\n    @driver.find_element(css: '#finish')\n  end\nend\n\n@har.save_to './selenium.har'\n")),(0,a.kt)("p",null,"If we save this and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby har.rb")," from the command-line) it will launch the browser, run the Selenium commands, and create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"selenium.har")," (or overwrite it if there's one there already)."),(0,a.kt)("p",null,"Now we're ready to convert the HAR file to JMeter XML. To do that, we can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flood-io/ruby-jmeter/blob/master/examples/basic_har.rb"},"the basic HAR converter")," that is available in the examples of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flood-io/ruby-jmeter"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"ruby-jmeter")," gem")," (thanks to the fine folks at ",(0,a.kt)("a",{parentName:"p",href:"https://flood.io/"},"flood.io"),")."),(0,a.kt)("p",null,"With a few modifications, it's ready for our needs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: convert.rb\n\nrequire 'ruby-jmeter'\nrequire 'recursive-open-struct'\nrequire 'json'\nrequire 'pry-debugger'\n\nmodule HARtoJMX\n  def self.convert(file)\n    har = RecursiveOpenStruct.new(JSON.parse(File.open(file).read), recurse_over_arrays: true)\n\n    test do\n      cache\n\n      cookies\n\n      header [\n        { name: 'Accept-Encoding', value: 'gzip,deflate,sdch' },\n        { name: 'Accept', value: 'text/javascript, text/html, application/xml, text/xml, */*' }\n      ]\n\n      threads count: 1 do\n\n        har.log.entries.collect {|entry| entry.pageref }.uniq.each do |page|\n\n          transaction name: page do\n            har.log.entries.select {|request| request.pageref == page }.each do |entry|\n              next unless entry.request.url =~ /http/\n              params = entry.request.postData && entry.request.postData.params.collect {|param| [param.name, param.value] }.flatten\n              self.send entry.request.to_h.values.first.downcase, entry.request.url, fill_in: Hash[*params] do\n                with_xhr if entry.request.headers.to_s =~ /XMLHttpRequest/\n              end\n            end\n          end\n        end\n      end\n    end.jmx\n  end\nend\n")),(0,a.kt)("p",null,"Now let's put it to use in our Selenium script."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: har.rb\n\n...\n\nHARtoJMX.convert 'selenium.har'\n# the default filename output is `jmeter.jmx`\n")),(0,a.kt)("p",null,"Assuming you've ",(0,a.kt)("a",{parentName:"p",href:"http://jmeter.apache.org/download_jmeter.cgi"},"downloaded a copy of JMeter")," you're ready to run your load test."),(0,a.kt)("p",null,"To execute it from the command-line you'll need to specify the path to the JMeter binary executable, a couple of arguments, and the path to the JMX file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./apache-jmeter-2.11/bin/jmeter -n -t ./jmeter.jmx\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n")," tells JMeter ot run in non-GUI mode, and ",(0,a.kt)("inlineCode",{parentName:"p"},"-t")," is used to specify the path to the JMX file."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Selenium runs the test in Firefox while connected to the proxy server"),(0,a.kt)("li",{parentName:"ul"},"The HTTP Archive (HAR) is exported to a file on disk"),(0,a.kt)("li",{parentName:"ul"},"The HAR file is converted to a JMeter XML (JMX) file"),(0,a.kt)("li",{parentName:"ul"},"JMeter is launched from the command-line and runs using the new JMX file")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Alternatively, you could open up the JMeter GUI, load the JMX file, and add on to it/reconfigure it/etc. This is a ",(0,a.kt)("em",{parentName:"p"},"much")," better place to start from since it saves you loads of up front busy work creating the load test from scratch."),(0,a.kt)("p",null,"From here, it would be pretty trivial to add in a data set (e.g., ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.apache.org/jmeter/JMeterFAQ#How_do_I_parameterize_my_JMeter_test_cases.3F"},"parameterize the test case"),"), increase the number of concurrent users, and change all kinds of simulated user behavior."),(0,a.kt)("p",null,"If you go this route, be sure to take a look at the JMeter Wiki. It's got loads of good information."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:n(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},9417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);