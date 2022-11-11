import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Loading from '../Components/Loading'
import Error from '../Components/Error'
import { NavLink } from 'react-router-dom'
const LoginScreen = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const loginState = useSelector((state) => state.loginUserReducer)

  const { loding, error } = loginState
  const dispatch = useDispatch()

  const login = () => {
    const user = {
      email,
      password,
    }
    console.log(user)
    dispatch(loginUser(user))
  }

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }
  }, [])
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center mt-2" style={{ fontSize: '35px' }}>
            Login
          </h2>
          {loding && <Loading />}
          {error && <Error error={'invalid login crendentials'} />}
          <div>
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
            <button className="btn mt-3" onClick={login}>
              Login
            </button>{' '}
            <br />
            <NavLink
              href="/register"
              style={{ color: 'black', margin: '10px', textDecoration: 'none' }}
            >
              Click Here to Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
