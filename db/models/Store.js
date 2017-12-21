const mongoose = require('mongoose')
const Schema = require('../Schema')

const Store = mongoose.model('Store', Schema.StoreSchema)

module.exports = Store