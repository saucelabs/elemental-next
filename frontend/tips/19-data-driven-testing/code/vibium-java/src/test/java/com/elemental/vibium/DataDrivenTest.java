package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

public class DataDrivenTest {
    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @ParameterizedTest(name = "logs in as {0}")
    @CsvFileSource(files = "user_data.csv", useHeadersInDisplayName = false, numLinesToSkip = 1)
    public void login(String accountType, String username, String password, String notificationMessage) {
        page.go("https://the-internet.herokuapp.com/login");
        page.find("#username").fill(username);
        page.find("#password").fill(password);
        page.find("#login button").click();

        String notification = page.find("#flash").text();
        Assertions.assertTrue(notification.startsWith(notificationMessage), notification);
    }
}
