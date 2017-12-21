const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required!']
    },
    email: {
      type: String
    },
    firstName: {
      type: String,
      required: [true, 'First name is required!']
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required!']
    },
    photoUrl: String
  },
  {
    timestamps: {}
  }
)

module.exports = {
  UserSchema
}