import XCTest

final class PermissionsTests: XCTestCase {
    @MainActor
    func testAllowsTheAppToUseTheLocation() {
        let app = XCUIApplication(bundleIdentifier: "com.saucelabs.mydemo.app.ios")
        app.launch()

        let more = app.buttons["More-tab-item"]
        XCTAssertTrue(more.waitForExistence(timeout: 30))
        more.tap()
        app.buttons["GeoLocation-menu-item"].tap()

        let springboard = XCUIApplication(bundleIdentifier: "com.apple.springboard")
        let allow = springboard.alerts.buttons["Allow While Using App"]
        if allow.waitForExistence(timeout: 10) {
            allow.tap()
        }

        XCTAssertTrue(app.staticTexts["Latitude"].waitForExistence(timeout: 10))
    }
}
