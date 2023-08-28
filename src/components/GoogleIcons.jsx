import React from 'react'

export default function GoogleIcons({name , classess}) {
  return (
    <span  className={`material-symbols-outlined ${classess}`}>
{name} </span>
  )
}
