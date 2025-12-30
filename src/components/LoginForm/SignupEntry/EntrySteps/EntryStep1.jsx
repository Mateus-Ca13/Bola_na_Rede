import React, { useState } from 'react'
import LoginInput from '../../LoginInput/LoginInput';
import { Link } from 'react-router-dom';
import LoginButton from '../../LoginButton/LoginButton';
import { checkExistingUser, sendEmailToken } from '../../../../services/auth';

export default function EntryStep1({userData, setUserData, advanceToNextStep}) {
    const [accountName, setAccountName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [alert, setAlert] = useState({
        accountNameAlert: [],
        usernameAlert: [],
        emailAlert: [],
        passwordAlert: [],
        passwordConfirmAlert: [],
        globalAlert: []
    })

    async function handleInputsValues(event) {
        event.preventDefault();
        let inputsResponses = {
            accountNameResponse: [],
            usernameResponse: [],
            emailResponde: [],
            passwordResponse: [],
            passwordConfirmResponse: [],
            globalResponse: []
        }
        // Verifica existencia de duas strings copm um espaço no meio
        const nameRegex = /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/;
        // Verifica existencia de caractere maiusculo e minusculo
        const passwordRegex1 = /^(?=.*[a-zA-Z])/
        // Verifica existencia de numero
        const passwordRegex2 = /^(?=.*[0-9])/

        //======== PRIMEIRA VERIFICAÇÃO DO CADASTRO ======//
        if (accountName.length <= 5 || !nameRegex.test(accountName)) { inputsResponses.accountNameResponse.push("Insira um nome válido.") }
        if (username.length <= 1) { inputsResponses.usernameResponse.push("Insira um apelido válido.") }
        if (!email.includes('@') || !email.includes('.') || email.length <= 6) { inputsResponses.emailResponde.push("Insira um e-mail válido.") }
        if (password.length <= 5) { inputsResponses.passwordResponse.push("Deve possuir pelo menos 6 caracteres.") }
        if (!passwordRegex1.test(password)) { inputsResponses.passwordResponse.push("Deve possuir pelo menos uma letra.") }
        if (!passwordRegex2.test(password)) { inputsResponses.passwordResponse.push("Deve possuir pelo menos um número.") }
        if (password != passwordConfirm) { inputsResponses.passwordConfirmResponse.push("As senhas não conferem.") }

        // Setter dos avisos (renderiza a lista de avisos para cada respectivo campo com erro)
        if (inputsResponses.accountNameResponse.length <= 0 &&
            inputsResponses.usernameResponse.length <= 0 &&
            inputsResponses.emailResponde.length <= 0 &&
            inputsResponses.passwordResponse.length <= 0 &&
            inputsResponses.passwordConfirmResponse.length <= 0) {
            const existingUser = await checkExistingUser(email, username)
            if(existingUser.status == 200){
                const response = await sendEmailToken(email)
                if(response.status == 200){
                    advanceToNextStep(2)
                    setUserData({...userData, accountName:accountName, username:username, email:email, password:password})
                }else{
                    inputsResponses.globalResponse.push("Houve um problema ao prosseguir com o cadastro. Tente novamente mais tarde.")
                }
            }else{
                if(existingUser.data){
                    inputsResponses.globalResponse.push(existingUser.data.message)
                }else{
                    inputsResponses.globalResponse.push("Houve um problema ao prosseguir com o cadastro. Tente novamente mais tarde.")
                }
               
            }
            
        }
        // Setter dos avisos (renderiza a lista de avisos para cada respectivo campo com erro)
        await setAlert({
            accountNameAlert: inputsResponses.accountNameResponse,
            usernameAlert: inputsResponses.usernameResponse,
            emailAlert: inputsResponses.emailResponde,
            passwordAlert: inputsResponses.passwordResponse,
            passwordConfirmAlert: inputsResponses.passwordConfirmResponse,
            globalAlert: inputsResponses.globalResponse
        })
    }
  return (
    <>
        <LoginInput value={accountName} infoSetter={setAccountName} alert={alert.accountNameAlert}
            label={'Nome Completo'} placeholder={'Digite seu nome completo'} type={''} />

        <LoginInput value={username} infoSetter={setUsername} alert={alert.usernameAlert}
            label={'Apelido'} placeholder={'Digite seu apelido'} type={''} />

        <LoginInput value={email} infoSetter={setEmail} alert={alert.emailAlert}
            label={'E-mail'} placeholder={'Digite seu e-mail'} type={'email'} />

        <LoginInput value={password} infoSetter={setPassword} alert={alert.passwordAlert}
            label={'Senha'} placeholder={'Digite sua senha'} type={'password'} password={true} />

        <LoginInput value={passwordConfirm} infoSetter={setPasswordConfirm} alert={alert.passwordConfirmAlert}
            label={'Confirmar senha'} placeholder={'Confirme sua senha'} type={'password'} password={true} />

        <div className='flex items-center my-3'>
            <input required type="checkbox" className='w-5 h-5' onClick={() => { console.log(accountName, email, password) }} />
            <div className='text-xs mx-2 text-start'>Eu concordo com a <span className='text-blue3 border-b-2'><Link to={'/politica-de-privacidade'}>política de privacidade e termos de uso</Link></span></div>
        </div>  
        <ul className=' text-alert text-xs text-center ms-2'>{alert.globalAlert.map((message, index) => {return <li key={index}>{message}</li>})}</ul>
        <LoginButton onSubmit={handleInputsValues}>Criar conta</LoginButton>
    </>
  )
}
