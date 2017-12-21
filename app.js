const express = require('express')
const mongoose = require('mongoose')

// Creating new Express app
const app = express()

app.set('view engine', 'hbs')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))

// Mongo connection set-up
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/gift-returns', {
  useMongoClient: true
})

mongoose.connection.once('open', () => {
  console.log('Mongoose has connected to MongoDB!')
})

mongoose.connection.on('error', (error) => {
  console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
  process.exit(-1)
})

// Registering controllers
const userController = require('./controllers/userController')
app.use('/users', userController)

const storesController = require('./controllers/storesController')
app.use('/users/:userId/stores', storesController)

// Starting server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`)
})