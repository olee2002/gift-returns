const express = require('express')
const app = express()

const userController = require('./controllers/userController')
app.use('/users', userController)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`)
})