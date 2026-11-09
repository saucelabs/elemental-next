using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using SkiaSharp;

namespace csharp
{
    [TestClass]
    public class CompareScreenshotsTest
    {
        const string Url = "https://the-internet.herokuapp.com/visual_diff";
        IWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        SKBitmap CardScreenshot(string url)
        {
            _driver.Navigate().GoToUrl(url);
            Screenshot screenshot = ((ITakesScreenshot)_driver.FindElement(By.Id("card"))).GetScreenshot();
            return SKBitmap.Decode(screenshot.AsByteArray);
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
        public void TheSameCardHasNoDifferences()
        {
            SKBitmap baseline = CardScreenshot(Url);

            Assert.AreEqual(0, DifferentPixels(baseline, CardScreenshot(Url)));
        }

        [TestMethod]
        public void AMovedButtonIsNoticed()
        {
            SKBitmap baseline = CardScreenshot(Url);

            Assert.IsTrue(DifferentPixels(baseline, CardScreenshot($"{Url}?shift=10")) > 0);
        }
    }
}
