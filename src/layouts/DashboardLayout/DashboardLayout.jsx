import React, { useState } from 'react'
import MainPage from '../../pages/MainPage/MainPage'
import MainDashboard from '../../components/MainDashboard/MainDashboard'
import DashboardTitle from '../../components/DashboardTitle/DashboardTitle'


export default function DashboardLayout({setPagestSate}) {
    // ================ Sections ================ //
    //  > MATCHES (partidas)     > LEAGUES (ligas)
    //  > USERDATA (Dados)           > ACCOUNT (Conta)
    const [activeSection, setActiveSection] = useState('MATCHES')

    return (
        <main className='bg-cyan'>
        <DashboardTitle activeSection={activeSection}/>
        <MainPage activeSection={activeSection}/>
        <MainDashboard sectionSetter={setActiveSection} activeSection={activeSection}/>
        </main>
    )
}
