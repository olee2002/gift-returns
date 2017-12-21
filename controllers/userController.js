const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.send("It's working!!!! It's workinnngggggg!!!!!!!")
})

module.exports = router