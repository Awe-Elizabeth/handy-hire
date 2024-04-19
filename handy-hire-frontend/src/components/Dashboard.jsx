import React, { useContext, useEffect, useState } from 'react'
import handylogo from '../assets/handylogo.jpg'
import home from '../assets/home.png'
import portfolio from '../assets/portfolio.png'
import arrowRight from '../assets/arrow-right.png'
import search from '../assets/search.png'
import faq from '../assets/faq.png'
import notification from '../assets/notification.png'
import mary from '../assets/mary.png'
import arrowDown from '../assets/arrow-down.png'
import message from '../assets/message.png'
import listing from '../assets/listing.png'
import setting from '../assets/setting.png'
import support from '../assets/support.png'
import logout from '../assets/logout.png'
import emoji from '../assets/emoji.png'
import image13 from '../assets/image-13.png'
import chair from '../assets/chair.png'
import tunde from '../assets/tunde.png'
import john from '../assets/john.png'
import rail from '../assets/rail.png'
import plumbing from '../assets/plumbing.png'
import door from '../assets/door.png'
import food from '../assets/food.png'
import cleaning from '../assets/cleaning.png'
import mechanic from '../assets/mechanic.png'
import woman from '../assets/woman.png'
import house from '../assets/house.png'
import repair from '../assets/repair.png'
import toilet from '../assets/toilet.png'
import dish from '../assets/dish.png'
import electrician from '../assets/electrician.png'
import axios from 'axios'
import UserContext from '../context/userContex'
import { Link } from 'react-router-dom'


