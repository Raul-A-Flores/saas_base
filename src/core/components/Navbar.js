import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='border-b-2 nav-container border-black'>
        <Link href='/'><Logo /></Link>
        <div className='nav-menu'>
            <Link href='/login' className='nav-link white'>Login</Link>
            <Link href='/pricing' className='nav-link black'>Pricing</Link>

        </div>
    </nav>

  )
}

export default Navbar
