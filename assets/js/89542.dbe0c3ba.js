"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[89542],{89542:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(74848),i=r(28453);const n={},s=void 0,l={id:"javascript-alerts/_java",title:"_java",description:"Example",source:"@site/tips/51-javascript-alerts/_java.mdx",sourceDirName:"51-javascript-alerts",slug:"/javascript-alerts/_java",permalink:"/tips/javascript-alerts/_java",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/51-javascript-alerts/_java.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_csharp",permalink:"/tips/javascript-alerts/_csharp"},next:{title:"_javascript",permalink:"/tips/javascript-alerts/_javascript"}},o={},c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["Our example application is available ",(0,a.jsx)(t.a,{href:"http://the-internet.herokuapp.com/javascript_alerts",children:"here"})," on ",(0,a.jsx)(t.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"}),". It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click ",(0,a.jsx)(t.code,{children:"Ok"})," or ",(0,a.jsx)(t.code,{children:"Cancel"}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["First let's import our requisite classes (for annotations (e.g., ",(0,a.jsx)(t.code,{children:"org.junit.After"}),", etc.), driving the browser with Selenium (e.g., ",(0,a.jsx)(t.code,{children:"org.openqa.selenium.WebDriver"}),", etc.), and matchers for our assertions (e.g., ",(0,a.jsx)(t.code,{children:"org.hamcrest.CoreMatchers"}),", etc.)) and start our class with some setup and teardown methods."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"// filename: JavaScriptAlert.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.Alert;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class JavaScriptAlert {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now let's write our test."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'// filename: JavaScriptAlert.java\n// ...\n    @Test\n    public void JavaScriptAlertTest() {\n        driver.get("http://the-internet.herokuapp.com/javascript_alerts");\n        driver.findElement(By.cssSelector(".example li:nth-child(2) button")).click();\n        Alert popup = driver.switchTo().alert();\n        popup.accept();\n        String result = driver.findElement(By.id("result")).getText();\n        assertThat(result, is(equalTo("You clicked: Ok")));\n    }\n\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find it with a child CSS Pseudo-class (",(0,a.jsx)(t.code,{children:"nth-child(2)"}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["After click the button to trigger the JavaScript Alert we use Selenium's ",(0,a.jsx)(t.code,{children:"switchTo().alert();"})," method to focus on the JavaScript pop-up and use ",(0,a.jsx)(t.code,{children:".accept();"})," to click ",(0,a.jsx)(t.code,{children:"Ok"}),". If we wanted to click ",(0,a.jsx)(t.code,{children:"Cancel"})," we would have used ",(0,a.jsx)(t.code,{children:".dismiss();"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["After accepting the alert, our browser window will automatically regain focus and the page will display the result that we chose. We use this text for our assertion, making sure that the words ",(0,a.jsx)(t.code,{children:"You clicked: Ok"})," are displayed."]}),"\n",(0,a.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,a.jsxs)(t.p,{children:["When you save this file and run it (e.g., ",(0,a.jsx)(t.code,{children:"mvn clean test"})," from the command-line) here is what will happen:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Open the browser"}),"\n",(0,a.jsx)(t.li,{children:"Load the page"}),"\n",(0,a.jsx)(t.li,{children:"Click the second button on the page"}),"\n",(0,a.jsx)(t.li,{children:"JavaScript Confirmation Alert appears"}),"\n",(0,a.jsx)(t.li,{children:"JavaScript Confirmation Alert is accepted and goes away"}),"\n",(0,a.jsx)(t.li,{children:"Assert that the result on the page is what we expect"}),"\n",(0,a.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(t.p,{children:["Thanks to ",(0,a.jsx)(t.a,{href:"https://github.com/RomanIsko",children:"Roman Isko"})," for contributing the initial Java code for this tip."]}),"\n",(0,a.jsx)(t.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);