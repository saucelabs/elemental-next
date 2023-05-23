"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),c=l,b=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={title:"40: Disabled Element",id:"40-disabled-element-ruby",contentUrl:"docs/disabled-element/40-disabled-element-ruby",sidebar_label:"Ruby",text:"On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain.",number:40,hide_table_of_contents:!0,publish_date:new Date("2015-07-06T00:00:00.000Z"),last_update:{date:new Date("2023-03-02T00:00:00.000Z")},tags:["dropdown list","dropdown lists","disabled element"],level:2,category:["remote","troubleshooting"],language:"ruby"},o="How to Test For Disabled Elements",i={unversionedId:"disabled-element/40-disabled-element-ruby",id:"disabled-element/40-disabled-element-ruby",title:"40: Disabled Element",description:"Intro",source:"@site/docs/40-disabled-element/ruby.mdx",sourceDirName:"40-disabled-element",slug:"/disabled-element/40-disabled-element-ruby",permalink:"/elemental-next/docs/disabled-element/40-disabled-element-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/40-disabled-element/ruby.mdx",tags:[{label:"dropdown list",permalink:"/elemental-next/docs/tags/dropdown-list"},{label:"dropdown lists",permalink:"/elemental-next/docs/tags/dropdown-lists"},{label:"disabled element",permalink:"/elemental-next/docs/tags/disabled-element"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677715200,formattedLastUpdatedAt:"Mar 2, 2023",frontMatter:{title:"40: Disabled Element",id:"40-disabled-element-ruby",contentUrl:"docs/disabled-element/40-disabled-element-ruby",sidebar_label:"Ruby",text:"On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain.",number:40,hide_table_of_contents:!0,publish_date:"2015-07-06T00:00:00.000Z",last_update:{date:"2023-03-02T00:00:00.000Z"},tags:["dropdown list","dropdown lists","disabled element"],level:2,category:["remote","troubleshooting"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/elemental-next/docs/disabled-element/40-disabled-element-python"},next:{title:"Ruby",permalink:"/elemental-next/docs/exception-handling/ruby"}},d={},s=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-test-for-disabled-elements"},"How to Test For Disabled Elements"),(0,l.kt)("h2",{id:"intro"},"Intro"),(0,l.kt)("p",null,"On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain."),(0,l.kt)("h2",{id:"a-solution"},"A Solution"),(0,l.kt)("p",null,"If we look at ",(0,l.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/Element.html"},"the API documentation for Selenium's Element class")," we can see there is an available method called ",(0,l.kt)("inlineCode",{parentName:"p"},"enabled?")," that can help us accomplish what we want."),(0,l.kt)("p",null,"Let's take a look at how to use it."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"For this example we will use ",(0,l.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"a dropdown list")," from ",(0,l.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"the-internet"),". In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled."),(0,l.kt)("p",null,"First let's require our dependent libraries (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to control the browser and ",(0,l.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertion) and wire up some simple ",(0,l.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: dropdown_disabled.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\n\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,l.kt)("p",null,"Now let's wire up our test."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dropdown'\n  dropdowns = @driver.find_elements(tag_name: 'option')\n  item_of_interest = dropdowns.find { |dropdown| dropdown.text == 'Please select an option' }\n  expect(item_of_interest.enabled?).to eql false\nend\n")),(0,l.kt)("p",null,"After loading the page, we find all of the elements that have an option tag (which are all of the items in the dropdown list). This will return an array, so we iterate over the collection and find the item we want based on a text comparison."),(0,l.kt)("p",null,"Once we have the element we want we see if it's enabled (with ",(0,l.kt)("inlineCode",{parentName:"p"},".enabled?"),") and assert based on the response."),(0,l.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,l.kt)("p",null,"If you save this file and run it (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"ruby dropdown_disabled.rb")," from the command-line) here is what will happen:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open a browser"),(0,l.kt)("li",{parentName:"ul"},"Visit the page"),(0,l.kt)("li",{parentName:"ul"},"Grab all dropdown list elements and find the one we want by its text"),(0,l.kt)("li",{parentName:"ul"},"Assert that the element is not enabled"),(0,l.kt)("li",{parentName:"ul"},"Close the browser")),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"Hopefully this tip has helped make the task of seeing whether or not an element is enabled or disabled more approachable."),(0,l.kt)("p",null,"Happy Testing!"),(0,l.kt)("h2",{id:"about-the-author"},"About The Author"),(0,l.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,l.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);