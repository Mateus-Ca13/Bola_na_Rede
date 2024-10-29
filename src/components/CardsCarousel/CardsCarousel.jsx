import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'
import { GrGroup } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { ImStatsBars } from "react-icons/im";

export default function CardsCarousel() {
  const textData = [
    {id: 1, text: "BUSQUE POR PARTIDAS", icon: <IoSearchSharp className='text-6xl'/>},
    {id: 2, text: "JUNTE-SE A EQUIPES", icon: <GrGroup className='text-6xl'/>},
    {id: 3, text: "PARTICIPE DE JOGOS", icon: <IoMdFootball className='text-6xl'/>},
    {id: 4, text: "ANALISE SEUS RESULTADOS", icon: <ImStatsBars className='text-6xl'/>}
  ]
    return (
    <Swiper 
    modules={[Autoplay]}
    autoplay={{delay: 4000, disableOnInteraction: false,}}
    slidesPerView={1}
    loop={true}
    >
      {textData.map((item)=>(
        <SwiperSlide key={item.id}>
          <div className='font-medium bg-gradient-to-r from-blue3 to-blue4 text-white columnbox gap-3 py-5 mx-6 rounded-md shadow-md'>
          {item.icon}
          <p className='border-b-blue4 px-3 border-b-2'>{item.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
// LEMBRAR DE POR FOTO NOS CARDS