package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.Route;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class MockResponsesTest {

    @Test
    void pageShowsTheMockedAnswer(Page page) {
        page.route("**/slow_api/data?*", route -> route.fulfill(new Route.FulfillOptions()
                .setContentType("application/json")
                .setBody("{\"message\": \"Hello from the mock\"}")));

        page.navigate("https://the-internet.herokuapp.com/slow_api");
        page.locator("#call-api").click();

        assertThat(page.locator("#status-text")).hasText("Hello from the mock");
        assertThat(page.locator("#attempts li")).hasText("200: Hello from the mock");
    }
}
