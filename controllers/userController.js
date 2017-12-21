const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

router.get('/', (request, response) => {
  User.find({})
    .then((users) => {
      response.render('users/index', {
        users
      })
    })
})

router.get('/:id', (request, response) => {
  const userId = request.params.id
  User.findById(userId)
    .then((user) => {
      response.render('users/show', {
        user
      })
    })
})

module.exports = router