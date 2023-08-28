import React from 'react'
import GoogleIcons from './GoogleIcons'

export default function Search() {
  return (
       <div className=" rounded-full w-full bg-[#002347] px-4 py-1">
     <label className="flex items-center"> 
       <input type="text"  placeholder="Search posts" className="text-white placeholder:text-white text-lg bg-[#002347] w-full px-2 py-2 focus:outline-none"  /> 
       <span className=' text-lg px-2 py-2 font-bold '><i className='text-white icofont-search font-bold'></i></span>
     </label>
   </div>
  )
}
