const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensor.controller');

// Get all sensors
router.get('/', sensorController.getAllSensors);

// Get sensor by ID
router.get('/:id', sensorController.getSensorById);

// Create new sensor
router.post('/', sensorController.createSensor);

// Update sensor
router.put('/:id', sensorController.updateSensor);

// Update sensor status
router.patch('/:id/status', sensorController.updateSensorStatus);

// Delete sensor
router.delete('/:id', sensorController.deleteSensor);

module.exports = router; 