const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
  {
    name: { type: String, require },

    email: {
      type: String,
    },
    userid: {
      type: String,
    },

    orderItems: [],

    shippingAddress: { type: Object },
    orderAmount: { type: Number },

    isDelivered: { type: Boolean, default: false },
    transactionId: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('orders', orderSchema)
