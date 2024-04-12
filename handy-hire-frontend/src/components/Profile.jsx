import React from 'react'
import mary from '../assets/mary.png'
import arrowLeft from '../assets/arrow-left.png'
import pencil from '../assets/pencil.png'

function Profile() {
  return (
    <>
    <h3 className="p-4"><strong>ACCOUNT</strong> </h3>
    <div className="Arrow">
        <img src={arrowLeft} alt="#"/>
        <h4>My Profile</h4>
    </div>
    <div className="profile d-flex">
        <span className="profile_span">
            <h5 className="button">My Profile</h5>
            <h6>Notification</h6>
        </span>
      <div className="profile_div">
         <div className="profile_second_div">
           <span className="d-flex">
            <img src={mary} alt=""/>
            
                 <span style={{paddingLeft: "2rem"}}><h4>Mary Maxwell</h4>
                    <h6>Lagos, Nigeria</h6></span>
            </span>
            <div className="button"><img src={pencil} alt="#"/><button>Edit Profile</button></div>
                
          </div>
             <div className="info">
                <div className="d-flex" style={{justifyContent: "space-between"}}>
                    <h3>Personal Information</h3>
                    <div className="button"><img src={pencil} alt="#"/><button>Edit</button></div>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Maxwell</td>
                        </tr>
                        <tr>
                            <td>Email Address</td>
                            <td>Phone</td>
                        </tr>
                        <tr>
                            <td style={{paddingRight: "6rem"}}>maryokafor@gmail.com</td>
                            <td>(+234)8060000000</td>
                        </tr>      
                    </tbody>
                </table>
            </div>
            
            <div className="Address">
              <div className="d-flex" style={{justifyContent: "space-between"}}>
                <h3>Address</h3>
                <div className="button"><img src={pencil} alt="#"/><button>Edit</button></div>
              </div>
              <table>
                <tr>
                    <td>Country</td>
                    <td> City/State</td>
                </tr>
                <tr><td style={{paddingRight: "6rem"}}>Nigeria</td>
                <td style={{paddingRight: "6rem"}}>Lagos/Nigeria</td></tr>
              </table>
            </div>
            

        </div>
    </div>

    </>
  )
}

export default Profile