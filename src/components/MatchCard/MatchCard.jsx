import React from 'react'
import { MdGroup } from 'react-icons/md'
import { IoIosFootball, IoMdCalendar } from 'react-icons/io'
import { FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { timestampToDate, timestampToHour } from '../../utils/timestampConverter'
import { displayMatchGamemode } from '../../utils/matchInfoDisplay'

export default function MatchCard({ match }) {
  return (
    <Link to={`/partidas/${match.id}`} className='w-full'>
      <div className='p-1 shadow-lg border-opacity-30 w-full rounded-lg columnbox border-2 border-gray2'>
      <img className='rounded-md w-full' src={'/card.png'} alt="Foto de partida" />
        <div className='flex flex-col items-start justify-between py-1 px-2 w-full'>
          <span className='text-start font-semibold'>
            <h2 className='text-blue3 text-lg'>{match.name}</h2>
            <p className=''>{match.district}</p>
          </span>

          <div className='flex mt-3 gap-1  justify-between w-full font-semibold text-white'>
            <div className='flex flex-col items-start w-full'>
              <span className='flexbox gap-1 shadow-sm bg-cyan p-1 rounded-md w-full mt-1'>
                <p>{timestampToHour(match.match_timestamp)}</p>
                <FiClock />
              </span>

              <span className='flexbox gap-1 shadow-sm bg-cyan p-1 rounded-md w-full mt-1 '>
                <p>{displayMatchGamemode(match.gamemode)}</p>
                <IoIosFootball />
              </span>
            </div>

            <div className='flex flex-col items-end w-full'>
              <span className='flexbox gap-1 shadow-sm bg-cyan p-1 rounded-md w-full mt-1 '>
                <p>{timestampToDate(match.match_timestamp)}</p>
                <IoMdCalendar />
              </span>

              <span className='flexbox gap-1 shadow-sm bg-cyan p-1 rounded-md w-full mt-1 '>
                <span></span>
                <p>{match.group_limit}</p>
                <MdGroup />
              </span>
            </div>


          </div>


        </div>
      </div>
    </Link>
  )
}
