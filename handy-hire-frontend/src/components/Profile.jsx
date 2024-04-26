import React, { useState,useEffect, useContext } from 'react'
import mary from '../assets/mary.png'
import arrowLeft from '../assets/arrow-left.png'
import pencil from '../assets/pencil.png'
import axios from 'axios'
import UserContext from '../context/userContex'

function Profile() {
  const [userData, setUserData] = useState({});
  const {setUser, user} = useContext(UserContext);
  let id = sessionStorage.getItem("id");
  
  useEffect(() => {
    document.title = 'Profile';

    //let status;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem("token")}`
    };
    axios.get( `https://handy-hire.onrender.com/api/v1/users/${id}`, {headers})
    .then(function (response) {
      
      if(response.data.success === true){
        //status = true
        setUserData(response.data.data)
      }

    }).catch((err) => console.log(err));
    

  },[]);

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
            
                 <span style={{paddingLeft: "2rem"}}><h4>{userData.firstName} {userData.lastName}</h4>
                    <h6>{userData.state}, {userData.country}</h6></span>
            </span>
            <div className="button"><button>Edit </button></div>
                
          </div>
             <div className="info">
                <div className="d-flex" style={{justifyContent: "space-between"}}>
                    <h3>Personal Information</h3>
                    <div className="button"><button>Edit</button></div>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                        </tr>
                        <tr>
                            <td>{userData.firstName}</td>
                            <td>{userData.lastName}</td>
                        </tr>
                        <tr>
                            <td>Email Address</td>
                            <td>Phone</td>
                        </tr>
                        <tr>
                            <td style={{paddingRight: "6rem"}}>{userData.email}</td>
                            <td>(+234){userData.phoneNumber}</td>
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
                <tr><td style={{paddingRight: "6rem"}}>{userData.country}</td>
                <td style={{paddingRight: "6rem"}}>{userData.state}</td></tr>
              </table>
            </div>
            

        </div>
    </div>

    </>
  )
}

export default Profile