import React from 'react'

export default function InputField({ placeholder , type , iconName , ...rest}) {
  return (
    <div class="form-control mt-4"><label class="input-group">
        <input type={type}
    placeholder={placeholder} {...rest}
    
    class="input input-bordered w-full placeholder:text-[#002347] placeholder:font-bold font-bold bg-[#ffffff] text-[#002347]" />
    <span
    class="bg-[#fdc632] text-[#002347] w-12 overflow-hidden font-bold"><i class={` text-[#002347] ${iconName}`}></i></span></label></div>

  )
}
