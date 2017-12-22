const User = require('./models/User')
const Store = require('./models/Store')
const Gift = require('./models/Gift')
const mongoose = require('mongoose')

require('dotenv').config()

// connect to database
mongoose.connect(process.env.MONGODB_URI, {
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
User.remove({}).then(() => {
  const bobLoblaw = new User({
    username: 'bob_loblaw',
    email: 'bob@loblawlawblog.com',
    firstName: 'Robert',
    lastName: 'Loblaw',
    photoUrl: 'https://enterprisectr.org/wp-content/uploads/2014/09/bobloblaw.jpg'
  })

  const target = new Store({
    name: 'Target',
    address: 'over there'
  })
  const toaster = new Gift({
    title: 'Toaster',
    description: 'why?',
    price: 25.41,
    cameFrom: 'Lucille'
  })
  const mug = new Gift({
    title: 'Coffee Mug',
    description: 'Too many cats on it',
    price: 4.45,
    cameFrom: 'Lucille'
  })
  const broom = new Gift({
    title: 'Broom',
    description: 'Seriously, why?',
    price: 12.41,
    cameFrom: 'Oscar'
  })
  target.giftsToReturn.push(toaster, mug, broom)

  const sharperImage = new Store({
    name: 'Sharper Image',
    address: 'the mall'
  })
  const massageChair = new Gift({
    title: 'Massage Chair',
    description: 'already have too many',
    price: 1521.67,
    cameFrom: 'Donny'
  })
  const headMassager = new Gift({
    title: 'Head Massager',
    description: 'creepy',
    price: 8.27,
    cameFrom: 'Oscar'
  })
  sharperImage.giftsToReturn.push(massageChair, headMassager)

  bobLoblaw.stores.push(target, sharperImage)

  return bobLoblaw.save()
}).then(() => {
  return User.create({
    username: 'GOB',
    email: 'ceo@bluthcompany.com',
    firstName: 'George',
    lastName: 'Bluth',
    photoUrl: 'https://pbs.twimg.com/profile_images/378800000134134212/81a38a74f2f122459e88a5f95987a139.jpeg'
  })
}).then((gob) => {
  const magicStore = new Store({
    name: 'The Magic Store',
    address: 'over there'
  })
  const aztecTomb = new Gift({
    title: 'Aztec Tomb',
    description: 'already have one',
    price: 10034.20,
    cameFrom: 'Dad'
  })
  const cape = new Gift({
    title: 'Cape',
    description: 'too small',
    price: 44.45,
    cameFrom: 'Buster'
  })
  const lighterFluid = new Gift({
    title: 'Lighter Fluid',
    description: 'already have some',
    price: 12.41,
    cameFrom: 'Lindsey'
  })
  magicStore.giftsToReturn.push(aztecTomb, cape, lighterFluid)

  const petSmart = new Store({
    name: 'PetSmart',
    address: '123 Sesame St'
  })

  gob.stores.push(magicStore, petSmart)

  return gob.save()
}).then(() => {
  return User.create({
    username: 'Buster',
    email: 'buster@bluthcompany.com',
    firstName: 'Buster',
    lastName: 'Bluth',
    photoUrl: 'https://pbs.twimg.com/profile_images/1648107258/458329-buster_sheep_400x400.jpg'
  })
}).then((buster) => {
  const archaeologyStore = new Store({
    name: 'Archaeology Store',
    address: 'down the street'
  })
  const aztecTomb = new Gift({
    title: 'Fossils',
    description: 'spooky',
    price: 2034.20,
    cameFrom: 'Oscar'
  })
  const cape = new Gift({
    title: 'Pick',
    description: 'too sharp',
    price: 44.45,
    cameFrom: 'Buster'
  })
  const lighterFluid = new Gift({
    title: 'Book',
    description: 'already have it',
    price: 12.41,
    cameFrom: 'Tobias'
  })
  archaeologyStore.giftsToReturn.push(aztecTomb, cape, lighterFluid)

  buster.stores.push(archaeologyStore)

  return buster.save()
}).catch((error) => {
  console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
  console.log(error)
}).then(() => {
  mongoose.connection.close()
  console.log(`
      Finished seeding database...
      
      Disconnected from MongoDB
    `)
})
