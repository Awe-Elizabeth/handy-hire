import React from 'react'
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

function DashboardInfo() {
  return (
    <>
    <div>
        <header className="header">
        
            <div className="logos"><img src={handylogo} alt="logo" style={{width:"200px",
                height:"120px"}}/>
            </div>
            <div className="header_icons">
                <div className="search_bar">  <img src={search} alt="search" style={{width:"25px", height:"25px"}} className="p-1"/> <p className="mr-2">What service are you looking for?</p></div>
                <div className="header_img"> <img src={faq} alt="#" width="50px" height="50px"/> <img src={notification} alt="" style={{width:"50px", height:"50px"}}/> <span><img src={mary} alt=""/> <strong>Mary Maxwell</strong><img src={arrowDown} alt=""/></span></div>
            </div>
           
        </header>
    </div>
     <div className="d-flex arrow_div"><img src={arrowLeft} alt="" style={{width:"30px", height:"20px"}}/>
         <p style={{width: "80%"}}>I create chairs according to custom specifications or designs, catering to individual 
            needs and preferences and i also do other carpentry work.</p>
     </div>

     <div className="d-flex arrow_div_heading" style={{justifyContent: "space-between", width: "55%"}}>
        <span className="d-flex"><img src={tunde} alt="" style={{width:"50px", height:"50px"}}/>
            <h5 style={{margin: ".7rem .7rem"}}>Tunde O</h5></span>
            <img src={ratings} alt="" style={{width:"100px", height:"25px", marginTop: "1rem"}}/>
        <button>Contact me</button>
     </div>

     <section className="d-flex info_section">
         <div className="info_section_div">
            <img src={chair} alt="" className="img"/>
            <p style={{margin: "2rem 0 0 1rem"}}><strong>My Portfolio</strong></p>
            <div className="info_img d-flex">
                <img src={chair} alt=""/>
                <img src={chair2} alt=""/>
                <img src={cupboard} alt=""/>
                <img src={board} alt=""/>
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
            <p> I’m a skilled carpenter with a passion for creating beautiful and functional furniture, from crafting chairs that provide comfort and style, to building wardrobes that maximize storage spaces, I love bringing wood to life. With years of experience and attention to detail, I take pride in delivering
                 top-notch craftmanship. Let’s turn your furniture into reality!</p>

                 <h5 style={{textAalign: "center"}}>Why You should Hire me</h5>
                 <p>I bring expertise and craftmanship

                    I have the skill of transforming raw materials into functional aesthetically furniture pieces
                    
                    I construct custom -made pieces and i also repair and restore existing furniture.
                    
                    I provide professional work and furniture that will stand the test of time,
                    </p>
                    <h5 style={{textAalign: "center"}}>Short description about the service i provide</h5>
                    <ul>
                        <li>Custom made furniture pieces</li>
                        <li> Repair and restoration services</li>
                        <li>  Installation of fitting doors, cabinets and windows</li>
                    </ul>

          </div>

          </section>
    </>

    
  )
}

export default DashboardInfo;