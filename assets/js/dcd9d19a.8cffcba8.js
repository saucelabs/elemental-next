"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[15407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,c=m["".concat(p,".").concat(d)]||m[d]||h[d]||i;return r?n.createElement(c,o(o({ref:t},u),{},{components:r})):n.createElement(c,o({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={language:"ruby",level:1,hide_sidebar:!0,publish_date:new Date("2015-08-25T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")}},o=void 0,l={unversionedId:"work-with-frames/ruby",id:"work-with-frames/ruby",title:"ruby",description:"A Solution",source:"@site/docs/3-work-with-frames/ruby.md",sourceDirName:"3-work-with-frames",slug:"/work-with-frames/ruby",permalink:"/docs/work-with-frames/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-work-with-frames/ruby.md",tags:[],version:"current",lastUpdatedBy:"Esther",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{language:"ruby",level:1,hide_sidebar:!0,publish_date:"2015-08-25T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"}}},p={},s=[{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:s},m="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"Rather than getting frustrated when authoring your tests, you can work with the elements in a frame by telling Selenium to switch to that frame first. Then the rest of your test should be more straightforward."),(0,a.kt)("p",null,"Let's explore further with some examples."),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("p",null,"We'll first need to pull in our requisite libraries (",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, and ",(0,a.kt)("inlineCode",{parentName:"p"},"rspec/expecations")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," to perform our assertions) and wire up some simple ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: frames.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Now onto our test. In it, we'll step through ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/nested_frames"},"an example of nested frames")," which can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/nested_frames'\n  @driver.switch_to.frame('frame-top')\n  @driver.switch_to.frame('frame-middle')\n  expect(@driver.find_element(id: 'content').text).to eql 'MIDDLE'\nend\n")),(0,a.kt)("p",null,"With Selenium's ",(0,a.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/TargetLocator.html#frame-instance_method"},(0,a.kt)("inlineCode",{parentName:"a"},".switch_to.frame"))," method we can simply switch to the frame we want. It accepts either an ID or name attribute, but in order to get the text of the middle frame (e.g., a frame nested within another frame), we need to switch to the parent frame (e.g., the top frame) and then switch to the child frame (e.g., the middle frame)."),(0,a.kt)("p",null,"Once we've done that we're able to find the element we need, grab it's text, and assert that it's what we expect."),(0,a.kt)("p",null,"While this example helps illustrate the point of frame switching, it's not very practical."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("p",null,"Here is a more likely example you'll run into -- working with a WYSIWYG (What You See Is What You Get) Editor like ",(0,a.kt)("a",{parentName:"p",href:"http://www.tinymce.com/"},"TinyMCE"),". You can see the page we're testing ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/tinymce"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: frames.rb\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tinymce'\n  @driver.switch_to.frame('mce_0_ifr')\n  editor = @driver.find_element(id: 'tinymce')\n  before_text = editor.text\n  editor.clear\n  editor.send_keys 'Hello World!'\n  after_text = editor.text\n  expect(after_text).not_to eql before_text\nend\n")),(0,a.kt)("p",null,"Once the page loads we switch into the frame that contains TinyMCE and..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"grab the original text and store it"),(0,a.kt)("li",{parentName:"ul"},"clear and input new text"),(0,a.kt)("li",{parentName:"ul"},"grab the new text value"),(0,a.kt)("li",{parentName:"ul"},"assert that the original and new texts are not the same")),(0,a.kt)("p",null,"Keep in mind that if we need to access a part of the page outside of the frame we are currently in we'll need to switch to it. Thankfully Selenium has a method that enables us to quickly jump back to the top level of the page -- ",(0,a.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/TargetLocator.html#default_content-instance_method"},(0,a.kt)("inlineCode",{parentName:"a"},"switch_to.default_content")),"."),(0,a.kt)("p",null,"Here is what that looks like in practice"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"  @driver.switch_to.default_content\n  expect(@driver.find_element(css: 'h3').text).not_to be_empty\n")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"If we save the file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby frames.rb")," from the command-line) here is what will happen:"),(0,a.kt)("u",null,"Example 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Switch to the nested frame"),(0,a.kt)("li",{parentName:"ul"},"Grab the text from the frame and assert that Selenium is in the correct place"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("u",null,"Example 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Switch to the frame that contains the TinyMCE editor"),(0,a.kt)("li",{parentName:"ul"},"Grab and clear the text in the editor"),(0,a.kt)("li",{parentName:"ul"},"Input and grab new text in the edtitor"),(0,a.kt)("li",{parentName:"ul"},"Assert that the original and new text entries don't match"),(0,a.kt)("li",{parentName:"ul"},"Switch to the top level of the page"),(0,a.kt)("li",{parentName:"ul"},"Grab the text from the top of the page and assert that it's not empty"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Now you can readily defeat frames when they cross your path."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:r(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);