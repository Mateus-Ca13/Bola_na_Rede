import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { Link } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { RiMenu3Line } from "react-icons/ri";

export default function Header() {
  const [state, setState] = useState(false)

  //Define a trava do scroll da página
  useEffect(() => {
    state ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  }, [state])

  return (
    <>
      <AnimatePresence>
        {state && <HeaderMenu setMenuState={setState}/>}
      </AnimatePresence>

      <header className='sticky top-0 z-10 bg-white shadow-md flex justify-between items-center py-1 px-2'>
        <Link to={'/'}><img className='max-w-12' src='./icon.webp' alt='Logotipo do Bola na Rede.' /></Link>
        <motion.button initial={false} whileTap={{ scale: [1.0, 0.9, 1.0], transition: { duration: 0.1 } }} onClick={() => { setState(true) }}>
          <RiMenu3Line className='size-6 mx-1' />
        </motion.button>
      </header>

    </>

  )
}
