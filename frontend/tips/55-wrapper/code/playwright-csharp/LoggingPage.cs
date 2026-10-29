using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Playwright;

namespace PlaywrightTests
{
    // Wraps a page, so that visiting a URL and clicking log what they do
    public class LoggingPage
    {
        private readonly IPage _page;

        // The messages logged during the test, so the test can check them
        public List<string> Messages { get; } = new List<string>();

        public LoggingPage(IPage page)
        {
            _page = page;
        }

        private void Log(string message)
        {
            Console.WriteLine(message);
            Messages.Add(message);
        }

        public async Task GotoAsync(string url)
        {
            await _page.GotoAsync(url);
            Log($"Navigated to {url}");
        }

        public async Task ClickAsync(string selector)
        {
            ILocator element = _page.Locator(selector);
            Log($"Clicking on {await element.TextContentAsync()}");
            string preClickUrl = _page.Url;
            await element.ClickAsync();
            await _page.WaitForLoadStateAsync();
            if (_page.Url != preClickUrl)
            {
                Log($"URL changed to {_page.Url}");
            }
        }
    }
}
