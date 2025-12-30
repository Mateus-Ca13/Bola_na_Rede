import React, { useState } from 'react'
import LoginInput from '../LoginInput/LoginInput'
import LoginButton from '../LoginButton/LoginButton'
import { postUserLogin } from '../../../services/auth';
import { useNavigate } from 'react-router-dom';

export default function SigninEntry() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({
        emailAlert: [],
        passwordAlert: [],
        globalAlert: []
    })

    async function handleInputValues (event){
        let inputsResponses = {
            emailResponde:[],
            passwordResponse:[],
            globalResponse: []
        }
        
        event.preventDefault();

        //Verifica cada um dos campos e devolve a mensagem de alerta.
            if(!email.includes('@') || !email.includes('.') || email.length <= 6){inputsResponses.emailResponde.push("Insira um e-mail válido.")}
            if(password.length <= 5){inputsResponses.passwordResponse.push("Insira uma senha válida.")}

            if(inputsResponses.emailResponde.length <= 0 &&
                inputsResponses.passwordResponse.length <= 0
            ){
                
               let loginResponse = await postUserLogin(email, password)
               if(loginResponse.status == 200){
                localStorage.setItem('token', loginResponse.data.token)
                console.log("acesso feito!")
                navigate('/dashboard', {replace: true})
               }else{
                inputsResponses.globalResponse.push(loginResponse.data.message)
               }
            }
           

            setAlert({emailAlert: inputsResponses.emailResponde, 
                      passwordAlert: inputsResponses.passwordResponse,
                      globalAlert: inputsResponses.globalResponse})   
    }

    return (
        <section className='w-full'>
            <div>
                <h2 className='font-semibold text-xl text-blue3 '>Bem-vindo novamente!</h2>
                <p className='text-sm'>Conecte-se e volte a jogar.</p>
            </div>
            <form className='m-4 '>
                <LoginInput value={email} infoSetter={setEmail} alert={alert.emailAlert} label={'E-mail'} placeholder={'Digite seu e-mail'} type={'text'}/>
                <LoginInput value={password} infoSetter={setPassword} alert={alert.passwordAlert} label={'Senha'} placeholder={'Digite sua senha'} type={'password'} password={true}/>
                <ul className='text-alert text-xs text-center ms-2'>{alert.globalAlert.map((message, index) => {return <li key={index}>{message}</li>})}</ul>

                <LoginButton onSubmit={handleInputValues}>Entrar</LoginButton>
            </form>
        </section>

    )
}
