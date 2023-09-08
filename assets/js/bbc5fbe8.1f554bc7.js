"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>w,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},w=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,w=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=i,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||a;return n?r.createElement(h,o(o({ref:t},w),{},{components:n})):r.createElement(h,o({ref:t},w))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={language:"ruby",level:2,hide_sidebar:!0,publish_date:new Date("2015-08-21T00:00:00.000Z"),last_update:{date:new Date("2023-02-27T00:00:00.000Z")}},o=void 0,l={unversionedId:"work-with-multiple-windows/ruby",id:"work-with-multiple-windows/ruby",title:"ruby",description:"Example 1",source:"@site/docs/4-work-with-multiple-windows/ruby.md",sourceDirName:"4-work-with-multiple-windows",slug:"/work-with-multiple-windows/ruby",permalink:"/docs/work-with-multiple-windows/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4-work-with-multiple-windows/ruby.md",tags:[],version:"current",lastUpdatedBy:"discombobulateme",lastUpdatedAt:1677456e3,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{language:"ruby",level:2,hide_sidebar:!0,publish_date:"2015-08-21T00:00:00.000Z",last_update:{date:"2023-02-27T00:00:00.000Z"}}},s={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],w={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("p",null,"First, let's pull in our requisite libraries (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to control the browser and ",(0,i.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertions) and add some simple ",(0,i.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: new_window.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,i.kt)("p",null,"Now let's write a test that exercises new window functionality from an application. In this case, we'll be using ",(0,i.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/windows"},"the new window example")," found on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: new_window.rb\n\n# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/windows'\n  @driver.find_element(css: '.example a').click\n  @driver.switch_to.window(@driver.window_handles.first)\n  expect(@driver.title).not_to eql 'New Window'\n  @driver.switch_to.window(@driver.window_handles.last)\n  expect(@driver.title).to eql 'New Window'\nend\n")),(0,i.kt)("p",null,"After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the last one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window."),(0,i.kt)("p",null,"While this may seem like a good approach, it can present problems later. That's because the order of the window handles is not consistent across all browsers. Some return in the order opened, others alphabetically."),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,"Here's a more resilient approach. One that will work across all browsers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: new_window.rb\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/windows'\n\n  first_window = @driver.window_handle\n  @driver.find_element(css: '.example a').click\n  all_windows = @driver.window_handles\n  new_window = all_windows.select { |this_window| this_window != first_window }\n\n  @driver.switch_to.window(first_window)\n  expect(@driver.title).not_to eql 'New Window'\n\n  @driver.switch_to.window(new_window)\n  expect(@driver.title).to eql 'New Window'\nend\n")),(0,i.kt)("p",null,"After loading the page we store the window handle in a variable (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"first_window"),") and then proceed with clicking the new window link."),(0,i.kt)("p",null,"Now that we have two windows open we grab all of the window handles and search through them to find the new window handle (e.g., the handle that doesn't match the first one we've already stored). We store the result in another variable (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"second_window"),") and then switch between the windows. Each time checking the page title to make sure the correct window is in focus."),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the browser"),(0,i.kt)("li",{parentName:"ul"},"Visit the page"),(0,i.kt)("li",{parentName:"ul"},"Find the window handle for the current window"),(0,i.kt)("li",{parentName:"ul"},"Click a link that opens a new window"),(0,i.kt)("li",{parentName:"ul"},"Find the window handle out of all available window handles"),(0,i.kt)("li",{parentName:"ul"},"Switch between the windows"),(0,i.kt)("li",{parentName:"ul"},"Assert that the correct window is in focus"),(0,i.kt)("li",{parentName:"ul"},"Close the browser")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"I hope this was a helpful guide on how to work with and switch between multiple windows using Selenium."),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/jimevansmusic"},"Jim Evans")," for providing the info for this tip."),(0,i.kt)("p",null,"For more information about switching windows (and tabs) visit the official Selenium HQ ","[documentation page]"," (",(0,i.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/interactions/windows/"},"https://www.selenium.dev/documentation/webdriver/interactions/windows/"),")."),(0,i.kt)("p",null,"Happy Testing!"),(0,i.kt)("h2",{id:"about-the-author"},"About The Author"),(0,i.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,i.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}u.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);