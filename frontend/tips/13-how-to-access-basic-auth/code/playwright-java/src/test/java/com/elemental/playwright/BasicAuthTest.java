package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.Options;
import com.microsoft.playwright.junit.OptionsFactory;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright(BasicAuthTest.CustomOptions.class)
class BasicAuthTest {

    private static final String MESSAGE = "Congratulations! You must have the proper credentials.";

    public static class CustomOptions implements OptionsFactory {
        @Override
        public Options getOptions() {
            return new Options()
                    .setContextOptions(new Browser.NewContextOptions().setHttpCredentials("admin", "admin"));
        }
    }

    @Test
    void loginWithBasicAuth(Page page) {
        page.navigate("https://the-internet.herokuapp.com/basic_auth");

        assertThat(page.locator(".example p")).hasText(MESSAGE);
    }
}
