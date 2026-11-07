package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class EmulateTimeZoneTest {
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
    public void timeZone() {
        page.clock().setTimezone("Asia/Tokyo");

        page.go("https://the-internet.herokuapp.com/locale");

        Assertions.assertEquals("Asia/Tokyo", page.find("#browser-timezone").text());
        // 12:00 UTC is 21:00 in Tokyo (9:00 PM with a 12-hour clock, depending on the browser's language)
        Assertions.assertTrue(page.find("#formatted-date").text().matches(".*(21:00|9:00).*"));
    }
}
