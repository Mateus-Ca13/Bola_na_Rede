import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EntryStep3 from './EntrySteps/EntryStep3';
import EntryStep2 from './EntrySteps/EntryStep2';
import EntryStep1 from './EntrySteps/EntryStep1';


export default function SignupEntry() {

    const navigate = useNavigate()
    const [signUpStep, setSignUpStep] = useState(1);
    const [userData, setUserData] = useState({
        accountName: '',
        username: '',
        email: '',
        password: '',
        favoritePosition: '',
        gamestyle: '',
        birthDate: '',
        gender: ''
    })

    return (
        <section className='w-full'>
            {signUpStep != 3 ?
                <div>
                    <h2 className='font-semibold text-xl text-blue3 '>Crie uma conta!</h2>
                    <p className='text-sm px-6'>Jogue com muito mais facilidade.</p>
                </div>
                :
                <div>
                    <h2 className='font-semibold text-xl text-blue3 '>Quase lá!</h2>
                    <p className='text-sm px-4'>Nos informe um pouco mais sobre você antes de começar!</p>
                </div>
            }
            <form className='m-4'>
                {
                    signUpStep == 1 ? <EntryStep1 userData={userData} setUserData={setUserData} advanceToNextStep={setSignUpStep}/>: 
                    signUpStep == 2 ? <EntryStep2 userData={userData} advanceToNextStep={setSignUpStep}/>: 
                    <EntryStep3 userData={userData} setUserData={setUserData}/>
                }
            </form>
        </section>
    )
}
