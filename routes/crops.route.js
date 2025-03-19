const express = require('express');
const router = express.Router();

const controller = require('../controllers/crops.controller');

router.get('/', controller.index);
router.get('/:id', controller.GetCropsById);
router.get('/slug/:slug',controller.GetCropsBySlug);
router.patch('/edit/:id', controller.EditCrop)
router.patch('/delete', controller.DeleteCrop);
router.patch('/restore', controller.RestoreCrop);
router.post('/create', controller.CreateCrop);
router.delete('/delete-forever', controller.DeleteForeverCrop);


module.exports = router;