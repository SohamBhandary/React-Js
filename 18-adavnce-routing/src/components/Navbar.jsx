import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-amber-200 justify-between'>
        <h2>Lorem, ipsum dolor.</h2>
        <div className='flex gap-8'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/product'>Product</Link>
          <Link to='/courses'>Courses</Link>
           
        </div>
    </div>
  )
}

export default Navbar