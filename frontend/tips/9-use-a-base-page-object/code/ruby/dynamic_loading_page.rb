require 'rspec/expectations'
require_relative 'base_page'
include RSpec::Matchers

class DynamicLoadingPage < BasePage
  START_BUTTON = { css: '#start button' }
  FINISH_TEXT = { id: 'finish' }

  def initialize(driver)
    super(driver)
    visit('/dynamic_loading/2')
    expect(title).to eql('The Internet')
  end

  def start
    click_on START_BUTTON
  end

  def finish_text
    wait_for FINISH_TEXT
    text_of FINISH_TEXT
  end
end
