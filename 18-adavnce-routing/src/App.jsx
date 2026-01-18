import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Men from './pages/Men'
import NotFound from './pages/NotFound'
import Courses from './pages/Courses'
import CDeatils from "./pages/CDeatils"


const App = () => {
  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
       <Route path='/courses' element={<Courses />} />
      <Route path='/courses/:id' element={<CDeatils />} />
        <Route path='/about' element={<About />} />

        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
     

      <Footer />
    </div>
  )
}

export default App
