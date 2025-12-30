import React, { useState, useContext } from 'react'
import { FaFilter } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import SelectionFilterBar from './SelectionFilterBar/SelectionFilterBar'
import { dashboardContext } from '../../contexts/dashBoardContext'

export default function FilterMenu() {
  const [openMenu, setOpenMenu] = useState(false)
  const { ageFilter, setAgeFilter, gamemodeFilter, setGamemodeFilter, gamestyleFilter, setGamestyleFilter, priceFilter, setPriceFilter } = useContext(dashboardContext);

  const handleOpenMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true)
    console.log(ageFilter, gamemodeFilter, gamestyleFilter, priceFilter)
  }

  
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
         FilterBar values={[{ value: "", name: "NDA" }, { value: "18-25", name: "18-25" }, { value: "25-35", name: "25-35" }, { value: "35+", name: "35+" }]} />

        <SelectionFilterBar
         filterSetter={setGamemodeFilter}
         filterState={gamemodeFilter}
         name={'Modalidade'} 
        FilterBar values={[{ value: "", name: "NDA" }, { value: "futsal", name: "Futsal" }, { value: "society", name: "Society (Fut7)" }, { value: "soccer", name: "Futebol" }]} />

        <SelectionFilterBar
          filterSetter={setGamestyleFilter}
          filterState={gamestyleFilter}
        name={'Estilo de jogo'} 
        values={[{ value: "", name: "NDA" }, { value: "relaxed", name: "Descontraído" }, { value: "casual", name: "Casual" }, { value: "seasoned", name: "Experiente" }, { value: "competitive", name: "Competitivo" }]} />

        <SelectionFilterBar
          filterSetter={setPriceFilter}
          filterState={priceFilter}
        name={'Preço'} 
        values={[{ value: "", name: "NDA" }, { value: "100", name: "R$100" }, { value: "150", name: "R$150" }, { value: "200", name: "R$200" }, { value: "250", name: "R$250" }]} />


      </motion.section>}
    </section>
  )
}
