import React from 'react'
import { PiSignIn, PiSignInBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className='sticky top-0 z-10 bg-white shadow-md flex justify-between items-center py-1 px-2'>
        <Link to={'/'}><img className='max-w-12' src='./icon.webp' alt='Logotipo do Bola na Rede.' /></Link>
        <Link to={'/login'}>
        <div className='flexbox gap-1 items-center text-cyan font-bold border-2 px-1 py-1 shadow-sm rounded-md'>    
            <p className='text-xs'>ENTRAR</p>
            <PiSignInBold className='text-lg ' />
        </div>
        </Link>

      </header>

    </>

  )
}
