const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/url_shortener')
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.log('DB connection error: ', err))

app = express();

app.use(express.json());

const urlRoutes = require('./routes/routes');

app.use('/' , urlRoutes);

app.listen(8000 , () => {
    console.log("Server is running on port 8000");
})