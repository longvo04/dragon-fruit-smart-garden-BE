const mongoose = require('mongoose');
const WeatherSchema = new mongoose.Schema({
    date: Date,
    temperature: Number,
    humidity: Number,
    rainfall: Number,
    windSpeed: Number
});
module.exports = mongoose.model('Weather', WeatherSchema);
