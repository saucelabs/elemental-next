import XCTest

final class RealDeviceTests: XCTestCase {
    @MainActor
    func testShowsTheBackpackInTheCatalog() {
        // Sauce Labs' demo app, installed on the device next to the tests
        let app = XCUIApplication(bundleIdentifier: "com.saucelabs.mydemo.app.ios")
        app.launch()

        let backpack = app.staticTexts["Sauce Labs Backpack - Black"]
        XCTAssertTrue(backpack.waitForExistence(timeout: 30))
    }
}
