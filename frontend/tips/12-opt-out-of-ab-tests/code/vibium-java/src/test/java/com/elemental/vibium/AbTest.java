package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Dialog;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.SetCookieParam;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

public class AbTest {
    Browser browser;
    Page page;

    static SetCookieParam optOutCookie() {
        return new SetCookieParam("optimizelyOptOut", "true").domain("the-internet.herokuapp.com");
    }

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @Test
    public void optOutCookieOnTheTargetPage() {
        page.go("https://the-internet.herokuapp.com/abtest");
        String headingText = page.find("h3").text();
        Assertions.assertTrue(List.of("A/B Test Variation 1", "A/B Test Control").contains(headingText));

        page.context().setCookies(List.of(optOutCookie()));
        page.reload();

        Assertions.assertEquals("No A/B Test", page.find("h3").text());
    }

    @Test
    public void optOutCookieBeforeVisitingTheTargetPage() {
        page.context().setCookies(List.of(optOutCookie()));
        page.go("https://the-internet.herokuapp.com/abtest");

        Assertions.assertEquals("No A/B Test", page.find("h3").text());
    }

    @Test
    public void optOutParameterInTheUrl() {
        page.onDialog(Dialog::dismiss);
        page.go("https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");

        Assertions.assertEquals("No A/B Test", page.find("h3").text());
    }
}
