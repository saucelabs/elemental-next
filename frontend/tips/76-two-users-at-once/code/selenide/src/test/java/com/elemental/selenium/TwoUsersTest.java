package com.elemental.selenium;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Condition.text;

import com.codeborne.selenide.SelenideConfig;
import com.codeborne.selenide.SelenideDriver;
import java.util.UUID;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class TwoUsersTest {
    // A random room, so tests running at the same time don't see each other's messages
    static final String CHAT_URL =
            "https://the-internet.herokuapp.com/chat?room=elemental-" + UUID.randomUUID().toString().substring(0, 8);
    SelenideDriver alice;
    SelenideDriver bob;

    @BeforeEach
    void setUp() {
        // Each SelenideDriver has its own browser, and waits up to 10 seconds
        alice = new SelenideDriver(new SelenideConfig().timeout(10000));
        bob = new SelenideDriver(new SelenideConfig().timeout(10000));
    }

    @AfterEach
    void tearDown() {
        alice.close();
        bob.close();
    }

    void join(SelenideDriver driver, String name) {
        driver.open(CHAT_URL);
        driver.$("#status").shouldHave(exactText("Connected"));
        driver.$("#name").setValue(name);
        driver.$("#join").click();
    }

    void sendMessage(SelenideDriver driver, String text) {
        driver.$("#message").setValue(text);
        driver.$("#send").click();
    }

    @Test
    public void twoUsersChat() {
        join(alice, "Alice");
        join(bob, "Bob");
        // Messages are not saved: Alice waits until Bob is in the room before she writes
        alice.$("#messages").shouldHave(text("Bob joined"));

        sendMessage(alice, "Hi Bob");
        bob.$("#messages").shouldHave(text("Alice: Hi Bob"));

        sendMessage(bob, "Hi Alice");
        alice.$("#messages").shouldHave(text("Bob: Hi Alice"));
    }
}
