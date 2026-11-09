import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

# Replaces setTimeout with a fake one: its callbacks run only when the test moves the clock with fakeClock.tick
FAKE_CLOCK = '''() => {
    let now = 0;
    const timers = [];
    window.setTimeout = (callback, delay = 0) => timers.push({time: now + delay, callback});
    window.fakeClock = {
        tick: (milliseconds) => {
            now += milliseconds;
            timers.filter((timer) => !timer.done && timer.time <= now).forEach((timer) => {
                timer.done = true;
                timer.callback();
            });
        },
    };
}'''


@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    # Turns on WebDriver BiDi, which lets the test add a script that runs before the page's scripts
    options.enable_bidi = True
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()


def test_toast_hides_itself_after_one_minute(driver):
    driver.script.add_preload_script(FAKE_CLOCK)

    driver.get('https://the-internet.herokuapp.com/toasts?duration=60000')
    driver.find_element(By.ID, 'success-toast').click()
    assert driver.find_element(By.CLASS_NAME, 'toast-message').text == 'Saved successfully'

    driver.execute_script('fakeClock.tick(59000)')
    assert len(driver.find_elements(By.CLASS_NAME, 'toast')) == 1

    driver.execute_script('fakeClock.tick(1000)')
    assert len(driver.find_elements(By.CLASS_NAME, 'toast')) == 0
