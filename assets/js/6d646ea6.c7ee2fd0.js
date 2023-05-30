"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Junit XML",id:"57-junit-xml-ruby",contentUrl:"docs/junit-xml/57-junit-xml-ruby",sidebar_label:"Ruby",text:"If you want your Selenium tests to automatically run and report failures to you and your team, you'll want to wire them up to a Continuous Integration server.",number:57,hide_table_of_contents:!0,publish_date:new Date("2015-07-14T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["xml","junit xml","ci","continuous integration","reporting"],level:1,category:["tools"],language:"ruby"},l="How to Prepare Your Tests for Continuous Integration",i={unversionedId:"junit-xml/57-junit-xml-ruby",id:"junit-xml/57-junit-xml-ruby",title:"Junit XML",description:"Intro",source:"@site/docs/57-junit-xml/ruby.mdx",sourceDirName:"57-junit-xml",slug:"/junit-xml/57-junit-xml-ruby",permalink:"/docs/junit-xml/57-junit-xml-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/57-junit-xml/ruby.mdx",tags:[{label:"xml",permalink:"/docs/tags/xml"},{label:"junit xml",permalink:"/docs/tags/junit-xml"},{label:"ci",permalink:"/docs/tags/ci"},{label:"continuous integration",permalink:"/docs/tags/continuous-integration"},{label:"reporting",permalink:"/docs/tags/reporting"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"Junit XML",id:"57-junit-xml-ruby",contentUrl:"docs/junit-xml/57-junit-xml-ruby",sidebar_label:"Ruby",text:"If you want your Selenium tests to automatically run and report failures to you and your team, you'll want to wire them up to a Continuous Integration server.",number:57,hide_table_of_contents:!0,publish_date:"2015-07-14T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["xml","junit xml","ci","continuous integration","reporting"],level:1,category:["tools"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/wrapper/55-wrapper-ruby"},next:{title:"Ruby",permalink:"/docs/tagging/58-tagging-ruby"}},u={},s=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:s},m="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-prepare-your-tests-for-continuous-integration"},"How to Prepare Your Tests for Continuous Integration"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"If you want your Selenium tests to automatically run and report failures to you and your team, you'll want to wire them up to a ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Continuous_integration"},"Continuous Integration")," (CI) server."),(0,a.kt)("p",null,"In order to make the most of the Continuous Integration setup, you'll need to make sure your test suite outputs a machine readable test report. But what does this entail? How do you set it up? And will it work when running things in parallel?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"CI servers work with a standardized report format called JUnit XML which is a standard offering across testing frameworks. If it's not something available off the shelf for your framework, odds are there's a plug-in to enable it."),(0,a.kt)("p",null,"The report will include test results (e.g., failure messages and stack traces) and test metrics (e.g., start time, end time, number of tests, etc.). Your CI server (once configured to do so) will consume this report after each test run and tell you when things pass and fail. It will also offer trend data over time to help determine the stability of your test suite."),(0,a.kt)("p",null,"Let's go through an example of how to configure a test suite in order to output a JUnit XML report."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"http://rspec.info/"},"RSpec"),", you need a plugin to configure JUnit XML output. There are two popular ones:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/natritmeyer/yarjuf"},"yarjuf (Yet Another RSpec JUnit Formatter)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sj26/rspec_junit_formatter"},"RSpec JUnit Formatter"))),(0,a.kt)("p",null,"Let's step through how to use the latter of the two."),(0,a.kt)("p",null,"After installing RSpec JUnit Formatter we need to specify two new parameters at run-time: a formatter, and an output file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rspec --format RspecJunitFormatter  --out result.xml\n")),(0,a.kt)("p",null,"Running tests with these parameters will format the test results into JUnit XML and pipe them into a ",(0,a.kt)("inlineCode",{parentName:"p"},"result.xml")," file (and overwrite it on subsequent runs)."),(0,a.kt)("p",null,"If we didn't want to type these parameters out every time we could place them into an RSpec command helper file (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},".rspec"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: .rspec\n\n--format RspecJunitFormatter\n--out result.xml\n")),(0,a.kt)("p",null,"If we want to run our tests in parallel (using something like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grosser/parallel_tests"},"parallel_tests"),"), then we will want to generate a uniquely named result file for each parallel process (otherwise concurrent test runs will overwrite the same file rendering the results effectively useless). To do that we can use interpolation thanks to ",(0,a.kt)("a",{parentName:"p",href:"http://www.stuartellis.eu/articles/erb/"},"ERB")," and an environment variable made available by parallel_tests."),(0,a.kt)("p",null,"Thankfully parallel_tests has a RSpec command helper file as well (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},".parallel_rspec"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: .parallel_rspec\n\n--format RspecJunitFormatter\n--out result<%= ENV['TEST_ENV_NUMBER'] %>.xml\n")),(0,a.kt)("p",null,"Now with numerous tests being run through ",(0,a.kt)("inlineCode",{parentName:"p"},"parallel_tests")," the final result will be a series of JUnit XML files (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"result1.xml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"result2.xml"),", etc.)."),(0,a.kt)("p",null,"And if we didn't want this to run all of the time (like if we only wanted JUnit XML output to get generated when running our tests on a CI server) then we can add a conditional to our ",(0,a.kt)("inlineCode",{parentName:"p"},".parallel_rspec")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: .parallel_rspec\n\n<% if ENV['CI'] %>\n--format RspecJunitFormatter\n--out results/result<%= ENV['TEST_ENV_NUMBER'] %>.xml\n<% end %>\n")),(0,a.kt)("p",null,"Now all we need to do is specify an environment variable at run time in order to trigger JUnit XML output (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"CI=on parallel_rspec"),")."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Now you're ready to plug your Selenium tests into a CI Server and let them report the results."),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:n(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},9417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);