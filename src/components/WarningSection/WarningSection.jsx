import React from 'react'
import { Link } from 'react-router-dom'

export default function WarningSection() {
    return (
        <section className='text-center bg-gradient-to-b from-cyan to-blue2 py-8'>
            <div className='text-white bg-logo-bg bg-bottom bg-cover'>
                <h4 className='font-semibold'>AVISO LEGAL</h4>
                <p className='my-4 px-8'>O <strong>Bola na Rede</strong> é um projeto em fase piloto, destinado a avaliar e aprimorar a experiência dos usuários na busca por partidas de futebol. As funcionalidades e os serviços oferecidos podem ser limitados e estão sujeitos a alterações a qualquer momento, conforme a evolução do projeto.</p>
                <p className='my-4 px-8'>Os usuários que participam deste projeto reconhecem que estão cientes de que a plataforma ainda está em desenvolvimento e podem enfrentar bugs, interrupções ou limitações de funcionalidade. A participação neste projeto não garante acesso a todas as funcionalidades e pode não refletir a versão final do serviço.</p>
                <p className='my-4 px-8'>A equipe do <strong>Bola na Rede</strong> se reserva o direito de modificar, suspender ou descontinuar a operação do projeto a qualquer momento, sem aviso prévio</p>
                <p className='my-4 px-8 font-semibold'>Para mais informações, consulte nossa <Link to={'/politica-de-privacidade'} className='text-blue1  border-b-2' href="/">política de privacidade e termos de uso</Link>.</p>
            </div>
        </section>
    )
}
