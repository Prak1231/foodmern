import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../actions/OrderAction'
import Error from './Error'
import Loading from './Loading'
import Success from './Success'
const Checkout = ({ subtotal }) => {
  const dispatch = useDispatch()
  const orderstate = useSelector((state) => state.placeOrderReducer)
  const { loading, error, success } = orderstate

  function tokenHandler(token) {
    console.log(token.card)

    dispatch(placeOrder(token, subtotal))
  }
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51M2qmxSDJCfUaCo7AAMDAoLDlqTN6n7khFHQmM7Ik9tCGIlPCAKRYnPIar9HbYDANygab7DHM9X2Jh387dZTZB0Y009AIha1pG"
        currency="INR"
      >
        <button className="btn">Paynow</button>
      </StripeCheckout>
    </div>
  )
}

export default Checkout
