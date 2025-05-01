const Permission = require('../models/permission.model');
const mongoose = require('mongoose');

// Get all permissions
module.exports.getAllPermissions = async (req, res) => {
    try {
        const permissions = await Permission.find();
        res.status(200).json({
            status: 200,
            data: permissions
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting permissions',
            error: error.message
        });
    }
};

// Get permission by ID
module.exports.getPermissionById = async (req, res) => {
    try {
        const permission = await Permission.findById(req.params.id);
        if (!permission) {
            return res.status(404).json({
                status: 404,
                message: 'Permission not found'
            });
        }
        res.status(200).json({
            status: 200,
            data: permission
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting permission',
            error: error.message
        });
    }
};

// Create new permission
module.exports.createPermission = async (req, res) => {
    try {
        const newPermission = new Permission(req.body);
        await newPermission.save();
        res.status(201).json({
            status: 201,
            message: 'Permission created successfully',
            data: newPermission
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error creating permission',
            error: error.message
        });
    }
};

// Update permission
module.exports.updatePermission = async (req, res) => {
    try {
        const permission = await Permission.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!permission) {
            return res.status(404).json({
                status: 404,
                message: 'Permission not found'
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Permission updated successfully',
            data: permission
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error updating permission',
            error: error.message
        });
    }
};

// Delete permission
module.exports.deletePermission = async (req, res) => {
    try {
        const permission = await Permission.findByIdAndDelete(req.params.id);
        if (!permission) {
            return res.status(404).json({
                status: 404,
                message: 'Permission not found'
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Permission deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error deleting permission',
            error: error.message
        });
    }
}; 