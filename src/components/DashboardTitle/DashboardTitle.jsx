import React, { useEffect, useState } from 'react'

export default function DashboardTitle({ activeSection}) {
    const [pageTitle, setPageTitle] = useState('PARTIDAS')

  useEffect(()=>{
    switch (activeSection) {
      case 'MATCHES':
        setPageTitle('PARTIDAS')
        break;
        case 'LEAGUES':
          setPageTitle('LIGAS')
        break
        case 'USERDATA':
        setPageTitle('DADOS')
        break
        case 'ACCOUNT':
            setPageTitle('CONTA')
        break
      default:
        setPageTitle('PARTIDAS')
        break;
    }

  }, [activeSection])

  return (
    <section className='bg-gradient-to-t to-blue2  from-cyan text-center py-3 mb-3 flex flex-col justify-between'>
        <h1 className='text-white font-bold text-3xl'>{pageTitle}</h1>
    </section>
  )
}
