"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1090:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={title:"Java",id:"69-safari-java",slug:"java/",number:69,publish_date:new Date("2015-08-25T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")},tags:["safari","drivers","safaridriver","different browsers"],level:1,category:["tools"],language:"java"},o="Safari Browser",l={unversionedId:"updated-tips/safari/69-safari-java",id:"updated-tips/safari/69-safari-java",title:"Java",description:"Intro",source:"@site/docs/69-safari/java.md",sourceDirName:"updated-tips/69-safari",slug:"/safari/java/",permalink:"/elemental-next/docs/safari/java/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/69-safari/java.md",tags:[{label:"safari",permalink:"/elemental-next/docs/tags/safari"},{label:"drivers",permalink:"/elemental-next/docs/tags/drivers"},{label:"safaridriver",permalink:"/elemental-next/docs/tags/safaridriver"},{label:"different browsers",permalink:"/elemental-next/docs/tags/different-browsers"}],version:"current",frontMatter:{title:"Java",id:"69-safari-java",slug:"java/",number:69,publish_date:"2015-08-25T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"},tags:["safari","drivers","safaridriver","different browsers"],level:1,category:["tools"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"CSharp",permalink:"/elemental-next/docs/safari/csharp/"},next:{title:"Ruby",permalink:"/elemental-next/docs/safari/69-safari-ruby"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"safari-browser"},"Safari Browser"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Running your Selenium tests on a different browser tends to require additional setup, and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/wiki/SafariDriver"},"SafariDriver")," is no exception."),(0,n.kt)("p",null,"The following example will go through how to do it and make sure it's working."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Run the following command on the terminal:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$  /usr/bin/safaridriver --enable")),(0,n.kt)("p",null,"After that, make sure it's enabled. To do that:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"open ",(0,n.kt)("inlineCode",{parentName:"li"},"Safari")),(0,n.kt)("li",{parentName:"ol"},"go to ",(0,n.kt)("inlineCode",{parentName:"li"},"Develop")),(0,n.kt)("li",{parentName:"ol"},"click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Allow Remote Automations"))),(0,n.kt)("p",null,"Let's wire up a simple test so we can see that everything works as expected."),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("p",null,"Let's wire up a simple test so we can see that everything works as expected."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.safari.SafariDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class Safari {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new SafariDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n\n    @Test\n    public void dropdownTest() {\n        driver.get("http://the-internet.herokuapp.com/");\n        String title = driver.getTitle();\n        assertThat(title, is(equalTo("The Internet")));\n    }\n\n}\n')),(0,n.kt)("p",null,"When we run the test, we should see a successful communication between Selenium and Safari."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Keep in mind that Safari can load without you realizing it (since it doesn't obtain focus when launching with Selenium). When that happens you'll need to switch to Safari in order to see what the test is doing."),(0,n.kt)("p",null,"And if you're running Safari on a remote node (or set of nodes), you'll need to install and enable the SafariDriver browser extension on each of them."),(0,n.kt)("p",null,"Thanks to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial code for this tip."),(0,n.kt)("p",null,"Happy Testing!"),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);