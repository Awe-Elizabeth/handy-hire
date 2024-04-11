import { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Startup from './components/Startup'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Dashboard from './components/Dashboard'
import DashboardInfo from './components/DashboardInfo'
import Matching from './components/Matching'
import Portfolio from './components/Portfolio'
import Profile from './components/Profile'
import ProfiledIt from './components/ProfiledIt'
import { UserContextProvider } from './context/UserContextProvider'
// import Layout from './Layout.jsx'

function App() {

  return (
    <UserContextProvider>
      <Routes>
     <Route path="/" element={<Startup />} />
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/dashboardinfo" element={<DashboardInfo />} />
     <Route path="/matching" element={<Matching />} />
     <Route path="/portfolio" element={<Portfolio />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/profiledit" element={<ProfiledIt />} />
     </Routes>
    </UserContextProvider>
     

  )
}

export default App