function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [userData, setUserData] = useState([]);
  const [activeId, setActiveId] = useState('');
  const {setUser, user} = useContext(UserContext);
  var firstName = sessionStorage.getItem("firstName");
  var lastName = sessionStorage.getItem("lastName");
  
  
    useEffect(() => {
      document.title = 'dashboard';
  
      let length;
      const headers = {
        'Content-Type': 'application/json',
      };
      
      axios.get( 'https://handy-hire.onrender.com/api/v1/categories', {headers})
      .then(function (response) {
        
        if(response.data.success === true){
          setCategories(response.data.data)
          length = categories.length
          console.log(response.data.data) 
        }
  
      }).catch((err) => console.log(err));
      
  
    },[length]);

    const activeStyle = {
    
      backgroundColor: "#4862BE",

    }

    const handleDivClick = (id) => {
      setActiveId(id)

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      };
      
      axios.get( `https://handy-hire.onrender.com/api/v1/portfolio/getbycategory/${id}`, {headers})
      .then(function (response) {
        console.log(response);
        if(response.data.success === true){
          setUserData(response.data.data)
          console.log(response.data.data) 
        }
  
      }).catch((err) => console.log(err));
    }

  


  return (

    <div>
        <div className="header">
        
            <div className="logos"><img src={handylogo} alt="logo"width="200px"
                height="120px"/>
            </div>
            <div className="header_icons">
                <div className="search_bar">  <img src={search} alt="search" width="25px" height="25px" className="p-1"/> <p className="mr-2">What service are you looking for?</p></div>
                <div className="header_img"> <img src={faq} alt="#" width="50px" height="50px"/> <img src={notification} alt=""  width="50px" height="50px"/> <span><img src={mary} alt=""/> <Link style={{textDecoration: 'none', color: 'black'}} to={'/profile'}><strong>{firstName ? firstName : 'Mary'}  {lastName ? lastName : 'Maxwell'}</strong></Link><img src={arrowDown} alt=""/></span>
            </div>
            
        </div>
        </div>

    <section className="sections">
            <div className="sections_div">
                <div className="side_bar  m-0" style={{backgroundColor: "#4862BE"}}><span className="d-flex"><img src={home} alt="" className="img"/><p>Home </p></span><img src={arrowRight} alt="" className="images"/></div>
                <Link to={'/portfoliobrief'} style={{textDecoration: 'none', color: 'black'}}><div className="side_bar"><span><img src={portfolio} alt="" className="img"/><p>Portfolio </p></span><img src={arrowRight} alt="" className="images"/></div></Link>
                
                <div className="side_bar"><span><img src={message} alt="" className="imgs"/><p>Messages</p></span> <img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={message} alt="" className="imgs"/><p>Reports</p></span> <img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={listing} alt="" className="imgs"/><p>Listing</p></span> <img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar" style={{marginTop: "4rem"}}><span><img src={setting} alt="" className="img"/><p>Settings</p></span><img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={support} alt="" className="img"/><p>Help Center </p></span><img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={logout} alt="" className="imgs"/><p>Logout </p></span><img src={arrowRight} alt="" className="images"/></div>
            </div>
         
           <div className="Dashboard">
            <h4 className="text"><strong>Welcome to HandyHire, {firstName ? firstName : 'Mary'} </strong><img src={emoji} alt=""/></h4>
            <div className="Dashboard_header">
                <span><h4>RECOMMENDED FOR YOU</h4>
                    <h6>Get matched with an artisan</h6>
                <button className="button_one">Create a brief</button></span>
                <span>
                    <h4>CLIENT RECOMMENDATION</h4>
                    <h6>Tailor HandyHire to your needs.</h6>
                    <button className="button_one">Add your info</button>
                </span>
            </div>
            
           
             <div className="categories">
                <h4><strong>Explore Popular Categories on HandyHire</strong></h4>
                <span>Show All <img src={image13} alt=""/><img src={arrowRight} alt=""/></span>
             </div>

             <div className="cat d-flex">
              <div className="feature p-1">
                {
                  categories.map((category, index) => {
                    return(
                      (
                    
                        <div className={ category.id == activeId ? "p-1 m-0 active" : "p-1 m-0"} key={index} value={category.id}
                        onClick={() => {handleDivClick(category.id)

                        }}
                        ><span><p >{category.name}</p></span></div>
                      ))
                    
                  })
                }
                {/* <div className="p-1 m-0" style={{backgroundColor: "#4862BE"}}><p>Construction</p></div> */}
                
               {/* <div><span><p>Manufacturing </p></span></div>
                <div><span><p>Food Services and Hospitality</p></span></div>
                <div><p>  Janitorial and Cleaning Services</p></div>
                <div><p>  Baking</p></div>
                <div><p>  painting</p></div> */}
               
               </div>
               <div>
                <div className="card cards">
                  <img src={chair} className="card-img-top" alt="..." style={{height: "200px"}}/>
                  <div className="card-body">
                    <h5 className="card-title"><img src={tunde} alt=""/>Tunde</h5>
                    <p className="card-text" style={{width: "250px"}}>I create chairs according to custom specifications or designs, catering to individual 
                     </p>
                   
                  </div>
                </div>
               </div>
               <div className="card cards">
                <img src={electrician} className="card-img-top" alt="..."  style={{height: "200px"}}/>
                <div className="card-body">
                  <h5 className="card-title"><img src={john} alt=""/>John</h5>
                  <p className="card-text" style={{width: "320px"}}>I create chairs according to custom specifications or designs,</p>
                 
                </div>
              </div>
             </div>
          </div>
          
    </section>
        <div className="popular">
          <h4><strong>Most Popular Categories</strong></h4>
          <span>Show All <img src={image13} alt=""/><img src={arrowRight} alt=""/></span>
       </div>
       <div className="popular_categories d-flex">
          <div className="card cards" style={{width: "270px"}}>
          <img src={rail} className="card-img-top" alt="..."  style={{height: "200px", width: "270px"}}/>
          <div className="card-body">
            <h5 className="card-title"><img src={mary} alt=""/>Kate</h5>
            <p className="card-text" style={{width: "320px"}}>I create chairs according to custom specifications or designs,</p>
           
          </div>
          </div>
          <div className="card cards" style={{width: "270px"}}>
            <img src={plumbing} className="card-img-top" alt="..."  style={{height: "200px", width: "270px"}}/>
            <div className="card-body">
              <h5 className="card-title"><img src="images/tunde.png" alt=""/>Mike</h5>
              <p className="card-text" style={{width: "320px"}}>I create chairs according to custom specifications or designs,</p>
             
            </div>
          </div>
          <div className="card cards" style={{width: "270px"}}>
            <img src={door} className="card-img-top" alt="..."  style={{height: "200px", width: "270px"}}/>
            <div className="card-body">
              <h5 className="card-title"><img src={john} alt=""/>John</h5>
              <p className="card-text" style={{width: "320px"}}>I create chairs according to custom specifications or designs,</p>
             
            </div>
          </div>
          <div className="card cards" style={{width: "270px"}}>
            <img src={food} className="card-img-top" alt="..."  style={{height: "200px", width: "270px"}}/>
            <div className="card-body">
              <h5 className="card-title"><img src={mary} alt=""/>Grace</h5>
              <p className="card-text" style={{width: "320px"}}>I create chairs according to custom specifications or designs,</p>
             
            </div>
          </div>
       </div>
        <div className="popular">
          <h4><strong>Get Inspired by Work done on HandyHire</strong></h4>
          <span>Show All <img src={image13} alt=""/><img src={arrowRight} alt=""/></span>
       </div>
       <div className="inspired">
          <div><img src={cleaning} alt=""/></div>
          <div><img src={mechanic} alt=""/></div>
          <div><img src={woman} alt=""/></div>
          <div><img src={house} alt=""/></div>
          <div className="img"><img src={repair} alt=""/></div>
          <div className="img"><img src={toilet} alt=""/></div>
          <div className="img"><img src={dish} alt=""/></div>
          <div className="img"><img src={food} alt=""/></div>
       </div>
   </div>
    
  )
}

export default Dashboard;