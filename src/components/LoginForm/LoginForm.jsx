import React, { useState } from 'react'
import { motion } from "framer-motion"
import SigninEntry from './SigninEntry/SigninEntry'
import SignupEntry from './SignupEntry/SignupEntry'
export default function LoginForm() {
  const [entryMode, setEntryMode] = useState('login')

  return (
    <section className='fixed bg-white left-1/2 -translate-x-1/2 top-1/4  w-1/2 min-w-80 rounded-lg z-20'>
      <div className='flex justify-around border-b-2 border-gray1'>
        <span className={`${entryMode == 'login' ? 'active' : 'disabled'} left-12 my-3 z-10 w-full`}>
          <button onClick={() => { setEntryMode('login') }}
            animate={{ duration: 0.3 }}
            className='w-full'>LOGIN</button>
        </span>
        <span className={`${entryMode == 'sign' ? 'active' : 'disabled'} right-12 my-3 z-10 w-full`}>
          <button onClick={() => { setEntryMode('sign') }}
            animate={{ duration: 0.3 }}
            className='w-full'>CADASTRO</button>
        </span>
      </div>
      <motion.span animate={entryMode == 'login' ? { left: 4, right: 'auto' } : { right: 4, left: 'auto' }} className={'rounded-lg absolute w-1/2 h-10 bg-cyan top-1 text-center'}></motion.span>
      <div className='columnbox my-2'>


        {entryMode == 'login' ? <SigninEntry/> : <SignupEntry/>}
      </div>
    </section>
  )
}
