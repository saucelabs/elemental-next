package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Comparator;
import java.util.List;

public class SortWithoutAttributesTest {
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
        return page.findAll("#table1 tbody tr td:nth-of-type(4)").stream()
            .map(due -> Double.parseDouble(due.text().replace("$", "")))
            .toList();
    }

    @Test
    public void ascendingOrder() {
        page.find("#table1 thead tr th:nth-of-type(4)").click();
        page.find("#table1 thead tr th:nth-of-type(4).headerSortDown");
        List<Double> dueValues = dues();
        Assertions.assertEquals(dueValues.stream().sorted().toList(), dueValues);
    }

    @Test
    public void descendingOrder() {
        page.find("#table1 thead tr th:nth-of-type(4)").click();
        page.find("#table1 thead tr th:nth-of-type(4)").click();
        page.find("#table1 thead tr th:nth-of-type(4).headerSortUp");
        List<Double> dueValues = dues();
        Assertions.assertEquals(dueValues.stream().sorted(Comparator.reverseOrder()).toList(), dueValues);
    }
}
