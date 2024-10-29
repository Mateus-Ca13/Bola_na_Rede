import React from 'react'

export default function Card({ title, children, background}) {

    return (
    <div className={`${background} bg-cover text-white text-xs h-44 pt-14 flex flex-col justify-end rounded-md my-4`}>
       <span className='bg-gradient-to-t from-[#001a47e3] to-transparent rounded-md py-4 px-2'>
        <h4 className='font-semibold text-base mb-1'>{title}</h4>
        <p>{children}</p>
        </span> 
    </div>
  )
}
