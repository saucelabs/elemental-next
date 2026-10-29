using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class UploadTest : PageTest
    {
        [TestMethod]
        public async Task UploadFile()
        {
            string filename = "some-file.txt";
            string filePath = Path.Combine(AppContext.BaseDirectory, filename);

            await Page.GotoAsync("https://the-internet.herokuapp.com/upload");
            await Page.Locator("#file-upload").SetInputFilesAsync(filePath);
            await Page.Locator("#file-submit").ClickAsync();

            await Expect(Page.Locator("#uploaded-files")).ToHaveTextAsync(filename);
        }
    }
}
