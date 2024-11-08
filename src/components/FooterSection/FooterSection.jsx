import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function FooterSection() {
  return (
    <footer className='columnbox py-2 px-6'>
           <Link to={'/'}><img className='max-w-16' src='./icon.webp' alt='Logotipo do Bola na Rede.' /></Link>
            <span className='flexbox socialSpan'>
                <BsInstagram className='icon' /><BsLinkedin className='icon' /><BsFacebook className='icon' /><BsTiktok className='icon' />
            </span>
            <p className='text-sm my-3'>© 2024  Bola na Rede️. Todos os direitos reservados.</p>
    </footer>
  )
}
