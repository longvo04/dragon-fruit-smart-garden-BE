const mongoose = require('mongoose');
const SensorSchema = new mongoose.Schema({
    sensorType: String,
    location: String,
    status: String
});
module.exports = mongoose.model('Sensor', SensorSchema);
