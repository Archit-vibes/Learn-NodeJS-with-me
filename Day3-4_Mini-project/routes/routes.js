const express = require('express');
const router = express.Router();
const { makeUrl } = require('../controllers/make_url');
const { fetchURL } = require('../controllers/fetch_url');

router.post('/make_url', makeUrl);

router.get('/:shorturl', fetchURL);

module.exports = router;