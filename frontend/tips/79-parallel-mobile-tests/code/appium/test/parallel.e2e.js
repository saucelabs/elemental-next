import {$, driver, expect} from '@wdio/globals';

describe('Parallel', () => {
    it('shows the backpack in the catalog', async () => {
        const backpack = driver.isAndroid
            ? $('android=new UiSelector().text("Sauce Labs Backpack")')
            : $('-ios predicate string:label == "Sauce Labs Backpack - Black"');
        await expect(backpack).toBeDisplayed();
    });
});
