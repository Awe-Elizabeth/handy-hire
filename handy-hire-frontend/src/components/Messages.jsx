import React from 'react'
import arrowUp from '../assets/arrow-up.jpg'
import search from '../assets/search.png'
import filter from "../assets/Filter.png"
import amir from "../assets/Amir.png"
import rating from "../assets/rating.png"
import mary from "../assets/mary.png"
import first from "../assets/first.png"
import email from "../assets/Email.png"
import more from "../assets/more.png"
import forward from "../assets/forward.png"
import { Link } from 'react-router-dom'


function Messages() {
  return (
   <>
    <span><strong><h2 className="" style={{padding: "2rem 0 0 2rem"}}>Messages</h2></strong></span>
    <span className="arrow d-flex" style={{justifyContent: "space-between", width: "85%"}} >
      <span className="d-flex">
        <Link to={'/dashboard'}><img src={arrowUp} alt="" style={{width:"20px", height:"20px" }}/></Link>
         
        <div className="search_bar" style={{marginLeft: "1rem"}}>  <img src={search} alt="search" width="25px" height="25px" className="p-1"/> <p className="mr-2">Type to search</p></div> <img src={filter} alt=""  style={{width: "40px", height: "40px"}}/>
        </span>
       <span className="d-flex" style={{justifyContent: "space-between", width: "30%"}}>
        <img src={amir} alt="" width="30px" height="30px" />
          <span><p style={{marginLeft: "1rem"}}>Pelumi Buari</p>
            <p>Last seen: 1hour ago</p></span>
         <img src={rating} alt="" style={{width: "40px", height: "40px"}}/> <img src={more} alt="" style={{width: "40px", height: "40px"}}/>
       </span> 
      </span>
      
      
      <section className="chatbox">
        <div className="Messages">
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Pelumi Buari</p>
                <p>Hi! Sure, i’d love......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt=""style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
              <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
              
              
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             <div className="message">
              <img src={mary} alt="" className="img"/>
              <span>
                <p>Fatima Amir</p>
              <p>Hello, can we pleas.......</p>
              </span>
              <span>
                <p>8 hours</p>
                <img src={first} alt="" style={{marginRight: "1rem"}}/><img src={email} alt="" style={{width:"17px", height:"15px"}}/><img src={rating} alt="" className="image"/>
              </span>
             </div>
             
             

        </div>
        <p style={{position: "relative", left: "30%"}}>For added safety and your protection, keep payment and communication within HandyHire.</p>
    
       <div className="area">
          <textarea name="" id="" cols="60" rows="3" placeholder='Type a message'> </textarea><img src={forward} alt=""  style={{marginLeft: "1rem", height:"40px"}}/>
        </div>
      
    </section>
   </>
  )
}

export default Messages