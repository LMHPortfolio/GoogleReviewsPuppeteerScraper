const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const publixURLs = require("./urlList");

try {
  async function start() {
    for (let i = 0; i < publixURLs.length; i++) {
      const url = publixURLs[i].url;

      const browser = await puppeteer.launch({ headless: "new" });
      const page = await browser.newPage();
      await page.goto(`${url}`);
      await page.waitForNavigation({ waitUntil: "networkidle2" });

      const score = await page.evaluate(() => {
        return Array.from(
          document.querySelectorAll(
            "div.F7nice > span:nth-child(1) > span:nth-child(1)"
          )
        ).map((x) => x.textContent);
      });

      const totalCount = await page.evaluate(() => {
        return Array.from(
          document.querySelectorAll("div.F7nice > span:nth-child(2)")
        ).map((x) => x.textContent);
      });

      const storeName = publixURLs[i].name;
      const parensRemove = totalCount.map((x) => x.replace(/[{()}]/g, ""));
      const commaRemove = parensRemove.map((x) => x.replace(/,/g, ""));

      const formattedResult =
        `${storeName}` + `,` + score.concat(commaRemove).join(",");

      const finalResult = await fs.writeFile(
        "PublixScore.csv",
        `${formattedResult} \n`,
        { flag: "a" }
      );
      await browser.close();
    }
  }

  console.log("scrap succeeded");

  start();
} catch {
  throw new Error("scrape failed");
}
