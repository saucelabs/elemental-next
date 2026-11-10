import uuid

from playwright.sync_api import Browser, Page, expect

# A random room, so tests running at the same time don't see each other's messages
CHAT_URL = f'https://the-internet.herokuapp.com/chat?room=elemental-{uuid.uuid4().hex[:8]}'


def join(browser: Browser, name: str) -> Page:
    # Each user gets a browser context of their own: a fresh browser profile, like a second browser
    context = browser.new_context()
    page = context.new_page()
    page.goto(CHAT_URL)
    expect(page.locator('#status')).to_have_text('Connected')
    page.locator('#name').fill(name)
    page.locator('#join').click()
    return page


def send_message(page: Page, text: str):
    page.locator('#message').fill(text)
    page.locator('#send').click()


def test_two_users_chat(browser: Browser):
    alice = join(browser, 'Alice')
    bob = join(browser, 'Bob')
    # Messages are not saved: Alice waits until Bob is in the room before she writes
    expect(alice.locator('#messages')).to_contain_text('Bob joined')

    send_message(alice, 'Hi Bob')
    expect(bob.locator('#messages')).to_contain_text('Alice: Hi Bob')

    send_message(bob, 'Hi Alice')
    expect(alice.locator('#messages')).to_contain_text('Bob: Hi Alice')

    alice.context.close()
    bob.context.close()
