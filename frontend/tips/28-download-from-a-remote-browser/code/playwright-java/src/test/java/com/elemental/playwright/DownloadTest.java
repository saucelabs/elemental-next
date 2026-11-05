package com.elemental.playwright;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.microsoft.playwright.Download;
import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.Options;
import com.microsoft.playwright.junit.OptionsFactory;
import com.microsoft.playwright.junit.UsePlaywright;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Duration;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

@UsePlaywright(DownloadTest.RemoteOptions.class)
class DownloadTest {

    private static final String SERVER_URL =
            System.getenv().getOrDefault("PLAYWRIGHT_SERVER_URL", "ws://127.0.0.1:3000/");

    public static class RemoteOptions implements OptionsFactory {
        @Override
        public Options getOptions() {
            // Connects to a Chrome that runs where the Playwright server runs, instead of on this machine
            return new Options().setWsEndpoint(SERVER_URL);
        }
    }

    @BeforeAll
    static void checkServer() {
        boolean serverIsRunning;
        try (HttpClient client = HttpClient.newHttpClient()) {
            HttpRequest request = HttpRequest.newBuilder(URI.create(SERVER_URL.replaceFirst("^ws", "http")))
                    .timeout(Duration.ofSeconds(5))
                    .build();
            // Any answer means the server is running
            client.send(request, HttpResponse.BodyHandlers.discarding());
            serverIsRunning = true;
        } catch (Exception e) {
            serverIsRunning = false;
        }
        assumeTrue(serverIsRunning,
                "Start a Playwright server on " + SERVER_URL + " (or set PLAYWRIGHT_SERVER_URL) to run the test");
    }

    @Test
    void downloadFile(Page page, @TempDir Path targetDir) throws Exception {
        page.navigate("https://the-internet.herokuapp.com/download");
        Locator link = page.locator(".example a").first();
        String fileName = link.textContent();

        // Waits for the download that the click starts
        Download download = page.waitForDownload(link::click);
        assertEquals(fileName, download.suggestedFilename());

        // Copies the file from the remote browser to a folder on this machine
        Path downloadedFile = targetDir.resolve(download.suggestedFilename());
        download.saveAs(downloadedFile);
        assertTrue(Files.size(downloadedFile) > 0);
    }
}
