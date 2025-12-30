import React, { useEffect } from 'react'
import { navigate } from '../../utils/navigate';
import { useWindowSize } from '../../utils/useWindowSize';

export default function DesktopWarnPage() {

    const { width } = useWindowSize();
    
    useEffect(() => {
        if (width <= 480) {
        navigate('/')
        }
    }, [width])

  return (
    <main className='w-full h-screen'>
        <div className='w-full h-full flex flex-col justify-center items-center bg-gray-100 px-4 text-center'>
            <div className='mx-12'>
            <h1 className='text-3xl font-bold mb-4 text-blue2'>Aviso: Dispositivo Não Suportado</h1>
            <p className='text-lg mb-6 text-blue3'>Parece que você está acessando o site a partir de um dispositivo de tela grande (desktop ou tablet). Para a melhor experiência, por favor, utilize um dispositivo móvel.</p>
            <p className='text-md mb-6 text-blue3'>Nossa plataforma é otimizada para smartphones, garantindo que você tenha acesso a todos os recursos de forma intuitiva e completa.</p>
            <p className='text-md mt-12 text-blue2'>Obrigado pela compreensão!</p>
            </div>
        </div>
    </main>
  )
}
