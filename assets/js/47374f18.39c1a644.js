"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[85867,61650],{61650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(74848),r=t(28453);const a={},s=void 0,o={id:"safari/_java",title:"_java",description:"Example",source:"@site/tips/69-safari/_java.mdx",sourceDirName:"69-safari",slug:"/safari/_java",permalink:"/tips/safari/_java",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/69-safari/_java.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Load Testing Revisited",permalink:"/tips/68-load-testing-revisited"},next:{title:"_ruby",permalink:"/tips/safari/_ruby"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command on the terminal:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"$  /usr/bin/safaridriver --enable"})}),"\n",(0,i.jsx)(n.p,{children:"After that, make sure it's enabled. To do that:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["open ",(0,i.jsx)(n.code,{children:"Safari"})]}),"\n",(0,i.jsxs)(n.li,{children:["go to ",(0,i.jsx)(n.code,{children:"Develop"})]}),"\n",(0,i.jsxs)(n.li,{children:["click on ",(0,i.jsx)(n.code,{children:"Allow Remote Automations"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's wire up a simple test, so we can see that everything works as expected."}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsx)(n.p,{children:"Let's wire up a simple test, so we can see that everything works as expected."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.safari.SafariDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class Safari {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new SafariDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n\n    @Test\n    public void dropdownTest() {\n        driver.get("http://the-internet.herokuapp.com/");\n        String title = driver.getTitle();\n        assertThat(title, is(equalTo("The Internet")));\n    }\n\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"When we run the test, we should see a successful communication between Selenium and Safari."}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Keep in mind that Safari can load without you realizing it (since it doesn't obtain focus when launching with Selenium). When that happens you'll need to switch to Safari in order to see what the test is doing."}),"\n",(0,i.jsx)(n.p,{children:"And if you're running Safari on a remote node (or set of nodes), you'll need to install and enable the SafariDriver browser extension on each of them."}),"\n",(0,i.jsxs)(n.p,{children:["Thanks to ",(0,i.jsx)(n.a,{href:"https://github.com/RomanIsko",children:"Roman Isko"})," for contributing the initial code for this tip."]}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);