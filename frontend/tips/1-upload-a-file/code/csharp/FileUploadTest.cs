using System;
using System.IO;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class FileUploadTest
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
        public void UploadFileFromDisk()
        {
            string File = "SomeFile.txt";
            _driver.Url = "https://the-internet.herokuapp.com/upload";
            string baseDirectory = AppContext.BaseDirectory;
            string relativePath = "../../../SomeFile.txt";
            string uploadFile = Path.GetFullPath(Path.Combine(baseDirectory, relativePath));
            _driver.FindElement(By.Id("file-upload")).SendKeys(uploadFile);
            _driver.FindElement(By.Id("file-submit")).Click();
            IWebElement fileName = _driver.FindElement(By.Id("uploaded-files"));
            Assert.AreEqual(File, fileName.Text);
        }
    }
}
