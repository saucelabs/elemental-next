"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(b,o(o({ref:t},m),{},{components:n})):r.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"67: Broken Images",id:"67-broken-images-ruby",contentUrl:"docs/broken-images/67-broken-images-ruby",sidebar_label:"Ruby",text:"Selenium is built to mimic human action (e.g., clicking, typing, dragging, dropping, etc.). So how do you use it to test for broken images?",number:67,hide_table_of_contents:!0,publish_date:new Date("2015-10-20T00:00:00.000Z"),last_update:{date:new Date("2023-04-06T00:00:00.000Z")},tags:["broken image","broken images","proxy","browsermob-proxy","http library","javascript"],level:3,category:["troubleshooting"],language:"ruby"},o="How to Test for Broken Images",l={unversionedId:"broken-images/67-broken-images-ruby",id:"broken-images/67-broken-images-ruby",title:"67: Broken Images",description:"Intro",source:"@site/docs/67-broken-images/67-broken-images-ruby.md",sourceDirName:"67-broken-images",slug:"/broken-images/67-broken-images-ruby",permalink:"/elemental-next/docs/broken-images/67-broken-images-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/67-broken-images/67-broken-images-ruby.md",tags:[{label:"broken image",permalink:"/elemental-next/docs/tags/broken-image"},{label:"broken images",permalink:"/elemental-next/docs/tags/broken-images"},{label:"proxy",permalink:"/elemental-next/docs/tags/proxy"},{label:"browsermob-proxy",permalink:"/elemental-next/docs/tags/browsermob-proxy"},{label:"http library",permalink:"/elemental-next/docs/tags/http-library"},{label:"javascript",permalink:"/elemental-next/docs/tags/javascript"}],version:"current",lastUpdatedBy:"Rajene Harris",lastUpdatedAt:1680739200,formattedLastUpdatedAt:"Apr 6, 2023",sidebarPosition:67,frontMatter:{title:"67: Broken Images",id:"67-broken-images-ruby",contentUrl:"docs/broken-images/67-broken-images-ruby",sidebar_label:"Ruby",text:"Selenium is built to mimic human action (e.g., clicking, typing, dragging, dropping, etc.). So how do you use it to test for broken images?",number:67,hide_table_of_contents:!0,publish_date:"2015-10-20T00:00:00.000Z",last_update:{date:"2023-04-06T00:00:00.000Z"},tags:["broken image","broken images","proxy","browsermob-proxy","http library","javascript"],level:3,category:["troubleshooting"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/blacklist/66-blacklist-ruby"},next:{title:"Ruby",permalink:"/elemental-next/docs/load-testing-revisited/68-load-testing-revisited-ruby"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1 - A Proxy Example",id:"example-1---a-proxy-example",level:2},{value:"Example 2 - An HTTP Library Example",id:"example-2---an-http-library-example",level:2},{value:"Example 3 - A JavaScript Example",id:"example-3---a-javascript-example",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-test-for-broken-images"},"How to Test for Broken Images"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Selenium is built to mimic human action (e.g., clicking, typing, dragging, dropping, etc.). So how do you use it to test for broken images?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"Out of the box, Selenium is not equipped to handle this. But regardless, there are several ways to accomplish this."),(0,a.kt)("p",null,"We can use..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a proxy server"),(0,a.kt)("li",{parentName:"ul"},"an HTTP library"),(0,a.kt)("li",{parentName:"ul"},"JavaScript")),(0,a.kt)("p",null,"Lets look at an example of each."),(0,a.kt)("h2",{id:"example-1---a-proxy-example"},"Example 1 - A Proxy Example"),(0,a.kt)("p",null,"In this example we'll use Browsermob Proxy. For a primer on what this is and how to use it see ",(0,a.kt)("a",{parentName:"p",href:"/tips/64-limit-bandwidth"},"tip 64"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: broken_image_1.rb\n\nrequire 'browsermob/proxy'\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef configure_proxy\n  server = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.0-beta-9/bin/browsermob-proxy')\n  server.start\n  @proxy = server.create_proxy\n  profile = Selenium::WebDriver::Firefox::Profile.new\n  profile.proxy = @proxy.selenium_proxy\n  return profile\nend\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox, profile: configure_proxy\nend\n\ndef teardown\n  @driver.quit\n  @proxy.close\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @proxy.new_har\n\n  @driver.get 'http://the-internet.herokuapp.com/broken_images'\n\n  all_images = @driver.find_elements(tag_name: 'img')\n\n  broken_images = []\n  all_images.each do |img|\n    broken_images << @proxy.har.entries.find do |entry|\n      entry.request.url == img.attribute('src') && entry.response.status == 404\n    end\n  end\n\n  expect(broken_images).to be_empty\nend\n")),(0,a.kt)("p",null,"If you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby broken_image_1.rb"),") here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Proxy server starts"),(0,a.kt)("li",{parentName:"ul"},"Proxy server session created"),(0,a.kt)("li",{parentName:"ul"},"Browser opens"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Iterate through each image in the HTTP Archive and see if it has a ",(0,a.kt)("inlineCode",{parentName:"li"},"404")," status code"),(0,a.kt)("li",{parentName:"ul"},"Store each broken image in a collection"),(0,a.kt)("li",{parentName:"ul"},"Check that the broken images collection is empty")),(0,a.kt)("h2",{id:"example-2---an-http-library-example"},"Example 2 - An HTTP Library Example"),(0,a.kt)("p",null,"For this example, we'll use a simple HTTP library called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rest-client/rest-client"},(0,a.kt)("inlineCode",{parentName:"a"},"rest-client")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: broken_image_2.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  require 'rest-client'\n\n  @driver.get 'http://the-internet.herokuapp.com/broken_images'\n\n  all_images = @driver.find_elements(tag_name: 'img')\n\n  all_images.each do |img|\n    RestClient.get img.attribute('src') do |response, request, result|\n      expect(response.code).to eq 200\n    end\n  end\n\nend\n")),(0,a.kt)("p",null,"If you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby broken_images_2.rb")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Find all images on the page"),(0,a.kt)("li",{parentName:"ul"},"Iterate through each image"),(0,a.kt)("li",{parentName:"ul"},"Perform a ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," request on the image and grab it's response status code"),(0,a.kt)("li",{parentName:"ul"},"Assert that the status code is ",(0,a.kt)("inlineCode",{parentName:"li"},"200")),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("p",null,"By using an HTTP library we get the same outcome as we saw with a proxy server. There are additional requests being made but it's substantially faster since it has less overhead."),(0,a.kt)("h2",{id:"example-3---a-javascript-example"},"Example 3 - A JavaScript Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: broken_image_3.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/broken_images'\n\n  all_images = @driver.find_elements tag_name: 'img'\n\n  broken_images = all_images.reject do |image|\n    @driver.execute_script(\n      \"return arguments[0].complete && \\\n        typeof arguments[0].naturalWidth != \\\"undefined\\\" && \\\n        arguments[0].naturalWidth > 0\",\n      image)\n  end\n\n  expect(broken_images).to be_empty\nend\n")),(0,a.kt)("p",null,"If you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"broken_image_3.rb")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Find all images on the page"),(0,a.kt)("li",{parentName:"ul"},"Iterate through each image and inspect that it finished loading and has a defined width"),(0,a.kt)("li",{parentName:"ul"},"Store images that fail inspection in a collection"),(0,a.kt)("li",{parentName:"ul"},"Assert that the collection is empty")),(0,a.kt)("p",null,"This is the leanest approach since it requires no additional setup or extra requests. It's just a matter of executing some JavaScript code to inspect the images."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Your circumstance may vary, so choose the approach that works best for you and your team."),(0,a.kt)("p",null,"A big thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/bbbco"},"Brian Goad")," for the JavaScript solution and pointing me towards ",(0,a.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/16784534/find-broken-images-in-page-image-replace-by-another-image/"},"the StackOverflow post where he first came across this"),"."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);