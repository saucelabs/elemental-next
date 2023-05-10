"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},167:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={title:"13: Work With Basic Auth",id:"13-work-with-basic-auth-java",contentUrl:"docs/how-to-access-basic-auth/13-work-with-basic-auth-java",sidebar_label:"Java",text:"Sometimes you'll work with applications that are secured behind Basic HTTP Authentication. In order to access them you'll need to pass credentials to the site when requesting a page otherwise you'll get a system level pop-up prompting you for a username and password rendering Selenium helpless.",number:13,hide_table_of_contents:!0,publish_date:new Date("2015-10-14T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")},tags:["authentication"],level:1,category:["troubleshooting"],language:"java"},o="How to Access Basic Auth",s={unversionedId:"how-to-access-basic-auth/13-work-with-basic-auth-java",id:"how-to-access-basic-auth/13-work-with-basic-auth-java",title:"13: Work With Basic Auth",description:"Intro",source:"@site/docs/13-how-to-access-basic-auth/java.md",sourceDirName:"13-how-to-access-basic-auth",slug:"/how-to-access-basic-auth/13-work-with-basic-auth-java",permalink:"/elemental-next/docs/how-to-access-basic-auth/13-work-with-basic-auth-java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/13-how-to-access-basic-auth/java.md",tags:[{label:"authentication",permalink:"/elemental-next/docs/tags/authentication"}],version:"current",frontMatter:{title:"13: Work With Basic Auth",id:"13-work-with-basic-auth-java",contentUrl:"docs/how-to-access-basic-auth/13-work-with-basic-auth-java",sidebar_label:"Java",text:"Sometimes you'll work with applications that are secured behind Basic HTTP Authentication. In order to access them you'll need to pass credentials to the site when requesting a page otherwise you'll get a system level pop-up prompting you for a username and password rendering Selenium helpless.",number:13,hide_table_of_contents:!0,publish_date:"2015-10-14T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"},tags:["authentication"],level:1,category:["troubleshooting"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"Csharp",permalink:"/elemental-next/docs/how-to-access-basic-auth/13-work-with-basic-auth-csharp"},next:{title:"Javascript",permalink:"/elemental-next/docs/how-to-access-basic-auth/13-work-with-basic-auth-javascript"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-access-basic-auth"},"How to Access Basic Auth"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"In this guide, you will learn how to pass credentials to a site when requesting a page that is secured behind Basic HTTP Authentication."),(0,r.kt)("p",null,"Sometimes you'll work with applications that are secured behind ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic HTTP Authentication")," (a.k.a. Basic Auth). In order to access them you'll need to pass credentials to the site when requesting a page otherwise you'll get a system level pop-up prompting you for a username and password -- rendering Selenium helpless."),(0,r.kt)("p",null,"Before Selenium 2 we were able to accomplish this by injecting credentials into a custom header, but now a popular way to do it is using something like ",(0,r.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"BrowserMob Proxy"),". Some people are also solving this issue with browser specific configurations but those methods feel a little heavy and complicated."),(0,r.kt)("p",null,"Instead, let's use a more straightforward approach that is browser agnostic and quick to setup."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By specifying the username and password ",(0,r.kt)("em",{parentName:"p"},"in the URL")," when visiting a page with Selenium, we can a side-step the system level dialog box and avoid setting up a proxy server. This approach will work for both HTTP or HTTPS pages."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"First let's import our requisite classes (for annotations (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// filename: WorkWithBasicAuth.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class WorkWithBasicAuth {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now to add our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: WorkWithBasicAuth.java\n// ...\n    @Test\n    public void workWithBasicAuthTest() {\n        driver.get("http://admin:admin@the-internet.herokuapp.com/basic_auth");\n        String pageMessage = driver.findElement(By.cssSelector("p")).getText();\n        assertThat(pageMessage, containsString("Congratulations!"));\n    }\n\n}\n')),(0,r.kt)("p",null,"In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"http://admin:admin@"),"). Once it loads we grab text from the page to make sure we ended up in the right place."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"Alternatively, we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."),(0,r.kt)("p",null,"Here's what the script would look like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: WorkWithBasicAuth2.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class WorkWithBasicAuth2 {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n        driver.get("http://admin:admin@the-internet.herokuapp.com/basic_auth");\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n\n    @Test\n    public void workWithBasicAuthTest2() {\n        driver.get("http://the-internet.herokuapp.com/basic_auth");\n        String pageMessage = driver.findElement(By.cssSelector("p")).getText();\n        assertThat(pageMessage, containsString("Congratulations!"));\n    }\n\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of each type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save the first example and run it here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth"),(0,r.kt)("li",{parentName:"ul"},"Get the page text"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("p",null,"And when you save the second example and run it here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth in the setup"),(0,r.kt)("li",{parentName:"ul"},"Navigate to the Basic Auth page (without providing credentials)"),(0,r.kt)("li",{parentName:"ul"},"Get the page text"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Hopefully this tip will help save you from getting tripped by Basic Auth when you come across it.\nThanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}h.isMDXComponent=!0}}]);