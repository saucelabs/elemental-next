package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Response;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class StatusCodesTest {
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

    @ParameterizedTest
    @ValueSource(ints = {200, 301, 404, 500})
    public void statusCode(int expected) {
        String url = "https://the-internet.herokuapp.com/status_codes/" + expected;

        Response response = page.capture().response(url, () -> page.go(url));

        Assertions.assertEquals(expected, response.status());
    }
}
