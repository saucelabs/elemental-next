package com.elemental.selenium;

import java.util.Comparator;
import java.util.List;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

public class SortWithAttributesTest extends BaseTest {
    @Test
    public void ascendingOrder() {
        driver.findElement(By.cssSelector("#table2 thead .dues")).click();
        waitForSort("#table2 thead th:has(.dues)", "headerSortDown");
        List<Double> dueValues = dues("#table2 tbody .dues");
        Assertions.assertEquals(dueValues.stream().sorted().toList(), dueValues);
    }

    @Test
    public void descendingOrder() {
        driver.findElement(By.cssSelector("#table2 thead .dues")).click();
        driver.findElement(By.cssSelector("#table2 thead .dues")).click();
        waitForSort("#table2 thead th:has(.dues)", "headerSortUp");
        List<Double> dueValues = dues("#table2 tbody .dues");
        Assertions.assertEquals(dueValues.stream().sorted(Comparator.reverseOrder()).toList(), dueValues);
    }
}
