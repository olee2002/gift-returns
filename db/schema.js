const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const StoreSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Store name is required!']
    },
    address: {
      type: String
    }
  },
  {
    timestamps: {}
  }
)

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
    photoUrl: String,
    stores: [StoreSchema]
  },
  {
    timestamps: {}
  }
)

module.exports = {
  UserSchema,
  StoreSchema
}