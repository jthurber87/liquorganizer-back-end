//dep
require('dotenv').config
require('./db/db')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 9000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `bottles`
const liquorganizer = require('./controllers/liquorganizer.js')
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
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


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
