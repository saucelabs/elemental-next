---
title: "Interactive Prompts Revisited"
slug: "14-interactive-prompts-revisited"
number: 14
publish_date: 2013-08-27
tags:
  - "repl"
  - "pry"
  - "debugging"
  - "guest post"
level: 3
category: "tools"
---

NOTE: This is a guest post chocked full of knowledge from Brian Goad of [Digitalsmiths](http://www.digitalsmiths.com/). You can follow him on Twitter at [@bbbco](https://twitter.com/bbbco) and check out his testing blog [here](http://swdandruby.wordpress.com/).

## The Problem

In [Tip 11](http://elementalselenium.com/tips/11-build-an-interactive-prompt) we covered how a REPL can help you determine what code to write in your scripts by testing locators and actions through an interactive prompt. This is great for simple tasks, but its starts to falter when debugging more complex scripts.

Often times you will find yourself puzzling over an error or failure occuring in the middle of your script. It is not very efficient to have to run through each command in your script, line by line, to get to the context of the place you are attempting to debug in a simple REPL. Usually, you have already setup some framework, boilerplate, and helper code to assist you in writing your script. This just adds on to the problem, as you have no easy way to view the objects or methods available to you while debugging in your script.

Sometimes you just need to be able to _pry_ into the code, jump in, open it up and explore the area in order to solve the error you are experiencing.

## A Solution

A common utility most programmers in the Ruby community are familiar with is the Interactive Ruby Shell (IRB). This is a REPL that comes with Ruby that enables you to send and receive Ruby commands. While this is useful, it leaves much to be desired, and [an excellent alternative](https://www.ruby-toolbox.com/categories/irb_Alternatives) is the [Pry gem](http://pryrepl.org). It not only lets you execute Ruby commands to test your input and output, but it also allows you to _pry_ inside your code and interact with it while running.

You can use the Pry gem to help you construct your scripts (like a simple REPL), but you can also use it as a helpful debugging tool.

To install Pry, you can either add it to your Gemfile like so:

```ruby
source 'https://rubygems.org'

gem 'pry'
```

And then run `bundle install`. Or, you can install it from the commandline with `gem install pry`.

## An Example

Here I will walk you through a real life example of how I recently used Pry to debug an issue in one of my test scripts.

To give you some context, here is a simple example of some of my test code.

```ruby
include SiteCheckers

@driver.get("http://www.mysite.com")

everything_ready.should == true

# ... other code that tests other aspects of the site
```

We include a module of helpful methods for use in our scripts by including `SiteCheckers`. We assume that the driver is already setup and our tests are using Rspec. And `everything_ready` is a method mixed in from `SiteCheckers`. It dynamically checks the page to ensure that we are on the right one and that it is rendered correctly.

With this context in mind, here is the specific example I was working with recently:

```ruby
include SiteCheckers
include FeatureItems

@driver.get("http://www.mysite.com/some-feature")
everything_ready.should == true

# ... other code that tests other aspects of the feature
```

Uh oh. When I ran this test, I got an error.

```ruby
RSpec::Expectations::ExpectationNotMetError: expected: true
     got: nil (using ==)
```

That is real funny, because when I looked at the code for this method, nothing should have caused it to return nil:

```ruby
module SiteCheckers

def everything_ready
  # redacted code checks to ensure the page is rendered
  # and raises error if there is an issue
  true
end

# ... other helper methods defined here

end
```

So, what did I do to solve this issue? I used Pry to debug the error and discover my real issue!

To initialize Pry in your code, you have to require the gem, and then place `binding.pry` wherever you want execution of your code to pause so you can jump in and look around for yourself. For example:

```ruby
require 'pry'

include SiteCheckers
include FeatureItems

@driver.get("http://www.mysite.com/some-feature")

# With this, we jump right in before the error in the script
binding.pry

everything_ready.should == true
```

And when we run the test, we will get a prompt like this:

```ruby
Frame number: 0/1

From: /home/bgoad/es-pry/pry_test.rb @ line 38 :

    33:     include FeatureItems
    34:
    35:     @driver.get("http://www.mysite.com/some-feature")
    36:
    37:     # We'll jump right in before the error in the script
 => 38:     binding.pry
    39:
    40:     everything_ready.should == true

[1] pry(main)>
```

Which means that we have jumped right into the context of our code at the spot where the rocket-arrow is pointing (binding.pry). From here, we can use Unix-like commands to explore our code inside the REPL prompt.

`ls` will provide a list of Classes, Modules, methods, instance variables, and private variables available in this context. This is a great command to learn more about what is available to you at this point. Two other helpful commands are `cd` and `help`. You can use `cd` to change the context to inside an object, class or module. And `help` provides you with a quick access of commands available to Pry.

Browsing through these commands will allow you to discover other neat tricks you can do with Pry. You can also execute any Ruby code you want from Pry's prompt.

Let's take a closer look at the `everything_ready` method:

```ruby
pry(main)> everything_ready
=> nil
```

Hmm, this method is not returning `true` as we expect in the test.

Let's see if Pry can `help` us. One such command available from Pry is `show-method`, which will print out the code of the method you pass it. Let's do that:

```ruby
pry(main)> show-method everything_ready

From: pry_test.rb @ line 21:
Owner: FeatureItems
Visibility: public
Number of lines: 6

def everything_ready
  super
  if @driver.find_element(:css => "#modal_dialog").displayed?
    @driver.find_element(:css => "#modal_dialog_close").click
  end
end
```

Oh, look! I was expecting the #everything_ready method from SiteCheckers, but according to the Owner field from Pry's output, we are overriding the method inside the `FeatureItems` module in order to add some extra functionality (presumably, closing a modal if it is shown on the page).

The reason the method is not returning true is because the last line, which is what will be returned, does not result in true. Instead, when an `if..end` statement is executed, it always returns a nil. We can test this in Pry:

```ruby
pry(main)> if true
pry(main)*   puts "yay"
pry(main)* end
yay
=> nil
pry(main)> if false
pry(main)*   puts "boo"
pry(main)* end
=> nil
```

The rocket-arrows after the command we executed indicate the result of the command, which is nil. So, I need to update the overridden #everything_ready method to return the result of `super` instead of the `if..end` statement.

What's really cool is that I can do so right inside of Pry using the `edit` command! Typing `edit everything_ready` will pop me inside the FeatureItems#everything_ready method using my favorite terminal editor. Here, I can make the updates to my code:

```ruby
def everything_ready
  result = super
  if @driver.find_element(:css => "#modal_dialog").displayed?
    @driver.find_element(:css => "#modal_dialog_close").click
  end
  result
end
```

Now I save and quit the editor. Once I am back in the Pry prompt, it reloads the file I edited and allows me to try my code again.

```ruby
Frame number: 0/1

From: /home/bgoad/es-pry/pry_test.rb @ line 38 :

    33:     include FeatureItems
    34:
    35:     @driver.get("http://www.mysite.com/some-feature")
    36:
    37:     # We'll jump right in before the error in the script
 => 38:     binding.pry
    39:
    40:     everything_ready.should == true

pry(main)> everything_ready.should == true
=> true
```

To exit out of Pry and let my test finish running, I simply type `exit`. And now both tests succeed! Don't forget to remove the `binding.pry` line from inside the test, or else Pry will start right back up again inside the code.

##Outro

Nice! I was able to use Pry to jump into my code right before a failure in my test, have a look around in the environment, debug why my code was failing, and make a quick fix. And I was finally able to verify that my fix was working by running the command in my test again. Pry is pretty darn sweet!

There are plenty of other uses for pry, this tip just scratches the surface. In fact, [the Pry comnmunity](https://github.com/pry/pry/wiki/Available-plugins) includes several useful plugins to enhance your Pry experience. Some of the most popular ones include pry-rescue (deposits you into Pry at the point and context of a failure or error in your code), pry-stack_explorer (enables you to travel up and down the stack), and pry-debug (includes actual debugger funtionality like step and continue).

I encourage you to [take a look around the community](http://pryrepl.org) and see [how Pry can make your construction and debugging of tests](https://github.com/pry/pry/wiki) so much more efficient. And not only that, you'll also begin to learn why your code works in certain ways and how it is structured. Making you a much better test automator and coder as a result.

Happy Prying!
