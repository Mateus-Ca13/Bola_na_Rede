import React from 'react'
import SignLink from '../SignLink/SignLink'
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok } from 'react-icons/bs'

export default function Banner() {
  return (
    <>
      <section className='bg-banner-sm py-16 bg-cover bg-bottom columnbox px-8'>
        <div>
          <h1 className='text-white font-semibold text-3xl'>CONECTE-SE E JOGUE.</h1>
          <p className='text-white py-4'>O <span className='text-blue1'>Bola na Rede</span> veio para facilitar a busca por partidas em sua região. Faça sua conta hoje mesmo e ache seu próximo jogo!</p>
          <SignLink pattern={'signButton1'}> ENTRAR EM CAMPO</SignLink>
        </div>
        <div>
          <p className='text-white py-2 px-10 text-xs'>Deseja conhecer um pouco mais sobre a nossa história? Visite nossas redes sociais.</p>
          <div className='inline-block mb-8'>
            <span className='flexbox socialSpan'>
              <BsInstagram className='icon' /><BsLinkedin className='icon' /><BsFacebook className='icon' /><BsTiktok className='icon' />
            </span>
          </div>

        </div>
      </section>

    </>
  )
}
