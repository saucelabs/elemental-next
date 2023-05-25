"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Blacklist",id:"66-blacklist-ruby",contentUrl:"docs/blacklist/66-blacklist-ruby",sidebar_label:"Ruby",text:"There are plenty of external resources that get loaded onto a page that aren't directly relevant to the functionality you're testing (e.g., Facebook widgets, Analytics, JavaScript snippets, etc.). And these external resources have the potential to negatively impact your test runs due to slow load times.",number:66,hide_table_of_contents:!0,publish_date:new Date("2015-10-20T00:00:00.000Z"),last_update:{date:new Date("2023-04-06T00:00:00.000Z")},tags:["browsermob-proxy","proxy"],level:3,category:["troubleshooting"],language:"ruby"},l="How to Remove Third-Party Resources",i={unversionedId:"blacklist/66-blacklist-ruby",id:"blacklist/66-blacklist-ruby",title:"Blacklist",description:"Intro",source:"@site/docs/66-blacklist/ruby.mdx",sourceDirName:"66-blacklist",slug:"/blacklist/66-blacklist-ruby",permalink:"/elemental-next/docs/blacklist/66-blacklist-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/66-blacklist/ruby.mdx",tags:[{label:"browsermob-proxy",permalink:"/elemental-next/docs/tags/browsermob-proxy"},{label:"proxy",permalink:"/elemental-next/docs/tags/proxy"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1680739200,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{title:"Blacklist",id:"66-blacklist-ruby",contentUrl:"docs/blacklist/66-blacklist-ruby",sidebar_label:"Ruby",text:"There are plenty of external resources that get loaded onto a page that aren't directly relevant to the functionality you're testing (e.g., Facebook widgets, Analytics, JavaScript snippets, etc.). And these external resources have the potential to negatively impact your test runs due to slow load times.",number:66,hide_table_of_contents:!0,publish_date:"2015-10-20T00:00:00.000Z",last_update:{date:"2023-04-06T00:00:00.000Z"},tags:["browsermob-proxy","proxy"],level:3,category:["troubleshooting"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/highlight-elements/65-highlight-elements-ruby"},next:{title:"Ruby",permalink:"/elemental-next/docs/broken-images/67-broken-images-ruby"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-remove-third-party-resources"},"How to Remove Third-Party Resources"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"There are plenty of external resources that get loaded onto a page that aren't directly relevant to the functionality you're testing (e.g., Facebook widgets, Analytics, JavaScript snippets, etc.). And these external resources have the potential to negatively impact your test runs due to slow load times."),(0,a.kt)("p",null,"So how do you protect your tests from these things that are outside of your control?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"By leveraging a proxy server in our tests we can block the external resources we don't want to load by adding them to a blacklist."),(0,a.kt)("p",null,"Let's continue with an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: For a brief primer on proxy servers check out ",(0,a.kt)("a",{parentName:"strong",href:"/tips/64-limit-bandwidth"},"tip 64"),".")),(0,a.kt)("p",null,"To get started we'll need to download a copy of Browsermob Proxy (",(0,a.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"link"),") and write our script. In it we'll pull in our requisite libraries (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"browsermob/proxy")," to control the proxy server, ",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, and ",(0,a.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and it's matchers to perform assertions)."),(0,a.kt)("p",null,"After that, we'll configure the proxy server and wire up some simple ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods. As part of ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," we'll want to configure the blacklist. To do that we'll add a regular expression to find the resource we want to block and the status code we'd like the resource to be changed to (e.g., blocking a resource from loading with a ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," response code and having it return a ",(0,a.kt)("inlineCode",{parentName:"p"},"404")," instead)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: blacklist.rb\n\nrequire 'browsermob/proxy'\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef configure_proxy\n  server = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.0-beta-9/bin/browsermob-proxy')\n  server.start\n  @proxy = server.create_proxy\n  profile = Selenium::WebDriver::Firefox::Profile.new\n  profile.proxy = @proxy.selenium_proxy\n  return profile\nend\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox, profile: configure_proxy\n  @proxy.blacklist('http:\\/\\/the-internet.herokuapp.com\\/slow_external', 404)\nend\n\ndef teardown\n  @driver.quit\n  @proxy.close\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Now we're ready to wire up our test. Let's use an example from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that has a slow loading resource. It has a rogue ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," request that takes 30 seconds to load. You can see it ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/slow"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @proxy.new_har\n  @driver.get 'http://the-internet.herokuapp.com/slow'\n  entry = @proxy.har.entries.find { |e| e.request.url.include? 'slow_external' }\n  expect(entry).not_to be_nil\n  expect(entry.response.status).to eq(404)\nend\n")),(0,a.kt)("p",null,"We start the test by creating a new HTTP Archive (HAR) for tracking the page requests. We then load the example page, find the entry for the slow loading resource from the HAR, and assert that the response code for it is ",(0,a.kt)("inlineCode",{parentName:"p"},"404"),"."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"If you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby blacklist.rb")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Proxy server starts"),(0,a.kt)("li",{parentName:"ul"},"Proxy server session created"),(0,a.kt)("li",{parentName:"ul"},"Browser opens"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Find the entry we want from the HTTP Archive"),(0,a.kt)("li",{parentName:"ul"},"Check that the HTTP status code for the entry has the correct status code from the blacklist"),(0,a.kt)("li",{parentName:"ul"},"Browser closes"),(0,a.kt)("li",{parentName:"ul"},"Proxy session closes")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this helps you with blocking external resources that you don't want to load during testing."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:r(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}d.isMDXComponent=!0},9417:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);