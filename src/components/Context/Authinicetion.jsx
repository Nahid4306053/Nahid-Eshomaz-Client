import React, { createContext, useContext, useEffect, useState } from 'react'
import "../../Firebase"
import {getAuth ,createUserWithEmailAndPassword,updateProfile ,signInWithEmailAndPassword ,signOut ,onAuthStateChanged } from 'firebase/auth'
const AuthContext = createContext();

export function useAuth(){
     return useContext(AuthContext);
}


export  function AuthProvider({children}){  
    const [loading , setloading] = useState(true);
    const [currentUser , setcurrentUser] = useState();
    
     useEffect(()=>{
         const auth = getAuth();
         const unupdate =  onAuthStateChanged(auth , (user)=>{
            setcurrentUser(user);
            setloading(false);
         })

         return unupdate
     },[]) 


     async function signup(username , email,password,){
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth , email , password);
      await updateProfile(auth.currentUser,{
           displayName : username,
           photoURL : " ",
           
      })
      const user = auth.currentUser;
      setcurrentUser({
         ...user,
      })
}

function Login(email , password){
    const auth = getAuth(); 
    return  signInWithEmailAndPassword(auth , email , password);

}

function Logout(){
    const auth = getAuth();
    return signOut(auth);
}


     const value = {
        currentUser,
        signup,
        Login,
        Logout,
        loading  
     }
  
     return (
         <AuthContext.Provider value={value}>
            {!loading && children}
         </AuthContext.Provider>   
     )
} 
