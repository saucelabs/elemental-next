import {expect, test} from '@mobilewright/test';

test('adds the backpack to the cart and removes it', async ({screen, platform}) => {
    const find = (id: string) => platform === 'android' ? screen.getByLabel(id) : screen.getByTestId(id);
    const ids = platform === 'android'
        ? {
            product: 'Product Image',
            addToCart: 'Tap to add product to cart',
            cart: 'View cart',
            checkout: 'Confirms products for checkout',
            remove: 'Removes product from cart',
        }
        : {
            product: 'ProductItem',
            addToCart: 'AddToCart',
            cart: 'Cart-tab-item',
            checkout: 'ProceedToCheckout',
            remove: 'Remove Item',
        };

    await find(ids.product).first().tap();
    await find(ids.addToCart).tap();
    await find(ids.cart).tap();

    await expect(find(ids.checkout)).toBeVisible();
    await find(ids.remove).tap();
    await expect(find(ids.checkout)).toBeHidden();
});
