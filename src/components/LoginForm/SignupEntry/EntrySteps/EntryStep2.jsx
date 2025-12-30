import React, { useState } from 'react'
import { sendEmailToken, verifiyEmailToken } from '../../../../services/auth';
import LoginButton from '../../LoginButton/LoginButton';
import EmailVerificationInputs from '../EmailVerificationInputs/EmailVerificationInputs';
import Spinner from '../../../Spinner/Spinner';

export default function EntryStep2({userData, advanceToNextStep}) {
  const [resendToken, setResendToken] = useState(false)
  const [buttonValue, setButtonValue] = useState('Verificar e-mail')
  const [verificationToken, setverificationToken] = useState([null, null, null, null, null, null]);
  const [alert, setAlert] = useState({
    verificationTokenAlert: []
  })

  function resendTokenToUserEmail (){
    setResendToken(true)
    sendEmailToken(userData.email)
    setTimeout(()=>{setResendToken(false)}, 10000)
  }

  async function handleInputsValues(event){
    event.preventDefault();

    let inputsResponses = {
      verificationTokenResponse: []
    }

    //======== SEGUNDA VERIFICAÇÃO DO CADASTRO ======//
    if(verificationToken.some((digit) => digit == null)) { inputsResponses.verificationTokenResponse.push("Digite os 6 dígitos do código.") }
    if(!verificationToken.some((digit) => digit == null)) {
      //junta tokens em string e faz a verificação no backend
      debugger
      let token = verificationToken.join("")
      let response = await verifiyEmailToken(userData.email, token)
      setButtonValue(<Spinner/>)
      if(response.status === 200){
          advanceToNextStep(3)
      }else{
          inputsResponses.verificationTokenResponse.push(response.data.message)
          setButtonValue('Verificar e-mail')
      }
    }
    // Setter dos avisos (renderiza a lista de avisos para cada respectivo campo com erro)
    await setAlert({
      verificationTokenAlert: inputsResponses.verificationTokenResponse,
  })
  }
  return (
    <>
        <p className='subtitle mb-3 mx-4'>Verifique seu e-mail e digite o código de verificação abaixo.</p>
        <ul className=' text-alert text-xs text-center mb-4'>
            {alert.verificationTokenAlert.length != 0 ? alert.verificationTokenAlert.map((message, index) => { return <li key={index}>{message}</li> }) : <p></p>}
        </ul>
        <EmailVerificationInputs code={verificationToken} codeSetter={setverificationToken} />

        <div className='h-20'>
          <p className='text-sm text-gray2 border-b inline-block px-1 my-2'
          onClick={()=> {resendTokenToUserEmail()}}>
            Não recebi o código
          </p>
          {resendToken && <p className='text-blue3 text-sm font-bold'>Um novo código de verificação foi enviado para seu email.</p>}
        </div>
        <LoginButton onSubmit={handleInputsValues}>{buttonValue}</LoginButton>
    </>
  )
}
