"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={title:"2: Download A File",id:"2-download-a-file-csharp",contentUrl:"docs/download-a-file/2-download-a-file-csharp",sidebar_label:"Csharp",text:"Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.",number:2,hide_table_of_contents:!0,publish_date:new Date("2015-07-27T00:00:00.000Z"),last_update:{date:new Date("2023-03-29T00:00:00.000Z")},tags:["files","downloading","file download"],level:2,category:["remote","fundamentals"],language:"csharp"},r="How To Download a File",l={unversionedId:"download-a-file/2-download-a-file-csharp",id:"download-a-file/2-download-a-file-csharp",title:"2: Download A File",description:"Intro",source:"@site/docs/2-download-a-file/csharp.md",sourceDirName:"2-download-a-file",slug:"/download-a-file/2-download-a-file-csharp",permalink:"/elemental-next/docs/download-a-file/2-download-a-file-csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-download-a-file/csharp.md",tags:[{label:"files",permalink:"/elemental-next/docs/tags/files"},{label:"downloading",permalink:"/elemental-next/docs/tags/downloading"},{label:"file download",permalink:"/elemental-next/docs/tags/file-download"}],version:"current",lastUpdatedBy:"Rajene Harris",lastUpdatedAt:1680048e3,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"2: Download A File",id:"2-download-a-file-csharp",contentUrl:"docs/download-a-file/2-download-a-file-csharp",sidebar_label:"Csharp",text:"Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.",number:2,hide_table_of_contents:!0,publish_date:"2015-07-27T00:00:00.000Z",last_update:{date:"2023-03-29T00:00:00.000Z"},tags:["files","downloading","file download"],level:2,category:["remote","fundamentals"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/elemental-next/docs/intro"},next:{title:"Java",permalink:"/elemental-next/docs/download-a-file/2-download-a-file-java"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-download-a-file"},"How To Download a File"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Just like with ",(0,o.kt)("a",{parentName:"p",href:"/docs/how-to-upload-a-file/"},"uploading files")," we hit the same issue with downloading them -- a dialog box\njust out of Selenium's reach. With some additional configuration, we can side-step the dialog box."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"In order to avoid the dialog box, we will be instructing the browser to download files to a specific location without being prompted."),(0,o.kt)("p",null,"After the file is downloaded we can then perform some simple checks to make sure the file is what we expect."),(0,o.kt)("p",null,"Let's continue with an example."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's start off by declaring our requisite classes for our testing framework (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"using NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"using OpenQA.Selenium"),", etc.), and leveraging common C# functions (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"using System.IO"),", etc.)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: FileDownload.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System.IO;\nusing System.Threading;\n// ...\n")),(0,o.kt)("p",null,"Now to create a class and add our test's setup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: FileDownload.cs\npublic class FileDownload\n{\n    IWebDriver Driver;\n    string FolderPath;\n\n    [SetUp]\n    public void SetUp()\n    {\n        FolderPath = @"C:\\Temp\\" + System.Guid.NewGuid().ToString();\n        Directory.CreateDirectory(FolderPath);\n\n        FirefoxOptions options = new FirefoxOptions();\n        options.SetPreference("browser.download.dir", FolderPath);\n        options.SetPreference("browser.download.folderList", 2);\n        options.SetPreference("browser.helperApps.neverAsk.saveToDisk",\n                      "image/jpeg, application/pdf, application/octet-stream");\n        options.SetPreference("pdfjs.disabled", true);\n        Driver = new FirefoxDriver(options);\n    }\n// ...\n')),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"SetUp()")," method is where the magic is happening in this example. In it we're creating a uniquely named temp directory (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Guid.NewGuid().ToString();"),"), configuring a browser profile object (for Firefox in this case), and plying it with the necessary configuration parameters to make it automatically download the file where we want (e.g., in the newly created temp directory)."),(0,o.kt)("p",null,"Here's a breakdown of each of the browser preferences being set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser.download.dir")," accepts a string. This is how we set the custom download path. It needs to be an absolute path."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser.download.folderList")," takes a number. It tells Firefox which download directory to use. ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," tells it to use a custom download path, wheras ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," would use the browser's default path, and ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," would place them on the Desktop."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser.helperApps.neverAsk.saveToDisk")," tells Firefox when not to prompt for a file download. It accepts a string of ",(0,o.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Internet_media_type"},"the file's MIME type"),". If you want to specify more than one, you do it with a comma-separated string (which we've done)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pdfjs.disabled")," is for when downloading PDFs. This overrides the sensible default in Firefox that previews PDFs in the browser. It accepts a boolean.")),(0,o.kt)("p",null,"This profile object is then passed into our instance of Selenium (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"Driver = new FirefoxDriver(Profile);"),")."),(0,o.kt)("p",null,"Now let's take care of our test's teardown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: FileDownload.cs\n// ...\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n        Directory.Delete(FolderPath, true);\n    }\n// ...\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"TearDown()")," we close the browser instance and then clean up the temp directory by deleting it. Specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," as a second parameter for ",(0,o.kt)("inlineCode",{parentName:"p"},"Directory.Delete()")," will recursively delete the files in the folder before deleting it."),(0,o.kt)("p",null,"Now to wire up our test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: FileDownload.cs\n// ...\n    [Test]\n    public void DownloadFileToDisk()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/download");\n        Driver.FindElement(By.CssSelector(".example a")).Click();\n        Thread.Sleep(2000);\n\n        DirectoryInfo DownloadFolder = new DirectoryInfo(FolderPath);\n        Assert.IsTrue(DownloadFolder.GetFiles().Length > 0, "File not downloaded");\n        foreach(FileInfo file in DownloadFolder.GetFiles())\n        {\n            Assert.IsTrue(file.Length > 0, "File empty");\n        }\n    }\n}\n')),(0,o.kt)("p",null,"After visiting the page we find the first download link and click it. The click triggers an automatic download to the temp directory created in ",(0,o.kt)("inlineCode",{parentName:"p"},"SetUp()"),". We need to wait for the download to finish, so we add a brief sleep (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"Thread.sleep(2000);"),"). After the file downloads, we perform some rudimentary checks to make sure the unique temp directory isn't empty and then check the file (or files) to see that they aren't empty either."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When you save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\FileDownload.sln")," from the command-line) here is will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a uniquely named temp directory in the present working directory"),(0,o.kt)("li",{parentName:"ul"},"Open the browser"),(0,o.kt)("li",{parentName:"ul"},"Visit the page"),(0,o.kt)("li",{parentName:"ul"},"Find and click the first download link on the page"),(0,o.kt)("li",{parentName:"ul"},"Automatically download the file to the temp directory without prompting"),(0,o.kt)("li",{parentName:"ul"},"Check that the temp directory is not empty"),(0,o.kt)("li",{parentName:"ul"},"Check that the downloaded file is not empty"),(0,o.kt)("li",{parentName:"ul"},"Close the browser"),(0,o.kt)("li",{parentName:"ul"},"Delete the temp directory")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"A similar approach can be applied to some other browsers with varying configurations. But downloading files this way is not sustainable or recommended. Mark Collin articulates this point well in his prominent write-up about it ",(0,o.kt)("a",{parentName:"p",href:"http://ardesco.lazerycode.com/index.php/2012/07/how-to-download-files-with-selenium-and-why-you-shouldnt/"},"here"),"."),(0,o.kt)("p",null,"Thanks to Jonathan Taylor for contributing the initial C# code for this tip!"),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by\nthousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect\nfor writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at\nnumerous conferences and meetups around the world about automated acceptance testing."))}u.isMDXComponent=!0}}]);