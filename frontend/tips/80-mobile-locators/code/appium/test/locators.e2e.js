import {$, $$, driver, expect} from '@wdio/globals';

describe('Locators', () => {
    it('adds the backpack to the cart', async () => {
        const ids = driver.isAndroid
            ? {
                product: 'Product Image',
                addToCart: 'Tap to add product to cart',
                cart: 'View cart',
                checkout: 'Confirms products for checkout',
            }
            : {
                product: 'ProductItem',
                addToCart: 'AddToCart',
                cart: 'Cart-tab-item',
                checkout: 'ProceedToCheckout',
            };

        const product = $$(`~${ids.product}`)[0];
        await product.waitForDisplayed();
        await product.click();
        await $(`~${ids.addToCart}`).click();
        await $(`~${ids.cart}`).click();
        await expect($(`~${ids.checkout}`)).toBeDisplayed();
    });
});
