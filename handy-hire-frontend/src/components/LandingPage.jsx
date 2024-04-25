import React from 'react'
import { Link } from 'react-router-dom'
import logos from '../assets/logos.png'

function LandingPage() {
  return (
    <body className='body'>
    <div className="landingpage">
    <div>
       <img src={logos} alt="" style={{width:"300px"}}/>
   <div>
     <h3 style={{width: "60%", marginTop: "5rem"}}><strong>Elevate Your Experience With the HandyHire </strong>
         </h3>
         <h6 style={{width: "58%", marginTop: "4rem"}}>Welcome to Handy Hire, Connecting Tasks and Talents....</h6>

         
   </div>
   <Link to={'/create'}>
   <button><a>Get Started Now</a></button>
   </Link>
   
    </div>
  </div>

    </body>
    
    
  )
}

export default LandingPage