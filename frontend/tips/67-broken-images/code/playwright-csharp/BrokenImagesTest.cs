using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class BrokenImagesTest : PageTest
    {
        [TestInitialize]
        public async Task VisitBrokenImagesPage()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/broken_images");
        }

        [TestMethod]
        public async Task FindWithHttpRequest()
        {
            string[] sources = await Page.Locator("img")
                .EvaluateAllAsync<string[]>("images => images.map(image => image.src)");
            List<string> brokenImages = new List<string>();
            foreach (string source in sources)
            {
                IAPIResponse response = await Page.APIRequest.GetAsync(source);
                if (response.Status != 200)
                {
                    brokenImages.Add(source);
                }
            }
            Console.WriteLine(string.Join(", ", brokenImages));
            List<string> fileNames = brokenImages.Select(source => source.Split('/').Last()).ToList();
            CollectionAssert.AreEqual(new[] { "asdf.jpg", "hjkl.jpg" }, fileNames);
        }

        [TestMethod]
        public async Task FindWithJavaScript()
        {
            string[] sources = await Page.Locator("img").EvaluateAllAsync<string[]>(@"images => images
                .filter(image => !(image.complete && image.naturalWidth > 0))
                .map(image => image.getAttribute('src'))");
            Console.WriteLine(string.Join(", ", sources));
            CollectionAssert.AreEqual(new[] { "asdf.jpg", "hjkl.jpg" }, sources);
        }
    }
}
