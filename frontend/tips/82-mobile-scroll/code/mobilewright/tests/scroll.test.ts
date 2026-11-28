import {expect, test} from '@mobilewright/test';

test('scrolls to the onesie', async ({screen}) => {
    await expect(screen.getByText(/Sauce Labs Backpack/).first()).toBeVisible();
    const onesie = screen.getByText('Sauce Labs Onesie');

    for (let swipes = 0; swipes < 20 && !(await onesie.isVisible()); swipes++) {
        await screen.swipe('up', {duration: 1000});
    }
    await expect(onesie).toBeVisible();
});
