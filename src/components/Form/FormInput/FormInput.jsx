import React from 'react'

export default function FormInput({label, type, placeholder}) {
  return (
    <div className='flex flex-col items-start my-2 '>
        <label htmlFor={label}
        className='font-semibold'>{label}</label>
        
        <input id={label} type={type} placeholder={placeholder}
        className='bg-gray rounded-md p-1 w-full px-2'></input>
    </div>
  )
}
