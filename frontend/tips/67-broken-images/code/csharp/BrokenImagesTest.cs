using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class BrokenImagesTest
    {
        private const string LoadedScript = "return arguments[0].complete " +
            "&& typeof arguments[0].naturalWidth != \"undefined\" && arguments[0].naturalWidth > 0";

        IWebDriver _driver;
        ReadOnlyCollection<IWebElement> _allImages;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/broken_images");
            _allImages = _driver.FindElements(By.TagName("img"));
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void BrokenImagesWithAnHttpLibrary()
        {
            using var client = new HttpClient();
            var brokenImages = new List<string>();
            foreach (var image in _allImages)
            {
                var source = image.GetDomProperty("src");
                using var response = client.Send(new HttpRequestMessage(HttpMethod.Get, source));
                if ((int)response.StatusCode != 200)
                {
                    brokenImages.Add(source);
                }
            }
            Console.WriteLine(string.Join(", ", brokenImages));
            CollectionAssert.AreEqual(new List<string> { "asdf.jpg", "hjkl.jpg" },
                brokenImages.Select(source => source.Split('/').Last()).ToList());
        }

        [TestMethod]
        public void BrokenImagesWithJavaScript()
        {
            var js = (IJavaScriptExecutor)_driver;
            var sources = _allImages
                .Where(image => !(bool)js.ExecuteScript(LoadedScript, image))
                .Select(image => image.GetDomAttribute("src"))
                .ToList();
            Console.WriteLine(string.Join(", ", sources));
            CollectionAssert.AreEqual(new List<string> { "asdf.jpg", "hjkl.jpg" }, sources);
        }
    }
}
