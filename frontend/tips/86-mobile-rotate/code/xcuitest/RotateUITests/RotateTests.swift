import XCTest

final class RotateTests: XCTestCase {
    @MainActor
    func testShowsTheCatalogInLandscape() {
        let app = XCUIApplication(bundleIdentifier: "com.saucelabs.mydemo.app.ios")
        app.launch()

        let product = app.otherElements["ProductItem"].firstMatch
        XCTAssertTrue(product.waitForExistence(timeout: 30))

        let device = XCUIDevice.shared
        device.orientation = .landscapeLeft
        XCTAssertEqual(device.orientation, .landscapeLeft)
        XCTAssertTrue(product.isHittable)

        device.orientation = .portrait
        XCTAssertEqual(device.orientation, .portrait)
    }
}
