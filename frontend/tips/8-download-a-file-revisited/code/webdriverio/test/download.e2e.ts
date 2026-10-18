import {browser, $$} from '@wdio/globals';
import assert from 'assert';

describe('Download a File Revisited', () => {
    it('file can be downloaded', async () => {
        await browser.url('https://the-internet.herokuapp.com/download');
        const link = await $$('.example a')[0].getProperty('href') as string;

        const response = await fetch(link, {method: 'HEAD'});
        const contentDisposition = response.headers.get('content-disposition');
        const contentLength = Number(response.headers.get('content-length'));

        assert(contentDisposition!.startsWith('attachment'));
        assert(contentLength > 0);
    });
});
