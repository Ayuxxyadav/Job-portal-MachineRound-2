import { HomePage } from '@/pages/HomePage'
import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
  )
}
