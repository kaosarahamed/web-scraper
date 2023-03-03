const express = require("express");
const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`app is runnig at http://localhost:${PORT}`);
});
