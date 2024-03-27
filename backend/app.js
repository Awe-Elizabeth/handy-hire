const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const modelCon = require('./config/modelCon');
const dotenv = require('dotenv');
const db = require('./models');
dotenv.config()




//load routes
const authRoutes = require('./routes/auth.router');
const userRoutes = require('./routes/users.router');
const scheduleRoutes = require('./routes/schedule.router');




app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/schedules', scheduleRoutes);


db.sequelize.sync().then(() => {
  app.listen(6000, () => {
    console.log('server listening on port... 6000')
  })
  
})

