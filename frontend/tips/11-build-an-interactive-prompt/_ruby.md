## Example

In the first half of our example we include our libraries and our usual setup, teardown, and run actions.

```ruby
require 'selenium-webdriver'
require 'rspec/expectations'

def setup
  @driver = Selenium::WebDriver.for :firefox
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end
```

In the run action we define our loop and its behavior, creating the interactive prompt we want.

```ruby
run do
  loop do
    print '>> '
    input = gets.chomp
    if input == 'q'
      puts 'Quitting...'
      @driver.quit
      exit 0
    end
    begin
      eval input
    rescue Exception => e
      puts e.message
    end
  end
end
```

The `print` command is used instead of `puts` because we want `>> ` to appear on the same line as the input that we are issuing. This gives us the look and feel of a prompt. And we use `gets.chomp` to take in input. `gets` is responsible for receiving the input. And `chomp` removes the carriage return character (e.g. '\n') from the input.

Before executing the input we perform a check to see if the letter **q** is issued. If so, the script will post a message to the terminal, close the browser, and exit the prompt.

We then execute the input provided with `eval` and rescue exceptions, posting their message to the terminal when they occur.

Here is an example command you may issue to start: `@driver.get 'https://www.google.com'`.

## Expected Behavior

- Firefox loads
- An interactive prompt is presented
- Issue a Selenium command and see it execute in the browser
- Issue a command that it does not recognize (or that errors), and see a message stating the issue in the prompt
- Issue **q**, the browser will close and the prompt will terminate

## Summary

Hopefully this REPL will help save you some time and frustration -- making it easier to write and debug your tests.