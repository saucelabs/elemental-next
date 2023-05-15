"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9488],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=o,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const i={title:"1: How To Upload A File",id:"1-upload-a-file-java",contentUrl:"docs/how-to-upload-a-file/1-upload-a-file-java",sidebar_label:"Java",text:"Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium. In these cases people often look to a third-party tool to manipulate this window.",number:1,hide_table_of_contents:!0,publish_date:new Date("2023-02-17T00:00:00.000Z"),last_update:{date:new Date("2023-03-12T00:00:00.000Z")},tags:["file","upload","file upload"],level:1,category:["remote","fundamentals"],language:"java"},r="How to Upload a file",l={unversionedId:"how-to-upload-a-file/1-upload-a-file-java",id:"how-to-upload-a-file/1-upload-a-file-java",title:"1: How To Upload A File",description:"Intro",source:"@site/docs/1-how-to-upload-a-file/java.md",sourceDirName:"1-how-to-upload-a-file",slug:"/how-to-upload-a-file/1-upload-a-file-java",permalink:"/elemental-next/docs/how-to-upload-a-file/1-upload-a-file-java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1-how-to-upload-a-file/java.md",tags:[{label:"file",permalink:"/elemental-next/docs/tags/file"},{label:"upload",permalink:"/elemental-next/docs/tags/upload"},{label:"file upload",permalink:"/elemental-next/docs/tags/file-upload"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1678579200,formattedLastUpdatedAt:"Mar 12, 2023",frontMatter:{title:"1: How To Upload A File",id:"1-upload-a-file-java",contentUrl:"docs/how-to-upload-a-file/1-upload-a-file-java",sidebar_label:"Java",text:"Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium. In these cases people often look to a third-party tool to manipulate this window.",number:1,hide_table_of_contents:!0,publish_date:"2023-02-17T00:00:00.000Z",last_update:{date:"2023-03-12T00:00:00.000Z"},tags:["file","upload","file upload"],level:1,category:["remote","fundamentals"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"Csharp",permalink:"/elemental-next/docs/how-to-upload-a-file/1-upload-a-file-csharp"},next:{title:"Javascript",permalink:"/elemental-next/docs/how-to-upload-a-file/1-upload-a-file-javascript"}},p={},s=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-upload-a-file"},"How to Upload a file"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium."),(0,o.kt)("p",null,"In these cases people often look to a third-party tool to manipulate this window (e.g., ",(0,o.kt)("a",{parentName:"p",href:"http://www.toolsqa.com/selenium-webdriver/autoit-selenium-webdriver/"},"AutoIt"),"). While this can help solve your short-term need, it sets you up for failure later by chaining you to a specific platform (e.g., AutoIt only works on Windows), effectively limiting your ability to test this functionality on different browser & operating system combinations."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"A work-around for this problem is to side-step the system dialog box entirely. We can do this by using Selenium to insert the full path of the file we want to upload (as text) ",(0,o.kt)("em",{parentName:"p"},"into")," the form and then submit the form."),(0,o.kt)("p",null,"Let's step through an example."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: We are using ",(0,o.kt)("a",{parentName:"strong",href:"http://the-internet.herokuapp.com/upload"},"a file upload example")," found on ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/tourdedave/the-internet"},"the-internet"),".")),(0,o.kt)("p",null,"First let's import our requisite classes for annotations (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), matchers for assertions (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc. ), and something to handle local files (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"java.io.File"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// filename: Upload.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.junit.Assert.assertThat;\nimport java.io.File;\n")),(0,o.kt)("p",null,"Now to create a class and take care of the test's setup and teardown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// filename: Upload.java\n// ...\npublic class Upload {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n")),(0,o.kt)("p",null,"After specifying the class (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"public class Upload {"),") we create a field variable (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"WebDriver driver;"),") to store our Selenium instance for reuse throughout the class. We then create a ",(0,o.kt)("inlineCode",{parentName:"p"},"setUp()")," method with a ",(0,o.kt)("inlineCode",{parentName:"p"},"@Before")," annotation so it runs before our test. In this method we are creating an instance of Selenium with Firefox (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"driver = new FirefoxDriver();"),")."),(0,o.kt)("p",null,"After our test executes, the ",(0,o.kt)("inlineCode",{parentName:"p"},"tearDown()")," method will run thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"@After")," annotation. This calls ",(0,o.kt)("inlineCode",{parentName:"p"},"driver.quit();")," which will close the browser instance."),(0,o.kt)("p",null,"Now to wire up our test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    @Test\n    public void uploadFile() throws Exception {\n        String filename = "some-file.txt";\n        File file = new File(filename);\n        String path = file.getAbsolutePath();\n        driver.get("http://the-internet.herokuapp.com/upload");\n        driver.findElement(By.id("file-upload")).sendKeys(path);\n        driver.findElement(By.id("file-submit")).click();\n        String text = driver.findElement(By.id("uploaded-files")).getText();\n        assertThat(text, is(equalTo(filename)));\n    }\n\n}\n')),(0,o.kt)("p",null,"We create an ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadFile()")," method and annotate it with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Test")," so it is run as a test. In it we create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"some-file.txt")," in the present working directory and get it's absolute path."),(0,o.kt)("p",null,"Next we visit the page with the upload form, input the string value of ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," (e.g., the full path to the file plus the filename with it's extension), and submit the form. After the file is uploaded to the page it will display the filename it just processed. We use this text to perform our assertion (making sure the uploaded file is what we expect)."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When we save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the browser"),(0,o.kt)("li",{parentName:"ul"},"Visit the upload form page"),(0,o.kt)("li",{parentName:"ul"},"Inject the file path into the form and submit it"),(0,o.kt)("li",{parentName:"ul"},"Page displays the uploaded filename"),(0,o.kt)("li",{parentName:"ul"},"Grab the text from the page and assert it's what we expect"),(0,o.kt)("li",{parentName:"ul"},"Close the browser")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This approach will work across all browsers. But if you want to use it with a remote instance (e.g., a Selenium Grid or Sauce Labs), then you'll want to have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/blob/ab1e647d0fc8fc39e6b00ae94321ab228b6728f2/java/client/src/org/openqa/selenium/remote/FileDetector.java"},(0,o.kt)("inlineCode",{parentName:"a"},"FileDetector")),". You can see a write-up on it from Sauce Labs ",(0,o.kt)("a",{parentName:"p",href:"https://saucelabs.com/resources/articles/selenium-file-upload"},"here"),"==",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"!! Broken link!!")),"==."),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip!"),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);