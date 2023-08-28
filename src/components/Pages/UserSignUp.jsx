import React, { useState } from 'react'
import '../../scss/SignUp.scss'
import FormForSignUpandLogin from '../FormForSignUpandLogin'
import InputField from '../InputField'
import { Await, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/Context/Authinicetion';
export default function UserSignUp() {
      const [password , setPassword] = useState("");
      const [userName , setUseName] = useState("");
      const [confirmPassword , setconfirmPassword] = useState("");
      const [email , setEmail] = useState("");  
      const [erroMsg , setErrorMsg] = useState();
      const {signup} = useAuth();
      const [currentloading ,setcurrentloading] = useState(false);
      const naving = useNavigate(); 
      const getPassword = (e) =>{
        // const validpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        const value = e.target.value;
        setPassword(value.trim())
      }  

      const getUseName = (e) =>{
       const value = e.target.value;
       if(value.length > 16 || value.length < 5){
        setErrorMsg("User Name length Must 5 to 16 cherecter");
       }
       else{
        setUseName(value.trim())
        setErrorMsg("");
       }
      }    

      const getConfirmPassword = (e) =>{
        const value = e.target.value;
       if(password !== value){
        setErrorMsg("Password and Confirm password not match");
       }
       else{
        setconfirmPassword(value.trim());
        setErrorMsg("");
       }
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
           
          if( userName.trim() === "" || confirmPassword.trim() === "" || password.trim() === "" || email.trim() === ""){
             setErrorMsg("User Name,  Email , Password is requred. Please make sure You done that's")
          }
          else{
            console.log(email, userName ,password.length)
             try{  
               await signup(userName , email , password);
                setErrorMsg("");
                setcurrentloading(true); 
                naving('/');
             }
             catch(error){
                console.log(error);
                setErrorMsg("Account created failed");
                setcurrentloading(false);
             }
          }
       }
       

return (
<>
  <div className="w-full flex justify-center mt-32 h-100vh items-center">
  <div className="signup froms shadow-lg">
     <h1 className='text-white mb-5 text-3xl font-semibold'>Sign Up</h1>
     <FormForSignUpandLogin onSubmit={getUserdata}>
      { erroMsg && <div className="error ">
        <ul>
          <li><i class="fa-solid fa-xmark"></i>{erroMsg}</li>
        </ul>
       </div> }      
       {/* <div className="success mt-4">
        <ul>
          <li><i class="fa-solid fa-check"></i>Account Created SuccessFully</li>
        </ul>
       </div> */}
      <InputField onChange={getUseName} required type='text' placeholder="Username" iconName="fa-solid fa-user"/>
      <InputField onChange={getEmail} required type='email' placeholder="Email" iconName="fa-solid fa-envelope"/>
      <InputField onChange={getPassword} required type='password' placeholder="Password" iconName="fa-solid fa-lock"/>
      <InputField onChange={getConfirmPassword} required type='password' placeholder="Confirm Password" iconName="fa-solid fa-lock-hashtag"/>
      <button class="btn mt-4 font-bold w-full text-[#002347] bg-[#fdc632] hover:bg-[#fdc632]  border-none">Submit Now</button>
      <span className='mt-11 block text-center text-white'>Already have an account? <Link to="/login" className='text-[#fdc632]'>Login</Link> instead</span>
     </FormForSignUpandLogin> 
     </div>
  </div>
</>
)
}
