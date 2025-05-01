const Role = require('../models/role.model');
const mongoose = require('mongoose');

// Get all roles
module.exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find().populate('permissions');
        res.status(200).json({
            status: 200,
            data: roles
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting roles',
            error: error.message
        });
    }
};

// Get role by ID
module.exports.getRoleById = async (req, res) => {
    try {
        const role = await Role.findById(req.params.id).populate('permissions');
        if (!role) {
            return res.status(404).json({
                status: 404,
                message: 'Role not found'
            });
        }
        res.status(200).json({
            status: 200,
            data: role
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error getting role',
            error: error.message
        });
    }
};

// Create new role
module.exports.createRole = async (req, res) => {
    try {
        const newRole = new Role(req.body);
        await newRole.save();
        res.status(201).json({
            status: 201,
            message: 'Role created successfully',
            data: newRole
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error creating role',
            error: error.message
        });
    }
};

// Update role
module.exports.updateRole = async (req, res) => {
    try {
        const role = await Role.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).populate('permissions');

        if (!role) {
            return res.status(404).json({
                status: 404,
                message: 'Role not found'
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Role updated successfully',
            data: role
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error updating role',
            error: error.message
        });
    }
};

// Delete role
module.exports.deleteRole = async (req, res) => {
    try {
        const role = await Role.findByIdAndDelete(req.params.id);
        if (!role) {
            return res.status(404).json({
                status: 404,
                message: 'Role not found'
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Role deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error deleting role',
            error: error.message
        });
    }
};

// Add permission to role
module.exports.addPermissionToRole = async (req, res) => {
    try {
        const { roleId, permissionId } = req.params;

        const role = await Role.findById(roleId);
        if (!role) {
            return res.status(404).json({
                status: 404,
                message: 'Role not found'
            });
        }

        // Check if permission is already in the role
        if (role.permissions.includes(permissionId)) {
            return res.status(400).json({
                status: 400,
                message: 'Permission already added to this role'
            });
        }

        role.permissions.push(permissionId);
        await role.save();

        res.status(200).json({
            status: 200,
            message: 'Permission added to role successfully',
            data: await Role.findById(roleId).populate('permissions')
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error adding permission to role',
            error: error.message
        });
    }
};

// Remove permission from role
module.exports.removePermissionFromRole = async (req, res) => {
    try {
        const { roleId, permissionId } = req.params;

        const role = await Role.findById(roleId);
        if (!role) {
            return res.status(404).json({
                status: 404,
                message: 'Role not found'
            });
        }

        // Check if permission exists in the role
        if (!role.permissions.includes(permissionId)) {
            return res.status(400).json({
                status: 400,
                message: 'Permission not found in this role'
            });
        }

        role.permissions = role.permissions.filter(
            permId => permId.toString() !== permissionId
        );

        await role.save();

        res.status(200).json({
            status: 200,
            message: 'Permission removed from role successfully',
            data: await Role.findById(roleId).populate('permissions')
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error removing permission from role',
            error: error.message
        });
    }
}; 