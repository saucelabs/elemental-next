using System;
using System.IO;
using System.Linq;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class PrintToPdfTest
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
        public void PrintThePageToPdf()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/tables");

            var options = new PrintOptions { Orientation = PrintOrientation.Landscape };
            PrintDocument pdf = ((ISupportsPrint)_driver).Print(options);
            byte[] bytes = pdf.AsByteArray;

            // Every PDF file starts with %PDF-
            CollectionAssert.AreEqual(Encoding.ASCII.GetBytes("%PDF-"), bytes.Take(5).ToArray());
            string path = Path.Combine(Directory.CreateTempSubdirectory().FullName, "tables.pdf");
            File.WriteAllBytes(path, bytes);
            Console.WriteLine($"Saved {path}");
        }
    }
}
