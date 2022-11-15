const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    required: 'User'
  }],
  address: {
    street: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  payment: {
    card: {
      number: {
        type: String,
        required: true
      },
      cvv: {
        type: String,
        required: true
      }
    }
  }
})

module.exports = mongoose.model('Cart', Schema)