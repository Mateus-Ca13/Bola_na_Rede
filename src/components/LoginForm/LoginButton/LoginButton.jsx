import React from 'react'

export default function LoginButton({children}) {
  return (
    <button type='submit' className='mt-3 py-2 w-full bg-cyan rounded-md font-semibold text-white'>{children}</button>
  )
}
