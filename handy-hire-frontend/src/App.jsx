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
import CreatePortfolio from './components/CreatePortfolio'
import PortfolioBrief from './components/PortfolioBrief'
import Preview from './components/Preview'
import Settings from './components/Settings'
import Users from './components/Users'
import Payment from './components/Payment'
import Messages from './components/Messages'
import LandingPage from './components/LandingPage'
import Jobs from './components/Jobs'
import HelpCenter from './components/HelpCenter'
import ForgotPassword from './components/ForgotPassword'
import Billing from './components/Billing'
import AdminTransaction from './components/AdminTransaction'
import Addresses from './components/Addresses'
// import Layout from './Layout.jsx'

function App() {

  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<LandingPage />} />
     <Route path="/create" element={<Startup />} />
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/dashboardinfo" element={<DashboardInfo />} />
     <Route path="/matching" element={<Matching />} />
     <Route path="/portfolio" element={<Portfolio />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/profiledit" element={<ProfiledIt />} />
     <Route path="/createportfolio" element={<CreatePortfolio />} />
     <Route path="/portfoliobrief" element={<PortfolioBrief />} />
     <Route path="/preview" element={<Preview />} />
     <Route path="/settings" element={<Settings />} />
     <Route path="/users" element={<Users />} />
     <Route path="/text" element={<Text />} />
     <Route path="/payment" element={<Payment />} />
     <Route path="/messages" element={<Messages />} />
     <Route path="/jobs" element={<Jobs />} />
     <Route path="/help" element={<HelpCenter />} />
     <Route path="/forgot-password" element={<ForgotPassword />} />
     <Route path="/billing" element={<Billing />} />
     <Route path="/admin" element={<AdminTransaction />} />
     <Route path="/addresses" element={<Addresses />} />
     </Routes>
    </UserContextProvider>
     

  )
}

export default App
