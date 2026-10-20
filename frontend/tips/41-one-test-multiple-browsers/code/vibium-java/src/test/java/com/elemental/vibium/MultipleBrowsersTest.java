package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.StartOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.AfterTestExecutionCallback;
import org.junit.jupiter.api.extension.RegisterExtension;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class MultipleBrowsersTest {
    Sauce.Session session;
    Browser browser;
    boolean passed;

    // Runs after each test, before afterEach, and saves whether the test passed
    @RegisterExtension
    AfterTestExecutionCallback testResult = context -> passed = context.getExecutionException().isEmpty();

    @BeforeEach
    public void beforeEach() {
        Assumptions.assumeTrue(System.getenv("SAUCE_USERNAME") != null && System.getenv("SAUCE_ACCESS_KEY") != null,
            "Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");
    }

    @AfterEach
    public void afterEach() throws Exception {
        if (browser != null) {
            browser.stop();
            Sauce.endSession(session, passed);
        }
    }

    Page start(String browserName) throws Exception {
        session = Sauce.startSession(browserName, "Elemental Selenium - Tip 41 - Vibium Java - " + browserName);
        browser = Vibium.start(new StartOptions().connectURL(session.webSocketUrl()));
        return browser.page();
    }

    @ParameterizedTest
    @ValueSource(strings = {"chrome", "firefox", "MicrosoftEdge"})
    public void loadsThePage(String browserName) throws Exception {
        Page page = start(browserName);
        page.go("https://the-internet.herokuapp.com");
        Assertions.assertEquals("The Internet", page.title());
    }
}
