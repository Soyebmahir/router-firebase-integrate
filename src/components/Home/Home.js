import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth =getAuth(app)
const Home = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <h1>This is Home</h1>
           <h3> {user?.displayName}</h3>
        </div>
    );
};

export default Home;