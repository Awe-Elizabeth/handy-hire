import React from 'react'
import arrowUp from '../assets/arrow-up.jpg'

function Settings() {
  return (
    <>
    <span
      ><strong
        ><h2 class="" style={{padding: "2rem 0 0 2rem"}}>Settings</h2></strong
      ></span
    >
    <span
      class="arrow d-flex"
      style={{justifyContent: "space-between", width: "40%"}}
    >
      <img src={arrowUp} alt="" style={{width:"20px", height:"20px"}} />
      <h4>Notification Settings</h4>
    </span>

    <section class="preview_section">
      <div class="preview_section_div">
        <div class="prev" style={{padding: "0 0 0 2rem"}}>
          <h6>Password and Security</h6>
          <h6>Billing and Payment</h6>
          <button class="mt-4">Notifications</button>
        </div>
       <div>
        <div class="preview">
          <div class="preview_div">
            <p>For important updates regarding your activity on HandyHire, some
              notification can not be disabled</p>
          </div>

            <div class="preview_div1">
              <span style={{width: "100%"}}
                ><h6>Type</h6>
                <h6>Email</h6></span
              >
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
         <div class="notification">
          <h5 >REAL TIME NOTIFICATIONS</h5>
          <span
          class="mt-4"><p>Enable/Disable Sound</p>
            <input type="range"
          /></span>
          <span
            ><p>Enable/Disable Real Time Notification</p>
            <input type="range"
          /></span>
         </div>
         <button class="buttonn">save Changes</button>
        </div>  
      </div>
     
    </section>
    </>
  )
}

export default Settings