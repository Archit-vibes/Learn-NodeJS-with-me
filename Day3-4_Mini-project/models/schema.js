const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    } ,

    shortURL: {
        type: String,
        required: true
    },

    visit_count: {
        type: Number,
        default: 0
    }
})

const urlModel = mongoose.model("url" , urlSchema);

module.exports = urlModel;