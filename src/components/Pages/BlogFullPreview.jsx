import React, { useEffect } from 'react'
import Mainlayout from '../Mainlayout'
import BlogFullPreviewCard from '../BlogFullPreviewCard'
import BlogPreviewPagination from '../BlogPreviewPagination'
import CommentList from '../CommentList'
import Comment_form from '../Comment_form'
import { useLocation, useParams } from 'react-router-dom'
import useSinglepost from '../Hooks/Singlepost'
export default function BlogFullPreview() {
    const {id} = useParams();
    const {state} = useLocation();
    const {post} = useSinglepost(id);
    useEffect(()=>{
      window.scrollTo(0,0);
    },[id,post])
    return (

         <div className="col-span-full lg:pr-10 lg:col-span-8">
         <Mainlayout>   
             {post && <BlogFullPreviewCard element={post}/>}
             <BlogPreviewPagination state={state}/>  
             <CommentList/>
             <Comment_form/>   
          </Mainlayout>  
         </div>             
    )
  }
