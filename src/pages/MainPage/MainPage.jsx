import React, { lazy, useEffect, useState } from 'react'
const MatchesPage = lazy(()=> import('../MatchesPage/MatchesPage' )) 
const LeaguesPage = lazy(()=> import('../LeaguesPage/LeaguesPage')) 
const UserDataPage = lazy(()=> import('../UserDataPage/UserDataPage')) 
const AccountPage = lazy(()=> import('../AccountPage/AccountPage')) 

export default function MainPage({ activeSection }) {
  const [actualPage, setActualPage] = useState('MATCHES')

  useEffect(()=>{
    switch (activeSection) {
      case 'MATCHES':
          setActualPage(<MatchesPage/>)

        break;
        case 'LEAGUES':
          setActualPage(<LeaguesPage/>)
        
        break
        case 'USERDATA':
          setActualPage(<UserDataPage/>)

        break
        case 'ACCOUNT':
          setActualPage(<AccountPage/>)
     
        break
      default:
        setActualPage(<MatchesPage/>)
        break;
    }

  }, [activeSection])

  return (
    <main className='pb-28 h-full min-h-screen pt-3 rounded-lg mx-2 bg-white'>
    {actualPage}
    </main>
    
  )
}
