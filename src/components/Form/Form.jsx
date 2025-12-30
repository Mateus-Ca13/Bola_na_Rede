import React from 'react'
import FormInput from './FormInput/FormInput'

export default function Form() {
  return (
    <form className='px-6 py-6 drop-shadow shadow-xl bg-white rounded-lg'>
        <FormInput label={"Nome"} placeholder={"Insira seu nome"} type={"text"}/>
        <FormInput label={"E-mail"} placeholder={"Insira seu e-mail"} type={"email"}/>
        <FormInput label={"Mensagem"} placeholder={"Insira sua mensagem"} type={"text"}/>
        <button className='bg-cyan text-white w-full rounded-md py-2 mt-3 font-semibold'>Enviar</button>
    </form>
  )
}
