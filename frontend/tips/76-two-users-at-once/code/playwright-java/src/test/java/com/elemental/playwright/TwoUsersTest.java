package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import java.util.UUID;
import org.junit.jupiter.api.Test;

@UsePlaywright
class TwoUsersTest {
    // A random room, so tests running at the same time don't see each other's messages
    static final String CHAT_URL =
            "https://the-internet.herokuapp.com/chat?room=elemental-" + UUID.randomUUID().toString().substring(0, 8);

    Page join(Browser browser, String name) {
        // Each user gets a browser context of their own: a fresh browser profile, like a second browser
        BrowserContext context = browser.newContext();
        Page page = context.newPage();
        page.navigate(CHAT_URL);
        assertThat(page.locator("#status")).hasText("Connected");
        page.locator("#name").fill(name);
        page.locator("#join").click();
        return page;
    }

    void sendMessage(Page page, String text) {
        page.locator("#message").fill(text);
        page.locator("#send").click();
    }

    @Test
    void twoUsersChat(Browser browser) {
        Page alice = join(browser, "Alice");
        Page bob = join(browser, "Bob");
        // Messages are not saved: Alice waits until Bob is in the room before she writes
        assertThat(alice.locator("#messages")).containsText("Bob joined");

        sendMessage(alice, "Hi Bob");
        assertThat(bob.locator("#messages")).containsText("Alice: Hi Bob");

        sendMessage(bob, "Hi Alice");
        assertThat(alice.locator("#messages")).containsText("Bob: Hi Alice");

        alice.context().close();
        bob.context().close();
    }
}
