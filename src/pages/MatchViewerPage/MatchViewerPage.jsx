import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MatchInfoRender from '../../components/MatchInfoRender/MatchInfoRender'
import { BiArrowFromRight } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import JoinMatchButton from '../../components/JoinMatchButton/JoinMatchButton'
import { dashboardContext } from '../../contexts/dashBoardContext'
import { getPlayersFromMatch } from '../../services/matches'

export default function MatchViewerPage() {
  const params = useParams()
  const {matchesList} = useContext(dashboardContext)
  const [matchInfo, setMatchInfo] = useState( matchesList.filter(match => match.id == params.id)[0])

  return (
    <main className='p-2 bg-gradient-to-t to-blue2 from-95% from-cyan min-h-screen pt-16'>


      <div className='fixed z-10 w-full shadow-lg flex items-center justify-between bg-gradient-to-b to-cyan from-blue2 text-white p-3 font-semibold left-0 top-0'>
        <Link to={'/dashboard'}>
          <button className='flex items-center gap-1'>
            <BiArrowFromRight className='text-lg' />
            VOLTAR
          </button>
        </Link>

        <button className='flex items-center gap-1'>
          <BsThreeDots className='text-3xl' />
        </button>
      </div>


      <div className='w-full flexbox h-64 rounded-t-xl p-1 bg-white border-white'>
        <img className='h-full w-full  rounded-lg' src="/card-image1.webp" alt="" />
      </div>
      <MatchInfoRender match={matchInfo} />
      <JoinMatchButton />
    </main>
  )
}
