import React, { useEffect, useState } from 'react'
import arrowUp from '../assets/arrow-up.jpg'
import pencil from '../assets/pencil.png'
import chair2 from '../assets/chair2.png'
import axios from 'axios'
import{Link, useNavigate} from 'react-router-dom'
import Dashboard from './Dashboard'





function Preview() {
  const [portfolio, setPortfolio] = useState({});
  const [skills, setSkills] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    document.title = 'preview';

  
    let id = sessionStorage.getItem("portfolioId")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem("token")}`
    };
    
    axios.get( `https://handy-hire.onrender.com/api/v1/portfolio/${id}`, {headers})
    .then(function (response) {
      
      if(response.data.success === true){
        console.log(response.data);
        setPortfolio(response.data.data);
        setSkills(response.data.data.skills);
        setImages(response.data.data.images);
       console.log(portfolio)
      }

    }).catch((err) => console.log(err));
    

  },[]);


  return (
    <>
    <span><strong><h2 class="" style={{padding: "2rem 0 0 2rem"}}>Portfolio</h2></strong></span>
    <span class="arrow" style={{justifyContent: "space-between"}}>
      <img src={arrowUp} alt="" style={{width:"20px", height:"20px" }}/></span><br/>
      
      <section class="port_section">
        
        <div class="port_section_div"style={{padding: "2rem 0 0 2rem"}} > 
          <button >Add Portfolio Project</button>
                <h6 class="text">Add Details</h6>
                <h6 class="text">Preview</h6> 
         </div>
    
        
          <div class="port_section_div2 preview">
            <h2 ><strong>Preview</strong></h2>
            <span style={{width: "80%"}}><h5>Title</h5>  <div class="button"><img src={pencil} alt="#"/><button>Edit Profile</button></div>
            </span>
          <span style={{width: "80%"}}>  <p>{portfolio.title}</p> <div class="button"><img src={pencil} alt="#"/><button>Edit Profile</button></div>
          </span>
          <div style={{display: "flex", flexWrap: "wrap"}}>
          {
              images.map((image, index) => {
                return(
                  (
                    <div style={{width: "200px", height: "200px", margin: "10px"}}>
                        <img src={image} alt="" style={{width:"100%", height: "100%", objectFit:"cover"}}/>
                    </div> 
                  )
                ) 
              })
            }
          </div>
          
          
            <h5 class="mt-4">Skills</h5>
            <span style={{width: "80%"}}>   
            {
              skills.map((skill, index) => {
                return(
                  (
                    <p>{skill}</p> 
                  )
                ) 
              })
            }
             
              
              <div class="button"><img src={pencil} alt="#"/><button>Edit Profile</button></div>
            </span>
            
           
            <h5 class="mt-4">About</h5>
            <span style={{width: "80%"}}><textarea name="" id="" cols="70" rows="5"
            value={portfolio.about}
            disabled={true}
            >Brief Bio about yourself</textarea><br/>
              <div class="button btn"><img src={pencil} alt="#"/><button>Edit Profile</button></div>
              </span>
            <h5 class="mt-4">Why you should hire me?</h5>
           <span style={{width: "80%"}}> <textarea name="" id="" cols="70" rows="5"
           value={portfolio.details}
           disabled={true}
           ></textarea><br/>
            <div class="button btn"><img src={pencil} alt="#"/><button>Edit Profile</button></div>
            </span> 
            <h5 class="mt-4">Project Description</h5>
           <span style={{width: "80%"}}><textarea name="" id="" cols="70" rows="5"
           value={portfolio.projectDescription}
           disabled={true}
           ></textarea><br/>
            <div class="button btn"><img src={pencil} alt="#"/><button>Edit Profile</button></div>
            </span>
           <span><button class="btn1">Back</button>
           <Link to={'/dashboard'}>
           <button class="btn2">Publish</button>
           </Link>
           </span>      
          </div>
    </section>
    </>
  )
}

export default Preview