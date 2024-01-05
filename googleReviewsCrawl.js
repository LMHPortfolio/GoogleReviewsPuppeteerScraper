const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const propURLs = require("propURLList");

try {
  async function start() {
    for (let i = 0; i < propURLs.length; i++) {
      const url = propURLs[i].url;

      const browser = await puppeteer.launch({ headless: "new" });
      const page = await browser.newPage();
      await page.goto(`${url}`);
      await page.waitForNavigation({ waitUntil: "networkidle2" });

      //Update with new elements for the property google reviews
      const score = await page.evaluate(() => {
        return Array.from(
          document.querySelectorAll(
            "div.fYOrjf.kp-hc > div:nth-child(2) > div > div > span.Aq14fc"
          )
        ).map((x) => x.textContent);
      });

      //Update with new elements for the property google reviews
      const totalCount = await page.evaluate(() => {
        return Array.from(
          document.querySelectorAll(
            "div.fYOrjf.kp-hc > div:nth-child(2) > div > div > span.hqzQac > span > a > span"
          )
        ).map((x) => x.textContent);
      });

      const propID = propURLs[i].id;
      const storeName = propURLs[i].name;
      const parensRemove = totalCount.map((x) => x.replace(/[{()}]/g, ""));
      const commaRemove = parensRemove.map((x) => x.replace(/,/g, ""));

      const formattedResult =
        `${propID}` +
        `,` +
        `${storeName}` +
        `,` +
        score.concat(commaRemove).join(",");

      const finalResult = await fs.writeFile(
        "GoogleReviewCount.csv",
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
