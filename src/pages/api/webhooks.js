import getRawBody from "raw-body"
import { stripe } from "src/pricing/utils/stripe"
import { supabase } from "supabase"



export const config = {
    api: {
        bodyParser: false,
    }
}


export default async function handler(req, res) {

    const signature = req.headers['stripe-signature']

    const signingSecret = process.env.STRIPE_SIGNING_SECRET
     
    let event; 

    try {

        console.log(event, 'pdsfasdfsadfsadfas')
        const rawBody = await getRawBody(req, {limit: '2mb'})
        event = stripe.webhooks.constructEvent(
            rawBody,
            signature,
            signingSecret
        )    
        
    } catch (error) {
        console.log('Webhook failed', error)
        return res.status(400).end()
    }





    try {
        switch(event.type){
            
            case 'customer.subscription.updated':
                await updateSubscription(event)
                break;

            case 'customer.subscription.deleted':
                await updateSubscription(event)
                break

        }

        res.send({success: true})
        
    } catch (error) {
        console.log(error)
        res.send({success: false})

    }

    console.log(event);
 
    res.send({success: true})
}

async function updateSubscription(event){

    console.log(event.type)
    const subscription = event.data.object;
    const stripe_customer_id  = subscription.customer;
    const subscription_status = subscription.status;
    const price_id = subscription.items.data[0].price.id;
    const { data: profile} = await supabase.from('profile').select('*').eq
    ('stripe_customer_id', stripe_customer_id).single()

    if(profile){
        const updatedSubscription = {
            subscription_status,
            price_id
        }

        await supabase.from('profile').update(updatedSubscription).eq('stripe_customer_id', stripe_customer_id)
    } else{


        const customer = await stripe.customers.retrieve(
            stripe_customer_id
        );
        console.log(customer)

        const name = customer.name;
        const email = customer.email;
        const newProfile ={
            name, 
            email, 
            stripe_customer_id,
            subscription_status,
            price,
        }

        await supabase.auth.admin.createUser({
            email,
            email_confirm: true,
            user_metadata: newProfile,
        })

    }


}
