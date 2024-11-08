import React from 'react'
import SignLink from '../SignLink/SignLink'

export default function SignSection() {
    return (
        <section className='text-center px-8 mt-8'>
            <h3 className='subtitle'>Faça sua conta  e começe a desfrutar
                de tudo isso em poucos instantes</h3>
            <SignLink pattern={'signButton2'}>CRIAR MINHA CONTA</SignLink>
        </section>
    )
}
