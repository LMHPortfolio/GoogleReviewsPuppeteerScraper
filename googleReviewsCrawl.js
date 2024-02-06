const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const propURLs = require("./URL_LISTS/propURLList");

//Scrape part 1:

try {
  async function start() {
    for (let i = 0; i < propURLs.length; i++) {
      const url = propURLs[i].url;

      const browser = await puppeteer.launch({ headless: "false" });
      const page = await browser.newPage();
      await page.goto(`${url}`, { timeout: 0 });
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
          document.querySelectorAll(
            "div.F7nice > span:nth-child(2) > span > span"
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

      if (propURLs.length - 1 > i) {
        console.log("---running---");
      } else {
        console.log("complete. run part 2 after 30secs");
      }

      await browser.close();
    }
  }

  console.log("scrape initiated");

  start();
} catch {
  throw new Error("scrape initiation failed");
}
