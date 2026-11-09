from playwright.sync_api import Page, expect


def test_pick_a_fruit(page: Page):
    page.goto('https://the-internet.herokuapp.com/custom_dropdown')

    page.get_by_role('combobox', name='Fruit').click()
    page.get_by_role('option', name='Mango').click()

    expect(page.get_by_role('combobox', name='Fruit')).to_have_text('Mango')
    expect(page.locator('#result')).to_have_text('Selected: mango')
