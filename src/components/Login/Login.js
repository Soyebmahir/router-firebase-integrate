import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {user,signInwithGoogle} =useFirebase()
    return (
        <div>
            <h1>Please Login</h1>
            <div style={{"margin":"20px"}}>
                    <button onClick={signInwithGoogle}>Sign In with Google</button>
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