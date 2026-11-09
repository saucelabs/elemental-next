using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class PrintToPdfTest : PageTest
    {
        [TestMethod]
        public async Task PrintThePageToPdf()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/tables");

            string path = Path.Combine(Directory.CreateTempSubdirectory().FullName, "tables.pdf");
            byte[] pdf = await Page.PdfAsync(new PagePdfOptions { Path = path, Landscape = true });

            // Every PDF file starts with %PDF-
            CollectionAssert.AreEqual(Encoding.ASCII.GetBytes("%PDF-"), pdf.Take(5).ToArray());
            Console.WriteLine($"Saved {path}");
        }
    }
}
