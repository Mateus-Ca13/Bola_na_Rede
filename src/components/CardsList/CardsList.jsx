import React from 'react'
import MatchCard from '../../components/MatchCard/MatchCard'

export default function CardsList({matchesList}) {
  return (
    <section className='columnbox gap-2 px-2'>
    {matchesList.map(match => { return <MatchCard match={match} /> })}
    <p className='text-gray2 italic'>Sem mais resultados.</p>
    </section>
  )
}
