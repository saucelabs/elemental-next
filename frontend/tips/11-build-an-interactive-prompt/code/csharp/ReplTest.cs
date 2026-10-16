using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class ReplTest
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
        public async Task EvaluatesSeleniumCommands()
        {
            var input = new StringReader(string.Join(Environment.NewLine,
                "Driver.Navigate().GoToUrl(\"https://the-internet.herokuapp.com\");",
                "Driver.Title",
                "Driver.FindElement(By.Id(\"does-not-exist\"))",
                "q"));
            var output = new StringWriter();

            await Repl.Run(_driver, input, output);

            var lines = output.ToString().Split(">> ")
                .Select(line => line.Trim())
                .Where(line => line.Length > 0)
                .ToArray();
            Assert.AreEqual("The Internet", lines[0]);
            Assert.IsTrue(lines[1].StartsWith("NoSuchElementException"), lines[1]);
            Assert.AreEqual("Quitting...", lines[2]);
        }
    }
}
