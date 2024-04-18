import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './sass/index.scss'
import './sass/login.scss'
import './sass/create.scss'
import './sass/dashboard.scss'
import './sass/dashboardinfo.scss'
import './sass/matching.scss'
import './sass/profile.scss'
import './sass/portfolio.scss'
import './sass/profiledit.scss'
import './sass/createportfolio.scss'
import './sass/preview.scss'
import './sass/brief.scss'
import './sass/settings.scss'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
