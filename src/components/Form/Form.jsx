import React from 'react'
import FormInput from './FormInput/FormInput'

export default function Form() {
  return (
    <form className='px-6 py-6 shadow-xl  bg-white rounded-lg'>
        <FormInput label={"Nome"} placeholder={"Insira seu nome"} type={"text"}/>
        <FormInput label={"E-mail"} placeholder={"Insira seu e-mail"} type={"email"}/>
        <FormInput label={"Nome"} placeholder={"Insira seu nome"} type={"text"}/>
    </form>
  )
}
