const express = require('express')
const router = express.Router({mergeParams: true})

const User = require('../db/models/User')

router.get('/', (request, response) => {
  const userId = request.params.userId

  User.findById(userId)
    .then((user) => {
      response.render('stores/index', {
        userFullName: `${user.firstName} ${user.lastName}`,
        userId: user._id,
        stores: user.stores
      })
    })
})

module.exports = router