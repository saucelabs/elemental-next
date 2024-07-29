"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[71570],{71570:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(74848),r=i(28453);const s={},a=void 0,o={id:"how-to-access-basic-auth/_java",title:"_java",description:"Example 1",source:"@site/tips/13-how-to-access-basic-auth/_java.mdx",sourceDirName:"13-how-to-access-basic-auth",slug:"/how-to-access-basic-auth/_java",permalink:"/tips/how-to-access-basic-auth/_java",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/13-how-to-access-basic-auth/_java.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_csharp",permalink:"/tips/how-to-access-basic-auth/_csharp"},next:{title:"_javascript",permalink:"/tips/how-to-access-basic-auth/_javascript"}},h={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsxs)(t.p,{children:["First let's import our requisite classes (for annotations (e.g., ",(0,n.jsx)(t.code,{children:"org.junit.After"}),", etc.), driving the browser with Selenium (e.g., ",(0,n.jsx)(t.code,{children:"org.openqa.selenium.WebDriver"}),", etc.), and matchers for our assertions (e.g., ",(0,n.jsx)(t.code,{children:"org.hamcrest.CoreMatchers"}),", etc.)) and start our class with some setup and teardown methods."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"// filename: WorkWithBasicAuth.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class WorkWithBasicAuth {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now to add our test."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'// filename: WorkWithBasicAuth.java\n// ...\n    @Test\n    public void workWithBasicAuthTest() {\n        driver.get("http://admin:admin@the-internet.herokuapp.com/basic_auth");\n        String pageMessage = driver.findElement(By.cssSelector("p")).getText();\n        assertThat(pageMessage, containsString("Congratulations!"));\n    }\n\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,n.jsx)(t.code,{children:"http://admin:admin@"}),"). Once it loads we grab text from the page to make sure we ended up in the right place."]}),"\n",(0,n.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."}),"\n",(0,n.jsx)(t.p,{children:"Here's what the script would look like."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'// filename: WorkWithBasicAuth2.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class WorkWithBasicAuth2 {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n        driver.get("http://admin:admin@the-internet.herokuapp.com/basic_auth");\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n\n    @Test\n    public void workWithBasicAuthTest2() {\n        driver.get("http://the-internet.herokuapp.com/basic_auth");\n        String pageMessage = driver.findElement(By.cssSelector("p")).getText();\n        assertThat(pageMessage, containsString("Congratulations!"));\n    }\n\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of each type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa)."})}),"\n",(0,n.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,n.jsx)(t.p,{children:"When you save the first example and run it here is what will happen:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Open the browser"}),"\n",(0,n.jsx)(t.li,{children:"Visit the page using Basic Auth"}),"\n",(0,n.jsx)(t.li,{children:"Get the page text"}),"\n",(0,n.jsx)(t.li,{children:"Assert that the text is what we expect"}),"\n",(0,n.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"And when you save the second example and run it here is what will happen:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Open the browser"}),"\n",(0,n.jsx)(t.li,{children:"Visit the page using Basic Auth in the setup"}),"\n",(0,n.jsx)(t.li,{children:"Navigate to the Basic Auth page (without providing credentials)"}),"\n",(0,n.jsx)(t.li,{children:"Get the page text"}),"\n",(0,n.jsx)(t.li,{children:"Assert that the text is what we expect"}),"\n",(0,n.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(t.p,{children:["Hopefully this tip will help save you from getting tripped by Basic Auth when you come across it.\nThanks to ",(0,n.jsx)(t.a,{href:"https://github.com/RomanIsko",children:"Roman Isko"})," for contributing the initial Java code for this tip."]}),"\n",(0,n.jsx)(t.p,{children:"Happy Testing!"})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);