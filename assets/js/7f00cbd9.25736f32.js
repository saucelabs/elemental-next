"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[57590,99353],{99353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(74848),r=t(28453);const s={},o=void 0,l={id:"download-secure-files/_ruby",title:"_ruby",description:"Example 1",source:"@site/tips/15-download-secure-files/_ruby.mdx",sourceDirName:"15-download-secure-files",slug:"/download-secure-files/_ruby",permalink:"/tips/download-secure-files/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/15-download-secure-files/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Interactive Prompts Revisited",permalink:"/tips/14-interactive-prompts-revisited"},next:{title:"Download Secure Files",permalink:"/tips/15-download-secure-files"}},a={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(n.p,{children:["First let's require our libraries (",(0,i.jsx)(n.code,{children:"selenium-webdriver"})," to drive the browser, ",(0,i.jsx)(n.code,{children:"rspec/expectations"})," & ",(0,i.jsx)(n.code,{children:"RSpec::Matchers"})," for our assertions, and ",(0,i.jsx)(n.code,{children:"rest-client"})," for our HTTP requests) and wire up some simple ",(0,i.jsx)(n.code,{children:"setup"}),", ",(0,i.jsx)(n.code,{children:"teardown"}),", and ",(0,i.jsx)(n.code,{children:"run"})," methods."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"# filename: secure_download.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\nrequire 'rest-client'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next we'll write our test. In it, we'll want to access a page of download links that is behind some form of authentication (Basic HTTP Authentication in this case)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/download_secure'\n  cookie = @driver.manage.cookie_named 'rack.session'\n  link = @driver.find_element(css: '.example a').attribute('href')\n  response = RestClient.head link, cookie: { cookie[:name] => cookie[:value] }\n  expect(response.headers[:content_type]).to eql('application/octet-stream')\n  expect(response.headers[:content_length].to_i).to be > 0\nend\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the page loads, we grab the authentication session cookie from Selenium along with the URL for the first file listed. Then we fire up our HTTP library and perform a ",(0,i.jsx)(n.code,{children:"HEAD"})," request using both the download link and the session cookie. We then check the response headers to make sure the file is the correct type and that it's not empty."]}),"\n",(0,i.jsx)(n.p,{children:"If we run this script, it will pass. But, it's only limited to the first download link, and it assumes that the file will always be whatever we declared (in this case 'application/octet-stream')."}),"\n",(0,i.jsx)(n.p,{children:"In the next example, let's update the script to remedy these issues."}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:"Here, we will update our previous example code to make the script more robust, by adding a helper method just before our test code."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"def content_type(file)\n  file = File.basename(file)\n  if file.include? '.txt'\n    'application/octet-stream'\n  elsif file.include? '.pdf'\n    'application/pdf'\n  else\n    raise 'Unknown file type'\n  end\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"With this new helper method added, we can tease out the filename from a given URL and return the correct content type. If the file type isn't recognized, then we'll stop the test and raise an exception."}),"\n",(0,i.jsx)(n.p,{children:"Now we can update our test code to use this method in addition to grabbing all download links from the page and iterating through them."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/download_secure'\n  cookie = @driver.manage.cookie_named 'rack.session'\n  links = @driver.find_elements(css: '.example a')\n  links.map! { |link| link.attribute('href') }\n  links.each do |link|\n    response = RestClient.head link, cookie: { cookie[:name] => cookie[:value] }\n    expect(response.headers[:content_type]).to eql(content_type(link))\n    expect(response.headers[:content_length].to_i).to be > 0\n  end\nend\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By using ",(0,i.jsx)(n.code,{children:"find_elements"})," (plural) we get ",(0,i.jsx)(n.em,{children:"all"})," download links (returned in an array). We then use ",(0,i.jsx)(n.code,{children:"map!"})," to update the array of download links to give us ",(0,i.jsx)(n.em,{children:"just"})," the URLs (instead of a collection of Selenium objects which contain URLs). After that, we're able to iterate over the array of URLs, performing a ",(0,i.jsx)(n.code,{children:"HEAD"})," request and assertions for each one (but this time, we're using our new ",(0,i.jsx)(n.code,{children:"content_type"})," helper method)."]}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.p,{children:["If we save this file and run it (e.g., ",(0,i.jsx)(n.code,{children:"ruby secure_download.rb"})," from the command-line), here is what will happen."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Browser opens"}),"\n",(0,i.jsx)(n.li,{children:"The secure file downloads page loads"}),"\n",(0,i.jsx)(n.li,{children:"The authenticated cookie information is retrieved"}),"\n",(0,i.jsx)(n.li,{children:"All download URLs on the page are found"}),"\n",(0,i.jsx)(n.li,{children:"HTTP library performs a HEAD request against the download link using the retrieved cookie information"}),"\n",(0,i.jsx)(n.li,{children:"The response headers are checked to make sure the file is the correct type and not empty"}),"\n",(0,i.jsx)(n.li,{children:"The previous two steps are repeated until all download links are verified"}),"\n",(0,i.jsx)(n.li,{children:"Browser closes"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"From here, it's simple enough to add in additional content types and file types. And while this example demonstrates accessing files behind Basic HTTP Authentication it should also work with files behind form-based authentication."}),"\n",(0,i.jsx)(n.p,{children:"Hopefully this helps save you some time, enabling you to build a more lean and fast set of download tests."}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);