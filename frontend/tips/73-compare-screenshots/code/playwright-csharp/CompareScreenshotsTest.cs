using System.Threading.Tasks;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SkiaSharp;

namespace PlaywrightTests
{
    [TestClass]
    public class CompareScreenshotsTest : PageTest
    {
        const string Url = "https://the-internet.herokuapp.com/visual_diff";

        async Task<SKBitmap> CardScreenshot(string url)
        {
            await Page.GotoAsync(url);
            byte[] png = await Page.Locator("#card").ScreenshotAsync();
            return SKBitmap.Decode(png);
        }

        static int DifferentPixels(SKBitmap image, SKBitmap other)
        {
            // Images of different sizes differ everywhere
            if (image.Width != other.Width || image.Height != other.Height)
            {
                return image.Width * image.Height;
            }
            int different = 0;
            for (int x = 0; x < image.Width; x++)
            {
                for (int y = 0; y < image.Height; y++)
                {
                    if (image.GetPixel(x, y) != other.GetPixel(x, y))
                    {
                        different++;
                    }
                }
            }
            return different;
        }

        [TestMethod]
        public async Task TheSameCardHasNoDifferences()
        {
            SKBitmap baseline = await CardScreenshot(Url);

            Assert.AreEqual(0, DifferentPixels(baseline, await CardScreenshot(Url)));
        }

        [TestMethod]
        public async Task AMovedButtonIsNoticed()
        {
            SKBitmap baseline = await CardScreenshot(Url);

            Assert.IsTrue(DifferentPixels(baseline, await CardScreenshot($"{Url}?shift=10")) > 0);
        }
    }
}
