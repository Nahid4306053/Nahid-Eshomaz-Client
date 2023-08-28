import React from 'react'
import blogimg from '../assets/blog.webp'
import '../scss/BlogCard.scss'
import BlogCardDetails from './BlogCardDetails'
import { Link } from 'react-router-dom';
import _ from 'lodash'
export default function BlogCard({element , path , paths}) {
   const prevpost = paths[paths.indexOf(path) - 1] ;
   const nextpost = paths[paths.indexOf(path) + 1] ;
  return (
      <>
     <div className="grid grid-cols-12 mt-10">
     <BlogCardDetails date={element.Contentent.postdate} author={element.Contentent.userid}/>
    {/* <!-- this is content part --> */}
    <div key={element.postId} className="col-span-12 md:col-span-9 content-part-2 px-2 ">
        <img src={element.Contentent.postbanner} className=" w-full mb-8" alt=""/>
        {/* <!-- this is  header --> */}
        <h3 className=''><Link to={`/post/${path}`} state={[prevpost,nextpost , paths]}>{element.Contentent.title}</Link></h3>
        {/* <!-- this is line --> */}{/*style="margin-top: 10px;line-height: 26px;"*/}
        <p style={{margin:"15px auto" , lineHeight: "26px"}} >
           {element.Contentent.description.slice(0 , 284) +"...."}
        </p>
         <Link to={`/post/${path}`} state={[prevpost,nextpost,paths]}><button className="mt-2"><a href="">Read More</a></button></Link>
        {/* <!-- this is  header --> */}

    {/* </div> <!-- this is content part --> */}
     </div>    
   
   </div>
   </>
  )
}
