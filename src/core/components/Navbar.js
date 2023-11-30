
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from './Logo';
import { useUser, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { SITE_URL } from '../utils';

const Navbar = () => {

  const session = useSession()
  const supabaseClient = useSupabaseClient()

  function signOut(){
    supabaseClient.auth.signOut()
  }

  async function onManageBilling(){
    const response = await fetch(`${SITE_URL}/api/manage-billing`)
    const data = await response.json()
    if(data){
      window.location.href = data.url; 
    }

  }

  return (
    <nav className='border-b-2 nav-container border-black'>
        <Link href='/'><Logo /></Link>
        {session ?(
          <div className='nav-menu'>
            <Link href='/products' className='nav-link white'>Products</Link>
            <a onClick={onManageBilling} className='nav-link border-left white'>Billing</a>
            <div className='nav-link black'>
              <div onClick={signOut} >Sign out</div>
            </div>
        </div>
        ):(
          <div className='nav-menu'>
            <Link href='/login' className='nav-link white'>Login</Link>
            <Link href='/pricing' className='nav-link black'>Pricing</Link>
        </div>
        )}
    </nav>

  )
}

export default Navbar
