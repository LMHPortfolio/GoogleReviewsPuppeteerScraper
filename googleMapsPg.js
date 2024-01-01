const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const publixURLs = require("./urlList");
const { error } = require("console");

/* const publixURLs = [
  {
    name: "College Park",
    url: "https://www.google.com/maps/place/Publix+Super+Market+at+College+Park/@28.5698186,-81.3887716,20z/data=!4m6!3m5!1s0x88e77a63ecd8832d:0x1101717793a07fcf!8m2!3d28.5700025!4d-81.3883996!16s%2Fg%2F1tcwxk0w?entry=ttu",
  },
  {
    name: "Holliana",
    url: "https://www.google.com/maps/place/Publix+Super+Market+at+Hollieanna+Shopping+Center/@28.5915364,-81.3690568,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77073ebaee6ab:0x8ef5577349329188!8m2!3d28.5915364!4d-81.3664819!16s%2Fg%2F1wtbvq4z?entry=ttu",
  },
];
 */

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
      const formattedResult =
        `${storeName}` + `,` + score.concat(totalCount).join(",");

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
