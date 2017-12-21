const User = require('./models/User')
const mongoose = require('mongoose')

// connect to database
mongoose.connect('mongodb://localhost/gift-returns', {
  useMongoClient: true
})

mongoose.connection.once('open', () => {
  console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
  console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
  process.exit(-1)
})

// Delete all users, then add some fake ones
User.remove({})
  .then(() => {
    return User.create({
      username: 'bob_loblaw',
      email: 'bob@loblawlawblog.com',
      firstName: 'Robert',
      lastName: 'Loblaw',
      photoUrl: 'https://enterprisectr.org/wp-content/uploads/2014/09/bobloblaw.jpg'
    })
  })
  .then(() => {
    return User.create({
      username: 'gob',
      email: 'ceo@bluthcompany.com',
      firstName: 'George',
      lastName: 'Bluth',
      photoUrl: 'http://78.media.tumblr.com/tumblr_l97od9Zc1M1qz59z1o1_400.jpg'
    })
  })
  .catch((error) => {
    console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
    console.log(error)
  })
  .then(() => {
    mongoose.connection.close()
    console.log(`
      Finished seeding database...
      
      Disconnected from MongoDB
    `)
  })
