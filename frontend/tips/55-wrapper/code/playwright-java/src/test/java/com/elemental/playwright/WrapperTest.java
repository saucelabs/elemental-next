package com.elemental.playwright;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import java.util.List;
import org.junit.jupiter.api.Test;

@UsePlaywright
class WrapperTest {

    @Test
    void logEveryAction(Page page) {
        LoggingPage loggingPage = new LoggingPage(page);

        loggingPage.navigate("https://the-internet.herokuapp.com");
        loggingPage.click("text=Checkboxes");

        assertEquals(List.of(
                "Navigated to https://the-internet.herokuapp.com",
                "Clicking on Checkboxes",
                "URL changed to https://the-internet.herokuapp.com/checkboxes"), loggingPage.messages);
    }
}
