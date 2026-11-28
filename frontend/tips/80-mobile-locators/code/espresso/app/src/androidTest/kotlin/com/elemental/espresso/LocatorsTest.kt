package com.elemental.espresso

import android.app.Activity
import android.view.View
import androidx.test.core.app.ActivityScenario
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.UiController
import androidx.test.espresso.ViewAction
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.isDisplayed
import androidx.test.espresso.matcher.ViewMatchers.withContentDescription
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import org.hamcrest.Matcher
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class LocatorsTest {
    @Test
    fun addsTheBackpackToTheCart() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val intent = context.packageManager.getLaunchIntentForPackage(context.packageName)!!

        ActivityScenario.launch<Activity>(intent).use {
            val catalog = withContentDescription("Displays all products of catalog")
            waitUntilDisplayed(catalog)
            onView(catalog).perform(tapFirst("Product Image"))
            onView(withContentDescription("Tap to add product to cart")).perform(click())
            onView(withContentDescription("View cart")).perform(click())
            onView(withContentDescription("Confirms products for checkout")).check(matches(isDisplayed()))
        }
    }

    private fun tapFirst(contentDescription: String) = object : ViewAction {
        override fun getConstraints(): Matcher<View> = isDisplayed()

        override fun getDescription() = "tap the first view with the content description '$contentDescription'"

        override fun perform(uiController: UiController, view: View) {
            val views = ArrayList<View>()
            view.findViewsWithText(views, contentDescription, View.FIND_VIEWS_WITH_CONTENT_DESCRIPTION)
            views.first().performClick()
            uiController.loopMainThreadUntilIdle()
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
