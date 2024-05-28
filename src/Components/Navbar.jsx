import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='bg-blue-500 p-4'>
        <ul className='flex gap-8 text-2xl font-semibold text-zinc-200 '>
            <Link to='/' ><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/products'><li>Products</li></Link>
            <Link to='/user'><li>User</li></Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar