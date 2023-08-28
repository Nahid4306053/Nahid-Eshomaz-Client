import React, { useEffect, useMemo, useState } from 'react'
import Mainlayout from '../Mainlayout'
import Sidebar from '../Sidebar'
import BlogCard from '../BlogCard'
import Search from '../Search'
import User from '../User'
import PopularPost from '../PopularPost'
import PostCategorey from '../PostCategorey'
import BlogTags from '../BlogTags'
import BlogPagination from '../BlogPagination'
import usepostList from '../Hooks/Postlist'
import postcss from 'postcss'
import _, { cloneDeep } from 'lodash';
import useblogspaths from '../Hooks/blogspaths'
export default function Blogs() { 
   const [pages , setpages] = useState(['0uxtxk','start']);
   const [paths , setpaths] = useState(); 
   const {post } =  usepostList(pages)
   const startPage = (page , destinetion) =>{
       setpages([page , destinetion]);   
       window.scrollTo(0,0);
   }   
   const endPage = (page) =>{
       setpages(page);   
       console.log(page);
   }
   useEffect(()=>{
 
      window.scrollTo(0,0);
   },[post])  
   return (
  
       <div className="col-span-full  lg:pr-10 lg:col-span-8">   
       <Mainlayout>          
         { post && _.map(post,(ele,key)=>{
           return <BlogCard paths={_.keys(post)} path={key} key={key} element={ele}/>
         })}       
             
            <br/>
            <br/>
            <br/>
            <BlogPagination paths={post && _.keys(post)} endpage={endPage} startpage={startPage}/> 
        </Mainlayout>  
       </div>            
  )
}
