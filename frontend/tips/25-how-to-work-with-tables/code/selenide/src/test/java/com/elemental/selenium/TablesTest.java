package com.elemental.selenium;

import com.codeborne.selenide.ElementsCollection;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Comparator;
import java.util.List;

import static com.codeborne.selenide.CollectionCondition.exactTexts;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;
import static com.codeborne.selenide.Selenide.open;

public class TablesTest {
  private static final Comparator<String> BY_AMOUNT =
    Comparator.comparing(due -> Double.parseDouble(due.replace("$", "")));

  @BeforeEach
  void openAUT() {
    open("https://the-internet.herokuapp.com/tables");
  }

  @Test
  public void sortNumberAscending() {
    ElementsCollection dues = $$("#table1 tbody tr td:nth-of-type(4)");
    List<String> expected = dues.texts().stream().sorted(BY_AMOUNT).toList();
    $("#table1 thead tr th:nth-of-type(4)").click();
    dues.shouldHave(exactTexts(expected));
  }

  @Test
  public void sortNumberDescending() {
    ElementsCollection dues = $$("#table1 tbody tr td:nth-of-type(4)");
    List<String> expected = dues.texts().stream().sorted(BY_AMOUNT.reversed()).toList();
    $("#table1 thead tr th:nth-of-type(4)").click();
    $("#table1 thead tr th:nth-of-type(4)").click();
    dues.shouldHave(exactTexts(expected));
  }

  @Test
  public void sortTextAscending() {
    ElementsCollection emails = $$("#table1 tbody tr td:nth-of-type(3)");
    List<String> expected = emails.texts().stream().sorted().toList();
    $("#table1 thead tr th:nth-of-type(3)").click();
    emails.shouldHave(exactTexts(expected));
  }

  @Test
  public void sortNumberAscendingWithSemanticLocators() {
    ElementsCollection dues = $$("#table2 tbody .dues");
    List<String> expected = dues.texts().stream().sorted(BY_AMOUNT).toList();
    $("#table2 thead .dues").click();
    dues.shouldHave(exactTexts(expected));
  }
}
