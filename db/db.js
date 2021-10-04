// ../holiday-app-backend/db/db.js
require('dotenv').config()
const mongoose = require('mongoose')

//Error/DC
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


mongoose.connect('mongodb://localhost:27017/liquorganizer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once('open', ()=>{
  console.log('connected to mongoose!')
})
