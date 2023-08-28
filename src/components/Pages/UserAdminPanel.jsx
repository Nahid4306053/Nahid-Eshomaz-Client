import React, { useState } from 'react'
import Mainlayout from '../Mainlayout'
import Sidebar from '../Sidebar'
import BlogCard from '../BlogCard'
import Search from '../Search'
import User from '../User'
import PopularPost from '../PopularPost'
import PostCategorey from '../PostCategorey'
import BlogTags from '../BlogTags'
import BlogPagination from '../BlogPagination'
import UserBlogList from '../UserBlogList'
import EditPost from '../EditPost'
import EditProfile from '../EditProfile'

export default function UserAdminPanel() {
    const [showPostEditior , setShowpostEditor] = useState(false);
    const [showUserProfileEditior , setUserProfileEditior] = useState(false);

    const controlllPostEditor = () =>{
       if(showPostEditior){
        setShowpostEditor(false);
       }
       else{
        setShowpostEditor(true)
       }
    }    
    const controlluserProfileEditor = () =>{
       if(showUserProfileEditior){
         setUserProfileEditior(false);
       }
       else{
         setUserProfileEditior(true)
       }
    }


  return (
       <>
   <div className="container mx-auto   mt-20">
    <div className="grid grid-cols-12 "> 
       <div className="col-span-full shadow-slate-400 border-t-2 mt-10  lg:h-[800px] p-5 lg:mr-10 flex flex-col items-end lg:col-span-4 shadow-lg bg-white">
       <Sidebar>
          <User controllProfile={controlluserProfileEditor}/>
       </Sidebar>   
      </div>   
      <div className="col-span-full mt-10 shadow-lg p-5 border-t-2 shadow-slate-400  lg:h-[800px] bg-white lg:pr-10 lg:col-span-8">
      <Mainlayout>   
          <UserBlogList controllpost={controlllPostEditor}/>
       </Mainlayout>  
       
      </div>
           
    </div>
   </div>
    {showPostEditior && <EditPost controllpost={controlllPostEditor}/>}
    {showUserProfileEditior && <EditProfile controllProfile={controlluserProfileEditor} />}
     
     </> 
  )
}
