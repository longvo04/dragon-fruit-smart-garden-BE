const Sensor = require('../models/sensor.models');
const mongoose = require('mongoose');

// Get all sensors
module.exports.getAllSensors = async (req, res) => {
    try {
        // Add query parameters for filtering
        const query = {};

        if (req.query.sensorType) {
            query.sensorType = req.query.sensorType;
        }

        if (req.query.status) {
            query.status = req.query.status;
        }

        if (req.query.location) {
            query.location = req.query.location;
        }

        const sensors = await Sensor.find(query);
        res.status(200).json({
            status: 200,
            data: sensors
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting sensors',
            error: error.message
        });
    }
};

// Get sensor by ID
module.exports.getSensorById = async (req, res) => {
    try {
        const sensor = await Sensor.findById(req.params.id);
        if (!sensor) {
            return res.status(404).json({
                status: 404,
                message: 'Sensor not found'
            });
        }
        res.status(200).json({
            status: 200,
            data: sensor
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting sensor',
            error: error.message
        });
    }
};

// Create new sensor
module.exports.createSensor = async (req, res) => {
    try {
        const newSensor = new Sensor(req.body);
        await newSensor.save();
        res.status(201).json({
            status: 201,
            message: 'Sensor created successfully',
            data: newSensor
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error creating sensor',
            error: error.message
        });
    }
};

// Update sensor
module.exports.updateSensor = async (req, res) => {
    try {
        const sensor = await Sensor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!sensor) {
            return res.status(404).json({
                status: 404,
                message: 'Sensor not found'
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Sensor updated successfully',
            data: sensor
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error updating sensor',
            error: error.message
        });
    }
};

// Delete sensor
module.exports.deleteSensor = async (req, res) => {
    try {
        const sensor = await Sensor.findByIdAndDelete(req.params.id);
        if (!sensor) {
            return res.status(404).json({
                status: 404,
                message: 'Sensor not found'
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Sensor deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error deleting sensor',
            error: error.message
        });
    }
};

// Update sensor status
module.exports.updateSensorStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({
                status: 400,
                message: 'Status is required'
            });
        }

        const sensor = await Sensor.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!sensor) {
            return res.status(404).json({
                status: 404,
                message: 'Sensor not found'
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Sensor status updated successfully',
            data: sensor
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error updating sensor status',
            error: error.message
        });
    }
}; 