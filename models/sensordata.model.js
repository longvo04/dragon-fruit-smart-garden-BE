const mongoose = require('mongoose');
const SensorDataSchema = new mongoose.Schema({
    timestamp: Date,
    temperature: Number,
    humidity: Number,
    soilMoisture: Number
});
module.exports = mongoose.model('SensorData', SensorDataSchema);
