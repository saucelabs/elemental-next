package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.Cookie;
import com.vibium.types.SelectorOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Base64;

public class SecureFilesTest {
    private static final String BASE_URL = "https://the-internet.herokuapp.com";
    private final HttpClient httpClient = HttpClient.newHttpClient();

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
    public void filesBehindBasicAuth() throws Exception {
        String credentials = Base64.getEncoder().encodeToString("admin:admin".getBytes());
        page.go("https://admin:admin@the-internet.herokuapp.com/download_secure");
        String link = page.find(new SelectorOptions().css(".example a")).attr("href");

        // The file names can have spaces and other characters, which this URI constructor encodes.
        URI url = new URI("https", "the-internet.herokuapp.com", "/" + link, null);
        HttpRequest request = HttpRequest.newBuilder(url)
            .method("HEAD", HttpRequest.BodyPublishers.noBody())
            .header("Authorization", "Basic " + credentials)
            .build();
        HttpResponse<Void> response = httpClient.send(request, HttpResponse.BodyHandlers.discarding());
        Assertions.assertEquals(200, response.statusCode(), link);
    }

    @Test
    public void pageBehindFormLogin() throws Exception {
        page.go(BASE_URL + "/login");
        page.find(new SelectorOptions().css("#username")).fill("tomsmith");
        page.find(new SelectorOptions().css("#password")).fill("SuperSecretPassword!");
        page.find(new SelectorOptions().css("#login button")).click();
        page.find(new SelectorOptions().css(".flash.success")).waitUntil("visible");

        Cookie cookie = page.context().cookies().stream()
            .filter(c -> c.name().equals("rack.session"))
            .findFirst()
            .orElseThrow();
        HttpRequest withCookie = HttpRequest.newBuilder(URI.create(BASE_URL + "/secure"))
            .header("Cookie", cookie.name() + "=" + cookie.value())
            .build();
        Assertions.assertEquals(200,
            httpClient.send(withCookie, HttpResponse.BodyHandlers.discarding()).statusCode());

        HttpRequest withoutCookie = HttpRequest.newBuilder(URI.create(BASE_URL + "/secure")).build();
        Assertions.assertEquals(302,
            httpClient.send(withoutCookie, HttpResponse.BodyHandlers.discarding()).statusCode());
    }
}
