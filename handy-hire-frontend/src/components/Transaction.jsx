import React from 'react'
import '../sass/transaction.scss'
import arrowUp from '../assets/arrow-up.jpg'
import verve from '../assets/verve.png'
import visa from '../assets/visa.png'
import frame from '../assets/Frame.png'
import pencil from '../assets/pencil.png'
import { Link } from 'react-router-dom'


function Transaction() {
  return (
    <>
     <div className="Transaction">
      <div style={{width: "50%"}}>

          <div> 
             <div>
                <span
                style={{display: "flex", justifyContent: "space-between", width: "100%"}}
              >
              <span className="d-flex"
              ><input type="checkbox" />
              <h6 style={{margin: ".7rem 0 0 1rem"}}>Payment Card</h6></span>
                <span
                  ><img src={verve} alt="" width="40px" />
                  <img src={visa} alt="" width="40px" />
                  <img src={frame} alt="" width="40px" />
                </span>
                </span>
                <span className="d-flex mt-4"
                ><input type="checkbox" />
                <h6 style={{margin: "0 0 0 1rem"}}>Transfer</h6></span>
                <span
                style={{display: "flex", justifyContent: "space-between", width: "100%"}}
              >
                <p style={{marginTop: "2.5rem"}}>Payment amount</p> 
              
                <span className="button btn"><img src={pencil} alt="#"/><button>Edit Profile</button></span>
               
                 </span>
             </div>
            <span>
              <p>#5,000</p>
              <form action="">
                <label htmlFor="">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" />
                <label htmlFor="">Card Name</label>
                <input type="text" placeholder="Mary" />
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Maxwell" />
                <label htmlFor="">Expiration month</label>
                <input type="text" placeholder="Jan" />
                <label htmlFor="">Expiration Year</label>
                <input type="text" placeholder="MM" />
                <label htmlFor="">Security code</label>
                <input type="text" placeholder="3 - digits" />
              </form>
            </span>
            <Link to={'/success'}><button>Pay #5,000</button></Link>          
          </div>
      </div>
    </div>
    </>
  )
}

export default Transaction