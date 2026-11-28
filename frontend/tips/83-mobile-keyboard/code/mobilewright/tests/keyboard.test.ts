import {expect, test} from '@mobilewright/test';

const URL = 'https://saucelabs.com';

test('types a URL and opens it', async ({screen, platform}) => {
    await expect(screen.getByText(/Sauce Labs Backpack/).first()).toBeVisible();
    if (platform === 'android') {
        await screen.getByLabel('View menu').tap();
        await screen.getByText('WebView').tap();
    } else {
        await screen.getByTestId('More-tab-item').tap();
        await screen.getByTestId('Webview-menu-item').tap();
    }

    const url = screen.getByRole('textfield');
    await url.fill(URL);
    await expect(url).toHaveText(URL);
    if (platform === 'android' && await screen.keyboard.isVisible()) {
        await screen.keyboard.hide();
    }

    await screen.getByText('Go To Site').tap();
    await expect(screen.getByWebView()).toBeVisible();
});
