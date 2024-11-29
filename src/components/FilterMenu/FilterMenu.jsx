import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import SelectionFilterBar from './SelectionFilterBar/SelectionFilterBar'

export default function FilterMenu() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true)
  }

  const [ageFilter, setAgeFilter] = useState('NDA')
  const [gamemodeFilter, setGamemodeFilter] = useState('NDA')
  const [gamestyleFilter, setGamestyleFilter] = useState('NDA')
  const [priceFilter, setPriceFilter] = useState(0)
  return (
    <section>
      <button className={`flexbox gap-2 border-2 p-2 rounded-md font-semibold text-sm ${openMenu ? 'bg-cyan text-white' : 'bg-transparent text-cyan'}`}
        onClick={() => { handleOpenMenu() }}>
        FILTRO
        <FaFilter />
      </button>
      {openMenu && <motion.section initial={{ height: 0 }} animate={{ height: 'auto' }} className='absolute left-1/2 -translate-x-1/2 top-10 w-full pb-4 px-3 bg-white overflow-hidden shadow-lg flex flex-col font-semibold'>

        <SelectionFilterBar
         filterSetter={setAgeFilter}
         filterState={ageFilter}
         name={'Faixa Etária'} 
         FilterBar values={['NDA', '18-25', '25-35', '35+']} />

        <SelectionFilterBar
         filterSetter={setGamemodeFilter}
         filterState={gamemodeFilter}
         name={'Modalidade'} 
        FilterBar values={['NDA', 'Futsal', 'Society', 'Futebol']} />

        <SelectionFilterBar
          filterSetter={setGamestyleFilter}
          filterState={gamestyleFilter}
        name={'Estilo de jogo'} 
        values={['NDA', 'Descontraído', 'Amador', 'Profissional']} />

        <SelectionFilterBar
          filterSetter={setPriceFilter}
          filterState={priceFilter}
        name={'Preço'} 
        values={['NDA', 'R$100', 'R$150', 'R$200', 'R$250']} />


      </motion.section>}
    </section>
  )
}
