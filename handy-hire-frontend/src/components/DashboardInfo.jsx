import React, { useEffect, useState } from 'react'
import handylogo from '../assets/handylogo.jpg'
import arrowRight from '../assets/arrow-right.png'
import search from '../assets/search.png'
import faq from '../assets/faq.png'
import notification from '../assets/notification.png'
import mary from '../assets/mary.png'
import arrowDown from '../assets/arrow-down.png'
import chair from '../assets/chair.png'
import tunde from '../assets/tunde.png'
import arrowLeft from '../assets/arrow-left.png'
import ratings from '../assets/Ratings.png'
import chair2 from '../assets/chair2.png'
import cupboard from '../assets/cupboard.png'
import board from '../assets/board.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function DashboardInfo() {
    let firstName = sessionStorage.getItem("firstName");
    let lasName = sessionStorage.getItem("lastName");
    const [portfolio, setPortfolio] = useState([]);
    const [images, setImages] = useState([]);
    const [dis, setDis] = useState('block');
    const [callDisplay, setCallDisplay] = useState('none');
    const navigate = useNavigate();
    const myId = sessionStorage.getItem("id");

    useEffect(() => {
        document.title = 'dashboardinfo';
    
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
            if(response.data.data.userId === myId){
                setDis('none');
            }
            console.log(response.data.data.userId)
            //setSkills(response.data.data.skills);
            setImages(response.data.data.images);
        //    console.log(portfolio)
          }
    
        }).catch((err) => console.log(err));
        
    
      },[]);

  return (
    <>
    <div>
        <header className="header">
        
            <div className="logos"><img src={handylogo} alt="logo" style={{width:"200px",
                height:"120px"}}/>
            </div>
            <div className="header_icons">
                <div className="search_bar">  <img src={search} alt="search" style={{width:"25px", height:"25px"}} className="p-1"/> <p className="mr-2">What service are you looking for?</p></div>
                <div className="header_img"> <img src={faq} alt="#" width="50px" height="50px"/> <img src={notification} alt="" style={{width:"50px", height:"50px"}}/> <span><img src={mary} alt=""/> <strong>{firstName} {lasName}</strong><img src={arrowDown} alt=""/></span></div>
            </div>
           
        </header>
    </div>
     <div className="d-flex arrow_div"><img src={arrowLeft} alt="" style={{width:"30px", height:"20px"}}/>
         <p style={{width: "80%"}}>I create chairs according to custom specifications or designs, catering to individual 
            needs and preferences and i also do other carpentry work.</p>
     </div>

     <div className="d-flex arrow_div_heading" style={{justifyContent: "space-between", width: "55%"}}>
        <span className="d-flex"><img src={mary} alt="" style={{width:"50px", height:"50px"}}/>
            <h5 style={{margin: ".7rem .7rem"}}>{portfolio.firstName} {portfolio.lastName}</h5></span>
            <img src={ratings} alt="" style={{width:"100px", height:"25px", marginTop: "1rem"}}/>
            <span>
            <button className='contact' style={{display: dis}}
            onClick={() => callDisplay === 'none'? setCallDisplay('block'): setCallDisplay('none')}
            >Contact me</button>
            <div className="call" style={{display: callDisplay}}>
            <p onClick={() => navigate('/messages') } >Message</p>
            <p className="">call </p> </div>
            </span>
            
        
     </div>

     <section className="d-flex info_section">
         <div className="info_section_div">
            <img src={portfolio.defaultImage} alt="" className="img"/>
            <p style={{margin: "2rem 0 0 1rem"}}><strong>My Portfolio</strong></p>
            <div className="info_img d-flex">
                {
                    images.map((image, index) => {
                        return(
                            (
                                <div style={{height: "150px", width: "200px", margin: "5px"}}>
                                    <img src={image} alt="" style={{width: "100%", height: "100%"}}/>
                                </div>
                                
                            )
                        )
                    })
                }
                {/* <img src={chair} alt=""/>
                <img src={chair2} alt=""/>
                <img src={cupboard} alt=""/>
                <img src={board} alt=""/> */}
            </div>
            <p style={{marginLeft: "1rem"}}>See Projects (3) <img src={arrowRight} alt="" style={{marginLeft: "1rem"}}/></p>
            <span className="d-flex" style={{justifyContent: "space-between"}}><p><strong>What people loved about the artisan
                </strong></p> <p><strong>See all reviews</strong> </p></span>
               <div style={{boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)", padding: "1rem"}}>
                 <div className="d-flex" style={{justifyContent: "space-between", width: "500px"}}>
                    <span className="d-flex"><img src={mary} alt="" style={{width:"30px", height:"25px"}}/>
                        <p>Adebimpe O</p></span>
                    <p>Lagos Nig</p>
                    <img src={ratings} alt="" style={{width:"100px", height:"25px"}}/>
                </div>
                <p style={{width: "600px"}}>PERFECT!, Great communication, very easy to deal with. Work was done quickly and 
                    looks amazing and he ensures customers satisfaction.....</p>
             </div>
         </div>
          <div className="info_text">
            <h5 style={{textAalign: "center"}}>About</h5>
            <p> {portfolio.about}</p>

                 <h5 style={{textAalign: "center"}}>Why You should Hire me</h5>
                 <p>{portfolio.details}
                    </p>
                    <h5 style={{textAalign: "center"}}>Short description about the service i provide</h5>
                    <p>
                        {portfolio.projectDescription}
                        {/* <ul>
                        <li>Custom made furniture pieces</li>
                        <li> Repair and restoration services</li>
                        <li>  Installation of fitting doors, cabinets and windows</li>
                    </ul> */}
                    </p>
                    

          </div>

          </section>
    </>

    
  )
}

export default DashboardInfo;