import { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Startup from './components/Startup'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'

function App() {


  return (
    <>
     {/* <Register /> */}

     {/* <Login /> */}

     <Startup />
    </>
  )
}

export default App
