"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7068],{77068:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],s={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"To start things off let's include our requisite classes for our test framework (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), an HTTP library to handle our HEAD request (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Net"),"), and start our class with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: FileDownloadRevisited.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System.Net;\n\npublic class FileDownloadRevisited\n{\n\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now we're ready to wire up our test."),(0,r.kt)("p",null,"It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," request with it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: FileDownloadRevisited.cs\n// ...\n    [Test]\n    public void CheckFileDownloadWithoutBrowser()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/download");\n        string FileURL = Driver.FindElement(By.CssSelector(".example a")).GetAttribute("href");\n        var Request = (HttpWebRequest)WebRequest.Create(FileURL);\n        Request.Method = "HEAD";\n        WebResponse Response = Request.GetResponse();\n        Assert.That(Response.ContentType.Equals("application/octet-stream"));\n        Assert.Greater(Response.ContentLength, 0);\n    }\n}\n')),(0,r.kt)("p",null,"Once we receive the response we check its header for the content type (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'Assert.That(Response.ContentType.Equals("application/octet-stream"));'),") and content length (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"Assert.Greater(Response.ContentLength, 0);"),") to make sure the file is the correct type and not empty."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save this and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\FileDownloadRevisited.sln")," from the command-line) here is what will will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Load the page"),(0,r.kt)("li",{parentName:"ul"},"Grab the URL of the first download link"),(0,r.kt)("li",{parentName:"ul"},"Perform a ",(0,r.kt)("inlineCode",{parentName:"li"},"HEAD")," request against it with an HTTP library"),(0,r.kt)("li",{parentName:"ul"},"Store the response headers"),(0,r.kt)("li",{parentName:"ul"},"Check the response headers to see that the file type is correct"),(0,r.kt)("li",{parentName:"ul"},"Check the response headers to see that the file is not empty"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach."),(0,r.kt)("p",null,"Happy Testing!"))}u.isMDXComponent=!0}}]);