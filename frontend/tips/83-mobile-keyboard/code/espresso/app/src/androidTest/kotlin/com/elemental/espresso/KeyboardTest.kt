package com.elemental.espresso

import android.app.Activity
import android.view.View
import android.webkit.WebView
import androidx.test.core.app.ActivityScenario
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.action.ViewActions.closeSoftKeyboard
import androidx.test.espresso.action.ViewActions.typeText
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.isAssignableFrom
import androidx.test.espresso.matcher.ViewMatchers.isDisplayed
import androidx.test.espresso.matcher.ViewMatchers.withContentDescription
import androidx.test.espresso.matcher.ViewMatchers.withResourceName
import androidx.test.espresso.matcher.ViewMatchers.withText
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import org.hamcrest.Matcher
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class KeyboardTest {
    private val url = "https://saucelabs.com"

    @Test
    fun typesAUrlAndOpensIt() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val intent = context.packageManager.getLaunchIntentForPackage(context.packageName)!!

        ActivityScenario.launch<Activity>(intent).use {
            val menu = withContentDescription("View menu")
            waitUntilDisplayed(menu)
            onView(menu).perform(click())
            onView(withText("WebView")).perform(click())

            onView(withResourceName("urlET")).perform(typeText(url), closeSoftKeyboard())
            onView(withResourceName("urlET")).check(matches(withText(url)))

            onView(withContentDescription("Tap to view content of given url")).perform(click())
            onView(isAssignableFrom(WebView::class.java)).check(matches(isDisplayed()))
        }
    }

    private fun waitUntilDisplayed(view: Matcher<View>) {
        val end = System.currentTimeMillis() + 30_000
        while (true) {
            try {
                onView(view).check(matches(isDisplayed()))
                return
            } catch (error: Throwable) {
                if (System.currentTimeMillis() > end) throw error
                Thread.sleep(500)
            }
        }
    }
}
