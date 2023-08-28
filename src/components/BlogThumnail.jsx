import React from 'react'
import media from '../assets/media.webp'
export default function BlogThumnail() {
  return (
    <td>
    <div className="flex items-center space-x-3">
      <div className="avatar">
        <div className=" w-24 h-16">
          <img className='w-full' src={media} alt="" />
        </div>
      </div>
    </div>
  </td>
  )
}
