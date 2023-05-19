"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(d,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"8: Download A File Revisited",id:"8-download-a-file-revisited-ruby",contentUrl:"docs/download-a-file-revisited/8-download-a-file-revisited-ruby",sidebar_label:"Ruby",text:"In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.",number:8,hide_table_of_contents:!0,publish_date:new Date("2015-08-20T00:00:00.000Z"),last_update:{date:"03-08-2023"},tags:["files","downloading"],level:2,category:["remote"],language:"ruby"},i="How to Download a File Without a Browser",l={unversionedId:"download-a-file-revisited/8-download-a-file-revisited-ruby",id:"download-a-file-revisited/8-download-a-file-revisited-ruby",title:"8: Download A File Revisited",description:"Intro",source:"@site/docs/8-download-a-file-revisited/ruby.md",sourceDirName:"8-download-a-file-revisited",slug:"/download-a-file-revisited/8-download-a-file-revisited-ruby",permalink:"/elemental-next/docs/download-a-file-revisited/8-download-a-file-revisited-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/8-download-a-file-revisited/ruby.md",tags:[{label:"files",permalink:"/elemental-next/docs/tags/files"},{label:"downloading",permalink:"/elemental-next/docs/tags/downloading"}],version:"current",lastUpdatedBy:"Rajene Harris",lastUpdatedAt:1678233600,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{title:"8: Download A File Revisited",id:"8-download-a-file-revisited-ruby",contentUrl:"docs/download-a-file-revisited/8-download-a-file-revisited-ruby",sidebar_label:"Ruby",text:"In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.",number:8,hide_table_of_contents:!0,publish_date:"2015-08-20T00:00:00.000Z",last_update:{date:"03-08-2023"},tags:["files","downloading"],level:2,category:["remote"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/elemental-next/docs/download-a-file-revisited/8-download-a-file-revisited-python"},next:{title:"Ruby",permalink:"/elemental-next/docs/use-a-base-page-object/9-use-a-base-page-object-ruby"}},d={},s=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-download-a-file-without-a-browser"},"How to Download a File Without a Browser"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"In a ",(0,a.kt)("a",{parentName:"p",href:"/tips/2-download-a-file"},"previous tip")," we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done."),(0,a.kt)("p",null,"While the previous method works, it requires a custom configuration that is inconsistent from browser to browser."),(0,a.kt)("p",null,"Ultimately, we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,a.kt)("em",{parentName:"p"},"can")," be downloaded, which we can do by using an HTTP client alongside Selenium in our test."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,a.kt)("em",{parentName:"p"},"can")," be downloaded. And we can do that by using an HTTP client alongside Selenium in our test."),(0,a.kt)("p",null,"With an HTTP library we can perform a header (or ",(0,a.kt)("inlineCode",{parentName:"p"},"HEAD"),") request for the file. Instead of downloading the file we'll receive header information for the file which contains information like the content type and content length (amongst other things). With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times (depending on the file size)."),(0,a.kt)("p",null,"Let's continue with an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"To start things off let's pull in our requisite libraries (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, ",(0,a.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertions, and ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-client")," for our HTTP request) and wire up some simple ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: download_revisited.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\nrequire 'rest-client'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Now we're ready to write up our test."),(0,a.kt)("p",null,"It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a ",(0,a.kt)("inlineCode",{parentName:"p"},"HEAD")," request with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/download'\n  link = @driver.find_element(css: '.example a').attribute('href')\n  response = RestClient.head link\n  expect(response.headers[:content_type]).to eql('application/octet-stream')\n  expect(response.headers[:content_length].to_i).to be > 0\nend\n")),(0,a.kt)("p",null,"Once we receive the response we can check it's header for the ",(0,a.kt)("inlineCode",{parentName:"p"},"content_type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"content_length")," to make sure the file is the correct type and not empty."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"If you save this and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby download_revisited.rb")," from the command-line) here is what will will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Load the page"),(0,a.kt)("li",{parentName:"ul"},"Grab the URL of the first download link"),(0,a.kt)("li",{parentName:"ul"},"Perform a ",(0,a.kt)("inlineCode",{parentName:"li"},"HEAD")," request against it with an HTTP library"),(0,a.kt)("li",{parentName:"ul"},"Store the response"),(0,a.kt)("li",{parentName:"ul"},"Check the response headers to see that the file type is correct"),(0,a.kt)("li",{parentName:"ul"},"Check the response headers to see that the file is not empty")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);