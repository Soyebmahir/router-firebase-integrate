import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth =getAuth(app)
const Login = () => {
    const [signInwithGoogle]= useSignInWithGoogle(auth)
    let location =useLocation()
    const navigate =useNavigate()
    let from =location.state?.from?.pathname || '/';

    const handleSignInWithGoogle =()=>{
        signInwithGoogle()
        .then(()=>{
            navigate(from, {replace:true})
        })
    }
    return (
        <div>
            <h1>Please Login First</h1>
                <div style={{"margin":"20px"}}>
                    <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
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