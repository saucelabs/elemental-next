require 'selenium-webdriver'
require 'rspec/expectations'
require 'uuid'
require 'fileutils'

include RSpec::Matchers

def setup
    @download_dir = File.join(Dir.pwd, UUID.new.generate)
    FileUtils.mkdir_p(@download_dir)

    options = Selenium::WebDriver::Firefox::Options.new
    options.add_preference('browser.download.dir', @download_dir)
    options.add_preference('browser.download.folderList', 2)
    options.add_preference('browser.helperApps.neverAsk.saveToDisk',
        'image/jpeg, application/pdf, application/octet-stream')
    options.add_preference('pdfjs.disabled', true)
    @driver = Selenium::WebDriver.for(:firefox, options: options)
end

def teardown
    @driver.quit
    FileUtils.rm_rf(@download_dir)
end

def run
    setup
    yield
    teardown
end

run do
    @driver.get('https://the-internet.herokuapp.com/download')
    download_link = @driver.find_element(css: '.example a')
    download_link.click
    # Wait up to 5 seconds for the file to download
    wait = Selenium::WebDriver::Wait.new(timeout: 5)
    wait.until { Dir.glob("#{@download_dir}/*").any? }
    files = Dir.glob("#{@download_dir}/**")
    expect(files.size).to eq 1
    file = files.first
    expect(File.size(file)).to be > 0
end
