import React from 'react'
import { IoPerson } from 'react-icons/io5'
import { BsThreeDots } from 'react-icons/bs'

export default function PlayerCard({ player }) {
    return (
        <div className='w-full text-white bg-cyan rounded-lg my-2 p-2 pe-4 flex items-center justify-between text-base shadow-lg'>
            <div className='flex items-center gap-2 w-10/12'>
                <span className=' p-2 rounded-xl bg-blue2'>
                    <IoPerson className='text-white' />
                </span>
                <p className='bg-blue3 w-14 text-center p-1 rounded-lg text-sm'>{player.position}</p>
                <p className='ms-2 font-semibold text-nowrap   overflow-hidden'>{player.user.username}</p>
                
            </div>

            <BsThreeDots className='text-white text-2xl' />

        </div>
    )
}
