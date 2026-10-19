package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class DynamicLoadingTest {
    Browser browser;
    DynamicLoadingPage dynamicLoading;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        dynamicLoading = new DynamicLoadingPage(browser.page());
        dynamicLoading.visit();
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @Test
    public void helloWorldAfterLoading() {
        dynamicLoading.start();
        dynamicLoading.waitForFinish();
        Assertions.assertEquals("Hello World!", dynamicLoading.finishText());
    }
}
