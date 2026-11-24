package com.elemental.espresso

import android.app.Activity
import android.view.View
import androidx.test.core.app.ActivityScenario
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.isDisplayed
import androidx.test.espresso.matcher.ViewMatchers.withText
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import org.hamcrest.Matcher
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class RealDeviceTest {
    @Test
    fun showsTheBackpackInTheCatalog() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val intent = context.packageManager.getLaunchIntentForPackage(context.packageName)!!

        ActivityScenario.launch<Activity>(intent).use {
            waitUntilDisplayed(withText("Sauce Labs Backpack"))
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
