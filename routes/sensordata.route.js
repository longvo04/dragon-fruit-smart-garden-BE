const express = require('express');
const router = express.Router();
const sensorDataController = require('../controllers/sensordata.controller');

// Get all sensor data
router.get('/', sensorDataController.getAllSensorData);

// Get latest sensor data
router.get('/latest', sensorDataController.getLatestSensorData);

// Get sensor data statistics
router.get('/stats', sensorDataController.getSensorDataStats);

// Get sensor data by ID
router.get('/:id', sensorDataController.getSensorDataById);

// Create new sensor data
router.post('/', sensorDataController.createSensorData);

// Update sensor data
router.put('/:id', sensorDataController.updateSensorData);

// Delete sensor data
router.delete('/:id', sensorDataController.deleteSensorData);

module.exports = router; 