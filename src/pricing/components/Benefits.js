import React from 'react'



const benefits = [
    {
        title: "One low price",
        subtitle: "Save Big. Get everything with a super low monthly subscription."
    },
    {
        title: "No Limits",
        subtitle: "Get complete access to everythign on the site."
    },
    {
        title: "Cancel anytime",
        subtitle: "Pause or stop your subscription, whenever you like."
    }

    
]
const Benefits = () => {
  return (
    <div className='bg-black'>
        <div className='column-padding'>
            <div className='content-grid xl'>
                {benefits.map(benefit=>(
                    <div key={benefit.title} className='spacing-base'>
                        <h3>{benefit.title}</h3>
                        <br />
                        <div>{benefit.subtitle}</div>
                    </div>

                ))}
            </div>
        </div>
    </div>

  )
}

export default Benefits