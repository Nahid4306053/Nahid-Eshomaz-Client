import React from 'react'
import '../scss/UserblogLists.scss'
import BlogThumnail from './BlogThumnail'
export default function BlogTbody() {
  return (
    <tbody>
    {/* row 1 */}
    <tr>
     <BlogThumnail/>        
       <th> 
        <p className='blog_title'> amet consectetur adipisicing elit.</p>
      </th>
      <td><i class="fa-solid fa-heart"></i> 350</td>
      <td><i class="fa-solid fa-comment"></i> 350</td>

      <td className='actions'>
      <div className="tooltip" data-tip="Preview the Post">
      <i class="fa-solid fa-eye"></i>
    </div>        
    <div className="tooltip" data-tip="Edit The Post">
    <i class="fa-solid fa-pen-to-square"></i>
    </div>       
     <div className="tooltip" data-tip="Delete">
     <i class="fa-solid fa-trash-can"></i>
    </div>
    </td>
    </tr>
  </tbody>  
  )
}
