import React from 'react'
import blogimg from '../assets/blog.webp'
import user from '../assets/user.png'
import '../scss/BlogCard.scss'
import GoogleIcons from '../components/GoogleIcons'
import BlogCardDetails from './BlogCardDetails'

export default function BlogFullPreviewCard({element}) {
  return (
    <div className="grid grid-cols-12 mt-10">
     <div className="col-span-12">
     <h3 ><a className='text-3xl text-[#002347] font-bold'>{element.Contentent.title}</a></h3> 
     <div className="mt-3  py-2 cata_gorey">
        <ul> 
            <li className='text-start'> <p><a href=""><i class="fa-solid fa-folder"></i> Food,</a> <a className="active" href=""> <i class="fa-solid fa-folder"></i> Technology,</a>
            <a href=""> <i class="fa-solid fa-folder"></i> Politics,</a><a href=""> <i class="fa-solid fa-folder"></i> Lifestyle,</a></p>
              </li>
        </ul>
    </div>  
     <img  src={element.Contentent.postbanner} className=" w-full " alt=""/>
      </div>   
            
   {/* <!-- this is content part --> */}
   <div className="col-span-12  content-part-2 w-full  ">
   <div className="col-span-12 md:col-span-3">
    <div className="flex blog_details bg-gray-300 px-3">
        <ul className='flex  justify-between w-full my-3 '> 
            <li className="infos flex justify-end items-end "><img className='h-7 mr-1' src={user} alt="" /><a   className='font-semibold hover:text-[#3a3835]' href="">Nahid Hasan</a></li>                 
            <li className="infos flex justify-end items-end "><GoogleIcons classess="font-bold mr-1 text-[#002347]"  name="calendar_month" /><a  className='font-semibold' href="">28 Auguest , 2021</a></li>               
             <li className="infos flex justify-end items-end "><GoogleIcons classess="font-bold mr-1 text-[#002347]"  name="visibility" /><a  className='font-semibold' href="">1.2M Views</a></li>                
             <li className="infos flex justify-end items-end "><GoogleIcons classess="font-bold mr-1 text-[#002347]"  name="comment" /><a className='font-semibold hover:text-[#3a3835]'  href="">06 Comments</a></li>
        </ul>
    </div>
</div>
       {/* <!-- this is  header --> */}
       {/* <!-- this is line --> */}{/*style="margin-top: 10px;line-height: 26px;"*/}
       <p style={{margin:"10px auto" , lineHeight: "26px"}} >
         {element.Contentent.description}

       </p>
       {/* <!-- this is  header --> */}

   {/* </div> <!-- this is content part --> */}
    </div>   
  
  </div>
  )
}
