package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.junit.Options;
import com.microsoft.playwright.junit.OptionsFactory;
import com.microsoft.playwright.junit.UsePlaywright;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Map;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

@UsePlaywright(GridTest.GridOptions.class)
class GridTest {

    private static final String GRID_URL = System.getenv().getOrDefault("GRID_URL", "http://localhost:4444");

    public static class GridOptions implements OptionsFactory {
        @Override
        public Options getOptions() {
            // With this variable set, Playwright starts Chrome on the Grid instead of on this machine
            return new Options().setPlaywrightCreateOptions(
                    new Playwright.CreateOptions().setEnv(Map.of("SELENIUM_REMOTE_URL", GRID_URL)));
        }
    }

    @BeforeAll
    static void checkGrid() {
        boolean gridIsRunning;
        try (HttpClient client = HttpClient.newHttpClient()) {
            HttpRequest request = HttpRequest.newBuilder(URI.create(GRID_URL + "/status"))
                    .timeout(Duration.ofSeconds(5))
                    .build();
            gridIsRunning = client.send(request, HttpResponse.BodyHandlers.discarding()).statusCode() == 200;
        } catch (Exception e) {
            gridIsRunning = false;
        }
        assumeTrue(gridIsRunning, "Start a Selenium Grid on http://localhost:4444 (or set GRID_URL) to run the test");
    }

    @Test
    void loadThePage(Page page) {
        page.navigate("https://the-internet.herokuapp.com");
        assertThat(page).hasTitle("The Internet");
    }
}
