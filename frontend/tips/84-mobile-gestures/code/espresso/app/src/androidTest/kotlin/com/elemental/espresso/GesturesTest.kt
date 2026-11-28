package com.elemental.espresso

import android.Manifest
import android.app.Activity
import android.graphics.Bitmap
import android.graphics.Canvas
import android.view.View
import androidx.test.core.app.ActivityScenario
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.UiController
import androidx.test.espresso.ViewAction
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.action.ViewActions.swipeRight
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.isDisplayed
import androidx.test.espresso.matcher.ViewMatchers.withContentDescription
import androidx.test.espresso.matcher.ViewMatchers.withText
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import androidx.test.rule.GrantPermissionRule
import org.hamcrest.Matcher
import org.junit.Assert.assertFalse
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class GesturesTest {
    @get:Rule
    val permissions: GrantPermissionRule = GrantPermissionRule.grant(Manifest.permission.READ_EXTERNAL_STORAGE)

    @Test
    fun drawsALine() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val intent = context.packageManager.getLaunchIntentForPackage(context.packageName)!!

        ActivityScenario.launch<Activity>(intent).use {
            val menu = withContentDescription("View menu")
            waitUntilDisplayed(menu)
            onView(menu).perform(click())
            onView(withText("Drawing")).perform(click())

            val pictures = mutableListOf<Bitmap>()
            onView(withContentDescription("Pad to draw on")).perform(capture(pictures), swipeRight(), capture(pictures))
            assertFalse(pictures[0].sameAs(pictures[1]))
        }
    }

    private fun capture(pictures: MutableList<Bitmap>) = object : ViewAction {
        override fun getConstraints(): Matcher<View> = isDisplayed()

        override fun getDescription() = "capture what the view shows"

        override fun perform(uiController: UiController, view: View) {
            val picture = Bitmap.createBitmap(view.width, view.height, Bitmap.Config.ARGB_8888)
            view.draw(Canvas(picture))
            pictures.add(picture)
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
