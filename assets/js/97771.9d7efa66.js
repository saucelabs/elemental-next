"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[97771],{97771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=n(74848),a=n(28453);const r={},i=void 0,l={id:"list-tags/_ruby",title:"_ruby",description:"Example",source:"@site/tips/60-list-tags/_ruby.mdx",sourceDirName:"60-list-tags",slug:"/list-tags/_ruby",permalink:"/tips/list-tags/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/60-list-tags/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Tagging",permalink:"/tips/58-tagging"},next:{title:"List Tags",permalink:"/tips/60-list-tags"}},d={},o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["To do this in RSpec, we're going to leverage ",(0,s.jsx)(t.code,{children:"RSpec.configure"})," in a file called ",(0,s.jsx)(t.code,{children:"tag_lister.rb"}),". To keep things simple, let's wrap this behavior in a method called ",(0,s.jsx)(t.code,{children:"list_tags"})," and have it live within a module called ",(0,s.jsx)(t.code,{children:"TagLister"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# filename: tag_lister.rb\n\nrequire 'rspec'\n\nmodule TagLister\n  def self.list_tags\n    RSpec.configure do |c|\n      c.add_setting :tags\n      c.before(:suite) { RSpec.configuration.tags = {} }\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In our RSpec configuration we first need to create a place to store the tag data, so we add a setting called ",(0,s.jsx)(t.code,{children:"tags"})," and make it a hash."]}),"\n",(0,s.jsx)(t.p,{children:"Now we're ready to go through each test to find the tag data."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:'# filename: tag_lister.rb\n\n...\n      c.around(:each) do |example|\n        tag_recorder = RSpec.configuration.tags\n        standard_keys = [:example_group,\n                         :block,\n                         :description_args,\n                         :caller,\n                         :execution_result,\n                         :full_description,\n                         :line_number,\n                         :file_path,\n                         :description,\n                         :described_class,\n                         :location]\n        example.metadata.each do |key, value|\n          this_tag = "#{key}:#{value}" unless standard_keys.include?(key)\n          unless this_tag.nil?\n            tag_recorder[this_tag] = [] unless tag_recorder[this_tag]\n            tag_recorder[this_tag] << [\n              example.metadata[:full_description],\n              example.metadata[:file_path],\n              example.metadata[:line_number]\n            ]\n          end\n        end\n      end\n\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"around(:each)"})," we're able to interogate each test (a.k.a. ",(0,s.jsx)(t.code,{children:"example"}),") to see if it contains any data in addition to the standard set of keys that we can expect from RSpec. If it does, then we assume that these additional keys are tags and store the test name, path to test file, and line number of the test file that uses this tag (or these tags)."]}),"\n",(0,s.jsxs)(t.p,{children:["We store this information in an array (and potentially an array of arrays) within our ",(0,s.jsx)(t.code,{children:"tags"})," hash. Here's a sample data set to help wrap your head around it:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:'{"wip:true"=>[["One passes", "./spec/one_spec.rb", 2], ["One fails", "./spec/one_spec.rb", 3]],\n"smoke:true"=>[["Three passes", "./spec/three_spec.rb", 2], ["Three fails", "./spec/three_spec.rb", 3]],\n"story:BIZ-1234"=>[["Two passes", "./spec/two_spec.rb", 2]], "story:BIZ-1235"=>[["Two fails", "./spec/two_spec.rb", 3]]}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Now that we have all the tags and the test data that shows where they are in use, we can generate a simple report with it."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:'# filename: tag_lister.rb\n\n...\n      c.after(:suite) do\n        tags = RSpec.configuration.tags\n\n        case ENV[\'TAG_SORT_ORDER\']\n        when \'alphabetical\'\n          tags = tags.sort_by { |tag| tag[0] }\n        when \'usage\'\n          tags = tags.sort_by { |tag| tag[1].count }.reverse\n        end\n\n        puts "\\n\\n"\n        puts "***************"\n        puts "* TAGS IN USE *"\n        puts "***************"\n        puts "\\n"\n\n        tags.each do |tag|\n          puts "#{tag[0]} (used #{tag[1].count} times)"\n          tag[1].each do |test_data|\n            puts "  #{test_data[0]} (#{test_data[1]}:#{test_data[2]})\\n"\n          end\n        end\n\n        puts "\\n#{tags.count} tags in use: sorted in #{ENV[\'TAG_SORT_ORDER\']} order"\n\n      end\n    end\n\n'})}),"\n",(0,s.jsxs)(t.p,{children:["There are a couple of different ways we'll likely want to see the tag data. So we wire up the ability to sort alphabetically by tag name as well as by usage in descending order (e.g., the number of times a tag is used). In our current tagging data structure, ",(0,s.jsx)(t.code,{children:"tag[0]"})," is the tag name (a.k.a. the hash key) and ",(0,s.jsx)(t.code,{children:"tag[1]"})," is the array that contains an array (or multiple arrays) of test data."]}),"\n",(0,s.jsxs)(t.p,{children:["After sorting the tags, we output a heading (e.g., ",(0,s.jsx)(t.code,{children:"* TAGS IN USE*"}),"), iterate through the collection of tag & test data, and close things out with a summary statement (listing the total tag count and sorting method used)."]}),"\n",(0,s.jsx)(t.p,{children:"Now we just need to pull in our test files, start RSpec, and then add a trigger to run everything."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# filename: tag_lister.rb\n\n...\n    tests = Dir.glob(File.join(Dir.getwd, 'spec/**/*'))\n    RSpec::Core::Runner.run(tests)\n\n  end\nend\n\nENV['TAG_SORT_ORDER'] = ARGV[0] || 'usage'\nTagLister.list_tags\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This script is built to live one level up from the test directory. And it assumes that the test directory is called ",(0,s.jsx)(t.code,{children:"spec"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["We make it, so we can pass an argument at runtime, which then gets fed into the tag sorting environment variable (",(0,s.jsx)(t.code,{children:"ENV['TAG_SORT_ORDER']"}),"). If no argument is provided, we default the value to ",(0,s.jsx)(t.code,{children:"'usage'"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["When we save this and run it with ",(0,s.jsx)(t.code,{children:"ruby tag_lister.rb"}),", we should see a report outputted in the terminal."]}),"\n",(0,s.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"......\n\n***************\n* TAGS IN USE *\n***************\n\nwip:true (used 2 times)\n  One passes (./spec/one_spec.rb:2)\n  One fails (./spec/one_spec.rb:3)\nsmoke:true (used 2 times)\n  Three passes (./spec/three_spec.rb:2)\n  Three fails (./spec/three_spec.rb:3)\nstory:BIZ-1234 (used 1 times)\n  Two passes (./spec/two_spec.rb:2)\nstory:BIZ-1235 (used 1 times)\n  Two fails (./spec/two_spec.rb:3)\n\n4 tags in use: sorted in usage order\n\n\nFinished in 0.00106 seconds (files took 0.09029 seconds to load)\n6 examples, 0 failures\n"})}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Iterate over each test, collecting tags and their test data"}),"\n",(0,s.jsx)(t.li,{children:"Display a report in the terminal of tags in use (sorted based on run-time preference)"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(t.p,{children:["If you'd like to see the code and example specs used to generate the above report, you can find them ",(0,s.jsx)(t.a,{href:"https://github.com/tourdedave/rspec-list-tags",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);