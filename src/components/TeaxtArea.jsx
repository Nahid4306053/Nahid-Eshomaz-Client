import React from 'react'

export default function TeaxtArea({classes ,charecterMaxlenth,placeholder,charecter,...rest}) {
  return (
    <div className="form-control">
  <label className="label flex w-full justify-end">
    <span className={`label-text ${charecter.length > parseInt(charecterMaxlenth) ? "text-red-600" : "text-[#fdc632]"} `}>{charecter.length}/{parseInt(charecterMaxlenth)}</span>
  </label>
  <textarea {...rest} style={{resize:"none"}} className={`text-lg font-bold text-[#002347] placeholder:text-[#002347] textarea textarea-bordered  ${classes}`} placeholder={placeholder}></textarea>
</div>
  )
}
