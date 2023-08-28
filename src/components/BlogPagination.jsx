import React from 'react'
import '../scss/BlogPagination.scss'
import _, { last } from 'lodash'
export default function BlogPagination({paths , endpage , startpage}) {
const prev = _.first(paths);
const next = _.last(paths)
console.log(paths);
return (
<div class="grid mt-15 ">
    {/*
    <!-- this is content part --> */}
        <div class="col-span-12 w-full  content-part-2 ">
          <div class="pagin mt-5 flex items-center w-full">
            <nav className='mx-auto' aria-label="Page navigation example ">
                <div class="pagination flex m-0 p-0">
                    <div onClick={()=>endpage(prev , 'end')} class="page-item cursor-pointer"><div class="page-link" ><i class="far fa-angle-left font-bold"></i></div></div>   
                    <div class="page-item "><div class="page-link active" >01</div></div>
                    <div class="page-item"><div class="page-link" >02</div></div>
                    <div class="page-item"><div class="page-link" >03</div></div>   
                    <div class="page-item"><div class="page-link" >04</div></div>
                    <div class="page-item"><div class="page-link" >05</div></div>
                    <div onClick={()=>startpage(next , 'start')}  class="page-item cursor-pointer"><div class="page-link" >
                    <i class="far fa-angle-right font-bold"></i></div></div>
                </div>
            </nav>  
        </div>
        {/* <!-- this is content part --> */}
</div>
</div>
)
}
