import React from 'react'
import { BiArrowFromRight } from 'react-icons/bi'
import { BsQuestion } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import FormInput from '../../components/Form/FormInput/FormInput'
import CreateMatchHelpModal from '../../components/CreateMatchHelpModal/CreateMatchHelpModal'

export default function CreateMatchPage() {
  return (
    <>
    <CreateMatchHelpModal/>
    <main className='p-2 bg-gradient-to-t to-blue2 from-95% from-cyan min-h-screen pt-16'>

      <div className='fixed z-10 w-full  flex items-center justify-between bg-gradient-to-b to-cyan from-blue2 text-white p-3 font-semibold left-0 top-0'>
        <Link to={'/dashboard'}>
          <button className='flex items-center gap-1'>
            <BiArrowFromRight className='text-lg' />
            VOLTAR
          </button>
        </Link>
        <button className='flex items-center gap-1'>
          <BsQuestion className='text-3xl' />
        </button>
      </div>

      <section className='w-full h-screen rounded-t-xl text-lg p-1 pt-0 bg-white border-white'>
        <div className='p-2'>
          <h1 className='text-2xl p-2 rounded-lg bg-cyan text-white font-semibold'>CRIAR PARTIDA</h1>
          
          <FormInput label={"Nome da partida"} type={"text"} placeholder={"Insira o nome da partida"} />
          <FormInput label={"Descrição da partida"} type={"text"} placeholder={"Insira uma breve descrição da partida"} />

          <div className='flex justify-between gap-x-3'>
            <FormInput label={"Data"} type={"date"} placeholder={""} />
            <FormInput label={"Horário"} type={"time"} placeholder={""} />
          </div>

          <label className='font-semibold text-blue3'>Modalidade</label>
          <select className='w-full bg-gray1 px-2 p-1 mb-2 rounded-md'>
            <option value="none">Selecione uma modalidade</option>
            <option value="">Futsal / Salão</option>
            <option value="">Futebol / Campo</option>
            <option value="">Society / Suiço</option>
            <option value="">Futvolêi / Areia</option>
          </select>
          <label className='font-semibold text-blue3'>Estilo de Jogo</label>
          <select className='w-full bg-gray1 px-2 p-1 mb-2 rounded-md'>
            <option value="none">Selecione um estilo de jogo</option>
            <option value="">Livre</option>
            <option value="">Descontraído</option>
            <option value="">Causal</option>
            <option value="">Experiente</option>
            <option value="">Competitivo</option>
          </select>

          <div className='flex justify-between items-center gap-x-3'>
            <div className='mt-2 '>
              <label className='font-semibold text-lg text-blue3 '>Limite de grupo</label>
              <select className='w-full text-lg bg-gray1 px-2 p-1.5 mb-2 rounded-md'>
                <option value="none">Selecione o número de pessoas</option>
                <option value="">6</option>
                <option value="">8</option>
                <option value="">10</option>
                <option value="">12</option>
                <option value="">14</option>
                <option value="">18</option>
                <option value="">22</option>
              </select>
            </div>
            <FormInput label={"Valor "} type={"number"} placeholder={"R$"} />
          </div>
 
         

        </div>
      </section>

    </main>
    </>
  )
}
