import React, { useState } from 'react'
import LoginInput from '../LoginInput/LoginInput'
import LoginButton from '../LoginButton/LoginButton'
import { Link } from 'react-router-dom'
import { use } from 'framer-motion/client';

export default function SignupEntry() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    return (
        <section className='w-full'>
            <div>
                <h2 className='font-semibold text-xl text-blue3 '>Crie uma conta!</h2>
                <p className='text-sm'>Jogue com muito mais facilidade.</p>
            </div>
            <form className='m-4'>
                <LoginInput infoSetter={setUsername} label={'Nome Completo'} placeholder={'Digite seu nome completo'} type={''} />
                <LoginInput infoSetter={setEmail} label={'E-mail'} placeholder={'Digite seu e-mail'} type={'email'} />
                <LoginInput infoSetter={setPassword} label={'Senha'} placeholder={'Digite sua senha'} type={'password'} password={true}/>
                <LoginInput infoSetter={setPasswordConfirm} label={'Confirmar senha'} placeholder={'Confirme sua senha'} type={'password'} password={true}/>
                <div className='flex items-center my-3'>
                    <input type="checkbox" className='w-5 h-5' required onClick={()=>{console.log(username, email, password, setPasswordConfirm)}}/>
                    <div className='text-xs mx-2 text-start'>Eu concordo com a <span className='text-blue3 border-b-2'><Link to={'/politica-de-privacidade'}>política de privacidade e termos de uso</Link></span></div>
                </div>
                <LoginButton>Criar conta</LoginButton>
            </form>
        </section>
    )
}
