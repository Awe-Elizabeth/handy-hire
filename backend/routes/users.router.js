const express = require('express');
const { getUsers, updateUserInfo, getUsersbylocation } = require('../controllers/users.contoller');
const protect = require('../middlewares/protect');
const router = express.Router()

router.get('/', getUsers);
router.post('/getusersbylocation', getUsersbylocation);
router.post('/updateuser', protect, updateUserInfo);



module.exports = router