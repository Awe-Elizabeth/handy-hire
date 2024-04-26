import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './sass/index.scss'
import './sass/login.scss'
import './sass/create.scss'
import './sass/dashboard.scss'
import './sass/dashboardinfo.scss'
import './sass/matching.scss'
import './sass/portfolio.scss'
import './sass/profiledit.scss'
import './sass/createportfolio.scss'
import './sass/preview.scss'
import './sass/brief.scss'
import './sass/settings.scss'
import './sass/spinner.scss'
import './sass/addresses.scss'
import './sass/admin-trans.scss'
import './sass/jobs.scss'
import './sass/messages.scss'
import './sass/payment.scss'
import './sass/users.scss'
import './sass/password.scss'
import './sass/landingpage.scss'
import './sass/helpcentre.scss'
import './sass/profile.scss'

 


import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
