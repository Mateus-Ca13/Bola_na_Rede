import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from '../layouts/MainLayout'
import MainPage from '../pages/MainPage/MainPage'
import PolicyPage from '../pages/PolicyPage/PolicyPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path='politica-de-privacidade' element={<PolicyPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
