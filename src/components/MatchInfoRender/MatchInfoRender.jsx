import React from 'react'

export default function MatchInfoRender({ match }) {
    return (
        <section className='p-2 bg-white shadow-lg rounded-b-lg'>
            <div>
                <div className='mb-3'>
                    <h1 className='text-blue2 text-xl font-semibold'>{match.name}</h1>
                    <p className='bg-blue1 px-2 rounded-lg'>{match.description}</p>
                </div>

                <div className='mb-3'>
                    <h2 className='text-blue2 font-semibold text-lg'>Endereço</h2>
                    <p className='bg-blue1 px-2 rounded-lg'>{match.address}</p>
                </div>

            </div>
            <div className='flex '>
                <span className='w-1/2'>
                    <h2>Data</h2>
                    <p>{match.date}</p>
                </span>
                <span>
                    <h2>Horário</h2>
                    <p>{match.time}</p>
                </span>
            </div>
            <div className='flex'>
                <span className='w-1/2'>
                    <h2>Data</h2>
                    <p>{match.gamemode}</p>
                </span>
                <span>
                    <h2>Horário</h2>
                    <p>{match.gamestyle}</p>
                </span>
            </div>
        </section>
    )
}
