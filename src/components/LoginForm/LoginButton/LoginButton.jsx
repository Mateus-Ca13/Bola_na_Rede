import React, { useState } from 'react'
import Spinner from '../../Spinner/Spinner'

export default function LoginButton({children, onSubmit}) {

  const [isLoading, setIsLoading] = useState(false)

 async function onSubmitHandler (event){
    setIsLoading(true)
    await onSubmit(event)
    setIsLoading(false)
  }

  return (
    <button 
    onClick={(e)=>{onSubmitHandler(e)}}
    type='submit'
    className='mt-3 py-2 w-full bg-cyan rounded-md font-semibold text-white'
    >{isLoading? <Spinner/> : children}</button>
  )
}
