import React from 'react'
import './App.css'
import SalePage from './pages/SalePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SalePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
