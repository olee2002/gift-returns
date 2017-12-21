const mongoose = require('mongoose')
const Schema = require('../Schema')

const Gift = mongoose.model('Gift', Schema.GiftSchema)

module.exports = Gift