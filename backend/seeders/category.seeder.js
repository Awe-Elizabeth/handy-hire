
  const {Category} = require('../models');

  const seed = async() => {
    const categoryList = await Category.findAll();

    if (categoryList.length < 1){

      try {
        await Category.bulkCreate([
          {
            name: 'Construction',
            description: 'Construction Category'
          },
          {
            name: 'Manufacturing',
            description: 'Hospitality Category'
          },
          {
            name: 'Food Services and Hospitality',
            description:'Food and services category'
          },
          {
            name: 'Janitoral and Cleaning Services',
            description: 'Janitorial and cleaning category'
          },
          {
            name: 'Baking',
            description: 'Baking Category'
          },
          {
            name: 'Painting',
            description: 'Painting Category'
          }
        ]);

        console.log('categories inserted successfully');
      } catch (error) {
        console.log(error);
      }
    } 
  }

  module.exports = seed;