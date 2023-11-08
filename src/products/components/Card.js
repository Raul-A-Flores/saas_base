import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ProductCard = ({product}) => {

  return (
    <article className='product-card'>
        <Link href={`/products/${product.slug}`}>
            <img src={`/assets/${product.slug}.png`} alt={product.name}/>
        </Link>
        <header>
            <p>{product.name}</p>

        </header>
        <footer>
        <Link href={`/products/${product.slug}`} className='more'>
            See more
        </Link>
            <div>
                <span className='pill'>{product.category}</span>
            </div>
        </footer>
    </article>

  )
}

export default ProductCard