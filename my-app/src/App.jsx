import React from 'react'
import Header from './component/header/Header'
import Products from './component/products/Products'
import About from './component/about/About'
import Features from './component/features/Features'
import OurBlog from './component/ourBlog/OurBlog'
import Pricing from './component/pricing/Pricing'
import SignUp from './component/signUp/SignUp'
import Login from './component/login/LogIn.jsx'
import {Route, Routes} from 'react-router-dom'
import Footer from './component/footer/Footer'






export default function App() {
  return (
    <div>
    
      <Header/>
      
      <Routes>
      <Route path='aboutPage' element={<About  />} />
      <Route path='productsPage' element={<Products/>} />
      <Route path='featuresPage' element={<Features/>} />
      <Route path='ourPage' element={<OurBlog/>} />
      <Route path='pricingPage' element={<Pricing/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      </Routes>
      <Footer/>
    </div>
  )
}
