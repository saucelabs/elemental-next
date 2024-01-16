"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1004],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={language:"ruby",level:3,hide_sidebar:!0,publish_date:new Date("2015-10-15T00:00:00.000Z"),last_update:{date:new Date("2023-04-06T00:00:00.000Z")}},i=void 0,s={unversionedId:"retrieve-http-status-codes/ruby",id:"retrieve-http-status-codes/ruby",title:"ruby",description:"A Solution",source:"@site/docs/17-retrieve-http-status-codes/ruby.md",sourceDirName:"17-retrieve-http-status-codes",slug:"/retrieve-http-status-codes/ruby",permalink:"/docs/retrieve-http-status-codes/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/17-retrieve-http-status-codes/ruby.md",tags:[],version:"current",lastUpdatedBy:"Esther",lastUpdatedAt:1680739200,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{language:"ruby",level:3,hide_sidebar:!0,publish_date:"2015-10-15T00:00:00.000Z",last_update:{date:"2023-04-06T00:00:00.000Z"}}},p={},l=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"The tried and true approach that Selenium Committers and Practitioners recommend is to use a proxy server. With it, you will be able to watch and manipulate network traffic to and from the application you're testing. Thus giving you access to a whole host of functionality that isn't available otherwise."),(0,a.kt)("p",null,"Let's step through an example using ",(0,a.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"BrowserMob Proxy"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First we need to download a copy of ",(0,a.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"BrowserMob Proxy"),"."),(0,a.kt)("p",null,"Next we'll create a script and pull in our requisite libraries (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, ",(0,a.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and it's matchers for our assertion, and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jarib/browsermob-proxy-rb"},(0,a.kt)("inlineCode",{parentName:"a"},"browsermob/proxy"))," library to control the proxy server)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: status_codes.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\nrequire 'browsermob/proxy'\n")),(0,a.kt)("p",null,"Now let's create a method to prepare the proxy for use with Selenium. In it we start the proxy server, configure a browser profile to use it (for Firefox in this case), and return the profile object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def configure_proxy\n  server = BrowserMob::Proxy::Server.new(\n    File.join(Dir.pwd, 'browsermob-proxy-2.0.0/bin/browsermob-proxy'))\n  @proxy = server.start.create_proxy\n  profile = Selenium::WebDriver::Firefox::Profile.new\n  profile.proxy = @proxy.selenium_proxy\n  profile\nend\n")),(0,a.kt)("p",null,"Next we wire up some simple ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods to handle our test configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def setup\n  @driver = Selenium::WebDriver.for :firefox, profile: configure_proxy\nend\n\ndef teardown\n  @driver.quit\n  @proxy.close\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"configure_proxy")," method when specifying the profile object. And we close the proxy in ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown")," (after quitting the Selenium session)."),(0,a.kt)("p",null,"Now let's create a helper method to pull the status code out of the browser's ",(0,a.kt)("a",{parentName:"p",href:"http://www.softwareishard.com/blog/har-12-spec/"},"HTTP Archive")," (a.k.a. HAR) when an action is performed on the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def retrieve_status_code\n  @proxy.new_har\n  yield\n  @proxy.har.entries.first.response.status\nend\n")),(0,a.kt)("p",null,"Now we're ready to wire up our test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  status_code = retrieve_status_code do\n    @driver.get 'http://the-internet.herokuapp.com/status_codes/404'\n  end\n\n  expect(status_code).to eql 404\nend\n")),(0,a.kt)("p",null,"When visiting the page we are passing the Selenium command to the ",(0,a.kt)("inlineCode",{parentName:"p"},"retrieve_status_code")," method which returns the HTTP response code. We store this in a ",(0,a.kt)("inlineCode",{parentName:"p"},"status_code")," variable and use it to check that the response code is what we expect (",(0,a.kt)("inlineCode",{parentName:"p"},"404"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," If you get an error when running your test, be sure to append ",(0,a.kt)("inlineCode",{parentName:"p"},"log: true")," when creating an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Browsermob::Proxy::Server"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"  server = BrowserMob::Proxy::Server.new(\n    File.join(Dir.pwd, 'browsermob-proxy-2.0.0/bin/browsermob-proxy'), log: true)\n")),(0,a.kt)("p",null,"Now when you run your test, you will see more detailed information as to why the server was unable to start."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"If you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby status_codes.rb")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Proxy server starts"),(0,a.kt)("li",{parentName:"ul"},"Proxy server session created"),(0,a.kt)("li",{parentName:"ul"},"Browser opens"),(0,a.kt)("li",{parentName:"ul"},"Visit the URL"),(0,a.kt)("li",{parentName:"ul"},"Retrieve the HTTP Status Code from loading the page"),(0,a.kt)("li",{parentName:"ul"},"Check that the status code is what was expected"),(0,a.kt)("li",{parentName:"ul"},"Browser closes"),(0,a.kt)("li",{parentName:"ul"},"Proxy session closes")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This tip was inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/jimevansmusic"},"Jim Evans'")," multi-part blog post series on doing the same thing in C# with Fiddler (",(0,a.kt)("a",{parentName:"p",href:"http://jimevansmusic.blogspot.com/2013/08/implementing-webdriver-http-status.html"},"1"),", ",(0,a.kt)("a",{parentName:"p",href:"http://jimevansmusic.blogspot.com/2013/08/implementing-http-status-codes-in.html"},"2"),", ",(0,a.kt)("a",{parentName:"p",href:"http://jimevansmusic.blogspot.com/2013/08/implementing-http-status-codes-in_17.html"},"3"),") which was in response to ",(0,a.kt)("a",{parentName:"p",href:"https://code.google.com/p/selenium/issues/detail?id=141"},"Selenium Issue 141"),". Thanks Jim!"),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);