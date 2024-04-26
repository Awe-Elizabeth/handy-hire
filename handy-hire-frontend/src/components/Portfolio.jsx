import React from 'react'
import handylogo from '../assets/handylogo.jpg'
import search from '../assets/search.png'
import faq from '../assets/faq.png'
import notification from '../assets/notification.png'
import mary from '../assets/mary.png'
import chair from '../assets/chair.png'
import tunde from '../assets/tunde.png'
import arrowLeft from '../assets/arrow-left.png'
import ratings from '../assets/Ratings.png'
import chair2 from '../assets/chair2.png'
import cupboard from '../assets/cupboard.png'
import board from '../assets/board.png'
import furniture from '../assets/furniture.png'
import chair3 from '../assets/chair3.png'
// import '../sass/portfolio.scss'

function Portfolio() {
  return (
   <>
    <div>
        <header className="header">
        
            <div className="logos"><img src={handylogo} alt="logo" style={{width:"200px",
                height:"120px"}}/></div>
            <div className="header_icons">
                <div className="search_bar">  <img src={search} alt="search" style={{width:"25px", height:"25px"}} className="p-1"/> <p className="mr-2">What service are you looking for?</p></div>
                <div className="header_img"> <img src={faq} alt="#"  style={{width:"50px", height:"50px"}}/> <img src={notification} alt=""   style={{width:"50px", height:"50px"}}/> <span><img src={mary} alt=""/> <strong>Mary Maxwell</strong><img src="images/arrow down.png" alt=""/></span></div>
            </div>
            
        </header>
    </div>
    <span><img src={arrowLeft} alt="" style={{paddingLeft: "2rem"}}/></span>

    <section className="portfolio_section">
        <div className="portfolio_section_heading" style={{justifyContent: "space-between", width: "55%"}}>
            <span className="d-flex"><img src={tunde} alt="" style={{width:"50px", height:"50px"}} />
                <h5 style={{margin:".7rem .7rem"}}>Tunde O</h5></span>
           <h5 style={{marginTop: "1rem"}}>Portfolio</h5> <button>Contact me</button>
         </div>
         <div className="portfolio_img">
            <span><img src={chair3} alt=""/> <p><img src={ratings} alt="" style={{width:"100px", height:"25px", style:"margin-left: 6rem"}}/></p></span>
           <span> <img src={chair2} alt="" className="img"/> <p><img src={ratings} alt=""style={{width:"100px", height:"25px", style:"margin-left: 6rem"}}/></p></span>
            <span><img src={furniture} alt="" className="img"/> <p><img src={ratings} alt=""style={{width:"100px", height:"25px", style:"margin-left: 6rem"}}/></p></span>
           <span> <img src={cupboard} alt="" className="img"/> <p><img src={ratings} alt=""style={{width:"100px", height:"25px", style:"margin-left: 6rem"}}/></p></span>
           <span> <img src={board} alt="" className="img"/> <p><img src={ratings} alt=""style={{width:"100px", height:"25px", style:"margin-left: 6rem"}}/></p></span>
           <span> <img src={chair} alt="" className="img"/> <p><img src={ratings} alt=""style={{width:"100px", height:"25px", style:"margin-left: 6rem"}}/></p></span>
         </div>
    </section>
   </>
  )
}

export default Portfolio