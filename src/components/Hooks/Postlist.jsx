import { child, endAt, get, getDatabase , limitToFirst, orderByChild, orderByKey, query, ref, startAfter, startAt , endBefore} from 'firebase/database'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
export default function usepostList(pages) {
  const [post , setpost] =useState();
  const [loading , setloading] = useState(true);
  const [erromsg , seterrormsg] = useState("");
  const postTokens =  _.keys(post);
  console.log(pages);
   useEffect(()=>{
    async function fetchdta(){
      try{

         const db = getDatabase();
         const postref = ref(db , "posts/");
         const postqurey = query(
          postref,
          orderByKey(),
          pages[1] === 'start' ? startAfter(pages[0]) : endBefore(pages[0]),
          limitToFirst(4)
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
   },[pages])
  
  return {
    post,
    loading,
    erromsg,
    postTokens,
  }

}