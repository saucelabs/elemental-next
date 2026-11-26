import {$, $$, driver} from '@wdio/globals';

describe('Waits', () => {
    it('adds the backpack to the cart and removes it', async () => {
        const ids = driver.isAndroid
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

        const product = $$(`~${ids.product}`)[0];
        await product.waitForDisplayed();
        await product.click();

        await $(`~${ids.addToCart}`).waitForEnabled();
        await $(`~${ids.addToCart}`).click();
        await $(`~${ids.cart}`).click();

        await $(`~${ids.checkout}`).waitForDisplayed();
        await $$(`~${ids.remove}`)[0].click();
        await $(`~${ids.checkout}`).waitForDisplayed({reverse: true});
    });
});
