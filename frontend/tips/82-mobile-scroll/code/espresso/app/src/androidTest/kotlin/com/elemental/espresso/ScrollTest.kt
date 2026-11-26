package com.elemental.espresso

import android.app.Activity
import android.view.View
import androidx.test.core.app.ActivityScenario
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.swipeUp
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.isDisplayed
import androidx.test.espresso.matcher.ViewMatchers.withContentDescription
import androidx.test.espresso.matcher.ViewMatchers.withText
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import org.hamcrest.Matcher
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class ScrollTest {
    @Test
    fun scrollsToTheOnesie() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val intent = context.packageManager.getLaunchIntentForPackage(context.packageName)!!

        ActivityScenario.launch<Activity>(intent).use {
            val catalog = withContentDescription("Displays all products of catalog")
            waitUntilDisplayed(catalog)

            val screen = withContentDescription("Scrollview manages views in given screen size")
            val onesie = withText("Sauce Labs Onesie")
            repeat(20) {
                if (isDisplayed(onesie)) return@use
                onView(screen).perform(swipeUp())
            }
            onView(onesie).check(matches(isDisplayed()))
        }
    }

    private fun isDisplayed(view: Matcher<View>) = try {
        onView(view).check(matches(isDisplayed()))
        true
    } catch (error: Throwable) {
        false
    }

    private fun waitUntilDisplayed(view: Matcher<View>) {
        val end = System.currentTimeMillis() + 30_000
        while (!isDisplayed(view)) {
            if (System.currentTimeMillis() > end) onView(view).check(matches(isDisplayed()))
            Thread.sleep(500)
        }
    }
}
