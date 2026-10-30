require 'spec_helper'

describe 'Sort Data Table' do
  context 'With Attributes' do
    def dues
      @driver.find_elements(css: '#table2 tbody .dues').map { |due| due.text.delete('$').to_f }
    end

    # Waits until the header has the class of the sort order, which tells that the table is sorted
    def wait_for_sort(header, sort_class)
      Selenium::WebDriver::Wait.new(timeout: 5).until do
        @driver.find_element(css: header).dom_attribute('class').include?(sort_class)
      end
    end

    it 'in Ascending Order' do
      @driver.find_element(css: '#table2 thead .dues').click
      wait_for_sort('#table2 thead th:has(.dues)', 'headerSortDown')
      expect(dues).to eql dues.sort
    end

    it 'in Descending Order' do
      @driver.find_element(css: '#table2 thead .dues').click
      @driver.find_element(css: '#table2 thead .dues').click
      wait_for_sort('#table2 thead th:has(.dues)', 'headerSortUp')
      expect(dues).to eql dues.sort.reverse
    end
  end
end
