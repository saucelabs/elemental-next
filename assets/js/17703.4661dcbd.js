"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[17703],{17703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(74848),l=n(28453);const s={},a=void 0,i={id:"junit-xml/_ruby",title:"_ruby",description:"Example",source:"@site/tips/57-junit-xml/_ruby.mdx",sourceDirName:"57-junit-xml",slug:"/junit-xml/_ruby",permalink:"/tips/junit-xml/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/57-junit-xml/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1722239299e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How to Automatically Retry Failed Tests",permalink:"/tips/56-retry-failed-tests"},next:{title:"How To Prepare Your Tests For Continuous Integration",permalink:"/tips/57-junit-xml"}},o={},u=[{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.a,{href:"http://rspec.info/",children:"RSpec"}),", you need a plugin to configure JUnit XML output. There are two popular ones:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/natritmeyer/yarjuf",children:"yarjuf (Yet Another RSpec JUnit Formatter)"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/sj26/rspec_junit_formatter",children:"RSpec JUnit Formatter"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Let's step through how to use the latter of the two."}),"\n",(0,r.jsx)(t.p,{children:"After installing RSpec JUnit Formatter we need to specify two new parameters at run-time: a formatter, and an output file."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"rspec --format RspecJunitFormatter  --out result.xml\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Running tests with these parameters will format the test results into JUnit XML and pipe them into a ",(0,r.jsx)(t.code,{children:"result.xml"})," file (and overwrite it on subsequent runs)."]}),"\n",(0,r.jsxs)(t.p,{children:["If we didn't want to type these parameters out every time we could place them into an RSpec command helper file (e.g., ",(0,r.jsx)(t.code,{children:".rspec"}),")."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"# filename: .rspec\n\n--format RspecJunitFormatter\n--out result.xml\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If we want to run our tests in parallel (using something like ",(0,r.jsx)(t.a,{href:"https://github.com/grosser/parallel_tests",children:"parallel_tests"}),"), then we will want to generate a uniquely named result file for each parallel process (otherwise concurrent test runs will overwrite the same file rendering the results effectively useless). To do that we can use interpolation thanks to ",(0,r.jsx)(t.a,{href:"http://www.stuartellis.eu/articles/erb/",children:"ERB"})," and an environment variable made available by parallel_tests."]}),"\n",(0,r.jsxs)(t.p,{children:["Thankfully parallel_tests has a RSpec command helper file as well (e.g., ",(0,r.jsx)(t.code,{children:".parallel_rspec"}),")."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"# filename: .parallel_rspec\n\n--format RspecJunitFormatter\n--out result<%= ENV['TEST_ENV_NUMBER'] %>.xml\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now with numerous tests being run through ",(0,r.jsx)(t.code,{children:"parallel_tests"})," the final result will be a series of JUnit XML files (e.g., ",(0,r.jsx)(t.code,{children:"result1.xml"}),", ",(0,r.jsx)(t.code,{children:"result2.xml"}),", etc.)."]}),"\n",(0,r.jsxs)(t.p,{children:["And if we didn't want this to run all the time (like if we only wanted JUnit XML output to get generated when running our tests on a CI server) then we can add a conditional to our ",(0,r.jsx)(t.code,{children:".parallel_rspec"})," file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"# filename: .parallel_rspec\n\n<% if ENV['CI'] %>\n--format RspecJunitFormatter\n--out results/result<%= ENV['TEST_ENV_NUMBER'] %>.xml\n<% end %>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now all we need to do is specify an environment variable at run time in order to trigger JUnit XML output (e.g., ",(0,r.jsx)(t.code,{children:"CI=on parallel_rspec"}),")."]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"Now you're ready to plug your Selenium tests into a CI Server and let them report the results."})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);