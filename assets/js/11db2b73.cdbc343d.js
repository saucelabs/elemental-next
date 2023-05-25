"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6337],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=u(r),c=o,m=p["".concat(s,".").concat(c)]||p[c]||d[c]||a;return r?n.createElement(m,i(i({ref:t},h),{},{components:r})):n.createElement(m,i({ref:t},h))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6727:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"How To Work With Hovers",id:"50-hovers-ruby",contentUrl:"docs/how-to-work-with-hovers/50-hovers-ruby",sidebar_label:"Ruby",text:"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution.",number:50,hide_table_of_contents:!0,publish_date:new Date("2015-07-01T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["hover","hovers","action builder"],level:1,category:["fundamentals"],language:"ruby"},i="How to Work with Hovers",l={unversionedId:"how-to-work-with-hovers/50-hovers-ruby",id:"how-to-work-with-hovers/50-hovers-ruby",title:"How To Work With Hovers",description:"Intro",source:"@site/docs/50-how-to-work-with-hovers/ruby.mdx",sourceDirName:"50-how-to-work-with-hovers",slug:"/how-to-work-with-hovers/50-hovers-ruby",permalink:"/elemental-next/docs/how-to-work-with-hovers/50-hovers-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/50-how-to-work-with-hovers/ruby.mdx",tags:[{label:"hover",permalink:"/elemental-next/docs/tags/hover"},{label:"hovers",permalink:"/elemental-next/docs/tags/hovers"},{label:"action builder",permalink:"/elemental-next/docs/tags/action-builder"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"How To Work With Hovers",id:"50-hovers-ruby",contentUrl:"docs/how-to-work-with-hovers/50-hovers-ruby",sidebar_label:"Ruby",text:"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution.",number:50,hide_table_of_contents:!0,publish_date:"2015-07-01T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["hover","hovers","action builder"],level:1,category:["fundamentals"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/elemental-next/docs/how-to-work-with-hovers/50-hovers-python"},next:{title:"Csharp",permalink:"/elemental-next/docs/how-to-work-with-javascript-alerts/51-javascript-alerts-csharp"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],h={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-work-with-hovers"},"How to Work with Hovers"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"The most popular use case for a hover action is to display additional menu options(submenu.)"),(0,o.kt)("p",null,"By leveraging Selenium's ",(0,o.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/ActionBuilder.html"},"Actions")," we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Our example application is available ",(0,o.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/hovers"},"here")," on ",(0,o.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile."),(0,o.kt)("p",null,"We're going to write a test that will hover over the first avatar and make sure that this additional information appears."),(0,o.kt)("p",null,"First, we'll want to include our requisite libraries (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to control the browser, and ",(0,o.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertion) and wire up some ",(0,o.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: hover.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,o.kt)("p",null,"Now let's write our test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/hovers'\n  an_avatar = @driver.find_element(class: 'figure')\n  @driver.action.move_to(an_avatar).perform\n  expect(@driver.find_element(class: 'figcaption').displayed?).to eql true\nend\n")),(0,o.kt)("p",null,"After loading the page we find the first avatar and store it in a variable (",(0,o.kt)("inlineCode",{parentName:"p"},"an_avatar"),"). We then use Selenium's ",(0,o.kt)("inlineCode",{parentName:"p"},"action.move_to")," method and feed the avatar variable to it (which triggers the hover)."),(0,o.kt)("p",null,"We then check to see if the additional user information is displayed with ",(0,o.kt)("inlineCode",{parentName:"p"},".displayed?")," and wrap that in an assertion."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"If we save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby hover.rb")," from the command-line) here is what will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the browser"),(0,o.kt)("li",{parentName:"ul"},"Visit the page"),(0,o.kt)("li",{parentName:"ul"},"Hover over the first avatar"),(0,o.kt)("li",{parentName:"ul"},"Assert that the caption appeared on the page"),(0,o.kt)("li",{parentName:"ul"},"Close the browser")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Hopefully this will help you handle more complex user interactions like hovers."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dave Haeffner profile picture",src:r(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}d.isMDXComponent=!0},9417:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);