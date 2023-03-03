const express = require("express");
const app = express();
const router = express.Router();
const {
  getScrapperInfo,
  postScrapperUrl,
} = require("../Controller/scrapperController");

router.get("/", getScrapperInfo);
router.post("/", postScrapperUrl);

module.exports = router;
