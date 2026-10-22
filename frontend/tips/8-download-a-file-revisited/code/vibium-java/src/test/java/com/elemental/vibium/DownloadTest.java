package com.elemental.vibium;

import com.vibium.Browser;
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

public class DownloadTest {
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
    public void fileCanBeDownloaded() throws Exception {
        page.go("https://the-internet.herokuapp.com/download");
        URI link = URI.create(page.url()).resolve(page.find(".example a").attr("href"));

        HttpRequest request = HttpRequest.newBuilder(link).method("HEAD", HttpRequest.BodyPublishers.noBody()).build();
        HttpResponse<Void> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.discarding());
        String contentDisposition = response.headers().firstValue("Content-Disposition").orElse("");
        long contentLength = response.headers().firstValueAsLong("Content-Length").orElse(0);

        Assertions.assertTrue(contentDisposition.startsWith("attachment"));
        Assertions.assertTrue(contentLength > 0);
    }
}
