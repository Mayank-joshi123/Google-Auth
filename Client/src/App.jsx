import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import PageError from './Components/PageError'

function App() {

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route  exact path="/" element={<Navigate to="/login" />} />

          <Route  exact path="/login" element={<Login/>} />

          <Route  exact path="/dashboard" element={<Dashboard/>} />

          <Route  path="/*" element={<PageError/>} />
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
