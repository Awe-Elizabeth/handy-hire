import React from 'react'
import handyimg from '../assets/handyimg.jpg'

function ForgotPassword() {
  return (
     <div className="d-flex create_account_page">
        <img src={handyimg} alt="plumber_img" className="img" style="height: 100vh; width: 500px;"  />
  
        <div className="create_account_page_form">
          <form action="">
            <h1 style={{marginBottom:"4rem"}}>Forgot Password</h1>
            <h5 style={{textAlign: "center", width: "80%", marginTop: "3rem"}}>Enter your email address and we will send a link to reset your password</h5>
            
            <label for="Email">Email</label>
            <input type="text" />
            
          </form>
         
          
         
          <button style={{marginTop: "5rem"}}>Submit</button>
          
          </div>
    </div>
  )
}

export default ForgotPassword