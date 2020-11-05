const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
id: Number,
name: String,
url: String

});
const Tests = mongoose.model('Tests',productSchema);
module.exports = Tests;