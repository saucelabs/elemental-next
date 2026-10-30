package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import com.microsoft.playwright.options.Cookie;
import java.util.List;
import java.util.regex.Pattern;
import org.junit.jupiter.api.Test;

@UsePlaywright
class AbTest {

    private static final Cookie OPT_OUT_COOKIE = new Cookie("optimizelyOptOut", "true")
            .setUrl("https://the-internet.herokuapp.com");

    @Test
    void forgeCookieOnTargetPage(Page page) {
        page.navigate("https://the-internet.herokuapp.com/abtest");
        assertThat(page.locator("h3")).hasText(Pattern.compile("A/B Test (Variation 1|Control)"));

        page.context().addCookies(List.of(OPT_OUT_COOKIE));
        page.reload();

        assertThat(page.locator("h3")).hasText("No A/B Test");
    }

    @Test
    void forgeCookieBeforeVisitingTargetPage(Page page) {
        page.context().addCookies(List.of(OPT_OUT_COOKIE));
        page.navigate("https://the-internet.herokuapp.com/abtest");

        assertThat(page.locator("h3")).hasText("No A/B Test");
    }

    @Test
    void appendOptOutParameterToUrl(Page page) {
        page.onDialog(dialog -> dialog.dismiss());
        page.navigate("https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");

        assertThat(page.locator("h3")).hasText("No A/B Test");
    }
}
