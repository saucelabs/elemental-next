using System;
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
        public void Example1()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/nested_frames");
            _driver.SwitchTo().Frame(_driver.FindElement(By.Name("frame-top")));
            _driver.SwitchTo().Frame(_driver.FindElement(By.Name("frame-middle")));
            Assert.AreEqual("MIDDLE", _driver.FindElement(By.Id("content")).Text);
        }

        [TestMethod]
        public void Example2()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/tinymce");
            _driver.SwitchTo().Frame(_driver.FindElement(By.Id("mce_0_ifr")));
            IWebElement Editor = _driver.FindElement(By.Id("tinymce"));
            string StartText = Editor.Text;
            Editor.Clear();
            Editor.SendKeys("Hello World!");
            string EndText = Editor.Text;
            Assert.AreNotEqual(EndText, StartText);

            _driver.SwitchTo().DefaultContent();
            string HeaderText = _driver.FindElement(By.CssSelector("h3")).Text;
            Assert.AreEqual("An iFrame containing the TinyMCE WYSIWYG Editor", HeaderText);
        }
    }
}
