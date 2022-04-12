import { useEffect, useState } from "react"
import {getAuth,GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth"
import app from "../firebase.init"
const auth =getAuth(app)
const googleProvider =new GoogleAuthProvider()


const useFirebase =()=>{
    const [user,setUser]=useState({})

    const signInwithGoogle =()=>{
     console.log("sign in ");
     signInWithPopup(auth,googleProvider)
     .then(res=>{
         const user = res.user
         setUser(user)
         console.log(user);
     })
    }
    const handleSignOut =()=>{
        signOut(auth)
        .then(()=>{
            console.log('signout');
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user)
        })
    },[])
    return {user,handleSignOut,signInwithGoogle}
}
export default useFirebase;