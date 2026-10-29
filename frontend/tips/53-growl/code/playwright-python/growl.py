from playwright.sync_api import Page, expect


def test_display_notification(page: Page):
    page.goto('https://the-internet.herokuapp.com')

    # Step 1: add jQuery to the page, if it's not there
    if not page.evaluate("() => 'jQuery' in window"):
        page.add_script_tag(url='https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js')

    # Step 2: add jquery-growl to the page
    page.add_script_tag(url='https://the-internet.herokuapp.com/js/vendor/jquery.growl.js')

    # Step 3: add the jquery-growl styles to the page
    page.add_style_tag(url='https://the-internet.herokuapp.com/css/jquery.growl.css')

    # Step 4: display a message with jquery-growl
    page.evaluate("() => jQuery.growl({title: 'GET', message: '/'})")

    expect(page.locator('#growls .growl .growl-title')).to_have_text('GET')
    expect(page.locator('#growls .growl .growl-message')).to_have_text('/')
