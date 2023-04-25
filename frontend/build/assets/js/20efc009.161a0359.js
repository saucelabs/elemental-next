"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[720],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={title:"Ruby",id:"51-javascript-alerts-ruby",slug:"ruby/",number:51,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["javascript","javascript alerts","javascript popups","javascript dialogs"],level:1,category:["fundamentals","tools"],language:"ruby"},o="How to Work with JavaScript Alerts",l={unversionedId:"updated-tips/how-to-work-with-javascript-alerts/51-javascript-alerts-ruby",id:"updated-tips/how-to-work-with-javascript-alerts/51-javascript-alerts-ruby",title:"Ruby",description:"Intro",source:"@site/docs/updated-tips/51-how-to-work-with-javascript-alerts/ruby.md",sourceDirName:"updated-tips/51-how-to-work-with-javascript-alerts",slug:"/updated-tips/how-to-work-with-javascript-alerts/ruby/",permalink:"/elemental-next/docs/updated-tips/how-to-work-with-javascript-alerts/ruby/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/51-how-to-work-with-javascript-alerts/ruby.md",tags:[{label:"javascript",permalink:"/elemental-next/docs/tags/javascript"},{label:"javascript alerts",permalink:"/elemental-next/docs/tags/javascript-alerts"},{label:"javascript popups",permalink:"/elemental-next/docs/tags/javascript-popups"},{label:"javascript dialogs",permalink:"/elemental-next/docs/tags/javascript-dialogs"}],version:"current",frontMatter:{title:"Ruby",id:"51-javascript-alerts-ruby",slug:"ruby/",number:51,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["javascript","javascript alerts","javascript popups","javascript dialogs"],level:1,category:["fundamentals","tools"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/elemental-next/docs/updated-tips/how-to-work-with-javascript-alerts/python/"},next:{title:"CSharp",permalink:"/elemental-next/docs/updated-tips/growl/csharp/"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-work-with-javascript-alerts"},"How to Work with JavaScript Alerts"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes."),(0,n.kt)("p",null,"A popular use case for alerts is in the case of error prevention for password restrictions."),(0,n.kt)("p",null,"If your application triggers any JavaScript pop-ups (a.k.a. alerts, dialogs, etc.) then you need to know how to handle them in your Selenium tests."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Our example application is available ",(0,n.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/javascript_alerts"},"here")," on ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click ",(0,n.kt)("inlineCode",{parentName:"p"},"Ok")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Cancel"),")."),(0,n.kt)("p",null,"First, we'll include our requisite libraries (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to control the browser and ",(0,n.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertion) and wire up some simple ",(0,n.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: javascript_alerts.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,n.kt)("p",null,"Now let's write our test."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/javascript_alerts'\n  @driver.find_elements(css: 'button')[1].click\n\n  popup = @driver.switch_to.alert\n  popup.accept\n\n  result = @driver.find_element(id: 'result').text\n  expect(result).to eql('You clicked: Ok')\nend\n")),(0,n.kt)("p",null,"A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find all of the buttons on the page using ",(0,n.kt)("inlineCode",{parentName:"p"},"find_elements")," and click on the second one. Since ",(0,n.kt)("inlineCode",{parentName:"p"},"find_elements")," returns an Array of all found elements, we can assume that the first item can be selected using ",(0,n.kt)("inlineCode",{parentName:"p"},"[0]")," (since Arrays in Ruby start counting at ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),"). So the second item would be ",(0,n.kt)("inlineCode",{parentName:"p"},"[1]"),"."),(0,n.kt)("p",null,"After click the button to trigger the JavaScript Alert we use Selenium's ",(0,n.kt)("inlineCode",{parentName:"p"},"switch_to.alert")," method to focus on the JavaScript pop-up and use ",(0,n.kt)("inlineCode",{parentName:"p"},".accept")," to click ",(0,n.kt)("inlineCode",{parentName:"p"},"Ok"),". If we wanted to click ",(0,n.kt)("inlineCode",{parentName:"p"},"Cancel")," we would have used ",(0,n.kt)("inlineCode",{parentName:"p"},".dismiss"),"."),(0,n.kt)("p",null,"After accepting the alert, our main browser window will automatically regain focus and the page will display the result that we chose. This text is what we use for our assertion, making sure that the words ",(0,n.kt)("inlineCode",{parentName:"p"},"You clicked: Ok")," are displayed on the page."),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("p",null,"If you save this file and run it (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"ruby javascript_alerts.rb")," from the command-line) here is what will happen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the browser"),(0,n.kt)("li",{parentName:"ul"},"Load the page"),(0,n.kt)("li",{parentName:"ul"},"Click the second button on the page"),(0,n.kt)("li",{parentName:"ul"},"JavaScript Confirmation Alert appears"),(0,n.kt)("li",{parentName:"ul"},"Accept the JavaScript Confirmation Alert"),(0,n.kt)("li",{parentName:"ul"},"Assert that the result on the page is what we expect"),(0,n.kt)("li",{parentName:"ul"},"Close the browser")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"We've learned how to accept/dismiss Javascript alerts using Selenium Webdriver by locating the alert using Selenium's ",(0,n.kt)("inlineCode",{parentName:"p"},"switchTo().alert()"),". After accepting/dismissing the alert, our main browser window will automatically regain focus and the page will display the result."),(0,n.kt)("p",null,"Happy Testing!"),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);