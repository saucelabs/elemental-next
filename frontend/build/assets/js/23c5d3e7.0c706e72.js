"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={title:"Ruby",id:"58-tagging-ruby",slug:"ruby/",number:58,publish_date:new Date("2014-07-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["tagging","tags","annotations","test packs"],level:1,category:["fundamentals"],language:"ruby"},o="How to Filter Test Results with Tags",l={unversionedId:"updated-tips/tagging/58-tagging-ruby",id:"updated-tips/tagging/58-tagging-ruby",title:"Ruby",description:"Intro",source:"@site/docs/updated-tips/58-tagging/ruby.md",sourceDirName:"updated-tips/58-tagging",slug:"/updated-tips/tagging/ruby/",permalink:"/elemental-next/docs/updated-tips/tagging/ruby/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/58-tagging/ruby.md",tags:[{label:"tagging",permalink:"/elemental-next/docs/tags/tagging"},{label:"tags",permalink:"/elemental-next/docs/tags/tags"},{label:"annotations",permalink:"/elemental-next/docs/tags/annotations"},{label:"test packs",permalink:"/elemental-next/docs/tags/test-packs"}],version:"current",frontMatter:{title:"Ruby",id:"58-tagging-ruby",slug:"ruby/",number:58,publish_date:"2014-07-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["tagging","tags","annotations","test packs"],level:1,category:["fundamentals"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/updated-tips/junit-xml/ruby/"},next:{title:"Ruby",permalink:"/elemental-next/docs/updated-tips/list-tags/ruby/"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-filter-test-results-with-tags"},"How to Filter Test Results with Tags"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"As your test suite grows you'll likely employ some kind of folder structure to help make sense of everything -- grouping similar tests together. But what do you do when you want to run a set of tests that span across your organizational structure? Especially when your organizational structure isn't set in stone?"),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By applying some metadata to your tests, you can specify a filter at runtime to execute a focused group of tests, returning just the ones you want."),(0,r.kt)("p",null,"Here are some tagging ideas to help get you started:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wip")," (e.g., work in progress)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smoke")," (e.g., smoke tests)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"moneymakers")," (e.g., the user paths that correlate to the bottom line of the business)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"component name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"story number")," (e.g., traceability to your development stories)")),(0,r.kt)("p",null,"Let's start with an example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"In RSpec, this metadata and filtered execution is referred to as ",(0,r.kt)("a",{parentName:"p",href:"https://www.relishapp.com/rspec/rspec-core/v/2-4/docs/command-line/tag-option"},"tags")," (or tagging)."),(0,r.kt)("p",null,"A tag is a simple key/value pair that can be specified within any test file. Alternatively, you can specify just a key (as a symbol) for the tag."),(0,r.kt)("p",null,"Here is an example spec file with a ",(0,r.kt)("inlineCode",{parentName:"p"},":smoke")," tag applied to the entire file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: spec/example_spec.rb\n\nrequire 'selenium-webdriver'\n\ndescribe 'Login', :smoke do\n\n  before(:each) do\n    @driver = Selenium::WebDriver.for :firefox\n  end\n\n  after(:each) do\n    @driver.quit\n  end\n\n  it 'succeeded' do\n    # test code goes here\n  end\n\n  it 'failed' do\n    # test code goes here\n  end\n\nend\n")),(0,r.kt)("p",null,"To run this, you would specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--tag")," and the tag name (without the ",(0,r.kt)("inlineCode",{parentName:"p"},":"),") as a runtime parameter, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rspec --tag smoke\n")),(0,r.kt)("p",null,"Alternatively, you can ignore tags with a ",(0,r.kt)("inlineCode",{parentName:"p"},"~")," prepended to the tag name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rspec --tag ~smoke\n")),(0,r.kt)("p",null,"You can also tag each individual test and specify multiple tags at run time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: spec/example_spec.rb\n\nrequire 'selenium-webdriver'\n\ndescribe 'Login' do\n\n  before(:each) do\n    @driver = Selenium::WebDriver.for :firefox\n  end\n\n  after(:each) do\n    @driver.quit\n  end\n\n  it 'succeeded', :smoke do\n    # test code goes here\n  end\n\n  it 'failed', :wip do\n    # test code goes here\n  end\n\nend\n")),(0,r.kt)("p",null,"To run just the smoke tag and negate the wip tag, you would do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rspec --tag smoke --tag ~wip\n")),(0,r.kt)("p",null,"Please note that if you're running RSpec 2 or earlier, the following config is required:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'rspec'\nRSpec.configure { |c| c.treat_symbols_as_metadata_keys_with_true_values = true }\n")),(0,r.kt)("p",null,"Otherwise, you'll have to specify tags using the standard key/value syntax (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},":smoke")," would be ",(0,r.kt)("inlineCode",{parentName:"p"},"smoke: true"),")."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the test suite"),(0,r.kt)("li",{parentName:"ul"},"The test suite identifies which tests to run based on the tags provided"),(0,r.kt)("li",{parentName:"ul"},"Executes the filtered set of tests, ignoring the rest")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"By utilizing metadata tags and filtering a set of tests, you have learned to effectively create a dynamic test suite that takes into account all of your tests."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);