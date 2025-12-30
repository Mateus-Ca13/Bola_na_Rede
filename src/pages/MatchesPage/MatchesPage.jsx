import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import FilterMenu from '../../components/FilterMenu/FilterMenu'
import { Link } from 'react-router-dom'
import { BiPlus } from 'react-icons/bi'
import CardsList from '../../components/CardsList/CardsList'
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader'
import { dashboardContext } from '../../contexts/dashBoardContext'

export default function MatchesPage() {
  const { matchesList, setMatchesList } = useContext(dashboardContext)
  const { searchFilter, setSearchFilter } = useContext(dashboardContext)
  const [contentIsLoading, setContentIsLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => { setContentIsLoading(false) }, 1000)
  }, [])

  return (
    <main>
      <section className='flex px-4 justify-between items-center gap-3 mb-4 relative'>
        <SearchBar filterSetter={setSearchFilter} />
        <FilterMenu/>
      </section>
      <Link to={'/criar-partida'}>
        <span className='fixed bottom-20 rounded-lg right-4 bg-cyan w-12 h-12 flexbox text-white'>
          <BiPlus className='text-4xl' />
        </span>
      </Link>

       {contentIsLoading ? <SkeletonLoader/> : <CardsList matchesList={matchesList}/>}
    </main>
  )
}
