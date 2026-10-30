package com.elemental.playwright;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import com.microsoft.playwright.options.MouseButton;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

@UsePlaywright
class RightClickTest {

    @Test
    void openContextMenu(Page page) {
        page.navigate("https://the-internet.herokuapp.com/context_menu");

        List<String> messages = new ArrayList<>();
        page.onDialog(dialog -> {
            messages.add(dialog.message());
            dialog.accept();
        });
        page.locator("#hot-spot").click(new Locator.ClickOptions().setButton(MouseButton.RIGHT));

        assertEquals(List.of("You selected a context menu"), messages);
    }
}
