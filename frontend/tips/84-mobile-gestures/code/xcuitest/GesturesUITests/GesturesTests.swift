import XCTest

final class GesturesTests: XCTestCase {
    @MainActor
    func testDrawsALine() {
        let app = XCUIApplication(bundleIdentifier: "com.saucelabs.mydemo.app.ios")
        app.launch()

        let more = app.buttons["More-tab-item"]
        XCTAssertTrue(more.waitForExistence(timeout: 30))
        more.tap()
        app.buttons["Drawing-menu-item"].tap()

        let pad = app.images["DrawingBackground Icons"]
        XCTAssertTrue(pad.waitForExistence(timeout: 10))
        let before = pad.screenshot().pngRepresentation
        let start = pad.coordinate(withNormalizedOffset: CGVector(dx: 0.25, dy: 0.5))
        let end = pad.coordinate(withNormalizedOffset: CGVector(dx: 0.75, dy: 0.5))
        start.press(forDuration: 0.1, thenDragTo: end)
        XCTAssertNotEqual(pad.screenshot().pngRepresentation, before)
    }
}
