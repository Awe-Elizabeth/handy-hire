const express = require('express')
const { createSchedule, getSchedules, userSchedule } = require('../controllers/schedule.controller')
const router = express.Router()

router.post('/create', createSchedule);
router.get('/', getSchedules);
router.get('/:id', userSchedule);


module.exports = router