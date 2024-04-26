import React from 'react'
import arrowUp from '../assets/arrow-up.jpg'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link, Navigate, useNavigate } from 'react-router-dom'


function Settings() {
  const navigate = useNavigate();

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: "Success",
      text: "Your changes have been saved!",
      icon: "success",
      confirmButtonText: "OK",

  }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate('/dashboard')
      } 
    })
  }

  return (
    <>
    <span><strong
        ><h2 className="" style={{padding: "2rem 0 0 2rem"}}>Settings</h2></strong></span>
    <span
      className="arrow d-flex"
      style={{justifyContent: "space-between", width: "40%"}}
    >
      <Link to={'/dashboard'}><img src={arrowUp} alt="" style={{width:"20px", height:"20px"}} /></Link>
      
      <h4>Notification Settings</h4>
    </span>

    <section className="preview_section">
      <div className="preview_section_div">
        <div className="prev" style={{padding: "0 0 0 2rem"}}>
        <Link to={'/password'} style={{textDecoration: 'none', color: 'black'}}> 
        <h6>Password and Security</h6>
          </Link>         
          <Link to={'/billing'} style={{textDecoration: 'none', color: 'black'}}> 
          <h6>Billing and Payment</h6>
          </Link>
          
          <button className="mt-4">Notifications</button>
        </div>
       <div>
        <div className="preview">
          <div className="preview_div">
            <p>For important updates regarding your activity on HandyHire, some
              notification can not be disabled</p>
          </div>

            <div className="preview_div1">
              <span style={{width: "100%"}}
                ><h6>Type</h6>
                <h6>Email</h6></span>
              <span>
                <h6>Inbox Messages</h6>
                <input type="checkbox"
              /></span>
              <span>
                <h6>New Job Posting</h6>
                <input type="checkbox"
              /></span>
              <span>
                <h6>Job Request</h6>
                <input type="checkbox"
              /></span>
              <span>
                <h6>Inbox Messages</h6>
                <input type="checkbox"
              /></span>
            </div>
         </div>
         <div className="notification">
          <h5 >REAL TIME NOTIFICATIONS</h5>
          <span
          className="mt-4"><p>Enable/Disable Sound</p>
            <input type="range"
          /></span>
          <span
            ><p>Enable/Disable Real Time Notification</p>
            <input type="range"
          /></span>
         </div>
         <button className="buttonn" onClick={showSwal}>save Changes</button>
        </div>  
      </div>    
    </section>
    </>
  )
}

export default Settings