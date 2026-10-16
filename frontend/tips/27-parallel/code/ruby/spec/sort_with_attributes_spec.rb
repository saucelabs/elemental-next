require 'spec_helper'

describe 'Sort Data Table' do
  context 'With Attributes' do
    def dues
      @driver.find_elements(css: '#table2 tbody .dues').map { |due| due.text.delete('$').to_f }
    end

    it 'in Ascending Order' do
      @driver.find_element(css: '#table2 thead .dues').click
      expect(dues).to eql dues.sort
    end

    it 'in Descending Order' do
      @driver.find_element(css: '#table2 thead .dues').click
      @driver.find_element(css: '#table2 thead .dues').click
      expect(dues).to eql dues.sort.reverse
    end
  end
end
