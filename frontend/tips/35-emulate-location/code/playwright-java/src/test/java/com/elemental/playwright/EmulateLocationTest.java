package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.Options;
import com.microsoft.playwright.junit.OptionsFactory;
import com.microsoft.playwright.junit.UsePlaywright;
import java.util.List;
import org.junit.jupiter.api.Test;

@UsePlaywright(EmulateLocationTest.CustomOptions.class)
class EmulateLocationTest {

    public static class CustomOptions implements OptionsFactory {
        @Override
        public Options getOptions() {
            return new Options().setContextOptions(new Browser.NewContextOptions()
                    .setGeolocation(52.52, 13.405)
                    .setPermissions(List.of("geolocation"))
                    .setTimezoneId("Asia/Tokyo")
                    .setLocale("de-DE"));
        }
    }

    @Test
    void geolocation(Page page) {
        page.navigate("https://the-internet.herokuapp.com/geolocation");
        page.locator("button").click();

        assertThat(page.locator("#lat-value")).hasText("52.52");
        assertThat(page.locator("#long-value")).hasText("13.405");
    }

    @Test
    void timeZoneAndLocale(Page page) {
        page.navigate("https://the-internet.herokuapp.com/locale");

        assertThat(page.locator("#browser-timezone")).hasText("Asia/Tokyo");
        assertThat(page.locator("#browser-language")).hasText("de-DE");
        assertThat(page.locator("#formatted-date")).hasText("Mittwoch, 15. April 2026 um 21:00");
        assertThat(page.locator("#formatted-number")).hasText("1.234.567,891");
        assertThat(page.locator("#greeting")).hasText("Hallo!");
    }
}
