const express = require('express');
const phoneController = require('../controllers/phone.controllers');
const joi = require('../utils/joi');
const router = express.Router();

router.post('/signup',joi.otpGenerate,phoneController.signup);

router.get('/login',joi.otpVerify,phoneController.login);

module.exports = router;
