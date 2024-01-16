"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={language:"ruby",level:1,hide_sidebar:!0,publish_date:new Date("2015-07-14T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")}},o=void 0,i={unversionedId:"junit-xml/ruby",id:"junit-xml/ruby",title:"ruby",description:"A Solution",source:"@site/docs/57-junit-xml/ruby.md",sourceDirName:"57-junit-xml",slug:"/junit-xml/ruby",permalink:"/docs/junit-xml/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/57-junit-xml/ruby.md",tags:[],version:"current",lastUpdatedBy:"Esther",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{language:"ruby",level:1,hide_sidebar:!0,publish_date:"2015-07-14T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"}}},s={},u=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"CI servers work with a standardized report format called JUnit XML which is a standard offering across testing frameworks. If it's not something available off the shelf for your framework, odds are there's a plug-in to enable it."),(0,a.kt)("p",null,"The report will include test results (e.g., failure messages and stack traces) and test metrics (e.g., start time, end time, number of tests, etc.). Your CI server (once configured to do so) will consume this report after each test run and tell you when things pass and fail. It will also offer trend data over time to help determine the stability of your test suite."),(0,a.kt)("p",null,"Let's go through an example of how to configure a test suite in order to output a JUnit XML report."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"http://rspec.info/"},"RSpec"),", you need a plugin to configure JUnit XML output. There are two popular ones:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/natritmeyer/yarjuf"},"yarjuf (Yet Another RSpec JUnit Formatter)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sj26/rspec_junit_formatter"},"RSpec JUnit Formatter"))),(0,a.kt)("p",null,"Let's step through how to use the latter of the two."),(0,a.kt)("p",null,"After installing RSpec JUnit Formatter we need to specify two new parameters at run-time: a formatter, and an output file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rspec --format RspecJunitFormatter  --out result.xml\n")),(0,a.kt)("p",null,"Running tests with these parameters will format the test results into JUnit XML and pipe them into a ",(0,a.kt)("inlineCode",{parentName:"p"},"result.xml")," file (and overwrite it on subsequent runs)."),(0,a.kt)("p",null,"If we didn't want to type these parameters out every time we could place them into an RSpec command helper file (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},".rspec"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: .rspec\n\n--format RspecJunitFormatter\n--out result.xml\n")),(0,a.kt)("p",null,"If we want to run our tests in parallel (using something like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grosser/parallel_tests"},"parallel_tests"),"), then we will want to generate a uniquely named result file for each parallel process (otherwise concurrent test runs will overwrite the same file rendering the results effectively useless). To do that we can use interpolation thanks to ",(0,a.kt)("a",{parentName:"p",href:"http://www.stuartellis.eu/articles/erb/"},"ERB")," and an environment variable made available by parallel_tests."),(0,a.kt)("p",null,"Thankfully parallel_tests has a RSpec command helper file as well (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},".parallel_rspec"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: .parallel_rspec\n\n--format RspecJunitFormatter\n--out result<%= ENV['TEST_ENV_NUMBER'] %>.xml\n")),(0,a.kt)("p",null,"Now with numerous tests being run through ",(0,a.kt)("inlineCode",{parentName:"p"},"parallel_tests")," the final result will be a series of JUnit XML files (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"result1.xml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"result2.xml"),", etc.)."),(0,a.kt)("p",null,"And if we didn't want this to run all of the time (like if we only wanted JUnit XML output to get generated when running our tests on a CI server) then we can add a conditional to our ",(0,a.kt)("inlineCode",{parentName:"p"},".parallel_rspec")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: .parallel_rspec\n\n<% if ENV['CI'] %>\n--format RspecJunitFormatter\n--out results/result<%= ENV['TEST_ENV_NUMBER'] %>.xml\n<% end %>\n")),(0,a.kt)("p",null,"Now all we need to do is specify an environment variable at run time in order to trigger JUnit XML output (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"CI=on parallel_rspec"),")."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Now you're ready to plug your Selenium tests into a CI Server and let them report the results."),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:r(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}m.isMDXComponent=!0},89417:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);