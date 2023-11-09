
import React from 'react'
import Benefits from 'src/pricing/components/Benefits'
import { stripe } from 'src/pricing/utils/stripe'
import Plans from 'src/pricing/components/Plans'

export async function getStaticProps(){

    const { data: prices } = await stripe.prices.list()
    const plans = []

    for (const price of prices){


        const product = await stripe.products.retrieve(price.product)
        plans.push({
            name: product.name, 
            id: price.id, 
            price: price.unit_amount /100,
            interval: price.recurring.interval
        })
    }

    return{
        props:{
            plans
        }
    }

};



export const PricingPage = ({plans}) => {
    console.log(plans)
  return (
    <div className='grid-halves h-screen-navbar'>
        <Plans  plans={plans}/>
        <Benefits />

    </div>
  )
}

export default PricingPage