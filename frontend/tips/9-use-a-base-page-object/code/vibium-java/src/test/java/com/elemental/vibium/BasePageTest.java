package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class BasePageTest {
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

    @Test
    public void helloWorldAfterLoading() {
        DynamicLoadingPage dynamicLoading = new DynamicLoadingPage(page);
        dynamicLoading.load();
        dynamicLoading.start();
        Assertions.assertEquals("Hello World!", dynamicLoading.finishText());
    }

    @Test
    public void loginWithValidCredentials() {
        LoginPage login = new LoginPage(page);
        login.load();
        login.loginAs("tomsmith", "SuperSecretPassword!");
        Assertions.assertTrue(login.successMessagePresent());
    }
}
