import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterSection from '../components/FooterSection/FooterSection'
import Header from '../components/Header/Header'

export default function MainLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <FooterSection/>
    </>
  )
}
