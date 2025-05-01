const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permission.controller');

// Get all permissions
router.get('/', permissionController.getAllPermissions);

// Get permission by ID
router.get('/:id', permissionController.getPermissionById);

// Create new permission
router.post('/', permissionController.createPermission);

// Update permission
router.put('/:id', permissionController.updatePermission);

// Delete permission
router.delete('/:id', permissionController.deletePermission);

module.exports = router; 