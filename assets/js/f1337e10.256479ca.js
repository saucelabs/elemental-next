"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8457],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const o={title:"Javascript",id:"1-upload-a-file-javascript",slug:"javascript/",number:1,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["file","upload","file upload"],level:1,category:["remote","fundamentals"],language:"javascript"},r="How to Upload a File",l={unversionedId:"how-to-upload-a-file/1-upload-a-file-javascript",id:"how-to-upload-a-file/1-upload-a-file-javascript",title:"Javascript",description:"Intro",source:"@site/docs/1-how-to-upload-a-file/javascript.md",sourceDirName:"1-how-to-upload-a-file",slug:"/how-to-upload-a-file/javascript/",permalink:"/elemental-next/docs/how-to-upload-a-file/javascript/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1-how-to-upload-a-file/javascript.md",tags:[{label:"file",permalink:"/elemental-next/docs/tags/file"},{label:"upload",permalink:"/elemental-next/docs/tags/upload"},{label:"file upload",permalink:"/elemental-next/docs/tags/file-upload"}],version:"current",frontMatter:{title:"Javascript",id:"1-upload-a-file-javascript",slug:"javascript/",number:1,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["file","upload","file upload"],level:1,category:["remote","fundamentals"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/elemental-next/docs/how-to-upload-a-file/java/"},next:{title:"Python",permalink:"/elemental-next/docs/how-to-upload-a-file/python/"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-upload-a-file"},"How to Upload a File"),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium."),(0,i.kt)("p",null,"In these cases people often look to a third-party tool to manipulate this window (e.g., ",(0,i.kt)("a",{parentName:"p",href:"http://www.toolsqa.com/selenium-webdriver/autoit-selenium-webdriver/"},"AutoIt"),"). While this can help solve your short-term need, it sets you up for failure later by chaining you to a specific platform (e.g., AutoIt only works on Windows), effectively limiting your ability to test this functionality on different browser & operating system combinations."),(0,i.kt)("h2",{id:"a-solution"},"A Solution"),(0,i.kt)("p",null,"A work-around for this problem is to side-step the system dialog box entirely. We can do this by using Selenium to insert the full path of the file we want to upload (as text) into the form and then submit the form."),(0,i.kt)("p",null,"Let's step through an example."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE: We are using ",(0,i.kt)("a",{parentName:"strong",href:"http://the-internet.herokuapp.com/upload"},"a file upload example")," found on ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/tourdedave/the-internet"},"the-internet"),".")),(0,i.kt)("p",null,"First let's pull in our requisite libraries for assertions, constructing a path to a file, and driving the browser with Selenium."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/upload.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\nconst path = require("path");\n// ...\n')),(0,i.kt)("p",null,"Now to create a new test class and add in test setup and teardown for it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/upload.spec.js\ndescribe("Upload Test", function() {\n    let driver;\n\n    beforeEach(async function() {\n      this.timeout(60000)\n      try{\n        driver = await new Builder().forBrowser("firefox").build();\n      } catch (ex) {\n        console.log(ex.stack)\n      }\n    });\n\n    afterEach(async function() {\n      this.timeout(60000)\n      await driver.quit();\n    });\n// ...\n')),(0,i.kt)("p",null,"After declaring the class we create two methods. The first method, ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeEach"),", will execute before each test in this class. In it we are launching a new instance of Firefox with Selenium and storing it in a class variable that we'll use throughout this class. After our test executes the second method, ",(0,i.kt)("inlineCode",{parentName:"p"},"afterEach"),", will execute. This calls ",(0,i.kt)("inlineCode",{parentName:"p"},"driver.quit()")," which ends the session by closing the browser instance and then destroying the Selenium object in-memory."),(0,i.kt)("p",null,"Now to wire up our test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/upload.spec.js\n// ...\n  it("upload a file", async function() {\n    let filename = "some-file.txt";\n    let filePath = path.join(process.cwd(), filename);\n\n    await driver.get("http://the-internet.herokuapp.com/upload");\n    await driver.findElement(By.id("file-upload")).sendKeys(filePath);\n    await driver.findElement(By.id("file-submit")).click();\n\n    let text = await driver.findElement(By.id("uploaded-files")).getText();\n    assert.equal(text, filename);\n  });\n});\n')),(0,i.kt)("p",null,"After declaring the test method (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},'it("upload a file", async function() {'),") we specify the name of file we'd like to upload. It's a text file called ",(0,i.kt)("inlineCode",{parentName:"p"},"some-file.txt")," in the current working directory. We determine the path to this file and store it in a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"filePath"),"."),(0,i.kt)("p",null,"Next we visit the page with the upload form, input the string value of ",(0,i.kt)("inlineCode",{parentName:"p"},"filePath"),", and click the submit button on the form. After the file is uploaded to the page it will display the filename it just processed. We use this text on the page to perform our assertion (making sure the uploaded file is what we expect)."),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"When we save this file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) this is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the browser"),(0,i.kt)("li",{parentName:"ul"},"Visit the upload form page"),(0,i.kt)("li",{parentName:"ul"},"Inject the file path into the form and submit it"),(0,i.kt)("li",{parentName:"ul"},"Page displays the uploaded filename"),(0,i.kt)("li",{parentName:"ul"},"Grab the text from the page and assert it's what we expect"),(0,i.kt)("li",{parentName:"ul"},"Close the browser")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This approach will work across all browsers. If you want to use it with a remote instance (e.g., on Selenium Grid or Sauce Labs) then you'll want to have a look at ",(0,i.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/remote/index_exports_FileDetector.html"},(0,i.kt)("inlineCode",{parentName:"a"},"file_detector")),"."),(0,i.kt)("p",null,"Happy Testing!"),(0,i.kt)("h2",{id:"about-the-author"},"About the Author"),(0,i.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,i.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);