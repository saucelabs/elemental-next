import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    driver.get('https://the-internet.herokuapp.com/download')
    yield driver
    driver.quit()


def test_first_link_on_the_page(driver):
    link = driver.find_element(By.CSS_SELECTOR, 'a').get_attribute('href')
    print(link)
    assert 'github.com' in link


def test_first_link_in_the_content(driver):
    link = driver.find_element(By.CSS_SELECTOR, '#content a').get_attribute('href')
    print(link)
    assert '/download/' in link


def test_first_link_in_the_example(driver):
    link = driver.find_element(By.CSS_SELECTOR, '#content .example a').get_attribute('href')
    print(link)
    assert '/download/' in link
