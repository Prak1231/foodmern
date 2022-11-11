const express = require('express')
const router = express.Router()
// const { v4: uuidv4 } = require('uuid')
const { placeOrder, getUserOrder } = require('../controller/orderController')

// const stripe = require('stripe')(
//   'sk_test_51M2qmxSDJCfUaCo7RN5MeUjXMp3qRx1x65QGlvjr28YCxAX1ElZm1gjYnsRQrbTSym3PVi8vDzesMOM8v7m0MRcX006TFwOdid',
// )
// const orderModel = require('../models/orderModel')

router.post('/placeorder', placeOrder)
router.post('/getuserorders', getUserOrder)

// router.post('/placeorder', async (req, res) => {
//   const { token, subtotal, currentUser, cartItems } = req.body

//   console.log(currentUser.email)
//   try {
//     const customer = await stripe.customers.create({
//       email: token.email,
//       id: token.id,
//     })

//     const payment = await stripe.paymentIntents.create(
//       {
//         amount: subtotal * 100,
//         currency: 'inr',
//         customer: currentUser.id,
//         receipt_email: token.email,
//       },
//       {
//         idempotencyKey: uuidv4(),
//       },
//     )

//     if (payment) {
//       console.log('success')
//       const newOrder = new orderModel({
//         name: currentUser.name,

//         email: currentUser.email,
//         userid: currentUser._id,
//         orderItems: cartItems,
//         orderAmount: subtotal,
//         shippingAddress: {
//           street: token.card.address_line1,
//           city: token.card.address_city,
//           pincode: token.card.address_zip,
//         },
//         transactionId: payment.id,
//       })

//       newOrder.save()
//       res.send('Order Placed Successfully')
//     } else {
//       res.send('payment not successfull')
//     }
//   } catch (error) {
//     res.send(error)
//   }
// })

// router.post('/getuserorders', async (req, res) => {
//   const { userid } = req.body
//   console.log(userid)
//   try {
//     const orders = await orderModel.find({ userid: userid }).sort({ _id: -1 })

//     res.send(orders)
//   } catch (err) {
//     return res.status(400).json({
//       message: err,
//     })
//   }
// })

module.exports = router
