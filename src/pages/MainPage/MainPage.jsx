import React from 'react'
import Banner from '../../components/Banner/Banner'
import CarouselSection from '../../components/CarouselSection/CarouselSection'
import CardsSection from '../../components/CardsSection/CardsSection'
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection'
import SignSection from '../../components/SignSection/SignSection'
import FormSection from '../../components/FormSection/FormSection'
import WarningSection from '../../components/WarningSection/WarningSection'

export default function MainPage() {

  return (
    <main className='font-instrumentSans'>
      <Banner />
      <CarouselSection />
      <CardsSection />
      <AdvantagesSection />
      <SignSection />
      <FormSection />
      <WarningSection />
    </main>
  )
}
