using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class FramesTest : PageTest
    {
        [TestMethod]
        public async Task NestedFrames()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/nested_frames");

            IFrameLocator middleFrame = Page.FrameLocator("frame[name=\"frame-top\"]")
                .FrameLocator("frame[name=\"frame-middle\"]");

            await Expect(middleFrame.Locator("#content")).ToHaveTextAsync("MIDDLE");
        }

        [TestMethod]
        public async Task IFrame()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/tinymce");

            ILocator editor = Page.FrameLocator("#mce_0_ifr").Locator("#tinymce");
            await editor.FillAsync("Hello World!");

            await Expect(editor).ToHaveTextAsync("Hello World!");
            await Expect(Page.Locator("h3")).ToHaveTextAsync("An iFrame containing the TinyMCE WYSIWYG Editor");
        }
    }
}
