"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),g=o,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"53: Growl",id:"53-growl-ruby",contentUrl:"docs/growl/53-growl-ruby",sidebar_label:"Ruby",text:"Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece all for the sake of trying to track down a transient issue.",number:53,hide_table_of_contents:!0,publish_date:new Date("2016-11-22T00:00:00.000Z"),last_update:{date:new Date("2023-03-25T00:00:00.000Z")},tags:["jquery","growl","growl notifications","jquery-growl"],level:2,category:["troubleshooting"],language:"ruby"},i="How to Add Growl Notifications to Your Tests",l={unversionedId:"growl/53-growl-ruby",id:"growl/53-growl-ruby",title:"53: Growl",description:"Intro",source:"@site/docs/53-growl/ruby.md",sourceDirName:"53-growl",slug:"/growl/53-growl-ruby",permalink:"/elemental-next/docs/growl/53-growl-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/53-growl/ruby.md",tags:[{label:"jquery",permalink:"/elemental-next/docs/tags/jquery"},{label:"growl",permalink:"/elemental-next/docs/tags/growl"},{label:"growl notifications",permalink:"/elemental-next/docs/tags/growl-notifications"},{label:"jquery-growl",permalink:"/elemental-next/docs/tags/jquery-growl"}],version:"current",frontMatter:{title:"53: Growl",id:"53-growl-ruby",contentUrl:"docs/growl/53-growl-ruby",sidebar_label:"Ruby",text:"Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece all for the sake of trying to track down a transient issue.",number:53,hide_table_of_contents:!0,publish_date:"2016-11-22T00:00:00.000Z",last_update:{date:"2023-03-25T00:00:00.000Z"},tags:["jquery","growl","growl notifications","jquery-growl"],level:2,category:["troubleshooting"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/elemental-next/docs/growl/53-growl-python"},next:{title:"Ruby",permalink:"/elemental-next/docs/wrapper/55-wrapper-ruby"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-add-growl-notifications-to-your-tests"},"How to Add Growl Notifications to Your Tests"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece -- all for the sake of trying to track down a transient issue."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"By leveraging something like ",(0,o.kt)("a",{parentName:"p",href:"http://ksylvest.github.io/jquery-growl/"},"jQuery Growl")," you can output non-interactive debugging statements directly to the page you're testing."),(0,o.kt)("p",null,"With Growl way you can see helpful information and more-likely correlate it to the test actions that are being taken. This can a boon for your test runs when coupled with screenshots and/or video recordings of your test runs"),(0,o.kt)("p",null,"Let's step through an example of how to set this up."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"First, we'll include our requisite libraries and wire up some simple ",(0,o.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: growl.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,o.kt)("p",null,"Now for our test. We'll need to visit the page we want to display notifications on and do some work with JavaScript to load ",(0,o.kt)("a",{parentName:"p",href:"http://jquery.com/"},"jQuery"),", jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n\n  # Step 1: check for jQuery on the page, add it if needbe\n  @driver.execute_script(\n    \"if (!window.jQuery) {\n    var jquery = document.createElement('script');\n    jquery.type = 'text/javascript';\n    jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';\n    document.getElementsByTagName('head')[0].appendChild(jquery);\n    }\")\n\n  # Step 2: use jQuery to add jquery-growl to the page\n  @driver.execute_script(\"$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')\")\n\n  # Step 3: use jQuery to add jquery-growl styles to the page\n  @driver.execute_script(\"$('head').append('<link rel=\\\"stylesheet\\\" href=\\\"http://the-internet.herokuapp.com/css/jquery.growl.css\\\" type=\\\"text/css\\\" />');\")\n\n  sleep 5 # adding 5 seconds sleep\n\n  # Step 4: display a message with jquery-growl\n  @driver.execute_script(\"$.growl({ title: 'GET', message: '/' });\")\n\n  sleep 5 # to keep the browser active long enough to see the notifications\nend\n")),(0,o.kt)("p",null,"And if we wanted to see color-coded notifications, then we could use one of the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"  @driver.execute_script(\"$.growl.error({ title: 'ERROR', message: 'your error message goes here' });\")\n  @driver.execute_script(\"$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });\")\n  @driver.execute_script(\"$.growl.warning({ title: 'Warning!', message: 'your warning message goes here' });\")\n")),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Browser opens"),(0,o.kt)("li",{parentName:"ul"},"Load the page"),(0,o.kt)("li",{parentName:"ul"},"Add jQuery, jQuery Growl, and jQuery Growl notifications to the page"),(0,o.kt)("li",{parentName:"ul"},"Display a set of notification messages in the top-right corner of the page"),(0,o.kt)("li",{parentName:"ul"},"Notification messages disappear"),(0,o.kt)("li",{parentName:"ul"},"Browser closes")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this then that's the price you have to pay (unless you can get your team to add it to the application under test)."),(0,o.kt)("p",null,"In a future tip I'll step through how to access Selenium logging output so we can wire it up to these notifications."),(0,o.kt)("p",null,"I'd like to give a big thanks to Jon Austen (",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/austenjt"},"Twitter"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/djangofan"},"GitHub"),") for giving me the idea to use jQuery Growl with Selenium."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);