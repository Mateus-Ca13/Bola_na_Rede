import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <main className='min-h-screen bg-fadeFull flex flex-col justify-start items-center'>
      <img className='w-32 my-2' src="./icon2.png" alt="Logotipo do Bola na Rede." />
      <LoginForm/>
    </main>
  )
}
