import XCTest

final class LocatorsTests: XCTestCase {
    @MainActor
    func testAddsTheBackpackToTheCart() {
        let app = XCUIApplication(bundleIdentifier: "com.saucelabs.mydemo.app.ios")
        app.launch()

        let product = app.otherElements["ProductItem"].firstMatch
        XCTAssertTrue(product.waitForExistence(timeout: 30))
        product.tap()
        app.buttons["AddToCart"].tap()
        app.buttons["Cart-tab-item"].tap()
        XCTAssertTrue(app.buttons["ProceedToCheckout"].waitForExistence(timeout: 10))
    }
}
