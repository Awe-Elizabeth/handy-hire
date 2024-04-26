import React from 'react'
import arrowUp from '../assets/arrow-up.jpg'
import plus from '../assets/Plus-Math.png'
import { Link } from 'react-router-dom'


function Billing() {
  return (
    <>
     <span
      ><strong
        ><h2 className="" style={{padding: "2rem 0 0 2rem"}}>Settings</h2></strong></span>
    <span
      className="arrow d-flex"
      style={{justifyContent: "space-between", width: "40%"}}
    >
      <img src={arrowUp} alt="" width="20px" height="20px" />
      <h5>Billing and Payment</h5>
    </span>

    <section  style={{display: "flex", justifyContent: "space-around", gap: "20%"}}>
      <div className="" style={{padding: "0 0 0 2rem"}}>
        <h6>Password and security</h6>
        <button className="mt-4 p-0" style={{width: "170px", 
        height: "35px",
        backgroundColor: "#4862be",  border: "none",
        color: "white", marginBottom: "1.5rem", borderRadius: "5px"}}>Billing and Payment</button>
        <Link to={'/settings'} style={{textDecoration: 'none', color: 'black'}}>
        <h6>Notifications</h6>
        </Link>
        
      </div>

      <div className="">
        <h5>Billing methods</h5>

        <div>
          <span>
            
             <p style={{width: "60%", marginTop: "2rem"}}>You haven’t set up any billing method yet.
                Your billing method will ne charged only when your avaiable balance from 
                Handhire earnings is not sufficient to pay for your 
                monthly membership </p> </span>
        </div>
        
         <div className="d-flex" style={{justifyContent: "space-between", width: "40%"}}>
             <img src={plus} alt="" className="mt-4"/>
             <Link to={'/payment'} style={{textDecoration: 'none', color: 'black'}}>
             <p><h5 style={{marginTop: "2.3rem", color: "#4862BE"}}>Add a billing method</h5></p>
             </Link>
         </div>
      </div>
    </section>
    </>
  )
}

export default Billing