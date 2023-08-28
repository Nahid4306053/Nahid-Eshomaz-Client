import React from 'react'
import Search from '../components/Search'
import User from '../components/User'
import Sidebar from '../components/Sidebar'
import PopularPost from '../components/PopularPost'
import PostCategorey from '../components/PostCategorey'
import BlogTags from '../components/BlogTags'
export default function DefultSidebar() {
  return (
    <div className="col-span-full mt-10 lg:pl-10 flex flex-col items-end lg:col-span-4">
    <Sidebar>
        <Search/>
        <User/>
        <PopularPost/>
        <PostCategorey/>
        <BlogTags/>
     </Sidebar>   
    </div>
  )
}
