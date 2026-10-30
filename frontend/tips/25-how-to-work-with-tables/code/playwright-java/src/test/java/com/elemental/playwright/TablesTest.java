package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import java.util.Comparator;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@UsePlaywright
class TablesTest {

    private static List<Double> dues(Locator cells) {
        return cells.allTextContents().stream().map(due -> Double.parseDouble(due.replace("$", ""))).toList();
    }

    @BeforeEach
    void visitTablesPage(Page page) {
        page.navigate("https://the-internet.herokuapp.com/tables");
    }

    @Test
    void sortNumberColumnInAscendingOrder(Page page) {
        page.locator("#table1 thead tr th:nth-of-type(4)").click();
        assertThat(page.locator("#table1 thead tr th:nth-of-type(4)")).containsClass("headerSortDown");
        List<Double> dueValues = dues(page.locator("#table1 tbody tr td:nth-of-type(4)"));
        assertEquals(dueValues.stream().sorted().toList(), dueValues);
    }

    @Test
    void sortNumberColumnInDescendingOrder(Page page) {
        page.locator("#table1 thead tr th:nth-of-type(4)").click();
        page.locator("#table1 thead tr th:nth-of-type(4)").click();
        assertThat(page.locator("#table1 thead tr th:nth-of-type(4)")).containsClass("headerSortUp");
        List<Double> dueValues = dues(page.locator("#table1 tbody tr td:nth-of-type(4)"));
        assertEquals(dueValues.stream().sorted(Comparator.reverseOrder()).toList(), dueValues);
    }

    @Test
    void sortTextColumnInAscendingOrder(Page page) {
        page.locator("#table1 thead tr th:nth-of-type(3)").click();
        assertThat(page.locator("#table1 thead tr th:nth-of-type(3)")).containsClass("headerSortDown");
        List<String> emails = page.locator("#table1 tbody tr td:nth-of-type(3)").allTextContents();
        assertEquals(emails.stream().sorted().toList(), emails);
    }

    @Test
    void sortNumberColumnInAscendingOrderWithSemanticLocators(Page page) {
        page.locator("#table2 thead th:has(.dues)").click();
        assertThat(page.locator("#table2 thead th:has(.dues)")).containsClass("headerSortDown");
        List<Double> dueValues = dues(page.locator("#table2 tbody .dues"));
        assertEquals(dueValues.stream().sorted().toList(), dueValues);
    }
}
