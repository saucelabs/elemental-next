import XCTest

final class WaitsTests: XCTestCase {
    @MainActor
    func testAddsTheBackpackToTheCartAndRemovesIt() {
        let app = XCUIApplication(bundleIdentifier: "com.saucelabs.mydemo.app.ios")
        app.launch()

        let product = app.otherElements["ProductItem"].firstMatch
        XCTAssertTrue(product.waitForExistence(timeout: 30))
        product.tap()
        app.buttons["AddToCart"].tap()
        app.buttons["Cart-tab-item"].tap()

        let checkout = app.buttons["ProceedToCheckout"]
        XCTAssertTrue(checkout.waitForExistence(timeout: 10))
        app.buttons["Remove Item"].tap()
        XCTAssertTrue(checkout.waitForNonExistence(timeout: 10))
    }
}
