"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=i.createContext({}),s=function(e){var t=i.useContext(w),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(w.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,w=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,c=p["".concat(w,".").concat(h)]||p[h]||u[h]||r;return n?i.createElement(c,a(a({ref:t},d),{},{components:n})):i.createElement(c,a({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var w in t)hasOwnProperty.call(t,w)&&(l[w]=t[w]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),o=(n(7294),n(3905));const r={title:"Work With Multiple Windows",id:"4-work-with-multiple-windows-ruby",contentUrl:"docs/work-with-multiple-windows/4-work-with-multiple-windows-ruby",sidebar_label:"Ruby",text:"This tip will explain how to work with multiple windows in Selenium and switch between them. Occasionally you'll run into a link or action in the application you're testing that will open a new window.",number:4,hide_table_of_contents:!0,publish_date:new Date("2015-08-21T00:00:00.000Z"),last_update:{date:new Date("2023-02-27T00:00:00.000Z")},tags:["windows","multiple windows","new window"],level:2,category:["fundamentals"],language:"ruby"},a="How to Work with Multiple Windows",l={unversionedId:"work-with-multiple-windows/4-work-with-multiple-windows-ruby",id:"work-with-multiple-windows/4-work-with-multiple-windows-ruby",title:"Work With Multiple Windows",description:"Intro",source:"@site/docs/4-work-with-multiple-windows/ruby.mdx",sourceDirName:"4-work-with-multiple-windows",slug:"/work-with-multiple-windows/4-work-with-multiple-windows-ruby",permalink:"/docs/work-with-multiple-windows/4-work-with-multiple-windows-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4-work-with-multiple-windows/ruby.mdx",tags:[{label:"windows",permalink:"/docs/tags/windows"},{label:"multiple windows",permalink:"/docs/tags/multiple-windows"},{label:"new window",permalink:"/docs/tags/new-window"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677456e3,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{title:"Work With Multiple Windows",id:"4-work-with-multiple-windows-ruby",contentUrl:"docs/work-with-multiple-windows/4-work-with-multiple-windows-ruby",sidebar_label:"Ruby",text:"This tip will explain how to work with multiple windows in Selenium and switch between them. Occasionally you'll run into a link or action in the application you're testing that will open a new window.",number:4,hide_table_of_contents:!0,publish_date:"2015-08-21T00:00:00.000Z",last_update:{date:"2023-02-27T00:00:00.000Z"},tags:["windows","multiple windows","new window"],level:2,category:["fundamentals"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/work-with-multiple-windows/4-work-with-multiple-windows-python"},next:{title:"Csharp",permalink:"/docs/select-from-a-dropdown/5-select-from-a-dropdown-csharp"}},w={},s=[{value:"Intro",id:"intro",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-work-with-multiple-windows"},"How to Work with Multiple Windows"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"This tip will explain how to work with multiple windows in Selenium and switch between them."),(0,o.kt)("p",null,"Occasionally you'll run into a link or action in the application you're testing that will open a new window. In order to work with both the new and originating windows you'll need to switch between them."),(0,o.kt)("p",null,"On the face of it, this is a pretty straightforward concept. But there may be a small challenge to watch out for that you may find in some browsers and not others."),(0,o.kt)("p",null,"Let's step through a couple of examples to demonstrate."),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("p",null,"First, let's pull in our requisite libraries (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to control the browser and ",(0,o.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertions) and add some simple ",(0,o.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: new_window.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,o.kt)("p",null,"Now let's write a test that exercises new window functionality from an application. In this case, we'll be using ",(0,o.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/windows"},"the new window example")," found on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: new_window.rb\n\n# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/windows'\n  @driver.find_element(css: '.example a').click\n  @driver.switch_to.window(@driver.window_handles.first)\n  expect(@driver.title).not_to eql 'New Window'\n  @driver.switch_to.window(@driver.window_handles.last)\n  expect(@driver.title).to eql 'New Window'\nend\n")),(0,o.kt)("p",null,"After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the last one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window."),(0,o.kt)("p",null,"While this may seem like a good approach, it can present problems later. That's because the order of the window handles is not consistent across all browsers. Some return in the order opened, others alphabetically."),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("p",null,"Here's a more resilient approach. One that will work across all browsers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: new_window.rb\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/windows'\n\n  first_window = @driver.window_handle\n  @driver.find_element(css: '.example a').click\n  all_windows = @driver.window_handles\n  new_window = all_windows.select { |this_window| this_window != first_window }\n\n  @driver.switch_to.window(first_window)\n  expect(@driver.title).not_to eql 'New Window'\n\n  @driver.switch_to.window(new_window)\n  expect(@driver.title).to eql 'New Window'\nend\n")),(0,o.kt)("p",null,"After loading the page we store the window handle in a variable (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"first_window"),") and then proceed with clicking the new window link."),(0,o.kt)("p",null,"Now that we have two windows open we grab all of the window handles and search through them to find the new window handle (e.g., the handle that doesn't match the first one we've already stored). We store the result in another variable (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"second_window"),") and then switch between the windows. Each time checking the page title to make sure the correct window is in focus."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the browser"),(0,o.kt)("li",{parentName:"ul"},"Visit the page"),(0,o.kt)("li",{parentName:"ul"},"Find the window handle for the current window"),(0,o.kt)("li",{parentName:"ul"},"Click a link that opens a new window"),(0,o.kt)("li",{parentName:"ul"},"Find the window handle out of all available window handles"),(0,o.kt)("li",{parentName:"ul"},"Switch between the windows"),(0,o.kt)("li",{parentName:"ul"},"Assert that the correct window is in focus"),(0,o.kt)("li",{parentName:"ul"},"Close the browser")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"I hope this was a helpful guide on how to work with and switch between multiple windows using Selenium."),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/jimevansmusic"},"Jim Evans")," for providing the info for this tip."),(0,o.kt)("p",null,"For more information about switching windows (and tabs) visit the official Selenium HQ ","[documentation page]"," (",(0,o.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/interactions/windows/"},"https://www.selenium.dev/documentation/webdriver/interactions/windows/"),")."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dave Haeffner profile picture",src:n(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}u.isMDXComponent=!0},9417:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);