package com.elemental.selenium;

import java.time.Duration;
import java.util.UUID;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.bidi.browsingcontext.BrowsingContext;
import org.openqa.selenium.bidi.browsingcontext.CreateContextParameters;
import org.openqa.selenium.bidi.module.Browser;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TwoUsersTest {
    // A random room, so tests running at the same time don't see each other's messages
    static final String CHAT_URL =
            "https://the-internet.herokuapp.com/chat?room=elemental-" + UUID.randomUUID().toString().substring(0, 8);
    WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        FirefoxOptions options = new FirefoxOptions();
        // Turns on WebDriver BiDi, which lets the test create user contexts
        options.enableBiDi();
        driver = new FirefoxDriver(options);
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    String newUserWindow() {
        // A user context has its own cookies and storage, like a fresh browser profile
        String userContext = new Browser(driver).createUserContext();
        CreateContextParameters parameters = new CreateContextParameters(WindowType.WINDOW).userContext(userContext);
        return new BrowsingContext(driver, parameters).getId();
    }

    void waitForText(String id, String text) {
        new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.textToBePresentInElementLocated(By.id(id), text));
    }

    void join(String name) {
        driver.get(CHAT_URL);
        waitForText("status", "Connected");
        driver.findElement(By.id("name")).sendKeys(name);
        driver.findElement(By.id("join")).click();
    }

    void sendMessage(String text) {
        driver.findElement(By.id("message")).sendKeys(text);
        driver.findElement(By.id("send")).click();
    }

    @Test
    public void twoUsersChat() {
        String alice = newUserWindow();
        String bob = newUserWindow();

        driver.switchTo().window(alice);
        join("Alice");
        driver.switchTo().window(bob);
        join("Bob");

        // Messages are not saved: Alice waits until Bob is in the room before she writes
        driver.switchTo().window(alice);
        waitForText("messages", "Bob joined");
        sendMessage("Hi Bob");

        driver.switchTo().window(bob);
        waitForText("messages", "Alice: Hi Bob");
        sendMessage("Hi Alice");

        driver.switchTo().window(alice);
        waitForText("messages", "Bob: Hi Alice");
    }
}
