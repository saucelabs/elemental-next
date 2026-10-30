package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.assertions.LocatorAssertions;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@UsePlaywright
class DynamicLoadingTest {

    private DynamicLoadingPage dynamicLoading;

    @BeforeEach
    void setUp(Page page) {
        dynamicLoading = new DynamicLoadingPage(page);
        dynamicLoading.visit();
    }

    @Test
    void helloWorldAfterLoading() {
        dynamicLoading.start();
        assertThat(dynamicLoading.finishText)
                .hasText("Hello World!", new LocatorAssertions.HasTextOptions().setTimeout(10000));
    }
}
