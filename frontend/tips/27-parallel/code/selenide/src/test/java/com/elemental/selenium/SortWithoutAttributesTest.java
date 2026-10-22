package com.elemental.selenium;

import com.codeborne.selenide.ElementsCollection;
import org.junit.jupiter.api.Test;

import java.util.List;

import static com.codeborne.selenide.CollectionCondition.exactTexts;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;

public class SortWithoutAttributesTest extends BaseTest {
  @Test
  public void ascendingOrder() {
    ElementsCollection dues = $$("#table1 tbody tr td:nth-of-type(4)");
    List<String> expected = dues.texts().stream().sorted(BY_AMOUNT).toList();
    $("#table1 thead tr th:nth-of-type(4)").click();
    dues.shouldHave(exactTexts(expected));
  }

  @Test
  public void descendingOrder() {
    ElementsCollection dues = $$("#table1 tbody tr td:nth-of-type(4)");
    List<String> expected = dues.texts().stream().sorted(BY_AMOUNT.reversed()).toList();
    $("#table1 thead tr th:nth-of-type(4)").click();
    $("#table1 thead tr th:nth-of-type(4)").click();
    dues.shouldHave(exactTexts(expected));
  }
}
