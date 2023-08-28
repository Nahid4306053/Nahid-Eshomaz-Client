import React, { Fragment, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './FooterLayout'
import { useLocation } from 'react-router-dom'
import DefultSidebar from '../components/DefultSidebar'


export default function WebLayout({children}) {
   const windowlocation = useLocation();
  useEffect(()=>{
    if(windowlocation.pathname === '/login'){
      document.title = "Log in - Nahid Eshomaz"
    }    
    else if(windowlocation.pathname === '/signup'){
      document.title = "Sign Up - Nahid Eshomaz"
    }    
    else if(windowlocation.pathname === '/post'){ 
      document.title = "Post - Nahid Eshomaz"
    }   
    else{
      document.title = "Nahid Eshomaz"
    }
   console.log(windowlocation);
  },[windowlocation]) 

  return (
    <> 
      <Navbar/>
      
      {windowlocation.pathname.includes('/post') || windowlocation.pathname === ('/') ?
       (     
       <> 
       <div className="container mx-auto   mt-20">
       <div className="grid grid-cols-12 "> 
       {children}
       <DefultSidebar/>
       </div>
       </div>
       </>
       ) :
       (
        <>
        {children}
        </>
        ) 
      }
      <Footer/>
    </>
  )
}
