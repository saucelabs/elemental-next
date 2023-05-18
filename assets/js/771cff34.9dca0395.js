"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"11: Build An Interactive Prompt",id:"11-build-an-interactive-prompt-ruby",contentUrl:"docs/build-an-interactive-prompt/11-build-an-interactive-prompt-ruby",sidebar_label:"Ruby",text:"Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate, it becomes challenging to work through it to completion.",number:11,hide_table_of_contents:!0,publish_date:new Date("2013-08-06T00:00:00.000Z"),last_update:{date:new Date("2023-02-28T00:00:00.000Z")},tags:["repl","debugging"],level:2,category:["troubleshooting"],language:"ruby"},o="Building an Interactive Prompt",l={unversionedId:"build-an-interactive-prompt/11-build-an-interactive-prompt-ruby",id:"build-an-interactive-prompt/11-build-an-interactive-prompt-ruby",title:"11: Build An Interactive Prompt",description:"Intro",source:"@site/docs/11-build-an-interactive-prompt/ruby.md",sourceDirName:"11-build-an-interactive-prompt",slug:"/build-an-interactive-prompt/11-build-an-interactive-prompt-ruby",permalink:"/elemental-next/docs/build-an-interactive-prompt/11-build-an-interactive-prompt-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/11-build-an-interactive-prompt/ruby.md",tags:[{label:"repl",permalink:"/elemental-next/docs/tags/repl"},{label:"debugging",permalink:"/elemental-next/docs/tags/debugging"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1677542400,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"11: Build An Interactive Prompt",id:"11-build-an-interactive-prompt-ruby",contentUrl:"docs/build-an-interactive-prompt/11-build-an-interactive-prompt-ruby",sidebar_label:"Ruby",text:"Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate, it becomes challenging to work through it to completion.",number:11,hide_table_of_contents:!0,publish_date:"2013-08-06T00:00:00.000Z",last_update:{date:"2023-02-28T00:00:00.000Z"},tags:["repl","debugging"],level:2,category:["troubleshooting"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/retry-test-actions-ruby/10-retry-test-actions-ruby"},next:{title:"Csharp",permalink:"/elemental-next/docs/opt-out-of-ab-tests/12-opt-out-of-ab-tests-csharp"}},u={},s=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-an-interactive-prompt"},"Building an Interactive Prompt"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate, it becomes challenging to work through it to completion."),(0,a.kt)("p",null,"The typical approach is to walk through the scenario manually and inspect its markup, identify the parts you want to interact with, write up the test script, run it, and watch it. If it passes, then pat yourself on the back. If it fails, make some tweaks and run it again -- repeating until it passes."),(0,a.kt)("p",null,"This is a real pain, and it's even more frustrating when debugging tests that fail intermittently."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"One way to simplify things, and make it easier for testers to transition from Selenium IDE, is to build an interactive prompt -- also known as a read-eval-print-loop (REPL)."),(0,a.kt)("p",null,"Upon loading the prompt it will launch a browser and accept Selenium commands just the same as they are written in test code. And if a command is issued that errors (or that it doesn't recognize) the prompt will provide that information and continue to function."),(0,a.kt)("p",null,"This will enable us to continue through specific Selenium actions and locators to verify that they work before putting them into test code."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In the first half of our example we include our libraries and our usual setup, teardown, and run actions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'selenium-webdriver'\nrequire 'rspec/expectations'\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"In the run action we define our loop and its behavior, creating the interactive prompt we want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  loop do\n    print '>> '\n    input = gets.chomp\n    if input == 'q'\n      puts 'Quitting...'\n      @driver.quit\n      exit 0\n    end\n    begin\n      eval input\n    rescue Exception => e\n      puts e.message\n    end\n  end\nend\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," command is used instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"puts")," because we want ",(0,a.kt)("inlineCode",{parentName:"p"},">> ")," to appear on the same line as the input that we are issuing. This gives us the look and feel of a prompt. And we use ",(0,a.kt)("inlineCode",{parentName:"p"},"gets.chomp")," to take in input. ",(0,a.kt)("inlineCode",{parentName:"p"},"gets")," is responsible for receiving the input. And ",(0,a.kt)("inlineCode",{parentName:"p"},"chomp")," removes the carriage return character (e.g. '\\n') from the input."),(0,a.kt)("p",null,"Before executing the input we perform a check to see if the letter ",(0,a.kt)("strong",{parentName:"p"},"q")," is issued. If so, the script will post a message to the terminal, close the browser, and exit the prompt."),(0,a.kt)("p",null,"We then execute the input provided with ",(0,a.kt)("inlineCode",{parentName:"p"},"eval")," and rescue exceptions, posting their message to the terminal when they occur."),(0,a.kt)("p",null,"Here is an example command you may issue to start: ",(0,a.kt)("inlineCode",{parentName:"p"},"@driver.get 'https://www.google.com'"),"."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Firefox loads"),(0,a.kt)("li",{parentName:"ul"},"An interactive prompt is presented"),(0,a.kt)("li",{parentName:"ul"},"Issue a Selenium command and see it execute in the browser"),(0,a.kt)("li",{parentName:"ul"},"Issue a command that it does not recognize (or that errors), and see a message stating the issue in the prompt"),(0,a.kt)("li",{parentName:"ul"},"Issue ",(0,a.kt)("strong",{parentName:"li"},"q"),", the browser will close and the prompt will terminate")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this REPL will help save you some time and frustration -- making it easier to write and debug your tests."),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);