import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Loading from '../Components/Loading'
import Success from '../Components/Success'
import Error from '../Components/Error'
import { NavLink } from 'react-router-dom'
const Registration = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [cpassword, setcpassword] = useState('')

  const registerState = useSelector((state) => state.registerUserReducer)
  const { error, loading, success } = registerState
  const dispatch = useDispatch()

  const register = () => {
    if (password !== cpassword) {
      alert('pasword not matched')
    } else {
      const user = {
        name,
        email,
        password,
      }
      console.log(user)
      dispatch(registerUser(user))
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5 ">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded ">
          {loading && <Loading />}
          {success && <Success success={'User Registered Successfully'} />}

          {error && <Error error="Email already Registered" />}
          <h2 className="text-center mt-2" style={{ fontSize: '35px' }}>
            Register
          </h2>
          <div>
            <input
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="confirmPassword"
              className="form-control"
              value={cpassword}
              onChange={(e) => setcpassword(e.target.value)}
            />
            <button className="btn mt-3" onClick={register}>
              Register
            </button>{' '}
            <br />
            <NavLink
              style={{ color: 'black', margin: '10px', textDecoration: 'none' }}
              to="/login"
            >
              Click Here to Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
