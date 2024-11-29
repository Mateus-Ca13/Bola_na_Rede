import React, { useEffect, useState } from 'react'
import { FiShield } from 'react-icons/fi'
import { GoGraph } from 'react-icons/go'
import { IoFootballOutline } from 'react-icons/io5'
import { MdOutlineAccountCircle } from 'react-icons/md'

export default function MainDashboard({sectionSetter, activeSection}) {
    
  return (
    <section className='fixed w-full bg-white shadow-top text-white bottom-0 flex justify-center gap-3 py-3 px-3'>

    <button 
    className={`${activeSection == 'MATCHES'? 'activedSec':'disabledSec'}`}
    onClick={()=>{sectionSetter('MATCHES')}}>
        <IoFootballOutline className='text-lg' />
        <p>Partidas</p>
    </button>

    <button 
    className={`${activeSection == 'LEAGUES'? 'activedSec':'disabledSec'}`}
    onClick={()=>{sectionSetter('LEAGUES')}}>
        <FiShield className='text-lg' />
        <p>Ligas</p>
    </button>

    <button 
    className={`${activeSection == 'USERDATA'? 'activedSec':'disabledSec'}`}
    onClick={()=>{sectionSetter('USERDATA')}}>
        <GoGraph className='text-lg' />
        <p>Dados</p>
    </button>

    <button 
    className={`${activeSection == 'ACCOUNT'? 'activedSec':'disabledSec'}`}
    onClick={()=>{sectionSetter('ACCOUNT')}}>
        <MdOutlineAccountCircle className='text-lg' />
        <p>Conta</p>
    </button>
    
</section>
  )
}
