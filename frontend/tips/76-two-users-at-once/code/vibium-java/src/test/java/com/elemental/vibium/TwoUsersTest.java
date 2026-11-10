package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.SelectorOptions;
import java.util.UUID;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class TwoUsersTest {
    // A random room, so tests running at the same time don't see each other's messages
    static final String CHAT_URL =
            "https://the-internet.herokuapp.com/chat?room=elemental-" + UUID.randomUUID().toString().substring(0, 8);
    Browser browser;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    Page newUserPage() {
        // A browser context has its own cookies and storage, like a fresh browser profile
        return browser.newContext().newPage();
    }

    void join(Page page, String name) {
        page.go(CHAT_URL);
        page.waitForFunction("document.getElementById('status').textContent === 'Connected'");
        page.find("#name").fill(name);
        page.find("#join").click();
    }

    void sendMessage(Page page, String text) {
        page.find("#message").fill(text);
        page.find("#send").click();
    }

    @Test
    public void twoUsersChat() {
        Page alice = newUserPage();
        Page bob = newUserPage();

        join(alice, "Alice");
        join(bob, "Bob");
        // Messages are not saved: Alice waits until Bob is in the room before she writes
        alice.find("#messages").find(new SelectorOptions().text("Bob joined"));

        sendMessage(alice, "Hi Bob");
        bob.find("#messages").find(new SelectorOptions().text("Alice: Hi Bob"));

        sendMessage(bob, "Hi Alice");
        alice.find("#messages").find(new SelectorOptions().text("Bob: Hi Alice"));
    }
}
