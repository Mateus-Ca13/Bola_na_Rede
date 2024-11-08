import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function LoginPage() {
  return (
    <main className='h-screen'>
      <LoginForm/>
      <img className='fixed left-1/2 top-0 -translate-x-1/2 z-0 h-1/4 opacity-30' src="./icon.webp" alt="Logotipo do Bola na Rede." />
      <div className='bg-gradient-to-t from-cyan to-blue2  h-1/2'></div>
      <div className='bg-gradient-to-t from-white to-cyan  h-1/2'></div>
    </main>
  )
}
