import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth =getAuth(app)
const Login = () => {
    const [signInwithGoogle]= useSignInWithGoogle(auth)
    return (
        <div>
            <h1>Please Login</h1>
                <div style={{"margin":"20px"}}>
                    <button onClick={()=>signInwithGoogle()}>Sign In with Google</button>
                </div>
            <form >
                
                <input type="email" placeholder='Email' />
                <br/>
                <input type="password" placeholder='Password' />
                <br/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;