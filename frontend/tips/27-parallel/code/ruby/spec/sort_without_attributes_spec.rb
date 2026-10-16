require 'spec_helper'

describe 'Sort Data Table' do
  context 'Without Attributes' do
    def dues
      @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)').map { |due| due.text.delete('$').to_f }
    end

    it 'in Ascending Order' do
      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
      expect(dues).to eql dues.sort
    end

    it 'in Descending Order' do
      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
      expect(dues).to eql dues.sort.reverse
    end
  end
end
