import React from 'react'
import mary from '../assets/mary.png'
import arrowLeft from '../assets/arrow-left.png'
import pencil from '../assets/pencil.png'
// import '../sass/profiledit.scss'

function ProfiledIt() {
  return (
    <>
      <h3 class="p-4"><strong>ACCOUNT</strong> </h3>
    <div class="Arrow">
        <img src={arrowLeft} alt="#"/>
        <h4>My Profile</h4>
    </div>
    <div class="profile_edit">
        <div class="profile_edit_div">
            <img src={mary} alt=""/>
         <span>
            <h4>Mary Maxwell <img src={pencil} alt="#"/></h4>
            <button>Preview Profile</button> </span>
         <div class="edit"><h5>Description</h5> 
            <button>Edit Description</button></div> <hr/>
            <div class="edit"><h5>Experience</h5>
                <button>Edit Experience</button></div> <hr/>
            <div class="edit"> <h5>Skills</h5>
                <button>Add New</button></div> <hr/>
                <div class="edit"><h5>Portfolio</h5>
                <button> Add New</button></div> <hr/>
        </div>
    </div>

    </>
  )
}

export default ProfiledIt