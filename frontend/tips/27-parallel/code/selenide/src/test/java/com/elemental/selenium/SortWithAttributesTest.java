package com.elemental.selenium;

import com.codeborne.selenide.ElementsCollection;
import org.junit.jupiter.api.Test;

import java.util.List;

import static com.codeborne.selenide.CollectionCondition.exactTexts;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;

public class SortWithAttributesTest extends BaseTest {
  @Test
  public void ascendingOrder() {
    ElementsCollection dues = $$("#table2 tbody .dues");
    List<String> expected = dues.texts().stream().sorted(BY_AMOUNT).toList();
    $("#table2 thead .dues").click();
    dues.shouldHave(exactTexts(expected));
  }

  @Test
  public void descendingOrder() {
    ElementsCollection dues = $$("#table2 tbody .dues");
    List<String> expected = dues.texts().stream().sorted(BY_AMOUNT.reversed()).toList();
    $("#table2 thead .dues").click();
    $("#table2 thead .dues").click();
    dues.shouldHave(exactTexts(expected));
  }
}
