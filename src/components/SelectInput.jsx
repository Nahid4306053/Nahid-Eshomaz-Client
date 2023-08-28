import React from 'react'
import '../scss/Selectarea.scss'
import useCategoreList from './Hooks/Catgoreylist'
export default function SelectInput({...rest}) {
   const {catgorey} =  useCategoreList(true);
  return (
  <select {...rest} className="select  w-full">
  <option disabled selected>Select a post Categorey</option>
   { catgorey && 
    catgorey.map((ele)=>{
      return (
        <option value={ele.categoreyId} key={ele.categoreyId}>{ele.categoreyName}</option>
      )
    })
    
   }

</select>
  )
}
