import './App.css'
import Navbar from './Components/Navbar'

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import $ from 'jquery'
import Popper from 'popper.js'
import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import Registration from './Screens/Registration'
import { OrderScreen } from './Screens/OrderScreen'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/cart" exact element={<CartScreen />} />
          <Route path="/login" exact element={<LoginScreen />} />
          <Route path="/register" exact element={<Registration />} />
          <Route path="/orders" exact element={<OrderScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
