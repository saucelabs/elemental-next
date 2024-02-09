## Example

You can see a simple HTML5 drag and drop example [here on the-internet](http://the-internet.herokuapp.com/drag_and_drop).

First, let's borrow [the JavaScript made available by rcorreia on GitHub](https://gist.github.com/rcorreia/2362544) for this workaround and store it in a local file (e.g., `dnd.js`).

Now we can create a Selenium script to consume the JavaScript file, visit the page, execute the JavaScript, and perform an assertion.

```ruby
require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

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

After including our dependent libraries, we wire up our `setup`, `teardown`, and `run` actions. Now we're ready to write our test.

```ruby
run do
  @driver.get "http://the-internet.herokuapp.com/drag_and_drop"

  dnd_javascript = File.read(Dir.pwd + '/dnd.js')
  @driver.execute_script(dnd_javascript+"$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});")

  expect(@driver.find_element(id: 'column-a').text).to eql('B')
  expect(@driver.find_element(id: 'column-b').text).to eql('A')

end
```

After loading the page we read in the `dnd.js` file and store it in a local variable. We then use Selenium to execute `dnd_javascript` along with the function calls and elements we want to work with. After that, it's just a simple matter of grabbing text from the page and making an assertion against it.

Since there are only two elements to drag and drop on the page, they should have switched places. So, `column-a` should now contain the text 'B', and `column-b` should contain the text 'A'.


## Expected Behavior

When you run the ruby file, here is what will happen:

+ Open the browser
+ Visit the page
+ Text in Column A and Column B will switches places
+ Close the browser

## Summary

Hopefully this tip has helped you figure out how to wrangle HTML5 dragging and dropping while there is a known bug for it in Selenium.

Happy Testing!
