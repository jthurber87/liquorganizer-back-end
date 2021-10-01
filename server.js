// DEPENDENCIES
const express = require('express')
// CONFIGURATION
const app = express()
const PORT = process.env.PORT || 3000

// 'DATA'
const spirit = ['vodka', 'tequila', 'rum', 'whiskey', 'gin', 'beer', 'wine']

// ROUTES
// index
app.get('/bottles/', (req, res) => {
  res.send(bottles)
})

// Listener
app.listen(PORT, () => {
  console.log('Popping bottles on ', PORT)
})
