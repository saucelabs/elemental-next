"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[48594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={language:"ruby",level:1,hide_sidebar:!0,publish_date:new Date("2015-10-12T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")}},o=void 0,s={unversionedId:"how-to-press-keyboard-keys/ruby",id:"how-to-press-keyboard-keys/ruby",title:"ruby",description:"A Solution",source:"@site/docs/61-how-to-press-keyboard-keys/ruby.md",sourceDirName:"61-how-to-press-keyboard-keys",slug:"/how-to-press-keyboard-keys/ruby",permalink:"/docs/how-to-press-keyboard-keys/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/61-how-to-press-keyboard-keys/ruby.md",tags:[],version:"current",lastUpdatedBy:"discombobulateme",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{language:"ruby",level:1,hide_sidebar:!0,publish_date:"2015-10-12T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"}}},l={},p=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"You can easily issue a key press by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"send_keys")," command."),(0,a.kt)("p",null,"This can be done to a specific element or generically with ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/rb/Selenium/WebDriver/ActionBuilder.html"},"Selenium's Action Builder"),". Either approach will send a key press. The latter will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found."),(0,a.kt)("p",null,"When sending keys be sure to specify the key-press as a symbol (e.g. space is ",(0,a.kt)("inlineCode",{parentName:"p"},":space"),", tab is ",(0,a.kt)("inlineCode",{parentName:"p"},":tab"),", etc.). You can see a full list of keyboard key symbols ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/blob/master/rb/lib/selenium/webdriver/common/keys.rb"},"here"),"."),(0,a.kt)("p",null,"Let's try out a couple of examples."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First we'll set up our requisite libraries to drive the browser (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver"),") and perform an assertion (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"rspec/expections")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers"),"). After that, we'll create some simple ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: key_presses.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Now we can write up our test."),(0,a.kt)("p",null,"Let's use an example from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that will display what key has been pressed (",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/key_presses"},"link"),"). We'll use the result text that gets displayed to perform our assertion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/key_presses'\n  @driver.find_element(id: 'target').send_keys :space\n  expect(@driver.find_element(id: 'result').text).to eql('You entered: SPACE')\nend\n")),(0,a.kt)("p",null,"After visiting the page we find an element that's visible (e.g., the one that contains the example on the page ",(0,a.kt)("inlineCode",{parentName:"p"},"(id: 'target')"),") and send the space key to it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},".send_keys :space"),"). Then we grab the resulting text (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"@driver.find_element(id: 'result').text)"),") and assert that it says what we expect (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"'You entered: SPACE'"),")."),(0,a.kt)("p",null,"Alternatively, we can also issue a key press without finding the element first."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/key_presses'\n  @driver.action.send_keys(:tab).perform\n  expect(@driver.find_element(id: 'result').text).to eql('You entered: TAB')\nend\n")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"If we save this and run it (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby key_presses.rb")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Find the element and send the space key to it"),(0,a.kt)("li",{parentName:"ul"},"Find the result text on the page and check to that it's what we expect"),(0,a.kt)("li",{parentName:"ul"},"Send the tab key to the element that's currently in focus"),(0,a.kt)("li",{parentName:"ul"},"Find the result text on the page and check to that it's what we expect"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. If you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);