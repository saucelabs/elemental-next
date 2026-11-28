import {expect, test} from '@mobilewright/test';

test('allows the app to use the location', async ({screen, platform}) => {
    await expect(screen.getByText(/Sauce Labs Backpack/).first()).toBeVisible();
    screen.on('dialog', (dialog) => dialog.accept());

    if (platform === 'android') {
        await screen.getByLabel('View menu').tap();
        await screen.getByText('Geo Location').tap();
        await expect(screen.getByLabel('Start observation of user location')).toBeVisible();
    } else {
        await screen.getByTestId('More-tab-item').tap();
        await screen.getByTestId('GeoLocation-menu-item').tap();
        await expect(screen.getByText('Latitude')).toBeVisible();
    }
});
