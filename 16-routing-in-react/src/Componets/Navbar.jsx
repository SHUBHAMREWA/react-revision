import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

      
  return (
    <div   
    className='flex gap-4 justify-around items-center bg-gray-500 text-xl font-bold'
    >
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/blog"}>Blog</Link>

    </div>
  )
}

export default Navbar