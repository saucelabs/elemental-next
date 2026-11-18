import {defineConfig} from 'mobilewright';
import {sauceLabsDriver} from '@saucelabs/mobilewright-driver';

// Skips the tests when the Sauce Labs credentials are not set
if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs');
    process.exit(0);
}

export default defineConfig({
    testDir: './tests',
    // Finding a free device and installing the app can take a few minutes
    timeout: 240_000,
    // One device at a time
    workers: 1,
    // Mobilewright's 5 second defaults are meant for local devices
    use: {actionTimeout: 30_000},
    expect: {timeout: 30_000},
    driver: sauceLabsDriver({region: 'us-west-1', build: 'Elemental Selenium - Tip 30 - Mobilewright'}),
    projects: [
        {
            name: 'android',
            use: {
                platform: 'android',
                // Pixel phones (no foldables or tablets) with Android 13 or later, which the Sauce Labs driver needs
                deviceName: /^Google_Pixel_(?!.*(Fold|Tablet))/,
                osVersion: '>=13',
                bundleId: 'com.saucelabs.mydemoapp.android',
                installApps: 'https://github.com/saucelabs/my-demo-app-android/releases/download/2.3.0/mda-2.3.0-27.apk',
            },
        },
        {
            name: 'ios',
            use: {
                platform: 'ios',
                // The demo app needs iOS 16.6 or later
                deviceName: /^iPhone/,
                osVersion: '>=16.6',
                bundleId: 'com.saucelabs.mydemo.app.ios',
                installApps: 'https://github.com/saucelabs/my-demo-app-ios/releases/download/2.3.0/SauceLabs-Demo-App.ipa',
            },
        },
    ],
});
