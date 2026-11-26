import {$, $$, driver, expect} from '@wdio/globals';

const URL = 'https://saucelabs.com';

describe('Keyboard', () => {
    it('types a URL and opens it', async () => {
        const selectors = driver.isAndroid
            ? {
                menu: '~View menu',
                webViewItem: 'android=new UiSelector().text("WebView")',
                url: 'id=urlET',
                go: '~Tap to view content of given url',
                webView: 'android.webkit.WebView',
            }
            : {
                menu: '~More-tab-item',
                webViewItem: '~Webview-menu-item',
                url: 'XCUIElementTypeTextField',
                go: '~Go To Site',
                webView: 'XCUIElementTypeWebView',
            };

        await $(selectors.menu).click();
        await $(selectors.webViewItem).click();

        const url = $(selectors.url);
        await url.setValue(URL);
        await expect(url).toHaveText(URL);
        if (driver.isAndroid && await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }

        await $$(selectors.go)[0].click();
        await expect($$(selectors.webView)[0]).toBeDisplayed();
    });
});
