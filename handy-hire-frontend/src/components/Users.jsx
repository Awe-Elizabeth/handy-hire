import React from 'react'
import logo from '../assets/handylogo.jpg';
import search from '../assets/search.png';
import home from '../assets/home.png'
import portfolio from '../assets/portfolio.png'
import arrowRight from '../assets/arrow-right.png'
import message from '../assets/message.png'
import setting from '../assets/setting.png'
import support from '../assets/support.png'
import listing from '../assets/listing.png'
import logout from '../assets/logout.png'
// import '../sass/users.scss'

function Users() {
   
  return (
    <>
     <div>
        <header className="header">
        
            <div className="logos"><img src={logo} alt="logo"width="200px"
                height="120px"/></div>
            <div className="header_icons">
                <div className="search_bar" style={{marginRight: "10rem"}}>  <img src={search} alt="search" style={{width:"25px", height:"25px"}} className="p-1"/> <p className="mr-2">What service are you looking for?</p></div>
                <div className="header_img"> <button style={{backgroundColor: "#4862BE",  border: "none", borderRadius: "10px", color: "white", padding: "8px"}}>VIEW ALL</button> <button  style={{backgroundColor: "#4862BE",  border: "none", borderRadius: "10px", color: "white", padding: "6px", marginTop:"10px"}}>EXPORT TO CSV</button></div>
           
                </div>
            
        </header>

    </div>

          <section className="sections">
            <div className="sections_div">
                <div className="side_bar  m-0"><span className="d-flex"><img src={home} alt="" className="img"/><p>Home </p></span><img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"  style={{backgroundColor: "#4862BE", color: "white"}}><span><img src={portfolio} alt="" className="img"/><p>Users</p></span><img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={message} alt="" className="imgs"/><p>Messages</p></span> <img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={message} alt="" className="imgs"/><p>Reports</p></span> <img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={message} alt="" className="imgs"/><p> Transaction</p></span> <img src={arrowRight} alt="" className="images"/></div>
                
                <div className="side_bar"><span><img src={listing} alt="" className="imgs"/><p>Listing</p></span> <img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar" style={{marginTop: "4rem"}}><span><img src={setting} alt="" className="img"/><p>Settings</p></span><img src={arrowRight} alt="" className="images"/></div>
                <div className="side_bar"><span><img src={support} alt="" className="img"/><p>Help Center </p></span><img src={arrowRight} alt="" className="images"/></div>
               
                <div className="side_bar"><span><img src={logout} alt="" className="imgs"/><p>Logout </p></span><img src={arrowRight} alt="" className="images"/></div>
            </div>
             
         <div style={{marginLeft:"3rem"}} className="table_div">
              <h5><strong>USERS</strong></h5>
              <table style={{marginTop: "2rem"}} className="table">
                <thead>
                  <tr>
              
                    <th> Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Activation Status</th>
                    <th>Registered at</th>
                    <th>Last Login</th>
                   
                  </tr> 
                </thead>
                <tbody>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Client</td>
                    <td>inactive</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Carpenter</td>
                    <td>inactive</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>plumber</td>
                    <td>inactive</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>painter</td>
                    <td>active</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Client</td>
                    <td>active</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Electrician</td>
                    <td>active</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Client</td>
                    <td>inactive</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Client</td>
                    <td>inactive</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Client</td>
                    <td>inactive</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Client</td>
                    <td>inactive</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Client</td>
                    <td>inactive</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Client</td>
                    <td>inactive</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Client</td>
                    <td>inactive</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  <tr>
                    <td>Olaoye Ebenezer</td>
                    <td>OlaoyeEbenezer@gmail.com</td>
                    <td>Client</td>
                    <td>inactive</td>
                  <td>12-02-2024 12:02pm</td>
                    <td>10-04-2024 22:00pm</td>
                  </tr>
                  
             
                </tbody>
              </table>
              
         </div>
          
          
        </section>
    </>
  )
}

export default Users