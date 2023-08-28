import React, { useState } from 'react'
import '../../scss/SignUp.scss'
import FormForSignUpandLogin from '../FormForSignUpandLogin'
import InputField from '../InputField'
import { useAuth } from '../Context/Authinicetion'
import { Link, useNavigate } from 'react-router-dom'
export default function UserLogin() {
  const [email , setEmail] = useState(""); 
  const [password , setPassword] = useState(""); 
  const [erroMsg , setErrorMsg] = useState("");
  const naving = useNavigate(); 
  const [currentloading ,setcurrentloading] = useState(false);
  const {Login} = useAuth();
  const getPassword = (e) =>{
    // const validpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const value = e.target.value;
    setPassword(value.trim())
  }  
  const getEmail = (e) =>{
    const value = e.target.value;
    const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!validEmail.test(value)){
     setErrorMsg("Please Provide A valid Email Address");
    }
    else{
     setErrorMsg("")
     setEmail(value.trim());
    }
   }

   async function getUserdata (e){
    e.preventDefault();
    
   if(password.trim() === "" || email.trim() === ""){
      setErrorMsg("Email , Password is requred. Please make sure You done that's")
   }
   else{
      try{ 
        await Login(email,password);
          setErrorMsg("");
          setcurrentloading(true); 
          naving('/');
      }catch(error){
          setErrorMsg("Log in fail");
          setcurrentloading(false);
       }
      
    
   }
}
return (
<div className="w-full flex justify-center mt-32 h-100vh items-center">
  <div className="signup froms shadow-lg">
    <h1 className='text-white mb-5 text-3xl font-semibold'>Log In</h1>
    <FormForSignUpandLogin  onSubmit={getUserdata}>
      {erroMsg &&
      <div className="error ">
        <ul>
          <li><i class="fa-solid fa-xmark"></i>{erroMsg}</li>
        </ul>
      </div>
      }
      {/* <div className="success mt-4">
        <ul>
          <li><i class="fa-solid fa-check"></i>{}</li>
        </ul>
      </div> */}

 <InputField onChange={getEmail} required type='email' placeholder="Email" iconName="fa-solid fa-envelope"/>
      <InputField onChange={getPassword} required type='password' placeholder="Password" iconName="fa-solid fa-lock"/>
      <button type='submit' class="btn mt-4 font-bold w-full text-[#002347] bg-[#fdc632] hover:bg-[#fdc632]  border-none">Submit Now</button>
      <span className='mt-11 block text-center text-white'>Don't have an account? <Link to="/signup"
          className='text-[#fdc632]'>Sign Up</Link> instead</span>
    </FormForSignUpandLogin>
  </div>
</div>
)
}
