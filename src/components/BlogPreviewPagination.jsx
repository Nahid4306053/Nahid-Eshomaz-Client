import React from 'react'
import media from '../assets/media.webp'
import '../scss/BlogPreviewPagination.scss' 
import useSinglepost from './Hooks/Singlepost'
import { Link } from 'react-router-dom';
import useblogspaths from './Hooks/blogspaths';
import usepostList from './Hooks/Postlist';
export default function BlogPreviewPagination({state}) {
    const {post:prevpost} = useSinglepost(state[0]);  
    const {post:nextpost} = useSinglepost(state[1]);
    const forprevPrevpost = state[2][state[2].indexOf(state[0]) - 1];
    const forprevNextpost = state[2][state[2].indexOf(state[0]) + 1];
    const forNextprevpost = state[2][state[2].indexOf(state[1]) - 1];
    const forNextNextpost = state[2][state[2].indexOf(state[1]) + 1];

    return (

    <div  className="bottom-section mt-5 flex justify-between w-full ">

       { 
        prevpost ?
        <div className="media pages-turn flex items-center mt-4">
           <Link className="flex pages mr-5" state={[forprevPrevpost , forprevNextpost , state[2]]} to={prevpost && `/post/${state[0]}`}>
               <img className='h-14 w-24' src={prevpost ? prevpost.Contentent.postbanner : media} alt="" />
               <div className="ico-arow">
                   <i className="icofont-arrow-left text-white"></i>
               </div>
           </Link>

           <div className="media-body">
               <p>Previous Post</p>
               <div className="p-0 d-flex ">
                   <h4 className='text-[color:#002347] font-semibold -mt-1 cursor-pointer'>{prevpost.Contentent.title.slice(1,20)+"..."}</h4>
               </div>
           </div>
       </div>
       :
       <p></p>
       }


       
      {
         nextpost ?

         <div className="media pages-turn flex align-items-center mt-4">
         <div className=" text-end">
             <p>Next Post</p>
             <div className="p-0 d-flex ">
                 <h4 className='text-[color:#002347] font-semibold -mt-1 cursor-pointer' >{"..."+nextpost.Contentent.title.slice(1,20)}</h4>
             </div>
             
         </div>
         <Link  className="flex pages ml-5" state={[forNextprevpost , forNextNextpost , state[2]]} to={nextpost && `/post/${state[1]}`}>
             <img className='h-14 w-24' src={nextpost ? nextpost.Contentent.postbanner : media} alt=""/>
             <div className="ico-arow">
                 <i className="icofont-arrow-right text-white"></i>
             </div>
         </Link>
       </div>
       :
       <p></p>
      }

  </div>
  )
}
