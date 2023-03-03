const puppereer = require("puppeteer");
const fs = require("fs");

const getScrapeerContent = async (url) => {
  const browser = await puppereer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const scraperData = await page.$$eval(
    ".tutor-course-list .tutor-card",
    (element) =>
      element.map((e) => ({
        image: e.querySelector(".tutor-card-image-top").src,
        title: e.querySelector(".tutor-course-name").innerText,
        meta: e.querySelector(".tutor-meta-value").innerText,
      }))
  );

  return scraperData;

  await browser.close();
};
module.exports = getScrapeerContent;
