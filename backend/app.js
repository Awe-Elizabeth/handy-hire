const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const modelCon = require('./config/modelCon');
const dotenv = require('dotenv');
const db = require('./models');
const seed = require('./seeders/category.seeder');
const nodemailer = require('nodemailer');
dotenv.config()




//load routes
const authRoutes = require('./routes/auth.router');
const userRoutes = require('./routes/users.router');
const portfolioRoutes = require('./routes/portfolio.router');
const categoryRoutes = require('./routes/category.router');




app.use(express.json({limit: '2mb'}))
app.use(express.urlencoded({extended: false, limit: '2mb'}))
app.use(cors())


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/portfolio', portfolioRoutes);
app.use('/api/v1/categories', categoryRoutes);


db.sequelize.sync().then(() => {
  app.listen(6000, () => {
    console.log('server listening on port... 6000')
  })
  seed();
})

