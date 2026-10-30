package com.elemental.playwright;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.Response;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

@UsePlaywright
class StatusCodesTest {

    @ParameterizedTest
    @ValueSource(ints = {200, 301, 404, 500})
    void retrieveStatusCode(int expected, Page page) {
        Response response = page.navigate("https://the-internet.herokuapp.com/status_codes/" + expected);

        assertEquals(expected, response.status());
    }
}
