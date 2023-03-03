const scrapperScema = require("../Models/scrapperModel");
const getScrapeerContent = require("../Puppeteer/webScraper");

const getScrapperInfo = async (req, res) => {
  try {
    const scraperData = await scrapperScema.find();
    res.status(200).json(scraperData);
  } catch (error) {
    res.status(500).json({ message: "get request faild, try again" });
  }
};

const postScrapperUrl = async (req, res) => {
  const { url } = req.body;
  const scraperData = await getScrapeerContent(url);
  const newScraper = new scrapperScema({
    scraperData: scraperData,
  });

  try {
    const existScraper = await scrapperScema.findOne({
      scraperData: scraperData,
    });
    if (existScraper) {
      return res.status(400).json({ message: "scraperData is already exist" });
    }
    await newScraper.save();
    res.status(200).json({ message: "Scraper Post Request Sucessfull" });
  } catch (error) {
    res.status(500).json({ message: "Scraper Post Request Faild" });
  }
};

module.exports = { getScrapperInfo, postScrapperUrl };
