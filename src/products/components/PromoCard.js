import React from 'react';
import Link from 'next/link';

const PromoCard = () => {
  return (


    <section>
        <div>
            <div>
                <h4>
                    Get Instant Access
                </h4>
                <p style={{ fontSize: '1rem' }}>
                    Access this product polus doezes of other when you subscribe
                </p>
            </div>
        </div>
        <Link href='/pricing' className='primary button'>
            Purchase
        </Link>

    </section>
  )
}

export default PromoCard