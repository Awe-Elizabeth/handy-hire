const express = require('express');
const { getUsers, updateUserInfo, getUsersbylocation, getUsersById } = require('../controllers/users.contoller');
const protect = require('../middlewares/protect');
const router = express.Router()

router.get('/', protect, getUsers);
router.get('/:id',protect, getUsersById);
router.post('/getusersbylocation', protect, getUsersbylocation);
router.post('/updateuser', protect, updateUserInfo);



module.exports = router