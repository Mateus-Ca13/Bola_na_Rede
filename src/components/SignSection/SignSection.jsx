import React from 'react'
import SignButton from '../SignButton/SignButton'

export default function SignSection() {
    return (
        <section className='text-center px-8 mt-8'>
            <h3 className='subtitle'>Faça sua conta  e começe a desfrutar
                de tudo isso em poucos instantes</h3>
            <SignButton pattern={'signButton2'}>CRIAR MINHA CONTA</SignButton>
        </section>
    )
}
