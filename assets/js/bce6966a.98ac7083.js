"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={title:"12: Opt Out of AB Tests",id:"12-opt-out-of-ab-tests-java",contentUrl:"docs/opt-out-of-ab-tests/12-opt-out-of-ab-tests-java",sidebar_label:"Java",text:"Occasionally when running tests you may see unexpected behavior due to A/B testing of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests.",number:12,hide_table_of_contents:!0,publish_date:new Date("2015-10-15T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")},tags:["ab tests","optimizely","opt-out"],level:2,category:["troubleshooting"],language:"java"},i="How to Opt-out of A/B Tests",s={unversionedId:"opt-out-of-ab-tests/12-opt-out-of-ab-tests-java",id:"opt-out-of-ab-tests/12-opt-out-of-ab-tests-java",title:"12: Opt Out of AB Tests",description:"Intro",source:"@site/docs/12-opt-out-of-ab-tests/java.md",sourceDirName:"12-opt-out-of-ab-tests",slug:"/opt-out-of-ab-tests/12-opt-out-of-ab-tests-java",permalink:"/elemental-next/docs/opt-out-of-ab-tests/12-opt-out-of-ab-tests-java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/12-opt-out-of-ab-tests/java.md",tags:[{label:"ab tests",permalink:"/elemental-next/docs/tags/ab-tests"},{label:"optimizely",permalink:"/elemental-next/docs/tags/optimizely"},{label:"opt-out",permalink:"/elemental-next/docs/tags/opt-out"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:168048e4,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{title:"12: Opt Out of AB Tests",id:"12-opt-out-of-ab-tests-java",contentUrl:"docs/opt-out-of-ab-tests/12-opt-out-of-ab-tests-java",sidebar_label:"Java",text:"Occasionally when running tests you may see unexpected behavior due to A/B testing of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests.",number:12,hide_table_of_contents:!0,publish_date:"2015-10-15T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"},tags:["ab tests","optimizely","opt-out"],level:2,category:["troubleshooting"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"Csharp",permalink:"/elemental-next/docs/opt-out-of-ab-tests/12-opt-out-of-ab-tests-csharp"},next:{title:"Javascript",permalink:"/elemental-next/docs/opt-out-of-ab-tests/12-opt-out-of-ab-tests-javascript"}},l={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},h="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-opt-out-of-ab-tests"},"How to Opt-out of A/B Tests"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Occasionally when running tests you may see unexpected behavior due to ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/A/B_testing"},"A/B testing (a.k.a. split testing)")," of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"First, here is a primer on Split Testing."),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"split-testing"},"Split Testing"),(0,o.kt)("p",{parentName:"blockquote"},"Split testing is a simple way to experiment with an application's features to see which changes lead to higher user engagement. A simple example would be testing variations of an e-mail landing page to see if more people sign up. In such a split test there would be the control (how the application looks and behaves now) and variants (e.g., 2 or 3 changes that could include changing text or images on the page, element positioning, color of the submit button, etc)."),(0,o.kt)("p",{parentName:"blockquote"},"Once the variants are configured, they are put into rotation, and the experiment starts. During this experiment each user will see a different version of the feature and their engagement with it will be tracked. Split tests live for the length of the experiment or until a winner is found (e.g., tracking indicates that a variant converted higher than the control). If no winner is found, new variants may be created and another experiment tried. If a winner is found, then the winning variant becomes the new control and the feature gets updated accordingly.")),(0,o.kt)("p",null,"Thankfully there are some standard opt-out mechanisms built into A/B testing platforms. They tend to come in the form of an appended URL or forging a cookie."),(0,o.kt)("p",null,"Let's start with an example for each approach with a popular A/B testing platform, ",(0,o.kt)("a",{parentName:"p",href:"https://www.optimizely.com/"},"Optimizely"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Our example page is from ",(0,o.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet")," and can be seen ",(0,o.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/abtest"},"here"),". There are three different variants of the page that are available, each with different heading text:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Control: ",(0,o.kt)("inlineCode",{parentName:"li"},"A/B Test Control")),(0,o.kt)("li",{parentName:"ul"},"Variation 1: ",(0,o.kt)("inlineCode",{parentName:"li"},"A/B Test Variation 1")),(0,o.kt)("li",{parentName:"ul"},"Opt-out: ",(0,o.kt)("inlineCode",{parentName:"li"},"No A/B Test"))),(0,o.kt)("p",null,"Let's start by importing our requisite classes (for annotations (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// filename: ABTestOptOut.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.Cookie;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class ABTestOptOut {\n\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,o.kt)("p",null,"Now let's wire up our first test to step through visiting the page and verifying that the text changes as we forge an opt-out cookie."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// filename: ABTestOptOut.java\n// ...\n    @Test\n    public void WithCookieAfterVisitingPage() {\n        driver.get("http://the-internet.herokuapp.com/abtest");\n        String headingText = driver.findElement(By.tagName("h3")).getText();\n        assertThat(headingText, startsWith("A/B Test"));\n        driver.manage().addCookie(new Cookie("optimizelyOptOut", "true"));\n        driver.navigate().refresh();\n        headingText = driver.findElement(By.cssSelector("h3")).getText();\n        assertThat(headingText, is("No A/B Test"));\n    }\n// ...\n')),(0,o.kt)("p",null,"After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it starts with the text ",(0,o.kt)("inlineCode",{parentName:"p"},'"A/B Test"'),". After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again."),(0,o.kt)("p",null,"We could also load the opt-out cookie ",(0,o.kt)("em",{parentName:"p"},"before")," navigating to the page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// filename: ABTestOptOut.java\n// ...\n    @Test\n    public void WithCookieBeforeVisitingPage() {\n        driver.get("http://the-internet.herokuapp.com");\n        driver.manage().addCookie(new Cookie("optimizelyOptOut", "true"));\n        driver.get("http://the-internet.herokuapp.com/abtest");\n        assertThat(driver.findElement(By.cssSelector("h3")).getText(), is("No A/B Test"));\n    }\n// ...\n')),(0,o.kt)("p",null,"Here we are navigating to the main page of the site first (to establish the host) and then adding the opt-out cookie. If we didn't visit the site first, then adding the cookie wouldn't have worked. Once added, we navigate to the example page and perform our checks just like before."),(0,o.kt)("p",null,"Alternatively, we can achieve the same thing without forging a cookie. Instead we can append an opt-out query to the URL when visiting the page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// filename: ABTestOptOut.java\n// ...\n    @Test\n    public void WithOptOutUrl() {\n        driver.get("http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");\n        driver.switchTo().alert().dismiss();\n\n        Thread.sleep(2000);\n        assertThat(driver.findElement(By.cssSelector("h3")).getText(), is("No A/B Test"));\n        Thread.sleep(2000);\n    }\n\n}\n')),(0,o.kt)("p",null,"By appending ",(0,o.kt)("inlineCode",{parentName:"p"},"?optimizely_opt_out=true")," we achieve the same outcome as before. Keep in mind that this approach triggers a JavaScript alert, so we have to switch to and dismiss it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"driver.switchTo().alert().dismiss();"),") before performing our check."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When you save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the browser"),(0,o.kt)("li",{parentName:"ul"},"Opt-out of the split tests (either by cookie or appended URL)"),(0,o.kt)("li",{parentName:"ul"},"Visit the split testing page"),(0,o.kt)("li",{parentName:"ul"},"Grab the header text"),(0,o.kt)("li",{parentName:"ul"},"Confirm that the session is opted out of the split tests"),(0,o.kt)("li",{parentName:"ul"},"Close the browser")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Hopefully this tip was helpful in guiding you in different methods of how to opt out of split tests."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);