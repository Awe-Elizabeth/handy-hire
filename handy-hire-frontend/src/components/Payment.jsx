import React from 'react'
import arrowUp from '../assets/arrow-up.jpg'
import verve from '../assets/verve.png'
import visa from '../assets/visa.png'
import frame from '../assets/Frame.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
// import '../sass/payment.scss'


function Payment() {
  return (
    <>
     <span><strong><h2 className="" style={{padding: "2rem 0 0 2rem"}}>Settings</h2></strong></span>
    <span
      className="arrow d-flex"
      style={{justifyContent: "space-between", width: "30%"}}
    >
      <img src={arrowUp} alt="" width="20px" height="20px" />
      <h5>Billing and Payment</h5>
    </span>

    <section className="d-flex" style={{justifyContent: "space-between", width: "100%"}}>
      <div style={{padding: "0 0 0 2rem", width: "30%"}}>
        <h6>Password and security</h6>
        <button className="mt-4 p-0" style={{width: "170px", 
        height: "35px",
        backgroundColor: "#4862be",  border: "none", color: "white", marginBottom: "1.5rem", borderRadius: "5px"}}>Billing and Payment</button>
        <Link to={'/settings'} style={{textDecoration: 'none', color: 'black'}}>
        <h6>Notifications</h6>
        </Link>
       
      </div>

      <div style={{width: "70%"}}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "60%"}}>
                <span >
                    <span className="d-flex"><input type="checkbox"/><h6 style={{margin: "0 0 0 1rem"}}>Payment Card</h6></span>
                   <p className="mt-4">Verve, Visa, Mastercard</p>
                     <hr style={{width: "100%"}}/>
               </span>
            </div>
         <div>
          <div>
            <span style={{display: "flex", justifyContent: "space-between", width:"60%"}}>
              <p  className="mt-2">Card number</p>
                <span><img src={verve} alt="" width="40px"/> <img src={visa} alt="" width="40px"/> <img src={frame} alt="" width="40px"/>
                </span>
            </span>
           
              <span> 
                <form action="">
                    <input type="text" placeholder="1234 5678 9012 3456"/>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="Mary"/>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder="Maxwell"/>
                    <label htmlFor="">Expiration month</label>
                    <input type="text" placeholder="Jan"/>
                    <label htmlFor="">Expiration  Year</label>
                    <input type="text" placeholder="MM"/>
                    <label htmlFor="">Security code</label>
                    <input type="text" placeholder="3 - digits"/>
                </form>
                </span>
                <button>Save</button>
        </div>
        </div>
        
        
      </div>
    </section>
    </>
  )
}

export default Payment