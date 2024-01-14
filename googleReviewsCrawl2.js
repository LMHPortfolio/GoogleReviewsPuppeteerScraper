const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const propURLs2 = require("./propURLList2");

//Scrape round 2 to prevent timeout error:

try {
  async function start() {
    for (let i = 0; i < propURLs2.length; i++) {
      const url2 = propURLs2[i].url;

      const browser2 = await puppeteer.launch({ headless: "false" });
      const page2 = await browser2.newPage();
      await page2.goto(`${url2}`, { timeout: 0 });
      await page2.waitForNavigation({ waitUntil: "networkidle2" });

      //Update with new elements for the property google reviews
      const score2 = await page2.evaluate(() => {
        return Array.from(
          document.querySelectorAll(
            //"div.fYOrjf.kp-hc > div:nth-child(2) > div > div > span.Aq14fc"
            "div.F7nice > span:nth-child(1) > span:nth-child(1)"
          )
        ).map((x) => x.textContent);
      });

      //Update with new elements for the property google reviews
      const totalCount2 = await page2.evaluate(() => {
        return Array.from(
          document.querySelectorAll(
            //"div.fYOrjf.kp-hc > div:nth-child(2) > div > div > span.hqzQac > span > a > span"
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
      await browser2.close();
    }
  }

  console.log("scrap initiated");

  start();
} catch {
  throw new Error("scrape initiation failed");
}
