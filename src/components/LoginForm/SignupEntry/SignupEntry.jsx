import React, { useState } from 'react'
import LoginInput from '../LoginInput/LoginInput'
import LoginButton from '../LoginButton/LoginButton'
import { Link } from 'react-router-dom'


export default function SignupEntry() {
    const [accountName, setAccountName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [alert, setAlert] = useState({
        accountNameAlert: [],
        emailAlert: [],
        passwordAlert: [],
        passwordConfirmAlert: []
    })

    function handleInputValues (event){

        event.preventDefault();
        let accountNameResponse = []
        let emailResponde = [];
        let passwordResponse = [];
        let passwordConfirmResponse = [];

        let nameRegex = /^[A-za-zÀ-ÿ]+(\s+[A-Za-zÀ-ÿ]+)+$/
        // Verifica existencia de caractere maiusculo e minusculo
        let passwordRegex1 = /^(?=.*[a-zA-Z])/
        // Verifica existencia de numero
        let passwordRegex2 = /^(?=.*[0-9])/
        // Verifica existencia de duas strings copm um espaço no meio
        
            //Verifica cada um dos campos e devolve a mensagem de alerta.
            if(accountName.length <= 5 || !nameRegex.test(accountName)){accountNameResponse.push("Insira um nome válido.")}
            if(!email.includes('@') || !email.includes('.') || email.length <= 6){emailResponde.push("Insira um e-mail válido.")}
            if(password.length <= 5){passwordResponse.push("Deve possuir pelo menos 6 caracteres")} 
            if(!passwordRegex1.test(password)){passwordResponse.push("Deve possuir pelo menos uma letra maiúscula")}
            if(!passwordRegex2.test(password)){passwordResponse.push("Deve possuir pelo menos um número")}
            if(password != passwordConfirm){passwordConfirmResponse.push("As senhas não conferem!")}

            setAlert({
                    accountNameAlert: accountNameResponse,
                    emailAlert: emailResponde,
                    passwordAlert: passwordResponse, 
                    passwordConfirmAlert: passwordConfirmResponse
                })        
    }

    return (
        <section className='w-full'>
            <div>
                <h2 className='font-semibold text-xl text-blue3 '>Crie uma conta!</h2>
                <p className='text-sm'>Jogue com muito mais facilidade.</p>
            </div>
            <form onSubmit={(event)=>{handleInputValues(event)}} className='m-4'>

                <LoginInput value={accountName} infoSetter={setAccountName} alert={alert.accountNameAlert} 
                label={'Nome Completo'} placeholder={'Digite seu nome completo'} type={''} />

                <LoginInput value={email} infoSetter={setEmail} alert={alert.emailAlert} 
                label={'E-mail'} placeholder={'Digite seu e-mail'} type={'email'} />

                <LoginInput value={password} infoSetter={setPassword} alert={alert.passwordAlert} 
                label={'Senha'} placeholder={'Digite sua senha'} type={'password'} password={true}/>

                <LoginInput value={passwordConfirm} infoSetter={setPasswordConfirm} alert={alert.passwordConfirmAlert} 
                label={'Confirmar senha'} placeholder={'Confirme sua senha'} type={'password'} password={true}/>

                <div className='flex items-center my-3'>
                    <input required type="checkbox" className='w-5 h-5' onClick={()=>{console.log(accountName, email, password)}}/>
                    <div className='text-xs mx-2 text-start'>Eu concordo com a <span className='text-blue3 border-b-2'><Link to={'/politica-de-privacidade'}>política de privacidade e termos de uso</Link></span></div>
                </div>
                <LoginButton>Criar conta</LoginButton>
            </form>
        </section>
    )
}
