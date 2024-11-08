import React, { useState } from 'react'
import LoginInput from '../LoginInput/LoginInput'
import LoginButton from '../LoginButton/LoginButton'

export default function SigninEntry() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <section className='w-full'>
            <div>
                <h2 className='font-semibold text-xl text-blue3 '>Bem-vindo novamente!</h2>
                <p className='text-sm'>Conecte-se e volte a jogar.</p>
            </div>
            <form className='m-4 '>
                <LoginInput infoSetter={setEmail} label={'E-mail'} placeholder={'Digite seu e-mail'} type={'email'}/>
                <LoginInput infoSetter={setPassword} label={'Senha'} placeholder={'Digite sua senha'} type={'password'} password={true}/>
                <LoginButton>Entrar</LoginButton>
            </form>
        </section>

    )
}
