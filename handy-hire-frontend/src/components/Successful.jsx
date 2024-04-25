import React from 'react'
import '../sass/successful.scss'

function Successful() {
  return (
    <div className="Transaction">
    <div style={{width: "40%"}}>

        <div> 
            <span>
               <h1 style={{color: "#4F4F4F", textAlign: "center"}}><strong>Payment Successful</strong></h1>
               <h3 style={{color: "#4F4F4F", textAlign: "center"}}><strong>Would you like a receipt?</strong></h3>
            </span>
          <span>
           
            <form action="">
            
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="text" />
              <input type="text" placeholder="No, Thanks" />
            </form>
          </span>
      
        </div>
    </div>
  </div>
  )
}

export default Successful