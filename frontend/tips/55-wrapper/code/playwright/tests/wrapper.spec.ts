import {test, expect} from '@playwright/test';
import {LoggingPage} from '../loggingPage';

test('logs every action', async ({page}) => {
    const loggingPage = new LoggingPage(page);

    await loggingPage.goto('https://the-internet.herokuapp.com');
    await loggingPage.click('text=Checkboxes');

    expect(loggingPage.messages).toEqual([
        'Navigated to https://the-internet.herokuapp.com',
        'Clicking on Checkboxes',
        'URL changed to https://the-internet.herokuapp.com/checkboxes',
    ]);
});
