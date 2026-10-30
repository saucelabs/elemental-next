package com.elemental.playwright;

import static org.junit.jupiter.api.Assertions.assertTrue;

import com.microsoft.playwright.Download;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import org.junit.jupiter.api.Test;

@UsePlaywright
class DownloadTest {

    @Test
    void downloadFile(Page page) throws IOException {
        page.navigate("https://the-internet.herokuapp.com/download");

        Download download = page.waitForDownload(() -> page.locator(".example a").first().click());

        Path folder = Files.createTempDirectory("downloads");
        Path path = folder.resolve(download.suggestedFilename());
        download.saveAs(path);

        assertTrue(Files.size(path) > 0);
    }
}
