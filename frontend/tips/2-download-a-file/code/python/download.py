import os
import shutil
import pytest
import tempfile
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException

@pytest.fixture
def setup_teardown():
    download_dir = tempfile.mkdtemp()
    options = webdriver.FirefoxOptions()
    options.set_preference("browser.download.dir", download_dir)
    options.set_preference("browser.download.folderList", 2)
    options.set_preference("browser.helperApps.neverAsk.saveToDisk",
        "images/jpeg, application/pdf, application/octet-stream")
    options.set_preference("pdfjs.disabled", True)
    driver = webdriver.Firefox(options=options)
    yield driver, download_dir
    driver.quit()
    shutil.rmtree(download_dir)

def test_file_download(setup_teardown):
    driver, download_dir = setup_teardown
    driver.get('https://the-internet.herokuapp.com/download')
    download_link = driver.find_element(By.CSS_SELECTOR, '.example a')
    download_link.click()

    # Wait up to 5 seconds for the file to be present (slow connections)
    try:
        WebDriverWait(driver, 5).until(lambda d: os.listdir(download_dir))
    except TimeoutException:
        assert False, "no files were downloaded within 5 seconds"

    files = os.listdir(download_dir)
    files = [os.path.join(download_dir, f) for f in files]  # add directory to each filename
    assert len(files) > 0, "no files were downloaded"
    assert os.path.getsize(files[0]) > 0, "downloaded file was empty"