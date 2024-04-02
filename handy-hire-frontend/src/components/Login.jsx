import React from 'react'
import handylogo from '../assets/handylogo.jpg';
import handyicon3 from '../assets/handyicon3.jpg';
import google_symbol from '../assets/google_symbol.png.png'
import facebook_symbol from '../assets/facebook_symbol.png.png'
import { useState } from 'react';
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setErrDisplay] = useState('none');
  const [invalid, setInvalid] = useState('none')


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(loginData)


    const headers = {
      'Content-Type': 'application/json',
    };
    
    axios.post( 'https://handy-hire.onrender.com/api/v1/auth/login', JSON.stringify(loginData), {headers, validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    }})
    .then(function (response) {

      console.log(response);
      if (response.status == 404){
          setInvalid('block')
      }else if (response.data.success === true){
          localStorage.setItem('token', response.data.token);
          //navigate("/login");
      }else if(response.status == 403){
        setErrDisplay('block');
      }
     

    }).catch((err) => console.log(err));

  }


  const loginData = {
    email: email,
    password: password,
  }
  const displayStyle = {
    color: "red",
    fontSize: "1rem", 
    display: display
  }
  
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
            <form action=""
            onSubmit={handleSubmit}
            >
              <label htmlFor="Email">Email</label>

              <input type="text"  
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <p style={displayStyle}>Email is incorrect</p>
              <label htmlFor="Password">Password</label>

              <input type="password" 
               required
               value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              <p style={displayStyle}>Password is incorrect</p>
              <br />
              <p style={{color: "red", fontSize: "1rem", display: invalid}}>This user does not exist</p>
            <span className="d-flex" style={{justifyContent: "space-between"}}>
              <p className="form_text2">
                <img src={handyicon3} alt="icon" />Keep me logged in
              </p>
              <p>Forgot password?</p>
            </span>
            <br />
            <button type='submit'>Signup</button>
            </form>
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