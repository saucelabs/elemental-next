using System;
using System.Net.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class DownloadRevisitedTest
    {
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

        [TestMethod]
        public void FileCanBeDownloaded()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/download");
            var link = _driver.FindElement(By.CssSelector(".example a")).GetDomProperty("href");

            using var client = new HttpClient();
            using var request = new HttpRequestMessage(HttpMethod.Head, link);
            using var response = client.Send(request);
            var contentDisposition = response.Content.Headers.ContentDisposition?.DispositionType;
            var contentLength = response.Content.Headers.ContentLength ?? 0;

            Assert.AreEqual("attachment", contentDisposition);
            Assert.IsTrue(contentLength > 0);
        }
    }
}
