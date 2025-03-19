const mongoose = require("mongoose");

const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const CropsSchema = new mongoose.Schema({
    name: String,
    type: String,
    plantingDate: Date,
    harvestDate: Date,
    status: String,
    sensorId: String,
    slug: { 
        type: String, 
        slug: 'name', 
        unique: true 
    },
    deleted: {
        type: Boolean,
        default: false
    }

});
const Crop = mongoose.model('Crop', CropsSchema, 'Crops');
module.exports = Crop;
