import {expect, test} from '@mobilewright/test';

test('shows the backpack in the catalog', async ({screen}) => {
    await expect(screen.getByText(/Sauce Labs Backpack/).first()).toBeVisible();
});
