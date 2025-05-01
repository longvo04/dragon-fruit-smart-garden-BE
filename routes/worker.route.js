const express = require('express');
const router = express.Router();
const workerController = require('../controllers/worker.controller');

// Get all workers
router.get('/', workerController.getAllWorkers);

// Get worker by ID
router.get('/:id', workerController.getWorkerById);

// Create new worker
router.post('/', workerController.createWorker);

// Update worker
router.put('/:id', workerController.updateWorker);

// Delete worker
router.delete('/:id', workerController.deleteWorker);

module.exports = router; 