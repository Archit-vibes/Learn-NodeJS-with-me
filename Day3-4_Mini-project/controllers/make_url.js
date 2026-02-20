const express = require('express');
const nanoid = require('nanoid');
const URLmodel = require('../models/schema');

async function makeUrl(req , res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ error: "URL is required" });
    }

    const url = body.url;

    const SHORT_URL = nanoid.nanoid(8);

    await URLmodel.create({
        url: url,
        shortURL: SHORT_URL
    })

    res.status(200).json({ "msg" : "Short URL created successfully", shorturl: SHORT_URL });
}


module.exports = { makeUrl };