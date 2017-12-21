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
    .catch((error) => {
      console.log(error)
    })
})

router.get('/new', (request, response) => {
  response.render('users/new')
})

router.post('/', (request, response) => {
  User.create(request.body)
    .then(() => {
      response.redirect('/users')
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/:userId', (request, response) => {
  const userId = request.params.userId
  User.findById(userId)
    .then((user) => {
      response.render('users/show', {
        user
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/:userId/edit', (request, response) => {
  const userId = request.params.userId

  User.findById(userId)
    .then((user) => {
      response.render('users/edit', {
        user
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/:userId/delete', (request, response) => {
  const userId = request.params.userId

  User.findByIdAndRemove(userId)
    .then(() => {
      response.redirect('/users')
    })
    .catch((error) => {
      console.log(error)
    })
})

router.put('/:userId', (request, response) => {
  const userId = request.params.userId
  const updatedUserInfo = request.body

  User.findByIdAndUpdate(userId, updatedUserInfo, {new: true})
    .then(() => {
      response.redirect(`/users/${userId}`)
    })
})

module.exports = router