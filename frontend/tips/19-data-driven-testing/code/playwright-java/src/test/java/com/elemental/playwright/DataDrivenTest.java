package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

@UsePlaywright
class DataDrivenTest {

    @ParameterizedTest(name = "{0}")
    @CsvFileSource(files = "user_data.csv", numLinesToSkip = 1)
    void login(String accountType, String username, String password, String notificationMessage, Page page) {
        page.navigate("https://the-internet.herokuapp.com/login");
        page.locator("#username").fill(username);
        page.locator("#password").fill(password);
        page.locator("#login button").click();

        assertThat(page.locator("#flash")).containsText(notificationMessage);
    }
}
