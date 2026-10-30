package com.elemental.playwright;

import static org.junit.jupiter.api.Assertions.assertTrue;

import com.microsoft.playwright.APIResponse;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class DownloadTest {

    @Test
    void fileCanBeDownloaded(Page page) {
        page.navigate("https://the-internet.herokuapp.com/download");
        String url = (String) page.locator(".example a").first().evaluate("link => link.href");

        APIResponse response = page.request().head(url);

        assertTrue(response.headers().get("content-disposition").contains("attachment"));
        assertTrue(Long.parseLong(response.headers().get("content-length")) > 0);
    }
}
