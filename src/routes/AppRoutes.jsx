import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from '../layouts/MainLayout'
import LandingPage from '../pages/LandingPage/LandingPage'
import PolicyPage from '../pages/PolicyPage/PolicyPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout'
import MatchViewerPage from '../pages/MatchViewerPage/MatchViewerPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='/politica-de-privacidade' element={<PolicyPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardLayout/>}/>
        <Route path='/partidas/:id/*' element={<MatchViewerPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
