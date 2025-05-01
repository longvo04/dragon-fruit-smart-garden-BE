const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weather.controller');

// Get all weather records
router.get('/', weatherController.getAllWeather);

// Get latest weather record
router.get('/latest', weatherController.getLatestWeather);

// Get weather by ID
router.get('/:id', weatherController.getWeatherById);

// Create new weather record
router.post('/', weatherController.createWeather);

// Update weather record
router.put('/:id', weatherController.updateWeather);

// Delete weather record
router.delete('/:id', weatherController.deleteWeather);

module.exports = router; 