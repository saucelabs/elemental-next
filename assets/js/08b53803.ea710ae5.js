"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const i={title:"2: Download A File",id:"2-download-a-file-python",contentUrl:"docs/download-a-file/2-download-a-file-python",sidebar_label:"Python",text:"Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.",number:2,hide_table_of_contents:!0,publish_date:new Date("2016-09-23T00:00:00.000Z"),last_update:{date:new Date("2023-03-02T00:00:00.000Z")},tags:["files","downloading","file download"],level:2,category:["remote","fundamentals"],language:"python"},l="How to Download A File",r={unversionedId:"download-a-file/2-download-a-file-python",id:"download-a-file/2-download-a-file-python",title:"2: Download A File",description:"Intro",source:"@site/docs/2-download-a-file/python.md",sourceDirName:"2-download-a-file",slug:"/download-a-file/2-download-a-file-python",permalink:"/elemental-next/docs/download-a-file/2-download-a-file-python",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-download-a-file/python.md",tags:[{label:"files",permalink:"/elemental-next/docs/tags/files"},{label:"downloading",permalink:"/elemental-next/docs/tags/downloading"},{label:"file download",permalink:"/elemental-next/docs/tags/file-download"}],version:"current",lastUpdatedBy:"Rajene Harris",lastUpdatedAt:1677715200,formattedLastUpdatedAt:"Mar 2, 2023",frontMatter:{title:"2: Download A File",id:"2-download-a-file-python",contentUrl:"docs/download-a-file/2-download-a-file-python",sidebar_label:"Python",text:"Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.",number:2,hide_table_of_contents:!0,publish_date:"2016-09-23T00:00:00.000Z",last_update:{date:"2023-03-02T00:00:00.000Z"},tags:["files","downloading","file download"],level:2,category:["remote","fundamentals"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/elemental-next/docs/download-a-file/2-download-a-file-javascript"},next:{title:"Ruby",permalink:"/elemental-next/docs/download-a-file/2-download-a-file-ruby"}},d={},s=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-download-a-file"},"How to Download A File"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Just like with ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-to-upload-a-file/"},"uploading files")," we hit the same issue with downloading them -- a dialog box\njust out of Selenium's reach. With some additional configuration, we can side-step the dialog box."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"In order to avoid the dialog box, we will be instructing the browser to download files to a specific location without being prompted."),(0,a.kt)("p",null,"After the file is downloaded we can then perform some simple checks to make sure the file is what we expect."),(0,a.kt)("p",null,"Let's continue with an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's start by pulling in our requisite libraries for interacting with the operating system (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"import os"),"), creating a temporary directory and cleaning it up, using our testing framework (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"import unittest"),"), and driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: download.py\nimport os\nimport time\nimport shutil\nimport tempfile\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.firefox.options import Options\nfrom selenium.webdriver.common.by import By\n\n# ...\n")),(0,a.kt)("p",null,"Now to create a test class and add our test's setup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# filename: download.py\nclass Download(unittest.TestCase):\n\n    def setUp(self):\n        self.download_dir = tempfile.mkdtemp()\n        options = Options()\n        options.set_preference("browser.download.dir", self.download_dir)\n        options.set_preference("browser.download.folderList", 2)\n        options.set_preference(\n            "browser.helperApps.neverAsk.saveToDisk",\n            "images/jpeg, application/pdf, application/octet-stream")\n        options.set_preference("pdfjs.disabled", True)\n        self.driver = webdriver.Firefox(options=options)\n# ...\n')),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp(self):")," method is where the magic is happening in this example. In it we're creating a uniquely named temp directory (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"self.download_dir = tempfile.mkdtemp()"),"), configuring a browser profile object (for Firefox in this case), and plying it with the necessary configuration parameters to make it automatically download the file where we want (e.g., in the newly created temp directory)."),(0,a.kt)("p",null,"Here's a breakdown of each of the browser preferences being set:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"browser.download.dir")," accepts a string. This is how we set the custom download path. It needs to be an absolute path."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"browser.download.folderList")," takes a number. It tells Firefox which download directory to use. ",(0,a.kt)("inlineCode",{parentName:"li"},"2")," tells it to use a custom download path, wheras ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," would use the browser's default path, and ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," would place them on the Desktop."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"browser.helperApps.neverAsk.saveToDisk")," tells Firefox when not to prompt for a file download. It accepts a string of ",(0,a.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Internet_media_type"},"the file's MIME type"),". If you want to specify more than one, you do it with a comma-separated string (which we've done)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pdfjs.disabled")," is for when downloading PDFs. This overrides the sensible default in Firefox that previews PDFs in the browser. It accepts a boolean.")),(0,a.kt)("p",null,"This object is then passed into our instance of Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"self.driver = webdriver.Firefox(options=options"),")."),(0,a.kt)("p",null,"Now let's take care of our test's teardown."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: download.py\n# ...\n  def tearDown(self):\n      self.driver.quit()\n      shutil.rmtree(self.download_dir)\n# ...\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"tearDown(self):")," we close the browser instance and then clean up the temp directory by deleting it, which will recursively delete the files in the folder before deleting it."),(0,a.kt)("p",null,"Now to wire up our test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# filename: download.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get(\'http://the-internet.herokuapp.com/download\')\n        download_link = driver.find_element(By.CSS_SELECTOR, \'.example a\')\n        download_link.click()\n\n        time.sleep(1.0)  # necessary for slow download speeds\n\n        files = os.listdir(self.download_dir)\n        files = [os.path.join(self.download_dir, f)\n                 for f in files]  # add directory to each filename\n        assert len(files) > 0, "no files were downloaded"\n        assert os.path.getsize(files[0]) > 0, "downloaded file was empty"\n\n\nif __name__ == "__main__":\n    unittest.main()\n')),(0,a.kt)("p",null,"After visiting the page we find the first download link and click it. The click triggers an automatic download to the temp directory created in ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp()"),". We need to wait for the download to finish, so we add a brief sleep (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"time.sleep(1.0)"),"). After the file downloads, we perform some rudimentary checks to make sure the unique temp directory isn't empty and then check the file to see that it isn't empty either."),(0,a.kt)("p",null,"The last two lines of the file are so the file can be executed directly from the command-line."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"python download.py")," from the command-line) this is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a uniquely named temp directory in the present working directory"),(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Find and click the first download link on the page"),(0,a.kt)("li",{parentName:"ul"},"Automatically download the file to the temp directory without prompting"),(0,a.kt)("li",{parentName:"ul"},"Check that the temp directory is not empty"),(0,a.kt)("li",{parentName:"ul"},"Check that the downloaded file is not empty"),(0,a.kt)("li",{parentName:"ul"},"Close the browser"),(0,a.kt)("li",{parentName:"ul"},"Delete the temp directory")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A similar approach can be applied to some other browsers with varying configurations. But downloading files this way is not sustainable or recommended. Mark Collin articulates this point well in his prominent write-up about it ",(0,a.kt)("a",{parentName:"p",href:"http://ardesco.lazerycode.com/index.php/2012/07/how-to-download-files-with-selenium-and-why-you-shouldnt/"},"here"),". In a future tip I'll cover a more reliable, faster, and scalable browser agnostic approach to downloading files. Stay tuned."),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/trabulmonkee"},"Mike Millgate")," for contributing the Python code for this tip, and to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Dude-X"},"Isaul Vargas")," & ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bittner"},"Peter Bittner")," for code reviewing!"),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);