import XCTest

final class KeyboardTests: XCTestCase {
    @MainActor
    func testTypesAUrlAndOpensIt() {
        let app = XCUIApplication(bundleIdentifier: "com.saucelabs.mydemo.app.ios")
        app.launch()

        let more = app.buttons["More-tab-item"]
        XCTAssertTrue(more.waitForExistence(timeout: 30))
        more.tap()
        app.buttons["Webview-menu-item"].tap()

        let url = app.textFields.firstMatch
        url.tap()
        url.typeText("https://saucelabs.com")
        XCTAssertEqual(url.value as? String, "https://saucelabs.com")

        app.buttons["Go To Site"].tap()
        XCTAssertTrue(app.webViews.firstMatch.waitForExistence(timeout: 30))
    }
}
