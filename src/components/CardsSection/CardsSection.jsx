import React from 'react'
import Card from '../Card/Card'

export default function CardsSection() {
    const cardsData = 
    [{id: 1, imageClass: "bg-card-image1", title:"Jogue onde e quando quiser", text: "Busque partidas nos campos perto de você. Marque sua próxima partida hoje mesmo." },
    {id: 2, imageClass: "bg-card-image2", title:"Organize suas próprias partidas", text: "Crie partidas do jeito que você quer: escolha local, horário, e até o tipo de campo. Convide amigos e faça acontecer!" },
    {id: 3, imageClass: "bg-card-image3", title:"Participe de competições locais", text: "Participe ou organize competições locais. Defina equipes, classificações e muito mais." },
    {id: 4, imageClass: "bg-card-image4", title:"Monitore seu desempenho", text: "Veja como você está evoluindo em campo. Acompanhe suas estatísticas a qualquer momento." }]
    
  return (
    <section className='text-center my-8 px-8'>
        <h3 className='subtitle'>Confira a fundo tudo que nossa plataforma proporciona aos usuários.</h3>
        <div>
          {cardsData.map((card)=> {return <Card key={card.id} background={card.imageClass} title={card.title}>{card.text}</Card>})}
        </div>  
    </section>
  )
}
