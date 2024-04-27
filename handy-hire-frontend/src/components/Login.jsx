import React, { useContext} from 'react'
import handylogo from '../assets/handylogo.jpg';
import handyicon3 from '../assets/handyicon3.jpg';
import google_symbol from '../assets/google_symbol.png.png'
import facebook_symbol from '../assets/facebook_symbol.png.png'
import profile from '../assets/profile.png'
import shield from '../assets/shield.png'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import UserContext from '../context/userContex';
import Spinner from './Spinner';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setErrDisplay] = useState('none');
  const [invalid, setInvalid] = useState('none');
  const [spin, setSpin] = useState('none')
  const navigate = useNavigate();

  const {setUser, user} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(loginData)

    setSpin('flex')
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
          setSpin('none')
      }else if (response.data.success === true){
        
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('firstName', response.data.result.firstName);
        sessionStorage.setItem('lastName', response.data.result.lastName);
        sessionStorage.setItem('id', response.data.result.userid);
        sessionStorage.setItem('role', response.data.result.role);
          setUser({id: response.data.result.userid, firstName: response.data.result.firstName, lastName: response.data.result.lastName, role: response.data.result.role});
          if(response.data.result.role === 'admin'){
          navigate('/admintrans')
        }else{
          navigate("/dashboard");
        }
        
      }else if(response.status == 403){
        setSpin('none')
        setErrDisplay('block');
      }
      setSpin('none')

    }).catch((err) => {
      console.log(err)
      setSpin("none")
    });

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
              <div className='log_icon'>
              <img src={profile} alt="" style={{width: '70%', height: '100%', objectFit: 'fill'}}/>
              </div>
              
              <input  type="text"  
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <p style={displayStyle}>Email is incorrect</p>
              <label htmlFor="Password">Password</label>
              <div className='log_icon'>
              <img  src={shield} alt="" style={{width: '70%', height: '100%', objectFit: 'fill'}} />
              </div>
              
              <input type="password" 
               required
               value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              <p style={displayStyle}>Password is incorrect</p>
              <br />
              <p style={{color: "red", fontSize: "1rem", display: invalid}}>This user does not exist</p>
            <span className="d-flex" style={{justifyContent: "space-between", marginTop: '20px'}}>
              <p className="form_text2">
                <img src={handyicon3} alt="icon" />Keep me logged in
              </p>
              <Link to={'/forgot-password'}><p>Forgot password?</p></Link>
            </span>
            <br />
            <Spinner display={spin}/>
            <button type='submit'>Login</button>
            </form>
            <div className="last_div">
              <h6>Or continue with</h6>
              <div className="d-flex last_div_div">
                <img src={google_symbol} alt="#" />
                <img src={facebook_symbol} alt="#" />
              </div>
              <h6>Dont have an Account? <Link to={'/register'}><a >Sign Up</a></Link></h6>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Login