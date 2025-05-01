const Worker = require('../models/worker.model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Get all workers
module.exports.getAllWorkers = async (req, res) => {
    try {
        const workers = await Worker.find().select('-password');
        res.status(200).json({
            status: 200,
            data: workers
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting workers',
            error: error.message
        });
    }
};

// Get worker by ID
module.exports.getWorkerById = async (req, res) => {
    try {
        const worker = await Worker.findById(req.params.id).select('-password');
        if (!worker) {
            return res.status(404).json({
                status: 404,
                message: 'Worker not found'
            });
        }
        res.status(200).json({
            status: 200,
            data: worker
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting worker',
            error: error.message
        });
    }
};

// Create new worker
module.exports.createWorker = async (req, res) => {
    try {
        // Hash password if provided
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        const newWorker = new Worker(req.body);
        await newWorker.save();

        // Remove password from response
        const response = newWorker.toObject();
        delete response.password;

        res.status(201).json({
            status: 201,
            message: 'Worker created successfully',
            data: response
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error creating worker',
            error: error.message
        });
    }
};

// Update worker
module.exports.updateWorker = async (req, res) => {
    try {
        // Hash password if provided in update
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        const worker = await Worker.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).select('-password');

        if (!worker) {
            return res.status(404).json({
                status: 404,
                message: 'Worker not found'
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Worker updated successfully',
            data: worker
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error updating worker',
            error: error.message
        });
    }
};

// Delete worker
module.exports.deleteWorker = async (req, res) => {
    try {
        const worker = await Worker.findByIdAndDelete(req.params.id);
        if (!worker) {
            return res.status(404).json({
                status: 404,
                message: 'Worker not found'
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Worker deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error deleting worker',
            error: error.message
        });
    }
}; 