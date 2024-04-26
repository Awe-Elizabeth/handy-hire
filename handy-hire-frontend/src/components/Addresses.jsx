import React from 'react'
import arrowUp from '../assets/arrow-up.jpg'
import verve from '../assets/verve.png'
import visa from '../assets/visa.png'
import frame from '../assets/Frame.png'
// import '../sass/addresses.scss'

function Addresses() {
  return (
    <>
     <span><strong
        ><h2 class="" style={{padding: "2rem 0 0 2rem"}}>Settings</h2></strong></span>
    <span
      class="arrow d-flex"
      style={{justifyContent: "space-between", width: "30%"}}
    >
      <img src={arrowUp} alt="" width="20px" height="20px" />
      <h5>Billing and Payment</h5>
    </span>

    <section class="d-flex" style={{justifyContent: "space-between", width: "100%"}}>
      <div style={{padding: "0 0 0 2rem", width: "30%"}}>
        <h6>Password and security</h6>
        <button class="mt-4 p-0" style={{width: "170px", 
        height: "35px",
         backgroundColor: "#4862be",  border: "none", color: "white", marginBottom: "1.5rem", borderRadius: "5px"}}>Billing and Payment</button>
        <h6>Notifications</h6>
      </div>

      <div style={{width: "70%"}}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "60%"}}>
                <span>
                    <span class="d-flex"><input type="checkbox"/>
                   
                    </span>
                    <p class="mt-4">Verve, Visa, Mastercard</p>
                    <hr style={{width: "100%"}}/>
               </span>
            </div>
         <div>
          <div>
            <span style={{display: "flex", justifyContent: "space-between", width:"60%"}}>
              <p  class="mt-2">Card number</p>
                <span><img src={verve} alt="" width="40px"/> <img src={visa} alt="" width="40px"/> <img src={frame} alt="" width="40px"/>
                </span>
            </span>
           
              <span> 
                <form action="">
                   
                    <label for="">Country</label>
                    <input type="text" placeholder="Nigeria"/>
                    <label for="">Address line 1</label>
                    <input type="text" placeholder="street"/>
                    <label for="">Address 2(Optional)</label>
                    <input type="text" placeholder="Jan"/>
                    <label for="">City</label>
                    <input type="text" placeholder="e.g Ikeja"/>
                    <label for="">Postal code (Optional)</label>
                    <input type="text" placeholder=""/>
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

export default Addresses