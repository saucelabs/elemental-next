"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Java",id:"16-take-screenshot-on-failure-java",slug:"java/",number:16,publish_date:new Date("2015-07-08T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")},tags:["reporting","screenshot"],level:2,category:["troubleshooting"],language:"java"},i="How to Take A Screenshot on Failure",s={unversionedId:"take-screenshot-on-failure/16-take-screenshot-on-failure-java",id:"take-screenshot-on-failure/16-take-screenshot-on-failure-java",title:"Java",description:"Intro",source:"@site/docs/16-take-screenshot-on-failure/java.md",sourceDirName:"16-take-screenshot-on-failure",slug:"/take-screenshot-on-failure/java/",permalink:"/elemental-next/docs/take-screenshot-on-failure/java/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/16-take-screenshot-on-failure/java.md",tags:[{label:"reporting",permalink:"/elemental-next/docs/tags/reporting"},{label:"screenshot",permalink:"/elemental-next/docs/tags/screenshot"}],version:"current",frontMatter:{title:"Java",id:"16-take-screenshot-on-failure-java",slug:"java/",number:16,publish_date:"2015-07-08T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"},tags:["reporting","screenshot"],level:2,category:["troubleshooting"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"CSharp",permalink:"/elemental-next/docs/take-screenshot-on-failure/csharp/"},next:{title:"Javascript",permalink:"/elemental-next/docs/take-screenshot-on-failure/javascript/"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-take-a-screenshot-on-failure"},"How to Take A Screenshot on Failure"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"With browser tests it can often be challenging to track down the issue that caused a failure."),(0,a.kt)("p",null,"By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"A simple way to gain insight into your test failures is to capture screenshots at the moment of failure. This is something that is fairly quick to add to your tests, and allows you to review these error messages."),(0,a.kt)("p",null,"Here is an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's start by importing our requisite classes (for annotations (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with a setup method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// filename: Screenshot.java\nimport org.junit.Before;\nimport org.junit.Rule;\nimport org.junit.Test;\nimport org.junit.rules.TestRule;\nimport org.junit.rules.TestWatcher;\nimport org.junit.runner.Description;\nimport org.openqa.selenium.OutputType;\nimport org.openqa.selenium.TakesScreenshot;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport java.io.File;\nimport java.io.IOException;\nimport org.apache.commons.io.FileUtils;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class Screenshot {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n// ...\n")),(0,a.kt)("p",null,"We still need to handle our teardown. But in order to get the timing right with screenshots on failure we'll need to break from the norm of a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"@After")," annotation. For this we'll look to a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/junit-team/junit/wiki/Rules"},"JUnit Rule"),", specifically the ",(0,a.kt)("a",{parentName:"p",href:"http://junit.org/apidocs/org/junit/rules/TestWatcher.html"},"TestWatcher"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Screenshot.java\n// ...\n    @Rule\n    public TestRule watcher = new TestWatcher() {\n        @Override\n        protected void failed(Throwable throwable, Description description) {\n            File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);\n            try {\n                FileUtils.copyFile(scrFile,\n                        new File("failshot_"\n                                + description.getClassName()\n                                + "_" + description.getMethodName()\n                                + ".png"));\n            } catch (IOException exception) {\n                exception.printStackTrace();\n            }\n        }\n\n        @Override\n        protected void finished(Description description) {\n            driver.quit();\n        }\n    };\n// ...\n')),(0,a.kt)("p",null,"With a ",(0,a.kt)("inlineCode",{parentName:"p"},"TestWatcher")," we easily gain access to a test after it's failed (e.g., in the ",(0,a.kt)("inlineCode",{parentName:"p"},"failed")," method) and when the test completes regardless of it's outcome (e.g., the ",(0,a.kt)("inlineCode",{parentName:"p"},"finished")," method). So for our teardown we issue ",(0,a.kt)("inlineCode",{parentName:"p"},"driver.quit();")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"finished"),". And when there's a failure we capture a screenshot and write it to disk (in the current working directory) in ",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),"."),(0,a.kt)("p",null,"There are numerous ways to make the filename unique (e.g., unique ID, timestamp, etc.). The simplest way to get started is with the test class name and the test method name, which we've done."),(0,a.kt)("p",null,"Now let's wire up our test with a forced failure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Screenshot.java\n// ...\n    @Test\n    public void OnError() {\n        driver.get("http://the-internet.herokuapp.com");\n        assertThat(false, is(true));\n    }\n\n}\n')),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Fail"),(0,a.kt)("li",{parentName:"ul"},"Capture a screenshot in the current working directory with the name ",(0,a.kt)("inlineCode",{parentName:"li"},"failshot_Screenshot_OnError.png")),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Having a screenshot to aid in troubleshooting failing tests along with a stack trace helps in having more insight."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}h.isMDXComponent=!0}}]);