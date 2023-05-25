"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[40],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={title:"Download A File Revisited",id:"8-download-a-file-revisited-java",contentUrl:"docs/download-a-file-revisited/8-download-a-file-revisited-java",sidebar_label:"Java",text:"In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.",number:8,hide_table_of_contents:!0,publish_date:new Date("2015-11-10T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")},tags:["files","downloading"],level:2,category:["remote"],language:"java"},r="How to Download a File Without a Browser",l={unversionedId:"download-a-file-revisited/8-download-a-file-revisited-java",id:"download-a-file-revisited/8-download-a-file-revisited-java",title:"Download A File Revisited",description:"Intro",source:"@site/docs/8-download-a-file-revisited/java.mdx",sourceDirName:"8-download-a-file-revisited",slug:"/download-a-file-revisited/8-download-a-file-revisited-java",permalink:"/elemental-next/docs/download-a-file-revisited/8-download-a-file-revisited-java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/8-download-a-file-revisited/java.mdx",tags:[{label:"files",permalink:"/elemental-next/docs/tags/files"},{label:"downloading",permalink:"/elemental-next/docs/tags/downloading"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:168048e4,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{title:"Download A File Revisited",id:"8-download-a-file-revisited-java",contentUrl:"docs/download-a-file-revisited/8-download-a-file-revisited-java",sidebar_label:"Java",text:"In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.",number:8,hide_table_of_contents:!0,publish_date:"2015-11-10T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"},tags:["files","downloading"],level:2,category:["remote"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"Csharp",permalink:"/elemental-next/docs/download-a-file-revisited/8-download-a-file-revisited-csharp"},next:{title:"Python",permalink:"/elemental-next/docs/download-a-file-revisited/8-download-a-file-revisited-python"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-download-a-file-without-a-browser"},"How to Download a File Without a Browser"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"In a ",(0,o.kt)("a",{parentName:"p",href:"/tips/2-download-a-file"},"previous tip")," we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done."),(0,o.kt)("p",null,"While the previous method works, it requires a custom configuration that is inconsistent from browser to browser."),(0,o.kt)("p",null,"Ultimately, we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,o.kt)("em",{parentName:"p"},"can")," be downloaded, which we can do by using an HTTP client alongside Selenium in our test."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,o.kt)("em",{parentName:"p"},"can")," be downloaded. And we can do that by using an HTTP client alongside Selenium in our test."),(0,o.kt)("p",null,"With an HTTP library we can perform a header (or ",(0,o.kt)("inlineCode",{parentName:"p"},"HEAD"),") request for the file. Instead of downloading the file we'll receive header information for the file which contains information like the content type and content length (amongst other things). With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times (depending on the file size)."),(0,o.kt)("p",null,"Let's continue with an example."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"To start things off let's import our requisite classes (for annotations (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), matchers for our assertions (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.), and an HTTP library to handle our HEAD request (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.http.HttpResponse"),", etc.) and start our class with some setup and teardown methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// filename: DownloadFileRevisited.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.CoreMatchers.is;\nimport static org.hamcrest.CoreMatchers.not;\nimport static org.hamcrest.MatcherAssert.assertThat;\nimport org.apache.http.HttpResponse;\nimport org.apache.http.client.HttpClient;\nimport org.apache.http.client.methods.HttpHead;\nimport org.apache.http.impl.client.HttpClientBuilder;\n\npublic class DownloadFileRevisited {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,o.kt)("p",null,"Now we're ready to wire up our test."),(0,o.kt)("p",null,"It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a ",(0,o.kt)("inlineCode",{parentName:"p"},"HEAD")," request with it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// filename: DownloadFileRevisited.java\n// ...\n    @Test\n    public void downloadFileRevisitedTest() throws Exception {\n        driver.get("http://the-internet.herokuapp.com/download");\n        String link = driver.findElement(By.cssSelector(".example a:nth-of-type(1)")).getAttribute("href");\n\n        HttpClient httpClient = HttpClientBuilder.create().build();\n        HttpHead request = new HttpHead(link);\n        HttpResponse response = httpClient.execute(request);\n        String contentType = response.getFirstHeader("Content-Type").getValue();\n        int contentLength = Integer.parseInt(response.getFirstHeader("Content-Length").getValue());\n\n        assertThat(contentType, is("application/octet-stream"));\n        assertThat(contentLength, is(not(0)));\n    }\n\n}\n')),(0,o.kt)("p",null,"Once we receive the response we check it's header for the content type (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},'response.getFirstHeader("Content-Type")'),") and content length (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},'response.getFirstHeader("Content-Length")'),") to make sure the file is the correct type and not empty."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When you save this and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn clean install")," from the command-line) here is what will will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the browser"),(0,o.kt)("li",{parentName:"ul"},"Load the page"),(0,o.kt)("li",{parentName:"ul"},"Grab the URL of the first download link"),(0,o.kt)("li",{parentName:"ul"},"Perform a ",(0,o.kt)("inlineCode",{parentName:"li"},"HEAD")," request against it with an HTTP library"),(0,o.kt)("li",{parentName:"ul"},"Store the response headers"),(0,o.kt)("li",{parentName:"ul"},"Check the response headers to see that the file type is correct"),(0,o.kt)("li",{parentName:"ul"},"Check the response headers to see that the file is not empty"),(0,o.kt)("li",{parentName:"ul"},"Close the browser")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach."),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dave Haeffner profile picture",src:n(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}u.isMDXComponent=!0},9417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);