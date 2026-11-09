package com.elemental.selenium;

import static com.codeborne.selenide.CollectionCondition.size;
import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;
import static com.codeborne.selenide.Selenide.closeWebDriver;
import static com.codeborne.selenide.Selenide.executeJavaScript;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;

import com.codeborne.selenide.Configuration;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.bidi.module.Script;
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
    Script script;

    @BeforeEach
    void setUp() {
        // Turns on WebDriver BiDi, which lets the test add a script that runs before the page's scripts
        Configuration.browserCapabilities = new ChromeOptions().enableBiDi();
        open();
        script = new Script(getWebDriver());
    }

    @AfterEach
    void tearDown() {
        script.close();
        closeWebDriver();
    }

    @Test
    public void toastHidesItselfAfterOneMinute() {
        script.addPreloadScript(FAKE_CLOCK);

        open("https://the-internet.herokuapp.com/toasts?duration=60000");
        $("#success-toast").click();
        $(".toast-message").shouldHave(exactText("Saved successfully"));

        executeJavaScript("fakeClock.tick(59000)");
        $$(".toast").shouldHave(size(1));

        executeJavaScript("fakeClock.tick(1000)");
        $$(".toast").shouldHave(size(0));
    }
}
