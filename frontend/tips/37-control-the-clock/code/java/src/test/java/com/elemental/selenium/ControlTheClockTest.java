package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.bidi.module.Script;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class ControlTheClockTest {
    // Replaces setTimeout with a fake one: its callbacks run only when the test moves the clock with fakeClock.tick
    static final String FAKE_CLOCK = """
            () => {
                let now = 0;
                const timers = [];
                window.setTimeout = (callback, delay = 0) => timers.push({time: now + delay, callback});
                window.fakeClock = {
                    tick: (milliseconds) => {
                        now += milliseconds;
                        timers.filter((timer) => !timer.done && timer.time <= now).forEach((timer) => {
                            timer.done = true;
                            timer.callback();
                        });
                    },
                };
            }""";
    ChromeDriver driver;
    Script script;

    @BeforeEach
    public void beforeEach() {
        ChromeOptions options = new ChromeOptions();
        // Turns on WebDriver BiDi, which lets the test add a script that runs before the page's scripts
        options.enableBiDi();
        driver = new ChromeDriver(options);
        script = new Script(driver);
    }

    @AfterEach
    public void afterEach() {
        if (script != null) {
            script.close();
        }
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void toastHidesItselfAfterOneMinute() {
        script.addPreloadScript(FAKE_CLOCK);

        driver.get("https://the-internet.herokuapp.com/toasts?duration=60000");
        driver.findElement(By.id("success-toast")).click();
        Assertions.assertEquals("Saved successfully", driver.findElement(By.className("toast-message")).getText());

        driver.executeScript("fakeClock.tick(59000)");
        Assertions.assertEquals(1, driver.findElements(By.className("toast")).size());

        driver.executeScript("fakeClock.tick(1000)");
        Assertions.assertEquals(0, driver.findElements(By.className("toast")).size());
    }
}
