const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const propURLs2 = require("./URL_LISTS/propURLList2");

//Scrape round 2 to prevent timeout error:

try {
  async function start() {
    for (let i = 0; i < propURLs2.length; i++) {
      const url2 = propURLs2[i].url;

      const browser2 = await puppeteer.launch({ headless: "false" });
      const page2 = await browser2.newPage();
      await page2.goto(`${url2}`, { timeout: 0 });
      await page2.waitForNavigation({ waitUntil: "networkidle2" });

      const score2 = await page2.evaluate(() => {
        return Array.from(
          document.querySelectorAll(
            "div.F7nice > span:nth-child(1) > span:nth-child(1)"
          )
        ).map((x) => x.textContent);
      });

      const totalCount2 = await page2.evaluate(() => {
        return Array.from(
          document.querySelectorAll(
            "div.F7nice > span:nth-child(2) > span > span"
          )
        ).map((x) => x.textContent);
      });

      const propID2 = propURLs2[i].id;
      const storeName2 = propURLs2[i].name;
      const parensRemove2 = totalCount2.map((x) => x.replace(/[{()}]/g, ""));
      const commaRemove2 = parensRemove2.map((x) => x.replace(/,/g, ""));

      const formattedResult2 =
        `${propID2}` +
        `,` +
        `${storeName2}` +
        `,` +
        score2.concat(commaRemove2).join(",");

      const finalResult2 = await fs.writeFile(
        "GoogleReviewCount2.csv",
        `${formattedResult2} \n`,
        { flag: "a" }
      );

      if (propURLs2.length - 1 > i) {
        console.log("---running---");
      } else {
        console.log("complete");
      }

      await browser2.close();
    }
  }

  console.log("scrape initiated");

  start();
} catch {
  throw new Error("scrape initiation failed");
}
