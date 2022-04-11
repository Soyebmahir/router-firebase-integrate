import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Please register</h1>
            <form >
                <input type="text" placeholder='Name' />
                <br/>
                <input type="email" placeholder='Email' />
                <br/>
                <input type="password" placeholder='Password' />
                <br/>
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;