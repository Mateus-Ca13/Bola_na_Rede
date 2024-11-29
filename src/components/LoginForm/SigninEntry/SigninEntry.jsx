import React, { useState } from 'react'
import LoginInput from '../LoginInput/LoginInput'
import LoginButton from '../LoginButton/LoginButton'

export default function SigninEntry() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({
        emailAlert: [],
        passwordAlert: []
    })

    function handleInputValues (event){
        let emailResponde = [];
        let passwordResponse = [];
        event.preventDefault();

        //Verifica cada um dos campos e devolve a mensagem de alerta.
            if(!email.includes('@') || !email.includes('.') || email.length <= 6){emailResponde.push("Insira um e-mail válido.")}
            if(password.length <= 5){passwordResponse.push("Insira uma senha válida.")}

            setAlert({emailAlert: emailResponde, passwordAlert: passwordResponse})   
    }

    return (
        <section className='w-full'>
            <div>
                <h2 className='font-semibold text-xl text-blue3 '>Bem-vindo novamente!</h2>
                <p className='text-sm'>Conecte-se e volte a jogar.</p>
            </div>
            <form onSubmit={(event)=>{handleInputValues(event)}} className='m-4 '>
                <LoginInput value={email} infoSetter={setEmail} alert={alert.emailAlert} label={'E-mail'} placeholder={'Digite seu e-mail'} type={'text'}/>
                <LoginInput value={password} infoSetter={setPassword} alert={alert.passwordAlert} label={'Senha'} placeholder={'Digite sua senha'} type={'password'} password={true}/>
                <LoginButton>Entrar</LoginButton>
            </form>
        </section>

    )
}
