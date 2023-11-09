import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import confetti from '../../public/assets/confetti.png'


const success = () => {
  return (
    <div className='section bg-pink h-screen'>
        <div className='container'>
            <div className='section-intro welcome'>
                <Image 
                    src={confetti}
                    height={200}
                    width={200}
                    alt='confetti'
                    className='confetti'
                    />
                    <h1>You're In!</h1>
                    <p>You can now access everythign on this site. <br /> Ready to get started? </p>
                    <Link href='/login' className='large-button'>
                        <div className='large-button-text'>Get Started
                        </div>
                    
                    </Link>
            
            </div>
        </div>

    </div>
  )
}

export default success