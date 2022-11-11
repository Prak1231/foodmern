import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/OrderAction'
import Error from '../Components/Error'
import Loading from '../Components/Loading'

export const OrderScreen = () => {
  const dispatch = useDispatch()
  const orderState = useSelector((state) => state.getUserOrdersReducer)
  const { orders, error, loading } = orderState

  useEffect(() => {
    dispatch(getUserOrders())
  }, [])
  return (
    <div>
      <h2 style={{ fontSize: '35px', textAlign: 'center' }}> Orders Screen </h2>

      <hr />

      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error />}

        {orders &&
          orders.map((order) => {
            return (
              <div
                className="col-md-10 m-2"
                style={{ backgroundColor: 'royalblue', color: 'white' }}
              >
                <div className="flex-container">
                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: '35px' }}>Itmes</h2>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.name}[{item.varient}]* {item.quantity} ={' '}
                            {item.price}
                          </p>
                        </div>
                      )
                    })}
                  </div>

                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: '35px' }}>Address</h2>
                    <hr />
                    <p>Street:{order.shippingAddress.street}</p>
                    <p>City:{order.shippingAddress.city}</p>
                    <p>Pincode:{order.shippingAddress.pincode}</p>
                  </div>

                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: '35px' }}>Order Info</h2>
                    <hr />
                    <p>Order Amount : {order.orderAmount}</p>
                    <p>Date : {order.createdAt.substring(0, 10)}</p>
                    <p>Transaction id : {order.transactionId}</p>
                    <p>Order Id : {order._id}</p>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
