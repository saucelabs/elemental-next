package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Element;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

public class BrokenImagesTest {
    private final HttpClient httpClient = HttpClient.newHttpClient();

    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
        page.go("https://the-internet.herokuapp.com/broken_images");
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @Test
    public void brokenImagesWithAnHttpLibrary() throws Exception {
        URI pageUrl = URI.create(page.url());
        List<String> brokenImages = new ArrayList<>();
        for (Element image : page.findAll("img")) {
            URI source = pageUrl.resolve(image.attr("src"));
            HttpRequest request = HttpRequest.newBuilder(source).build();
            if (httpClient.send(request, HttpResponse.BodyHandlers.discarding()).statusCode() != 200) {
                brokenImages.add(source.toString());
            }
        }
        System.out.println(brokenImages);
        Assertions.assertEquals(List.of("asdf.jpg", "hjkl.jpg"),
            brokenImages.stream().map(source -> source.substring(source.lastIndexOf('/') + 1)).toList());
    }

    @Test
    public void brokenImagesWithJavaScript() {
        Object sources = page.evaluate("""
            Array.from(document.querySelectorAll('img'))
                .filter((img) => !(img.complete && img.naturalWidth > 0))
                .map((img) => img.getAttribute('src'))
            """);
        System.out.println(sources);
        Assertions.assertEquals(List.of("asdf.jpg", "hjkl.jpg"), sources);
    }
}
