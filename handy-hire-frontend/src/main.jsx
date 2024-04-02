import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './sass/index.scss'
import './sass/login.scss'
import './sass/create.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
