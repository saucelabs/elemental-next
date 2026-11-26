const STORAGE_URL = 'https://api.us-west-1.saucelabs.com/v1/storage/upload';
const APPS = [
    'https://github.com/saucelabs/my-demo-app-android/releases/download/2.3.0/mda-2.3.0-27.apk',
    'https://github.com/saucelabs/my-demo-app-ios/releases/download/2.3.0/SauceLabs-Demo-App.ipa',
];

if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to upload the apps to Sauce Labs');
    process.exit(0);
}

const credentials = Buffer.from(`${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}`).toString('base64');

for (const url of APPS) {
    const fileName = url.split('/').pop();
    const app = await (await fetch(url)).blob();
    const form = new FormData();
    form.append('payload', app, fileName);

    const response = await fetch(STORAGE_URL, {
        method: 'POST',
        headers: {Authorization: `Basic ${credentials}`},
        body: form,
    });
    if (!response.ok) {
        throw new Error(`Uploading ${fileName} failed: ${response.status} ${await response.text()}`);
    }
    console.log(`Uploaded ${fileName}`);
}
