const express = require('express')
const { register, login, forgotPassword, resetPassword } = require('../controllers/auth.conroller')
const router = express.Router()

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.get('/reset-password/:id/:token', resetPassword);
router.post('/reset-password/:id/:token', resetPassword);


module.exports = router