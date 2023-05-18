"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3968],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=m(a),c=n,d=h["".concat(s,".").concat(c)]||h[c]||u[c]||i;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const i={title:"3: Work With Frames",id:"3-work-with-frames-java",contentUrl:"docs/work-with-frames/3-work-with-frames-java",sidebar_label:"Java",text:"In this tip, you'll learn how to work with frames and write tests against them. On occasion, we may encounter relics of the front-end world, such as frames.",number:3,hide_table_of_contents:!0,publish_date:new Date("2015-11-09T00:00:00.000Z"),last_update:{date:new Date("2023-04-02T00:00:00.000Z")},tags:["template"],level:0,category:["fundamentals"],language:"java"},o="How to Work with Frames",l={unversionedId:"work-with-frames/3-work-with-frames-java",id:"work-with-frames/3-work-with-frames-java",title:"3: Work With Frames",description:"Intro",source:"@site/docs/3-work-with-frames/java.md",sourceDirName:"3-work-with-frames",slug:"/work-with-frames/3-work-with-frames-java",permalink:"/elemental-next/docs/work-with-frames/3-work-with-frames-java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-work-with-frames/java.md",tags:[{label:"template",permalink:"/elemental-next/docs/tags/template"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1680393600,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"3: Work With Frames",id:"3-work-with-frames-java",contentUrl:"docs/work-with-frames/3-work-with-frames-java",sidebar_label:"Java",text:"In this tip, you'll learn how to work with frames and write tests against them. On occasion, we may encounter relics of the front-end world, such as frames.",number:3,hide_table_of_contents:!0,publish_date:"2015-11-09T00:00:00.000Z",last_update:{date:"2023-04-02T00:00:00.000Z"},tags:["template"],level:0,category:["fundamentals"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"Csharp",permalink:"/elemental-next/docs/work-with-frames/3-work-with-frames-csharp"},next:{title:"Javascript",permalink:"/elemental-next/docs/work-with-frames/3-work-with-frames-javascript"}},s={},m=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:m},h="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-work-with-frames"},"How to Work with Frames"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"In this tip, you'll learn how to work with frames and write tests against them."),(0,n.kt)("p",null,"On occasion, we may encounter relics of the front-end world, such as frames. When writing tests against them, it's easy to make a mistake if we're not paying attention."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Rather than getting frustrated when authoring your tests, you can work with the elements in a frame by telling Selenium to switch to that frame first. Then the rest of your test should be more straightforward."),(0,n.kt)("p",null,"Let's explore further with some examples."),(0,n.kt)("h2",{id:"example-1"},"Example 1"),(0,n.kt)("p",null,"First we'll need to import our requisite classes (for annotations (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// filename: Frames.java\n\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.junit.Assert.assertThat;\n\npublic class Frames {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,n.kt)("p",null,"Now onto our test. In it we'll step through ",(0,n.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/nested_frames"},"an example of nested frames")," from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Frames.java\n// ...\n    @Test\n    public void nestedFrames() throws Exception {\n        driver.get("http://the-internet.herokuapp.com/nested_frames");\n        driver.switchTo().frame("frame-top");\n        driver.switchTo().frame("frame-middle");\n        assertThat(driver.findElement(By.id("content")).getText(), is(equalTo("MIDDLE")));\n    }\n// ...\n')),(0,n.kt)("p",null,"With Selenium's ",(0,n.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/WebDriver.html#switchTo--"},(0,n.kt)("inlineCode",{parentName:"a"},".switchTo()"))," method we can easily switch to the frame we want. When using it for frames (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"driver.switchTo().frame();"),") it accepts either an ID or name attribute. But in order to get the text of the middle frame (e.g., a frame nested within another frame), we need to switch to the parent frame (e.g., the top frame) first ",(0,n.kt)("em",{parentName:"p"},"and then")," switch to the child frame (e.g., the middle frame)."),(0,n.kt)("p",null,"Once we've done that we're able to find the element we need, grab it's text, and assert that it's what we expect."),(0,n.kt)("p",null,"While this example helps illustrate the point of frame switching, it's not very practical."),(0,n.kt)("h2",{id:"example-2"},"Example 2"),(0,n.kt)("p",null,"Here is a more likely example you'll run into -- working with a WYSIWYG Editor like ",(0,n.kt)("a",{parentName:"p",href:"http://www.tinymce.com/"},"TinyMCE"),". You can see the page we're testing ",(0,n.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/tinymce"},"here"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Frames.java\n// ...\n    @Test\n    public void iFrames() throws Exception {\n        driver.get("http://the-internet.herokuapp.com/tinymce");\n        driver.switchTo().frame("mce_0_ifr");\n        WebElement editor = driver.findElement(By.id("tinymce"));\n        String beforeText = editor.getText();\n        editor.clear();\n        editor.sendKeys("Hello World!");\n        String afterText = editor.getText();\n        assertThat(afterText, not(equalTo((beforeText))));\n// ...\n')),(0,n.kt)("p",null,"Once the page loads we switch into the frame that contains TinyMCE and..."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"grab the original text and store it"),(0,n.kt)("li",{parentName:"ul"},"clear and input new text"),(0,n.kt)("li",{parentName:"ul"},"grab the new text value"),(0,n.kt)("li",{parentName:"ul"},"assert that the original and new texts are not the same")),(0,n.kt)("p",null,"Keep in mind that if we need to access a part of the page outside of the frame we're currently in we'll need to switch to it. Thankfully Selenium has a method that enables us to quickly jump back to the top level of the page -- ",(0,n.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/WebDriver.TargetLocator.html#defaultContent--"},(0,n.kt)("inlineCode",{parentName:"a"},"driver.switchTo().defaultContent();")),"."),(0,n.kt)("p",null,"Here is what that looks like in practice."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Frames.java\n// ...\n        driver.switchTo().defaultContent();\n        assertThat(driver.findElement(By.cssSelector("h3")).getText(),\n                is("An iFrame containing the TinyMCE WYSIWYG Editor"));\n    }\n\n}\n')),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("p",null,"When you save this file and run it (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen:"),(0,n.kt)("u",null,"Example 1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the browser"),(0,n.kt)("li",{parentName:"ul"},"Visit the page"),(0,n.kt)("li",{parentName:"ul"},"Switch to the nested frame"),(0,n.kt)("li",{parentName:"ul"},"Grab the text from the frame and assert that Selenium is in the correct place"),(0,n.kt)("li",{parentName:"ul"},"Close the browser")),(0,n.kt)("u",null,"Example 2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the browser"),(0,n.kt)("li",{parentName:"ul"},"Visit the page"),(0,n.kt)("li",{parentName:"ul"},"Switch to the frame that contains the TinyMCE editor"),(0,n.kt)("li",{parentName:"ul"},"Find and store the text in the editor"),(0,n.kt)("li",{parentName:"ul"},"Clear the text in the editor"),(0,n.kt)("li",{parentName:"ul"},"Input new text in the editor"),(0,n.kt)("li",{parentName:"ul"},"Find and store the new text in the editor"),(0,n.kt)("li",{parentName:"ul"},"Assert that the original and new text entries don't match"),(0,n.kt)("li",{parentName:"ul"},"Switch to the top level of the page"),(0,n.kt)("li",{parentName:"ul"},"Grab the text from the top of the page and assert it's what we expect"),(0,n.kt)("li",{parentName:"ul"},"Close the browser")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Now you're ready to handily defeat frames when they cross your path."),(0,n.kt)("p",null,"Thanks to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip."),(0,n.kt)("p",null,"Happy Testing!"),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}u.isMDXComponent=!0}}]);