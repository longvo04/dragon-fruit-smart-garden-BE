const express = require('express');
const router = express.Router();

const controller = require('../controllers/password.controller');

router.post('/forgot', controller.Forgot);
router.post('/otp', controller.Otp);
router.post('/reset', controller.ResetPassword)

module.exports = router;