import {expect, test} from '@mobilewright/test';

test('draws a line', async ({screen, platform}) => {
    await expect(screen.getByText(/Sauce Labs Backpack/).first()).toBeVisible();
    if (platform === 'android') {
        await screen.getByLabel('View menu').tap();
        await screen.getByText('Drawing').tap();
    } else {
        await screen.getByTestId('More-tab-item').tap();
        await screen.getByTestId('Drawing-menu-item').tap();
    }
    const pad = screen.getByLabel(platform === 'android' ? 'Pad to draw on' : 'DrawingBackground Icons');

    const before = await pad.screenshot();
    await pad.swipe({direction: 'right', duration: 1000});
    const after = await pad.screenshot();
    expect(after.equals(before)).toBe(false);
});
