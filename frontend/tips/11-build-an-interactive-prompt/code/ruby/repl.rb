require 'selenium-webdriver'

def run_repl(driver, input: $stdin, output: $stdout)
  context = binding
  loop do
    output.print '>> '
    command = input.gets
    break if command.nil?

    command = command.chomp
    if command == 'q'
      output.puts 'Quitting...'
      break
    end
    begin
      result = context.eval(command)
      output.puts result unless result.nil?
    rescue StandardError => e
      output.puts "#{e.class}: #{e.message}"
    end
  end
end

if __FILE__ == $PROGRAM_NAME
  driver = Selenium::WebDriver.for(:firefox)
  begin
    run_repl(driver)
  ensure
    driver.quit
  end
end
