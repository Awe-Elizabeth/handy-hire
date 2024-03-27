import React from 'react'
import handyimg from '../assets/handyimg.jpg'
import handyicon3 from '../assets/handyicon3.jpg'
import google_symbol from '../assets/google_symbol.png.png'
import facebook_symbol from '../assets/facebook_symbol.png.png'
import { useState } from 'react'

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');


  return (
      <div className="d-flex create_account_page">
        <img src={handyimg} alt="plumber_img" className="img" />
  
        <div className="create_account_page_form">
          <form action="">
            <h1>Create Account</h1>
            <label htmlFor="First Name">First Name</label>
            <input type="text" />
            <label htmlFor="Last Name">Last Name</label>
            <input type="text" />
            <label htmlFor="Email">Email</label>
            <input type="text" />
            <label htmlFor="Password">Password</label>
            <input type="text" />
            <label htmlFor="Country">Country</label>
            <input type="text" />
          </form>
          <p className="form_text">
            <img src={handyicon3} alt="icon" />Yes, I understand and
            agree to the <a href="#">Handy <span style={{color: "red"}}>Hire</span></a
            >,<a href="#">Terms of Service</a>,including the<a href="#">
              Users Agreement</a
            >
            and <a href="#">Privacy Policy</a>.
          </p>
          <br />
          <button>Signup</button>
          <div className="last_div">
            <h6>Or continue with</h6>
            <div className="d-flex last_div_div">
              <img src={google_symbol} alt="#" />
              <img src={facebook_symbol} alt="#" />
            </div>
            <h6>Already have an Account? <a href="login.html">Login</a></h6>
          </div>
        </div>
      </div>
  )
}

export default Register