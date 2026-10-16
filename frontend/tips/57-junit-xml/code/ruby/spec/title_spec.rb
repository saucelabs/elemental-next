describe 'The Internet' do
  it 'has the right title' do
    @driver.get 'https://the-internet.herokuapp.com'
    expect(@driver.title).to eql('The Internet')
  end
end
