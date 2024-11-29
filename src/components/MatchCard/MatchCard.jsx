import React from 'react'
import img from '/card-image1.webp'
import { MdGroup } from 'react-icons/md'
import { IoIosFootball, IoMdCalendar } from 'react-icons/io'
import { FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function MatchCard({ match }) {
  return (
    <Link to={`/partidas/${match.id}`}>
      <div className='p-1 shadow-lg border-opacity-30 rounded-lg flex'>
        <img className='rounded-s-lg h-32 w-1/2' src={'/card-image2.webp'} alt="Foto de partida" />
        <div className='flex flex-col items-start justify-between py-1 px-3 w-full'>
          <span className='text-start font-semibold'>
            <h2 className='text-blue3'>{match.name}</h2>
            <p className='text-xs'>{match.address}</p>
          </span>

          <div className='flex text-xs justify-between w-full font-semibold text-blue3'>
            <div className='flex flex-col items-start'>
              <span className='flexbox gap-1 '>
                <p>{match.time}</p>
                <FiClock />
              </span>

              <span className='flexbox gap-1 '>
                <p>{match.gamemode}</p>
                <IoIosFootball />
              </span>
            </div>

            <div className='flex flex-col items-end'>
              <span className='flexbox gap-1 '>
                <p>{match.date}</p>
                <IoMdCalendar />
              </span>

              <span className='flexbox gap-1 '>
                <span></span>
                <p>{match.players.length}/{match.group}</p>
                <MdGroup />
              </span>
            </div>


          </div>


        </div>
      </div>
    </Link>
  )
}
