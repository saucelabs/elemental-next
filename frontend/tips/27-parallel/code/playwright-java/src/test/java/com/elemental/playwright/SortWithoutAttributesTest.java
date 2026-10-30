package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import java.util.Comparator;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@UsePlaywright
class SortWithoutAttributesTest {

    private static List<Double> dues(Page page) {
        return page.locator("#table1 tbody tr td:nth-of-type(4)").allTextContents().stream()
                .map(due -> Double.parseDouble(due.replace("$", "")))
                .toList();
    }

    @BeforeEach
    void visitTablesPage(Page page) {
        page.navigate("https://the-internet.herokuapp.com/tables");
    }

    @Test
    void inAscendingOrder(Page page) {
        page.locator("#table1 thead tr th:nth-of-type(4)").click();
        assertThat(page.locator("#table1 thead tr th:nth-of-type(4)")).containsClass("headerSortDown");
        List<Double> dueValues = dues(page);
        assertEquals(dueValues.stream().sorted().toList(), dueValues);
    }

    @Test
    void inDescendingOrder(Page page) {
        page.locator("#table1 thead tr th:nth-of-type(4)").click();
        page.locator("#table1 thead tr th:nth-of-type(4)").click();
        assertThat(page.locator("#table1 thead tr th:nth-of-type(4)")).containsClass("headerSortUp");
        List<Double> dueValues = dues(page);
        assertEquals(dueValues.stream().sorted(Comparator.reverseOrder()).toList(), dueValues);
    }
}
