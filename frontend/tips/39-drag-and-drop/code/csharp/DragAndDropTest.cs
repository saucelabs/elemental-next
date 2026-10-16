using System.IO;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class DragAndDropTest
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
        public void DragAndDrop()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/drag_and_drop");
            var dndJavascript = File.ReadAllText("dnd.js");
            ((IJavaScriptExecutor)_driver).ExecuteScript(
                dndJavascript + "$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});");
            Assert.AreEqual("B", _driver.FindElement(By.Id("column-a")).Text);
            Assert.AreEqual("A", _driver.FindElement(By.Id("column-b")).Text);
        }
    }
}
