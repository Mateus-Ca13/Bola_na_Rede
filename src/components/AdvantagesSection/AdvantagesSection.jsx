import React from 'react'
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export default function AdvantagesSection() {
    const advantageData = [
        { id: 1, icon: <IoShieldCheckmarkOutline className='text-5xl' />, text: "Facilidade na organização" },
        { id: 1, icon: <IoShieldCheckmarkOutline className='text-5xl' />, text: "Utilize de onde quiser" },
        { id: 1, icon: <IoShieldCheckmarkOutline className='text-5xl' />, text: "Jogue com segurança" },
    ]
    return (
        <section className='mb-6  text-center'>
            <div className='px-8'>
                <h2 className='title'>SEU JOGO DESCOMPLICADO</h2>
                <p className='my-2'>Com todas as funcionalidades que o <span className=' font-semibold text-blue3'>Bola na rede</span> proporciona, fica muito mais fácil de encontrar o jogo perfeito, sem contratempos e/ou dificuldades.</p>
            </div>
            <div className='flexbox gap-2 my-4'>
                {advantageData.map((adv) => {
                    return <div className='font-medium text-xs h-36 w-24  bg-gradient-to-r from-blue3 to-blue4 text-white columnbox gap-3 rounded-md shadow-md'>
                        {adv.icon}
                        <p className='px-2'>{adv.text}</p>
                    </div>
                })}
            </div>
        </section>
    )
}
