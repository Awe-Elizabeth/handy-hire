const express = require('express');
const protect = require('../middlewares/protect');
const { getCategories } = require('../controllers/category.controller');
const router = express.Router();

router.get('/', getCategories);


module.exports = router;