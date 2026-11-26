import XCTest

final class ScrollTests: XCTestCase {
    @MainActor
    func testScrollsToTheOnesie() {
        let app = XCUIApplication(bundleIdentifier: "com.saucelabs.mydemo.app.ios")
        app.launch()
        XCTAssertTrue(app.otherElements["ProductItem"].firstMatch.waitForExistence(timeout: 30))

        let onesie = app.staticTexts["Sauce Labs Onesie"]
        for _ in 0..<20 where !onesie.isHittable {
            app.swipeUp()
        }
        XCTAssertTrue(onesie.isHittable)
    }
}
