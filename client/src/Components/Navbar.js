import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const cartState = useSelector((state) => state.cartReducer)

  const userState = useSelector((state) => state.loginUserReducer)

  const { currentUser } = userState
  const dispatch = useDispatch()

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <NavLink className="navbar-brand" to="/">
          SHEY PIZZA
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-3" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="dropdown mt-2 px-2">
                <a style={{ textDecoration: 'none' }} className="dropbtn">
                  {currentUser.name} ▼
                </a>
                <div className="dropdown-content">
                  <NavLink to="/orders">Orders</NavLink>
                  <NavLink href="/">
                    <li onClick={() => dispatch(logoutUser())}>Logout</li>
                  </NavLink>
                </div>
              </div>
            ) : (
              <li className="nav-item ">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                Cart {cartState.cartItems.length}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
