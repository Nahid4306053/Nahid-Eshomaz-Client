import React, { useState } from 'react'
import user from '../assets/user.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../components/Context/Authinicetion';
export default function Account() {
  const [openUserPopup , setUserPopup] = useState(false);
  const {currentUser , Logout} = useAuth(); 
   const openUserDetails = () =>{
      if(openUserPopup){
        setUserPopup(false)
      } 
      else{
        setUserPopup(true)
      }
   }
return (
<li> <a className=' relative ml-5 text-[#002347] font-bold flex items-center mr-3 cursor-pointer'>
    <div className="avatar dropdown">
      <div className="h-10 rounded-full ring ring-blue-950 ring-offset-base-100 ring-offset-2">
        <img onClick={openUserDetails} src={user} />
      </div>
      {/* User popup deatils */}
      {
         openUserPopup && (
          <ul className="absolute p-5 flex flex-col items-center -ml-28 w-60 mt-3 border bg-base-200  shadow-lg shadow-gray-400">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-blue-950 ring-offset-base-100 ring-offset-2">
            <img src={user} />
            </div>
          </div>
           <h1  className='userName mt-3 capitalize text-xl font-bold text-[#002347]'>{currentUser && currentUser.displayName}</h1>
          <div className="">
          <Link to="/profile">          
          <button className="btn  hover:bg-[#002347] text-white bg-[#002347] mt-3">profile</button></Link>
          <Link to="/login">
          <button onClick={Logout} className="btn  hover:bg-[#002347] text-white bg-[#002347] mt-3">log out</button>
            </Link>  
          </div>
        </ul>
         )
      }
    </div>
  </a></li>
)
}
