//dep
require('dotenv').config()
require('./db/db')
const liquorganizer = require('./controllers/liquorganizer.js')
const authController = require('./controllers/auth.js')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 9000
const whitelist = ["http://localhost:3000", "https://liquorganizer-ga.surge.sh", "https://liquorganizer-back-end.herokuapp.com"];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) != -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use('/bottles', liquorganizer)
app.use('/auth', authController)


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
