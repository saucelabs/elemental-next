require 'rspec/expectations'
require_relative 'base_page'
include RSpec::Matchers

class LoginPage < BasePage
  USERNAME_INPUT = { id: 'username' }
  PASSWORD_INPUT = { id: 'password' }
  SUBMIT_BUTTON = { css: '#login button' }
  SUCCESS_MESSAGE = { css: '.flash.success' }

  def initialize(driver)
    super(driver)
    visit('/login')
    expect(title).to eql('The Internet')
  end

  def login_as(username, password)
    type USERNAME_INPUT, username
    type PASSWORD_INPUT, password
    click_on SUBMIT_BUTTON
  end

  def success_message_present?
    wait_for SUCCESS_MESSAGE
    displayed? SUCCESS_MESSAGE
  end
end
