import React from 'react'
import { RiMenu3Line } from "react-icons/ri";

export default function Header() {
  return (
    <header className='shadow-md flex justify-between items-center py-1 px-2'>
        <img className='max-w-16' src='./icon.png' alt='Logotipo do Bola na Rede.'/>
        <RiMenu3Line className='size-7'/>
    </header>
  )
}
