import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from '../layouts/MainLayout'
import MainPage from '../pages/MainPage/MainPage'

export default function AppRoutes() {
  return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<MainPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
