import {defineConfig} from 'mobilewright';
import {sauceLabsDriver} from '@saucelabs/mobilewright-driver';

if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs');
    process.exit(0);
}

export default defineConfig({
    testDir: './tests',
    timeout: 240_000,
    workers: 1,
    use: {actionTimeout: 30_000},
    expect: {timeout: 30_000},
    driver: sauceLabsDriver({region: 'us-west-1', build: 'Elemental Selenium - Tip 77 - Mobilewright'}),
    projects: [
        {
            name: 'android',
            use: {
                platform: 'android',
                deviceName: /^Google_Pixel_(?!.*(Fold|Tablet))/,
                osVersion: '>=13',
                bundleId: 'com.android.chrome',
            },
        },
        {
            name: 'ios',
            use: {
                platform: 'ios',
                deviceName: /^iPhone/,
                bundleId: 'com.apple.mobilesafari',
            },
        },
    ],
});
