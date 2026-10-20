import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_displays_a_notification(page):
    page.go('https://the-internet.herokuapp.com')

    # Step 1: check for jQuery on the page, add it if need be
    page.evaluate("""
        if (!window.jQuery) {
            const jquery = document.createElement('script');
            jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
            document.head.appendChild(jquery);
        }
    """)
    page.wait_for_function('Boolean(window.jQuery)', timeout=10000)

    # Step 2: use jQuery to add jquery-growl to the page
    page.evaluate("window.jQuery.getScript('https://the-internet.herokuapp.com/js/vendor/jquery.growl.js')")

    # Step 3: use jQuery to add jquery-growl styles to the page
    page.evaluate("window.jQuery('head').append('<link rel=\"stylesheet\" "
                  "href=\"https://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />')")
    page.wait_for_function('Boolean(window.jQuery.growl)', timeout=10000)

    # Step 4: display a message with jquery-growl
    page.evaluate("window.jQuery.growl({title: 'GET', message: '/'})")

    assert page.find('#growls .growl .growl-title').text() == 'GET'
    assert page.find('#growls .growl .growl-message').text() == '/'
