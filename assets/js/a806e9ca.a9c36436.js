"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={title:"Download A File",id:"2-download-a-file-ruby",contentUrl:"docs/download-a-file/2-download-a-file-ruby",sidebar_label:"Ruby",text:"Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.",number:2,hide_table_of_contents:!0,publish_date:new Date("2015-07-27T00:00:00.000Z"),last_update:{date:new Date("2023-03-08T00:00:00.000Z")},tags:["files","downloading","file download"],level:2,category:["remote","fundamentals"],language:"ruby"},r="How To Download a File",l={unversionedId:"download-a-file/2-download-a-file-ruby",id:"download-a-file/2-download-a-file-ruby",title:"Download A File",description:"Intro",source:"@site/docs/2-download-a-file/ruby.mdx",sourceDirName:"2-download-a-file",slug:"/download-a-file/2-download-a-file-ruby",permalink:"/elemental-next/docs/download-a-file/2-download-a-file-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-download-a-file/ruby.mdx",tags:[{label:"files",permalink:"/elemental-next/docs/tags/files"},{label:"downloading",permalink:"/elemental-next/docs/tags/downloading"},{label:"file download",permalink:"/elemental-next/docs/tags/file-download"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1678233600,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{title:"Download A File",id:"2-download-a-file-ruby",contentUrl:"docs/download-a-file/2-download-a-file-ruby",sidebar_label:"Ruby",text:"Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.",number:2,hide_table_of_contents:!0,publish_date:"2015-07-27T00:00:00.000Z",last_update:{date:"2023-03-08T00:00:00.000Z"},tags:["files","downloading","file download"],level:2,category:["remote","fundamentals"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/elemental-next/docs/download-a-file/2-download-a-file-python"},next:{title:"Csharp",permalink:"/elemental-next/docs/work-with-frames/3-work-with-frames-csharp"}},d={},s=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-download-a-file"},"How To Download a File"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Just like with ",(0,o.kt)("a",{parentName:"p",href:"/docs/how-to-upload-a-file/"},"uploading files")," we hit the same issue with downloading them -- a dialog box\njust out of Selenium's reach. With some additional configuration, we can side-step the dialog box."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"In order to avoid the dialog box, we will be instructing the browser to download files to a specific location without being prompted."),(0,o.kt)("p",null,"After the file is downloaded we can then perform some simple checks to make sure the file is what we expect."),(0,o.kt)("p",null,"Let's continue with an example."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's start off by pulling in our requisite libraries (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, ",(0,o.kt)("inlineCode",{parentName:"p"},"rspec/expectations"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for assertions, ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid")," to help create a uniquely named temporary download directory, and ",(0,o.kt)("inlineCode",{parentName:"p"},"fileutils"),"\nto create & destroy the temp directory) and wiring up our ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: download_file.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\nrequire 'uuid'\nrequire 'fileutils'\n\ndef setup\n  @download_dir = File.join(Dir.pwd, UUID.new.generate)\n  FileUtils.mkdir_p @download_dir\n\n  # Firefox\n  options = Selenium::WebDriver::Options.firefox\n  options.add_preference('browser.download.dir', @download_dir)\n  options.add_preference('browser.download.folderList', 2)\n  options.add_preference('browser.helperApps.neverAsk.saveToDisk', 'images/jpeg, application/pdf, application/octet-stream')\n  options.add_preference('pdfjs.disabled', true)\n  @driver = Selenium::WebDriver.for :firefox, options: options\nend\n")),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," method is where the magic is happening in this example. In it we're creating a uniquely named\ntemp directory and storing the absolute path of it in an instance variable that we'll use throughout this file."),(0,o.kt)("p",null,"We're also setting a few browser preferences (for Firefox in this case) and plying it with the necessary configuration\nparameters to make it automatically download the file where we want. Here's a breakdown of each of them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser.download.dir")," accepts a string. This is how we set the custom download path. It needs to be an absolute path."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser.download.folderList")," takes a number. It tells Firefox which download directory to use. ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," tells it to use a custom download path, wheras ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," would use the browser's default path, and ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," would place them on the Desktop."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser.helperApps.neverAsk.saveToDisk")," tells Firefox when not to prompt for a file download. It accepts a string of ",(0,o.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Internet_media_type"},"the file's MIME type"),". If you want to specify more than one, you do it with a comma-separated string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pdfjs.disabled")," is for when downloading PDFs. This overrides the sensible default in Firefox that previews PDFs in the browser. It accepts a boolean.")),(0,o.kt)("p",null,"These preferences are then passed into our instance of Selenium."),(0,o.kt)("p",null,"Now let's add some ",(0,o.kt)("inlineCode",{parentName:"p"},"teardown")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"def teardown\n  @driver.quit\n  FileUtils.rm_rf @download_dir\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"teardown")," we make sure to clean up the temp directory after closing the browser. Other than that, it's business as usual."),(0,o.kt)("p",null,"Now onto the test itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/download'\n  download_link = @driver.find_element(css: '.example a')\n  download_link.click\n\n  files = Dir.glob(\"#{@download_dir}/*\")\n  expect(files.empty?).to eql false\n  expect(File.size(files.first)).to be > 0\nend\n")),(0,o.kt)("p",null,"After loading the page we find the first download link and click it. The click triggers an automatic download to the temp\ndirectory created in ",(0,o.kt)("inlineCode",{parentName:"p"},"setup"),". After that, we perform some rudimentary checks to make sure the directory isn't empty and\nthat the file isn't empty either."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When you save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby download_file.rb")," from the command-line) here is will happen."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a uniquely named temp directory"),(0,o.kt)("li",{parentName:"ul"},"Load the browser"),(0,o.kt)("li",{parentName:"ul"},"Visit the page"),(0,o.kt)("li",{parentName:"ul"},"Find and click the first download link on the page"),(0,o.kt)("li",{parentName:"ul"},"Automatically download the file to the temp directory without prompting"),(0,o.kt)("li",{parentName:"ul"},"Check that the temp directory is not empty"),(0,o.kt)("li",{parentName:"ul"},"Check that the downloaded file is not empty"),(0,o.kt)("li",{parentName:"ul"},"Close the browser"),(0,o.kt)("li",{parentName:"ul"},"Delete the temp directory and it's contents")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"A similar approach can be applied to some other browsers with varying configurations. But downloading files this way is\nnot sustainable or recommended. Mark Collin articulates this point well in his prominent write-up about it\n",(0,o.kt)("a",{parentName:"p",href:"http://ardesco.lazerycode.com/index.php/2012/07/how-to-download-files-with-selenium-and-why-you-shouldnt/"},"here"),"."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by\nthousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect\nfor writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at\nnumerous conferences and meetups around the world about automated acceptance testing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dave Haeffner profile picture",src:n(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},9417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);