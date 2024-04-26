import React, { useState } from 'react'
import handyimg from '../assets/handyimg.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [dis, setDis] = useState('none');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
   

    console.log(forgotPasswordDetails);

    const headers = {
      'Content-Type': 'application/json',
    };

    axios.post( `https://handy-hire.onrender.com/api/v1/auth/forgot-password`, JSON.stringify(forgotPasswordDetails), {headers})
    .then(function (response) {
      
      if(response.data.success === true){
        //status = true
        console.log(response.data)
        showSwal()
        // navigate('/login')
      
      }

    }).catch((err) => console.log(err));
  }
const forgotPasswordDetails = {
  email: email
}

const showSwal = () => {
  withReactContent(Swal).fire({
    title: "Success",
    text: "An Email has been sent",
    icon: "success",
    confirmButtonText: "OK",

}).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      navigate('/login')
    } 
  })
}

  return (
     <div className="d-flex create_account_page">
        <img src={handyimg} alt="plumber_img" className="img" style={{height: "100vh", width: "500px"}}  />
  
        <div className="create_account_page_form">
          <form action="" onSubmit={handleSubmit}>
            <h1 style={{marginBottom:"4rem"}}>Forgot Password</h1>
            <h5 style={{textAlign: "center", width: "80%", marginTop: "3rem"}}>Enter your email address and we will send a link to reset your password</h5>
            
            <label htmlFor="Email">Email</label>
            <input type="text" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {/* <p style={{color: "red", fontSize: "1rem", display: errDisplay}}> You need to agree to signup</p> */}

            <button style={{marginTop: "5rem"}}>Submit</button>
          </form>              
          </div>
    </div>
  )
}

export default ForgotPassword