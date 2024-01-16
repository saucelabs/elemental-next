"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[48071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={language:"java",level:1,hide_sidebar:!0,publish_date:new Date("2015-08-25T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")}},i=void 0,l={unversionedId:"safari/java",id:"safari/java",title:"java",description:"A Solution",source:"@site/docs/69-safari/java.md",sourceDirName:"69-safari",slug:"/safari/java",permalink:"/docs/safari/java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/69-safari/java.md",tags:[],version:"current",lastUpdatedBy:"Esther",lastUpdatedAt:168048e4,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{language:"java",level:1,hide_sidebar:!0,publish_date:"2015-08-25T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"}}},s={},u=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"Running your Selenium tests on a different browser tends to require additional setup, and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/wiki/SafariDriver"},"SafariDriver")," is no exception."),(0,r.kt)("p",null,"The following example will go through how to do it and make sure it's working."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Run the following command on the terminal:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$  /usr/bin/safaridriver --enable")),(0,r.kt)("p",null,"After that, make sure it's enabled. To do that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"open ",(0,r.kt)("inlineCode",{parentName:"li"},"Safari")),(0,r.kt)("li",{parentName:"ol"},"go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Develop")),(0,r.kt)("li",{parentName:"ol"},"click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Allow Remote Automations"))),(0,r.kt)("p",null,"Let's wire up a simple test so we can see that everything works as expected."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"Let's wire up a simple test so we can see that everything works as expected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.safari.SafariDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class Safari {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new SafariDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n\n    @Test\n    public void dropdownTest() {\n        driver.get("http://the-internet.herokuapp.com/");\n        String title = driver.getTitle();\n        assertThat(title, is(equalTo("The Internet")));\n    }\n\n}\n')),(0,r.kt)("p",null,"When we run the test, we should see a successful communication between Selenium and Safari."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Keep in mind that Safari can load without you realizing it (since it doesn't obtain focus when launching with Selenium). When that happens you'll need to switch to Safari in order to see what the test is doing."),(0,r.kt)("p",null,"And if you're running Safari on a remote node (or set of nodes), you'll need to install and enable the SafariDriver browser extension on each of them."),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial code for this tip."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);