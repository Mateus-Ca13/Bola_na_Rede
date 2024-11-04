import React from 'react'
import Form from '../Form/Form'

export default function FormSection() {
    return (
        <section className='text-center px-8 py-5 bg-gradient-to-b from-transparent to-cyan from-35%'>
            <h4 className='text-blue4 font-semibold'>FICOU COM ALGUMA DÚVIDA?</h4>
            <p className='my-2'>Nos envie uma mensagem pelo formulário abaixo. Nosso suporte terá o prazer de ajudar!</p>
            <Form/>
        </section>
    )
}
