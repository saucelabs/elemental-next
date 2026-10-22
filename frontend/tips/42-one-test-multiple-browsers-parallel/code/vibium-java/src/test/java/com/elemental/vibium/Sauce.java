package com.elemental.vibium;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Base64;
import java.util.List;
import java.util.Map;

public class Sauce {
    private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
    private static final HttpClient HTTP_CLIENT = HttpClient.newHttpClient();
    private static final Gson GSON = new Gson();

    public record Session(String sessionId, String webSocketUrl) {
    }

    static JsonObject webDriver(String method, String path, Object body) throws Exception {
        String credentials = System.getenv("SAUCE_USERNAME") + ":" + System.getenv("SAUCE_ACCESS_KEY");
        HttpRequest request = HttpRequest.newBuilder(URI.create(SAUCE_URL + path))
            .method(method, body == null
                ? HttpRequest.BodyPublishers.noBody()
                : HttpRequest.BodyPublishers.ofString(GSON.toJson(body)))
            .header("Authorization", "Basic " + Base64.getEncoder().encodeToString(credentials.getBytes()))
            .header("Content-Type", "application/json; charset=utf-8")
            .build();
        HttpResponse<String> response = HTTP_CLIENT.send(request, HttpResponse.BodyHandlers.ofString());
        return GSON.fromJson(response.body(), JsonObject.class);
    }

    // Vibium speaks WebDriver BiDi. We ask Sauce Labs for a session with a BiDi WebSocket (webSocketUrl: true), and
    // then connect Vibium to it.
    public static Session startSession(String browserName, String name) throws Exception {
        JsonObject value = webDriver("POST", "/session", Map.of(
            "capabilities", Map.of(
                "alwaysMatch", Map.of(
                    "browserName", browserName,
                    "browserVersion", "latest",
                    "platformName", "Windows 11",
                    "webSocketUrl", true,
                    "sauce:options", Map.of("name", name)))))
            .getAsJsonObject("value");
        return new Session(value.get("sessionId").getAsString(),
            value.getAsJsonObject("capabilities").get("webSocketUrl").getAsString());
    }

    // Marks the job as passed or failed on Sauce Labs, and ends the session
    public static void endSession(Session session, boolean passed) throws Exception {
        webDriver("POST", "/session/" + session.sessionId() + "/execute/sync",
            Map.of("script", "sauce:job-result=" + passed, "args", List.of()));
        webDriver("DELETE", "/session/" + session.sessionId(), null);
    }
}
