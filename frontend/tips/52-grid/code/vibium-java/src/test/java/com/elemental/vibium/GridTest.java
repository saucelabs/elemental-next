package com.elemental.vibium;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.StartOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Map;

public class GridTest {
    private static final String GRID_URL = System.getenv().getOrDefault("GRID_URL", "http://localhost:4444");
    private static final HttpClient HTTP_CLIENT = HttpClient.newHttpClient();
    private static final Gson GSON = new Gson();

    String sessionId;
    Browser browser;
    Page page;

    static boolean gridIsRunning() {
        try {
            HttpRequest request = HttpRequest.newBuilder(URI.create(GRID_URL + "/status")).build();
            return HTTP_CLIENT.send(request, HttpResponse.BodyHandlers.discarding()).statusCode() == 200;
        } catch (Exception e) {
            return false;
        }
    }

    static JsonObject gridRequest(String method, String path, Object body) throws Exception {
        HttpRequest request = HttpRequest.newBuilder(URI.create(GRID_URL + path))
            .method(method, body == null
                ? HttpRequest.BodyPublishers.noBody()
                : HttpRequest.BodyPublishers.ofString(GSON.toJson(body)))
            .header("Content-Type", "application/json; charset=utf-8")
            .build();
        HttpResponse<String> response = HTTP_CLIENT.send(request, HttpResponse.BodyHandlers.ofString());
        return GSON.fromJson(response.body(), JsonObject.class);
    }

    @BeforeEach
    public void beforeEach() throws Exception {
        Assumptions.assumeTrue(gridIsRunning(),
            "Start a Selenium Grid on " + GRID_URL + " (or set GRID_URL) to run this test");

        // Vibium speaks WebDriver BiDi. We ask the Grid for a session with a BiDi WebSocket (webSocketUrl: true),
        // and then connect Vibium to it.
        JsonObject session = gridRequest("POST", "/session", Map.of(
            "capabilities", Map.of("alwaysMatch", Map.of("browserName", "chrome", "webSocketUrl", true))))
            .getAsJsonObject("value");
        sessionId = session.get("sessionId").getAsString();
        String webSocketUrl = session.getAsJsonObject("capabilities").get("webSocketUrl").getAsString();
        browser = Vibium.start(new StartOptions().connectURL(webSocketUrl));
        page = browser.page();
    }

    @AfterEach
    public void afterEach() throws Exception {
        if (browser != null) {
            browser.stop();
            // Ends the session on the Grid
            gridRequest("DELETE", "/session/" + sessionId, null);
        }
    }

    @Test
    public void loadsThePage() {
        page.go("https://the-internet.herokuapp.com");
        Assertions.assertEquals("The Internet", page.title());
    }
}
