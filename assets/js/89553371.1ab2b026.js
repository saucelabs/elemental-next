"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"Javascript",id:"2-download-a-file-javascript",slug:"javascript/",number:2,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["files","downloading","file download"],level:2,category:["remote","fundamentals"],language:"javascript"},i="How to Download A File",l={unversionedId:"download-a-file/2-download-a-file-javascript",id:"download-a-file/2-download-a-file-javascript",title:"Javascript",description:"Intro",source:"@site/docs/2-download-a-file/javascript.md",sourceDirName:"2-download-a-file",slug:"/download-a-file/javascript/",permalink:"/elemental-next/docs/download-a-file/javascript/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-download-a-file/javascript.md",tags:[{label:"files",permalink:"/elemental-next/docs/tags/files"},{label:"downloading",permalink:"/elemental-next/docs/tags/downloading"},{label:"file download",permalink:"/elemental-next/docs/tags/file-download"}],version:"current",frontMatter:{title:"Javascript",id:"2-download-a-file-javascript",slug:"javascript/",number:2,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["files","downloading","file download"],level:2,category:["remote","fundamentals"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/elemental-next/docs/download-a-file/java/"},next:{title:"Python",permalink:"/elemental-next/docs/download-a-file/python/"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-download-a-file"},"How to Download A File"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Just like with ",(0,r.kt)("a",{parentName:"p",href:"/docs/how-to-upload-a-file/"},"uploading files")," we hit the same issue with downloading them -- a dialog box\njust out of Selenium's reach. With some additional configuration, we can side-step the dialog box."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"In order to avoid the dialog box, we will be instructing the browser to download files to a specific location without being prompted."),(0,r.kt)("p",null,"After the file is downloaded we can then perform some simple checks to make sure the file is what we expect."),(0,r.kt)("p",null,"Let's continue with an example."),(0,r.kt)("h2",{id:"an-example"},"An Example"),(0,r.kt)("p",null,"Let's start by pulling in our requisite libraries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/download.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\nconst firefox = require("selenium-webdriver/firefox");\nconst fs = require("fs");\nconst path = require("path");\n// ...\n')),(0,r.kt)("p",null,"Now to create a setup method for our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/download.spec.js\n// ...\ndescribe("File download", function() {\n  let driver;\n  const tmpDir = path.join(__dirname, "tmp");\n\n  beforeEach(async function() {\n    this.timeout(60000)\n      try {\n        if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);\n        let options = new firefox.Options()\n          .setPreference("browser.download.dir", tmpDir)\n          .setPreference("browser.download.folderList", 2)\n          .setPreference(\n            "browser.helperApps.neverAsk.saveToDisk",\n            "images/jpeg, application/pdf, application/octet-stream"\n          )\n          .setPreference("pdfjs.disabled", true);\n\n        driver = await new Builder()\n          .forBrowser("firefox")\n          .setFirefoxOptions(options)\n          .build();\n      } catch (ex) {\n       console.log(ex.stack)\n      }\n  });\n// ...\n')),(0,r.kt)("p",null,"After declaring our test suite, we declare two variables. One for the Selenium instance (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"driver"),") and the other for the temporary directory where we'll want to automatically download files to (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"tmpDir"),"). In it we're storing the absolute path to the current working directory, plus the name ",(0,r.kt)("inlineCode",{parentName:"p"},"tmp"),"."),(0,r.kt)("p",null,"In the setup method (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach"),") we create this directory if it's not already there, and then create a new browser options object (for Firefox in this case), specifying the necessary configuration parameters to make it automatically download the file where we want (e.g., in the newly created temp directory)."),(0,r.kt)("p",null,"Here's a breakdown of each of the browser preferences being set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browser.download.dir")," accepts a string. This is how we set the custom download path. It needs to be an absolute path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browser.download.folderList")," takes a number. It tells Firefox which download directory to use. ",(0,r.kt)("inlineCode",{parentName:"li"},"2")," tells it to use a custom download path, wheras ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," would use the browser's default path, and ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," would place them on the Desktop."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browser.helperApps.neverAsk.saveToDisk")," tells Firefox when not to prompt for a file download. It accepts a string of ",(0,r.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Internet_media_type"},"the file's MIME type"),". If you want to specify more than one, you do it with a comma-separated string (which we've done)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pdfjs.disabled")," is for when downloading PDFs. This overrides the sensible default in Firefox that previews PDFs in the browser. It accepts a boolean.")),(0,r.kt)("p",null,"We then hand the options object on to Selenium as part of the incantation to create a new browser instance."),(0,r.kt)("p",null,"Now let's take care of our test's teardown."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// filename: test/download.spec.js\n// ...\n  function cleanupTmpDir() {\n    if (fs.existsSync(tmpDir)) {\n      const files = fs.readdirSync(tmpDir).map(file => path.join(tmpDir, file));\n      files.forEach(file => fs.unlinkSync(file));\n      fs.rmdirSync(tmpDir);\n    }\n  }\n\n  afterEach(async function() {\n    this.timeout(60000);\n    await driver.quit();\n    cleanupTmpDir();\n  });\n// ...\n")),(0,r.kt)("p",null,"In the teardown (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach"),") we close the browser instance and then clean up the temp directory by deleting its contents, and then the directory itself."),(0,r.kt)("p",null,"Now to wire up our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/download.spec.js\n// ...\n  it("should automatically download to local disk", async function() {\n    this.timeout(15000);\n    await driver.get("http://the-internet.herokuapp.com/download");\n    await driver.findElement(By.css(".example a")).click();\n    const files = fs.readdirSync(tmpDir).map(file => path.join(tmpDir, file));\n    assert(files.length);\n    assert(fs.statSync(files[0]).size);\n  });\n});\n')),(0,r.kt)("p",null,"After visiting the page we find the first download link and click it. The click triggers an automatic download to the temp directory. After the file downloads, we perform some rudimentary checks to make sure the temp directory contains files and the first file in the directory is not empty."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) this is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a uniquely named temp directory in the present working directory"),(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Find and click the first download link on the page"),(0,r.kt)("li",{parentName:"ul"},"Automatically download the file to the temp directory without prompting"),(0,r.kt)("li",{parentName:"ul"},"Check that the temp directory is not empty"),(0,r.kt)("li",{parentName:"ul"},"Check that the downloaded file is not empty"),(0,r.kt)("li",{parentName:"ul"},"Close the browser"),(0,r.kt)("li",{parentName:"ul"},"Delete the temp directory")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"A similar approach can be applied to some other browsers with varying configurations to download a file into a temp directory, automaticaly close the browser, and delete the directory,"),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}u.isMDXComponent=!0}}]);