import React from 'react'
import handylogo from '../assets/handylogo.jpg';
import handyicon3 from '../assets/handyicon3.jpg';
import google_symbol from '../assets/google_symbol.png.png'
import facebook_symbol from '../assets/facebook_symbol.png.png'

function Login() {
  return (
    <>
    <div className="Login_page">
        <div className="Login_page_div">
          <h1 style={{color: "blue"}}>
            Login to
            <img
              src={handylogo}
              alt="logo"
              style={{ width:"200px",
              height:"120px"}}
             
            />
          </h1>
          <div>
            <form action="">
              <label htmlFor="Email">Email</label>
              <input type="text" />
              <label htmlFor="Password">Password</label>
              <input type="text" />
            </form>
            <span className="d-flex" style={{justifyContent: "space-between"}}>
              <p className="form_text2">
                <img src={handyicon3} alt="icon" />Keep me logged in
              </p>
              <p>Forgot password?</p>
            </span>
            <br />
            <button>Signup</button>
            <div className="last_div">
              <h6>Or continue with</h6>
              <div className="d-flex last_div_div">
                <img src={google_symbol} alt="#" />
                <img src={facebook_symbol} alt="#" />
              </div>
              <h6>Already have an Account? <a href="#">Login</a></h6>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Login