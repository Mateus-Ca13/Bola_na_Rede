import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function SearchBar({ filterSetter }) {
  return (
    <div className='w-full relative text-white'>
      <input className='bg-cyan placeholder-white placeholder-opacity-70 border-none rounded-md w-full py-2 ps-8 pe-3 overflow-ellipsis  text-sm'
        placeholder='Busque por partidas, locais, modalidades...' 
        onChange={(e)=>{filterSetter({
          type: 'searchFilter',
          payload:{
            value: e.target.value}
        })}}/>
        <BiSearch className='absolute top-2 left-2 text-xl'/>
    </div>
  )
}
