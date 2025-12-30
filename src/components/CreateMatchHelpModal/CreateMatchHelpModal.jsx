import React from 'react'
import { BiX } from 'react-icons/bi'

export default function CreateMatchHelpModal() {
    return (
        <section className='fixed hidden one left-1/2 -translate-x-1/2 w-screen h-full bg-blue2 bg-opacity-60'>
            <div className='px-4 mt-16 h-5/6 overflow-scroll rounded-t-lg w-full'>
                <div className='bg-cyan rounded-t-lg p-2 flex  justify-between items-center text-white '>
                    <h1 className='font-semibold text-lg'>Aba de Ajuda</h1>
                    <BiX className='text-2xl' />
                </div>
                <div className='bg-white p-2 rounded-B-lg text-sm'>
                    <p className='mb-2'>Nesta aba, você poderá constar o que cada informação diz a respeito da partida a ser criada. </p>
                    <p className='mb-3'>Para mais informações, entre em contato com <strong>suporte.bolanarede@gmail.com</strong></p>

                    <div className='mb-3'>
                        <h3 className='subtitle text-base'>Nome da Partida</h3>
                        <p>Este é o título que será exibido para identificar sua partida. Outros usuários podem buscar por ele para encontrar sua partida.</p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='subtitle text-base'>Descrição da Partida</h3>
                        <p>Você pode adicionar mais detalhes sobre sua partida. Uma boa descrição dá mais contexto sobre seu jogo e facilita encontrar jogadores que se assemelhem aos seus gostos.</p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='subtitle text-base'>Data/Horário</h3>
                        <p>Determine a data e o local de sua próxima partida. Jogadores podem filtrar partidas por períodos a partir do horário que você determina. Os filtros são:</p>
                        <ul>
                            <li>Manhã: Entre 06h00 e 13h00</li>
                            <li>Tarde: Entre 13h00 e 19h00</li>
                            <li>Noite: Entre 19h00 e 00h00</li>
                        </ul>
                    <p>Horários anteriores às 6h00 e posteriores às 00h00 não são permitidos.</p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='subtitle text-base'>Modalidade</h3>
                        <p>Defina que tipo de modalidade e espaço seram usados em sua partida. </p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='subtitle text-base'>Estilo de Jogo</h3>
                        <p>O estilo de jogo define fundamentalmente o que os jogadores buscam ao jogar uma partida. 
                            Aqui você poderá definir de que maneira quer jogar, optando por desde um jogo que valoriza a resenha, até uma partida entre equipes fechadas com clima competitivo.
                        </p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='subtitle text-base'>Limite de grupo</h3>
                        <p>Defina um limite de pessoas que jogarão sua partida. Enquanto sua partida estiver com vagas livres ela aparecerá para novos jogadores entrarem.
                            É possível visulizar todos os jogadores presentes em uma partida.
                        </p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='subtitle text-base'>Valor (Opcional)</h3>
                        <p>O valor da partida. Este valor representa o valor total da quadra/espaço em questão.</p>
                    </div>
                </div>
                <div className='bg-cyan'></div>
            </div>
        </section>
    )
}
