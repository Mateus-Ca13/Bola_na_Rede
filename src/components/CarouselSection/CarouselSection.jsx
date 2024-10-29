import React from 'react'
import CardsCarousel from '../CardsCarousel/CardsCarousel'

export default function CarouselSection() {
  return (
    <section className='text-center'>
      <div className='mb-6 px-8'>
        <h2 className='title'>BUSQUE, FILTRE, JOGUE.</h2>
        <p className=' my-2'>Com poucos cliques, o <span className='text-blue3 font-semibold'>Bola na Rede</span> conecta você a partidas de futebol na sua região.
          Escolha dentre diversas modalidades e encontre jogadores que compartilham sua paixão.</p>
      </div>

      <CardsCarousel />
    </section>
  )
}
