import React, { useEffect, useRef, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa6'
import PlayerCard from './PlayerCard'
import { motion } from 'framer-motion';
import { getPlayersFromMatch } from '../../services/matches';
import { timestampToDate, timestampToHour } from '../../utils/timestampConverter';
import { displayMatchGamemode, displayMatchGamestyle } from '../../utils/matchInfoDisplay';

export default function MatchInfoRender({ match }) {
    const [popUpstate, setPopUpState] = useState(false);
    const address = useRef(null);
    const [playersList, setPlayersList] = useState([])

    function popUpAnimation () {
        setPopUpState(true);
        setTimeout(()=>{setPopUpState(false)}, 1000);
    }

    function copyAddress() {
        
        popUpAnimation();
        const addressInput = address.current;
        navigator.clipboard.writeText(addressInput.innerText);

    }

    useEffect(()=>{

        async function fetchPlayersData (){
            let returndata = await getPlayersFromMatch(match.id)
            setPlayersList(returndata.data.matchPlayers)
        }
        
        fetchPlayersData()
    },[])


    return (
        <section className='p-3 bg-white shadow-lg rounded-b-lg pb-16'>
            <div>
                <div className='mb-3 font-semibold'>
                    <h1 className='text-cyan text-2xl px-2 mb-1'>{match.name.toUpperCase()}</h1>
                    <p className='bg-gray1 text-blue2 rounded-lg p-2'>{match.description}</p>
                </div>


                <div className='flex gap-1 font-semibold'>
                    <span className='w-1/2'>
                        <h2 className='text-cyan  text-lg'>Data</h2>
                        <p className='bg-gray1 text-blue2 rounded-lg p-2'>{timestampToDate(match.match_timestamp)}</p>
                    </span>
                    <span className='w-1/2'>
                        <h2 className='text-cyan text-lg'>Horário</h2>
                        <p className='bg-gray1 text-blue2 rounded-lg p-2'>{timestampToHour(match.match_timestamp)}</p>
                    </span>
                </div>
                <div className='flex gap-1  font-semibold'>
                    <span className='w-1/2'>
                        <h2 className='text-cyan text-lg'>Modalidade</h2>
                        <p className='bg-gray1 text-blue2 rounded-lg p-2'>{displayMatchGamemode(match.gamemode)}</p>
                    </span>
                    <span className='w-1/2'>
                        <h2 className='text-cyan text-lg'>Estilo de Jogo</h2>
                        <p className='bg-gray1 text-blue2 rounded-lg p-2'>{displayMatchGamestyle(match.gamestyle)}</p>
                    </span>
                </div>

                <div className='mb-3  font-semibold relative'>
                    <h2 className='text-cyan text-lg'>Endereço</h2>
                    <span>
                        {popUpstate && <motion.span animate={{opacity: 0, top: '4px'}} className='duration-1000 absolute text-xs right-0 top-3 opacity-0'>Endereço copiado!</motion.span>}
                        <p ref={address} className='bg-gray1 text-blue2 px-2 rounded-t-lg py-2 pe-8'>{`${match.street} N°${match.number} ${match.complement}, ${match.district} - ${match.city}`}</p>
                        <motion.button
                            whileTap={{opacity: 0.7, scale: 1.2}}
                            transition={{duration: 0.1}}
                            className='absolute right-3 top-10 text-cyan text-lg'
                            onClick={() => {copyAddress()}}>
                            <FaRegCopy />
                        </motion.button>
                        <img src="/card-image3.webp" alt="" className='rounded-b-lg' />
                    </span>
                </div>
            </div>
            <section className='mt-5'>
                <h2 className='text-blue3 text-xl font-semibold'>Lista de Jogadores</h2>
                {playersList.map((playerInfo) => { return <PlayerCard player={playerInfo} /> })}
            </section>
        </section>
    )
}
