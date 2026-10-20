package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Download;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

import java.nio.file.Files;
import java.nio.file.Path;

public class DownloadTest {
    Browser browser;
    Page page;

    @TempDir
    Path downloadDir;

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
    public void downloadFile() throws Exception {
        page.go("https://the-internet.herokuapp.com/download");

        Download download = page.capture().download(() -> page.find(".example a").click());

        Path file = downloadDir.resolve(download.suggestedFilename());
        download.saveAs(file.toString());

        Assertions.assertTrue(Files.size(file) > 0);
    }
}
