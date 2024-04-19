const express = require('express');
const protect = require('../middlewares/protect');
const { getPortfolios, createPortfolio, getPortfoliosById, getPortfoliosByCategoryId } = require('../controllers/portfolio.controller');
const router = express.Router();

router.get('/', protect, getPortfolios);
router.get('/:id', protect, getPortfoliosById);
router.get('/getbycategory/:id', protect, getPortfoliosByCategoryId);
router.post('/', protect, createPortfolio);

module.exports = router;