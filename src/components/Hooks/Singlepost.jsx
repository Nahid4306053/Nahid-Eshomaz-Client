import { get, getDatabase , query, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'

export default function useSinglepost(path) {
  const [post , setpost] =useState();
  const [loading , setloading] = useState(false);
  const [erromsg , seterrormsg] = useState("");

   useEffect(()=>{
    async function fetchdta(){
      try{
         const db = getDatabase(); 
         const postref = ref(db , `posts/${path}`);
         const postqurey = query(
          postref
          ); 
          const getdata = await get(postqurey);   
          if(getdata.exists()){
             setpost(getdata.val());
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
   },[path])
  
  return {
    post,
    loading,
    erromsg,
    
  }

}