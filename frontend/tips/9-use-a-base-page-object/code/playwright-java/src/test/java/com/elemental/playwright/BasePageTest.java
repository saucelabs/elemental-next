package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.assertions.LocatorAssertions;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class BasePageTest {

    @Test
    void helloWorldAfterLoading(Page page) {
        DynamicLoadingPage dynamicLoading = new DynamicLoadingPage(page);
        dynamicLoading.load();
        dynamicLoading.start();
        assertThat(dynamicLoading.finishText)
                .hasText("Hello World!", new LocatorAssertions.HasTextOptions().setTimeout(10000));
    }

    @Test
    void loginWithValidCredentials(Page page) {
        LoginPage login = new LoginPage(page);
        login.load();
        login.loginAs("tomsmith", "SuperSecretPassword!");
        assertThat(login.successMessage).isVisible();
    }
}
