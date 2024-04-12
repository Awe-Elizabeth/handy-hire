const {Category} = require('../models');

exports.getCategories = async(req, res) => {
    try {
        const categories = await Category.findAll();

        res.status(200).json({
            success: true,
            data: categories
        })
    } catch (error) {
        res.status(200).json({
            success: true,
            message: "Error fetching categories",
            data: error
        })
    }
}