package com.elemental.selenium;

import java.util.Comparator;
import java.util.List;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

public class SortWithoutAttributesTest extends BaseTest {
    @Test
    public void ascendingOrder() {
        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();
        waitForSort("#table1 thead tr th:nth-of-type(4)", "headerSortDown");
        List<Double> dueValues = dues("#table1 tbody tr td:nth-of-type(4)");
        Assertions.assertEquals(dueValues.stream().sorted().toList(), dueValues);
    }

    @Test
    public void descendingOrder() {
        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();
        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();
        waitForSort("#table1 thead tr th:nth-of-type(4)", "headerSortUp");
        List<Double> dueValues = dues("#table1 tbody tr td:nth-of-type(4)");
        Assertions.assertEquals(dueValues.stream().sorted(Comparator.reverseOrder()).toList(), dueValues);
    }
}
