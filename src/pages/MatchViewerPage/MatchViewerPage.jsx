import React from 'react'
import { Link, useParams } from 'react-router-dom'
import matchesList from '../../json/matchData.json'
import MatchInfoRender from '../../components/MatchInfoRender/MatchInfoRender'
import { BiArrowFromRight } from 'react-icons/bi'

export default function MatchViewerPage() {
  const params = useParams()
  const matchInfo = matchesList.data.filter(match => match.id == params.id)[0]
  console.log(matchInfo);

  return (
    <main className='p-2 bg-gradient-to-b to-blue2 from-cyan min-h-screen'>
      <Link to={'/dashboard'}>
        <button className='flex items-center gap-1 fixed bg-cyan text-white text-xs p-2 rounded-xl font-semibold left-4 top-4'>
          <BiArrowFromRight className='text-lg' />
          VOLTAR
        </button>
      </Link>
      <div className='w-full flexbox h-64 rounded-t-xl border-4 border-white'>
        <img className='w-44' src="/icon2.png" alt="" />
      </div>
      <MatchInfoRender match={matchInfo} />
    </main>
  )
}
