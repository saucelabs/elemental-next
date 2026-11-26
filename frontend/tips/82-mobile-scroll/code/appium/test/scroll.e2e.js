import {$, $$, driver, expect} from '@wdio/globals';

async function swipeUp() {
    const {width, height} = await driver.getWindowSize();
    const x = Math.round(width / 2);
    await driver.action('pointer', {parameters: {pointerType: 'touch'}})
        .move({x, y: Math.round(height * 0.7)})
        .down()
        .move({x, y: Math.round(height * 0.3), duration: 500})
        .up()
        .perform();
}

describe('Scroll', () => {
    it('scrolls to the onesie', async () => {
        const product = driver.isAndroid ? '~Product Image' : '~ProductItem';
        const onesie = driver.isAndroid
            ? $('android=new UiSelector().text("Sauce Labs Onesie")')
            : $('-ios predicate string:label == "Sauce Labs Onesie"');

        await $$(product)[0].waitForDisplayed();
        for (let swipes = 0; swipes < 20 && !(await onesie.isDisplayed()); swipes++) {
            await swipeUp();
        }
        await expect(onesie).toBeDisplayed();
    });
});
