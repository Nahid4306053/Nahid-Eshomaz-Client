import React from 'react'
import '../scss/Footer.scss'
import Footerlogo from '../assets/footerlogo.png'
export default function Footer() {
  return (
    <>
 <footer >
  <div className="container mx-auto">
    <div className="footer_log pb-20 container mx-auto flex justify-center">
    <img className='h-52' src={Footerlogo} alt="" />
  </div>
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-8">
         <div className="grid grid-cols-12">
          <div className="col-span-12  md:col-span-6 lg:col-span-3">
            <h3 className="mb-4 font-bold text-2xl text-white">Top Products</h3>
            <ul className="p-0">
              <li><a href="">Managed Website</a></li>
              <li><a href="">Manage Reputation</a></li>
              <li><a href="">Power Tools</a></li>
              <li><a href="">Marketing Service</a></li>
            </ul>
          </div>        
          <div className="col-span-12  md:col-span-6 lg:col-span-3">
            <h3 className="mb-4 font-bold text-2xl text-white">Quick Links</h3>
            <ul className="p-0">
              <li><a href="">Jobs</a></li>
              <li><a href="">Brand Assets</a></li>
              <li><a href="">Investor Relations</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>           
          <div className="col-span-12  md:col-span-6 lg:col-span-3">
            <h3 className="mb-4 font-bold text-2xl text-white">Features</h3>
            <ul className="p-0">
              <li><a href="">Jobs</a></li>
              <li><a href="">Brand Assets</a></li>
              <li><a href="">Investor Relations</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>        
          <div className="col-span-12  md:col-span-6 lg:col-span-3">
            <h3 className="mb-4 font-bold text-2xl text-white">Resources</h3>
            <ul className="p-0">
              <li><a href="">Guides</a></li>
              <li><a href="">Research</a></li>
              <li><a href="">Experts</a></li>
              <li><a href="">Agencies</a></li>
            </ul>
          </div>        
        </div>
      </div>
      <div className="col-span-12  md:col-span-6 lg:col-span-3">
        <div className="">
          <h3 className="mb-4 font-bold text-2xl text-white">Newsleter</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <form  method="post">
           <div className="form-control">
             <label className="label">
             </label>
             <label className="input-group">
               <input type="text" placeholder="info@site.com" className="input input-bordered placeholder:text-white  bg-[#ffffff21] text-white" /> 
               <span className='bg-[#fdc632] text-[#002347] font-bold'>Subscribe</span>
             </label>
           </div>
           </form>
        </div>
      </div>
    </div>
    <div className="mt-7 p-0 flex flex-col lg:flex-row justify-between align-center">
    {/* "font-size: 17px; color: white ; line-height: 25px;" */}
     <p className="cop_text text-center text-lg-start" style={{fontSize:'17px',color:'white' , lineHeight: '25px'}}>Copyright ©2023 All rights reserved | This template is made by  Md Nahid Hasan</p>
     <div className="social">
       <div className="icon flex md:mt-5 mt-5 mt-lg-0">
         <div className="item"><a href=""><i className="text-[#002347] icofont-facebook"></i></a></div>
         <div className="item"><a href=""><i className="text-[#002347] icofont-twitter"></i></a></div>
         <div className="item"><a href=""><i className="text-[#002347] icofont-linkedin"></i></a></div>
         <div className="item"><a href=""><i className="text-[#002347] icofont-youtube"></i></a></div>
       </div>
     </div>
    </div>
  </div>
</footer>
</>
  )
}
