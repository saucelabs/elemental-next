"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=a,h=d["".concat(l,".").concat(y)]||d[y]||c[y]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"61: How To Press Keyboard Keys",id:"61-keyboard-keys-ruby",contentUrl:"docs/how-to-press-keyboard-keys/61-keyboard-keys-ruby",sidebar_label:"Ruby",text:"On occasion you'll come across functionality that requires the use of keyboard key presses in your tests. Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter. But how do you do it and where do you start?",number:61,hide_table_of_contents:!0,publish_date:new Date("2015-10-12T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["keyboard","keys","key presses","tab","enter"],level:1,category:["fundamentals"],language:"ruby"},s="How to Press Keyboard Keys",i={unversionedId:"how-to-press-keyboard-keys/61-keyboard-keys-ruby",id:"how-to-press-keyboard-keys/61-keyboard-keys-ruby",title:"61: How To Press Keyboard Keys",description:"Intro",source:"@site/docs/61-how-to-press-keyboard-keys/ruby.md",sourceDirName:"61-how-to-press-keyboard-keys",slug:"/how-to-press-keyboard-keys/61-keyboard-keys-ruby",permalink:"/elemental-next/docs/how-to-press-keyboard-keys/61-keyboard-keys-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/61-how-to-press-keyboard-keys/ruby.md",tags:[{label:"keyboard",permalink:"/elemental-next/docs/tags/keyboard"},{label:"keys",permalink:"/elemental-next/docs/tags/keys"},{label:"key presses",permalink:"/elemental-next/docs/tags/key-presses"},{label:"tab",permalink:"/elemental-next/docs/tags/tab"},{label:"enter",permalink:"/elemental-next/docs/tags/enter"}],version:"current",frontMatter:{title:"61: How To Press Keyboard Keys",id:"61-keyboard-keys-ruby",contentUrl:"docs/how-to-press-keyboard-keys/61-keyboard-keys-ruby",sidebar_label:"Ruby",text:"On occasion you'll come across functionality that requires the use of keyboard key presses in your tests. Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter. But how do you do it and where do you start?",number:61,hide_table_of_contents:!0,publish_date:"2015-10-12T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["keyboard","keys","key presses","tab","enter"],level:1,category:["fundamentals"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/elemental-next/docs/how-to-press-keyboard-keys/61-keyboard-keys-python"},next:{title:"Csharp",permalink:"/elemental-next/docs/right-click/63-right-click-csharp"}},l={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-press-keyboard-keys"},"How to Press Keyboard Keys"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"On occasion you'll come across functionality that requires the use of keyboard key presses in your tests."),(0,a.kt)("p",null,"Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter."),(0,a.kt)("p",null,"But how do you do it and where do you start?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"You can easily issue a key press by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"send_keys")," command."),(0,a.kt)("p",null,"This can be done to a specific element or generically with ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/rb/Selenium/WebDriver/ActionBuilder.html"},"Selenium's Action Builder"),". Either approach will send a key press. The latter will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found."),(0,a.kt)("p",null,"When sending keys be sure to specify the key-press as a symbol (e.g. space is ",(0,a.kt)("inlineCode",{parentName:"p"},":space"),", tab is ",(0,a.kt)("inlineCode",{parentName:"p"},":tab"),", etc.). You can see a full list of keyboard key symbols ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/blob/master/rb/lib/selenium/webdriver/common/keys.rb"},"here"),"."),(0,a.kt)("p",null,"Let's try out a couple of examples."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First we'll set up our requisite libraries to drive the browser (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver"),") and perform an assertion (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"rspec/expections")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers"),"). After that, we'll create some simple ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: key_presses.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Now we can write up our test."),(0,a.kt)("p",null,"Let's use an example from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that will display what key has been pressed (",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/key_presses"},"link"),"). We'll use the result text that gets displayed to perform our assertion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/key_presses'\n  @driver.find_element(id: 'target').send_keys :space\n  expect(@driver.find_element(id: 'result').text).to eql('You entered: SPACE')\nend\n")),(0,a.kt)("p",null,"After visiting the page we find an element that's visible (e.g., the one that contains the example on the page ",(0,a.kt)("inlineCode",{parentName:"p"},"(id: 'target')"),") and send the space key to it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},".send_keys :space"),"). Then we grab the resulting text (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"@driver.find_element(id: 'result').text)"),") and assert that it says what we expect (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"'You entered: SPACE'"),")."),(0,a.kt)("p",null,"Alternatively, we can also issue a key press without finding the element first."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/key_presses'\n  @driver.action.send_keys(:tab).perform\n  expect(@driver.find_element(id: 'result').text).to eql('You entered: TAB')\nend\n")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"If we save this and run it (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby key_presses.rb")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Find the element and send the space key to it"),(0,a.kt)("li",{parentName:"ul"},"Find the result text on the page and check to that it's what we expect"),(0,a.kt)("li",{parentName:"ul"},"Send the tab key to the element that's currently in focus"),(0,a.kt)("li",{parentName:"ul"},"Find the result text on the page and check to that it's what we expect"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. If you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);