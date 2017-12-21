const express = require('express')
const router = express.Router({mergeParams: true})

const User = require('../db/models/User')

router.get('/new', (request, response) => {
  const userId = request.params.userId
  const storeId = request.params.storeId

  User.findById(userId).then((user) => {
    const store = user.stores.id(storeId)

    response.render('gifts/new', {
      userId,
      store
    })
  })
})

router.post('/', (request, response) => {
  const userId = request.params.userId
  const storeId = request.params.storeId

  const newGift = request.body
  console.log(newGift)

  User.findById(userId).then((user) => {
    const store = user.stores.id(storeId)
    store.giftsToReturn.push(newGift)

    return user.save()
  })
  .then(() => {
    response.redirect(`/users/${userId}/stores/${storeId}`)
  })
})

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
