

import { useSupabaseClient} from '@supabase/auth-helpers-react'
import { useState } from 'react';


export default function LoginForm({setSumitted}) {

    const supabaseClient = useSupabaseClient()
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    async function onSubmit(event){
        event.preventDefault();
        setLoading(true)
         const email = event.target.elements.email.value;
         const { error} = await supabaseClient.auth.signInWithOtp({
            email, 
            options: {
                shouldCreateUser: false, 
                emailRedirectTo: window.location.origin
            }
        });
        if(error){
            setError(error.message)
            setLoading(false)
        } else{
            setError('')
            setLoading(false)
            setSumitted(email)

            }

    }

    return(
        <form onSubmit={onSubmit} className="content-grid home-hero">
            {error && (
                <div className='danger' role='alert'>
                    {error}
                </div>
            )}
            <h1>Welcome Back</h1>
            <div className="email-input">
                <label htmlFor="email">Email</label>
                <input id='email' type='email' name='email' autoComplete="email"></input>
            </div>
            <button  disabled={isLoading} className="large-button" type="submit">
                <div className="large-button-text">
                    {isLoading ? 'Logging in...': 'Log in'}
                </div>
            </button>

        </form>
    )
}
