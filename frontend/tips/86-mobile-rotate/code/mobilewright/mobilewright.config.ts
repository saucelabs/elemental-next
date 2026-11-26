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
    driver: sauceLabsDriver({region: 'us-west-1', build: 'Elemental Selenium - Tip 86 - Mobilewright'}),
    projects: [
        {
            name: 'ios',
            use: {
                platform: 'ios',
                deviceName: /^iPhone/,
                osVersion: '>=16.6',
                bundleId: 'com.saucelabs.mydemo.app.ios',
                installApps: 'https://github.com/saucelabs/my-demo-app-ios/releases/download/2.3.0/SauceLabs-Demo-App.ipa',
            },
        },
    ],
});
