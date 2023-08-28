import { get, getDatabase , query, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'

export default function useCategoreList(permision) {
  const [catgorey , setcategorey] =useState();
  const [loading , setloading] = useState(true);
  const [erromsg , seterrormsg] = useState("");

   useEffect(()=>{
    async function fetchdta(){
      try{
         const db = getDatabase();
         const ctgoreyref = ref(db , "Categoreys");
         const ctgoreyqurey = query(
          ctgoreyref
          ); 
          const getdata = await get(ctgoreyqurey);
          console.log(getdata.val());    
          if(getdata.exists()){
             setcategorey(getdata.val());
             setloading(false)
          }    
      }
        catch(error){
          seterrormsg(error);
          setloading(true);
          console.log(error);
      }
      }
      fetchdta();
   },[permision])
  
  return {
    catgorey,
    loading,
    erromsg,
    
  }

}