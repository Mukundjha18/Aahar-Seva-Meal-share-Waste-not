import React, { useEffect } from 'react'
import Home from './pages/home'
import Navbar from './components/navbar/navbar'
import Footer from './components/navbar/fotter/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Allproduct from './pages/Allproduct';
import AboutUs from './pages/Aboutus'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/cart';
import Profile from './pages/profile';
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails';
import Donate from './pages/donate';
import Partnerwus from './pages/partnerwus';
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './store/auth'
import Favourite from './components/Profile/Favourite'
import UserOrderHistory from './components/Profile/UserOrderHistory'
import Setting from './components/Profile/Settings'
import AllOrders from './pages/AllOrders'
import AddProducts from './pages/AddProducts'
import UpdateProducts from './pages/updateProducts'

const App = () => {
  const dispatch = useDispatch()
  const role = useSelector((state) => state.auth.role)
  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ) {
      dispatch(authActions.login())
      dispatch(authActions.changeRole(localStorage.getItem("role")))
    }
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Products' element={<Allproduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Profile' element={<Profile />} >
          {role === "receiver" ?
            <Route index element={<Favourite />} />
            : (
              <Route index element={<AllOrders />} />
            )}
            {role === "donater" && (
              <Route path='/Profile/add-product' element={<AddProducts />} />
            )}
          <Route path='/Profile/orderHistory' element={<UserOrderHistory />} />
          <Route path='/Profile/Settings' element={<Setting />} />
        </Route>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/partner-with-us' element={<Partnerwus />} />
        <Route path='/view-product-details/:id' element={<ViewBookDetails />} />
        <Route path='/updateProducts/:id' element={<UpdateProducts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
