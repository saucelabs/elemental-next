package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import java.nio.file.Path;
import org.junit.jupiter.api.Test;

@UsePlaywright
class UploadTest {

    @Test
    void uploadFile(Page page) {
        String filename = "some-file.txt";
        Path path = Path.of(filename).toAbsolutePath();

        page.navigate("https://the-internet.herokuapp.com/upload");
        page.locator("#file-upload").setInputFiles(path);
        page.locator("#file-submit").click();

        assertThat(page.locator("#uploaded-files")).hasText(filename);
    }
}
