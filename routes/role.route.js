const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role.controller');

// Get all roles
router.get('/', roleController.getAllRoles);

// Get role by ID
router.get('/:id', roleController.getRoleById);

// Create new role
router.post('/', roleController.createRole);

// Update role
router.put('/:id', roleController.updateRole);

// Delete role
router.delete('/:id', roleController.deleteRole);

// Add permission to role
router.post('/:roleId/permissions/:permissionId', roleController.addPermissionToRole);

// Remove permission from role
router.delete('/:roleId/permissions/:permissionId', roleController.removePermissionFromRole);

module.exports = router; 