const Weather = require('../models/weather.models');
const mongoose = require('mongoose');

// Get all weather records
module.exports.getAllWeather = async (req, res) => {
    try {
        // Add query parameters for date filtering
        const query = {};

        if (req.query.startDate) {
            query.date = { ...query.date, $gte: new Date(req.query.startDate) };
        }

        if (req.query.endDate) {
            query.date = { ...query.date, $lte: new Date(req.query.endDate) };
        }

        const weather = await Weather.find(query).sort({ date: -1 });
        res.status(200).json({
            status: 200,
            data: weather
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting weather data',
            error: error.message
        });
    }
};

// Get weather by ID
module.exports.getWeatherById = async (req, res) => {
    try {
        const weather = await Weather.findById(req.params.id);
        if (!weather) {
            return res.status(404).json({
                status: 404,
                message: 'Weather record not found'
            });
        }
        res.status(200).json({
            status: 200,
            data: weather
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting weather record',
            error: error.message
        });
    }
};

// Create new weather record
module.exports.createWeather = async (req, res) => {
    try {
        // Set current date if not provided
        if (!req.body.date) {
            req.body.date = new Date();
        }

        const newWeather = new Weather(req.body);
        await newWeather.save();
        res.status(201).json({
            status: 201,
            message: 'Weather record created successfully',
            data: newWeather
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error creating weather record',
            error: error.message
        });
    }
};

// Update weather record
module.exports.updateWeather = async (req, res) => {
    try {
        const weather = await Weather.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!weather) {
            return res.status(404).json({
                status: 404,
                message: 'Weather record not found'
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Weather record updated successfully',
            data: weather
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error updating weather record',
            error: error.message
        });
    }
};

// Delete weather record
module.exports.deleteWeather = async (req, res) => {
    try {
        const weather = await Weather.findByIdAndDelete(req.params.id);
        if (!weather) {
            return res.status(404).json({
                status: 404,
                message: 'Weather record not found'
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Weather record deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error deleting weather record',
            error: error.message
        });
    }
};

// Get latest weather record
module.exports.getLatestWeather = async (req, res) => {
    try {
        const latestWeather = await Weather.findOne().sort({ date: -1 });

        if (!latestWeather) {
            return res.status(404).json({
                status: 404,
                message: 'No weather records found'
            });
        }

        res.status(200).json({
            status: 200,
            data: latestWeather
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting latest weather record',
            error: error.message
        });
    }
}; 