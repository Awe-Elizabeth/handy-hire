import React, { useContext } from 'react'
import handyimg from '../assets/handyimg.jpg'
import handyicon3 from '../assets/handyicon3.jpg'
import handyicon2 from '../assets/handyicon2.jpg'
import google_symbol from '../assets/google_symbol.png.png'
import facebook_symbol from '../assets/facebook_symbol.png.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import UserContext from '../context/userContex'

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [logo, setLogo] = useState(handyicon3);
  const [agree, setAgree] = useState(false)
  const [errDisplay, setErrDisplay] = useState('none');
  const navigate = useNavigate();

  const {setUser, user} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(agree);
    console.log(registerData)

    if(agree !== true){
      setErrDisplay('block');
      return;
    }else{
      setErrDisplay('none');
    }

    const headers = {
      'Content-Type': 'application/json',
    };
    
    axios.post( 'https://handy-hire.onrender.com/api/v1/auth/register', JSON.stringify(registerData), {headers})
    .then(function (response) {
      console.log(response.data) 
      if(response.data.success === true){
        console.log(response.data.result);
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('firstName', response.data.result.firstName);
        sessionStorage.setItem('lastName', response.data.result.lastName);
        sessionStorage.setItem('id', response.data.result.userid);
        setUser({id: response.data.result.userid, firstName: response.data.result.firstName, lastName: response.data.result.lastName, role: response.data.result.role});
        navigate("/dashboard");
      }

    }).catch((err) => console.log(err));

  }


  const registerData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    role: user.role,
    location: country
  }

  return (
      <div className="d-flex create_account_page">
        <img src={handyimg} alt="plumber_img" className="img" />
  
        <div className="create_account_page_form">
          <form action=""
          onSubmit={handleSubmit}
          >
            <h1>Create Account</h1>
            <label htmlFor="First Name">First Name</label>
            <input type="text"
            required
            value={firstName}
             onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="Last Name">Last Name</label>
            <input type="text"
            required
             value={lastName}
             onChange={(e) => setLastName(e.target.value)}
             />
            <label htmlFor="Email">Email</label>
            <input type="email" 
            required
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="Password">Password</label>
            <input type="password" 
            required
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="Country">Country</label>
            <input type="text"
            required
             value={country}
             onChange={(e) => setCountry(e.target.value)} 
            />
          
          <p className="form_text">
            <img src={logo} 
            onClick={() => {logo == handyicon3 ? setLogo(handyicon2) : setLogo(handyicon3)
              logo == handyicon3 ? setAgree(true) : setAgree(false)
            }}
            alt="icon" />Yes, I understand and
            agree to the <a href="#">Handy <span style={{color: "red"}}>Hire</span></a
            >,<a href="#">Terms of Service</a>,including the<a href="#">
              Users Agreement</a
            >
            and <a href="#">Privacy Policy</a>.
          </p>
          <p style={{color: "red", fontSize: "1rem", display: errDisplay}}> You need to agree to signup</p>
          <br />
          <button
          type="submit"
          >Signup</button>
          </form>
          <div className="last_div">
            <h6>Or continue with</h6>
            <div className="d-flex last_div_div">
              <img src={google_symbol} alt="#" />
              <img src={facebook_symbol} alt="#" />
            </div>
            <h6>Already have an Account? <a><Link to={'/login'}>Login</Link></a></h6>
          </div>
        </div>
      </div>
  )
}

export default Register