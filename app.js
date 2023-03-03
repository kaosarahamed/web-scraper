const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Routes/scrapperRoute");
require("./Config/batabaseConnection");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/webscraper", router);

// Home Route
app.get("/", (req, res) => {
  res.send("home route");
});

// Error Route
app.use((req, res, next) => {
  res.send("<h2>Route Not Found</h2>");
});

// Error Server
app.use((req, res, next, err) => {
  if (err) {
    return err;
  } else {
    res.send("<h2>Your Server Error</h2>");
  }
});

module.exports = app;
