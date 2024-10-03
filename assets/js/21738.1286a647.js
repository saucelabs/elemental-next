"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[21738],{21738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(74848),r=t(28453);const o={},s=void 0,l={id:"download-a-file-revisited/_python",title:"_python",description:"Example",source:"@site/tips/8-download-a-file-revisited/_python.mdx",sourceDirName:"8-download-a-file-revisited",slug:"/download-a-file-revisited/_python",permalink:"/tips/download-a-file-revisited/_python",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/8-download-a-file-revisited/_python.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_java",permalink:"/tips/download-a-file-revisited/_java"},next:{title:"_ruby",permalink:"/tips/download-a-file-revisited/_ruby"}},a={},d=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["To start things off let's pull in our requisite libraries (",(0,i.jsx)(n.code,{children:"import unittest"})," for our test framework, ",(0,i.jsx)(n.code,{children:"from selenium import webdriver"})," to drive the browser, and ",(0,i.jsx)(n.code,{children:"import httplib"})," for our HTTP library), declare our test class, and wire up some test ",(0,i.jsx)(n.code,{children:"setUp"})," and ",(0,i.jsx)(n.code,{children:"tearDown"})," methods."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# filename: file_download_revisited.py\nimport unittest\nfrom selenium import webdriver\nimport httplib # Use http.client if using Python 3.x.x\nfrom selenium.webdriver.common.by import By\n\n\nclass FileDownloadRevisited(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now we're ready to write up our test."}),"\n",(0,i.jsxs)(n.p,{children:["It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a ",(0,i.jsx)(n.code,{children:"HEAD"})," request with it."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# filename: file_download_revisited.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/download')\n        download_link = driver.find_element(By.CSS_SELECTOR,'.example a').get_attribute('href')\n\n        connection = http.client.HTTPConnection('the-internet.herokuapp.com')\n        connection.request('HEAD', download_link)\n        response = connection.getresponse()\n        content_type = response.getheader('Content-type')\n        content_length = response.getheader('Content-length')\n        content_length = int(content_length)\n\n        assert content_type == 'application/octet-stream'\n        assert content_length > 0\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once we receive the response we can check its header for the ",(0,i.jsx)(n.code,{children:"Content-type"})," and ",(0,i.jsx)(n.code,{children:"Content-length"})," to make sure the file is the correct type and not empty."]}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.p,{children:["When you save this and run it (e.g., ",(0,i.jsx)(n.code,{children:"python file_download_revisited.py"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the browser"}),"\n",(0,i.jsx)(n.li,{children:"Load the page"}),"\n",(0,i.jsx)(n.li,{children:"Grab the URL of the first download link"}),"\n",(0,i.jsxs)(n.li,{children:["Perform a ",(0,i.jsx)(n.code,{children:"HEAD"})," request against it with an HTTP library"]}),"\n",(0,i.jsx)(n.li,{children:"Store the response"}),"\n",(0,i.jsx)(n.li,{children:"Check the response headers to see that the file type is correct"}),"\n",(0,i.jsx)(n.li,{children:"Check the response headers to see that the file is not empty"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Compared to the browser specific configuration with Selenium this is hands down a leaner, faster, and more maintainable approach. But unfortunately it only works with files served up from a flat URL. So if you're trying to test file downloads that are generated in-memory as part of the browser session (a.k.a. not accessible from a URL) then you'll need to reach for the browser specific Selenium configuration."}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);