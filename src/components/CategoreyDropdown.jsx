import React from 'react'
import GoogleIcons from '../components/GoogleIcons'
import useCategoreList from './Hooks/Catgoreylist'


export default function CategoreyDropdown() {
    const {catgorey , loading , erromsg} = useCategoreList(true);

  return (
    <li className='dropdown dropdown-hover'  ><a tabindex="0" className='text-[#002347] font-bold flex items-center mr-5 cursor-pointer'>Categories<GoogleIcons classess="font-bold text-[#002347]" name={'expand_more'}/>  </a>

    <ul tabIndex="0" className="dropdown-content z-[1] rounded-lg overflow-hidden  shadow-lg shadow-gray-400 bg-base-200   w-52">

    {
     catgorey &&  catgorey.map((element )=>{
     return  <li key={element.categoreyId} className='py-3 px-3 cursor-pointer hover:bg-[#0023479b]' ><a className='capitalize text-[#002347] font-bold mr-3 cursor-pointer'>{element.categoreyName}</a></li>
     })
    } 
    </ul>
    
    </li>
  )
}
