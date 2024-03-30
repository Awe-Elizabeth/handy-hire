import { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Startup from './components/Startup'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
// import Layout from './Layout.jsx'

function App() {


  return (
    
     <Routes>
     <Route path="/" element={<Startup />} />
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     </Routes>

  )
}

export default App
