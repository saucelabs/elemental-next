"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={language:"ruby",level:2,hide_sidebar:!0,publish_date:new Date("2015-07-06T00:00:00.000Z"),last_update:{date:new Date("2023-03-02T00:00:00.000Z")}},l=void 0,i={unversionedId:"disabled-element/ruby",id:"disabled-element/ruby",title:"ruby",description:"A Solution",source:"@site/tips/40-disabled-element/ruby.md",sourceDirName:"40-disabled-element",slug:"/disabled-element/ruby",permalink:"/tips/disabled-element/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/40-disabled-element/ruby.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1677715200,formattedLastUpdatedAt:"Mar 2, 2023",frontMatter:{language:"ruby",level:2,hide_sidebar:!0,publish_date:"2015-07-06T00:00:00.000Z",last_update:{date:"2023-03-02T00:00:00.000Z"}}},s={},p=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"If we look at ",(0,r.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/Element.html"},"the API documentation for Selenium's Element class")," we can see there is an available method called ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled?")," that can help us accomplish what we want."),(0,r.kt)("p",null,"Let's take a look at how to use it."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"For this example we will use ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"a dropdown list")," from ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"the-internet"),". In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled."),(0,r.kt)("p",null,"First let's require our dependent libraries (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to control the browser and ",(0,r.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertion) and wire up some simple ",(0,r.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: dropdown_disabled.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\n\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,r.kt)("p",null,"Now let's wire up our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dropdown'\n  dropdowns = @driver.find_elements(tag_name: 'option')\n  item_of_interest = dropdowns.find { |dropdown| dropdown.text == 'Please select an option' }\n  expect(item_of_interest.enabled?).to eql false\nend\n")),(0,r.kt)("p",null,"After loading the page, we find all of the elements that have an option tag (which are all of the items in the dropdown list). This will return an array, so we iterate over the collection and find the item we want based on a text comparison."),(0,r.kt)("p",null,"Once we have the element we want we see if it's enabled (with ",(0,r.kt)("inlineCode",{parentName:"p"},".enabled?"),") and assert based on the response."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"If you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby dropdown_disabled.rb")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open a browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Grab all dropdown list elements and find the one we want by its text"),(0,r.kt)("li",{parentName:"ul"},"Assert that the element is not enabled"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Hopefully this tip has helped make the task of seeing whether or not an element is enabled or disabled more approachable."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);