const mongoose = require('mongoose')

const bottleSchema = mongoose.Schema({
  spirit: {type: String, required: true},
  brand: {type: String, required: true},
  count: {type: Number, default: 1},
  notes: {type: String},
})

module.exports = mongoose.model('Bottle', bottleSchema)
