import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
import SigninEntry from './SigninEntry/SigninEntry'
import SignupEntry from './SignupEntry/SignupEntry'
export default function LoginForm() {
  const [entryMode, setEntryMode] = useState('login');
  const loginModeButton = useRef(null);
  const registerModeButton = useRef(null);

  // Desativa temp. para evitar bug da animação do framer motion
  const disableTempButtons = ()=>{
      loginModeButton.current.disabled = true;
      registerModeButton.current.disabled = true;
      setTimeout(()=>{
      loginModeButton.current.disabled = false;
      registerModeButton.current.disabled = false;
      }, 300)
  }

  return (
    <section className=' bg-white relative w-1/2 min-w-80 rounded-lg  mb-20'>
      <div className='flex justify-around border-b-2 border-gray1'>
        <span className={`${entryMode == 'login' ? 'loginActive' : 'loginDisabled'} left-12 my-3 z-10 w-full`}>
          <button ref={loginModeButton} onClick={() => { setEntryMode('login'); disableTempButtons() }}
            animate={{ duration: 0.3 }}
            className='w-full'>LOGIN</button>
        </span>
        <span className={`${entryMode == 'sign' ? 'loginActive' : 'loginDisabled'} right-12 my-3 z-10 w-full`}>
          <button ref={registerModeButton} onClick={() => { setEntryMode('sign'); disableTempButtons() }}
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
