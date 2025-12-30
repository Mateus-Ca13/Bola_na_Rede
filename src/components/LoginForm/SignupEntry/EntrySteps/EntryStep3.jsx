import React, { useState } from 'react'
import LoginInput from '../../LoginInput/LoginInput';
import LoginButton from '../../LoginButton/LoginButton';
import { postUserLogin, postUserRegister } from '../../../../services/auth';
import { replace, useNavigate } from 'react-router-dom';

export default function EntryStep3({userData, setUserData}) {
    const navigate = useNavigate();
    const [favoritePosition, setFavoritePosition] = useState('default');
    const [gamestyle, setGamestyle] = useState('default');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('default');
    const [alert, setAlert] = useState({
        favoritePositionAlert: [],
        gamestyleAlert: [],
        birthDateAlert: [],
        genderAlert: [],
        globalAlert: []
    });
    
   async function handleInputsValues (event){
    event.preventDefault();
    let inputsResponses = {
    
        favoritePositionResponse: [],
        gamestyleResponse: [],
        birthDateResponse: [],
        genderResponse: [],
        globalResponse: []
    }

    //======== TERCEIRA VERIFICAÇÃO DO CADASTRO ======//
    if(favoritePosition == 'default'){inputsResponses.favoritePositionResponse.push("Selecione uma posição válida.")}
    if(gender == 'default'){inputsResponses.genderResponse.push("Selecione um gênero válido.")}
    if(gamestyle == 'default'){inputsResponses.gamestyleResponse.push("Selecione um estilo de jogo válido.")}
    if(birthDate.length == 0){inputsResponses.birthDateResponse.push("Selecione data de nascimento válida.")}
    
    if(birthDate && !ageVerify(birthDate)){inputsResponses.birthDateResponse.push("Idade mínima de 18 anos.")}
    console.log(birthDate)

    if(inputsResponses.favoritePositionResponse.length <= 0 &&
        inputsResponses.genderResponse.length <= 0 &&
        inputsResponses.gamestyleResponse.length <= 0 &&
        inputsResponses.birthDateResponse.length <= 0 
    ){
        
        let registerResponse = await postUserRegister({...userData, favoritePosition: favoritePosition, birthDate: birthDate, gender: gender, gamestyle: gamestyle})
        
        setUserData({...userData, favoritePosition: favoritePosition, birthDate: birthDate, gender: gender, gamestyle: gamestyle})
        if(registerResponse.status == 201){
            let loginResponse = await postUserLogin(userData.email, userData.password)
            if(loginResponse.status == 200){
            localStorage.setItem('token', loginResponse.data.token)
            navigate('/dashboard', {replace: true})
            }
        }else{
            inputsResponses.globalResponse.push("Houve um problema ao prosseguir com o cadastro. Tente novamente mais tarde.")
        }

    }   
    // Setter dos avisos (renderiza a lista de avisos para cada respectivo campo com erro)
    await setAlert({
        favoritePositionAlert: inputsResponses.favoritePositionResponse,
        birthDateAlert: inputsResponses.birthDateResponse,
        genderAlert: inputsResponses.genderResponse,
        gamestyleAlert: inputsResponses.gamestyleResponse,
        globalAlert: inputsResponses.globalResponse
    })

    }

   function ageVerify (birthString) {
    let birthDate = new Date(birthString)
    let today = new Date()
    let age = today.getFullYear() -  birthDate.getFullYear()
    const monthDiff = birthDate.getMonth() - today.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    return age >= 18;
    }

  return (
    <>
        <div className='flex flex-col items-start'>
            <label className='text-cyan font-semibold mb-1'>Posição Favorita</label>
            <select className='w-full bg-gray1 rounded-md px-3 py-1' 
            value={favoritePosition} 
            onChange={(e) => setFavoritePosition(e.target.value)} 
            >
                <option value="default"></option>
                <option value="GOL">GOL (Goleiro)</option>
                <option value="LE/LD">LE/LD (Lateral Esq./Dir.)</option>
                <option value="AE/AD">AE/AD (Ala Esq./Dir.)</option>
                <option value="ZAG">ZAG (Zagueiro)</option>
                <option value="LIB">LIB (Líbero)</option>
                <option value="VOL">VOL (Volante)</option>
                <option value="MC">MC (Meio-Campo Central)</option>
                <option value="ME/MD">ME/MD (Meio-Campo Esq./Dir.)</option>
                <option value="MCO">MCO (Meio-Campo Ofensivo)</option>
                <option value="ATA ">ATA (Atacante)</option>
                <option value="FIX">FIX (Fixo)</option>
                <option value="PE/PD">PE/PD (Ponta Esq./Dir.)</option>
                <option value="PIV">PIV (Pivô)</option>
            </select>
            <ul className=' text-alert text-xs text-start mb-4'>
                {alert.favoritePositionAlert.length != 0 ? alert.favoritePositionAlert.map((message, index) => { return <li key={index}>{message}</li> }) : <p></p>}
            </ul>
        </div>

        <div className='flex items-start gap-2'>
            <LoginInput value={birthDate} infoSetter={setBirthDate} alert={alert.birthDateAlert}
                label={'Nascimento'} placeholder={'dd/MM/aaaa'} type={'date'} password={false} />

            <div className='flex flex-col items-start my-1 w-full pb-1'>
                <label className='text-cyan font-semibold mb-1'>Gênero</label>
                <select className='w-full bg-gray1 rounded-md px-3 py-1.5'
                value={gender} 
                onChange={(e) => setGender(e.target.value)} 
                >
                    <option value="default"></option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                    <option value="O">Outro</option>
                    <option value="N">Prefiro não dizer</option>
                </select>
                <ul className=' text-alert text-xs text-start mb-3'>
                    {alert.genderAlert.length != 0 ? alert.genderAlert.map((message, index) => { return <li key={index}>{message}</li> }) : <p></p>}
                </ul>
            </div>
        </div>

    <div className='flex flex-col items-start my-1 mb-4'>
        <label className='text-cyan font-semibold mb-1'>Estilo de Jogo</label>
        <select className='w-full bg-gray1 rounded-md px-3 py-1'
        value={gamestyle} 
        onChange={(e) => setGamestyle(e.target.value)} 
        >
            <option value="default"></option>
            <option value="relaxed">Descontraído</option>
            <option value="casual">Casual</option>
            <option value="seasoned">Experiente</option>
            <option value="competitive">Competitivo</option>
        </select>
        <ul className=' text-alert text-xs text-start mb-3'>
            {alert.gamestyleAlert.length != 0 ? alert.gamestyleAlert.map((message, index) => { return <li key={index}>{message}</li> }) : <p></p>}
        </ul>
    </div>
    <ul className=' text-alert text-xs text-center ms-2'>{alert.globalAlert.map((message, index) => {return <li key={index}>{message}</li>})}</ul>
    <LoginButton onSubmit={handleInputsValues}>Finalizar Cadastro</LoginButton>
</>
  )
}
