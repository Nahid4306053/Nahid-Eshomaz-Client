import React from 'react'
import '../scss/Popularpost.scss'
import ad from '../assets/ad.webp'
import PopularpostCard from './PopularpostCard'
export default function PopularPost() {
  return (
    <>
    <div  class=" bg-[#eff6fb]  py-2 w-full  feed-back mt-5">
    {/* <!-- this is  header --> */}
    <h4  class="sub-title w-full">Latest Posts</h4>
    {/* <!-- this is line --> */}
     <PopularpostCard/> 
     <PopularpostCard/>
     <PopularpostCard/>
     <PopularpostCard/>
     </div>

    <div style={{border: '2px solid rgba(128, 128, 128, 0.212)'}} class=" relative mt-5  w-full" >
    <img className='w-full' src={ad} alt=""/>
   </div>
   </>
  )
}
