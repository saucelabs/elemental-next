"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[93353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={language:"ruby",level:2,hide_sidebar:!0,publish_date:new Date("2013-07-30T00:00:00.000Z"),last_update:{date:new Date("2023-02-27T00:00:00.000Z")}},o=void 0,s={unversionedId:"retry-test-actions/ruby",id:"retry-test-actions/ruby",title:"ruby",description:"A Solution",source:"@site/docs/10-retry-test-actions/ruby.md",sourceDirName:"10-retry-test-actions",slug:"/retry-test-actions/ruby",permalink:"/docs/retry-test-actions/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/10-retry-test-actions/ruby.md",tags:[],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677456e3,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{language:"ruby",level:2,hide_sidebar:!0,publish_date:"2013-07-30T00:00:00.000Z",last_update:{date:"2023-02-27T00:00:00.000Z"}}},l={},u=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"Rather than have your tests fail intermittently for reasons that don't actually reflect an issue in your application (or that are really difficult to track down), we'd like to trigger a context specific retry for a specific set of actions (rather than the whole test) that will back-off after a few attempts."),(0,r.kt)("p",null,"If it finds what it needs, the tests passes. If it doesn't, the test fails -- and you know you have a legitimate problem on your hands."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The example application is a page that displays a notification message at the top of the page. It will either say ",(0,r.kt)("strong",{parentName:"p"},"Action successful")," or ",(0,r.kt)("strong",{parentName:"p"},"Action unsuccessful, please try again"),". You can see it ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/notification_message"},"here"),"."),(0,r.kt)("p",null,"Our goal in this example is verify an ",(0,r.kt)("strong",{parentName:"p"},"Action successful")," message."),(0,r.kt)("p",null,"The beginning of our test script starts off simply with accessing our libraries (Selenium and RSpec) and creating our setup, teardown, and run actions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'selenium-webdriver'\nrequire 'rspec/expectations'\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,r.kt)("p",null,"A first pass at this example would look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run {\n  @driver.get 'http://the-internet.herokuapp.com/notification_message'\n  notification_message = @driver.find_element(id: 'flash').text\n  notification_message =~ /Action successful/\n}\n")),(0,r.kt)("p",null,"The problem with this approach is that it will fail intermittently because the page's notification message could very well be something else. But the next time you load it, it could be the correct thing."),(0,r.kt)("p",null,"Perhaps something like this would be better suited:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def get_notification_message\n  @notification_message = @driver.find_element(id: 'flash').text\nend\n\ndef retry_if_notification_message_contains(fail_message)\n  count = 0\n  yield\n  until !@notification_message.include? fail_message || count == 3\n    yield\n    count =+ 1\n  end\nend\n\nrun {\n  retry_if_notification_message_contains 'please try again' do\n    @driver.get 'http://the-internet.herokuapp.com/notification_message'\n    get_notification_message\n  end\n  @notification_message =~ /Action successful/\n}\n")),(0,r.kt)("p",null,"In this approach we have abstracted out the text grab of the notification message into a method which sets what it finds into an instance variable. And we've added a new method called ",(0,r.kt)("inlineCode",{parentName:"p"},"retry_if_notification_message_contains")," that accepts an argument of ",(0,r.kt)("inlineCode",{parentName:"p"},"fail_message"),". In it we accept a yield in 2 places and have constructed a simple loop that runs 3 times or until the notification message does not match the ",(0,r.kt)("inlineCode",{parentName:"p"},"fail_message"),", whichever comes first. And the yields will execute whatever code is passed both before and during the loop."),(0,r.kt)("p",null,"In the run block we pass our navigation and text grab actions as a block into ",(0,r.kt)("inlineCode",{parentName:"p"},"retry_if_notification_message_contains"),", passing the failure message of ",(0,r.kt)("strong",{parentName:"p"},"please try again")," as the argument for ",(0,r.kt)("inlineCode",{parentName:"p"},"fail_message")," to receive."),(0,r.kt)("p",null,"And we top everything off with an assertion."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Load the page"),(0,r.kt)("li",{parentName:"ul"},"Grab the notification message text"),(0,r.kt)("li",{parentName:"ul"},"Compare it to the failure message"),(0,r.kt)("li",{parentName:"ul"},"If it matches, retry"),(0,r.kt)("li",{parentName:"ul"},"If 3 retries attempted, end loop, and fail test"),(0,r.kt)("li",{parentName:"ul"},"If it doesn't match, pass the test")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"With this approach there may be a concern that we could be obfuscating a real issue that could bubble up to our users. That's why it is important to use this approach sparingly, and on issues you more or less understand (e.g. a third-party test environment having one-off service blips, or expensive tests that involve sharing something to a third-party and checking to see that it appeared)."),(0,r.kt)("p",null,"Hopefully this example will help you build a more resilient and relevant set of tests."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}d.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);