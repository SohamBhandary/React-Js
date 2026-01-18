import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <Link to='/product/men'>Men</Link>
      <h1>Product page</h1>
      <Outlet />
    </div>
  )
}

export default Product
