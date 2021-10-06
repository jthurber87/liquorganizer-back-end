//dep
require('dotenv').config()
require('./db/db')
const liquorganizer = require('./controllers/liquorganizer.js')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 9000
const whitelist = ["https://liquorganizer-ga.surge.sh"];
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
