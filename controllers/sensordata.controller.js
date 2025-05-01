const SensorData = require('../models/sensordata.model');
const mongoose = require('mongoose');

// Get all sensor data
module.exports.getAllSensorData = async (req, res) => {
    try {
        // Add query parameters for timestamp filtering
        const query = {};

        if (req.query.startDate) {
            query.timestamp = { ...query.timestamp, $gte: new Date(req.query.startDate) };
        }

        if (req.query.endDate) {
            query.timestamp = { ...query.timestamp, $lte: new Date(req.query.endDate) };
        }

        // Pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 100;
        const skip = (page - 1) * limit;

        const sensorData = await SensorData.find(query)
            .sort({ timestamp: -1 })
            .skip(skip)
            .limit(limit);

        const total = await SensorData.countDocuments(query);

        res.status(200).json({
            status: 200,
            data: sensorData,
            pagination: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting sensor data',
            error: error.message
        });
    }
};

// Get sensor data by ID
module.exports.getSensorDataById = async (req, res) => {
    try {
        const sensorData = await SensorData.findById(req.params.id);
        if (!sensorData) {
            return res.status(404).json({
                status: 404,
                message: 'Sensor data record not found'
            });
        }
        res.status(200).json({
            status: 200,
            data: sensorData
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting sensor data record',
            error: error.message
        });
    }
};

// Create new sensor data record
module.exports.createSensorData = async (req, res) => {
    try {
        // Set current timestamp if not provided
        if (!req.body.timestamp) {
            req.body.timestamp = new Date();
        }

        const newSensorData = new SensorData(req.body);
        await newSensorData.save();
        res.status(201).json({
            status: 201,
            message: 'Sensor data record created successfully',
            data: newSensorData
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error creating sensor data record',
            error: error.message
        });
    }
};

// Update sensor data record
module.exports.updateSensorData = async (req, res) => {
    try {
        const sensorData = await SensorData.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!sensorData) {
            return res.status(404).json({
                status: 404,
                message: 'Sensor data record not found'
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Sensor data record updated successfully',
            data: sensorData
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error updating sensor data record',
            error: error.message
        });
    }
};

// Delete sensor data record
module.exports.deleteSensorData = async (req, res) => {
    try {
        const sensorData = await SensorData.findByIdAndDelete(req.params.id);
        if (!sensorData) {
            return res.status(404).json({
                status: 404,
                message: 'Sensor data record not found'
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Sensor data record deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error deleting sensor data record',
            error: error.message
        });
    }
};

// Get latest sensor data
module.exports.getLatestSensorData = async (req, res) => {
    try {
        const latestSensorData = await SensorData.findOne().sort({ timestamp: -1 });

        if (!latestSensorData) {
            return res.status(404).json({
                status: 404,
                message: 'No sensor data records found'
            });
        }

        res.status(200).json({
            status: 200,
            data: latestSensorData
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting latest sensor data record',
            error: error.message
        });
    }
};

// Get sensor data statistics
module.exports.getSensorDataStats = async (req, res) => {
    try {
        // Query parameters for time range
        const query = {};

        if (req.query.startDate) {
            query.timestamp = { ...query.timestamp, $gte: new Date(req.query.startDate) };
        }

        if (req.query.endDate) {
            query.timestamp = { ...query.timestamp, $lte: new Date(req.query.endDate) };
        }

        const stats = await SensorData.aggregate([
            { $match: query },
            {
                $group: {
                    _id: null,
                    avgTemperature: { $avg: "$temperature" },
                    avgHumidity: { $avg: "$humidity" },
                    avgSoilMoisture: { $avg: "$soilMoisture" },
                    maxTemperature: { $max: "$temperature" },
                    minTemperature: { $min: "$temperature" },
                    maxHumidity: { $max: "$humidity" },
                    minHumidity: { $min: "$humidity" },
                    maxSoilMoisture: { $max: "$soilMoisture" },
                    minSoilMoisture: { $min: "$soilMoisture" },
                    count: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json({
            status: 200,
            data: stats.length > 0 ? stats[0] : {
                avgTemperature: 0,
                avgHumidity: 0,
                avgSoilMoisture: 0,
                maxTemperature: 0,
                minTemperature: 0,
                maxHumidity: 0,
                minHumidity: 0,
                maxSoilMoisture: 0,
                minSoilMoisture: 0,
                count: 0
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting sensor data statistics',
            error: error.message
        });
    }
}; 