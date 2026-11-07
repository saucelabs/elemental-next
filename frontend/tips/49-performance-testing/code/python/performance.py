import pytest
from selenium import webdriver

# The Navigation Timing API of the browser measures each step of the page load, in milliseconds
TIMINGS = """
const timing = performance.getEntriesByType('navigation')[0];
return {
  firstByte: Math.round(timing.responseStart),
  domReady: Math.round(timing.domContentLoadedEventEnd),
  load: Math.round(timing.loadEventEnd),
};
"""
LOAD_BUDGET_MS = 10_000


@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()


def test_page_loads_within_budget(driver):
    driver.get('https://the-internet.herokuapp.com')
    timings = driver.execute_script(TIMINGS)
    print(f"First byte: {timings['firstByte']} ms, DOM ready: {timings['domReady']} ms, load: {timings['load']} ms")

    # The load is 0 until the page has finished loading
    assert 0 < timings['load'] < LOAD_BUDGET_MS
