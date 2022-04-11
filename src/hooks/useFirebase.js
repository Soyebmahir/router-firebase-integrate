import { useState } from "react"
import {getAuth,GoogleAuthProvider, signInWithPopup} from "firebase/auth"
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
    return {user,signInwithGoogle}
}
export default useFirebase;