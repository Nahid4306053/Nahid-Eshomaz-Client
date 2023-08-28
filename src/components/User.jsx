import React, { useEffect, useState } from 'react'
import user from '../assets/user.png'
import '../scss/User.scss'
import { useLocation } from 'react-router-dom'
import { useAuth } from './Context/Authinicetion'
export default function User({controllProfile}) { 
    const {currentUser} = useAuth();   
    const windowlocation = useLocation();
    const [showEditprofileButton , setEditprofileButton] = useState(false); 
    useEffect(()=>{
        if(windowlocation.pathname === "/profile"){
            setEditprofileButton(true);
        }
        else{
            setEditprofileButton(false);
        }
    },[windowlocation])
return (
   
<div className='flex flex-col items-center mt-10'>
    <img className='h-64 rounded-full'  src={user} alt=""/>
    <div className="card-body text-center">
        <p className="text-[#002347] text-xl font-bold" >{currentUser && currentUser.displayName}</p>
        <p  className="text-lg">Sr. web designer</p>
        <div className="social-icons mt-3 mb-3">
            <a href="https://www.facebook.com/mdnahidhosan.nahid.7"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="icofont-twitter"></i></a>
            <a href="/"><i className="icofont-instagram"></i></a>
            <a href="/"><i className="icofont-youtube-play"></i></a>
        </div>
        <p className='leading-7 text-lg text-[#00234774]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur natus
        quibusdam deserunt, molestiae aliquid iure nobis temporibus assumenda quasi demon nihil.</p>

        {showEditprofileButton && <button onClick={controllProfile} className='btn mt-4 transition-all duration-500  hover:text-[#002347] font-bold bg-[#002347]  text-[#fdc632] hover:bg-[#fdc632]'>Edit Profile</button> }
    </div>
</div>
)
}
