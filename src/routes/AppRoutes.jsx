import React, { useEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import MainLayout from '../layouts/MainLayout'
import LandingPage from '../pages/LandingPage/LandingPage'
import PolicyPage from '../pages/PolicyPage/PolicyPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout'
import MatchViewerPage from '../pages/MatchViewerPage/MatchViewerPage'
import CreateMatchPage from '../pages/CreateMatchPage/CreateMatchPage'
import { DashboardContextProvider } from '../contexts/dashBoardContext'
import ProtectedDashboard from '../hocs/withAuth/withAuth'
import DesktopWarnPage from '../pages/DesktopWarnPage/DesktopWarnPage'
import { navigate, NavigateHelper } from '../utils/navigate'
import { useWindowSize } from '../utils/useWindowSize'

export default function AppRoutes() {

    const { width } = useWindowSize();

    useEffect(() => {
        if (width >= 480) {
        navigate('/aviso-desktop')
        }
    }, [width])



  return (
    <BrowserRouter>
        <NavigateHelper>
            <ScrollToTop/>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<LandingPage />} />
                    <Route path='/politica-de-privacidade' element={<PolicyPage />} />
                </Route>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/aviso-desktop' element={<DesktopWarnPage />}/>
                <Route element={<ProtectedDashboard />}>
                    <Route element={<DashboardContextProvider><Outlet /></DashboardContextProvider>}>
                        <Route path='/dashboard' element={<DashboardLayout />}/>
                        <Route path='/partidas/:id/*' element={<MatchViewerPage />} />
                        <Route path='/criar-partida' element={<CreateMatchPage />}/>
                    </Route>
                </Route>
            </Routes>
        </NavigateHelper>
    </BrowserRouter>
  )
}
