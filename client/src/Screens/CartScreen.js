import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'
import Checkout from '../Components/Checkout'
const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer)
  const cartItems = cartState.cartItems

  var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="row px-5">
        <div className="col-md-8">
          <h2 style={{ fontSize: '40px' }}>My Cart</h2>

          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price:{item.quantity}*{item.prices[0][item.varient]} =
                    {item.price}
                  </h1>
                  <h1 style={{ display: 'inline' }}>quantity: </h1>
                  <i
                    className="fa fa-plus"
                    onClick={() =>
                      dispatch(addToCart(item, item.quantity + 1, item.varient))
                    }
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fa fa-minus"
                    onClick={() =>
                      dispatch(addToCart(item, item.quantity - 1, item.varient))
                    }
                  ></i>
                  <hr />
                </div>

                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: '80px', width: '80px' }}
                    alt=""
                  />
                </div>

                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash mt-5"
                    onClick={() => dispatch(deleteFromCart(item))}
                  ></i>
                </div>
              </div>
            )
          })}
        </div>

        <div className="col-md-4 text-left">
          <h2 style={{ fontSize: '42px' }}>SubTotal : {subtotal} /Rs</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  )
}

export default CartScreen
