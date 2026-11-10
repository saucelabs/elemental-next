import uuid

import pytest
from vibium import browser

# A random room, so tests running at the same time don't see each other's messages
CHAT_URL = f'https://the-internet.herokuapp.com/chat?room=elemental-{uuid.uuid4().hex[:8]}'


@pytest.fixture
def bro():
    bro = browser.start()
    yield bro
    bro.stop()


def new_user_page(bro):
    # A browser context has its own cookies and storage, like a fresh browser profile
    return bro.new_context().new_page()


def join(page, name):
    page.go(CHAT_URL)
    page.wait_for_function('document.getElementById("status").textContent === "Connected"')
    page.find('#name').fill(name)
    page.find('#join').click()


def send_message(page, text):
    page.find('#message').fill(text)
    page.find('#send').click()


def test_two_users_chat(bro):
    alice = new_user_page(bro)
    bob = new_user_page(bro)

    join(alice, 'Alice')
    join(bob, 'Bob')
    # Messages are not saved: Alice waits until Bob is in the room before she writes
    alice.find('#messages').find(text='Bob joined')

    send_message(alice, 'Hi Bob')
    bob.find('#messages').find(text='Alice: Hi Bob')

    send_message(bob, 'Hi Alice')
    alice.find('#messages').find(text='Bob: Hi Alice')
