package com.elemental.espresso

import android.app.Activity
import android.view.View
import androidx.test.core.app.ActivityScenario
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.isDisplayed
import androidx.test.espresso.matcher.ViewMatchers.withContentDescription
import androidx.test.espresso.matcher.ViewMatchers.withText
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import androidx.test.uiautomator.By
import androidx.test.uiautomator.UiDevice
import androidx.test.uiautomator.Until
import org.hamcrest.Matcher
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class PermissionsTest {
    @Test
    fun allowsTheAppToUseTheLocation() {
        val instrumentation = InstrumentationRegistry.getInstrumentation()
        val context = instrumentation.targetContext
        val intent = context.packageManager.getLaunchIntentForPackage(context.packageName)!!

        ActivityScenario.launch<Activity>(intent).use {
            val menu = withContentDescription("View menu")
            waitUntilDisplayed(menu)
            onView(menu).perform(click())
            onView(withText("Geo Location")).perform(click())

            val device = UiDevice.getInstance(instrumentation)
            val allow = By.res("com.android.permissioncontroller", "permission_allow_foreground_only_button")
            device.wait(Until.findObject(allow), 10_000)?.click()

            onView(withContentDescription("Start observation of user location")).check(matches(isDisplayed()))
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
