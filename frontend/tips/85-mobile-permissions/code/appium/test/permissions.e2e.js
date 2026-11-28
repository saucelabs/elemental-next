import {$, driver, expect} from '@wdio/globals';

describe('Permissions', () => {
    it('allows the app to use the location', async () => {
        const selectors = driver.isAndroid
            ? {
                menu: '~View menu',
                geoLocation: 'android=new UiSelector().text("Geo Location")',
                allow: 'id=com.android.permissioncontroller:id/permission_allow_foreground_only_button',
                screen: '~Start observation of user location',
            }
            : {
                menu: '~More-tab-item',
                geoLocation: '~GeoLocation-menu-item',
                allow: '~Allow While Using App',
                screen: '~Latitude',
            };

        await $(selectors.menu).click();
        await $(selectors.geoLocation).click();
        const allow = $(selectors.allow);
        if (await allow.waitForDisplayed({timeout: 10000}).catch(() => false)) {
            await allow.click();
        }
        await expect($(selectors.screen)).toBeDisplayed();
    });
});
