const mongoose = require("mongoose");

const scrapperScema = mongoose.Schema(
  {
    scraperData: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("scrapperScema", scrapperScema);
