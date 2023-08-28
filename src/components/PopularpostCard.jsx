import React from 'react'
import '../scss/Popularpost.scss'
import media from '../assets/media.webp'
export default function PopularpostCard() {
  return (
    <div class="media flex  mt-4">
    <a  class="flex mr-5" href="#">
        <img className='h-16 w-32' src={media} alt=""/>
    </a>
    <div class="media-body">
        <div class="p-0 flex ">
            <p className='text-[#002347] font-semibold'><a href="">Space The Final Frontier</a></p>
        </div>
        <p style={{marginTop: '2px' , fontSize: '14px'}} >2 Hours Ago</p>
    </div>
</div>
  )
}
