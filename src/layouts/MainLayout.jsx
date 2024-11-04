import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import FooterSection from '../components/FooterSection/FooterSection'

export default function MainLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <FooterSection/>
    </>
  )
}
