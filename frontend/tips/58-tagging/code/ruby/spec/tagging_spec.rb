describe 'The Internet' do
  it 'has the right title', :smoke do
    @driver.get 'https://the-internet.herokuapp.com'
    expect(@driver.title).to eql('The Internet')
  end

  # This test is not finished yet, so it fails. Since it's tagged as wip, it doesn't run with `--tag smoke`.
  it 'is a work in progress', :wip do
    @driver.get 'https://the-internet.herokuapp.com'
    expect(@driver.title).to eql('Not finished yet')
  end
end
