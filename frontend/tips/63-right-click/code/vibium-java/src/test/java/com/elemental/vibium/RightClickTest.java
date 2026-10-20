package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

public class RightClickTest {
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
    public void opensTheContextMenu() throws Exception {
        page.go("https://the-internet.herokuapp.com/context_menu");

        CompletableFuture<String> alertText = new CompletableFuture<>();
        page.onDialog(dialog -> {
            alertText.complete(dialog.message());
            dialog.accept();
        });
        // Vibium has no right click, so we fire the contextmenu event on the element
        page.find("#hot-spot").dispatchEvent("contextmenu", Map.of("bubbles", true));

        Assertions.assertEquals("You selected a context menu", alertText.get(10, TimeUnit.SECONDS));
    }
}
