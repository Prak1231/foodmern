import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'
const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1)
  const [varient, setVarient] = useState('small')

  const [show, setShow] = useState(false)

  const dispatch = useDispatch()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function addtoCart() {
    dispatch(addToCart(pizza, quantity, varient))
  }

  return (
    <div className="shadow-sm p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} alt="" className="img-fluid" />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients: </p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity: </p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1> Price : {pizza.prices[0][varient] * [quantity]}</h1>
        </div>

        <div className="m-1 w-100">
          <button onClick={addtoCart} className="btn">
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            alt=""
            className="img-fluid"
            style={{ height: '400px', width: '500px' }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button onClick={handleClose} className="btn">
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Pizza
