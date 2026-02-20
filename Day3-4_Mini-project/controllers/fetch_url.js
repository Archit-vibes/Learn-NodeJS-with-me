const express = require("express");
const URL = require("../models/schema");
const router = express.Router();

async function fetchURL(req, res) {
  const shorturl = req.params.shorturl.trim();
  console.log("Postman requested short URL:", shorturl);

  const urlData = await URL.findOneAndUpdate(
    { shortURL: shorturl },
    { $inc: { visit_count: 1 } }
  );

  if (!urlData) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  const redirectURL = "https://" + urlData.url;

  res.redirect(redirectURL);
}

module.exports = { fetchURL };
