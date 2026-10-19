package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Element;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

public class CheckboxesTest {
    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
        page.go("https://the-internet.herokuapp.com/checkboxes");
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @Test
    public void checkedAttribute() {
        List<Element> checkboxes = page.findAll("input[type=\"checkbox\"]");
        System.out.println(checkboxes.stream().map(checkbox -> checkbox.attr("checked")).toList());
        Assertions.assertNull(checkboxes.getFirst().attr("checked"));
        Assertions.assertNotNull(checkboxes.getLast().attr("checked"));
    }

    @Test
    public void checkboxIsChecked() {
        List<Element> checkboxes = page.findAll("input[type=\"checkbox\"]");
        Assertions.assertFalse(checkboxes.getFirst().isChecked());
        Assertions.assertTrue(checkboxes.getLast().isChecked());
    }
}
