package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.StartOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.AfterTestExecutionCallback;
import org.junit.jupiter.api.extension.RegisterExtension;

public class CloudTest {
    Sauce.Session session;
    Browser browser;
    Page page;
    boolean passed;

    // Runs after each test, before afterEach, and saves whether the test passed
    @RegisterExtension
    AfterTestExecutionCallback testResult = context -> passed = context.getExecutionException().isEmpty();

    @BeforeEach
    public void beforeEach() throws Exception {
        Assumptions.assumeTrue(System.getenv("SAUCE_USERNAME") != null && System.getenv("SAUCE_ACCESS_KEY") != null,
            "Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");

        session = Sauce.startSession("chrome", "Elemental Selenium - Tip 26 - Vibium Java");
        browser = Vibium.start(new StartOptions().connectURL(session.webSocketUrl()));
        page = browser.page();
    }

    @AfterEach
    public void afterEach() throws Exception {
        if (browser != null) {
            browser.stop();
            Sauce.endSession(session, passed);
        }
    }

    @Test
    public void loadsThePage() {
        page.go("https://the-internet.herokuapp.com");
        Assertions.assertTrue(page.title().contains("The Internet"));
    }
}
