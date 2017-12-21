const express = require('express')
const router = express.Router({mergeParams: true})

const User = require('../db/models/User')

router.get('/:giftId', (request, response) => {
  const userId = request.params.userId
  const storeId = request.params.storeId
  const giftId = request.params.giftId

  User.findById(userId).then((user) => {
    const store = user.stores.id(storeId)
    const gift = store.giftsToReturn.id(giftId)

    response.render('gifts/show', {
      userId,
      store,
      gift
    })
  })
  .catch((error) => {
    console.log(error)
  })
})

module.exports = router
