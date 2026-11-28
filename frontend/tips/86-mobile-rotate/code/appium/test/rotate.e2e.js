import {$$, driver, expect} from '@wdio/globals';

describe('Rotate', () => {
    it('shows the catalog in landscape', async () => {
        const product = $$('~ProductItem')[0];
        await product.waitForDisplayed();
        expect(await driver.getOrientation()).toBe('PORTRAIT');

        await driver.setOrientation('LANDSCAPE');
        expect(await driver.getOrientation()).toBe('LANDSCAPE');
        await expect(product).toBeDisplayed();

        await driver.setOrientation('PORTRAIT');
        expect(await driver.getOrientation()).toBe('PORTRAIT');
    });
});
