"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[90889],{90889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=t(74848),s=t(28453);const r={},a=void 0,d={id:"tagging/_ruby",title:"_ruby",description:"Example",source:"@site/tips/58-tagging/_ruby.mdx",sourceDirName:"58-tagging",slug:"/tagging/_ruby",permalink:"/tips/tagging/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/58-tagging/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How To Prepare Your Tests For Continuous Integration",permalink:"/tips/57-junit-xml"},next:{title:"Tagging",permalink:"/tips/58-tagging"}},l={},o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["In RSpec, this metadata and filtered execution is referred to as ",(0,i.jsx)(n.a,{href:"https://www.relishapp.com/rspec/rspec-core/v/2-4/docs/command-line/tag-option",children:"tags"})," (or tagging)."]}),"\n",(0,i.jsx)(n.p,{children:"A tag is a simple key/value pair that can be specified within any test file. Alternatively, you can specify just a key (as a symbol) for the tag."}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example spec file with a ",(0,i.jsx)(n.code,{children:":smoke"})," tag applied to the entire file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"# filename: spec/example_spec.rb\n\nrequire 'selenium-webdriver'\n\ndescribe 'Login', :smoke do\n\n  before(:each) do\n    @driver = Selenium::WebDriver.for :firefox\n  end\n\n  after(:each) do\n    @driver.quit\n  end\n\n  it 'succeeded' do\n    # test code goes here\n  end\n\n  it 'failed' do\n    # test code goes here\n  end\n\nend\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To run this, you would specify ",(0,i.jsx)(n.code,{children:"--tag"})," and the tag name (without the ",(0,i.jsx)(n.code,{children:":"}),") as a runtime parameter, like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"rspec --tag smoke\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can ignore tags with a ",(0,i.jsx)(n.code,{children:"~"})," prepended to the tag name."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"rspec --tag ~smoke\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also tag each individual test and specify multiple tags at run time."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"# filename: spec/example_spec.rb\n\nrequire 'selenium-webdriver'\n\ndescribe 'Login' do\n\n  before(:each) do\n    @driver = Selenium::WebDriver.for :firefox\n  end\n\n  after(:each) do\n    @driver.quit\n  end\n\n  it 'succeeded', :smoke do\n    # test code goes here\n  end\n\n  it 'failed', :wip do\n    # test code goes here\n  end\n\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"To run just the smoke tag and negate the wip tag, you would do the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"rspec --tag smoke --tag ~wip\n"})}),"\n",(0,i.jsx)(n.p,{children:"Please note that if you're running RSpec 2 or earlier, the following config is required:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"require 'rspec'\nRSpec.configure { |c| c.treat_symbols_as_metadata_keys_with_true_values = true }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Otherwise, you'll have to specify tags using the standard key/value syntax (e.g., ",(0,i.jsx)(n.code,{children:":smoke"})," would be ",(0,i.jsx)(n.code,{children:"smoke: true"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Run the test suite"}),"\n",(0,i.jsx)(n.li,{children:"The test suite identifies which tests to run based on the tags provided"}),"\n",(0,i.jsx)(n.li,{children:"Executes the filtered set of tests, ignoring the rest"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"By utilizing metadata tags and filtering a set of tests, you have learned to effectively create a dynamic test suite that takes into account all of your tests."}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);