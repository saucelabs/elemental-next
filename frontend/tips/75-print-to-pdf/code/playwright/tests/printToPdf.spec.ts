import {test, expect} from '@playwright/test';

test('prints the page to PDF', async ({page}, testInfo) => {
    await page.goto('https://the-internet.herokuapp.com/tables');

    // Saves the PDF in the output folder of the test
    const path = testInfo.outputPath('tables.pdf');
    const pdf = await page.pdf({path, landscape: true});

    // Every PDF file starts with %PDF-
    expect(pdf.subarray(0, 5).toString()).toBe('%PDF-');
    console.log(`Saved ${path}`);
});
