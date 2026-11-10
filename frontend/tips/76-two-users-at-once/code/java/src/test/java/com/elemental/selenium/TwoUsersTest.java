package com.elemental.selenium;

import java.time.Duration;
import java.util.UUID;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TwoUsersTest {
    // A random room, so tests running at the same time don't see each other's messages
    static final String CHAT_URL =
            "https://the-internet.herokuapp.com/chat?room=elemental-" + UUID.randomUUID().toString().substring(0, 8);
    WebDriver alice;
    WebDriver bob;

    @BeforeEach
    public void beforeEach() {
        alice = new FirefoxDriver();
        bob = new FirefoxDriver();
    }

    @AfterEach
    public void afterEach() {
        if (alice != null) {
            alice.quit();
        }
        if (bob != null) {
            bob.quit();
        }
    }

    void waitForText(WebDriver driver, String id, String text) {
        new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.textToBePresentInElementLocated(By.id(id), text));
    }

    void join(WebDriver driver, String name) {
        driver.get(CHAT_URL);
        waitForText(driver, "status", "Connected");
        driver.findElement(By.id("name")).sendKeys(name);
        driver.findElement(By.id("join")).click();
    }

    void sendMessage(WebDriver driver, String text) {
        driver.findElement(By.id("message")).sendKeys(text);
        driver.findElement(By.id("send")).click();
    }

    @Test
    public void twoUsersChat() {
        join(alice, "Alice");
        join(bob, "Bob");
        // Messages are not saved: Alice waits until Bob is in the room before she writes
        waitForText(alice, "messages", "Bob joined");

        sendMessage(alice, "Hi Bob");
        waitForText(bob, "messages", "Alice: Hi Bob");

        sendMessage(bob, "Hi Alice");
        waitForText(alice, "messages", "Bob: Hi Alice");
    }
}
