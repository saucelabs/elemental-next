package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Element;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Comparator;
import java.util.List;

public class TablesTest {
    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
        page.go("https://the-internet.herokuapp.com/tables");
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    List<String> texts(String selector) {
        return page.findAll(selector).stream().map(Element::text).toList();
    }

    List<Double> dues(String selector) {
        return texts(selector).stream().map(due -> Double.parseDouble(due.replace("$", ""))).toList();
    }

    @Test
    public void numberColumnAscending() {
        page.find("#table1 thead tr th:nth-of-type(4)").click();
        page.find("#table1 thead tr th:nth-of-type(4).headerSortDown");
        List<Double> dueValues = dues("#table1 tbody tr td:nth-of-type(4)");
        Assertions.assertEquals(dueValues.stream().sorted().toList(), dueValues);
    }

    @Test
    public void numberColumnDescending() {
        page.find("#table1 thead tr th:nth-of-type(4)").click();
        page.find("#table1 thead tr th:nth-of-type(4)").click();
        page.find("#table1 thead tr th:nth-of-type(4).headerSortUp");
        List<Double> dueValues = dues("#table1 tbody tr td:nth-of-type(4)");
        Assertions.assertEquals(dueValues.stream().sorted(Comparator.reverseOrder()).toList(), dueValues);
    }

    @Test
    public void textColumnAscending() {
        page.find("#table1 thead tr th:nth-of-type(3)").click();
        page.find("#table1 thead tr th:nth-of-type(3).headerSortDown");
        List<String> emails = texts("#table1 tbody tr td:nth-of-type(3)");
        Assertions.assertEquals(emails.stream().sorted().toList(), emails);
    }

    @Test
    public void numberColumnAscendingWithSemanticLocators() {
        page.find("#table2 thead .dues").click();
        page.find("#table2 thead th.headerSortDown:has(.dues)");
        List<Double> dueValues = dues("#table2 tbody .dues");
        Assertions.assertEquals(dueValues.stream().sorted().toList(), dueValues);
    }
}
