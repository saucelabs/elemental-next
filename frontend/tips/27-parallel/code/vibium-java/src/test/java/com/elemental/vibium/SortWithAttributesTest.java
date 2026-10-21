package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Comparator;
import java.util.List;

public class SortWithAttributesTest {
    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Browsers.start();
        page = browser.page();
        page.go("https://the-internet.herokuapp.com/tables");
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    List<Double> dues() {
        return page.findAll("#table2 tbody .dues").stream()
            .map(due -> Double.parseDouble(due.text().replace("$", "")))
            .toList();
    }

    @Test
    public void ascendingOrder() {
        page.find("#table2 thead .dues").click();
        page.find("#table2 thead th.headerSortDown:has(.dues)");
        List<Double> dueValues = dues();
        Assertions.assertEquals(dueValues.stream().sorted().toList(), dueValues);
    }

    @Test
    public void descendingOrder() {
        page.find("#table2 thead .dues").click();
        page.find("#table2 thead .dues").click();
        page.find("#table2 thead th.headerSortUp:has(.dues)");
        List<Double> dueValues = dues();
        Assertions.assertEquals(dueValues.stream().sorted(Comparator.reverseOrder()).toList(), dueValues);
    }
}
