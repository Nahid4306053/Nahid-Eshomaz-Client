import React from 'react'
import '../scss/CommentList.scss'
import comment1 from '../assets/Comments/comment (1).webp'
import comment2 from '../assets/Comments/comment (2).webp'
import comment3 from '../assets/Comments/comment (3).webp'
import comment4 from '../assets/Comments/comment (4).webp'
import comment5 from '../assets/Comments/comment (5).webp'
export default function CommentList() {
  return (
    <div className="comment ">
    <h4 className='text-[#002347] font-bold text-center mt-24 text-2xl'>Comment 05</h4>
        <ul>
            <li>
                <div className="commentItems come ">
                    <div className="media flex items-center mt-4">
                        <a  className="flex pages mr-5" href="#">
                            <img  className="h-15 w-15"src={comment1} alt=""/>
                        </a>
                        <div className="media-body mt-4 ">
                            <div className="p-0 flex ">
                                <p  className='text-[color:#002347;] font-semibold'>Emilly Blunt</p>
                            </div>
                            <p className='font-semibold -mt-1'>December 4, 2017 at 3:12 pm </p>
                            <p className='mt-1'>Never say goodbye till the end commentItems comes! </p>
                        </div>
                    </div>
                    <a className="Replay" href="">Reply</a>
                </div>
                <ul className='repleyList ml-11'>
                    <li>
                        <div className="commentItems come">
                            <div className="media flex items-center mt-4">
                                <a  className="flex pages mr-5" href="#">
                                    <img  className="h-15 w-15"src={comment2} alt=""/>
                                </a>
                                <div className="media-body mt-4 ">
                                    <div className="p-0 flex ">
                                        <p className='text-[color:#002347;] font-semibold'>Emilly Blunt</p>
                                    </div>
                                    <p className='font-semibold -mt-1'>December 4, 2017 at 3:12 pm </p>
                                    <p className='mt-1'>Never say goodbye till the end commentItems comes! </p>
                                </div>
                            </div>
                            <a className="Replay" href="">Reply</a>
                        </div>
                    </li>
                   
                    <li>
                        <div className="commentItems come">
                            <div className="media flex items-center mt-4">
                                <a  className="flex pages mr-5" href="#">
                                    <img  className="h-15 w-15"src={comment3} alt=""/>
                                </a>
                                <div className="media-body mt-4 ">
                                    <div className="p-0 flex ">
                                        <p className='text-[color:#002347;] font-semibold'>Emilly Blunt</p>
                                    </div>
                                    <p className='font-semibold -mt-1'>December 4, 2017 at 3:12 pm </p>
                                    <p className='mt-1'>Never say goodbye till the end commentItems comes! </p>
                                </div>
                            </div>
                            <a className="Replay" href="">Reply</a>
                        </div>
                    </li>
                </ul>
            </li> 

            <li>
                <div className="commentItems come">
                    <div className="media flex items-center mt-4">
                        <a  className="flex pages mr-5" href="#">
                            <img  className="h-15 w-15"src={comment4} alt=""/>
                        </a>
                        <div className="media-body mt-4 ">
                            <div className="p-0 flex ">
                                <p className='text-[color:#002347;] font-semibold'>Emilly Blunt</p>
                            </div>
                            <p className='font-semibold -mt-1'>December 4, 2017 at 3:12 pm </p>
                            <p className='mt-1'>Never say goodbye till the end commentItems comes! </p>
                        </div>
                    </div>
                    <a className="Replay" href="">Reply</a>
                </div>
            </li> 
            <li>
                <div className="commentItems come">
                    <div className="media flex items-center mt-4">
                        <a  className="flex pages mr-5" href="#">
                            <img  className="h-15 w-15"src={comment5} alt=""/>
                        </a>
                        <div className="media-body mt-4 ">
                            <div className="p-0 flex ">
                                <p className='text-[color:#002347;] font-semibold'>Emilly Blunt</p>
                            </div>
                            <p  className='font-semibold -mt-1'>December 4, 2017 at 3:12 pm </p>
                            <p className='mt-1'>Never say goodbye till the end commentItems comes! </p>
                        </div>
                    </div>
                    <a className="Replay" href="">Reply</a>
                </div>
            </li>
        </ul>
  </div>
  )
}
