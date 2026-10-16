# The page shows the successful message only some of the time, so this test is flaky on purpose.
describe 'Notification Message' do
  it 'is successful' do
    @driver.get 'https://the-internet.herokuapp.com/notification_message'
    expect(@driver.find_element(id: 'flash').text).to include('Action successful')
  end
end
