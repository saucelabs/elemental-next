import {expect, test} from '@mobilewright/test';

test('shows the catalog in landscape', async ({device, screen}) => {
    const product = screen.getByTestId('ProductItem').first();
    await expect(product).toBeVisible();
    expect(await device.getOrientation()).toBe('portrait');

    await device.setOrientation('landscape');
    expect(await device.getOrientation()).toBe('landscape');
    await expect(product).toBeVisible();

    await device.setOrientation('portrait');
    expect(await device.getOrientation()).toBe('portrait');
});
