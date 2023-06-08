"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[21297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={language:"ruby",level:2,hide_sidebar:!0,publish_date:new Date("2015-10-13T00:00:00.000Z"),last_update:{date:new Date("2023-03-06T00:00:00.000Z")}},o=void 0,l={unversionedId:"right-click/ruby",id:"right-click/ruby",title:"ruby",description:"A Solution",source:"@site/docs/63-right-click/ruby.md",sourceDirName:"63-right-click",slug:"/right-click/ruby",permalink:"/docs/right-click/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/63-right-click/ruby.md",tags:[],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1678060800,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{language:"ruby",level:2,hide_sidebar:!0,publish_date:"2015-10-13T00:00:00.000Z",last_update:{date:"2023-03-06T00:00:00.000Z"}}},u={},c=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],s={toc:c},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"By leveraging ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/blob/master/rb/lib/selenium/webdriver/common/action_builder.rb"},"Selenium's Action Builder")," we can issue a right-click command (a.k.a. a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/blob/master/rb/lib/selenium/webdriver/common/action_builder.rb#L301"},(0,a.kt)("inlineCode",{parentName:"a"},"context_click")),")."),(0,a.kt)("p",null,"We can then select an option from the menu by traversing it with keyboard arrow keys (which we can issue with the Action Builder's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/blob/master/rb/lib/selenium/webdriver/common/action_builder.rb#L140"},(0,a.kt)("inlineCode",{parentName:"a"},"send_keys"))," command). For a full write-up on working with keyboard keys in Selenium, see ",(0,a.kt)("a",{parentName:"p",href:"/tips/61-keyboard-keys"},"tip 61"),"."),(0,a.kt)("p",null,"Let's continue with an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's start by pulling in the necessary libraries (",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to control the browser and ",(0,a.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," to perform an assertion) and wiring up some simple ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: right_click.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Now we're ready to write our test."),(0,a.kt)("p",null,"Let's use an example from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that will render a custom context menu when we right-click on a specific area of the page (",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/context_menu"},"link"),"). Clicking the context menu will trigger a JavaScript alert which will say ",(0,a.kt)("inlineCode",{parentName:"p"},"You selected a context menu"),". We'll grab this text and use it to assert that the menu was actually triggered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/context_menu'\n  menu_area = @driver.find_element id: 'hot-spot'\n  @driver.action.context_click(menu_area).send_keys(\n    :arrow_down).send_keys(\n    :arrow_down).send_keys(\n    :arrow_down).send_keys(\n    :enter).perform\n  alert = @driver.switch_to.alert\n  expect(alert.text).to eq('You selected a context menu')\nend\n")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"If we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby right_click.rb"),") from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser and visit the page"),(0,a.kt)("li",{parentName:"ul"},"Find and right-click the area which will render a custom context menu"),(0,a.kt)("li",{parentName:"ul"},"Select the context menu option with keyboard keys"),(0,a.kt)("li",{parentName:"ul"},"JavaScript alert appears"),(0,a.kt)("li",{parentName:"ul"},"Grab the text of the JavaScript alert"),(0,a.kt)("li",{parentName:"ul"},"Assert that the text from the alert is what we expect")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"To learn more about context menus, you can read ",(0,a.kt)("a",{parentName:"p",href:"http://blog.teamtreehouse.com/building-html5-context-menus"},"this write-up from the Tree House blog"),"."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}m.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);