package com.elemental.playwright;

import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.microsoft.playwright.APIRequest;
import com.microsoft.playwright.APIRequestContext;
import com.microsoft.playwright.APIResponse;
import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.options.HttpCredentials;
import com.microsoft.playwright.options.HttpCredentialsSend;
import com.microsoft.playwright.options.RequestOptions;
import java.util.Map;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.RegisterExtension;
import org.junit.jupiter.api.extension.TestWatcher;

// Gives each test a page in a browser that runs on Sauce Labs, instead of on this machine
public abstract class SauceTest {

    private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com";
    private static final String SAUCE_API_URL = "https://api.us-west-1.saucelabs.com";
    private static final String USERNAME = System.getenv().getOrDefault("SAUCE_USERNAME", "");
    private static final String ACCESS_KEY = System.getenv().getOrDefault("SAUCE_ACCESS_KEY", "");
    // Sauce Labs needs the major and minor version of Playwright, e.g. "1.61"
    private static final String PLAYWRIGHT_VERSION =
            Playwright.class.getPackage().getImplementationVersion().replaceAll("^(\\d+\\.\\d+).*", "$1");

    private Playwright playwright;
    private APIRequestContext api;
    private Browser browser;
    private String sessionId;
    private String testName;

    @BeforeEach
    void skipWithoutCredentials(TestInfo testInfo) {
        assumeTrue(!USERNAME.isEmpty() && !ACCESS_KEY.isEmpty(),
                "Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");
        testName = getClass().getSimpleName() + "." + testInfo.getTestMethod().orElseThrow().getName();
    }

    // Starts a browser (chromium, firefox or webkit) on Sauce Labs and opens a page in it
    protected Page openPage(String browserName) {
        playwright = Playwright.create();
        api = playwright.request().newContext(new APIRequest.NewContextOptions().setHttpCredentials(
                new HttpCredentials(USERNAME, ACCESS_KEY).setSend(HttpCredentialsSend.ALWAYS)));

        // Asks Sauce Labs for the browser. It redirects (303) until the browser is ready
        APIResponse response = api.post(SAUCE_URL + "/playwright/session", RequestOptions.create()
                .setData(Map.of(
                        "browserName", browserName.equals("chromium") ? "chrome" : browserName,
                        "platformName", "Linux",
                        "playwrightVersion", PLAYWRIGHT_VERSION,
                        "sauce:options", Map.of(
                                "name", testName + " (" + browserName + ")",
                                "build", "Elemental Selenium - Tip 41 - Playwright Java")))
                .setMaxRedirects(0));
        while (response.status() == 303) {
            response = api.get(response.headers().get("location"), RequestOptions.create().setMaxRedirects(0));
        }
        JsonObject session = JsonParser.parseString(response.text()).getAsJsonObject().getAsJsonObject("value");
        sessionId = session.get("sessionId").getAsString();

        // Connects to the browser with the Playwright protocol
        String wsEndpoint = session.get("wsEndpoint").getAsString();
        BrowserType browserType = switch (browserName) {
            case "firefox" -> playwright.firefox();
            case "webkit" -> playwright.webkit();
            default -> playwright.chromium();
        };
        browser = browserType.connect(wsEndpoint + "?browser=" + browserName);
        return browser.newPage();
    }

    // JUnit calls it after each test, with the result of the test
    @RegisterExtension
    final TestWatcher closeBrowser = new TestWatcher() {
        @Override
        public void testSuccessful(ExtensionContext context) {
            closeBrowser(true);
        }

        @Override
        public void testFailed(ExtensionContext context, Throwable cause) {
            closeBrowser(false);
        }
    };

    private void closeBrowser(boolean passed) {
        if (browser == null) {
            return;
        }
        browser.close();

        // Marks the job as passed or failed on Sauce Labs
        api.put(SAUCE_API_URL + "/rest/v1/" + USERNAME + "/jobs/" + sessionId,
                RequestOptions.create().setData(Map.of("passed", passed)));
        api.dispose();
        playwright.close();
        System.out.println("See the job at https://app.saucelabs.com/tests/" + sessionId);
    }
}
