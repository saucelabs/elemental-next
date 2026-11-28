import {$, driver, expect} from '@wdio/globals';

async function drawLine(pad) {
    const {x, y} = await pad.getLocation();
    const {width, height} = await pad.getSize();
    const middle = Math.round(y + height / 2);
    await driver.action('pointer', {parameters: {pointerType: 'touch'}})
        .move({x: Math.round(x + width / 4), y: middle})
        .down()
        .move({x: Math.round(x + width * 3 / 4), y: middle, duration: 500})
        .up()
        .perform();
}

describe('Gestures', () => {
    it('draws a line', async () => {
        const selectors = driver.isAndroid
            ? {menu: '~View menu', drawing: 'android=new UiSelector().text("Drawing")', pad: '~Pad to draw on'}
            : {menu: '~More-tab-item', drawing: '~Drawing-menu-item', pad: '~DrawingBackground Icons'};

        await $(selectors.menu).click();
        await $(selectors.drawing).click();
        const pad = $(selectors.pad);
        await pad.waitForExist();

        const before = await pad.takeScreenshot();
        await drawLine(pad);
        const after = await pad.takeScreenshot();
        expect(after).not.toEqual(before);
    });
});
