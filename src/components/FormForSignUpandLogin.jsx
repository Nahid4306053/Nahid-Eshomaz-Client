import React from 'react'

export default function FormForSignUpandLogin({children , ...rest}) {
  return (

    <form className='w-full'  {...rest}>
      {children}
    </form>

  )
}
