import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-slate-950 h-[70px]'>
          <ul className='flex flex-row justify-center items-center pt-5 space-x-10 text-white'>
            <li><Link to={'home-page'}>Home</Link></li>
            <li><Link to={'login-page'}>Login</Link></li>
        </ul>
    </div>
  )
}

export default Navbar