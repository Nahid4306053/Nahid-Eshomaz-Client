import React from 'react'
import '../scss/UserblogLists.scss'
import BlogThumnail from './BlogThumnail'
import BlogListTableHead from './BlogListTableHead'
import BlogPagination from './BlogPagination'
import BlogTbody from './BlogTbody'
export default function UserBlogList({controllpost}) {
  return (
    <>
 <div className="table_container relative flex flex-col overflow-auto h-[90%]">
  <table className="table   ">
    {/* head */}
     <BlogListTableHead/>
      <BlogTbody/>
      <BlogTbody/>
      <BlogTbody/>
      <BlogTbody/>
      <BlogTbody/>
      <BlogTbody/>
      <BlogTbody/>

    {/* foot */}
  </table>

</div>
    <div className=" bg-white flex items-center justify-between  w-full top-[calc(100%-80px)]">
    <BlogPagination/>
    <button onClick={controllpost} className='btn  transition-all duration-500 mt-5 hover:text-[#002347] font-bold bg-[#002347]  text-[#fdc632] hover:bg-[#fdc632]'>Add New post</button>
    </div>
  </>
  
  )
}
