"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"12: Opt Out of AB Tests",id:"12-opt-out-of-ab-tests-ruby",contentUrl:"docs/opt-out-of-ab-tests/12-opt-out-of-ab-tests-ruby",sidebar_label:"Ruby",text:"Occasionally when running tests you may see unexpected behavior due to A/B testing of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests.",number:12,hide_table_of_contents:!0,publish_date:new Date("2015-10-15T00:00:00.000Z"),last_update:{date:new Date("2023-02-28T00:00:00.000Z")},tags:["ab tests","optimizely","opt-out"],level:2,category:["troubleshooting"],language:"ruby"},i="How to Opt-out of A/B Tests",s={unversionedId:"opt-out-of-ab-tests/12-opt-out-of-ab-tests-ruby",id:"opt-out-of-ab-tests/12-opt-out-of-ab-tests-ruby",title:"12: Opt Out of AB Tests",description:"Intro",source:"@site/docs/12-opt-out-of-ab-tests/ruby.mdx",sourceDirName:"12-opt-out-of-ab-tests",slug:"/opt-out-of-ab-tests/12-opt-out-of-ab-tests-ruby",permalink:"/elemental-next/docs/opt-out-of-ab-tests/12-opt-out-of-ab-tests-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/12-opt-out-of-ab-tests/ruby.mdx",tags:[{label:"ab tests",permalink:"/elemental-next/docs/tags/ab-tests"},{label:"optimizely",permalink:"/elemental-next/docs/tags/optimizely"},{label:"opt-out",permalink:"/elemental-next/docs/tags/opt-out"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677542400,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"12: Opt Out of AB Tests",id:"12-opt-out-of-ab-tests-ruby",contentUrl:"docs/opt-out-of-ab-tests/12-opt-out-of-ab-tests-ruby",sidebar_label:"Ruby",text:"Occasionally when running tests you may see unexpected behavior due to A/B testing of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests.",number:12,hide_table_of_contents:!0,publish_date:"2015-10-15T00:00:00.000Z",last_update:{date:"2023-02-28T00:00:00.000Z"},tags:["ab tests","optimizely","opt-out"],level:2,category:["troubleshooting"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/elemental-next/docs/opt-out-of-ab-tests/12-opt-out-of-ab-tests-python"},next:{title:"Csharp",permalink:"/elemental-next/docs/how-to-access-basic-auth/13-work-with-basic-auth-csharp"}},l={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-opt-out-of-ab-tests"},"How to Opt-out of A/B Tests"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Occasionally when running tests you may see unexpected behavior due to ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/A/B_testing"},"A/B testing (a.k.a. split testing)")," of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"First, here is a primer on Split Testing."),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"split-testing"},"Split Testing"),(0,a.kt)("p",{parentName:"blockquote"},"Split testing is a simple way to experiment with an application's features to see which changes lead to higher user engagement. A simple example would be testing variations of an e-mail landing page to see if more people sign up. In such a split test there would be the control (how the application looks and behaves now) and variants (e.g., 2 or 3 changes that could include changing text or images on the page, element positioning, color of the submit button, etc)."),(0,a.kt)("p",{parentName:"blockquote"},"Once the variants are configured, they are put into rotation, and the experiment starts. During this experiment each user will see a different version of the feature and their engagement with it will be tracked. Split tests live for the length of the experiment or until a winner is found (e.g., tracking indicates that a variant converted higher than the control). If no winner is found, new variants may be created and another experiment tried. If a winner is found, then the winning variant becomes the new control and the feature gets updated accordingly.")),(0,a.kt)("p",null,"Thankfully there are some standard opt-out mechanisms built into A/B testing platforms. They tend to come in the form of an appended URL or forging a cookie."),(0,a.kt)("p",null,"Let's start with an example for each approach with a popular A/B testing platform, ",(0,a.kt)("a",{parentName:"p",href:"https://www.optimizely.com/"},"Optimizely"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Our example page is from ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet")," and can be seen ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/abtest"},"here"),". There are three different versions of the page that are available. On each page the heading text will vary:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Control: ",(0,a.kt)("inlineCode",{parentName:"li"},"A/B Test Control")),(0,a.kt)("li",{parentName:"ul"},"Variation 1: ",(0,a.kt)("inlineCode",{parentName:"li"},"A/B Test Variation 1")),(0,a.kt)("li",{parentName:"ul"},"Opt-out: ",(0,a.kt)("inlineCode",{parentName:"li"},"No A/B Test"))),(0,a.kt)("p",null,"Let's kick things off by loading our requisite libraries (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to control the browser and ",(0,a.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and it's matchers for our assertions) and adding some simple ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods to handle our test configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: split_test.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude ::RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Now let's wire up our first test to step through loading the split testing page and verifying that the text changes as we forge an opt-out cookie."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/abtest'\n  heading_text = @driver.find_element(css: 'h3').text\n  expect(['A/B Test Variation 1', 'A/B Test Control'].include? heading_text).to eql true\n  @driver.manage.add_cookie(name: 'optimizelyOptOut', value: 'true')\n  @driver.navigate.refresh\n  heading_text = @driver.find_element(css: 'h3').text\n  expect(heading_text).to eql('No A/B Test')\nend\n")),(0,a.kt)("p",null,"After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it matches what we expect. After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again."),(0,a.kt)("p",null,"We could also load the opt-out cookie before navigating to this page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n  @driver.manage.add_cookie(name: 'optimizelyOptOut', value: 'true')\n  @driver.get 'http://the-internet.herokuapp.com/abtest'\n  expect(@driver.find_element(css: 'h3').text).to eql('No A/B Test')\nend\n")),(0,a.kt)("p",null,"Here we first navigate to the main page of the site and then add the opt-out cookie. After that, we navigate to the split test page and perform our checks. Alternatively, we could opt out without forging a cookie. Instead we would need to append an opt out request to the URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true'\n  @driver.switch_to.alert.dismiss\n  expect(@driver.find_element(css: 'h3').text).to eql('No A/B Test')\nend\n")),(0,a.kt)("p",null,"By appending ",(0,a.kt)("inlineCode",{parentName:"p"},"?optimizely_opt_out=true")," we achieve the same outcome as before. Keep in mind that this approach triggers a JavaScript alert, so we have to switch to and dismiss it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"@driver.switch_to.alert.dismiss"),") before performing our check."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"If you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby split_test.rb")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Opt-out of the split tests (either by cookie or appended URL)"),(0,a.kt)("li",{parentName:"ul"},"Visit the split testing page"),(0,a.kt)("li",{parentName:"ul"},"Grab the header text"),(0,a.kt)("li",{parentName:"ul"},"Confirm that the session is opted out of the split tests"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this tip was helpful in guiding you in different methods of how to opt out of split tests."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}h.isMDXComponent=!0}}]);