import React from 'react'
import '../scss/BlogCard.scss'
import GoogleIcons from '../components/GoogleIcons'
import useFindUser from './Hooks/useFindUser'
export default function BlogCardDetails({date , author}) {
    useFindUser()
  return (
    <div className="col-span-12 md:col-span-3">
    <div className="info mt-4 mr-2">
        <ul>
            <li> <p><a href="">Food,</a><a className="active" href="">Technology,</a><br/>
            <a href="">Politics,</a><a href="">Lifestyle,</a></p>
            </li>
            <li className="infos flex justify-end items-center "><a  href="">Mark weans</a><GoogleIcons classess="font-bold ml-1 text-[#002347]"  name="person" /></li>                
            <li className="infos flex justify-end items-center "><a  href="">28 Auguest , 2021</a><GoogleIcons classess="font-bold ml-1 text-[#002347]"  name="calendar_month" /></li>               
             <li className="infos flex justify-end items-center "><a  href="">1.2M Views</a><GoogleIcons classess="font-bold ml-1 text-[#002347]"  name="visibility" /></li>                
             <li className="infos flex justify-end items-center "><a  href="">06 Comments</a><GoogleIcons classess="font-bold ml-1 text-[#002347]"  name="comment" /></li>
        </ul>
    </div>
</div>
  )
}
